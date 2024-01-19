/**
 * Returns a currency value if the given currency code exists
//  
 */

async function getCurrency() {
  return fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then((res) => {
      if (!res.ok) {
        throw new Error("HTTPS error");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let json = data.rates;
      let key = Object.keys(json);
      key.forEach((item) => {
        const markup = `<li>${item}: ${json[item]}`;

        document
          .getElementById("results")
          .insertAdjacentHTML("beforeend", markup);
      });
    })
    .catch((error) => {
      // Handle errors
      console.error("Fetch error:", error);
      //   document.getElementById("output").textContent = "Error fetching data";
    });
}
