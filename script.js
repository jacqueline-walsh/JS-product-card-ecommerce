const body = document.querySelector('body');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
let index = 0;


li.forEach(el => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        showProduct(index = parseFloat(el.dataset.num));
    });
});

function showProduct(num) {
    const slider = document.querySelector('.slider');
    const figure = document.querySelectorAll('figure');
    const button = document.querySelector('button');
    const price = document.querySelector('.price');

    slider.querySelector('.active').classList.remove('active');
    figure[num].classList.add('active');

    const colors = figure[num].getAttribute('data-color').split(',');
    const col1 = colors[0];
    const col2 = colors[1];

    body.style.background = `linear-gradient(15deg, ${col1} 50%, ${col2} 50.1%)`;

    button.style.color = col2;
    button.style.borderColor = col2;
    price.style.color = col1;

    button.addEventListener('mouseover', () => {
        button.style.background = `linear-gradient(15deg, ${col1} 50%, ${col2} 50.1%)`;
        button.style.color = "#fff";
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = '#fff';
        button.style.color = col1;
    }); 
}