const main = document.getElementById("main");
// button event handler setup
const searchBtn = () => {
  // get input value
  const input = document.getElementById("input-field");
  let inputValue = parseInt(input.value);
  const error = document.getElementById("alert");
  //error handle if string or empty value
  if (isNaN(inputValue) || inputValue == "") {
    input.value = "";
    error.innerText = "Please! enter a number";
    main.innerHTML = "";
    // error handle if negative value
  } else if (inputValue <= 0) {
    error.innerText = "please, give a positive number";
    input.value = "";
    main.innerHTML = "";
  } else {
    // empty previous data
    main.innerHTML = "";
    //   load api
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
      .then((res) => res.json())
      .then((data) => displayCards(data.cards));
    //empty input value
    input.value = "";
    // empty error message
    error.innerHTML = "";
  }
};
// another function to display api
const displayCards = (cards) => {
  for (const card of cards) {
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("mb-3");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.value} ${card.suit}</h5>
            <p class="card-text">Code: ${card.code}</p>
            <a onclick="cardDetails('${card.code}')" href="#" class="btn btn-primary">See Details</a>
        </div>
    </div>
    `;
    //apand child
    main.appendChild(div);
  }
};
// see Details
const cardDetails = (code) => {
  main.innerHTML = "";
  fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then((res) => res.json())
    .then((data) => {
      const allCards = data.cards;
      const singleCard = allCards.find((card) => card.code === code);
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="card" style="width: 18rem;">
          <img src="${singleCard.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${singleCard.value} ${singleCard.suit}</h5>
              <p class="card-text">Code: ${singleCard.code}</p>
          </div>
      </div>
      `;
      main.appendChild(div);
    });
  //   console.log(code);
};
