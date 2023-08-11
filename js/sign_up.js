if(password>=8){
  document.getElementById("l-p").innerHTML=`* Enter the password greter then 8 char *`
}
const sign_up= (data)=>{
    let mail=document.getElementById("email-s").value;
    let password_s=document.getElementById("password-s").value;
    console.log(data.email)
    data.map((ele)=>{
        if(mail==(ele.email)){
            window.loy2
        }
    })
        
}
let get = async () => {
  let user = await fetch('http://localhost:3000/user');
  let data = await user.json();
//   console.log(data)
  sign_up(data);
};

get();
document.getElementById("sign").addEventListener("submit",sign_up)


// login


const login=(e)=>{
    e.preventDefault();
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
}
document.getElementById("login-page").addEventListener("submit", login)