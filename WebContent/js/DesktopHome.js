//var imported = document.createElement('script');
//imported.src = '../Scripts/jquery.youtubepopup.min.js';
//document.head.appendChild(imported);




var ClassesArray = [];

var SeatingObjForClassTid;
var OtherChargesArray = [];
var InclusiveChargesArray = [];
var MyAccDetailsObj;
var MovieDataObj;

var CurrentClassSelectedSeatsArray = [];
var CurrentClassSeatsCaptionArray = [];


jQuery_1_7_1(document).ready(function () {

    // isItMobileDevice();
    // msieversion();

//    var imported = document.createElement('script');
//    imported.src = '../Scripts/jquery.youtubepopup.min.js';
//    //document.head.appendChild(imported);
//    document.body.appendChild(imported);

    menuObj = new menuState();

    var url = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    jQuery_1_7_1('[href$="' + url + '"]').parent().addClass("active");


    jQuery_1_7_1('.slide').marquee({ delay: 3000 });
    jQuery_1_7_1("#tabs").tabs();

    jQuery_1_7_1('.head').click(function (e) {
        e.preventDefault();
        jQuery_1_7_1(this).parent().parent().siblings().find('.content').hide();
        jQuery_1_7_1(this).closest('li').find('.content').slideToggle();
    });


    
    function GetTrailers() {
        jQuery_1_7_1("img.youtube").YouTubePopup({ idAttribute: 'id' });
    }
    // jQuery_1_7_1('.slide').marquee({ delay: 3000 });
    //nowfun();

    jQuery_1_7_1(document).ajaxStart(function () {
        showLoading();
    });

    jQuery_1_7_1(document).ajaxStop(function () {
        setTimeout(stopLoading, 500);
    });

    backAndHome = new BackAndHomeObj();
    LocalPrefObj = new getUserPrefFromLocal();
    LoadHomePage();

});


function LoadHomePage() {
    showCity();
    MoviesObj = new MoviesJs()
    MoviesObj.getMovies1();
}


var showmessagecounter = 0;
var showmessageinterval;
function showmessagetocustomer(message1) {
    showmessagecounter = 0;
    var messagediv = document.getElementById("messagetocustomerdiv");
    messagediv.innerHTML = "<font color=red><b>" + message1 + "</b></font>";
    messagediv.style.display = "block";
    showmessageinterval = setInterval("actualshow('" + message1 + "')", 750);
    //setTimeout("actualshow('" + message1 + "')", 500);
}

function actualshow(message1) {
    showmessagecounter++;
    var messagediv = document.getElementById("messagetocustomerdiv");
    if ((showmessagecounter % 2) == 0) {
        messagediv.innerHTML = "<font color=red><b>" + message1 + "</b></font>";
        messagediv.style.display = "block";
    }
    else {
        messagediv.innerHTML = "<font color=white><b>" + message1 + "</b></font>";
        messagediv.style.display = "block";
    }
    if (showmessagecounter > 10) {
        clearInterval(showmessageinterval);
        messagediv.style.display = "none";
    }
//    var messagediv = document.getElementById("messagetocustomerdiv");
//    messagediv.innerHTML = "<font color=red><b>" + message1 + "</b></font>";
}


function hidemessagetocustomer() {
    var messagediv = document.getElementById("messagetocustomerdiv");
    messagediv.innerHTML = "";
    messagediv.style.display = "none";
}





function back() {
    backAndHome.goBack();
}

function forward(innerHtmlText, current, next) {
    backAndHome.goForwardInnerHtml(innerHtmlText, current, next);
}


