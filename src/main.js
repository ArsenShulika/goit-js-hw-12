'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

let maxPage = 0;
let query;
let currentPage = 1;
const pageSize = 15;

const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-btn');

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  hideLoadMore();
  query = e.target.elements.query.value.trim();
  gallery.innerHTML = '';
  currentPage = 1;

  if (!query) {
    hideLoadMore();
    iziToast.error({
      title: 'Error',
      message: 'Sorry, please write correct query!',
      position: 'topRight',
    });
    return;
  }
  showLoader();

  try {
    const obj = await getImages(query, currentPage);
    maxPage = Math.ceil(obj.totalHits / pageSize);
    if (obj.hits.length === 0) {
      hideLoader();
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
      });
      return;
    }
    renderGallery(obj.hits);
  } catch (error) {
    hideLoadMore();
    hideLoader();
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Sorry, your query is not correct!',
    });
  }
  checkBtnStatus();
  hideLoader();
});

btnLoadMore.addEventListener('click', onLoadMoreClick);
async function onLoadMoreClick() {
  showLoader();
  const obj = await getImages(query, ++currentPage);
  renderGallery(obj.hits);
  checkBtnStatus();
  hideLoader();
  const elem = document.querySelector('.rectangle');
  const rect = elem.getBoundingClientRect();
  window.scrollBy({
    top: rect.height * 2,
    behavior: 'smooth',
  });
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showLoadMore() {
  btnLoadMore.classList.remove('hidden');
}

function hideLoadMore() {
  btnLoadMore.classList.add('hidden');
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
    iziToast.error({
      title: 'Error',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    showLoadMore();
  }
}
