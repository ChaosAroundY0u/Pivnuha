const showBtn = document.getElementById("btn");
const hideBtn = document.getElementById('x');
const form = document.getElementById("wrapper");
const login = document.getElementById("login")
const register = document.getElementById("register")
const regLink = document.getElementById("reg_link")
const logLink = document.getElementById("log_link")
showBtn.addEventListener('click', () => {
    form.style.display = 'flex'; // Показываем форму
});
hideBtn.addEventListener('click',() => {
    form.style.display = "none";
});
regLink.addEventListener('click',() => {
    register.style.display ='block';
    login.style.display = 'none';
});
logLink.addEventListener('click',() => {
    register.style.display ='none';
    login.style.display = 'block';
});






// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link'); 
// const btnPopup = document.querySelector('.btnLogin-popup'); 








// loginLink.addEventListener('click',()=>{
//   wrapper.classList.add('active')   
// }); 
// btnPopup.addEventListener('click',()=>{
//     wrapper.classList.add('active-popup');
// });
// document.getElementById('openForm').onclick = function(event) {
//     event.preventDefault(); // Отменяем переход по ссылке
//     document.getElementById('myForm').style.display = 'block'; // Показываем форму
// };

// document.getElementById('closeForm').onclick = function() {
//     document.getElementById('myForm').style.display = 'none'; // Скрываем форму
// };
