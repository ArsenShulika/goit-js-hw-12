'use strict';

export function getImages(query) {
  const BASE_URL = 'https://pixabay.com/api/?';
  const KEY = '43182397-b36e0d0e4f4165f4a1d81192e';

  const params = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

getImages('cats');
