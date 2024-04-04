import{a as b,S as w,i}from"./assets/vendor-550cebad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function p(a,t){const r="https://pixabay.com/api/",o={key:"43182397-b36e0d0e4f4165f4a1d81192e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await b.get(r,{params:o})).data}const S=document.querySelector(".gallery");function m(a){const t=a.map(r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
            src="${r.webformatURL}"
            alt="${r.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${r.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${r.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${r.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${r.downloads}</li>
     </ul>
  </a>
</li>`).join("");S.insertAdjacentHTML("beforeend",t),q.refresh()}const q=new w(".gallery a",{captionsData:"alt",captionDelay:250});let f=0,n,d=1;const v=15,h=document.querySelector(".loader"),E=document.querySelector(".form"),M=document.querySelector(".gallery"),g=document.querySelector(".load-btn");E.addEventListener("submit",async a=>{if(a.preventDefault(),c(),n=a.target.elements.query.value.trim(),M.innerHTML="",d=1,!n){c(),i.error({title:"Error",message:"Sorry, please write correct query!",position:"topRight"});return}y();try{const t=await p(n,d);if(f=Math.ceil(t.totalHits/v),t.hits.length===0){l(),i.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"});return}m(t.hits)}catch{c(),l(),i.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"})}L(),l()});g.addEventListener("click",P);async function P(){y();const a=await p(n,++d);m(a.hits),L(),l()}function y(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}function $(){g.classList.remove("hidden")}function c(){g.classList.add("hidden")}function L(){d>=f?(c(),i.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):$()}
//# sourceMappingURL=commonHelpers.js.map
