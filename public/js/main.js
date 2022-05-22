

function testLogin(){
    console.log("Checking Login");
    let status = sessionStorage.getItem("auth");
    if (!status || status != "true"){
        location.href = "../../";
    }
}

testLogin();

//Navigation between view
function navigate(path) {
    let url = path.split('/')[1];
    localStorage.setItem("selected",url);
    location.href= path;
}

//Toogle tab styles
function toogleSelect(){
    let path = localStorage.getItem("selected");
    if (!path){
        path = "dashboard";
    }
    let tabs = ['designation','department','attendance','employees','dashboard'];
    tabs.forEach(e=>{
        let li = document.querySelector(`#${e}`);
        if (e == path){
            li.className="on-select";
        } else {
            li.className="tabs"
        }
    });
}



//Show navigation panel
function showNav(){
    var nav = document.querySelector(".nav");
    nav.style.position = "absolute"
    nav.style.maxWidth = "250px";
    nav.style.minWidth = "250px";
}


//Hide Navigation panel
function hideNav(){
    var nav = document.querySelector(".nav");
    nav.style.maxWidth = "0px";
    nav.style.minWidth = "0px";
}


//Show and hide navigation panel on chagne in width
window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var nav = document.querySelector(".nav");

    if (newWidth > 500){
        nav.style.position = "relative";
        nav.style.maxWidth = "250px";
        nav.style.minWidth = "250px";
    } else {
        nav.style.maxWidth = "0px";
        nav.style.minWidth = "0px";
    }
});

//Close create modal
function closeModel(){
    document.querySelector(".background").style.display = "none";
}


//Open new create modal
function openModal(){
    document.querySelector(".background").style.display = "flex";
}


$(function () {
    toogleSelect();
    document.querySelector("#logout").addEventListener('click',()=>{
        sessionStorage.setItem("auth",false);
        location.href = "../../";
    });
    if (window.innerWidth < 500){
        var nav = document.querySelector(".nav");
        nav.style.maxWidth = "0px";
        nav.style.minWidth = "0px";
    }
});