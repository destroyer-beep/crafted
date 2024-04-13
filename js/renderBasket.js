import {data} from './data.js';

const basketContainer = document.querySelector('.basket__list > ul');

function renderBasket() {
    const localStorageData = localStorage.getItem('data');
    const localStorageDataParse = localStorageData ? JSON.parse(localStorageData) : {};
    basketContainer.innerHTML = ``;

    Object.values(localStorageDataParse).forEach(card => {
        basketContainer.innerHTML += `<li class="basket__item">
                        <img class="basket__itmage" src="${card.img}" alt="${card.title}">
                        <p class="basket__title">${card.title}</p>
                        <p class="basket__price">${card.price} ₽</p>
                        <button class="item__btn basket__btn_like">
                            <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0.999986C23.7787 0.979192 27 2.87434 27 8.99999C27 15.1256 13.9999 24 13.9999 24C13.9999 24 1 15.1256 1 8.99999C1 2.87434 4.22121 1.00384 8 0.999986C10 0.997945 12.7518 2.25457 14.0001 3.99999C15.2482 2.25457 17.9775 1.01112 20 0.999986Z" stroke="#464646" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button class="item__btn basket__btn_delete" id="${card.id}">
                            <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.00018 6L6.8164 3.55132C7.22475 2.32629 8.37116 1.5 9.66246 1.5H14.3379C15.6292 1.5 16.7756 2.32629 17.1839 3.55132L18.0002 6M6.00018 6H2.42723C1.31216 6 0.586912 7.17347 1.08559 8.17082L1.81913 9.6379C2.10327 10.2062 2.26385 10.8282 2.2903 11.463L2.82048 24.1873C2.92091 26.5977 4.90417 28.5 7.31658 28.5H16.6838C19.0962 28.5 21.0794 26.5977 21.1799 24.1873L21.7101 11.463C21.7365 10.8282 21.8971 10.2062 22.1812 9.6379L22.9148 8.17082C23.4134 7.17347 22.6882 6 21.5731 6H18.0002M6.00018 6H18.0002M15.6601 21.75L16.0351 12.75M8.34027 21.75L7.96527 12.75" stroke="#363538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </li>`
    })

    const buttonsDelete = document.querySelectorAll('.basket__btn_delete');
    buttonsDelete.forEach(btn => {
        btn.addEventListener('click', e => {
            const cardId = e.currentTarget.id;
            const localStorageData = localStorage.getItem('data');
            const newData = localStorageData ? JSON.parse(localStorageData) : {};

            delete newData[cardId];

            localStorage.setItem('data', JSON.stringify(newData));

            renderBasket()
        })
    })
}

renderBasket();