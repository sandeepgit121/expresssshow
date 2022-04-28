var TOrderId = "";
var IsOfClicked = false;
var retVal;
function GoToBooking() {

    //alert(SeatingObj.seats);

    if (SeatingObj.seats != null && SeatingObj.seats != "") {
        var AllSeats = SeatingObj.seats.toString();
        //alert(AllSeats);
        CheckIsReserved(AllSeats);
        //alert(retVal);
        if (retVal == "yes") {
            //alert(SeatingObjForClassTid.seatingData);
            SeatTimer = 0;
            bookingInfo.setCinemaSeqNo(SeatingObjForClassTid.seatingData.cinemaSeqNo);
            bookingInfo.seatInfo(SeatingObj.count, SeatingObj.seats, SeatingObj.seatNosWithRow);

            var PrevShowsInnerHtml = document.getElementById('spareDiv').innerHTML;
            var current = "showsDiv";
            var next = "PaymentDiv";

            forward(PrevShowsInnerHtml, current, next);
            
            CollectUserDetailsForCC();
            stopSeatingPopupProceed();
            //stopSeatingPopup();
            //alert(SetTimerVar) 
            TOrderId = GetOrder_Id();
        }
        else {
            alert("sorry....Please select other seats");
        }
        //alert(bookingInfo.TOrderID);
    }
    else {
        alert('!..Plz Select Seats');
        return true;
    }
}

function CheckIsReserved(ChkseatIndex) {
    var IsOFRet = "";
    ChkDtshno = this.ChkDtshno;
    var params = {};
    //ChkseatIndex = parseInt(ChkseatIndex) - 1;
    // params.citycode = citycode;
    params.seatno = ChkseatIndex;
    params.dtshNo = this.ChkDtshno;

    var seatinginfo = { "seating": params };

    jQuery_1_7_1.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServerDataForDesktop.asmx/ChkSeat",
        data: JSON.stringify(seatinginfo),
        dataType: "json",
        async: false,

        // cache: false,
        beforeSend: function () {

        },
        success: function (seatsData) {

            SeatingObjForClassSId = seatsData.d;
            var seatingDataObj = SeatingObjForClassSId.result;
            if (seatingDataObj.result == "yes") {
                retVal = seatingDataObj.result;
            }
            else {
                getSeatingForClass(ChkCity, ChkMovieId, ChkDtshno, ChkShowDate, ChkThid, ChkShowTime, ChkPrice, ChkTheatreName, ChkDate)
                retVal = "no";
            }
        },
        error: function (statusCode, errorThrown) {
            if (statusCode.status == 0) {
                alert("you're offline");
            }
        },
        complete: function (transport) {

        }
    });
}


function GetOrder_Id() {
    //alert("S");
    var putReqinfo = {};
    var BookingOrderID = "";
    jQuery_1_7_1.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServerDataForDesktop.asmx/GetOrderId",
        data: JSON.stringify(putReqinfo),
        dataType: "json",
        async: true,
        success: function (data, textStatus) {
            //alert(textStatus + " - " + data.d);
            if (textStatus == "success") {
                if (data.hasOwnProperty('d')) {
                    msg = data.d;
                } else {
                    msg = data;
                    Returndata = msg;

                    //test = msg;
                }
                BookingOrderID = msg;
                bookingInfo.TOrderID = BookingOrderID;
                //alert(Returndata);
                //BlockingResponseObj = putReqResponseObj;
                return BookingOrderID;
            }
        },
        error: function (statusCode, errorThrown) {
            if (statusCode.status == 0) {
                showAndroidToast("you're offline");
            }
        },
        complete: function (transport) {

        }
    });
    }




