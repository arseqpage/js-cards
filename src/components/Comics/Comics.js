import {
  API_URL,
  URL_COMICS,
  URL_CHARACTERS,
  IMG_STANDART_XLARGE,
  IMT_NOT_AVAILABLE,
} from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root';

import classes from './Comics.css';

class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    let htmlContent = '';

    if (data) {
      data.forEach(({ id, title, thumbnail: { extension, path } }) => {
        if (path.lastIndexOf(IMT_NOT_AVAILABLE) === -1) {
          const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
          const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
          console.log(path);
          // image_not_available

          htmlContent += `
            <li class="comics__item ${classes.border} ${classes.comics__item}" data-uri="${uri}">
              <span class="${classes.comics__name}">${title}</span>
              <img class="img-contain ${classes.comics__img}" src='${imgSrc}'/>
            </li>
          `;
        }
      });

      const htmlCardsWrapper = `
        <ul class="${classes.comics__container}">
          ${htmlContent}
        </ul>
      `;
      ROOT_INDEX.innerHTML = `
        ${htmlCardsWrapper}
      `;
    } else {
      ROOT_INDEX.innerHTML = `
        Данные не были получены :( Попробуйте перезагрузить страницу.
      `;
    }
  }

  eventListener() {
    document.querySelectorAll('.comics__item').forEach((element) => {
      const uri = element.getAttribute('data-uri');

      element.addEventListener('click', () => {
        console.log(uri);
      });
    });
  }
}

export default new Comics();
