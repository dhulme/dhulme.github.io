import{_ as s,E as a,c as e,J as t,a3 as p,o}from"./chunks/framework.C3ruvn3z.js";const m=JSON.parse('{"title":"Power Plan AutoHotkey Scripts for Ableton Live","description":"","frontmatter":{"date":"2020-06-03T00:00:00.000Z","title":"Power Plan AutoHotkey Scripts for Ableton Live"},"headers":[],"relativePath":"blog/power-plan-autohotkey-scripts.md","filePath":"blog/power-plan-autohotkey-scripts.md"}'),r={name:"blog/power-plan-autohotkey-scripts.md"},i=p(`<p>Being a Windows guy is a lot cheaper than buying Macs, but it definitely isn&#39;t as straightforward to get everything working correctly for live musical performance. I wrote <a href="./running-keys-ableton-windows">an article in 2018</a> about running Ableton Live on Windows which addressed a lot of the issues, but I&#39;ve recently discovered something that was ruining Live&#39;s performance - not using the &#39;High Performance&#39; power plan in Windows. It turns out this was leading to audio pops and dropouts and other performance issues. After some investigation with Ableton Support, using the high performance power plan resolved the issue. I could just leave the high performance plan on all the time, but this would waste energy. For a while I was manually changing the power plan when I ran Live, but then I realised this could be automated.</p><p>Below is an <a href="https://www.autohotkey.com/" target="_blank" rel="noreferrer">AutoHotkey</a> script (also on <a href="https://gist.github.com/dhulme/66c072cc2fec53253adbe092c61c348c" target="_blank" rel="noreferrer">Gist</a>) that checks when Ableton Live is running and changes the power plan to &#39;High performance&#39;. Once it&#39;s closed, it sets it back to &#39;Balanced&#39;. If you want to use with another app or power plan, you can change these in the script.</p><p>It works really well for me and has solved my performance issues whilst not wasting energy! 😃 This was my first AutoHotkey script, and although it works, I&#39;m sure it could be improved!</p><div class="language-autohotkey vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">autohotkey</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#Persistent</span></span>
<span class="line"><span>PowerPlan := &quot;balanced&quot;</span></span>
<span class="line"><span>SetTimer, Check, 300000 ; Checks every 5 minutes</span></span>
<span class="line"><span>return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Check:</span></span>
<span class="line"><span>; Change the process name to use with another app</span></span>
<span class="line"><span>if (ProcessExist(&quot;Ableton Live 10 Standard.exe&quot;)) {</span></span>
<span class="line"><span>	if (PowerPlan = &quot;balanced&quot;) {</span></span>
<span class="line"><span>		; Change these IDs to use another power plan (find IDs by running \`powercfg -list\` in a terminal)</span></span>
<span class="line"><span>		Run powercfg /s 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c</span></span>
<span class="line"><span>		PowerPlan := &quot;performance&quot;</span></span>
<span class="line"><span>	}	</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>	if (PowerPlan = &quot;performance&quot;) {</span></span>
<span class="line"><span>		Run powercfg /s 381b4222-f694-41f0-9685-ff5bb260df2e</span></span>
<span class="line"><span>		PowerPlan := &quot;balanced&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ProcessExist(i) {</span></span>
<span class="line"><span>    Process, Exist, % i</span></span>
<span class="line"><span>    return ErrorLevel</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4);function l(c,h,u,d,w,g){const n=a("BlogPostHeader");return o(),e("div",null,[t(n),i])}const b=s(r,[["render",l]]);export{m as __pageData,b as default};