function CollectUserDetailsForCC() {

    var mobileNumber = "";
    var Password = "";
    var Memid = "";
    var IsActive = "";
    var MemName = "";
    var EmailId = "";
    var Balance = "";
    var ValueOfTime = document.getElementById("BlockTime").innerHTML;
    //alert(SetTimerVar);
    if (LocalPrefObj != null) {

         mobileNumber = LocalPrefObj.MNoValue;
         Password = LocalPrefObj.userPwd;

        if (mobileNumber != null && Password != null && mobileNumber != "" && Password != "") {


            Memid = LocalPrefObj.userMemId; //0
            IsActive = LocalPrefObj.userIsActive; //1          
            MemName = LocalPrefObj.NameValue; //3
            EmailId = LocalPrefObj.EmailIdValue; //4
            Balance = LocalPrefObj.PremoneyValue; //5
           

        }
      
    }


    var BookingSummeryDiv1 = "<div style='display:table-row;width:100%;height:auto;background-color:white;color:black;text-align:center;font-family: PT Sans Narrow, sans-serif;''>";
    BookingSummeryDiv1 += "<div align='left' style='display:table-cell;width:20%;' onclick='back();'><img src='../images/back.gif' style='width:90px;height:35px;' alt='back'></div>";
    BookingSummeryDiv1 += "<div align='left' style='display:table-cell;width:45%;text-align:center;vertical-align:middle;' ><div style='width:100%;line-height:2em;font-size:18px;font-weight:bold;'>How would You like to Pay</div></div>";
    BookingSummeryDiv1 += "<div align='left' id='S' style='display:table-cell;width:25%;' >Time Remaining to fill details:</div>";
    BookingSummeryDiv1 += "<div align='left' id='BookingTimerDiv' style='display:table-cell;width:15%;color:red;font-size:18px;font-weight:bold;' ></div>";
    BookingSummeryDiv1 += "</div>";


    var BookingSummeryDiv = "<div class='loginDiv'  style='background-color:#eaeaea;margin-left:20px;padding-left:5px;width:330px;text-align:left;font-family: PT Sans Narrow, sans-serif;' >";
   // BookingSummeryDiv += "<div align='center>Booking Summary</div>";
    BookingSummeryDiv += "<div id=''   style='display:table;width:100%;line-height:2em;font-size:18px;font-weight:bold;text-align:center;' >" + "Booking Summary" + "</div>";

    BookingSummeryDiv += "<div style='display:table;'><div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span  style='color:black;font-size:15px;width:50px;font-weight:bold;'>Movie : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BmovieNameSpan' style='color:black;'>" + bookingInfo.selectedMovie + "</span>";
    BookingSummeryDiv += "<span id='BmovieLanguageSpan' style='color:black;'>" + "( " + bookingInfo.selectedMovieLanguage + " )" + "</span></div>";
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span  style='color:black;width:50px;font-weight:bold;'>Theatre : </span></div>";
    if (bookingInfo.selectedCurrentPropertyName.indexOf("ACTACT") >= 0) {
        BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BpropertySpan' style='color:black;'>" + bookingInfo.selectedCurrentPropertyName.substr(6) + "</span>";
    }
    else {
        BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BpropertySpan' style='color:black;'>" + bookingInfo.selectedCurrentPropertyName + "</span>";
    }
    if (bookingInfo.selectedTheatre.indexOf("ACTACT") >= 0) {
        BookingSummeryDiv += "<span id='BtheatreSpan' style='color:black;'>" + ", " + bookingInfo.selectedTheatre.substr(6) + "</span>";
    }
    else {
        BookingSummeryDiv += "<span id='BtheatreSpan' style='color:black;'>" + ", " + bookingInfo.selectedTheatre + "</span>";
    }
    BookingSummeryDiv += "<span id='BpropertyAreaSpan' style='color:black;'>" + " ( " + bookingInfo.selectedCurrentPropertyArea + " )" + "</span></div>";
    BookingSummeryDiv += "</div>";
    //alert(bookingInfo.selectedCurrentPropertyId);
    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span  style='color:black;width:50px;font-weight:bold;'>Date  </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BdateSPan' style='color:black;'>" + bookingInfo.selectedDate + "</span></div>";
   // BookingSummeryDiv += "<span id='BtimeSpan' style='color:blue;width:140px;'>" + ", " + bookingInfo.selectedShowingTime + "</span>";
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span  style='color:black;width:50px;font-weight:bold;'>Show Time : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'>";
    BookingSummeryDiv += "<span id='BtimeSpan' style='color:black;'>" + bookingInfo.selectedShowingTime + "</span></div>";
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span  style='color:black;width:50px;font-weight:bold;'>Seats(count) : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BselectedSeats' style='color:black;'>" + bookingInfo.selectedseatNosWithRow + "( " + bookingInfo.selectedSeatCount + " )" + "</span></div>";
    BookingSummeryDiv += "</div>";

    bookingInfo.caluclateTotalPrice();

    var otherCharges = bookingInfo.otherCharges;
    //alert(otherCharges);
    var otherChargesDesc = bookingInfo.otherChargesDesc;
    var showotherCharges;
    
    var InclusiveCharges = bookingInfo.InclusiveCharges;
    var InclusiveChargesDesc = bookingInfo.InclusiveChargesDesc;
    var showInclusiveChargesDesc;

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span style='width:50px;font-weight:bold;'>Total : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BPriceWithServiceCharges' style='color:black;'>Rs." + bookingInfo.PriceWithServiceCharges + "(with service charges.)" + "</span></div>";
    BookingSummeryDiv += "</div>";

    if (otherCharges != 0 || otherCharges != "") {
        showotherCharges = otherCharges + "( " + otherChargesDesc + " )";

        BookingSummeryDiv += "<div style='display:table-row;'>";
        BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span style='width:50px;font-weight:bold;' >Other Charges : </span></div>";
        BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BOtherCharges' style='color:black;'>Rs." + showotherCharges + "</span></div>";
        BookingSummeryDiv += "</div>";

    }


    if (InclusiveChargesDesc != "") {
       
        showInclusiveChargesDesc = InclusiveChargesDesc;

        BookingSummeryDiv += "<div style='display:table-row;'>";
        BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span style='width:50px;font-weight:bold;' >Incl.: </span></div>";
        BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BOtherCharges' style='color:black;'>" + showInclusiveChargesDesc + "</span></div>";
        BookingSummeryDiv += "</div>";

    }

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:130px;height:40px;'><span style='width:50px;font-weight:bold;' >Grand Total : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:200px;height:40px;'><span id='BGrandTotal' style='color:black;'>Rs." + bookingInfo.TotalPrice + "</span></div>";
    BookingSummeryDiv += "</div>";

 

    BookingSummeryDiv += "</div>";


  
    
    var HTML1 = "";
    HTML1 += "<div align='center' style='width:240px;float:left;'>"
    HTML1 += "<div  style='width:240px;'><img src='img/1.png' style='float:left;position:relative;top:0px;right:0px;width:30px;height:30px;' alt='close'  /></div>"
    HTML1 += "<div class='loginDiv' style='width:240px;' align='center'>";
    HTML1 += "<div id=''   style='width:100%;line-height:2em;font-size:15px;font-weight:bold;background-color:#1a6fc0;color:white;' >" + "Pay by using Credit / Debit Card / NetBanking" + "</div>";
    HTML1 += "<ul class='EnterYourDetailsUl' style='padding:5px 10px 5px 10px;'>"
//    HTML1 += "<li style='border:none;'>"
//    //HTML1 += "<div id=''   style='width:100%;line-height:2em;font-size:18px;font-weight:bold' >" + "Guest User" + "</div>";
//    HTML1 += "<div id=''   style='width:100%;line-height:2em;font-size:18px;font-weight:bold;background-color:#dfdfdf;' >" + "Pay by using Credit Card" + "</div>";
//    HTML1 += "</li>"
    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div style='display:inline-table;width:100%;'>"
    HTML1 += "<div style='width: 20%;float:left;text-align:left;padding-left:2%'>";
    HTML1 += "<span id='' style='width:100%;line-height:2em;font-size:15px;'  >   Mobile   </span>";
    HTML1 += "</div>";
    HTML1 += "<div style='width: 1%;float:left;text-align:left;'> <span>: </span> </div>";
    HTML1 += "<div style='width: 73%;float:left;text-align:left;padding-left:5px;'>";

    if (mobileNumber != "") {
        HTML1 += "<input type='text' id='PaybyCCMobileNumber' style='border:0;padding: 5px 10px 5px 5px;  background-color:white;' disabled  autocomplete='on' placeholder='MobileNumber' value='" + mobileNumber + "'  >"; //max='9999999999' maxlength='10'
    }
    else {
        HTML1 += "<input type='text' id='PaybyCCMobileNumber' class='inputs' autocomplete='on' placeholder='MobileNumber' maxlength='10'  >"; //max='9999999999' maxlength='10'
    }

    HTML1 += "</div>";
    HTML1 += "</div>"
    HTML1 += "</li>"
    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div style='display:inline-table;width:100%;'>"
    HTML1 += "<div style='width: 20%;float:left;text-align:left;padding-left:2%'>";
    HTML1 += "<span id='' style='width:100%;line-height:2em;font-size:15px;' >   Name   </span>";
    HTML1 += "</div>";
    HTML1 += "<div style='width: 1%;float:left;text-align:left;'> <span>: </span> </div>";
    HTML1 += "<div style='width: 72%;float:left;text-align:left;padding-left:5px;'>";

    //HTML1 += "<input type='text' id='PaybyCCName' class='inputs' autocomplete='on' placeholder='Name'>";
    if (MemName != "") {
        HTML1 += "<input type='text' id='PaybyCCName'  class='inputs' autocomplete='on' placeholder='Name' value='" + MemName + "'  >"; //max='9999999999' maxlength='10'
    }
    else {
        HTML1 += "<input type='text' id='PaybyCCName' value='' class='inputs' autocomplete='on' placeholder='Name'   >"; //max='9999999999' maxlength='10'
    }

    HTML1 += "</div>"
    HTML1 += "</div>"
    HTML1 += "</li>"
    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div style='display:inline-table;width:100%;'>"
    HTML1 += "<div style='width: 20%;float:left;text-align:left;padding-left:2%'>";
    HTML1 += "<span id='' style='width:100%;line-height:2em;font-size:15px;' >   email  </span>";
    HTML1 += "</div>";
    HTML1 += "<div style='width: 1%;float:left;text-align:left;'> <span>: </span> </div>";
    HTML1 += "<div style='width: 72%;float:left;text-align:left;padding-left:5px;'>";

    //HTML1 += "<input type='text' id='PaybyCCEmail' class='inputs'  autocomplete='on' placeholder='Email' >";
    if ( EmailId != "") {
        HTML1 += "<input type='text' id='PaybyCCEmail'  class='inputs' autocomplete='on' placeholder='Email' value='" + EmailId + "'  >"; //max='9999999999' maxlength='10'
    }
    else {
        HTML1 += "<input type='text' id='PaybyCCEmail' value='' class='inputs' autocomplete='on' placeholder='Email'   >"; //max='9999999999' maxlength='10'
    }

    HTML1 += "</div>"
    HTML1 += "</div>"
    HTML1 += "</li>"
    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div align='right' style='margin-right:10px;' >"
    HTML1 += "<input type='button'  id='PayByCCNext' class='button' value='Proceed' style='width:auto' onclick='GoToBlocking();'></input>";
    HTML1 += "</div>"

    HTML1 += "</li>"
    HTML1 += "<li id='errorBlock' style='display:none;width:92%;border:none;' >"
    HTML1 += "<div id='mobileError' style='color:red;' align='center' >"
    HTML1 += "</div>"
    HTML1 += "<div id='nameError' style='color:red;' align='center' >"
    HTML1 += "</div>"
    HTML1 += "<div id='emailError' style='color:red;' align='center' >"
    HTML1 += "</div>"
    HTML1 += "</li>"

    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div>"
    HTML1 += "<img src='img/visa.gif' alt='visa' style='width:220px;'>"
    HTML1 += "</div>"
    HTML1 += "</li>"
    HTML1 += "</ul>"

    HTML1 += "<div align='left' id='VersionMsg' style='width:270px;' > "
  //  HTML1 += "<span style='color:blue;'>On tapping 'Next', You will be directed to Payment Gateway, on a different Window... Please complete the Payment...</span>";
    HTML1 += "</div>";
    HTML1 += "<div>&nbsp;</div>";
    HTML1 += "<div id='msgInProgress2' style='display:none;' >"
    HTML1 += "<div id='mySpinner2' style='width:32px;height:32px'></div> "
    HTML1 += "</div>";
//    HTML1 += "<div id='textformBlocking' align='left' style='width:100%;'>"
//    HTML1 += "<div id='textMsgFromBlocking' style='width:100%;'>"
//    HTML1 += "</div>";
 //   HTML1 += "</div>";

    HTML1 += "</div>"
    HTML1 += "</div>"
    /////////////////////////////////////////////
    HTML1 += "<div align='center' style='padding:100px 5px 5px 5px;width:10px;float:left;vertical-align:middle;'>OR</div>"
    HTML1 += "<div align='center' style='width:240px;float:left;'>"
    HTML1 += "<div  style='width:240px;'><img src='img/2.png' style='float:left;position:relative;top:0px;right:0px;width:30px;height:30px;' alt='close'  /></div>"
    HTML1 += "<div class='loginDiv' style='width:240px;' align='center'>";
    HTML1 += "<div id=''   style='width:100%;line-height:2em;font-size:15px;font-weight:bold;background-color:#1a6fc0;color:white;' >" + "Pay by using My Wallet" + "</div>";
    HTML1 += "<ul class='EnterYourRegisterDetailsUl' style='padding:5px 5px 5px 5px;'>"
//    HTML1 += "<li style='border:none;'>"
//    //HTML1 += "<div id=''   style='width:100%;line-height:2em;font-size:18px;font-weight:bold' >" + "Login" + "</div>";
//    HTML1 += "<div id=''   style='width:100%;line-height:2em;font-size:15px;font-weight:bold;background-color:#dfdfdf;' >" + "Pay by using My Wallet" + "</div>";
//    HTML1 += "</li>"
    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div style='display:inline-table;width:100%;'>"
    HTML1 += "<div style='width: 24%;float:left;text-align:left;padding-left:1%'>";
    HTML1 += "<span id='' style='width:100%;line-height:2em;font-size:15px;'  >   Mobile   </span>";
    HTML1 += "</div>";
  //  HTML1 += "<div style='width: 1%;float:left;text-align:left;'> <span>: </span> </div>";
    HTML1 += "<div style='width: 60%;float:left;text-align:left;padding-left:5px;'>";

    //  HTML1 += "<input type='text' id='RegisteredUserMobileNumber' class='inputs' autocomplete='on' maxlength='10' placeholder='MobileNumber'  required  >"; //max='9999999999' maxlength='10'
    if (mobileNumber != "") {
        HTML1 += "<input type='text' id='RegisteredUserMobileNumber'  maxlength='10' style='border:0;padding: 5px 10px 5px 5px;  background-color:white;' disabled  autocomplete='on' placeholder='MobileNumber' value='" + mobileNumber + "'  >"; //max='9999999999' maxlength='10'
    }
    else {
        HTML1 += "<input type='text' id='RegisteredUserMobileNumber'  maxlength='10' class='inputs' autocomplete='on' placeholder='MobileNumber'   >"; //max='9999999999' maxlength='10'
    }

    HTML1 += "</div>";
    HTML1 += "</div>"
    HTML1 += "</li>"
    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div style='display:inline-table;width:100%;'>"
    
    // HTML1 += "<input type='password' id='RegisteredUserPwd' class='inputs' placeholder='password' maxlength='4'   required >";
    if (Password != "") {
        HTML1 += "<div style='width: 24%;float:left;text-align:left;padding-left:1%;display:none;'>";
        HTML1 += "<span id='' style='width:100%;line-height:2em;font-size:15px;' >Password</span>";
        HTML1 += "</div>";
        //  HTML1 += "<div style='width: 1%;float:left;text-align:left;'> <span> </span> </div>";
        HTML1 += "<div style='width: 60%;float:left;text-align:left;padding-left:5px;display:none;'>";
        HTML1 += "<input type='password' id='RegisteredUserPwd'  maxlength='4' style='border:0;padding: 5px 10px 5px 5px;  background-color:white; display:none;' disabled  autocomplete='on' placeholder='password' value='" + Password + "'  >"; //max='9999999999' maxlength='10'
        HTML1 += "</div>"
    }
    else {
        HTML1 += "<div style='width: 24%;float:left;text-align:left;padding-left:1%'>";
        HTML1 += "<span id='' style='width:100%;line-height:2em;font-size:15px;' >Password</span>";
        HTML1 += "</div>";
        //  HTML1 += "<div style='width: 1%;float:left;text-align:left;'> <span> </span> </div>";
        HTML1 += "<div style='width: 60%;float:left;text-align:left;padding-left:5px;'>";
        HTML1 += "<input type='password' id='RegisteredUserPwd'  maxlength='4' class='inputs' autocomplete='on' placeholder='password'   >"; //max='9999999999' maxlength='10'
        HTML1 += "</div>"
    }

   
    HTML1 += "</div>"
    HTML1 += "</li>"

//    HTML1 += "<li style='width:92%;border:none;'>"
//    HTML1 += "<div align='right' style='margin-right:10px;' >"
//    HTML1 += "<input type='button' id='NextReg' class='button' value='Login' onclick='BookingTimeLogin();'>  </input>";
//    HTML1 += "<input type='button'  id='ProceedAfterLogin' class='button' style='display:none;' value='Proceed' onclick='ProceedForBookingAfterLogin();'></input>";
//    HTML1 += "</div>"
    //    HTML1 += "</li>"

    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div align='right' style='margin-right:10px;' >"

    if (mobileNumber != "" && Password != "") {
        //HTML1 += "<input type='button' id='NextReg' class='button' value='Proceed' onclick='BookingTimeLogin();'>  </input>";
        HTML1 += "<input type='button' id='NextReg' class='button' value='Proceed' onclick='IfActSeatsBlock();'>  </input>";
    }
    else {
        //HTML1 += "<input type='button' id='NextReg' class='button' value='Login' onclick='BookingTimeLogin();'>  </input>";
        HTML1 += "<input type='button' id='NextReg' class='button' value='Login' onclick='IfActSeatsBlock();'>  </input>";
    }
    
   
    HTML1 += "</div>"
    HTML1 += "</li>"

    HTML1 += "<li id='errorBlockReg' style='display:none' style='border:none;'>"
    HTML1 += "<div id='mobileErrorReg' style='color:red;' align='center' >"
    HTML1 += "</div>"
    HTML1 += "<div id='pwdErrorReg' style='color:red;' align='center' >"
    HTML1 += "</div>"
    HTML1 += "</li>"

    HTML1 += "<li style='width:92%;border:none;'>"
    HTML1 += "<div>"
    HTML1 += "<img src='../images/wallet.gif'>"
    HTML1 += "</div>"
    HTML1 += "</li>"

    HTML1 += "</ul>"
    HTML1 += "</div>";
    HTML1 += "</div>"
  

  //  HTML1 += "<div style='clear:both;'>"
    ////////////////////////////////////////////////////////



    var SpareDivInnerHTML = "";
    SpareDivInnerHTML += "<div style='display:table;'>";
    SpareDivInnerHTML += "<div style='display:table-row;'>";
    SpareDivInnerHTML += "<div style='display:table-cell;width:550px;'>";
    SpareDivInnerHTML += "<div id='InformationDiv' style='display:table;padding:0 1% 0 1%; background-color:white;color:White;width:98%;height:auto;'>" + BookingSummeryDiv1 + "</div>";



    SpareDivInnerHTML += "<div id='spareDivWrapperDiv' style='margin-top:2px;padding:1% 1% 1% 0; width:99%;height:130px;  height:410px;overflow:auto;' >";
    
//    SpareDivInnerHTML += "<div style='width:100%;height:30px;background-color:gray;color:white;'>";
//    
//    SpareDivInnerHTML += "</div>";

    SpareDivInnerHTML += "<div id='spareDivScrollDiv' style='width:100%;'>";
    SpareDivInnerHTML += "<div id='showsDiv' align='left'>";
    SpareDivInnerHTML += HTML1;
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "</div>";   
 
    SpareDivInnerHTML += "<div  style='display:table-cell;width:360px;'>"
    SpareDivInnerHTML += BookingSummeryDiv;
    SpareDivInnerHTML += "</div>"
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "</div>";
   

    document.getElementById('spareDiv').innerHTML = "";
    document.getElementById('spareDiv').innerHTML = SpareDivInnerHTML; //xyz




    //        <div id="InformationDiv" style=" background-color:Gray;color:White;width:100%; height:40px;">&nbsp;</div>
    //     <div id="spareDivWrapperDiv" style="padding-top:5px; width:100%; height:450px;overflow:scroll;" >       
    //        <div id="spareDivScrollDiv" style="width:100%;">
    //            <div id="showsDiv" align="left">
    //            </div>
    //        </div>
    //    </div>
    //TOrderId = GetOrder_Id();
    //alert(TOrderId);
}


