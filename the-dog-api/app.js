// creat function for button "Load the Data"
const loadDog = () => {
  // Load data from api
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((res) => res.json()) // convert response to json
    .then((data) => displayDog(data)); // calling another function to pass data into this function
};
//make another function to get api data from above function
const displayDog = (dogList) => {
  // get first 10 data from api. 0 to 10, not including 10th index.
  const firs10Data = dogList.slice(0, 12);
  // get div from html
  const main = document.getElementById("main");
  // run for of loop
  for (const dog of firs10Data) {
    //creat new div
    const div = document.createElement("div");
    // creat class of div for bootstrap design
    div.className = "col-lg-4";
    //creat inner html of div
    div.innerHTML = `
        <h2>${dog.name}</h2>
        <p>${dog.temperament}</p>
        <h4>${dog.weight.imperial}</h4>
        <img class="" src="${dog.image.url}" alt="" width="400px" height="250px">

      `;
    // append this div into html div as a child of html div
    main.appendChild(div);
  }

  // console.log(div);
};
