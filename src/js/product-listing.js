import ProductData from './productData.mjs';
import { setLocalStorage } from './utils.mjs';


const category = new URLSearchParams(window.location.search).get('category');
document.getElementById('categoryName').innerText = category.charAt(0).toUpperCase() + category.slice(1);
let productList = [];

async function displayProductCards(productCategory){
    const dataSource = new ProductData(productCategory);
    const products = await dataSource.findAllProducts(productCategory);
    productList = products;
    
    // set up localstorage with values
    setLocalStorage('currentCategoryCount',productList.length);
    setLocalStorage('currentCategory',productCategory);

    products.map((product) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'product-card');
        li.setAttribute('id', `product-${product.Id}`);
        const productCardDiv = document.createElement('div');
        productCardDiv.setAttribute('id', 'productCardDiv');
        const a = document.createElement('a');
        a.setAttribute('href', `../product_pages/index.html?productId=${product.Id}&category=${productCategory}`)
        const img = document.createElement('img');
        img.setAttribute('src', product.Image);
        img.setAttribute('alt', `Image of ${product.Name}`);
        const h2 = document.createElement('h2');
        h2.setAttribute('class', 'card__brand');
        h2.textContent = product.Name;
        const p = document.createElement('p');
        const video = document.createElement('a');
        a.setAttribute('href', product.Video)
        video.setAttribute('class', 'product-card__price');
        const suggestedRetailPrice = document.createElement('span');
        suggestedRetailPrice.setAttribute('id','product-suggested-retail-price');
        suggestedRetailPrice.textContent = `$${product.SuggestedRetailPrice}`;
        const listedPrice = document.createElement('span');
        listedPrice.setAttribute('id','product-final-price');
        listedPrice.textContent = ` $${product.ListPrice}`;
        const percentOff = document.createElement('span');
        percentOff.setAttribute('id','product-discount-percent');
        percentOff.textContent = ` ${(
            ((product.SuggestedRetailPrice - product.FinalPrice) /
          product.SuggestedRetailPrice) * 100
        ).toFixed(0)}% off`;
        const btndiv = document.createElement('div');
        btndiv.setAttribute('id', 'btndiv');
        btndiv.setAttribute('data-image', product.Image);
        btndiv.setAttribute('data-description', product.DescriptionHtmlSimple);
        btndiv.setAttribute('data-name', product.Name);
        const quickView = document.createElement('button');
        quickView.textContent = 'Quick View';
        quickView.setAttribute('id','quick-view');
        

        li.appendChild(productCardDiv);
        productCardDiv.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(p);
        p.appendChild(suggestedRetailPrice)
        p.appendChild(video)
        p.appendChild(listedPrice)
        p.appendChild(percentOff)
        li.appendChild(btndiv)
        btndiv.appendChild(quickView)

        document.querySelector('.product-list').appendChild(li);

        const modal = document.getElementById('quick-modal')

        quickView.onclick = function(){
            const modalImg = document.getElementById('modal-img');
            modalImg.src = btndiv.getAttribute('data-image');
            modalImg.alt = btndiv.getAttribute('data-name');
            document.getElementById('quick-name').innerText = btndiv.getAttribute('data-name');
            document.getElementById('quick-text').innerHTML = btndiv.getAttribute('data-description');
            modal.style.display = 'block'

            
        }
        const close = document.querySelector('.close')
        close.onclick = function(){
            modal.style.display = 'none'

        }
        window.onclick = function(event){
            if (event.target == modal){
                modal.style.display = 'none'
            }
        }

    });
}
displayProductCards(category);

function productSearch() {
    let searchInput = document.getElementById('search-input').value;
    //loop through all elements
    productList.forEach((product) => {
        let id = 'product-' + product.Id;
        document.getElementById(id).classList.remove('hide');
        //check if text does not include the search value
        if (!product.Name.toUpperCase().includes(searchInput.toUpperCase())) {
            //remove cards that do not have search input
            document.getElementById(id).classList.add('hide');
        } 
    });
};
var input = document.getElementById('search-input');
input.addEventListener('keypress', (function(event){
    if (event.key === 'Enter'){
        productSearch()
    }
}));

input.addEventListener('search',productSearch);