function bookingSummary() {

    var BookingSummeryDiv = "<div style='padding:20px 10px 20px 10px;'>";
    BookingSummeryDiv += "<div class='loginDiv'  style='margin:20px 10px 20px 10px;padding-left:5px;width:370px;text-align:left;font-family: PT Sans Narrow, sans-serif;' >";
    // BookingSummeryDiv += "<div align='center>Booking Summary</div>";
    BookingSummeryDiv += "<div id=''   style='display:table;width:100%;line-height:2em;font-size:18px;font-weight:bold;text-align:center;' >" + "Booking Summary" + "</div>";

    BookingSummeryDiv += "<div style='display:table;'><div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span  style='color:black;font-size:15px;width:50px;'>Movie : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BmovieNameSpan' style='font-weight:bold;color:blue;'>" + bookingInfo.selectedMovie + "</span>";
    BookingSummeryDiv += "<span id='BmovieLanguageSpan' style='color:blue;'>" + "( " + bookingInfo.selectedMovieLanguage + " )" + "</span></div>";
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span  style='color:black;width:50px;'>Theatre : </span></div>";
    if (bookingInfo.selectedCurrentPropertyName.indexOf("ACTACT") >= 0) {
        BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BpropertySpan' style='color:blue;'>" + bookingInfo.selectedCurrentPropertyName.substr(6) + "</span>";
    }
    else {
        BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BpropertySpan' style='color:blue;'>" + bookingInfo.selectedCurrentPropertyName + "</span>";
    }
    if (bookingInfo.selectedTheatre.indexOf("ACTACT") >= 0) {
        BookingSummeryDiv += "<span id='BtheatreSpan' style='color:blue;'>" + ", " + bookingInfo.selectedTheatre.substr(6) + "</span>";
    }
    else {
        BookingSummeryDiv += "<span id='BtheatreSpan' style='color:blue;'>" + ", " + bookingInfo.selectedTheatre + "</span>";
    }
    
    BookingSummeryDiv += "<span id='BpropertyAreaSpan' style='color:blue;'>" + " ( " + bookingInfo.selectedCurrentPropertyArea + " )" + "</span></div>";
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span  style='color:black;width:50px;'>Date : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BdateSPan' style='color:blue;'>" + bookingInfo.selectedDate + "</span></div>";
    // BookingSummeryDiv += "<span id='BtimeSpan' style='color:blue;width:140px;'>" + ", " + bookingInfo.selectedShowingTime + "</span>";
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span  style='color:black;width:50px;'>Show Time : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'>";
    BookingSummeryDiv += "<span id='BtimeSpan' style='color:blue;'>" + bookingInfo.selectedShowingTime + "</span></div>";
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span  style='color:black;width:50px;'>Seats(count) : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BselectedSeats' style='color:blue;'>" + bookingInfo.selectedseatNosWithRow + "( " + bookingInfo.selectedSeatCount + " )" + "</span></div>";
    BookingSummeryDiv += "</div>";

    bookingInfo.caluclateTotalPrice();

    var otherCharges = bookingInfo.otherCharges;
    var otherChargesDesc = bookingInfo.otherChargesDesc;
    var showotherCharges;

    var InclusiveCharges = bookingInfo.InclusiveCharges;
    var InclusiveChargesDesc = bookingInfo.InclusiveChargesDesc;
    var showInclusiveChargesDesc;

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span style='width:50px;'>Total : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BPriceWithServiceCharges' style='color:blue;'>Rs." + bookingInfo.PriceWithServiceCharges + "(with service charges.)" + "</span></div>";
    BookingSummeryDiv += "</div>";

    if (otherCharges != 0 || otherCharges != "") {

        showotherCharges = otherCharges + "( " + otherChargesDesc + " )";
        BookingSummeryDiv += "<div style='display:table-row;'>";
        BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span style='width:50px;' >Other Charges : </span></div>";
        BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BOtherCharges' style='color:blue;'>Rs." + showotherCharges + "</span></div>";
        BookingSummeryDiv += "</div>";

    }


    if (InclusiveChargesDesc != "") {
        showInclusiveChargesDesc = InclusiveChargesDesc;
        BookingSummeryDiv += "<div style='display:table-row;'>";
        BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span style='width:50px;' >Inclusive Charges : </span></div>";
        BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BOtherCharges' style='color:blue;'>Rs." + showInclusiveChargesDesc + "</span></div>";
        BookingSummeryDiv += "</div>";

    }

    BookingSummeryDiv += "<div style='display:table-row;'>";
    BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span style='width:50px;' >Grand Total : </span></div>";
    BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BGrandTotal' style='color:blue;'>Rs." + bookingInfo.TotalPrice + "</span></div>";
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "<div id='balInfo' style='display:table-row;'>";
   // BookingSummeryDiv += "<div style='display:table-cell;width:110px;height:30px;'><span style='width:50px;' >Grand Total : </span></div>";
  //  BookingSummeryDiv += "<div style='display:table-cell;width:250px;height:30px;'><span id='BGrandTotal' style='color:blue;'>Rs." + bookingInfo.TotalPrice + "</span></div>";
    BookingSummeryDiv += "</div>";
    BookingSummeryDiv += "</div>";
    BookingSummeryDiv += "<div style='width:100%;color:red'>";
    BookingSummeryDiv += "Your Tickets Not Booked Yet..!";
    BookingSummeryDiv += "</div>";
    BookingSummeryDiv += "<div id='textformBlocking' align='left' style='width:100%;'>"
    BookingSummeryDiv += "<div id='textMsgFromBlocking' style='width:100%;'>"
    BookingSummeryDiv += "</div>";

    BookingSummeryDiv += "</div>";
    BookingSummeryDiv += "<div style='height:20px;width:100%;'>&nbsp;</div>";     

    BookingSummeryDiv += "</div>";
    

    document.getElementById('spareDiv').innerHTML = "";
    document.getElementById('spareDiv').innerHTML = BookingSummeryDiv; //xyz

}

