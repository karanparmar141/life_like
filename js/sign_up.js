
// sign
const sign = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
  fetch(`http://localhost:3000/user?email=${user.email}`)
  .then((res) => res.json())
  .then((data)=> {
    if(data.length > 0){
      alert("user already exists")
      setTimeout(
        window.location.href="./index.html"
      ,2000);
    }
    else{
      fetch("http://localhost:3000/user",{
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
      })
    }
  })
  
}
document.getElementById("sign-page").addEventListener("submit", sign)
document.getElementById("email").addEventListener("keypress",()=>{
  let email=document.getElementById("email").value
  let e_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!e_pattern.test(email)) {
    document.getElementById("e_err").innerHTML=`enter the valid email`
    document.getElementById("e_err").classList.add("text-danger")
    document.getElementById("email").classList.add("border-danger")
    document.getElementById("email").classList.add("text-danger")
  }
  else{
    document.getElementById("e_err").innerHTML=`valid email`
    document.getElementById("e_err").classList.add("text-primary")
    document.getElementById("e_err").classList.remove("text-danger")
    document.getElementById("email").classList.add("border-primary")
    document.getElementById("email").classList.remove("border-danger")
    document.getElementById("email").classList.remove("text-danger")
    document.getElementById("email").classList.add("text-primary")
  }
})
document.getElementById("password").addEventListener("keypress",(e)=>{
  let password=document.getElementById("password").value
  let p_pattern = /(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}/;

  if (!p_pattern.test(password)) {
    document.getElementById("p_err").innerHTML=`plase enter the propar password`
    document.getElementById("p_err").classList.add("text-danger")
    document.getElementById("password").classList.add("border-danger")
    document.getElementById("password").classList.add("text-danger")
  }
  else{
    document.getElementById("p_err").innerHTML=`valid password`
    document.getElementById("p_err").classList.add("text-primary")
    document.getElementById("p_err").classList.remove("text-danger")
    document.getElementById("password").classList.add("border-primary")
    document.getElementById("password").classList.remove("border-danger")
    document.getElementById("password").classList.remove("text-danger")
    document.getElementById("password").classList.add("text-primary")
  }
})

document.getElementById("name").addEventListener("keypress",(e)=>{
  let name=document.getElementById("name").value
  let n_pattern = /^[a-zA-Z ]+$/;

  if (!n_pattern.test(name)) {
    document.getElementById("n_err").innerHTML=`plase enter the propar name`
    document.getElementById("n_err").classList.add("text-danger")
    document.getElementById("name").classList.add("border-danger")
    document.getElementById("name").classList.add("text-danger")
  }
  else{
    document.getElementById("n_err").innerHTML=``
    document.getElementById("n_err").classList.add("text-primary")
    document.getElementById("n_err").classList.remove("text-danger")
    document.getElementById("name").classList.add("border-primary")
    document.getElementById("name").classList.remove("border-danger")
    document.getElementById("name").classList.remove("text-danger")
    document.getElementById("name").classList.add("text-primary")
  }
})