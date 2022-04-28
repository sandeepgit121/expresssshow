
var bookingHistoryFObj;

var MyBookingHistory;


function showMyReservations(id) {
    //added for downing current bookings...
//    var str1 = "Dear Sir, This feature is currently down for maintenance,";
//     str1 += " for a short while.";
//     str1 += " <br><br>Please refer to the SMS for Ticket-ID.";
//     str1 += " <br><br><b>Inconvenience is regretted</b>";
//    document.getElementById('CheckReservationsContent').innerHTML = str1;
    //return;
    //---------------------end 

    //alert('Dear Sir,    this feature is down for maintenance, for a short while...');               
  //  MyAccountSubMenuState(id);
    bookingHistoryFObj = new bookingHistoryF();
    BookingHistoryFunctionality();
}

function gotoBookingHistory() {
    bookingHistoryFObj = new bookingHistoryF();   
    BookingHistoryFunctionality();
}

function BookingHistoryFunctionality() {
    
    
    if (LocalPrefObj != null) {
        if (LocalPrefObj.MNoValue != "" && LocalPrefObj.userPwd != "" && LocalPrefObj.userMemId != "") {
            if (LocalPrefObj.userIsActive == "Y") {
                var mobileNo = LocalPrefObj.MNoValue;
                var memid = LocalPrefObj.userMemId;
                bookingHistoryFObj.getMyBookingHistory(mobileNo, memid);
                //BackAndHomeObj.goForward("homeDiv", "BookingHistoryWrapper");
               // myBookingHistoryScroll.refresh();
            }
            else {
                alert('your not a active member,please recharge your account to become a active member..!');               
            }
        }
        else {
            alert('plz register...!');           
        }
    }
   
}