function hidePaymentGateWayLink() {
    document.getElementById('paymentGateWayLink').setAttribute('style', 'display:none;');
}

function GoToBlocking() {

    var customerMobileNo = document.getElementById('PaybyCCMobileNumber').value;
    var customerName = document.getElementById('PaybyCCName').value;
    var customerEmail = document.getElementById('PaybyCCEmail').value;

    var mflag = validateMobileForCC1(customerMobileNo);

    var nflag = validateNameForCC1(customerName);

    var eflag = validateEmailForCC1(customerEmail);

    if (mflag && nflag && eflag) {

        document.getElementById('mobileError').innerHTML = "";
        document.getElementById('nameError').innerHTML = "";
        document.getElementById('emailError').innerHTML = "";
        document.getElementById('errorBlock').setAttribute('style', 'display:none;border:none;');

        var MemIDt = "";
        gotoBlocking(MemIDt, customerName, customerEmail, customerMobileNo);


    }
    else {

        document.getElementById('mobileError').innerHTML = "";
        document.getElementById('nameError').innerHTML = "";
        document.getElementById('emailError').innerHTML = "";
        if (!mflag) {
            document.getElementById('mobileError').innerHTML = "Enter valid MobileNumber";
        }
        if (!nflag) {
            document.getElementById('nameError').innerHTML = "Enter valid Name";
        }
        if (!eflag) {
            document.getElementById('emailError').innerHTML = "Enter Valid Email";
        }

        document.getElementById('errorBlock').setAttribute('style', 'display:block;border:none;');

        setTimeout(function () {
            document.getElementById('errorBlock').setAttribute('style', 'display:none;border:none;');
        }, 3000);
    }
}



