"use strict";
//-----------------------------------------------------------------------SIGN UP -  Modal Window.
var modalReg = document.querySelector('.modalReg');
var modalEnter = document.querySelector('.modalEnter');
var overflow = document.createElement('div');
function openWin() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    var height = modalReg.offsetHeight;
    modalReg.style.marginTop = - height / 2 + "px";
    modalReg.style.top = "50%";
    closeWin();
}
//----------------------------------------------------------------------Close  - modal Windows.
function closeWin() {
    if (!Element.prototype.remove) {
        Element.prototype.remove = function remove() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    overflow.onclick = function () {
        modalReg.style.top = "-100%";
        modalEnter.style.top = "-100%";
        overflow.remove();
    };
}
//--------------------------------------------------------------------------LOG IN -  users.
function openWinEnter() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    var height = modalEnter.offsetHeight;
    modalEnter.style.marginTop = - height / 2 + "px";
    modalEnter.style.top = "50%";
    closeWin();
}
//------------------------------------------------------------------------Validation rules.
var regMail = /^([a-zA-Z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
var regName = /^([а-яА-Яa-zA-Z0-9_\-]{4})/;
var regPass = /^([а-яА-Яa-zA-Z0-9_\-\!\@\+]{6})/;
//----------------------------------------------------------------Validation the entered data by the user.
function validate() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("password").value;
    var repPass = document.getElementById("repPassword").value;
    if (name.length < 0 || regName.test(name) == false){
        document.getElementById("name").className = "error";
        document.getElementById("errorName").innerHTML = "Bad name. Please try again.";
        return false;
    }
    document.getElementById("name").className = "";
    if(pass.length < 0 || regPass.test(pass) == false){
        document.getElementById("password").className = "error";
        document.getElementById("errorName").innerHTML = "Bad pass. Please try again.";
        return false;
    }
    document.getElementById("password").className = "";
    if(regPass.length < 0 || pass !== repPass){
        document.getElementById("repPassword").className = "error";
        document.getElementById("errorName").innerHTML = "Bad re-pass. Please try again.";
        return false;
    }
    document.getElementById("repPassword").className = "";
   if(mail.length < 0 || regMail.test(mail) == false){
       document.getElementById("mail").className = "error";
       document.getElementById("errorName").innerHTML = "Bad e-mail. Please try again.";
       return false;
   }
    document.getElementById("mail").className = "";
    if (true) {
        alert(" ВІТАЄМО " + name + " ! Ви успішно зареєструвались. ");
        setData();
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("password").value = "";
        document.getElementById("repPassword").value = "";
        document.getElementById("name").className = "";
        document.getElementById("mail").className = "";
        document.getElementById("password").className = "";
        document.getElementById("repPassword").className = "";
        document.getElementById("errorName").innerHTML = "";
        closeFormWin();
        openWinEnter();
    }
}
//---------------------------------------------------------Put entered user data in localStorage.
function setData (){
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("password").value;
    var data = {userName: name, userMail: mail, userPass: pass};
    var stringData = JSON.stringify(data);
    localStorage.setItem("data", stringData);
}
//Create <p> teg and put text with localStorage.
function getData() {
    var parsedData = JSON.parse(localStorage.getItem("data"));
    var inputValueName = parsedData.userName;
    var inputValueMail = parsedData.userMail;
    var inputValuePass = parsedData.userPass;
    document.getElementById("userTextMain").innerHTML = "USER INFORMATION:";
    document.getElementById("userDataText").innerHTML = "NAME:  " + inputValueName;
    document.getElementById("MailDataText").innerHTML = "E-MAIL:  " + inputValueMail;
}
//----------------------------------------------------------Validation for registered users.
function validationEnter() {
    var mail = document.getElementById("mailEnter").value;
    var pass = document.getElementById("passwordEnter").value;
    var user = JSON.parse(localStorage.getItem("data")).userName;
if (mail =="" || pass =="") {
    document.getElementById("mailEnter").className = "error";
    document.getElementById("passwordEnter").className = "error";
    document.getElementById("errorMailEnter").innerHTML = "Bad mail or pass. Please try again.";
} else if (mail.length > 2){
    document.getElementById("mailEnter").className = "";
    document.getElementById("passwordEnter").className = "error";
    document.getElementById("errorMailEnter").innerHTML = "Bad pass. Please try again.";
}
    if (mail == JSON.parse(localStorage.getItem("data")).userMail && pass == JSON.parse(localStorage.getItem("data")).userPass) {
        getData();
        document.getElementById("userNameNav").innerHTML = "<img class=\"userIcon\" src=\"img\\user-icon3.png\"><a id=\"userDataButtonNav\"class=\"butData\"style=\"display: none\">"+"</a>";
        document.getElementById("regButtonNav").style.display = "none";
        document.getElementById("logOutButtonNav").style.display = "block";
        document.getElementById("userDataButtonNav").style.display = "block";
        document.getElementById("mailEnter").value = "";
        document.getElementById("passwordEnter").value = "";
        document.getElementById("passwordEnter").className = "";
        document.getElementById("errorMailEnter").innerHTML = "";
        userConnect();
        // if (true){
            closeFormWin();
        // }
    } else {
        if (mail.length > 2){
            document.getElementById("mailEnter").className = "";
        } else if (pass ==""){
            document.getElementById("passwordEnter").className = "error";
        }
    }
}
//----------------------------------------------------------------------Log OUT user.
function logOutWin() {
    userDisConnect();
    home();
    document.getElementById("userNameNav").innerHTML = "";
    document.getElementById("regButtonNav").style.display = "block";
    document.getElementById("logOutButtonNav").style.display = "none";
    document.getElementById("userDataText").innerHTML = "";
    document.getElementById("MailDataText").innerHTML = "";
    document.getElementById("userTextMain").innerHTML = "";
    //document.getElementById("userDataButtonNav").style.display = "none";
}
//---------------------------------------------------------------Close modal windows - X - START!
function closeFormWin() {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("password").value = "";
    document.getElementById("repPassword").value = "";
    document.getElementById("name").className = "";
    document.getElementById("mail").className = "";
    document.getElementById("password").className = "";
    document.getElementById("repPassword").className = "";
    document.getElementById("errorName").innerHTML = "";
    document.getElementById("mailEnter").value = "";
    document.getElementById("passwordEnter").value = "";
    document.getElementById("passwordEnter").className = "";
    document.getElementById("errorMailEnter").innerHTML = "";
    modalReg.style.top = "-100%";
    modalEnter.style.top = "-100%";
    overflow.remove();
}
//------------------------------------------------------------------Close modal windows - X - END!
//--------------------------------------------------------SHOW / HIDE -  modal windows - data user - START!
// window.onload = function(){
//     document.querySelector('#userNameNav').onmouseover = menuShow;
//     document.querySelector('#userNameNav').onmouseout = menuHide;
//     document.onmouseout = function (event) {
//         console.log(event);
//     }
//     function menuShow(){
//         document.querySelector('#menu').style.left = '0';
//     }
//     function menuHide(){
//         document.querySelector('#menu').style.left = '-230px';
//     }
// }
//---------------------------------------------------------SHOW / HIDE -  modal windows - data user - END!
// -----------------------------------------------------Change Modal Window : Registration and login - START!
function changeModalWinLog() {
    closeFormWin();
    openWinEnter();
}
function changeModalWinSign() {
    closeFormWin();
    openWin();
}
// -----------------------------------------------------Change Modal Window : Registration and login - END!
// -----------------------------------------------------------SWITCH DIV IN INDEX PAGE - START!
function home() {
    document.getElementById("main-container-about").style.display = "none";
    document.getElementById("infoBlock-about").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("example-section").style.display = "none";
    document.getElementById("slider").style.display = "block";
    document.getElementById("infoBlock-index").style.display = "flex";
    document.getElementById("about-check-top").style.color = "#505050";
    document.getElementById("about-check-bottom").style.color = "#505050";
    document.getElementById("example-check-top").style.color = "#a2a9af";
    document.getElementById("example-check-bottom").style.color = "#a2a9af";
}
// ----------------------------------------------------SWITCH DIV IN INDEX PAGE - END!
//-----------------------------------------------------SWITCH DIV IN ABOUT PAGE - START!
function about(){
    document.getElementById("slider").style.display = "none";
    document.getElementById("infoBlock-index").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("example-section").style.display = "none";
    document.getElementById("main-container-about").style.display = "block";
    document.getElementById("infoBlock-about").style.display = "block";
    document.getElementById("about-check-top").style.color = "#FD7013";
    document.getElementById("about-check-bottom").style.color = "#FD7013";
    document.getElementById("example-check-top").style.color = "#a2a9af";
    document.getElementById("example-check-bottom").style.color = "#a2a9af";
}
//-----------------------------------------------------SWITCH DIV IN ABOUT PAGE - END!
//-----------------------------------------------------SWITCH DIV IN EXAMPLE PAGE - START!
function examples() {
    document.getElementById("slider").style.display = "none";
    document.getElementById("infoBlock-index").style.display = "none";
    document.getElementById("main-container-about").style.display = "none";
    document.getElementById("infoBlock-about").style.display = "none";
    document.getElementById("main").style.display = "flex";
    document.getElementById("example-section").style.display = "flex";
    document.getElementById("about-check-top").style.color = "#505050";
    document.getElementById("about-check-bottom").style.color = "#505050";
    document.getElementById("example-check-top").style.color = "#FD7013";
    document.getElementById("example-check-bottom").style.color = "#FD7013";
}
function modal(){
    document.getElementById("line").style.display = "none";
    document.getElementById("modal").style.display = "block";
    document.getElementById("mod").style.color = "#FD7013";
    document.getElementById("under").style.color = "#505050";
}
function under(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("line").style.display = "block";
    document.getElementById("under").style.color = "#FD7013";
    document.getElementById("mod").style.color = "#505050";
}
//-----------------------------------------------------SWITCH DIV IN EXAMPLE PAGE - END!
//------------------------------------------------------------close and open EXAMPLE page - START!
window.onload = function (){
    userDisConnect();
}
function userDisConnect(){
    document.getElementById("exampleOffNav").setAttribute("onclick", "alertDisConnect()");
    document.getElementById("exampleOffFut").setAttribute("onclick", "alertDisConnect()");
}
function userConnect() {
    document.getElementById("exampleOffNav").setAttribute("onclick", "examples()");
    document.getElementById("exampleOffFut").setAttribute("onclick", "examples()");
}
function alertDisConnect() {
    openWin();
}
//------------------------------------------------------------close and open EXAMPLE page - END!