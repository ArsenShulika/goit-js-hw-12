import{a as b,S as w,i as d}from"./assets/vendor-2cfd16ce.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function u(o,a){const t="https://pixabay.com/api/?",s={key:"43182397-b36e0d0e4f4165f4a1d81192e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a},e=`${t}${s}`;return(await b.get(e,{params:s})).data}const S=document.querySelector(".gallery");function f(o){const a=o.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
            src="${t.webformatURL}"
            alt="${t.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${t.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${t.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${t.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${t.downloads}</li>
     </ul>
  </a>
</li>`).join("");S.insertAdjacentHTML("beforeend",a),q.refresh()}const q=new w(".gallery a",{captionsData:"alt",captionDelay:250});let h=0,i,l=1;const $=15,L=document.querySelector(".loader"),v=document.querySelector(".form"),M=document.querySelector(".gallery"),m=document.querySelector(".load-btn");v.addEventListener("submit",async o=>{y(),o.preventDefault(),i=o.target.elements.query.value.trim(),M.innerHTML="",l=1;const a=await u(i,l);h=Math.ceil(a.totalHits/$),g(),m.addEventListener("click",t);async function t(){y();const s=await u(i,++l);f(s.hits),g(),n()}if(!i){p(),d.error({title:"Error",message:"Sorry, please write correct query!",position:"topRight"});return}g();try{const s=await u(i);if(s.hits.length===0){n(),d.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"});return}f(s.hits)}catch{p(),n(),d.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"})}n()});function y(){L.classList.remove("hidden")}function n(){L.classList.add("hidden")}function P(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function g(){l>=h?p():P()}
//# sourceMappingURL=commonHelpers.js.map