function gotoBlocking(MemIDt, VerifiedName, VerifiedEmail, VerifiedMobile) {

    putReqForBlockingObj = new PutRequestForBlocking();
    putReqForBlockingObj.putRequestForBlocking(MemIDt, VerifiedName, VerifiedEmail, VerifiedMobile);

}

function DetailsEnteredForCC(MemIDt, MemberNamet, txtEmailIDt, txtPhoneNot) {
    
    bookingInfo.caluclateTotalPrice();

    var Bcity = bookingInfo.selectedCity;
    var Bcity_id = bookingInfo.selectedCity_id;
    var Bmovie = bookingInfo.selectedMovie;
    var BemCseqNo = bookingInfo.selectedEmCseqNo;
    var BthCseqNo = bookingInfo.selectedThCseqNo;
    var Bdate = bookingInfo.selectedDate;
    var Btheatre = bookingInfo.selectedTheatre;
    var Btheatre_id = bookingInfo.selectedThiatre_id;
    var BdateshowNo = bookingInfo.selectedDateshowNo;
    var Bshowtime = bookingInfo.selectedShowtime;
    var Bprice = bookingInfo.selectedSeatPrice;
    var Beurnme = bookingInfo.customerName;
    var Beupsod = bookingInfo.customerPwd;
    var BseatCount = bookingInfo.selectedSeatCount;
    var Bseats = bookingInfo.selectedSeats;
    var BTotalPrice = bookingInfo.TotalPrice;
    var BlockNo = bookingInfo.BlockReqNo;

    var Propert_Id = bookingInfo.selectedCurrentPropertyId;
    var Property_Name = bookingInfo.selectedCurrentPropertyName;
    var Property_Area = bookingInfo.selectedCurrentPropertyArea;
    var TempOrderId = bookingInfo.TOrderID;
    //alert(Propert_Id);
    var paymentGetWayUrl = "";

    // paymentGetWayUrl = "http://202.63.106.69/mobiledevice/android/cinegoer/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"
    //paymentGetWayUrl = "http://202.63.106.69/easy100newsite1/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"  Teja Change Workoing
    //paymentGetWayUrl = "http://202.63.106.72/site/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"
    // paymentGetWayUrl = "http://202.63.106.72/mobiledevice/android/cinegoer/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"         
    //paymentGetWayUrl = "http://202.63.106.75/awssite/desktop/users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"       // On 75 Use Its 
    //paymentGetWayUrl = "http://www.easynow.in/awssite/desktop/users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"
  paymentGetWayUrl = "http://www.easymovies.in/awssite/desktop/users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"

    //paymentGetWayUrl = "http://183.82.108.243/awssite/desktop/users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"
    //paymentGetWayUrl = "http://www.awseasymovies.in/awssite/desktop/users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?"
    
    paymentGetWayUrl += "&MemID=" + "";
    paymentGetWayUrl += "&MemberName=" + MemberNamet;
    paymentGetWayUrl += "&txtEmailID=" + txtEmailIDt;
    paymentGetWayUrl += "&txtPhoneNo=" + txtPhoneNot;

    paymentGetWayUrl += "&Bcity=" + Bcity;
    paymentGetWayUrl += "&Bcity_id=" + Bcity_id;
    paymentGetWayUrl += "&Bmovie=" + Bmovie;
    paymentGetWayUrl += "&BemCseqNo=" + BemCseqNo;
    paymentGetWayUrl += "&BthCseqNo=" + BthCseqNo;
    paymentGetWayUrl += "&Bdate=" + Bdate;
    paymentGetWayUrl += "&Btheatre=" + Btheatre;
    paymentGetWayUrl += "&Btheatre_id=" + Btheatre_id;
    paymentGetWayUrl += "&BdateshowNo=" + BdateshowNo;
    paymentGetWayUrl += "&Bshowtime=" + Bshowtime;
    paymentGetWayUrl += "&Bprice=" + Bprice;
    paymentGetWayUrl += "&Beurnme=" + Beurnme;
    paymentGetWayUrl += "&Beupsod=" + Beupsod;
    paymentGetWayUrl += "&BseatCount=" + BseatCount;
    paymentGetWayUrl += "&Bseats=" + Bseats;
    paymentGetWayUrl += "&BTotalPrice=" + BTotalPrice;
    paymentGetWayUrl += "&BlockNo=" + BlockNo;
    paymentGetWayUrl += "&PropertyId=" + Propert_Id;
    paymentGetWayUrl += "&PropertyName=" + Property_Name;
    paymentGetWayUrl += "&PropertyArea=" + Property_Area;
    paymentGetWayUrl += "&Torderid=" + TempOrderId;

    //alert(TOrderId);
    //alert(encodeURI(paymentGetWayUrl));
          

    //        //style='position:relative;left:5%;top:5%;height:90%;width:90%;'
    //        var HTML1 = "<iframe src='" + paymentGetWayUrl + "' frameborder=1 style='position:relative;height:450px;width:100%;' ></iframe>";

    //        document.getElementById('showsDiv').innerHTML = "";
    //        document.getElementById('showsDiv').innerHTML = HTML1;

    //        window.location.href = paymentGetWayUrl;   
    //        window.

    return paymentGetWayUrl;
   
   // window.open(paymentGetWayUrl, '_blank');

    // var win = window.open(paymentGetWayUrl, '_blank');
    // win.focus();

}

