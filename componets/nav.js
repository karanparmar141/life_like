const navbar=()=>{
    return `<header class="navbar navbar-expand-lg hedaer-bg">
    <div class="container">
      <a class="navbar-brand text-primary fw-bold fs-4 my-3" href="#"><img src="img/icon.png" alt=""
          class="col-3 p-1"><span class="text-white">Life Like</span></a>
      <button class="navbar-toggler border-0 shadow-none" data-bs-toggle="collapse" data-bs-target="#dropdown">
        <i class="bi bi-list text-white fs-3 navbar-toggler-icon"></i>
      </button>
      <nav class="collapse navbar-collapse" id="dropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item fw-semibold px-3 h6"><a href="index.html"
              class="nav-link hover text-primary text-uppercase">home+</a>
          </li>
          <li class="nav-item fw-semibold px-3 h6"><a href="home_decore.html"
              class="nav-link hover text-white text-uppercase">home decore+</a>
          </li>
          <li class="nav-item fw-semibold px-3 h6"><a href="fern.html"
              class="nav-link hover text-white text-uppercase">fern+</a>
          </li>
          <li class="nav-item fw-semibold px-3 h6"><a href="#"
              class="nav-link text-muted text-uppercase">more+</a>
          </li>
          <li class="nav-item fw-semibold px-3 h6"><a href="blog.html"
              class="nav-link hover text-white text-uppercase">blog+</a>
          </li>
        </ul>

        <div class="row ms-lg-2">
          <button class="btn btn-success btn-56 rounded-0 py-3 px-3" data-bs-toggle="collapse"
            data-bs-target="#search"><i class="bi bi-search  fw-bold"></i></button>
          <a href="sign_up.html" type="button" class="btn btn-success btn-56 rounded-0 py-2 px-2"><i
              class="bi bi-person p-1 fs-4 fw-bold"></i></a>
          <button class="btn btn-success btn-56 rounded-0 py-2 px-2 position-relative" data-bs-toggle="offcanvas"
          data-bs-target="#launch-offcanvas"><i class="bi bi-cart fs-4 fw-bold"></i><span
              class="position-absolute top-0 start-100 translate-middle badge fs-6 rounded-pill bg-primary">2</span></button>
        </div>
      </nav>
    </div>
    <div class="not-fond">
      <div class="collapse" id="search">
        <div class="col-6 col-lg-3 ms-auto card card-body position-absolute serach-box">
          <div class="input-group">
            <input type="text" class="form-control py-2 border-0" placeholder="Search....">
          </div>
        </div>
      </div>
      <div id="liveAlertPlaceholder" class="position-absolute alret-position w-100"></div>
    </div>
  </header>`
}

export default navbar;