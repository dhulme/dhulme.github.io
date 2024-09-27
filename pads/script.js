function getHpfFrequency(value) {
  const minValue = 20;
  const maxValue = 20000;
  return (
    Math.exp((1 - value) * Math.log(maxValue / minValue)) *
    minValue
  );
}

function getLpfFrequency(value) {
  const minValue = 20;
  const maxValue = 20000;
  return (
    Math.exp((1 - value) * Math.log(maxValue / minValue)) *
    minValue
  );
}

navigator.wakeLock.request('screen');

document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.getElementById('audio');
  const padTypeSelect = document.getElementById('padTypeSelect');
  const padKeySelect = document.getElementById('padKeySelect');
  const bassOctaveSelect = document.getElementById('bassOctaveSelect');
  const padLpfControl = document.getElementById('padLpfControl');
  const bassVolumeControl = document.getElementById('bassVolumeControl');
  const bassLpfControl = document.getElementById('bassLpfControl');
  const padVolumeControl = document.getElementById('padVolumeControl');
  const playButton = document.getElementById('playButton');
  const bassButton = document.getElementById('bassButton');

  const audioContext = new AudioContext();

  const masterGain = audioContext.createGain();
  masterGain.gain.value = 0.5;
  masterGain.connect(audioContext.destination);

  const padSource = audioContext.createMediaElementSource(audioElement);

  const padLpf = audioContext.createBiquadFilter();
  padLpf.type = 'lowpass';
  padLpf.frequency.value = getLpfFrequency(padLpfControl.value);

  const padGain = audioContext.createGain();
  padGain.gain.value = 1;

  const bassLpf = audioContext.createBiquadFilter();
  bassLpf.type = 'lowpass';
  bassLpf.frequency.value = getLpfFrequency(bassLpfControl.value);

  padSource.connect(padLpf);
  padLpf.connect(padGain);
  padGain.connect(masterGain);

  function resumeAudioContext() {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  let playing = false;
  playButton.addEventListener('click', () => {
    const audioSrc = padTypeSelect.value + '/' + padKeySelect.value;
    if (!audioElement.src.includes(audioSrc)) {
      audioElement.src = audioSrc;
      resumeAudioContext();
      playButton.classList.add('selected');
      audioElement.play();
      playing = true;
    } else {
      if (playing) {
        playButton.classList.remove('selected');
        audioElement.pause();
      } else {
        playButton.classList.add('selected');
        audioElement.play();
      }
      playing = !playing;
    }
  });

  let bassEnabled = false;
  bassButton.addEventListener('click', async () => {
    bassEnabled = !bassEnabled;
    resumeAudioContext();

    if (bassEnabled) {
      bassButton.classList.add('selected');
    } else {
      bassButton.classList.remove('selected');
    }

    const midi = await navigator.requestMIDIAccess();
    midi.inputs.forEach((input) => {
      input.onmidimessage = (message) => {
        const [command, note, velocity] = message.data;
        if (!note) return;
        if (command === 144 && velocity > 0) {
          playNote(note);
        } else if (command === 128 || (command === 144 && velocity === 0)) {
          stopNote(note);
        }
      };
    });
  });

  padLpfControl.addEventListener('input', () => {
    padLpf.frequency.value = getLpfFrequency(padLpfControl.value);
  });

  padVolumeControl.addEventListener('input', () => {
    padGain.gain.value = 1 - padVolumeControl.value;
  });

  bassVolumeControl.addEventListener('input', () => {
    bassGain.gain.value = 1 - bassVolumeControl.value;
  });

  bassLpfControl.addEventListener('input', () => {
    bassLpf.frequency.value = getLpfFrequency(bassLpfControl.value);
  });

  audioElement.addEventListener('timeupdate', () => {
    const buffer = 3;

    if (audioElement.duration - audioElement.currentTime <= buffer) {
      audioElement.currentTime = 10;
    }
  });

  function midiNoteToFrequency(note) {
    return (
      440 *
      Math.pow(2, (note - 69 + (Number(bassOctaveSelect.value) - 1) * 12) / 12)
    );
  }

  const oscillator = audioContext.createOscillator();
  const bassAdsr = audioContext.createGain();
  bassAdsr.gain.value = 0;
  oscillator.type = 'sawtooth';

  const bassGain = audioContext.createGain();
  bassGain.gain.value = 1;

  oscillator.connect(bassAdsr);
  bassAdsr.connect(bassLpf);
  bassLpf.connect(bassGain);
  bassGain.connect(masterGain);

  oscillator.start();

  const releaseTime = 0.1;
  const attackTime = 0.1;

  const notes = [];

  function getMaxNote() {
    return 60 - (Number(bassOctaveSelect.value)) * 12
  }

  function updateOscillatorFrequency() {
    const lowestNote = Math.min(...notes);
    if (lowestNote < getMaxNote()) {
      oscillator.frequency.setValueAtTime(
        midiNoteToFrequency(lowestNote),
        audioContext.currentTime
      );
    }
  }

  function playNote(note) {
    if (!bassEnabled) return;

    notes.push(note);
    if (note >= getMaxNote()) return;

    const currentTime = audioContext.currentTime;
    bassAdsr.gain.cancelScheduledValues(currentTime);
    bassAdsr.gain.setValueAtTime(bassAdsr.gain.value, currentTime);
    bassAdsr.gain.linearRampToValueAtTime(1, currentTime + attackTime);
    updateOscillatorFrequency();
  }

  function stopNote(note) {
    notes.splice(notes.indexOf(note), 1);
    const currentTime = audioContext.currentTime;

    if (notes.length === 0) {
      bassAdsr.gain.cancelScheduledValues(currentTime);
      bassAdsr.gain.setValueAtTime(bassAdsr.gain.value, currentTime);
      bassAdsr.gain.linearRampToValueAtTime(0, currentTime + releaseTime);
    } else {
      updateOscillatorFrequency();
    }
  }
});
