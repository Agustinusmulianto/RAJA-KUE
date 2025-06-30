
import { router } from "./js/router.js";

const title = 'RAJA KUE';
document.querySelector('title').textContent = title
window.addEventListener('hashchange', router);
window.addEventListener('load', router);