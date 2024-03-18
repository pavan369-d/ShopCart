let trendCard = document.querySelectorAll(".trendcard");
let shopCard = document.querySelectorAll(".shopcard");

let count = 0;

trendCard.forEach(function (card, index) {
  card.style.left = `${index * 100}%`;
});

function myFun() {
  trendCard.forEach(function (curCard) {
    curCard.style.transform = `translateX(-${count * 100}%)`;
  });
}

setInterval(function () {
  count++;
  if (trendCard.length == count) {
    count = 0;
  }
  myFun();
}, 5000);

//card detail

shopCard.forEach(function (shop) {
  shop.addEventListener("click", function () {
    console.log(shop);

    let div = document.createElement("div");
    div.classList.add("cardDetail");
    div.innerHTML = `
    <i  id ="icon" class="ri-close-large-line"></i>
    <img src=${shop.firstElementChild.src} alt="" />
    <div>
      <h3 class="heads">Best at shopping cart</h3>
      <br />
      <p>Size</p>
      <input type="number" placeholder="Select" /><br />
      <p>Quantity</p>
      <input type="number" /><br />
      <button>Add To Cart</button>
    </div>`;
    document.querySelector("body").appendChild(div);
    document.getElementById("icon").addEventListener("click", function () {
      div.remove();
    });
  });
});
