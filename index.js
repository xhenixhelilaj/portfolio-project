const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active")
    }
});

const link = document.querySelector('a')
const introduction = document.querySelector('h1')
const body = document.querySelector('body')
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    introduction.classList.toggle('active')
    link.classList.toggle('active')





}