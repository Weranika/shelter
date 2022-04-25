
function createFigure(item) {
    console.log(item);
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

let nonShowedItems = [...json];
let showedItems = getThreeRandom(nonShowedItems);

function getThreeRandom(nonShowedItems) {
    let showedItems = [];
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * (nonShowedItems.length)); 
        showedItems.push(nonShowedItems[random]);
        nonShowedItems.splice(random, 1);  
    }
    return showedItems;
}

function addCards() {  
     console.log('carousel');   
    cards.innerHTML = '';
    showedItems.forEach((elem) => cards.append(createFigure(elem)));
}    

function carouselButton() {
    console.log('carousel button click');   
    //cards.innerHTML = '';
    //выбрать отображаемые элементы из nonshown 3  getThreeRandom
    let newElem = getThreeRandom(nonShowedItems);
    //удалиить текущие и добавить к nonshown  в конец
    nonShowedItems = nonShowedItems.concat(showedItems);
    showedItems = newElem;
    //добавить в shown
    //прорисоввать 
    addCards();    
}
addCards();

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