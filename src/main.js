const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

  fetch(API_URL)
  .then(response => response.text())
  .then(result => {
    
    const data = JSON.parse(result);
    
    data.map(element => {
      
      const {photo, property_type, name, price } = element;

      let row = document.getElementById("row");

      let mainDiv = document.createElement("div");
          mainDiv.className = "col-md-4";

      let card = document.createElement("div")
          card.className = "card mb-4 box-shadow"

      let image = document.createElement("img")
          image.className = "card-img-top";
          image.src = photo;

      let cardBody = document.createElement('div')
          cardBody.className = "card-body"

      let cardText = document.createElement('div')
          cardText.className = "card-text"

      let propType = document.createElement("p");
          propType.className = "property-type";
          propType.innerHTML = property_type;

      let propName = document.createElement("h5");
          propName.className = "property-name";
          propName.innerHTML = name;

      let propPrice = document.createElement("span");
          propPrice.className = "property-price pb-2";
          propPrice.innerHTML = `$ ${price} usd/night`;



      row.appendChild(mainDiv);
      mainDiv.appendChild(card);
      card.appendChild(image)
      card.appendChild(cardBody)
      cardBody.appendChild(cardText)
      cardText.appendChild(propName)
      cardText.appendChild(propType)
      cardText.appendChild(propPrice)
      
    });
  });
