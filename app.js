// get field by id
const select = document.querySelectorAll(".currency");
const number = document.getElementById("number");
const answer = document.getElementById("answer");
const button = document.getElementById("btn");

// call api
fetch("https://api.frankfurter.app/currencies")
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
      showCurrency(data)
    });

//   Show data On display
const showCurrency = (data) => {
  // entries added for data on select
  const entries = Object.entries(data);

  for (let i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} </option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} </option>`;
  }
};

// add event listener
button.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = number.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("plz added different currency");
  }
});

// convert function
const convert = (currency1, currency2, value) => {
  const url = "api.frankfurter.app";
  fetch(
    `https://${url}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((res) => res.json())
    .then((data) => {
      answer.value = Object.values(data.rates)[0];
    });
};
