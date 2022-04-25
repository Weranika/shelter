let figureAllItems = showed48Items([...json], 8);
let itemsOnPage = numerOfCardsOnPage();
let indexOfFirstElem = 0;
let numberOfPages = figureAllItems.length / itemsOnPage;
createPage(figureAllItems, itemsOnPage, indexOfFirstElem);
let pageNumber = document.getElementById('pageNumber');
let buttonNavigatorHome = document.getElementById('buttonNavigatorHome');
let buttonNavigatorPrevious = document.getElementById('buttonNavigatorPrevious');
let buttonNavigatorNext = document.getElementById('buttonNavigatorNext');
let buttonNavigatorLast = document.getElementById('buttonNavigatorLast');


function numerOfCardsOnPage() {
    const windowInnerWidth = document.documentElement.clientWidth;
    if (windowInnerWidth >= 1280) {
        return 8;
    } else if (windowInnerWidth >= 768) {
        return 6;
    } else {
        return 3;
    }        
}

function showed48Items(jsonList, col) {
    let items48 = [];   
    for (let i = 0; i < 6; i++) {   
        let showed8Items = getRandom8(jsonList, col);        
        items48 = items48.concat(showed8Items);
    }    
    return items48;
}

function getRandom8(list, col) {
    let jsonList = [...list];
    let showed8Items = [];    
    for (let i = 0; i < col; i++) {
        let random = Math.floor(Math.random() * (jsonList.length)); 
        showed8Items.push(jsonList[random]);
        jsonList.splice(random, 1);        
    }        
    return showed8Items;
}

function createPage(figureAllItems, itemsOnPage, indexOfFirstElem) { 
    let indexOfLast = indexOfFirstElem + itemsOnPage;
    let page = figureAllItems.slice(indexOfFirstElem, indexOfLast);
    cards.innerHTML = '';
    page.forEach((elem) => cards.append(createFigure(elem)));
}

function NavigatorHome(elem) {
    console.log('first');     
    indexOfFirstElem = 0;
    createPage(figureAllItems, itemsOnPage, indexOfFirstElem);    
    pageNumber.innerHTML = 1;
    buttonNavigatorHome.setAttribute("disabled", "disabled");
    buttonNavigatorHome.classList.remove("button_navigator");

    buttonNavigatorPrevious.setAttribute("disabled", "disabled");
    buttonNavigatorPrevious.classList.remove("button_navigator");

    buttonNavigatorNext.removeAttribute("disabled");
    buttonNavigatorNext.classList.add("button_navigator");

    buttonNavigatorLast.removeAttribute("disabled");
    buttonNavigatorLast.classList.add("button_navigator");
}

function NavigatorPrevious(elem) {
    console.log('prev');    
    indexOfFirstElem -= itemsOnPage;  
    
    createPage(figureAllItems, itemsOnPage, indexOfFirstElem);

    pageNumber.innerHTML = +pageNumber.innerHTML - 1;

    if (pageNumber.innerHTML == 1) {
            buttonNavigatorPrevious.setAttribute("disabled", "disabled");
            buttonNavigatorPrevious.classList.remove("button_navigator");

            buttonNavigatorHome.setAttribute("disabled", "disabled");
            buttonNavigatorHome.classList.remove("button_navigator");
    }
    if (pageNumber.innerHTML == numberOfPages - 1) {
        buttonNavigatorNext.removeAttribute("disabled");
        buttonNavigatorNext.classList.add("button_navigator");

        buttonNavigatorLast.removeAttribute("disabled");
        buttonNavigatorLast.classList.add("button_navigator");
    }
}

function NavigatorNext() {
    console.log('next');
    // выбрать элементы для след страницы
    // обновить указатель
    // изменит номер страницы
    // сделать активной кнопку предыдущей и первой
    // отрисовать
    // проверить последняя ли страница , если да отключить (добавть класс)
    indexOfFirstElem += itemsOnPage;
    createPage(figureAllItems, itemsOnPage, indexOfFirstElem);
    pageNumber.innerHTML = +pageNumber.innerHTML + 1;

    buttonNavigatorPrevious.removeAttribute("disabled");
    buttonNavigatorPrevious.classList.add("button_navigator");

    buttonNavigatorHome.removeAttribute("disabled");
    buttonNavigatorHome.classList.add("button_navigator");

    let indexOfNextPage = indexOfFirstElem + itemsOnPage;
    if (indexOfNextPage > figureAllItems.length - itemsOnPage) {
        buttonNavigatorNext.setAttribute("disabled", "disabled");
        buttonNavigatorNext.classList.remove("button_navigator");

        buttonNavigatorLast.setAttribute("disabled", "disabled");
        buttonNavigatorLast.classList.remove("button_navigator");
    }
}