function showCity() {

    var citycodeCookie = getCookie("citycodeCookie");
    var citynameCookie = getCookie("citynameCookie");
    if (citycodeCookie != null && citycodeCookie != "") {
        citycode = citycodeCookie;
        //cityName = getCityName(citycode);
        cityName = citynameCookie;
        document.getElementById('city').innerHTML = cityName;
        setCityInfo(cityName, citycode);
    }
    else {
        citycode = '1';
        //cityName = getCityName(citycode);

        

        cityName = "Hyderabad";

        setCookie("citycodeCookie", citycode, 1);
        setCookie("citynameCookie", cityName, 1);

        document.getElementById('city').innerHTML = cityName;

        setCityInfo(cityName, citycode);
        
    }
}
function getCityName(citycode) {

     //alert("citycode " + citycode);
    var cityName = "";

    if (citycode == "1") {
        cityName = "Hyderabad";
    }
    else if (citycode == "20") {
        cityName = "Warangal";
    }
    else if (citycode == "4") {
        cityName = "Kakinada"; 
    }
    else if (citycode == "5") {
        cityName = "Rajahmundry";
    }
    else if (citycode == "6") {
        cityName = "Vijayawada";
    }
    else {
        cityName = "--";
    }
    return cityName;
}
function setCityInfo(cityName, citycode) {
    bookingInfo = new bookingObj();
    bookingInfo.setCityInfo(cityName, citycode);
}

function setCity(id) {

    var citycode = id.split('_');
    //var cityName = getCityName(citycode[1]);
    var cityName = citycode[2];
    setCookie("citycodeCookie", citycode[1], 1);
    setCookie("citynameCookie", cityName, 1);
    document.getElementById('city').innerHTML = cityName;

    setCityInfo(cityName, citycode[1]);

    //alert('test' + citycode[1]);
    getMovies();
    stopAlertDialog();
}
function showLoading() {
    overlay2.appendTo(document.body);
    overlay2.show(100);
    jQuery_1_7_1('#Loading').show(100);
    return false;
}

function stopLoading() {
    jQuery_1_7_1('#Loading').hide(100);
    overlay2.hide(100);
    overlay2.appendTo(document.body).remove();
    return false;
}


function selectCity() {
   // alert('select city1');
    showAlertDialog();

}

function debugMode() {
    document.getElementById('nlbDiv').setAttribute('style','display:block;');
}
function closeDebugMode() {
    document.getElementById('nlbDiv').setAttribute('style', 'display:none;');
}


function mouseOverOnCity(id) {
    document.getElementById(id).style.color = "red";
}
function mouseOutOnCity(id) {
    document.getElementById(id).style.color = "blue";
}

function mouseOverOnMenu(id) {
    document.getElementById(id).style.color = "#FFDe00";
}
function mouseOutOnMenu(id) {
    document.getElementById(id).style.color = "white";
}

function onCityMouseDown(id) {
    document.getElementById(id).style.backgroundColor = "red";
    document.getElementById(id).style.color = "blue";
}
function onCityMouseUp(id) {

    document.getElementById(id).style.backgroundColor = "#E7E2E2";    
    document.getElementById(id).style.color = "black";
}



var nlbflag = true;
function nlbStatus(nlb) {

    var pip = nlb.publicIp;
    var lip = nlb.localIp;

    var LipSpan = document.getElementById('Lip');
    while (LipSpan.firstChild) {
        LipSpan.removeChild(LipSpan.firstChild);
    }

    var PipSpan = document.getElementById('Pip');
    while (PipSpan.firstChild) {
        PipSpan.removeChild(PipSpan.firstChild);
    }

    if (nlbflag) {

        //PipSpan.appendChild(document.createTextNode("V-010815-" + pip));
        //PipSpan.appendChild(document.createTextNode("V-251215-" + pip)); // for prepare data changes of act file consideration
        //PipSpan.appendChild(document.createTextNode("V-311215-" + pip)); // new city vijayawada added
        //PipSpan.appendChild(document.createTextNode("V-040116-" + pip));// Email id Added in wallet booking
        //PipSpan.appendChild(document.createTextNode("V-060116-" + pip));  // printing Booking confirmation for Em Office users
        //PipSpan.appendChild(document.createTextNode("V-130116-" + pip));  // stoping cancellation for nannaku prematho
        //PipSpan.appendChild(document.createTextNode("V-190216-" + pip));  // for act theatres

        PipSpan.appendChild(document.createTextNode("V-270216-" + pip));  // New Cities From text file
        PipSpan.setAttribute('style', 'color:blue;');
        LipSpan.appendChild(document.createTextNode("V-270216-" + lip));
        LipSpan.setAttribute('style', 'color:blue;');

        nlbflag = false;
    }
    else {

        PipSpan.appendChild(document.createTextNode("V-270216-" + pip));
        PipSpan.setAttribute('style', 'color:red;');
        LipSpan.appendChild(document.createTextNode("V-270216-" + lip));
        LipSpan.setAttribute('style', 'color:red;');
        nlbflag = true;
    }
}




