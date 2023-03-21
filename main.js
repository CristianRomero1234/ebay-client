class BootstrapCard {
    constructor(cardContainerID, cardImageURL, cardTitle, cardShortDescription, ebayURL) {
        this.create(cardContainerID, cardImageURL, cardTitle, cardShortDescription, ebayURL);
    }
    create(cardContainerID, cardImageURL, cardTitle, cardShortDescription, cardEbayURL) {
        this.cardColumn = this.createCardColumn();
        this.cardContainer = this.createCardContainer(cardContainerID);//<div class="card" style="width: 18rem;" id="cardContainer">
        this.cardImage = this.createImage(cardImageURL, cardTitle);// <img src="..." class="card-img-top" alt="..." id="cardImage">
        this.cardTextBody = this.createTextBody(); // <div class="card-body" id="cardTextBody">
        this.cardTitle = this.createTitle(cardTitle); //<h5 class="card-title" id="cardTitle">Card title</h5>
        this.cardShortDescription = this.createShortDescription(cardShortDescription); // <p class="card-text" id="cardShortDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        this.ebayURL = this.createEbayURL(cardEbayURL); // <a href="#" class="btn btn-primary" id="ebayURL">Go somewhere</a>

        this.cardTextBody.appendChild(this.cardTitle);
        this.cardTextBody.appendChild(this.cardShortDescription);
        this.cardContainer.appendChild(this.cardImage);
        this.cardContainer.appendChild(this.cardTextBody);
        this.cardColumn.appendChild(this.cardContainer);
    }
    createCardColumn() {
        let cardColumn = document.createElement("div");
        cardColumn.classList.add("col");
        return cardColumn;
    }
    createCardContainer(cardContainerID) {
        if (cardContainerID !== undefined) {
            let cardContainer = document.createElement("div");
            cardContainer.classList.add("card");
            cardContainer.style ="width: 18rem;";
            cardContainer.id = cardContainerID;
            return cardContainer;
        }

    }
    createImage(cardImageURL, cardTitle) {
        if (cardImageURL !== undefined && cardTitle !== undefined) {
            let imageElement = document.createElement("img");
            imageElement.classList.add("card-img-top");
            imageElement.src = cardImageURL;
            imageElement.alt = cardTitle;
            return imageElement;
        }
    }
    createTextBody() {
        let TextBody = document.createElement("div");
        TextBody.classList.add("card-body");
        return TextBody;
    }
    createTitle(cardTitle) {
        if (cardTitle !== undefined) {
            let title = document.createElement("h5");
            title.classList.add("card-title");
            title.innerText = cardTitle;
            return title;
        }
    }
    createShortDescription(cardShortDescription) {
        if (cardShortDescription !== undefined) {
            let description = document.createElement("p");
            description.classList.add("card-text");
            description.innerText = cardShortDescription;
            return description;
        }
    }
    createEbayURL(cardEbayURL) {
        if (cardEbayURL !== undefined) {
            let ebayURL = document.createElement("a");
            ebayURL.classList.add("btn");
            ebayURL.classList.add("btn-primary");
            ebayURL.href = cardEbayURL;
            return ebayURL;
        }
    }
}
const REST_API = "http://localhost:5000";
function getData() {
    fetch(REST_API+"/ebay")
        .then((response) => response.json())
        .then((json) => handleData(json));
}
let row = document.getElementById("items-Area");
function handleData(data) {
    let response = data.item;
    for (let index = 0; index < response.length; index++) {
        const element = response[index];
        let cardId = "card-" + index;
        let cardTitle = element.title;
        let cardImageUrl = element.galleryURL;
        let currency = element.sellingStatus.currentPrice._currencyId;
        let price = element.sellingStatus.currentPrice.value + " " + currency;
        let ebayLink = element.viewItemURL;
        bscard = new BootstrapCard(cardId, cardImageUrl, cardTitle, price, ebayLink);
        row.appendChild(bscard.cardColumn);
    }
}
getData();


