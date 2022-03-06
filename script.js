imgArray = [
    {
        name:"shelf",
        img: './assets/1.jpg'
    },
    {
        name:"building",
        img: './assets/2.jpg'
    },
    {
        name:"wall",
        img: './assets/3.jpg'
    },
    {
        name:"orange",
        img: './assets/4.jpg'
    },
    {
        name:"nature",
        img: './assets/5.jpg'
    },
    {
        name:"shelf",
        img: './assets/6.jpg'
    },
    {
        name:"drink",
        img: './assets/7.jpg'
    },
    {
        name:"orange",
        img: './assets/8.jpg'
    },
    {
        name:"nature",
        img: './assets/9.jpg'
    },
    {
        name:"building",
        img: './assets/10.jpg'
    },
    {
        name:"wall",
        img: './assets/11.jpg'
    },{
        name:"drink",
        img: './assets/12.jpg'
    }
];

imgArray.sort(() => 0.5 - Math.random());

const gridElement = document.querySelector('.grid');
let chosenCards = [];
let chosenIds = [];

function fillGrid() {
    imgArray.forEach((element,index) => {
        const card = document.createElement('img');
        card.setAttribute('src','./assets/blank.jpg');
        card.setAttribute('alt','blank');
        card.setAttribute('data-id',index);
        card.addEventListener('click',flipCard);
        gridElement.appendChild(card);
    });
}

fillGrid();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    setTimeout(()=> {
        if(chosenCards[0] == chosenCards[1]) {
            alert('right');
            chosenIds.forEach((element)=> {
                cards[element].setAttribute('src','./assets/right.jpg');
                cards[element].removeEventListener('click',flipCard);
                cards[element].style.cursor = 'not-allowed';
            });
        }
        else {
            chosenIds.forEach((element)=> {
                cards[element].setAttribute('src','./assets/blank.jpg');
            });
        }
        chosenCards = [];
        chosenIds = [];
    },500);
}

function flipCard() {
    const id = this.getAttribute('data-id');
    chosenCards.push(imgArray[id].name);
    chosenIds.push(id);
    this.setAttribute('src',imgArray[id].img);
    if(chosenCards.length == 2) {
        checkMatch();
    }
}