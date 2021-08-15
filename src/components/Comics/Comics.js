import {
  API_URL,
  URL_COMICS,
  URL_CHARACTERS,
  IMG_STANDART_XLARGE,
  IMT_NOT_AVAILABLE,
} from '../../constants/api';
import {getDataApi} from '../../utils/getDataApi';
import {ROOT_INDEX} from '../../constants/root';

import Characters from "../Characters";
import Error from '../Error';

import classes from './Comics.css';

class Comics {
  renderComics(data) {
    let htmlContent = '';

    if (data) {
      data.forEach(({id, title, thumbnail: {extension, path}}) => {
        if (path.lastIndexOf(IMT_NOT_AVAILABLE) === -1) {
          const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
          const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
          // image_not_available

          htmlContent += `
            <li class="comics__item ${classes.border} ${classes.comics__item}" data-uri="${uri}">
              <span class="${classes.comics__name}">${title}</span>
              <img class="img-contain ${classes.comics__img}" src='${imgSrc}' alt={title}/>
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

  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);

    data ? this.renderComics(data) : Error.render();

  }

  eventListener() {
    document.querySelectorAll('.comics__item').forEach((element) => {
      const uri = element.getAttribute('data-uri');

      element.addEventListener('click', () => {
        Characters.render(uri);
      });
    });
  }
}

export default new Comics();
