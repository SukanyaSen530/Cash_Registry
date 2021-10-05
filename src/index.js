//buttons
const next_btn = document.querySelector("#next_btn");
const get_change_btn = document.querySelector("#change_btn");

//inputs
const bill_input = document.querySelector("#bill_amount");
const cash_input = document.querySelector("#cash_amount");

//divs & ul
const cash_div = document.querySelector("#cash_div");
const change_div = document.querySelector(".change_div");

let bill_amount = -1,
  cash_amount = -1;

const change_arr = [1, 5, 10, 20, 100, 500, 2000];

const getChange = (change) => {
  change_div.innerHTML = "";
  const ulParent = document.createElement("ul");
  const headingLi = document.createElement("li");
  headingLi.innerHTML = `<span>Currency </span> :  Change`;
  ulParent.appendChild(headingLi);

  console.log("change -->", change);

  for (let i = change_arr.length - 1; i >= 0 && change !== 0; i--) {
    let li = document.createElement("li");
    if (change < change_arr[i]) {
      li.innerHTML = `<span>${change_arr[i]}</span> :  0`;
      ulParent.appendChild(li);
    } else {
      const res = Math.floor(change / change_arr[i]);
      console.log(res, change);
      li.innerHTML = `<span>${change_arr[i]}</span> :  ${res}`;
      ulParent.appendChild(li);
    }

    change = change % change_arr[i];
  }

  return ulParent;
};

next_btn.addEventListener("click", function () {
  bill_amount = Number(bill_input.value);
  if (!bill_amount) alert("Please Enter The Bill Amount!");
  else if (bill_amount < "") alert("Bill Amount can't be negative!");
  else cash_div.style.display = "block";
});

get_change_btn.addEventListener("click", function () {
  bill_amount = Number(bill_input.value);
  cash_amount = Number(cash_input.value);
  change_div.innerHTML = "";
  if (!bill_amount) alert("Please Enter The Bill Amount!");
  else if (bill_amount < 0 && cash_amount < 0)
    alert("Bill Amount & Cash Amount can't be negative!");
  else if (bill_amount < 0) alert("Bill Amount can't be negative!");
  else {
    if (!cash_amount) alert("Please Enter The Cash Amount!");
    else if (cash_amount < 0) alert("Cash Amount can't be negative!");
    else {
      const change = cash_amount - bill_amount;

      if (change < 0) {
        alert("Cash insufficient!");
      } else if (change === 0) alert("No change to return!");
      else {
        const result_ul = getChange(change);

        change_div.append(result_ul);
      }
    }
  }
});
