//COSTANTI 
const url = 'https://flynn.boolean.careers/exercises/api/array/music';
const gallery = document.getElementById('gallery');

//API
axios
.get(url)
.then((response) =>{
    const list = response.data.response; //response è 
    console.log(list);
    list.forEach(createCard);
})
.catch(error =>{
    console.log(error);
});

//FUNZIONI
function createCard(el){
    let col = createCol();
    let card = createCardElement();
    let img = createImg(el);
    let cardBody = createCardBody(el);
    let cardFooter = createCardFooter(el);
    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    col.appendChild(card);
    gallery.appendChild(col);
}

function createCol(){
    let col = document.createElement('div');
    col.className = 'col-4';
    return col;
}

function createCardElement(){
    let card = document.createElement('div');
    card.className = 'card';
    return card;
}

function createImg(el){
    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = el.poster;
    return img;
}

function createAuthorP(el){
    let p = document.createElement('p');
    p.innerHTML = el.author;
    return p;
}

function createCardFooter(el){
    let div = document.createElement('div');
    div.className = 'card-footer d-flex justify-content-between';
    let year = document.createElement('span');
    year.innerHTML = el.year;
    let genre = document.createElement('span');
    genre.innerHTML = el.genre;
    div.appendChild(year);
    div.appendChild(genre);
    return div;
}

function createCardBody(el){
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    let title = document.createElement('h5');
    title.className = 'card-title';
    title.innerHTML = el.title;
    cardBody.appendChild(title);
    cardBody.appendChild(createAuthorP(el));
    return cardBody;
}
