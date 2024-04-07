let user_con =document.querySelector('.user-container');
let regis_btn = document.querySelector(".registeration-btn");
let login_btn =document.querySelector(".login-btn")
regis_btn.addEventListener("click", ()=>{
 user_con.classList.add("login-section--display");
})
login_btn.addEventListener("click", ()=>{
 user_con.classList.remove("login-section--display");
})