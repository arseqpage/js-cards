import 'regenerator-runtime/runtime';
import Comics from './components/Comics'

import App from './components/App';

(async () => {
  await App.render();

  Comics.eventListener();
})();
