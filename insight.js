//Create Cards and UI elements
class MaxAndMinPriceCards {
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
        this.cardContainer.appendChild(this.ebayURL);
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
            cardContainer.style = "width: 18rem;";
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
            ebayURL.innerHTML = "Visit ebay"
            return ebayURL;
        }
    }
}//Create Cards and UI elements
//Populate select
const countryPick = document.getElementById("countryPick");//select

//code + English name of countries
let optionsStrings = {
    "EBAY-AT": "EBAY-AT",
    "EBAY-AU": "EBAY-AU",
    "EBAY-CH": "EBAY-CH",
    "EBAY-DE": "EBAY-DE",
    "EBAY-ENCA": "EBAY-ENCA",
    "EBAY-ES": "EBAY-ES",
    "EBAY-FR": "EBAY-FR",
    "EBAY-FRBE": "EBAY-FRBE",
    "EBAY-FRCA": "EBAY-FRCA",
    "EBAY-GB": "EBAY-GB",
    "EBAY-HK": "EBAY-HK",
    "EBAY-IE": "EBAY-IE",
    "EBAY-IN": "EBAY-IN",
    "EBAY-IT": "EBAY-IT",
    "EBAY-MOTOR": "EBAY-MOTOR",
    "EBAY-MY": "EBAY-MY",
    "EBAY-NL": "EBAY-NL",
    "EBAY-NLBE": "EBAY-NLBE",
    "EBAY-PH": "EBAY-PH",
    "EBAY-PL": "EBAY-PL",
    "EBAY-SG": "EBAY-SG",
    "EBAY-US": "EBAY-US"
}//code + English name of countries
function populateSelect() {
    countryPick.style = "overflow-y:scroll;max-height:150px;"

    let incrementor = 0;
    for (const key in optionsStrings) {
        incrementor++
        if (Object.hasOwnProperty.call(optionsStrings, key)) {
            const country = optionsStrings[key];
            var option = document.createElement("option");
            option.id = "option-" + incrementor;
            option.text = country;
            option.value = country;
            countryPick.appendChild(option);

        }
    }
}//populateSelect()
function getSelectedCountry() {
    return countryPick.value;
}
let input = document.getElementById("searchBox");
function sanitizeInputData() {
    let inputData = input.value;
    let pattern = /\w+/gmi;
    let keywords = inputData.match(pattern).toString();
    input.value = "";
    let ebayCountry = getSelectedCountry()
    getInsight(keywords, ebayCountry)
}


let accordion2 = document.getElementById("accordion-item-2");


let accordion3 = document.getElementById("accordion-item-3");
var indexer = 0;
function createCardsMaxAndMin(json) {
    //this.json =  json.insightInfoProductMaxPrice; || json.insightInfoProductMinPrice;
    console.log(json)
    indexer++;
    var element = json[0]
    let cardId = "toDelete"
    let cardTitle = element.title;
    let cardImageUrl = element.galleryURL;
    let currency = element.sellingStatus.currentPrice._currencyId;
    let price = element.sellingStatus.currentPrice.value + " " + currency;
    let ebayLink = element.viewItemURL;
    let card = new MaxAndMinPriceCards(cardId, cardImageUrl, cardTitle, price, ebayLink);
    accordion3.appendChild(card.cardColumn)
    /**
     * const element = response[index];
        let cardId = "card-" + index;
        let cardTitle = element.title;
        let cardImageUrl = element.galleryURL;
        let currency = element.sellingStatus.currentPrice._currencyId;
        let price = element.sellingStatus.currentPrice.value + " " + currency;
        let ebayLink = element.viewItemURL;
        sbscard = new SearchBootstrapCard(cardId, cardImageUrl, cardTitle, price, ebayLink);
     */



}
function createTD(parentRow, data) {
    let parent = document.getElementById(parentRow);
    let td = document.createElement("td");
    td.id = "toDelete";
    td.innerText = data;
    parent.appendChild(td);
}
function removeEl() {
    let nodes = document.querySelectorAll("#toDelete").forEach(e => e.remove());
}
var requested = false;
const REST_API = "http://localhost:5000";
function getInsight(keywords, ebayCountry) {
    fetch(`${REST_API}/insight/${keywords}/${ebayCountry}`)
        .then((response) => response.json())
        .then((json) => {
            if (requested === false) {
                createCardsMaxAndMin(json.insightInfoProductMaxPrice);
                createCardsMaxAndMin(json.insightInfoProductMinPrice);
                createTD("row1", "Mean Average");
                createTD("row1", json.insightMeanAverage);
                createTD("row2", "Mode Average");
                createTD("row2", json.insightMode.repeatedPrices);
                createTD("row3", "Median Average");
                createTD("row3", json.insightMedian);
                createTD("row4", "Max Price");
                createTD("row4", json.insightMaxPrice);
                createTD("row5", "Min price");
                createTD("row5", json.insightMinPrice);
                requested = true;
            }else{
                removeEl();
                createCardsMaxAndMin(json.insightInfoProductMaxPrice);
                createCardsMaxAndMin(json.insightInfoProductMinPrice);
                createTD("row1", "Mean Price Average for keywords");
                createTD("row1", json.insightMeanAverage);
                createTD("row2", "Mode Price Average for keywords");
                createTD("row2", json.insightMode.repeatedPrices + json.currency);
                createTD("row3", "Median Price Average for");
                createTD("row3", json.insightMedian);
                createTD("row4", "Max Price");
                createTD("row4", json.insightMaxPrice);
                createTD("row5", "Min price");
                createTD("row5", json.insightMinPrice);
            }




        });
  }

populateSelect()
// console.log(countryPick.value);
// console.log(Object.keys(isoCodes).length + "--> (isoCodes).length");
// console.log(Object.keys(optionsStrings).length + "--> (optionsStrings).length");
// console.log(Object.keys(isoCodes) + "--> (isoCodes)");
// console.log(Object.keys(optionsStrings) + "--> (optionsStrings)");