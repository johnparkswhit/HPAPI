const baseUrl = 'https://www.potterapi.com/v1/characters';
const key = '$2a$10$IlAP1QHdpf/vGEMuTIrIweAnPLyGtQzp0HqxQwmctBTUI65PF3oeO';
let url;

const body = document.querySelector('body');
const button = document.querySelector('button');
const section = document.querySelector('.results')

let boggartArray = ['banshee', 'full moon', 'dementor', 'cobra', 'Voldemort']
let wandArray = ['Chestnut, 9 1/4, dragon heartstring', 'Holly, 11", phoenix feather', 'Yew, 13 1/2", phoenix feather core', 'Birch, 8", dragon heartstring', 'Willow, 14", unicorn hair tail']
let houseArray = ['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuff']
let patronusArray = ['weasel', 'otter', 'jack russell terrier', 'persian cat', 'hare']

let rNum1 = Math.floor((Math.random() * 194));
let rNum2 = Math.floor((Math.random() * 4));
let rNum3 = Math.floor((Math.random() * 194));
let rNum4 = Math.floor((Math.random() * 194));
let rNum5 = Math.floor((Math.random() * 194));
let rNum6 = Math.floor((Math.random() * 194));
let rNum7 = Math.floor((Math.random() * 194));
let rNum8 = Math.floor((Math.random() * 4));
let rNum9 = Math.floor((Math.random() * 5));
let rNum10 = Math.floor((Math.random() * 5));
let rNum11 = Math.floor((Math.random() * 5));

button.addEventListener('click', fetchData);

function fetchData(){
    fetch(baseUrl+'?key='+ key)  
        .then(function(result) { 
        console.log(result)
        return result.json(); 
        })
        .then(function(json) { 
        console.log(json); 
        displayResults(json);
        })
}


function displayResults(json){
    let rSpouse = json[rNum1].name
    if (rSpouse !== undefined) {
        console.log(rSpouse)
    } else {
        console.log(json[109].name);
    }
    
    let rHouse = houseArray[rNum2]
        console.log(rHouse)

    let rBoggart = json[rNum3].boggart
    if (rBoggart !== undefined) {
        console.log(rBoggart)
    } else {
        console.log(boggartArray[rNum9]);
    }

    let rPatronus = json[rNum4].patronus
    if (rPatronus !== undefined) {
        console.log(rPatronus)
    } else {
        console.log(patronusArray[rNum10]);
    }

    let rWand = json[rNum5].wand
    if (rWand !== undefined) {
        console.log(rWand)
    } else {
        console.log(wandArray[rNum11]);
    }

    let rBestie = json[rNum6].name
    if (rBestie !== undefined) {
        console.log(rBestie)
    } else {
        console.log(json[109].name);
    }

    let rEnemy = json[rNum7].name
    if (rEnemy !== undefined) {
        console.log(rEnemy)
    } else {
        console.log(json[109].name);
    }
    
    if (rHouse === 'Slytherin'){
        document.body.style.backgroundImage = "url('asssets/slytherin.jpg')";
        document.body.style.backgroundRepeat = "repeat-y";
        document.body.style.backgroundSize = "100vw 100vh";
    } else if (rHouse === 'Ravenclaw') {
        document.body.style.background = "url('asssets/ravenclaw.jpg')";
        document.body.style.backgroundRepeat = "repeat-y";
        document.body.style.backgroundSize = "100vw 100vh";
    } else if (rHouse === 'Gryffindor'){
        document.body.style.background = "url('asssets/gryffindor.jpg')";
        document.body.style.backgroundRepeat = "repeat-y";
        document.body.style.backgroundSize = "100vw 100vh";
    } else {
        document.body.style.background = "url('asssets/hufflepuff.jpg')";
        document.body.style.backgroundRepeat = "repeat-y";
        document.body.style.backgroundSize = "100vw 100vh";
    }
    
    
    let para = document.createElement('p');
    section.appendChild(para);

    para.textContent = `Welcome to Hogwarts School of Witchcraft and Wizardry! You have been sorted into ${rHouse}.  You befriend ${rBestie} and get into all sorts of trouble.  School is great, but you are constantly battling with ${rEnemy}.  In Defense Against the Dark Arts, you pull out your wand, ${rWand}, ready to defend yourself.  Out of a cupboard comes ${rBoggart}! But it was only a boggart.  You shout, "Riddikulus!" and it retreats to its cupboard.  With the help of Professor Lupin, you learn Expecto Patronum to defend against dementors.  A wispy silver ${rPatronus} leaps from your wand.  Eventually you fall in love with ${rSpouse} and get married.`

    console.log(document.getElementsByTagName('p'))
};


