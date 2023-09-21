import { Server_URL } from "../../settings.js";

export function initFindCar() {
  document.getElementById("result").innerText = "";
  document.getElementById("btn").addEventListener("click", findCar);
}
  async function findCar() {
    
    const id = document.getElementById("car-id").value;
    try {
      
      const car = await fetch(Server_URL + "/" + id).then((res) => {
        if (!res.ok) {
          throw new Error("Car not found");
        }
  
        return res.json();
      });
      document.getElementById("result").innerText = JSON.stringify(car, null, 3);
    } catch (err) {
      document.getElementById("result").innerText = err.message;
    }
  }