function showBookingHistoryWrapper() {
    BookingHistoryWrapper.setAttribute('style', 'display:block;');   
    document.getElementById('backButtonDiv').setAttribute('style', 'display:block;');
    this.ShowBack();
   // myBookingHistoryScroll.refresh();
}
//begin...
function bookingHistoryF() 
{
    this.resContentArray = [];
    this.PlusMinusArray = [];
    this.CancellationDetailsArray = [];

    this.getMyBookingHistory = function (mobileNo, memid) {

        
        var params = {};
        params.mob = mobileNo;
        params.memid = memid;
        var myInfo = { "mi": params };

        jQuery_1_7_1.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServerDataForDesktop.asmx/getMyBookingHistory",
            data: JSON.stringify(myInfo),
            dataType: "json",
            async: true,
             
            //cache: false,
            beforeSend: function () {

            },
            success: function (MyBookingHistoryRes) {

                var MyBookingHistoryResObj = MyBookingHistoryRes.d;
                // nlbStatus(MyBookingHistoryResObj.nlb);
                  nlbStatus(MyBookingHistoryResObj.NlbIps);
                MyBookingHistory = MyBookingHistoryResObj.MyBookingHistory;

                if (MyBookingHistory.exceptionStatus != "exception") {
                    if (MyBookingHistory.currentBookings == "YES") {  
                        bookingHistoryFObj.showMyBookingHistory();
                    }
                    else {
                        alert('sorry no current bookings');
                    }
                }
                else {
                    alert("Sorry for inconvenience plz try again..!");
                }
            },
            error: function (statusCode, errorThrown) {
                if (statusCode.status == 0) {
                    // alert("you're offline");
                    // showAndroidToast("you're offline");
                }
            },
            complete: function (transport) {
                //  myBookingHistoryScroll.refresh();
            }
        });
    }


    this.showMyBookingHistory = function () {

        //document.getElementById('BookingInfoDiv').innerHtml = "";
        //  document.getElementById('BookingInfoDiv').innerHTML = "";
        document.getElementById('CheckReservationsContent').innerHTML = "";

        var CancellationButtonNumber = 0;

        var BookingsDataWithCheck = MyBookingHistory.BookingsDataWithCheck;

        var isBookings = BookingsDataWithCheck.isBookings;
        var EachTransactionSplit = BookingsDataWithCheck.EachTransactionSplit;


        //                                    var BookingInfoDiv = document.getElementById('BookingInfoDiv');
        //                                    while (BookingInfoDiv.firstChild) {
        //                                        BookingInfoDiv.removeChild(BookingInfoDiv.firstChild);
        //                                    }

        if (isBookings.toUpperCase() == "NO BOOKINGS") {

            var nobookingUl = document.createElement('ul');
            var nobookingLi = document.createElement('li');
            nobookingLi.appendChild(document.createTextNode('NO BOOKINGS'));
            nobookingUl.appendChild(nobookingLi); /// <reference path="../../SrcClasses/MyBookingHistoryDetails.cs" />

            //  BookingInfoDiv.appendChild(nobookingUl);
            document.getElementById('CheckReservationsContent').appendChild(nobookingUl);

        }
        else {

            var ReservationDiv = document.createElement('div');
            ReservationDiv.setAttribute('id', "ReservationDiv");

            for (var i = 0; i < EachTransactionSplit.length; i++) {
                if (EachTransactionSplit[i] != "" && EachTransactionSplit[i] != null) {
                    var bookingHistoryTableUL = document.createElement('ul');

                    var trandata = EachTransactionSplit[i];
                    var EachBookingsDataSplit = trandata.split('|');

                    var vBOOKING_STATUS = EachBookingsDataSplit[0];

                    //DateTime vTRANSACTION_TIMESTAMP = Convert.ToDateTime(EachBookingsDataSplit[1]);

                    var vTRANSACTION_TIMESTAMP = EachBookingsDataSplit[1];

                    var vTH_ID = EachBookingsDataSplit[2];
                    var vSHOW_DATE = EachBookingsDataSplit[3];
                    var vSHOW_NAME = EachBookingsDataSplit[4];
                    var vSHOW_TIME = EachBookingsDataSplit[5];
                    var vSHOW_NUMBER = "";
                    //var vSHOW_NUMBER = EachBookingsDataSplit[6];
                    var vCLASS_NUMBER = EachBookingsDataSplit[6];
                    var vDTSH_NO = EachBookingsDataSplit[7];
                    var vNO_TICK = EachBookingsDataSplit[8];
                    var vTICK_AMOUNT = EachBookingsDataSplit[9];
                    var vUSER_TYPE = EachBookingsDataSplit[10];
                    //var vCOUPON_NUMBER = EachBookingsDataSplit[12];
                    var vDATE_STAMP = EachBookingsDataSplit[11];
                    var vRES_NO = EachBookingsDataSplit[12];
                    var vCATEGORY_BOOKING = EachBookingsDataSplit[13];
                    var vSEAT_NUMBERS = EachBookingsDataSplit[14];
                    SEAT_NUMBERS = vSEAT_NUMBERS;
                    var vUSER_ID = EachBookingsDataSplit[15];
                    var vSP_TRANSACTION_NUMBER = EachBookingsDataSplit[16];
                    var vCUSTOMER_NAME = EachBookingsDataSplit[17];
                    //var vCUSTOMER_AGE = EachBookingsDataSplit[20];
                    var vCINEMA_SEQ_NO = EachBookingsDataSplit[18];

                    //var vWITHWHOM = EachBookingsDataSplit[22];
                    //var vATTACH_COUPON = EachBookingsDataSplit[23];
                    //var vTRANSACTION_DETAILS = EachBookingsDataSplit[24];
                    var vACTUAL_TRANSACTION_AMOUNT = EachBookingsDataSplit[19];
                    var vACTUAL_TRANSACTION_DESC = EachBookingsDataSplit[20];
                    var vEXTRA_TRANSACTION_AMOUNT = EachBookingsDataSplit[21];
                    var vEXTRA_TRANSACTION_DESC = EachBookingsDataSplit[22];
                    //var vCONFIRMATION_NUMBER = EachBookingsDataSplit[29];
                    var vINTERFACE_TYPE = EachBookingsDataSplit[23];


                    var vCINEMA_NAME = EachBookingsDataSplit[24];


                    //var vCANCANCEL = EachBookingsDataSplit[32];
                    //var vOP1 = EachBookingsDataSplit[33];
                    //var vOP2 = EachBookingsDataSplit[34];
                    var vTICK_PRICE = EachBookingsDataSplit[25];
                    var vACTUAL_SEAT_NUMBERS = EachBookingsDataSplit[26];
                    var vCLASS_DESC = EachBookingsDataSplit[27];
                    var vPAYMENT_STATUS = EachBookingsDataSplit[28];
                    //var vPAYMENT_DONE_DATE_STAMP = EachBookingsDataSplit[39];
                    //var vDONEWITH_STATUS = EachBookingsDataSplit[40];
                    //var vDONEWITH_DATE_STAMP = EachBookingsDataSplit[41];
                    var vTypeOfActivity = EachBookingsDataSplit[13];
                    var vCityCode = EachBookingsDataSplit[29];
                    var vTicketId = EachBookingsDataSplit[30];
                    var vTheatreName = EachBookingsDataSplit[31];
                    var vCanDoCancellation = EachBookingsDataSplit[32];
                    //alert(vCanDoCancellation);
                    //vTypeOfActivity = vTypeOfActivity.toupp
                    var VPropertyId = EachBookingsDataSplit[33];
                    var VPropertyName = EachBookingsDataSplit[34];
                    var VPropertyArea = EachBookingsDataSplit[35];

                    var OrderId = EachBookingsDataSplit[36];
                    if (vSHOW_NUMBER == "" || vSHOW_NUMBER == null) {
                        var vTheatreType = "CT";
                    }
                    else {
                        var vTheatreType = "NT";
                    }

                    var theatre_name = vTheatreName; //bookingHistoryFObj.GetTheatreName(vCityCode, vTH_ID);
                    var th_cinema_seq_No = vCINEMA_SEQ_NO;
                    var showTimeVal = format12(vSHOW_TIME);
                    vTCSCode = "";


                    var j = i;

                    var resHeadId = "ReservationHead-" + (j + 1);
                    var PlusMinusHeadBtnId = "PlusMinusReservationHead-" + (j + 1);
                    var IPlusMinusHeadBtnId = "I" + PlusMinusHeadBtnId;
                    this.PlusMinusArray[i] = IPlusMinusHeadBtnId;

                    var resContentId = "ReservationContent-" + (j + 1);
                    this.resContentArray[i] = resContentId;
                    var ReservationHead = document.createElement('div');
                    ReservationHead.setAttribute('id', resHeadId);
                    ReservationHead.setAttribute('style', 'font-family: PT Sans Narrow, sans-serif;font-size:16px;margin-top:1px;display:inline-block;width:100%;height:auto;background-color:#A9BCF5;position:relative;border: 1px none #000;text-align:left;');
                    ReservationHead.setAttribute('onclick', 'showResContent(this.id);');

                    //  var data = { id: resHeadId }
                    //  jQuery_1_7_1(document).off("tap", "#" + resHeadId);
                    // jQuery_1_7_1(document).on('tap', "#" + resHeadId, data, showResContent);


                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'background-color:#A9BCF5;display:inline-block;width:100%;');

                    var imgPlusMinus = document.createElement('img');
                    imgPlusMinus.setAttribute('id', IPlusMinusHeadBtnId);

                    imgPlusMinus.setAttribute('src', 'img/plus.gif');
                    imgPlusMinus.setAttribute('alt', 'close');
                    imgPlusMinus.setAttribute('style', 'height;30px;width:30px;');

                    var PlusMinusBtn = document.createElement('span');

                    PlusMinusBtn.appendChild(imgPlusMinus);
                    PlusMinusBtn.setAttribute('id', PlusMinusHeadBtnId);

                    PlusMinusBtn.setAttribute('style', 'display: inline-block; float:right;position:absolute; top:29px; right: 0px;width:30px;height: 30px;color:black;');

                    //  ReservationHead.appendChild(document.createTextNode("Reservation-" + (j + 1) + " " + vBOOKING_STATUS));

                    var reservationDetails = document.createElement('div');
                    reservationDetails.setAttribute('style', 'width:70%');


                    var Event = document.createElement('div');
                    Event.setAttribute('style', 'width:100%;padding-top:2px;padding-left:2px;padding-bottom:2px');

                    var spanEventName = document.createElement('span');
                    spanEventName.setAttribute('style', 'font-weight:bold;color:White');
                    spanEventName.appendChild(document.createTextNode("Event : "));

                    var spanEventNameVl = document.createElement('span');
                    spanEventNameVl.appendChild(document.createTextNode(vCINEMA_NAME));

                    Event.appendChild(spanEventName); //xyz
                    Event.appendChild(spanEventNameVl); //xyz

                    var venue = document.createElement('div');
                    venue.setAttribute('style', 'width:100%;padding-top:2px;padding-left:2px;padding-bottom:2px');

                    var spanThtrName = document.createElement('span');
                    spanThtrName.setAttribute('style', 'font-weight:bold;color:White');
                    spanThtrName.appendChild(document.createTextNode("Venue : "));

                    var spanThtrNameVl = document.createElement('span');
                    var spanthtrname = theatre_name = theatre_name.toUpperCase().replace("ACTACT", "");
                    spanThtrNameVl.appendChild(document.createTextNode(spanthtrname));


                    venue.appendChild(spanThtrName); //xyz
                    venue.appendChild(spanThtrNameVl); //xyz

                    var ShowingDate = document.createElement('div');
                    ShowingDate.setAttribute('style', 'width:100%;padding-top:2px;padding-left:2px;padding-bottom:2px');

                    var spanDtTime = document.createElement('span');
                    spanDtTime.setAttribute('style', 'font-weight:bold;color:White');
                    spanDtTime.appendChild(document.createTextNode("Date & Time : "));

                    var spanDtTimeVl = document.createElement('span');
                    spanDtTimeVl.appendChild(document.createTextNode(vSHOW_DATE + ", " + showTimeVal));

                    ShowingDate.appendChild(spanDtTime); //xyz
                    ShowingDate.appendChild(spanDtTimeVl); //xyz

                    var ticketId = document.createElement('div');
                    ticketId.setAttribute('style', 'width:100%;padding-top:2px;padding-left:2px;padding-bottom:2px;font-weight:bold;');

                    var spanTickId = document.createElement('span');
                    spanTickId.setAttribute('style', 'font-weight:bold');
                    spanTickId.appendChild(document.createTextNode("Ticket Id : "));

                    var spanTickIdVl = document.createElement('span');
                    spanTickIdVl.appendChild(document.createTextNode(vTicketId));

                    ticketId.appendChild(spanTickId);
                    ticketId.appendChild(spanTickIdVl);

                    reservationDetails.appendChild(Event);
                    reservationDetails.appendChild(venue);
                    reservationDetails.appendChild(ShowingDate);
                    reservationDetails.appendChild(ticketId);

                    var moreDiv = document.createElement('div');
                    moreDiv.setAttribute('style', 'width:30%');
                    moreDiv.appendChild(PlusMinusBtn);

                    ReservationHead.appendChild(reservationDetails);
                    ReservationHead.appendChild(moreDiv);

                    //ReservationHead.appendChild(PlusMinusBtn);

                    ReservationDiv.appendChild(ReservationHead);

                    var ReservationContent = document.createElement('div');
                    ReservationContent.setAttribute('id', resContentId);
                    ReservationContent.setAttribute('style', "display:none;");

                    ////////////////////////////////////////////////////////////////////////////////////////////////

                    var CancelButtonId = "Cancel-" + i;
                    //alert(CancelButtonId);
                    CancellationButtonNumber = CancellationButtonNumber + 1;

                    bookingHistoryTableLI = document.createElement('li');

                    var cancelButton = document.createElement('a');
                    cancelButton.setAttribute("id", CancelButtonId);
                    cancelButton.setAttribute("href", "#");


                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Cancellation'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold;padding-top:5px;");


                    //StrCancellationDetails = vDTSH_NO + "$" + vUSER_ID + "$" + vUSER_TYPE + "$" + vINTERFACE_TYPE + "$" + vTH_ID + "$" + vCINEMA_SEQ_NO + "$" + th_cinema_seq_No + "$" + vSHOW_DATE + "$" + vSHOW_NAME + "$" + vSHOW_TIME + "$" + vCLASS_NUMBER + "$" + theatre_name + "$" + vCINEMA_NAME + "$" + vCLASS_DESC + "$" + vTCSCode + "$" + vTICK_AMOUNT + "$" + vTICK_PRICE + "$" + vCUSTOMER_NAME + "$" + SEAT_NUMBERS + "$" + vNO_TICK + "$" + vNO_TICK + "$" + vSP_TRANSACTION_NUMBER + "$" + vUSER_ID + "$" + CancellationButtonNumber + "$" + vCityCode + "$" + "CancelButton" + i;
                    StrCancellationDetails = vDTSH_NO + "$" + vUSER_ID + "$" + vUSER_TYPE + "$" + vINTERFACE_TYPE + "$" + vTH_ID + "$" + vCINEMA_SEQ_NO + "$" + th_cinema_seq_No + "$" + vSHOW_DATE + "$" + vSHOW_NAME + "$" + vSHOW_TIME + "$" + vCLASS_NUMBER + "$" + theatre_name + "$" + vCINEMA_NAME + "$" + vCLASS_DESC + "$" + vTCSCode + "$" + vTICK_AMOUNT + "$" + vTICK_PRICE + "$" + vCUSTOMER_NAME + "$" + SEAT_NUMBERS + "$" + vNO_TICK + "$" + vNO_TICK + "$" + vSP_TRANSACTION_NUMBER + "$" + vUSER_ID + "$" + CancellationButtonNumber + "$" + vCityCode + "$" + "CancelButton" + i + "$" + VPropertyId + "$" + VPropertyName + "$" + VPropertyArea + "$" + OrderId + "$" + vTicketId;
                    this.CancellationDetailsArray[i] = StrCancellationDetails;


                    ////////////////////////////////append-cancelation-event/////////////////////////////
                    //if (vTypeOfActivity == "BOOKING") {
                    //alert(vTypeOfActivity);
                    if (vTypeOfActivity.toUpperCase() == "BOOKING") {
                        //  alert("came");
                        if (vCanDoCancellation == "YES") {
                            cancelButton.setAttribute("class", "button");
                            cancelButton.appendChild(document.createTextNode("Cancel"));
                            cancelButton.setAttribute("onclick", " beforeGotoCancelTransaction(this.id);");


                            /*

                            jQuery_1_7_1(document).off("touchstart", "#" + CancelButtonId);
                            jQuery_1_7_1(document).off("touchend", "#" + CancelButtonId);
                            jQuery_1_7_1(document).off("tap", "#" + CancelButtonId);
                            jQuery_1_7_1(document).on('touchstart', "#" + CancelButtonId, cancelClickTouchStart);
                            jQuery_1_7_1(document).on('touchend', "#" + CancelButtonId, cancelClickTouchEnd);
                            jQuery_1_7_1(document).on('tap', "#" + CancelButtonId, function (e) {
                            e.preventDefault();
                            beforeGotoCancelTransaction(this.id);
                            });
                            */
                            if (vTH_ID == "126") {

                            }
                            else {

                            }

                            if (vINTERFACE_TYPE == "KIOSK") {

                            }
                            else {

                            }
                        }
                        else {
                            /*
                            jQuery_1_7_1(document).off("touchstart", "#" + CancelButtonId);
                            jQuery_1_7_1(document).off("touchend", "#" + CancelButtonId);
                            jQuery_1_7_1(document).off("tap", "#" + CancelButtonId);
                            */
                            cancelButton.appendChild(document.createTextNode("No Cancellation"));
                            cancelButton.setAttribute("style", "color:red;font-weight:bold;text-decoration:none;");

                        }
                    }
                    else {

                    }
                    ////////////////////////////////append-cancelation-event-end/////////////////////////////


                    valueDiv.appendChild(cancelButton);

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);

                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);
                    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    /*
                    var bookingHistoryTableLI = document.createElement('li');
                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-block;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));


                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Tran Type'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vTypeOfActivity));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);

                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);
                    */
                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-block;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Tran time'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vTRANSACTION_TIMESTAMP));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);

                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);

                    bookingHistoryTableLI = document.createElement('li');


                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-block;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Movie Name'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vCINEMA_NAME));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);

                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);

                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-block;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Theatre Name'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(theatre_name));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);


                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);

                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Show Date & Time'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vSHOW_DATE + " & " + showTimeVal));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);


                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);
                    /*
                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Show Time'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(showTimeVal));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);


                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);
                    */
                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));


                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Class'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vCLASS_DESC));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);


                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);

                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('No Of Tickets(Seat Nos)'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vNO_TICK + "(" + vSEAT_NUMBERS + ")"));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);


                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);
                    /*
                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Seat No'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vSEAT_NUMBERS));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);


                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);
                    */
                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Res.No.'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vRES_NO));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);


                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);

                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');

                    if (vCUSTOMER_NAME == "") {
                        vCUSTOMER_NAME = "--"
                    }


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Customer Name'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vCUSTOMER_NAME));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);

                    //  bookingHistoryTableUL.appendChild(bookingHistoryTableLI);//customer name for future.
                    /*
                    bookingHistoryTableLI = document.createElement('li');

                    var nameValueDiv = document.createElement('div');
                    nameValueDiv.setAttribute('style', 'display:inline-table;width:100%;');


                    var colonSeparatorDiv = document.createElement('div');
                    colonSeparatorDiv.setAttribute("style", " width:2px;float:left;text-align:left;");
                    colonSeparatorDiv.appendChild(document.createTextNode(":"));

                    var nameDiv = document.createElement('div');
                    nameDiv.setAttribute("style", " width: 47.8%;float:left;text-align:left;padding-left:5px;");
                    nameDiv.appendChild(document.createTextNode('Interface Type'));
                    var valueDiv = document.createElement('div');
                    valueDiv.setAttribute("style", " width: 49.8%;float:left;text-align:left;padding-left:5px;color:blue;font-weight:bold");
                    valueDiv.appendChild(document.createTextNode(vINTERFACE_TYPE));

                    nameValueDiv.appendChild(nameDiv);
                    nameValueDiv.appendChild(colonSeparatorDiv);
                    nameValueDiv.appendChild(valueDiv);
                    bookingHistoryTableLI.appendChild(nameValueDiv);

                    bookingHistoryTableUL.appendChild(bookingHistoryTableLI);
                    */
                    ReservationContent.appendChild(bookingHistoryTableUL);

                    ReservationDiv.appendChild(ReservationContent);
                }
            } //forloop  
            // BookingInfoDiv.appendChild(ReservationDiv);
            document.getElementById('CheckReservationsContent').appendChild(ReservationDiv);
        }

    } 