function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}


function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);

    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}


function restartMarquee() {
   
}


var menus = ["HomeAndMyAccount", "TheatreList", "RechargeOutlets", "Trailers" , "FAQ", "ContactUs", "PrivacyPolicy", "PurchasePolicy", "TermsAndConditions", "AboutUs", "RefundPolicy"]



var menuObj;

function menuState() {

    this.showDiv = function (divid) {

         //alert("divid " + divid);
        
        for (var i = 0; i < menus.length; i++) {
            if (divid == menus[i]) {

                document.getElementById(menus[i]).setAttribute('style', 'display:block;');
               if(divid == "Trailers")
               {
                 DisplayContentOnTheDiv(divid);
                }
            }
            else {
                document.getElementById(menus[i]).setAttribute('style', 'display:none;');
            }

        }
        //  sse2.buildMenu();
    }
}

function DisplayContentOnTheDiv(divid1) {
    if (divid1 == 'Trailers') {
    var DisplayHTML = "<div style='width: 900px; height: 500px; background-color: White;'>";

        DisplayHTML += "<div>";
                DisplayHTML +="<table align='center'>";
                    DisplayHTML +="<tr>";
                        DisplayHTML +="<th colspan='4' style='font-family: PT Sans Narrow, sans-serif; font-size: 30px;color: black; text-align: center;'>"
                            DisplayHTML +="Movie Trailers";
                        DisplayHTML +="</th>";
                    DisplayHTML +="</tr>";
                    DisplayHTML +="<tr>";
                        DisplayHTML +="<td>"
                        DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='3NQRhE772b0' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer1.jpg' title='Linga' alt='Linga' />"
                                
                        DisplayHTML +="</td>";
                        DisplayHTML +="<td>";
                        DisplayHTML += "<img class='youtube imgTrl' onclick='GetTrailers()'id='VLktIc7QX-8' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer2.jpg' title='PK' alt='PK' />"
                        DisplayHTML += "</td>"
                        DisplayHTML += "<td>";
                        DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='vyX4toD395U' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer3.jpg' title='Chinnadaana Neekosam' alt='Chinnadaana Neekosam' />"
                        DisplayHTML +="</td>";
                        DisplayHTML +="<td>";
                        DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='Fc0QmDnNy3U' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer4.jpg' title='Mukundaaa' alt='Mukundaaa' />";
                        DisplayHTML +="</td>";
                    DisplayHTML +="</tr>";
                    DisplayHTML +="<tr>";
                        DisplayHTML +="<td>";
                        DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='RSw1ZyKTya4' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer5.jpg' title='I' alt='I' />";
                        DisplayHTML +="</td>";
                        DisplayHTML +="<td>";
                        DisplayHTML += "<img class='youtube imgTrl' onclick='GetTrailers()'id='QuRSCU0tOKs' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer6.jpg'title='Lakshmi Raave Maa Intiki' alt='Lakshmi Raave Maa Intiki' />";
                        DisplayHTML +="</td>";
                        DisplayHTML +="<td>";
                        DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='Xs-PfHc7rpk' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer7.jpg'title='Rudramadevi' alt='Rudramadevi' />";
                        DisplayHTML +="</td>";
                        DisplayHTML +="<td>";
                        DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='pXwaKB7YOjw' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer8.jpg'title='Rough' alt='Rough' />";
                        DisplayHTML +="</td>";
                    DisplayHTML +="</tr>";
                    DisplayHTML +="<tr>";
                       DisplayHTML +=" <td>";
                       DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='NsJJLpF4b34' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer9.jpg'title='Action Jaction' alt='Action Jaction' />";
                        DisplayHTML +="</td>";
                        DisplayHTML +="<td>"
                        DisplayHTML += "<img class='youtube imgTrl' onclick='GetTrailers()' id='4d-4jEBh8aY' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer10.jpg'title='Avunu2' alt='Avunu2' />";
                        DisplayHTML +="</td>";
                        DisplayHTML +="<td>";
                        DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='e8pPCF5-2ic' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer11.jpg'title='Yamaleela-2' alt='Yamaleela-2' />";
                        DisplayHTML +="</td>";
                        DisplayHTML +="<td>";
                        DisplayHTML += "<img class='youtube imgTrl'onclick='GetTrailers()' id='FpK41kiX9DI' src='http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/trailer12.jpg'title='Rey' alt='Rey' />";
                        DisplayHTML +="</td>";
                    DisplayHTML +="</tr>";
                DisplayHTML +="</table>";
            DisplayHTML +="</div>"
        document.getElementById(divid1).innerHTML = DisplayHTML;
    }

}





