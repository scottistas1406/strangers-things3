import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {App} from './Components'; //file not needed because of index.js in componetesreview
const root = createRoot(document.querySelector('#app'));
root.render (
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
