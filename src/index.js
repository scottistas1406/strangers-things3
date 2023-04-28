import {createRoot} from 'react-dom/client';
import {App} from './Components'; //file not needed because of index.js in componetesreview
const root = createRoot(document.querySelector('#app'));
root.render(<App />); //return
