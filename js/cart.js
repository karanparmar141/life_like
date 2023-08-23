import navbar from "../componets/nav.js";
document.getElementById("navbar").innerHTML = navbar();


const ui = (data) => {
    data.map((prodcut) => {
      if (prodcut.catagary == "gift plants") {
        let img1 = document.createElement("img")
        img1.src = prodcut.img1
        img1.classList.add("col-3","p-0")
        let title = document.createElement("p")
        title.innerHTML = prodcut.title
        title.classList.add("fs-4","fw-semibold","text-uppercase","m-0")
        let selling_price = document.createElement("p")
        selling_price.innerHTML = prodcut.selling_price
        selling_price.classList.add("text-primary","fs-5","fw-semibold","d-inline")
        let orginal_price = document.createElement("p")
        orginal_price.innerHTML = prodcut.orginal_price
        orginal_price.classList.add("d-inline","ps-2","text-decoration-line-through","fw-semibold")
        let btn = document.createElement("button")
        btn.innerHTML = "buy now"
        btn.classList.add("d-block","btn","btn-outline-primary","fw-semibold","text-uppercase","col-3")
        let div = document.createElement("div")
        div.append(title, selling_price, orginal_price, btn)
        div.classList.add("col-9","p-4")
        let div2 = document.createElement("div")
        div2.append(img1,div)
        div2.classList.add("col-12","row","shadow","p-0")
        document.getElementById("cart").append(div2)
      }
    })
  };
  
  let get = async () => {
    let res = await fetch("http://localhost:3000/cart");
    let data = await res.json();
    ui(data);
    console.log(data)
  };
  
  get();