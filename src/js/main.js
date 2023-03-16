 
import {
    renderWithTemplate,
    loadTemplate
} from './utils.mjs';

loadHeaderFooter();

async function loadHeaderFooter() {
    const header = await loadTemplate('../partials/header.html');
    const footer = await loadTemplate('../partials/footer.html');
    renderWithTemplate(header, document.getElementById('main-header'),'beforebegin',  true);
    renderWithTemplate(footer,document.getElementById('main-footer'), 'beforeend', true);
}