function IfActSeatsBlock() {
    //alert("rr");
    var IsActThtr = bookingInfo.selectedCurrentPropertyName.indexOf("ACTACT");
    //alert(IsActThtr + "-- " + bookingInfo.selectedCurrentPropertyName);
    var ACTBlockResult = "";
    if (IsActThtr >= 0) {
        var params = {};
        showLoading();
        //alert(bookingInfo.selectedCurrentPropertyId);
        params.Bcity = bookingInfo.selectedCity;
        params.Bcity_id = bookingInfo.selectedCity_id;
        params.Bmovie = bookingInfo.selectedMovie;
        params.BemCseqNo = bookingInfo.selectedEmCseqNo;
        params.BthCseqNo = bookingInfo.selectedThCseqNo;
        params.Bdate = bookingInfo.selectedDate;
        params.Btheatre = bookingInfo.selectedTheatre;
        params.Bthiatre_id = bookingInfo.selectedThiatre_id;
        params.BdateshowNo = bookingInfo.selectedDateshowNo;
        params.Bshowtime = bookingInfo.selectedShowtime;
        params.Bprice = bookingInfo.selectedSeatPrice;
        params.Beurnme = bookingInfo.customerName;
        params.Beupsod = bookingInfo.customerPwd;
        params.BseatCount = bookingInfo.selectedSeatCount;
        params.Bseats = bookingInfo.selectedSeats;

        params.BPropertId = bookingInfo.selectedCurrentPropertyId;

        params.BPropertName = bookingInfo.selectedCurrentPropertyName;
        params.BPropertArea = bookingInfo.selectedCurrentPropertyArea;

        params.BTempOrderID = bookingInfo.TOrderID;

        params.WalletOrCC = "Wallet";
        //alert(bookingInfo.cityName);

        var str = $.param(params);
        //alert(str);
        var Url = "ActBlockingProcess.aspx?city=" + bookingInfo.selectedCity + "&citycode=" + bookingInfo.selectedCity_id + "&movieid=" + bookingInfo.selectedEmCseqNo;
        //var Url = "ActBookingProcess.aspx?citycode=" + bookingInfo.selectedCity_id + "&movieid=" + bookingInfo.selectedEmCseqNo;
        Url += "&date=" + bookingInfo.selectedDate + "&thid=" + bookingInfo.selectedThiatre_id + "&dtshno=" + bookingInfo.selectedDateshowNo;
        Url += "&seatCount=" + bookingInfo.selectedSeatCount + "&seats=" + bookingInfo.selectedSeats + "&property=" + bookingInfo.selectedCurrentPropertyName + "&propertyarea=" + bookingInfo.selectedCurrentPropertyArea;
        Url += "&userno=" + bookingInfo.customerName + "&pid=" + bookingInfo.selectedCurrentPropertyId + "&orderid=" + bookingInfo.TOrderID;

        Url += "&thname=" + bookingInfo.selectedTheatre + "&movie=" + bookingInfo.selectedMovie + "&WalletOrCC=Wallet";
        Url = "ActBlockingProcess.aspx?" + str;
        ProcessActBooking(Url);
        //ACTBlockResult = ProcessActBooking(Url);

    }
    else {
        BookingTimeLogin();
    }
//    if (ACTBlockResult.toUpperCase() != "yes".toUpperCase()) {
//        return;
//    } 
}