function NavigatorLast() {
    console.log('last');
    
    let indexOfLastPage = figureAllItems.length - itemsOnPage; 
    indexOfFirstElem = indexOfLastPage;
    createPage(figureAllItems, itemsOnPage, indexOfLastPage);

    let pageNumbers = figureAllItems.length / itemsOnPage;
    pageNumber.innerHTML = +pageNumbers;

    buttonNavigatorNext.setAttribute("disabled", "disabled");
    buttonNavigatorNext.classList.remove("button_navigator");

    buttonNavigatorLast.setAttribute("disabled", "disabled");
    buttonNavigatorLast.classList.remove("button_navigator");

    buttonNavigatorPrevious.removeAttribute("disabled");
    buttonNavigatorPrevious.classList.add("button_navigator");

    buttonNavigatorHome.removeAttribute("disabled");
    buttonNavigatorHome.classList.add("button_navigator");
}

function createFigure(item) {    
    let figure = document.createElement('figure');   
    const img = createImg(item);
    const figcaption = createFigcaption(item);
    const button = createButton();
    figure.setAttribute('cardId', item.name);
    figure.append(img);
    figure.append(figcaption);
    figure.append(button);    
    figure.addEventListener('click', createpopup);
    figure.addEventListener('click', displayPopup);
    return figure;    
}

function createImg({ name, img }) {
    let imgElem = document.createElement('img');
    imgElem.src = img;
    imgElem.alt = name;
    return imgElem;
}

function createFigcaption({name}) {
    let figcaption = document.createElement('figcaption');
    figcaption.innerHTML = name;
    return figcaption;
}

function createButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Learn more';
    return button;
}


// function addCards() {      
//     cards.innerHTML = '';
//     figureAllItems.forEach((elem) => cards.append(createFigure(elem)));
// }  

//addCards();

/**************************create buttons**************************************/
// let button_navigator_left_home = document.querySelector('button_navigator_left_home');
// let button_navigator_left = document.querySelector('button_navigator_left');
// let pageNumber = document.querySelector('pageNumber');
// let button_navigator_right = document.querySelector('button_navigator_right');
// let button_navigator_right_home = document.querySelector('button_navigator_right_end');

// let items = document.querySelectorAll('#pets-navigation li');
// console.log(items);
// let figuresOnPage = 8;
// for (let item of items) {
//     item.addEventListener('click', function () {
//         let pageNum = +this.innerHTML;
//         let start = (pageNum - 1) * figuresOnPage;
//         let end = start + figuresOnPage;
//         let notes = figureAllItems.slice(start, end);
//         console.log(notes);
//     })
// }

/*********************************popap*****************************************/
function getItemByName(name) {    
    for (elem in json) {
        if (json[elem].name == name) {
            return  json[elem];
        }
    }   
}

function createpopup() {  
    let item = getItemByName(this.getAttribute('cardId'));   
    let popupImg = document.querySelector('.popap-content img');
    popupImg.src = item.img;
    let popupH3 = document.querySelector('#popap h3');
    popupH3.innerHTML = item.name;
    let popupType = document.querySelector('.type');
    popupType.innerHTML = item.type;
    let popupBreed = document.querySelector('.breed');
    popupBreed.innerHTML = item.breed;
    let popupDescription = document.querySelector('.popap-pets-content p');
    popupDescription.innerHTML = item.description;
    let popupAge = document.querySelector('.age');
    popupAge.innerHTML = item.age;
    let popupInoculations = document.querySelector('.inoculations');
    popupInoculations.innerHTML = item.inoculations;
    let popupDiseases = document.querySelector('.diseases');
    popupDiseases.innerHTML = item.diseases;
    let popupParasites = document.querySelector('.parasites');
    popupParasites.innerHTML = item.parasites;
}
function displayPopup() {
    let popup = document.getElementById('popap');
    popup.classList.toggle("nonshow");  
    document.querySelector('body').classList.toggle("stop-scrolling");
}

let popapBackground = document.getElementById("popap-background");
popapBackground.addEventListener("click", handler1);

let popapCloseButton = document.getElementById("close-popap");
popapCloseButton.addEventListener("click", handler1);

function handler1() {     
    document.getElementById('popap').classList.toggle("nonshow");
    document.querySelector('body').classList.toggle("stop-scrolling");    
}

document.getElementById('popap-content').addEventListener("mouseover", hoverOnContent, false);
document.getElementById('popap-content').addEventListener("mouseout", hoverOutOfContent, false);

function hoverOnContent() {  
   popapCloseButton.style.background = 'none';
}
function hoverOutOfContent() {  
   popapCloseButton.style.background = 'rgba(241, 205, 179, 1)';
}