function gotoMenu(menuName) {
    
    
    menuObj.showDiv(menuName);
}



var SubMenus = ["MyAccountDetails", "CheckReservations",  "ChangePassword"];
function MyAccountSubMenuState(id) {

    for (var i = 0; i < SubMenus.length; i++) {
        if (id == SubMenus[i]) {
            // document.getElementById(SubMenus[i]).className = 'active';
            document.getElementById(SubMenus[i]).setAttribute('style','text-align:center;background-color:red;float:left;height:100%;width:9.2%;padding-left:1px; padding-right:1px;border-width:1px;border-style:solid;border-color:Black;color:white;');
           // style = 'text-align:center;background-color:#BBBBBB;float:left;height:100%;width:9.2%;padding-left:1px; padding-right:1px;border-width:1px;border-style:solid;border-color:Black;color:#9B9B9B'
        }
        else {
            document.getElementById(SubMenus[i]).setAttribute('style', 'text-align:center;background-color:#b2ddfe;float:left;height:100%;width:9.2%;padding-left:1px; padding-right:1px;border-width:1px;border-style:solid;border-color:Black;color:black;');
            //document.getElementById(SubMenus[i]).className = "";
        }
    }

}

//function comfun() {
//    var divid = document.getElementById('imageSlider');
//    var images = divid.getElementsByTagName('img');
//    var i;
//    document.getElementById('btnCom').style.border = "5px solid #3090C7";
//    document.getElementById('btnNow').style.border = "5px solid Lime";
//    for (i = 0; i < images.length; i++) {
//        images[i].src = "http://easymoviesindia.com/newsite/coming" + (i + 1) + ".jpg";
//    }
//}

//function nowfun() {
//    var divid = document.getElementById('imageSlider');
//    var images = divid.getElementsByTagName('img');
//    var i;
//    document.getElementById('btnNow').style.border = "5px solid #3090C7";
//    document.getElementById('btnCom').style.border = "5px solid Lime";
//    for (i = 0; i < images.length; i++) {
//        images[i].src = "http://easymoviesindia.com/newsite/nowshowing" + (i + 1) + ".jpg";
//    }

//}
function comfun() {

    document.getElementById('NowPlaying').setAttribute('style', 'display:none;');
    document.getElementById('comingSoon').setAttribute('style', 'display:block');
    
}

function nowfun() {
    document.getElementById('comingSoon').setAttribute('style', 'display:none;');
    document.getElementById('NowPlaying').setAttribute('style', 'display:block');
}