//end...

                                this.GetTheatreName = function (PCityCode, ThID) {

                                    var GetTheatreName = null;
                                    if (PCityCode == "1") {
                                        if (ThID == 1)
                                            GetTheatreName = "Devi 70mm";
                                        else if (ThID == 2)
                                            GetTheatreName = "Sudarshan 35mm";
                                        else if (ThID == 3)
                                            GetTheatreName = "SreeRamana 70mm";
                                        else if (ThID == 4)
                                            GetTheatreName = "SreeRamana 35mm";
                                        else if (ThID == 5)
                                            GetTheatreName = "Vimal 70mm";
                                        else if (ThID == 8)
                                            GetTheatreName = "Ranga 70mm";
                                        else if (ThID == 9)
                                            GetTheatreName = "Aaradhana 70mm";
                                        else if (ThID == 12)
                                            GetTheatreName = "Bhujanga 70mm";
                                        else if (ThID == 13)
                                            GetTheatreName = "Laxmikala 70mm";
                                        else if (ThID == 14)
                                            GetTheatreName = "Shashikala 70mm";
                                        else if (ThID == 15)
                                            GetTheatreName = "Shivaparvathi 70mm";
                                        else if (ThID == 16)
                                            GetTheatreName = "Viswanath 70mm";
                                        else if (ThID == 17)
                                            GetTheatreName = "Vishnu 70mm";
                                        else if (ThID == 19)
                                            GetTheatreName = "Metro 70mm";
                                        else if (ThID == 20)
                                            GetTheatreName = "Sree Mayuri 70mm";
                                        else if (ThID == 24)
                                            GetTheatreName = "Galaxy 70mm";
                                        else if (ThID == 26)
                                            GetTheatreName = "SriSaiRaja 70mm";
                                        else if (ThID == 27)
                                            GetTheatreName = "Odeon Deluxe";
                                        else if (ThID == 29)
                                            GetTheatreName = "Ramakrishna 35mm";
                                        else if (ThID == 30)
                                            GetTheatreName = "Venkatramana Megaplex";
                                        else if (ThID == 31)
                                            GetTheatreName = "Padmavathi Cineplex";
                                        else if (ThID == 35)
                                            GetTheatreName = "Sensation Insomnia";
                                        else if (ThID == 36)
                                            GetTheatreName = "SaiRanga 70mm";
                                        else if (ThID == 39)
                                            GetTheatreName = "Usha Mayuri 70mm";
                                        else if (ThID == 42)
                                            GetTheatreName = "Ramakrishna 70mm";
                                        else if (ThID == 45)
                                            GetTheatreName = "Yadagiri 70mm";
                                        else if (ThID == 48)
                                            GetTheatreName = "Cineplanet Screen1";
                                        else if (ThID == 49)
                                            GetTheatreName = "Cineplanet Screen2";
                                        else if (ThID == 50)
                                            GetTheatreName = "Sensation Sunshine";
                                        else if (ThID == 51)
                                            GetTheatreName = "RajyaLaxmi 70mm";
                                        else if (ThID == 52)
                                            GetTheatreName = "SriRama 70mm";
                                        else if (ThID == 53)
                                            GetTheatreName = "Chandrakala 70mm";
                                        else if (ThID == 54)
                                            GetTheatreName = "Vijetha 70mm";
                                        else if (ThID == 55)
                                            GetTheatreName = "Cineplanet Screen3";
                                        else if (ThID == 59)
                                            GetTheatreName = "Sudarshan 70mm";
                                        else if (ThID == 60)
                                            GetTheatreName = "Sandhya 35mm";
                                        else if (ThID == 61)
                                            GetTheatreName = "Mini Odeon";
                                        else if (ThID == 62)
                                            GetTheatreName = "Sandhya 70mm";
                                        else if (ThID == 63)
                                            GetTheatreName = "Odeon 70mm";
                                        else if (ThID == 64)
                                            GetTheatreName = "Bhramaramba 70mm";
                                        else if (ThID == 65)
                                            GetTheatreName = "Mallikarjuna 70mm";
                                        else if (ThID == 66)
                                            GetTheatreName = "Santosh 70mm";
                                        else if (ThID == 67)
                                            GetTheatreName = "Sapna 35mm";
                                        else if (ThID == 68)
                                            GetTheatreName = "Shanti 70mm";
                                        else if (ThID == 69)
                                            GetTheatreName = "Suresh 70mm";
                                        else if (ThID == 72)
                                            GetTheatreName = "Cineplanet Screen4";
                                        else if (ThID == 100)
                                            GetTheatreName = "ShivaShakti 70mm";
                                        else if (ThID == 120)
                                            GetTheatreName = "Manju 70mm";
                                        else if (ThID == 400)
                                            GetTheatreName = "SriPriya A/C";
                                        else if (ThID == 401)
                                            GetTheatreName = "Padmapriya A/C";
                                        else if (ThID == 37)
                                            GetTheatreName = "Prashanth Theatre";
                                        else if (ThID == 128)
                                            GetTheatreName = "Shalini 70mm";
                                        else if (ThID == 129)
                                            GetTheatreName = "Shivani 70mm";

                                        else if (ThID == 106)
                                            GetTheatreName = "Sha 70mm";

                                        else if (ThID == 107)
                                            GetTheatreName = "Shensha 70mm";

                                        else if (ThID == 7)
                                            GetTheatreName = "Select Cinema";

                                        else if (ThID == 126)
                                            GetTheatreName = "Test Theatre";
                                        else if (ThID == 133)
                                            GetTheatreName = "Anjali Cinema";
                                        else if (ThID == 440)
                                            GetTheatreName = "Test KKD";
                                        else if (ThID == 71)
                                            GetTheatreName = "Ganga 70mm";
                                        else if (ThID == 70)
                                            GetTheatreName = "Shiva 70mm";
                                        else if (ThID == 25)
                                            GetTheatreName = "Sandhya 35mm";
                                        else if (ThID == 84)
                                            GetTheatreName = "Tarakarama Cineplex";
                                        else if (ThID == 75)
                                            GetTheatreName = "Sri LakshmikalaMandir(Alwal)";
                                        else if (ThID == 121)
                                            GetTheatreName = "Rukmini Theatre(Alwal)";
                                        else if (ThID == 43)
                                            GetTheatreName = "Rajdhani Deluxe";
                                        else if (ThID == 46)
                                            GetTheatreName = "Rajdhani 70mm";
                                        else if (ThID == 134)
                                            GetTheatreName = "Venkateshwara Cinesquare";
                                        else if (ThID == 135)
                                            GetTheatreName = "Glory Cinema(Mallepally)";
                                        else if (ThID == 10)
                                            GetTheatreName = "Ganesh 70mm";
                                        else if (ThID == 130)
                                            GetTheatreName = "Satyam 70mm";
                                        else if (ThID == 18)
                                            GetTheatreName = "Amba 70mm";
                                        else if (ThID == 77)
                                            GetTheatreName = "Sairam 70mm";
                                        else if (ThID == 136)
                                            GetTheatreName = "Kalyani Movie Max";
                                        else if (ThID == 138)
                                            GetTheatreName = "Sandhya 70mm";
                                        else if (ThID == 139)
                                            GetTheatreName = "Indra 70mm";
                                        else if (ThID == 140)
                                            GetTheatreName = "Nagendra 70mm";
                                        else if (ThID == 141)
                                            GetTheatreName = "Sree Lakshmi Deluxe";
                                        else if (ThID == 147)
                                            GetTheatreName = "Saptagiri theatre";

                                        else if (ThID == 148)
                                            GetTheatreName = "Asian CineSquare Scr1";
                                        else if (ThID == 149)
                                            GetTheatreName = "Asian CineSquare Scr2";
                                        else if (ThID == 150)
                                            GetTheatreName = "Asian CineSquare Scr3";
                                        else if (ThID == 151)
                                            GetTheatreName = "Asian CineSquare Scr4";
                                        else if (ThID == 152)
                                            GetTheatreName = "Asian CineSquare Scr5";

                                        else if (ThID == 153)
                                            GetTheatreName = "Asian GPR Scr1";
                                        else if (ThID == 154)
                                            GetTheatreName = "Asian GPR Scr2";
                                        else if (ThID == 155)
                                            GetTheatreName = "Asian GPR Scr3";
                                        else
                                            GetTheatreName = "--";
                                    }

                                    else if (PCityCode == "20") {
                                        if (ThID == 820)
                                            GetTheatreName = "Warangal Theatre";
                                        else if (ThID == 821)
                                            GetTheatreName = "Asian SriDevi Mall Scr-1";
                                        else if (ThID == 822)
                                            GetTheatreName = "Asian SriDevi Mall Scr-2";
                                        else if (ThID == 823)
                                            GetTheatreName = "Asian SriDevi Mall Scr-3";
                                        else if (ThID == 824)
                                            GetTheatreName = "Gemini Adlabs";
                                        else if (ThID == 825)
                                            GetTheatreName = "Mayuri Adlabs";
                                        else if (ThID == 826)
                                            GetTheatreName = "Raam Adlabs";
                                        else if (ThID == 827)
                                            GetTheatreName = "Laxman Adlabs";
                                        else
                                            GetTheatreName = "--";
                                    }

                                    return GetTheatreName;
                                }


                            }


                            function GotoCancelTransaction(StrCancellationDetails) {

                                var Retval;
                                var NoOfCancellationButtonsLoaded;
                                var No_Tick;
                                var Seat_Numbers;
                                var DTSH_NO;
                                var UserId;
                                var UserType;
                                var InterfaceType;
                                var Th_Id;
                                var Em_Cinema_Seq_No;
                                var Th_Cinema_Seq_No;
                                var Show_Date;
                                var Show_Name;
                                var Show_Time;
                                var Class_Number;
                                var Theatre_Name;
                                var Cinema_Name;
                                var Class_Name;
                                var TCSCode;
                                var Tick_Amount;
                                var TickPrice;
                                var UserName;
                                var SeatNosString;
                                var SeatsCount;
                                var NoOfTicketsToSelect;
                                var sp_transaction_Number;
                                var CancelledUserID;
                                var CancellationButtonNumber;
                                var LVCityCode;
                                var ObjectID;
                                var splitStrCancellationDetails;


                                var PropertyId;
                                var PropertyName;
                                var PropertyArea;
                                var OrderId;
                                var TicketId;

                                splitStrCancellationDetails = StrCancellationDetails.split("$");
                                //alert(splitStrCancellationDetails);
                                DTSH_NO = splitStrCancellationDetails[0];
                                UserId = splitStrCancellationDetails[1];
                                UserType = splitStrCancellationDetails[2];
                                InterfaceType = splitStrCancellationDetails[3];
                                Th_Id = splitStrCancellationDetails[4];
                                Em_Cinema_Seq_No = splitStrCancellationDetails[5];
                                Th_Cinema_Seq_No = splitStrCancellationDetails[6];
                                Show_Date = splitStrCancellationDetails[7];
                                Show_Name = splitStrCancellationDetails[8];
                                Show_Time = splitStrCancellationDetails[9];
                                Class_Number = splitStrCancellationDetails[10];
                                Theatre_Name = splitStrCancellationDetails[11];
                                Cinema_Name = splitStrCancellationDetails[12];
                                Class_Name = splitStrCancellationDetails[13];
                                TCSCode = splitStrCancellationDetails[14];
                                Tick_Amount = splitStrCancellationDetails[15];
                                TickPrice = splitStrCancellationDetails[16];
                                UserName = splitStrCancellationDetails[17];
                                SeatNosString = splitStrCancellationDetails[18];
                                SeatsCount = splitStrCancellationDetails[19];
                                NoOfTicketsToSelect = splitStrCancellationDetails[20];
                                sp_transaction_Number = splitStrCancellationDetails[21];
                                CancelledUserID = splitStrCancellationDetails[22];
                                CancellationButtonNumber = splitStrCancellationDetails[23];
                                LVCityCode = splitStrCancellationDetails[24];
                                ObjectID = splitStrCancellationDetails[25];

                                PropertyId = splitStrCancellationDetails[26];
                                PropertyName = splitStrCancellationDetails[27];
                                PropertyArea = splitStrCancellationDetails[28];
                                OrderId = splitStrCancellationDetails[29];
                                TicketId = splitStrCancellationDetails[30];
                                //ssssssssssssssssssss
                                //alert(Em_Cinema_Seq_No);
                                if (Em_Cinema_Seq_No != "3951" && Em_Cinema_Seq_No != "4050" && Em_Cinema_Seq_No != "4240") {

                                    cancellationInfo = new CancellationObj();

                                    cancellationInfo.setCancellationDetails(DTSH_NO, UserId, UserType, InterfaceType, Th_Id, Em_Cinema_Seq_No,
     Th_Cinema_Seq_No, Show_Date, Show_Name, Show_Time, Class_Number,
      Theatre_Name, Cinema_Name, Class_Name, TCSCode, Tick_Amount, TickPrice,
       UserName, SeatNosString, SeatsCount, NoOfTicketsToSelect,
        sp_transaction_Number, CancelledUserID, LVCityCode, PropertyId, PropertyName, PropertyArea, OrderId, TicketId);
                                    //alert("here");
                                    No_Tick = SeatsCount;
                                    //alert(cancellationInfo.PropertyId)
                                    Seat_Numbers = SeatNosString;
                                    Retval = confirm("Do you want to Cancel this tickets--Information \n No tick: " + No_Tick + "\n Cancellation amount=0");

                                    if (Retval) {
                                        if (Seat_Numbers != '') {

                                            //  BackAndHomeObj.goForward('BookingHistoryWrapper', 'CheckCancellations');
                                            var PutRequestForCancellationObj = new PutRequestForCancellation();
                                            PutRequestForCancellationObj.putRequestForCancellation();
                                        }
                                    }

                                    return false;
                                }
                                else {

                                    alert("For the Movie '" + Cinema_Name + "',the cancellation-feature has been withdrawn by theatres.The cancellation-feature is active for other movies.Inconvenience caused is regretted.");
                                    return false;
                                }
                            }


                            var selectionResContentid = "";

                            function showResContent(id) {                              
          
                                var resContentArray = [];
                                resContentArray = bookingHistoryFObj.resContentArray;

                                var PlusMinusArray = []
                                PlusMinusArray = bookingHistoryFObj.PlusMinusArray;

                                var item;
                                var imgPM;

                                var idno = id.split('-')[1];

                                var PMimgId = "IPlusMinusReservationHead-" + idno
                                var Contentid = "ReservationContent-" + idno;


                                for (var i = 0; i < resContentArray.length; i++) {
                                    item = resContentArray[i];
                                    imgPM = PlusMinusArray[i];

                                    if (Contentid == item) {

                                        if (selectionResContentid == Contentid) {
                                            document.getElementById(item).setAttribute('style', 'display:none;');

                                            document.getElementById(imgPM).setAttribute('src', "img/plus.gif");
                                            selectionResContentid = "";
                                        }
                                        else {
                                            document.getElementById(item).setAttribute('style', 'display:block;');
                                            document.getElementById(imgPM).setAttribute('src', "img/Minus.gif");
                                            selectionResContentid = item;
                                        }
                                    }
                                    else {
                                        document.getElementById(item).setAttribute('style', 'display:none;');
                                        document.getElementById(imgPM).setAttribute('src', "img/plus.gif");
                                    }
                                }

                               // myBookingHistoryScroll.refresh();
                               // myBookingHistoryScroll.scrollTo(0, -0);
                            }

                            function beforeGotoCancelTransaction(id) {
                                var idno = id.split('-')[1];
                                //alert(bookingHistoryFObj.CancellationDetailsArray);
                                var CancellationDetailsArray = bookingHistoryFObj.CancellationDetailsArray;
                                GotoCancelTransaction(CancellationDetailsArray[idno]);
                            }

                            function cancelClickTouchStart(event) {
                                event.preventDefault();
                                jQuery_1_7_1(this).removeClass('ButtonDeActive');
                                jQuery_1_7_1(this).addClass('ButtonActive');
                            }

                            function cancelClickTouchEnd(event) {
                                event.preventDefault();
                                jQuery_1_7_1(this).removeClass('ButtonActive');
                                jQuery_1_7_1(this).addClass('ButtonDeActive');
                            }




                            var cancellationInfo;
                            //begin...
                            function CancellationObj() {
                                this.DTSH_NO = "";
                                this.UserId = "";
                                this.UserType = "";
                                this.InterfaceType = "";
                                this.Th_Id = "";
                                this.Em_Cinema_Seq_No = "";
                                this.Th_Cinema_Seq_No = "";
                                this.Show_Date = "";
                                this.Show_Name = "";
                                this.Show_Time = "";
                                this.Class_Number = "";
                                this.Theatre_Name = "";
                                this.Cinema_Name = "";
                                this.Class_Name = "";
                                this.TCSCode = "";
                                this.Tick_Amount = "";
                                this.TickPrice = "";
                                this.UserName = "";
                                this.SeatNosString = "";
                                this.SeatsCount = "";
                                this.NoOfTicketsToSelect = "";
                                this.sp_transaction_Number = "";
                                this.CancelledUserID = "";
                                this.CityCode = "";
                                this.PropertyId = "";
                                this.PropertyName = "";
                                this.PropertyArea = "";
                                this.OrderId = "";
                                this.TicketId = "";

                                this.setCancellationDetails = function (DTSH_NO, UserId, UserType, InterfaceType, Th_Id, Em_Cinema_Seq_No,
     Th_Cinema_Seq_No, Show_Date, Show_Name, Show_Time, Class_Number,
      Theatre_Name, Cinema_Name, Class_Name, TCSCode, Tick_Amount, TickPrice,
       UserName, SeatNosString, SeatsCount, NoOfTicketsToSelect,
        sp_transaction_Number, CancelledUserID, CityCode, PropertyId, PropertyName, PropertyArea, OrderId, TicketId) {

                                    this.DTSH_NO = DTSH_NO;
                                    this.UserId = UserId;
                                    this.UserType = UserType;
                                    this.InterfaceType = InterfaceType;
                                    this.Th_Id = Th_Id;
                                    this.Em_Cinema_Seq_No = Em_Cinema_Seq_No;
                                    this.Th_Cinema_Seq_No = Th_Cinema_Seq_No;
                                    this.Show_Date = Show_Date;
                                    this.Show_Name = Show_Name;
                                    this.Show_Time = Show_Time;
                                    this.Class_Number = Class_Number;
                                    this.Theatre_Name = Theatre_Name;
                                    this.Cinema_Name = Cinema_Name;
                                    this.Class_Name = Class_Name;
                                    this.TCSCode = TCSCode;
                                    this.Tick_Amount = Tick_Amount;
                                    this.TickPrice = TickPrice;
                                    this.UserName = UserName;
                                    this.SeatNosString = SeatNosString;
                                    this.SeatsCount = SeatsCount;
                                    this.NoOfTicketsToSelect = NoOfTicketsToSelect;
                                    this.sp_transaction_Number = sp_transaction_Number;
                                    this.CancelledUserID = CancelledUserID;
                                    this.CityCode = CityCode;

                                    this.PropertyId = PropertyId;
                                    this.PropertyName = PropertyName;
                                    this.PropertyArea = PropertyArea;
                                    this.OrderId = OrderId;
                                    this.TicketId = TicketId;

                                }

                            }
                            //end...
                            var PutRequestForCancellationObj;

                            function PutRequestForCancellation() {

                                this.putRequestForCancellation = function () {


                                    var Pdate = new Date();
                                    TOrderId = Pdate.getTime();
                                    var yyyy = Pdate.getFullYear();
                                    var MM = Pdate.getMonth();
                                    var HH = Pdate.getHours();
                                    var Mintus = Pdate.getMinutes();
                                    var Seconds = Pdate.getSeconds();
                                    var Miseconds = Pdate.getMilliseconds();
                                    HH = HH.toString();
                                    Mintus = Mintus.toString();
                                    Seconds = Seconds.toString();
                                    Miseconds = Miseconds.toString();

                                    if (HH.length == 1) {
                                        HH = "0" + HH;
                                    }
                                    if (Mintus.length == 1) {
                                        Mintus = "0" + Mintus;
                                    }

                                    if (Seconds.length == 1) {
                                        Seconds = "0" + Seconds;
                                    }

                                    if (Miseconds.length == 1) {
                                        Miseconds = "0" + Miseconds;
                                    }


                                    MM = parseInt(MM) + 1;
                                    MM = MM.toString();
                                    if (MM.length == 1) {
                                        MM = "0" + MM;
                                    }
                                    var dd = Pdate.getDate();
                                    dd = dd.toString();
                                    if (dd.length == 1) {
                                        dd = "0" + dd;
                                    }
                                    TOrderId = yyyy.toString() + MM.toString() + dd.toString() + HH.toString() + Seconds.toString() + Mintus.toString() + Miseconds.toString();

                                    var params = {};

                                    params.DTSH_NO = cancellationInfo.DTSH_NO;
                                    params.UserId = cancellationInfo.UserId;
                                    params.UserType = cancellationInfo.UserType;
                                    params.InterfaceType = cancellationInfo.InterfaceType;
                                    params.Th_Id = cancellationInfo.Th_Id;
                                    params.Em_Cinema_Seq_No = cancellationInfo.Em_Cinema_Seq_No;
                                    params.Th_Cinema_Seq_No = cancellationInfo.Th_Cinema_Seq_No;
                                    params.Show_Date = cancellationInfo.Show_Date;
                                    params.Show_Name = cancellationInfo.Show_Name;
                                    params.Show_Time = cancellationInfo.Show_Time;
                                    params.Class_Number = cancellationInfo.Class_Number;
                                    params.Theatre_Name = cancellationInfo.Theatre_Name;
                                    params.Cinema_Name = cancellationInfo.Cinema_Name;
                                    params.Class_Name = cancellationInfo.Class_Name;
                                    params.TCSCode = cancellationInfo.TCSCode;
                                    params.Tick_Amount = cancellationInfo.Tick_Amount;
                                    params.TickPrice = cancellationInfo.TickPrice;
                                    params.UserName = cancellationInfo.UserName;
                                    params.SeatNosString = cancellationInfo.SeatNosString;
                                    params.SeatsCount = cancellationInfo.SeatsCount;
                                    params.NoOfTicketsToSelect = cancellationInfo.NoOfTicketsToSelect;
                                    params.sp_transaction_Number = cancellationInfo.sp_transaction_Number;
                                    params.CancelledUserID = cancellationInfo.CancelledUserID;
                                    params.CityCode = cancellationInfo.CityCode;

                                    params.PropertyId = cancellationInfo.PropertyId;
                                    params.PropertyName = cancellationInfo.PropertyName;
                                    params.PropertyArea = cancellationInfo.PropertyArea;
                                    params.OrderId = cancellationInfo.OrderId;
                                    params.TicketId = cancellationInfo.TicketId;

                                    params.TOrderId = TOrderId;
                                    //alert(TOrderId);
                                    //alert(cancellationInfo.Theatre_Name);
                                    var putReqinfo = { "putReq": params };
                                    var str = $.param(params);
                                    var IsActThtr = cancellationInfo.PropertyName.indexOf("ACTACT");
                                    if (IsActThtr >= 0) {
                                        processing();
                                        //bookingInfo.BlockReqNo = bookingInfo.TOrderID + VerifiedMobile
                                        //                                        var Url = "ActCancellation.aspx?city=" + bookingInfo.selectedCity + "&citycode=" + bookingInfo.selectedCity_id + "&movieid=" + bookingInfo.selectedEmCseqNo;
                                        //                                        //var Url = "ActBookingProcess.aspx?citycode=" + bookingInfo.selectedCity_id + "&movieid=" + bookingInfo.selectedEmCseqNo;
                                        //                                        Url += "&date=" + bookingInfo.selectedDate + "&thid=" + bookingInfo.selectedThiatre_id + "&dtshno=" + bookingInfo.selectedDateshowNo;
                                        //                                        Url += "&seatCount=" + bookingInfo.selectedSeatCount + "&seats=" + bookingInfo.selectedSeats + "&property=" + bookingInfo.selectedCurrentPropertyName + "&propertyarea=" + bookingInfo.selectedCurrentPropertyArea;
                                        //                                        Url += "&userno=" + bookingInfo.customerName + "&pid=" + bookingInfo.selectedCurrentPropertyId + "&orderid=" + bookingInfo.TOrderID + VerifiedMobile;

                                        //                                        Url += "&thname=" + bookingInfo.selectedTheatre + "&movie=" + bookingInfo.selectedMovie + "&WalletOrCC=CC";
                                        Url = "ActCancellation.aspx?" + str;
                                        //alert(Url);
                                        ProcessActBooking(Url);
                                        return;

                                    }



                                    jQuery_1_7_1.ajax({
                                        type: "POST",
                                        contentType: "application/json; charset=utf-8",
                                        url: "ServerDataForDesktop.asmx/putRequestForCancellation",
                                        data: JSON.stringify(putReqinfo),
                                        dataType: "json",
                                        async: true,

                                        //cache: false,
                                        beforeSend: function () {

                                        },
                                        success: function (putReqResponse) {
                                            // alert('hi' + putReqResponse);
                                            putReqResponseObj = putReqResponse.d;
                                            nlbStatus(putReqResponseObj.NlbIps);
                                            CancellationResponseObj = putReqResponseObj.CancellationResponse;

                                            var errorInfo = CancellationResponseObj.errorInfo;
                                            var successOrNot = CancellationResponseObj.successOrNot;
                                            var checkCancellation = CancellationResponseObj.checkCancellation;


                                            if (errorInfo == "") {
                                                check1(checkCancellation.Rcsstr, checkCancellation.TotalFileCount, checkCancellation.Rtcsserver);
                                            }
                                            else {
                                                forWhich = "tranStatus1";
                                                showErrorInfo(errorInfo, forWhich);
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

                            }




                            function check1(Rcsstr, TotalFileCount, Rtcsserver) {
                                CheckForRequestStatus1(Rcsstr ,  TotalFileCount, Rtcsserver );                        
                            }

                            function CheckForRequestStatus1(Rcsstr, TotalFileCount, Rtcsserver) {
                             

                                currentTimet = Date();
                                var checkCancellationInfoV = {};
                                checkCancellationInfoV.TCSCommunicationNumber = Rcsstr;
                                checkCancellationInfoV.RTCSServer = Rtcsserver;
                                checkCancellationInfoV.FilesCount = TotalFileCount;
                                checkCancellationInfoV.CurrentTime = currentTimet;
                                checkCancellationInfoV.MNoValue = LocalPrefObj.MNoValue;

                                var StatusUrl = "ShowCancelStatus.aspx?TCSCommunicationNumber=" + checkCancellationInfoV.TCSCommunicationNumber + "&CurrentTime=" + checkCancellationInfoV.CurrentTime + "&Tcscode=" + checkCancellationInfoV.TCSCode + "&Cnt=" + checkCancellationInfoV.FilesCount;
                                var ldata = { "cci": checkCancellationInfoV };

                                jQuery_1_7_1.ajax({
                                    type: "POST",
                                    contentType: "application/json; charset=utf-8",                                   
                                    url: "../../android/Cinegoer/Users/CheckCancellationService.asmx/checkCancellationInfo",
                                    data: JSON.stringify(ldata),
                                    dataType: "json",
                                    async: true,
                                     
                                    success: function (data, textStatus) {
                                        var CancellationInfo;
                                        if (textStatus == "success") {
                                            if (data.hasOwnProperty('d')) {
                                                CancellationInfo = data.d;
                                            } else {
                                                CancellationInfo = data;
                                            }

                                            if (CancellationInfo.exceptionStatus != "exception") {

                                                var cancellationDetails = CancellationInfo.AAllTranData;                                              
                                                showtranStatus1(cancellationDetails);
                                            }
                                            else {
                                                alert("Sorry for inconvenience plz check bookHistory for booking result..!");
                                            
                                            }
                                        }
                                    }
                                });

                            }
                            function showtranStatus1(cancellationDetails) {
                                var TRANSTATUS = dataBetween1(cancellationDetails, "AAATRANSTATUS=", "ZZZTRANSTATUS");
                                var WHYNOTSTRING = dataBetween1(cancellationDetails, "AAATRANWHYNOT=", "ZZZTRANWHYNOT");
        
                                if (TRANSTATUS == "") {
                                    alert("check your booking history...!");
                                }
                                else if (TRANSTATUS == "CANCELLATIONDONE") {
                                    alert(TRANSTATUS);                            
                                }
                                else {
                                    alert(TRANSTATUS + " DUE TO " + WHYNOTSTRING);
                                }

                                showUserInformationDiv();
                                showMyReservations("CheckReservations");
                            }


                            function dataBetween1(Text, FirstString, LastString) {
                                var i, j;

                                FirstString = FirstString.toUpperCase();
                                LastString = LastString.toUpperCase();
                                Text = Text.toUpperCase();

                                if ((FirstString == "") || (LastString == "")) {
                                    return '';
                                };

                                i = Text.indexOf(FirstString);
                                if (i >= 0) {
                                    Text = Text.substring(i + FirstString.length);
                                }
                                else {
                                    return '';
                                }

                                if (LastString) {
                                    i = Text.indexOf(LastString);
                                    if (i >= 0) {
                                        Text = Text.substring(0, i);
                                    }
                                    else {
                                        return '';
                                    }
                                }
                                return Text;
                            }