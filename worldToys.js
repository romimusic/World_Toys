/* obj products per category*/
var board_games = [
    {
        img: './assets/board_games/bg1.jpg',
        name: 'Java',
    },
    {
        img: './assets/board_games/bg2.jpg',
        name: "Memoir'44",
    },
    {
        img: './assets/board_games/bg3.jpg',
        name: 'Monopoly',
    },
    {
        img: './assets/board_games/bg4.jpg',
        name: 'Scrabble',
    },
    {
        img: './assets/board_games/bg5.jpg',
        name: 'Shogun',
    },
    {
        img: './assets/board_games/bg6.jpg',
        name: 'Ticket to Ride',
    },
    {
        img: './assets/board_games/bg7.jpg',
        name: 'Tikal',
    }
]

var lego_models = [
    {
        img: './assets/lego_models/lg1.jpg' ,
        name: "Sydney Opera House",
    },
    {
        img: './assets/lego_models/lg2.jpg',
        name: "Finger Sculpture",
    },
    {
        img: './assets/lego_models/lg3.jpg',
        name: "Superman",
    },
    {
        img: './assets/lego_models/lg4.jpg',
        name: "Ironman",
    },
    {
        img: './assets/lego_models/lg5.jpg',
        name: "Ferrari",
    },
    {
        img: './assets/lego_models/lg6.jpg' ,
        name: "Vintage Car",
    },
    {
        img: './assets/lego_models/lg7.jpg',
        name: "Locomotive",
    }
]

var playing_cards = [
    {
        img: './assets/playing_cards/cd1.jpg',
        name: "Bicycle",
    },
    {
        img: './assets/playing_cards/cd2.jpg',
        name: "Nomad",
    },
    {
        img: './assets/playing_cards/cd3.jpg',
        name: "Sentinels",
    },
    {
        img: './assets/playing_cards/cd4.jpg',
        name: "Tycoon",
    },
    {
        img: './assets/playing_cards/cd5.jpg',
        name: "Artisans",
    },
    {
        img: './assets/playing_cards/cd6.jpg',
        name: "Union",
    },
    {
        img: './assets/playing_cards/cd7.jpg',
        name: "Steam Punk",
    }
]

var rc_toys = [
    {
        img: './assets/rc_toys/rc1.jpeg',
        name: "Buldozer",
    },
    {
        img: './assets/rc_toys/rc2.jpg',
        name: "T-Rex",
    },
    {
        img: './assets/rc_toys/rc3.jpg',
        name: "Patrol Boat",
    },
    {
        img: './assets/rc_toys/rc4.jpg',
        name: "Quad Copter",
    },
    {
        img: './assets/rc_toys/rc5.jpg',
        name: "Tank",
    },
    {
        img: './assets/rc_toys/rc6.jpg',
        name: "Boxing Robots",
    },
    {
        img: './assets/rc_toys/rc7.jpg',
        name: "Stunt Plane",
    },
    {
        img: './assets/rc_toys/rc8.jpg',
        name: "Submarine",
    }
]

var productList = document.getElementById('productList');

/* function to make an iteraction over an objet category and create a section on index.html file */
function productsCategory (productToys) {
    productToys.forEach(productToys => {
        productList.innerHTML = productList.innerHTML + `
            <a href="./views/productDetail.html">
                <article class="card">
                    <fifure class="card__img">
                        <img src="${productToys.img}"  alt="${productToys.name}">
                    </fifure>
                    <div class="card__details">
                        <h2>${productToys.name}</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eum porro qui di</p>
                    </div>
                </article>
            </a>`
        });
}

    var boardGames = document.getElementById('boardGames');
    var rcToys = document.getElementById('rcToys');
    var playingCards = document.getElementById('playingCards');
    var legoModels = document.getElementById('legoModels');

 /* function to evaluate different case and displays all products on index.html file */   
function showCategories (product) {
    switch (product.alt) {
        case "Board Games" :
            document.getElementById('title_page').innerText = "Board Games";
            var home = document.getElementById('home_page');
            home.style.display = "none";
            var category = document.getElementById('category_page');
            category.style.display = "flex";
            productsCategory(board_games);
            break;
        case "Rc Toys" :
            document.getElementById('title_page').innerText = "Rc Toys";
            var home = document.getElementById('home_page');
            home.style.display = "none";
            var category = document.getElementById('category_page');
            category.style.display = "flex";
            productsCategory(rc_toys);
            break;
        case "Playing Cards" :
            document.getElementById('title_page').innerText = "Playing Cards";
            var home = document.getElementById('home_page');
            home.style.display = "none";
            var category = document.getElementById('category_page');
            category.style.display = "flex";
            productsCategory(playing_cards);
            break;
        case "Lego Models" :
            document.getElementById('title_page').innerText = "Lego Models";
            var home = document.getElementById('home_page');
            home.style.display = "none";
            var category = document.getElementById('category_page');
            category.style.display = "flex";
            productsCategory(lego_models);
            break;
        default:
            alert('Choose Category');

    }
}

var btn = document.getElementById('btn');
var form = document.getElementById('form');


//function to save subscribers
function saveSubscriber () {

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var country = document.getElementById('country').value;
    var personalInterest = document.getElementById('personalInterest').value;
    var comments = document.getElementById('comments').value;

    if( name != "" && age != "" && age > 18 && age < 120 && email != "") {
        user = {
            name: name,
            age: age,
            email: email,
            gender: gender,
            country: country,
            personalInterest: personalInterest,
            comments: comments
        };

        let store =  JSON.parse(localStorage.getItem('subscriber'));
        store = ( typeof store === "undefined" || store === null ) ? [] : store;
        store.push(user);

        localStorage.setItem('subscriber', JSON.stringify(store) );
        
    } else {
        alert("Please send a valid data");
    }

}

//function to show the information provided by users
function displayInfo (){
    
    let store = JSON.parse(localStorage.getItem('subscriber'));
    store = (typeof store === "undefined" || store === null) ? [] : store;

    if (store.length > 0) {
    const lastSubscriber = store[store.length - 1];
            showinfo.innerHTML += `
                <div class="detailsUser">
                    <p> Name: ${lastSubscriber.name} </p>
                    <p> Age: ${lastSubscriber.age} </p>
                    <p> email: ${lastSubscriber.email} </p>
                </div>
            `;
    }
}

//btn.addEventListener('submit', );
form.addEventListener('submit', (e) => {
    e.preventDefault();
   document.getElementById('productList').style.display = "none";
   document.getElementById('showinfo').style.display = "flex";
   saveSubscriber();
   displayInfo();
})

