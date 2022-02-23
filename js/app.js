const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];

function myFunction(val) {

    let wrapperEle = document.createElement("div");
    let imgEle = document.createElement("img");
    let logoEle = document.createElement("img");
    let priceEle = document.createElement("h1");

    let popEle = document.createElement("div");
    let imgPop = document.createElement("img");
    let namePop = document.createElement("h1");
    let pricePop = document.createElement("h2");
    let descPop = document.createElement("div");
    let platPop = document.createElement("div");

     wrapperEle.setAttribute("class", "product");
     imgEle.setAttribute("class", "prdImg");
     logoEle.setAttribute("class", "plat");
     popEle.setAttribute("class", "popUp");

    document.body.appendChild(wrapperEle);
     wrapperEle.appendChild(imgEle);
     wrapperEle.appendChild(logoEle);
     wrapperEle.appendChild(priceEle);

    document.body.appendChild(popEle);
     popEle.appendChild(imgPop);
     popEle.appendChild(namePop);
     popEle.appendChild(pricePop);
     popEle.appendChild(descPop);
     popEle.appendChild(platPop);

     imgEle.setAttribute("src", val.img);
     priceEle.innerHTML = val.price;

     imgPop.setAttribute("src", val.img);
     pricePop.innerHTML = val.price;
     namePop.innerHTML = val.name;
     descPop.innerHTML = val.description;
     platPop.innerHTML = val.platform;


    if (val.platform === "playstation") {
         wrapperEle.setAttribute("class", "product playstation")
         logoEle.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png");
        platPop.style.color="blue";
    } else if (val.platform === "xbox") {
         wrapperEle.setAttribute("class", "product xbox")
         logoEle.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png");
        platPop.style.color="green";
    } else if (val.platform === "switch") {
         wrapperEle.setAttribute("class", "product switch")
         logoEle.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png");
        platPop.style.color="red";
    }

     wrapperEle.addEventListener("click", function () {
        popEle.style.display = "flex";
    })


     popEle.addEventListener("click", function () {
        if (popEle.style.display==="none"){
            popEle.style.display = "flex";
        }else{
            popEle.style.display = "none";
        }
    })

}
function writeItems() {
    for (let i = 0; i < games.length; i++) {
        myFunction(games[i]);
    }
}

writeItems();

