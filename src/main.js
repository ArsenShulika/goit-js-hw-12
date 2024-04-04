'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
  showLoader();
  e.preventDefault();
  query = e.target.elements.query.value.trim();
  gallery.innerHTML = '';
  currentPage = 1;
  const obj = await getImages(query, currentPage);
  maxPage = Math.ceil(obj.totalHits / pageSize);
  checkBtnStatus();

  btnLoadMore.addEventListener('click', onLoadMoreClick);
  async function onLoadMoreClick() {
    showLoader();
    const obj = await getImages(query, ++currentPage);
    renderGallery(obj.hits);
    checkBtnStatus();
    hideLoader();
  }

  if (!query) {
    hideLoadMore();
    iziToast.error({
      title: 'Error',
      message: 'Sorry, please write correct query!',
      position: 'topRight',
    });
    return;
  }
  checkBtnStatus();

  try {
    const obj = await getImages(query);
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
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
    });
  }
  hideLoader();
});

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
  } else {
    showLoadMore();
  }
}
