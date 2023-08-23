
const ui = (data) => {
  data.map((prodcut) => {
    if (prodcut.catagary == "gift plants") {
      let img1 = document.createElement("img")
      img1.src = prodcut.img1
      let img2 = document.createElement("img")
      img2.src = prodcut.img2
      let img3 = document.createElement("img")
      img3.src = prodcut.img3
      let title = document.createElement("p")
      title.innerHTML = prodcut.title
      let selling_price = document.createElement("p")
      selling_price.innerHTML = prodcut.selling_price
      let orginal_price = document.createElement("p")
      orginal_price.innerHTML = prodcut.orginal_price
      let btn = document.createElement("button")
      btn.innerHTML = "add to cart"
      btn.addEventListener("click", () => {
        console.log(prodcut.id)
        if (localStorage.getItem("login")) {
          fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(prodcut)
          })
        }
        else{
          alert("please first login then you can add to cart")
          setTimeout(
            window.location.href="/login.html"
          ,1000)
        }
      })
      let div = document.createElement("div")
      div.append(img1, title, orginal_price, selling_price, btn)
      document.getElementById("flowersing-plant").append(div)
    }
  })
};

let get = async () => {
  let res = await fetch("http://localhost:3000/prodcut");
  let data = await res.json();
  ui(data);
  console.log(data)
};

get();