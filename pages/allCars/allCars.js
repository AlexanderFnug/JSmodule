import { Server_URL } from "../../settings.js";

export async function initAllCars() {
  const cars = await fetch(Server_URL).then((res) => res.json());
  const listItems = cars
    .map((car) => `<li>${car.id} , ${car.brand}</li>`)
    .join("");
  document.getElementById("cars").innerHTML = listItems; //Rememebr XSS
 
}


 // fetch(Server_URL)
  //   .then((res) => res.json())
  //   .then((cars) => {
  //     const listItems = cars
  //       .map((car) => `<li>${car.id} , ${car.brand}</li>`)
  //       .join("");
  //     document.getElementById("cars").innerHTML = listItems; //Rememebr XSS
    //});
