import{a as b,S as w,i}from"./assets/vendor-550cebad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function p(s,t){const r="https://pixabay.com/api/",a={key:"43182397-b36e0d0e4f4165f4a1d81192e",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await b.get(r,{params:a})).data}const S=document.querySelector(".gallery");function m(s){const t=s.map(r=>`<li class="gallery-item">
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
</li>`).join("");S.insertAdjacentHTML("beforeend",t),q.refresh()}const q=new w(".gallery a",{captionsData:"alt",captionDelay:250});let h=0,n,d=1;const v=15,y=document.querySelector(".loader"),E=document.querySelector(".form"),M=document.querySelector(".gallery"),g=document.querySelector(".load-btn");E.addEventListener("submit",async s=>{if(s.preventDefault(),c(),n=s.target.elements.query.value.trim(),M.innerHTML="",d=1,!n){c(),i.error({title:"Error",message:"Sorry, please write correct query!",position:"topRight"});return}f();try{const t=await p(n,d);if(h=Math.ceil(t.totalHits/v),t.hits.length===0){l(),i.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"});return}m(t.hits)}catch{c(),l(),i.error({title:"Error",position:"topRight",message:"Sorry, your query is not correct!"})}L(),l()});g.addEventListener("click",R);async function R(){f();const s=await p(n,++d);m(s.hits),L(),l();const r=document.querySelector(".rectangle").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}function f(){y.classList.remove("hidden")}function l(){y.classList.add("hidden")}function $(){g.classList.remove("hidden")}function c(){g.classList.add("hidden")}function L(){d>=h?(c(),i.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):$()}
//# sourceMappingURL=commonHelpers.js.map
