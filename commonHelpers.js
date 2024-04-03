import{S as m,i as c}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(a){const r="https://pixabay.com/api/?",s="43182397-b36e0d0e4f4165f4a1d81192e",o=new URLSearchParams({key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}u("cats");const p=document.querySelector(".gallery");function g(a){const r=a.map(s=>`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
            src="${s.webformatURL}"
            alt="${s.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${s.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${s.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${s.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${s.downloads}</li>
     </ul>
  </a>
</li>`).join("");p.innerHTML=r,f.refresh()}const f=new m(".gallery a",{captionsData:"alt",captionDelay:250});let n;const d=document.querySelector(".loader"),h=document.querySelector(".form");document.querySelector(".gallery");h.addEventListener("submit",a=>{if(a.preventDefault(),n=a.target.elements.query.value.trim(),!n){c.error({title:"Error",message:"Sorry, please write correct query!",position:"topRight"});return}y(),u(n).then(r=>{if(r.hits.length===0){l(),c.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"});return}else l(),g(r.hits)}).catch(r=>{l()})});function y(){d.classList.remove("hidden")}function l(){d.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
