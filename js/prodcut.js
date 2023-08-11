let id = -1

const ui = (data) => {
    let p=''
  data.map((ele) => {
    if(ele.catagary==flowering){
        p+=`
        <div class="col-12 col-md-6 col-lg-3">
              <div class="card my-4 border-0 shadow">
                <div id="slider12" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="${ele.img-1}" class="card-img-top poition-relative" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="${ele.img-2}" class="card-img-top poition-relative" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="${ele.img-3}" class="card-img-top poition-relative" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#slider12" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#slider12" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <span
                  class="position-absolute top-0 bg-primary start-50 translate-middle badge fs-6 p-2 text-uppercase">best-sells</span>
                <div class="card-body">
                  <p class="card-text text-uppercase fs-6 text-center m-0 fw-bold">${ele.title}</p>
                  <h5 class="card-title text-primary text-center fs-6 m-0"><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star"></i><span class="text-muted"></span></h5>
                  <p class="card-text  fs-5 text-center text-primary fw-bold m-0">${ele.selling-price}</p>
                  <p class="opacity-75 text-decoration-line-through text-center text-primary fw-semibold"> ${ele.orginal-price}</p>
                  <a href="home_decore.html" class="btn btn-outline-primary  fw-semibold col-12 text-uppercase fw-semibold">add to
                    cart</a>
                </div>
              </div>
            </div>
        `
    }
  })
  document.getElementById("flowersing-plant").innerHTML=p
  data.map((ele) => {
    if(ele.catagary==flowering){
        p+=`
        <div class="col-12 col-md-6 col-lg-3">
              <div class="card my-4 border-0 shadow">
                <div id="slider12" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="${ele.img-1}" class="card-img-top poition-relative" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="${ele.img-2}" class="card-img-top poition-relative" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="${ele.img-3}" class="card-img-top poition-relative" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#slider12" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#slider12" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <span
                  class="position-absolute top-0 bg-primary start-50 translate-middle badge fs-6 p-2 text-uppercase">best-sells</span>
                <div class="card-body">
                  <p class="card-text text-uppercase fs-6 text-center m-0 fw-bold">${ele.title}</p>
                  <h5 class="card-title text-primary text-center fs-6 m-0"><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star"></i><span class="text-muted"></span></h5>
                  <p class="card-text  fs-5 text-center text-primary fw-bold m-0">${ele.selling-price}</p>
                  <p class="opacity-75 text-decoration-line-through text-center text-primary fw-semibold"> ${ele.orginal-price}</p>
                  <a href="home_decore.html" class="btn btn-outline-primary  fw-semibold col-12 text-uppercase fw-semibold">add to
                    cart</a>
                </div>
              </div>
            </div>
        `
    }
  })
  document.getElementById("flowersing-plant").innerHTML=p
};

let get = async () => {
    let res = await fetch("http://localhost:3000/products");
    let data = await res.json();
    ui(data);
    console.log(data)
  };
  
get();

const productdata = (e) => {
    e.preventDefault();
    let value = document.getElementById("btn").value;
    console.log(value)
    let product = {
      title: document.getElementById("title").value,
      img: document.getElementById("img").value,
      price: document.getElementById("price").value,
      category: document.getElementById("category").value,
    };
    if (value == "submit") {
      fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(product)
      })
    }
    else {
      fetch(`http://localhost:3000/products/${id}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(product)
      })
    }
  
  }
  
  document.getElementById("form").addEventListener("submit", productdata);