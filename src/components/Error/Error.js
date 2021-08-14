import classes from './Error.css';
import {ROOT_INDEX} from "../../constants/root";


class Error {
	render() {
		const htmlWrapper = `
			<div class="${classes.error__container}">
				<span class="${classes.error__alert}">
					<p class="${classes.error__text}">Произошла ошибка.</p>
					<p class="${classes.error__text}">Попробуйте зайти позже</p>
				</span>
			</div>
		`;

		ROOT_INDEX.innerHTML = htmlWrapper;
	}
}

export default new Error();