'use strict';

import axios from 'axios';

export async function getImages(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/?';
  const params = {
    key: '43182397-b36e0d0e4f4165f4a1d81192e',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };
  const url = `${BASE_URL}${params}`;

  const res = await axios.get(url, { params });
  return res.data;
}
