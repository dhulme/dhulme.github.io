import{V as f,a as p}from"./chunks/theme.f769f6fe.js";import{d as u,o as t,c as a,x as s,t as i,V as b,A as r,n as g,_,e as h,F as v,K as k,D as l,b as o,z as d,a as P}from"./chunks/framework.f5290017.js";const j={class:"profile"},x={class:"avatar"},z=["href"],V=["src","alt"],S={class:"data"},I={class:"name"},T={key:0,class:"affiliation"},C={key:1,class:"at"},$={key:1,class:"desc"},M=["href"],N=u({__name:"ProjectsItem",props:{size:null,member:null},setup(e){return(n,m)=>(t(),a("article",{class:g(["VPTeamMembersItem",[e.size??"medium"]])},[s("div",j,[s("figure",x,[s("a",{href:`/${e.member.link}/`,target:"_blank"},[s("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,V)],8,z)]),s("div",S,[s("h1",I,i(e.member.name),1),e.member.title||e.member.org?(t(),a("p",T,[e.member.title?(t(),a("div",{key:0,class:"title",style:b({marginBottom:"0.25rem"})},i(e.member.title),5)):r("",!0),e.member.title&&e.member.org?(t(),a("span",C," @ ")):r("",!0)])):r("",!0),e.member.desc?(t(),a("p",$,i(e.member.desc),1)):r("",!0),s("a",{href:`pathname:///${e.member.link}/`},"dhulme.uk/"+i(e.member.link),9,M)])])],2))}});const B=_(N,[["__scopeId","data-v-793c9ebe"]]),D={class:"container"},w=u({__name:"Projects",props:{size:null,members:null},setup(e){const n=e,m=h(()=>[n.size??"medium",`count-${n.members.length}`]);return(y,A)=>(t(),a("div",{class:g(["VPTeamMembers",o(m)])},[s("div",D,[(t(!0),a(v,null,k(e.members,c=>(t(),a("div",{key:c.name,class:"item"},[l(B,{size:e.size,member:c},null,8,["size","member"])]))),128))])],2))}});const F=_(w,[["__scopeId","data-v-449c22ec"]]),K=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"projects/index.md"}'),O={name:"projects/index.md"},L=Object.assign(O,{setup(e){const n=[{avatar:"/images/spotify-playlists-logo.svg",name:"Spotify Playlists",title:"Spotify playlist manager for power users",link:"spotify-playlists"},{avatar:"/images/money-manager-logo.png",name:"Money Manager",title:"Desktop application for managing your personal finances",link:"money-manager"},{avatar:"/images/creation-logo.jpg",name:"Creation",title:"10 track instrumental album inspired by Creation",link:"creation"},{avatar:"/images/standup-logo.svg",name:"Standup",title:"Tool for running daily stand-ups",link:"standup"},{avatar:"/images/multitrack-player-logo.svg",name:"Multitrack Player",title:"Play multitracks in the browser",link:"multitrack-player"},{avatar:"/images/spotify-stats-logo.svg",name:"Spotify Stats",title:"Insights on your Spotify playlists",link:"spotify-stats"}];return(m,y)=>(t(),a("div",null,[l(o(p),null,{default:d(()=>[l(o(f),null,{title:d(()=>[P(" Projects ")]),_:1}),l(F,{members:n})]),_:1})]))}});export{K as __pageData,L as default};