function BookingTimeLogin() {
    //alert("sai");

    var RegisteredUserMobileNumber = document.getElementById('RegisteredUserMobileNumber').value;
    var RegisteredUserPwd = document.getElementById('RegisteredUserPwd').value;

    var mobileFlag = validateMobileForCC1(RegisteredUserMobileNumber);        
    var pwdFlag= validatePwd(RegisteredUserPwd);

    if (mobileFlag && pwdFlag) {
       
        checkMemOrNot(RegisteredUserMobileNumber, RegisteredUserPwd, "BookingTimeLogin");
    }
    else {
     //   alert('sorry your Mobile No or Password not valid..!');
    }

    
}

function ActionAfterLogin(callBackFunction) {

    if (callBackFunction == 'BookingTimeLogin') {
        bookingSummary();
        afterLogin1();
    }
    else if ((callBackFunction == 'LoginFunction')) {
        afterLogin2();
    }
    else if ((callBackFunction == 'Login')) {
      //  alert("ActionAfterLogin " + callBackFunction);
        afterLogin3();
    }
}

function afterLogin1() {   

    if (LocalPrefObj != null) {
        //alert(LocalPrefObj.MNoValue + "1");
        var mobileNumber = LocalPrefObj.MNoValue;
        var Password = LocalPrefObj.userPwd;
        var Balance = LocalPrefObj.PremoneyValue;

        if (mobileNumber != null && Password != null && mobileNumber != "" && Password != "") {
            document.getElementById("userSpanLink").innerHTML = "";
            document.getElementById("userSpanLink").innerHTML = mobileNumber;
            document.getElementById("userSpan").setAttribute('style', 'display:inline;');
            document.getElementById("signUpSpan").setAttribute('style', 'display:none;');
            document.getElementById("loginSpan").setAttribute('style', 'display:none;');
            document.getElementById("logoutSpan").setAttribute('style', 'display:inline;');

            var balInfo = "<div style='display:table-cell;width:110px;height:30px;'><span style='width:50px;color:red;' >Your Balance : </span></div>";
            balInfo += "<div style='display:table-cell;width:250px;height:30px;'><span id='CBal' style='color:blue;'>Rs." + LocalPrefObj.PremoneyValue + "</span></div>";
           
           

            document.getElementById('balInfo').innerHTML = "";
            document.getElementById('balInfo').innerHTML += balInfo;

            document.getElementById('textformBlocking').innerHTML = "";
            document.getElementById('textformBlocking').innerHTML += "<input type='button'  id='ProceedAfterLogin' style='width:auto' class='button'  value='Proceed To Payment' onclick='ProceedForBookingAfterLogin();'></input>";

        }
    }
}

function afterLogin2() {
 
    if (LocalPrefObj != null) {
        //alert(LocalPrefObj.MNoValue + "2");
        var mobileNumber = LocalPrefObj.MNoValue;
        var Password = LocalPrefObj.userPwd;
        var Balance = LocalPrefObj.PremoneyValue;

        if (mobileNumber != null && Password != null && mobileNumber != "" && Password != "") {
            //document.getElementById('ProceedAfterLogin').setAttribute('style', 'display:inline;');
            document.getElementById("userSpanLink").innerHTML = "";
            document.getElementById("userSpanLink").innerHTML = mobileNumber;
            document.getElementById("userSpan").setAttribute('style', 'display:inline;');
            document.getElementById("signUpSpan").setAttribute('style', 'display:none;');
            document.getElementById("loginSpan").setAttribute('style', 'display:none;');
            document.getElementById("logoutSpan").setAttribute('style', 'display:inline;');
            showUserInformationDiv();
        }
    }
}

