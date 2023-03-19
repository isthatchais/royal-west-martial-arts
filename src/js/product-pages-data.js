import ProductData from './productData.mjs';


const category = new URLSearchParams(window.location.search).get('category');
const dataSource = new ProductData(category);

async function buildDetailsPage() {
    const productId = new URLSearchParams(document.location.search).get('productId');

    const product = await dataSource.findProductById(productId);
    document.getElementById('addToCart').setAttribute('data-id', productId);
    document.getElementById('product-descriptionhtmlsimple').innerHTML =
        product.Text;

    document.getElementById('product-image').setAttribute('src', product.Image);
    document.getElementById('product-image').setAttribute('alt', `Image of ${product.Name}`);
    document.getElementById('product-image').setAttribute('class', 'center');
    
    document.getElementById('product-brand-name').innerText = product.Name;
    //document.getElementById('product-name-without-brand').innerText = product.Name;
    document.getElementById('product-brand-name').setAttribute('class', 'center');
    document.title = 'Royal West Martial Arts | ' + product.Name;
    
}
buildDetailsPage();
