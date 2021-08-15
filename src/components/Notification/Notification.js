import classes from './Notification.css';

import imgClose from './img/close-black.svg'
import {ROOT_MODAL} from "../../constants/root";

class Notification {
    render() {
        const htmlWrapper = `
            <div class="${classes.notification__container}">
                <span>
                    No content :)
                </span>
                
                <button
                    class="btn bg-contain ${classes.notification__close}"
                    onClick="modal.innerHTML = ''"
                    style="background-image: url(${imgClose})"
                    ></button>
            </div>
        `

        ROOT_MODAL.innerHTML = htmlWrapper;
    }
}

export default new Notification();