function afterLogin3() {

    if (LocalPrefObj != null) {

        var mobileNumber = LocalPrefObj.MNoValue;
        var Password = LocalPrefObj.userPwd;
        var Balance = LocalPrefObj.PremoneyValue;
        //alert(LocalPrefObj.MNoValue+"3");
        if (mobileNumber != null && Password != null && mobileNumber != "" && Password != "") {
            //document.getElementById('ProceedAfterLogin').setAttribute('style', 'display:inline;');
            //   showUserInformationDiv();
            document.getElementById("userSpanLink").innerHTML = "";
            document.getElementById("userSpanLink").innerHTML = mobileNumber;
            document.getElementById("userSpan").setAttribute('style', 'display:inline;');
            document.getElementById("signUpSpan").setAttribute('style', 'display:none;');
            document.getElementById("loginSpan").setAttribute('style', 'display:none;');
            document.getElementById("logoutSpan").setAttribute('style','display:inline;');
            getMovies();
        }
    }
}




function checkMemOrNot(mobileNo, Password, callBackFunction) {
  

    // var RegisteredUserMobileNumber =  document.getElementById('RegisteredUserMobileNumber').value;
    // var RegisteredUserPwd = document.getElementById('RegisteredUserPwd').value;

    // alert(RegisteredUserMobileNumber);
    //alert(RegisteredUserPwd);
    //alert(bookingInfo.selectedCurrentPropertyName);
    var params = {};

    params.mob = mobileNo;
    params.pwd = Password;

    var registerCheck = { "ri": params };

    jQuery_1_7_1.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "ServerDataForDesktop.asmx/registerDetails",
        data: JSON.stringify(registerCheck),
        dataType: "json",
        async: true,

        //cache: false,
        beforeSend: function () {

        },
        success: function (registerChecked) {

            var registerCheckedObj = registerChecked.d;

            nlbStatus(registerCheckedObj.NlbIps);
            // nlbStatus(registerCheckedObj.nlb);
            // nlbStatus(registerCheckedObj.NlbIps);

            var CheckResultObj = registerCheckedObj.CheckResultObj;

            if (testRegisterDetails(CheckResultObj)) {

                //alert("s");
                MyAccDetailsObj = CheckResultObj.myAccDetailObj;
                saveMyAccountDeatails();
                ActionAfterLogin(callBackFunction);
            }


        },
        error: function (statusCode, errorThrown) {
            if (statusCode.status == 0) {
                //alert("you're offline");
                //showAndroidToast("you're offline");
            }
        },
        complete: function (transport) {
            // xmlDoc = transport.responseXML;   
            //  alert('reqcomplete');
            // myMoviesScroll.refresh();
        }
    });
}

function testRegisterDetails(CheckResultObj) {
    var flag = false;
    if (CheckResultObj.exceptionStatus != "exception") {
        if (CheckResultObj.result != "NO" && CheckResultObj.result != "") {
            flag = true;
        }
        else {
            alert('sorry plz enter correct mobile no and password...!');
            flag = false;
        }
    }
    else {
        alert("Sorry for inconvenience plz try again..!");
        flag = false;
    }
    return flag;
}


function saveMyAccountDeatails() {

    var userMemId = MyAccDetailsObj.userMemId; //0
    var userIsActive = MyAccDetailsObj.userIsActive; //1
    var userPwd = MyAccDetailsObj.userPwd; //2
    var NameValue = MyAccDetailsObj.NameValue; //3
    var EmailIdValue = MyAccDetailsObj.EmailIdValue; //4
    var PremoneyValue = MyAccDetailsObj.PremoneyValue; //5
    var MNoValue = MyAccDetailsObj.MNoValue; //6 

    LocalPrefObj.saveUserData(userMemId, userIsActive, userPwd, NameValue, EmailIdValue, PremoneyValue, MNoValue);

}

function ProceedForBookingAfterLogin() {
   
        //    alert(LocalPrefObj.userMemId
        //        + "_---" + LocalPrefObj.userIsActive
        //+ "_" + LocalPrefObj.userPwd
        //+ "_" + LocalPrefObj.NameValue
        //+ "_" + LocalPrefObj.EmailIdValue
        //+ "_" + LocalPrefObj.PremoneyValue
        //+ "_" + LocalPrefObj.MNoValue);
        //return;
        bookingInfo.customerName = LocalPrefObj.MNoValue;
        bookingInfo.customerPwd = LocalPrefObj.userPwd;
        bookingInfo.customerEmail = LocalPrefObj.EmailIdValue;
        //alert(LocalPrefObj.MNoValue + " data " + LocalPrefObj.EmailIdValue);
        bookingInfo.caluclateTotalPrice();
//        alert("user is + " + LocalPrefObj.MNoValue);
//        return;
        
//        if (UserHasBalance(LocalPrefObj.MNoValue) == false) {

//            return;
//        }


        PutRequestForBookingObj = new PutRequestForBooking();
        PutRequestForBookingObj.putRequestForBooking();
}


function UserHasBalance() {

}


function validateMobileForCC1(mobNum) {
    if (mobNum == "") {
        // alert(mobNum);
        alert("Plz Enter Your MobileNumber");
        return false;
    }

    if (isNaN(mobNum)) {
        alert("Mobile Number must be 10 digits.(numeric)");
        return false;
    }
    else {

        if (mobNum.length != 10) {
            alert("Mobile Number must be 10 digits.(numeric)");
            return false;
        }

        for (var i = 0; i < mobNum.length; i++) {
            myCharCode = mobNum.charCodeAt(i);

            if (!((myCharCode > 47) && (myCharCode < 58))) {
                alert("Mobile Number must be 10 digits.(numeric)");
                return false;
            }
        }
    }
    return true;
}


function validateMobileForCC1old(mobileNo) {
    if (mobileNo == "") {
        alert("Enter Your MobileNumber..!");
        return false;
    }
    if (!jQuery_1_7_1.isNumeric(mobileNo)) {
        alert("Mobile Number should be Numeric..!");
        return false;
    }
    if (mobileNo.length != 10) {
        alert("Mobile Number should be 10 digits ..!");
        return false;
    }
    return true;
}
function validateEmailForCC1(emailId) {
    if ((emailId == null) || (emailId == '') || (emailId == "Enter Name")) {
        alert("Enter email..!");
        return false;
    }
    var x = emailId;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Enter valid email..!");
        return false;
    }
    return true;
}

function validateNameForCC1(name) {
    if ((name == null) || (name == '')) {
        alert("Please Enter Your Name..!");
        return false;
    }
    else if (jQuery_1_7_1.isNumeric(name)) {
        alert("Name should be in alphabetic..!");
        return false;
    }
    return true;
}