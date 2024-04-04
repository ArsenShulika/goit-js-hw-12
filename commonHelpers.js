import{a as b,S as w,i as l}from"./assets/vendor-2cfd16ce.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function d(o,a){const t="https://pixabay.com/api/?",s={key:"43182397-b36e0d0e4f4165f4a1d81192e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a},e=`${t}${s}`;return(await b.get(e,{params:s})).data}const S=document.querySelector(".gallery");function h(o){const a=o.map(t=>`<li class="gallery-item">
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
</li>`).join("");S.insertAdjacentHTML("beforeend",a),q.refresh()}const q=new w(".gallery a",{captionsData:"alt",captionDelay:250});let p=0,i,n=1;const v=15,L=document.querySelector(".loader"),$=document.querySelector(".form"),E=document.querySelector(".gallery"),f=document.querySelector(".load-btn");$.addEventListener("submit",async o=>{o.preventDefault(),i=o.target.elements.query.value.trim(),E.innerHTML="",n=1;const a=await d(i,n);p=Math.ceil(a.totalHits/v),g(),f.addEventListener("click",t);async function t(){if(n<=p){y();const s=await d(i,++n);h(s.hits),g(),c()}l.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}if(!i){m(),l.error({title:"Error",message:"Sorry, please write correct query!",position:"topRight"});return}g(),y();try{const s=await d(i);if(s.hits.length===0){c(),l.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"});return}h(s.hits)}catch{m(),c(),l.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"})}c()});function y(){L.classList.remove("hidden")}function c(){L.classList.add("hidden")}function M(){f.classList.remove("hidden")}function m(){f.classList.add("hidden")}function g(){n>=p?m():M()}
//# sourceMappingURL=commonHelpers.js.map
