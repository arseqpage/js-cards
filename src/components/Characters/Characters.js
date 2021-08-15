import classes from './Characters.css';
import {getDataApi} from "../../utils/getDataApi";
import {IMG_STANDART_XLARGE} from "../../constants/api";
import {ROOT_MODAL} from "../../constants/root";

import Notification from '../Notification';
import imgCloseBlack from './img/close.svg';
import imgCloseWhite from './img/close-black.svg';


class Characters {

    renderContent(data) {
        console.log('Данные есть')
        let htmlContent = '';

        data.forEach(({name, thumbnail: {path, extension}}) => {
            const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;

            htmlContent += `
				<li class="${classes.characters__item}">
					<img class="img-cover ${classes.characters__img}" src="${imgSrc}" alt="${name}"/>
					<span class="${classes.characters__name}">${name}</span>
				</li>
			`

            const htmlWrapper = `
                <div class="${classes.wrapper}">
                    <ul class="${classes.characters__list}">
                        ${htmlContent}
                    </ul>
                    
                    <button
                    class="btn bg-contain ${classes.characters__close}"
                    onClick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseWhite})"
                    ></button>
                </div>
				
			`


            ROOT_MODAL.innerHTML = htmlWrapper;

            console.log(name, path,
                extension)
        });

    }

    async render(uri) {
        const data = await getDataApi.getData(uri);

        if (data.length) {
            this.renderContent(data);
        } else {
            Notification.render();
        }

        console.log(data);
    }
}

export default new Characters();