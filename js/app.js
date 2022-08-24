var menuIcon = document.querySelector(".menu-icon")
var sideBar = document.querySelector(".sidebar")
var conatainer = document.querySelector(".container")
var darkMode = document.querySelector(".nav-right #dark")
var icon = document.querySelector(".nav-right #dark i")
var user =document.querySelector("#user")
var sub_menu =document.querySelector(".sub_menu")
var p_dark =document.querySelector(".nav-right #dark #p_dark")
var recommnedTag =document.querySelector(".recomend_tag")
console.log(recommnedTag)
menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar")
    conatainer.classList.toggle("large-container")
    recommnedTag.classList.toggle("large-container")
}
darkMode.onclick = function(){
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon.classList.add('fa-sun') 
        icon.classList.remove('fa-moon')
        p_dark.innerText="Appearance: Dark"
     }else{
        icon.classList.remove('fa-sun') 
        icon.classList.add('fa-moon')
        p_dark.innerText="Appearance: Light"
     }
}

user.addEventListener('click',function(){
    sub_menu.classList.toggle("sub_menu_display")
})
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        sub_menu.classList.remove("sub_menu_display")
    }
    
})