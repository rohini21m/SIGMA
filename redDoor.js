window.addEventListener('scroll',()=>{
    var Nav = document.getElementsById("nav");
    Nav.classList.toggle('sticky',scrollY >0)});
var his = document.getElementById("jar");
var hers = document.getElementById("jug");
    hers.style.color = "black";
    his.style.color = "black";
function changeColor()
{
   {
        his.style.color = his.style.color == "black" ? "blue" : "green" ; 
        
        hers.style.color =  hers.style.color == "black" ? "green" : "red" ;
    
   }
}

window.setTimeout(changeColor,1000);


var modalBtn = document.querySelector('.talk');
var modal = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var closeBtn = document.querySelector('.close-button');

modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});
modal.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});

closeBtn.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
   
})