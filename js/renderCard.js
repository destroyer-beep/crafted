import {data} from './data.js';

const catalogContainer = document.querySelector('.cards');

data.forEach(card => {
    catalogContainer.innerHTML += `
                    <li class="cards__item">
                    <img class="item__img" src="${card.img}" alt="${card.title}">
                    <div class="item__desc">
                        <p class="item__title">${card.title}</p>
                        <p class="item__price">${card.price} ₽</p>
                        <button class="item__btn item__btn_like">
                            <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0.999986C23.7787 0.979192 27 2.87434 27 8.99999C27 15.1256 13.9999 24 13.9999 24C13.9999 24 1 15.1256 1 8.99999C1 2.87434 4.22121 1.00384 8 0.999986C10 0.997945 12.7518 2.25457 14.0001 3.99999C15.2482 2.25457 17.9775 1.01112 20 0.999986Z" stroke="#464646" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="item__btn item__btn_buy" id="${card.id}">
                            <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.7051 8.66665L29.2758 4.95734C29.5965 2.87239 31.3905 1.33331 33.5 1.33331M28.7051 8.66665L26.8841 20.503C26.4713 23.186 24.1627 25.1666 21.4481 25.1666H8.57858C6.00074 25.1666 3.76876 23.3762 3.20955 20.8598L1.98733 15.3598C1.22404 11.9249 3.83775 8.66665 7.35636 8.66665H28.7051ZM22.8231 28.8333C22.8231 29.5927 22.2075 30.2083 21.4481 30.2083C20.6887 30.2083 20.0731 29.5927 20.0731 28.8333C20.0731 28.0739 20.6887 27.4583 21.4481 27.4583C22.2075 27.4583 22.8231 28.0739 22.8231 28.8333ZM9.49036 28.8333C9.49036 29.5927 8.87475 30.2083 8.11536 30.2083C7.35596 30.2083 6.74036 29.5927 6.74036 28.8333C6.74036 28.0739 7.35596 27.4583 8.11536 27.4583C8.87475 27.4583 9.49036 28.0739 9.49036 28.8333Z" stroke="#464646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </li>
    `
})

const buttonsBuy = document.querySelectorAll('.item__btn_buy');

buttonsBuy.forEach(btn => {
    btn.addEventListener('click', e => {
        const cardId = e.currentTarget.id;
        const localStorageData = localStorage.getItem('data');
        const newData = localStorageData ? JSON.parse(localStorageData) : {};

        newData[cardId] = data.find(item => item.id == cardId);

        localStorage.setItem('data', JSON.stringify(newData));
    })
})
