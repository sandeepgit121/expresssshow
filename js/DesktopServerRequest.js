
var Var1;
var msg;
var process = false;
var timeoutCount = 0;



var putReqForBlockingObj;

function PutRequestForBlocking() {

    this.MemIDt = "";
    this.VerifiedName = "";
    this.VerifiedEmail = "";
    this.VerifiedMobile = "";

    this.putRequestForBlocking = function (MemIDt, VerifiedName, VerifiedEmail, VerifiedMobile) {

        this.MemIDt = MemIDt;
        this.VerifiedName = VerifiedName;
        this.VerifiedEmail = VerifiedEmail;
        this.VerifiedMobile = VerifiedMobile;

        var params = {};
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

        params.WalletOrCC = "CC";
        //alert(bookingInfo.cityName);
        params.vMobile = VerifiedMobile;
        params.vEmail = VerifiedEmail;
        params.vName = VerifiedName;
        bookingInfo.BlockReqNo = bookingInfo.TOrderID + VerifiedMobile
        //alert(bookingInfo.BlockReqNo);
        var str = $.param(params);
        //alert(str);
        var IsActThtr = bookingInfo.selectedCurrentPropertyName.indexOf("ACTACT");
        if (IsActThtr >= 0) {
            processing();
            bookingInfo.BlockReqNo = bookingInfo.TOrderID + VerifiedMobile
            var Url = "ActBlockingProcess.aspx?city=" + bookingInfo.selectedCity + "&citycode=" + bookingInfo.selectedCity_id + "&movieid=" + bookingInfo.selectedEmCseqNo;
            //var Url = "ActBookingProcess.aspx?citycode=" + bookingInfo.selectedCity_id + "&movieid=" + bookingInfo.selectedEmCseqNo;
            Url += "&date=" + bookingInfo.selectedDate + "&thid=" + bookingInfo.selectedThiatre_id + "&dtshno=" + bookingInfo.selectedDateshowNo;
            Url += "&seatCount=" + bookingInfo.selectedSeatCount + "&seats=" + bookingInfo.selectedSeats + "&property=" + bookingInfo.selectedCurrentPropertyName + "&propertyarea=" + bookingInfo.selectedCurrentPropertyArea;
            Url += "&userno=" + bookingInfo.customerName + "&pid=" + bookingInfo.selectedCurrentPropertyId + "&orderid=" + bookingInfo.TOrderID + VerifiedMobile;

            Url += "&thname=" + bookingInfo.selectedTheatre + "&movie=" + bookingInfo.selectedMovie + "&WalletOrCC=CC";
            //alert(Url);
            Url = "ActBlockingProcess.aspx?" + str;
            ProcessActBooking(Url);
            return;

        }



        var putReqinfo = { "putReq": params };

        jQuery_1_7_1.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServerDataForDesktop.asmx/putRequestForBlocking",
            data: JSON.stringify(putReqinfo),
            dataType: "json",
            async: true,

            //cache: false,
            beforeSend: function () {

            },
            success: function (putReqResponse) {
                putReqResponseObj = putReqResponse.d;

                BlockingResponseObj = putReqResponseObj.BlockingResponse;

                var errorInfo = BlockingResponseObj.errorInfo;
                var successOrNot = BlockingResponseObj.successOrNot;
                var checkBlocking = BlockingResponseObj.checkBlocking;

                if (errorInfo == "") {

                    var RCommunicationNumber = checkBlocking.RCommunicationNumber;
                    var AllTextFileContent = checkBlocking.AllTextFileContent;

                    if (successOrNot == "DONE") {
                        //alert("successOrNot " + successOrNot);

                        putReqForBlockingObj.check2(checkBlocking.Rcsstr, checkBlocking.TotalFileCount, checkBlocking.Rtcsserver);

                    }
                    else {
                        forWhich = "tranStatus";
                        showErrorInfo(errorInfo, forWhich);
                    }

                }
                else {
                    forWhich = "tranStatus";
                    showErrorInfo(errorInfo, forWhich);


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



    this.check2 = function (Rcsstr, TotalFileCount, Rtcsserver) {
       // alert("check2 " + +Rcsstr + " " + TotalFileCount + " " + Rtcsserver);
        //  showLoading();
        //        var spinner = new Spinner({
        //            lines: 12,
        //            length: 7,
        //            width: 3,
        //            radius: 10,
        //            color: '#336699',
        //            speed: 1,
        //            trail: 60
        //        }).spin(jQuery_1_7_1('#mySpinner2')[0]);
        //  document.getElementById("msgInProgress2").setAttribute('style', 'display:inline;');
        //Var1 = setTimeout("CheckForRequestStatus2('" + Rcsstr + "','" + TotalFileCount + "','" + Rtcsserver + "')", 0);     
        CheckForRequestStatus2(Rcsstr,TotalFileCount , Rtcsserver );

    }

}


function processing2() {
    showLoading();
    //jQuery_1_7_1find('showProcessNotifcation').show();
    // jQuery_1_7_1('#msgInProgress2').show();
}
function processingEnd2() {
    // jQuery_1_7_1find('showProcessNotifcation').hide();
    // jQuery_1_7_1('#msgInProgress2').hide();
    // jQuery_1_7_1('#VersionMsg').hide();
    setTimeout(stopLoading, 100);

}


var PutRequestForBookingObj;
var putReqResponseObj;
var BookingResponseObj;

function ProcessActBooking(LUrl) {

    document.getElementById('ACTDiv').innerHTML = "";
    //document.getElementById('ACTDiv').style.visibility = "visible";
    document.getElementById('ACTDiv').innerHTML = "";
    //document.createElement('Iframe');
    //return;
    var Rpifrm = document.createElement("IFRAME");
    Rpifrm.setAttribute("id", "ReportsIframe");
    //Rpifrm.setAttribute("src", "Reports.aspx?Reports=" + JAllScreenIDArray.toString());
    Rpifrm.setAttribute("src", LUrl);

    Rpifrm.style.width = 100 + "%";
    Rpifrm.style.height = 100 + "%";
    var ClsDiv = document.createElement("DIV");
    //ClsDiv.setAttribute("top", "2px");
//    ClsDiv.innerHTML = "<img src='images/cancel-48x48.png' />"
//    ClsDiv.setAttribute("id", "ReportsClose");
//    ClsDiv.setAttribute("onclick", "HideExtraDiv()");
//    ClsDiv.setAttribute("style", "position:absolute;float:right;left:35%;top:-1px;")

    document.getElementById('ACTDiv').appendChild(ClsDiv);
    document.getElementById('ACTDiv').appendChild(Rpifrm);

    var ReSult = document.getElementById('ReportsIframe').innerHTML;
    return ReSult;
}

function PutRequestForBooking() {

    this.putRequestForBooking = function () {
        var servicechargeperticket = 10;
        var totalservicechargeperticket = servicechargeperticket * 1.145;

        var params = {};

        //alert(bookingInfo.TOrderID);
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
        params.BlockReqNo = bookingInfo.BlockReqNo;
        params.BProPertyId = bookingInfo.selectedCurrentPropertyId;

        params.BPropertyName = bookingInfo.selectedCurrentPropertyName;
        params.BPropertyArea = bookingInfo.selectedCurrentPropertyArea;
        params.cityName = bookingInfo.selectedCity;
        params.TorderId = bookingInfo.TOrderID;
        params.TEmailId = bookingInfo.customerEmail;
        params.userpwd = bookingInfo.customerPwd;

        if (((parseFloat(bookingInfo.selectedSeatPrice) + parseFloat(totalservicechargeperticket)) * bookingInfo.selectedSeatCount) > 0) {
            params.totalcostoftransaction = ((parseFloat(bookingInfo.selectedSeatPrice) + parseFloat(totalservicechargeperticket)) * bookingInfo.selectedSeatCount);
        }
        else {
            alert("there seems to be an error in calculating the total cost of tyhe transaction");
        }
        //alert("params.totalcostoftransaction=" + params.totalcostoftransaction);
        //return;

        var str = $.param(params);
        //alert(str);
        //alert(bookingInfo.customerEmail);
        //return;
        var IsActThtr = bookingInfo.selectedCurrentPropertyName.indexOf("ACTACT");
        if (IsActThtr >= 0) {
            processing();
            var Url = "ActBookingProcess.aspx?city=" + bookingInfo.selectedCity + "&citycode=" + bookingInfo.selectedCity_id + "&movieid=" + bookingInfo.selectedEmCseqNo;
            //var Url = "ActBookingProcess.aspx?citycode=" + bookingInfo.selectedCity_id + "&movieid=" + bookingInfo.selectedEmCseqNo;
            Url += "&date=" + bookingInfo.selectedDate + "&thid=" + bookingInfo.selectedThiatre_id + "&dtshno=" + bookingInfo.selectedDateshowNo;
            Url += "&seatCount=" + bookingInfo.selectedSeatCount + "&seats=" + bookingInfo.selectedSeats + "&property=" + bookingInfo.selectedCurrentPropertyName + "&propertyarea=" + bookingInfo.selectedCurrentPropertyArea;
            Url += "&userno=" + bookingInfo.customerName + "&pid=" + bookingInfo.selectedCurrentPropertyId + "&orderid=" + bookingInfo.TOrderID;

            Url += "&thname=" + bookingInfo.selectedTheatre + "&movie=" + bookingInfo.selectedMovie;
            //alert(Url);
            Url = "ActBookingProcess.aspx?" + str;
            ProcessActBooking(Url);
            return;

        }

        var putReqinfo = { "putReq": params };

        jQuery_1_7_1.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServerDataForDesktop.asmx/putRequestForBooking",
            data: JSON.stringify(putReqinfo),
            dataType: "json",
            async: true,

            //cache: false,
            beforeSend: function () {

            },
            success: function (putReqResponse) {
                putReqResponseObj = putReqResponse.d;

                nlbStatus(putReqResponseObj.NlbIps);

                BookingResponseObj = putReqResponseObj.BookingResponse;
                var errorInfo = BookingResponseObj.errorInfo;
                var successOrNot = BookingResponseObj.successOrNot;
                var checkBooking = BookingResponseObj.checkBooking;

                if (errorInfo == "") {
                    PutRequestForBookingObj.check(checkBooking.Rcsstr, checkBooking.TotalFileCount, checkBooking.Rtcsserver);
                }
                else {
                    forWhich = "Booking";
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



    this.check = function (Rcsstr, TotalFileCount, Rtcsserver) {

        //   BackAndHomeObj.current = "CheckBookings";

        // showLoading();

        //        var spinner = new Spinner({
        //            lines: 12,
        //            length: 7,
        //            width: 3,
        //            radius: 10,
        //            color: '#336699',
        //            speed: 1,
        //            trail: 60
        //        }).spin(jQuery_1_7_1('#mySpinner')[0]);

        //document.getElementById('msgInProgress2').setAttribute('style', 'display:inline;');

        // Var1 = setTimeout("CheckForRequestStatus('" + Rcsstr + "','" + TotalFileCount + "','" + Rtcsserver + "')", 0);
        CheckForRequestStatus(Rcsstr ,TotalFileCount ,  Rtcsserver );
        //  myTransactionScroll.refresh();

    }


}

function processing() {
    //jQuery_1_7_1find('showProcessNotifcation').show();
    showLoading();
}
function processingEnd() {
    // jQuery_1_7_1find('showProcessNotifcation').hide();
    // jQuery_1_7_1('#msgInProgress2').hide();
    setTimeout(stopLoading, 150);
}


function CheckForRequestStatus(Rcsstr, TotalFileCount, Rtcsserver) {
    //alert("Rtcsserver 2" + Rtcsserver);
    currentTimet = Date();
    var checkBookingInfoV = {};
    checkBookingInfoV.TCSCommunicationNumber = Rcsstr;
    checkBookingInfoV.Rtcsserver = TotalFileCount;
    checkBookingInfoV.FilesCount = Rtcsserver;
    checkBookingInfoV.CurrentTime = currentTimet;
    checkBookingInfoV.MNoValue = LocalPrefObj.MNoValue;

    var StatusUrl = "ShowTranStatus.aspx?TCSCommunicationNumber=" + checkBookingInfoV.TCSCommunicationNumber + "&CurrentTime=" + checkBookingInfoV.CurrentTime + "&Tcscode=" + checkBookingInfoV.TCSCode + "&Cnt=" + checkBookingInfoV.FilesCount;
    var ldata = { "cbi": checkBookingInfoV };

    jQuery_1_7_1.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../../android/Cinegoer/Users/CheckBookingService.asmx/checkBookingInfo",
        data: JSON.stringify(ldata),
        dataType: "json",
        async: true,        
        success: function (data, textStatus) {
            var BookingInfo;

            if (textStatus == "success") {
                if (data.hasOwnProperty('d')) {
                    BookingInfo = data.d;
                } else {
                    BookingInfo = data;
                }

               // processingEnd();
               // process = false;

                if (BookingInfo.exceptionStatus != "exception") {

                    var BookingDetails = BookingInfo.AAllTranData;
                    //window.location.href = StatusUrl;
                    showtranStatus(BookingDetails);
                }
                else {

                    alert('Sorry for inconvenience plz check bookHistory for booking result..!');

                    //                                            var spanTranStatus = document.getElementById('tranStatus');

                    //                                            while (spanTranStatus.firstChild) {
                    //                                                spanTranStatus.removeChild(spanTranStatus.firstChild);
                    //                                            }
                    //                                            spanTranStatus.appendChild(document.createTextNode("Sorry for inconvenience plz check bookHistory for booking result..!"));

                }

            }
        }
    });

}

function showtranStatus(BookingDetails) {
    var TRANSTATUS = dataBetween(BookingDetails, "AAATRANSTATUS=", "ZZZTRANSTATUS");
    var TRANWHYNOT = dataBetween(BookingDetails, "ATRANWHYNOT=", "ZTRANWHYNOT");
   // var RWHYNOTSTRING = dataBetween(BookingDetails, "ARWHYNOTSTRING=", "ZRWHYNOTSTRING");
    //ARWHYNOTSTRING = SUCCESSZRWHYNOTSTRING
    //                            var spanTranStatus = document.getElementById('tranStatus');
    //                            while (spanTranStatus.firstChild) {
    //                                spanTranStatus.removeChild(spanTranStatus.firstChild);
    //                            }
    if (TRANSTATUS == "") {
        alert("check your booking history..!" );
        //                                spanTranStatus.setAttribute('style', 'color:red;');
        //                                spanTranStatus.appendChild(document.createTextNode("check your booking history..!"));
    }
    else if (TRANSTATUS == "BOOKINGDONE") {
        //  alert(TRANSTATUS);
//        alert("TRANWHYNOT" + TRANWHYNOT);
//        alert(RWHYNOTSTRING);
        plotTranDeatails(BookingDetails);

        //                                spanTranStatus.setAttribute('style', 'color:green;font-weight:bold;font-size:24px;');
        //                                spanTranStatus.appendChild(document.createTextNode(TRANSTATUS));

        //                                var tranUl = document.getElementById('tranUl');
        //                                tranUl.setAttribute('style', 'display:block');

        //                                myTransactionScroll.refresh();



    }
    else {
        alert(TRANWHYNOT);
       // alert(RWHYNOTSTRING);
        //                                spanTranStatus.setAttribute('style', 'color:red;');
        //                                spanTranStatus.appendChild(document.createTextNode(TRANSTATUS + " DUE TO " + TRANWHYNOT));
    }

}



function CheckForRequestStatus2(Rcsstr, TotalFileCount, Rtcsserver) {
    //alert("Rtcsserver 2" + Rtcsserver);

    bookingSummary();

    currentTimet = Date();
    var checkBlockingInfoV = {};
    checkBlockingInfoV.TCSCommunicationNumber = Rcsstr;
    checkBlockingInfoV.RTCSServer = Rtcsserver;
    checkBlockingInfoV.FilesCount = TotalFileCount;
    checkBlockingInfoV.CurrentTime = currentTimet;
    checkBlockingInfoV.vMobile = putReqForBlockingObj.VerifiedMobile

    var ldata = { "cbi": checkBlockingInfoV };

    jQuery_1_7_1.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../../android/Cinegoer/Users/CheckBlockingService.asmx/checkBlockingInfo",
        data: JSON.stringify(ldata),
        dataType: "json",
        async: true,
        success: function (data, textStatus) {

            var BlockingInfo;
            if (textStatus == "success") {
                if (data.hasOwnProperty('d')) {
                    BlockingInfo = data.d;
                } else {
                    BlockingInfo = data;
                }

                //processingEnd2();
                //process = false;
                //alert(BlockingInfo.exceptionStatus);

                if (BlockingInfo.exceptionStatus != "exception") {

                    var HTML1 = "";

                    if (BlockingInfo.checking == "BLOCKSEATSDONE") {
                        //alert("here");
                        var BlockingDetails = BlockingInfo.AAllTranData;

                        var blockingReqNo = dataBetweenIg(BlockingDetails, "AAAFileName=", "ZZZFileName");



                        bookingInfo.BlockReqNo = blockingReqNo;
                        //alert(bookingInfo.BlockReqNo + "-- " + Rcsstr);
                        var paymentGetWayUrl = DetailsEnteredForCC(putReqForBlockingObj.MemIDt, putReqForBlockingObj.VerifiedName, putReqForBlockingObj.VerifiedEmail, putReqForBlockingObj.VerifiedMobile);
                        //alert(paymentGetWayUrl);

                        //  DetailsEnteredForCC(putReqForBlockingObj.MemIDt, putReqForBlockingObj.VerifiedName, putReqForBlockingObj.VerifiedEmail, putReqForBlockingObj.VerifiedMobile);
                        document.getElementById('textformBlocking').innerHTML = "";
                        // document.getElementById('textformBlocking').innerHTML += "<span style='color:red'>Blocked Seats successfull...</span>" + "<br>";
                        document.getElementById('textformBlocking').innerHTML += "<span style='color:red' ><a href='" + paymentGetWayUrl + "' style='width:auto;' id='paymentGateWayLink' class='button' target='_blank' onclick='hidePaymentGateWayLink();' >Proceed To Payment</a></span>" + "<br>";

                    }
                    else if (BlockingInfo.checking == "BLOCKSEATSFAIL") {
                        document.getElementById('textformBlocking').innerHTML = "";
                        document.getElementById('textformBlocking').innerHTML += "<br><br><br>";
                        document.getElementById('textformBlocking').innerHTML += "<span style='color:red'>Oops!... Seats of your choice are not available anymore.. please select other seats...</span>";

                        alert("Oops!... Seats of your choice are not available anymore.. please select other seats...");

                        back();
                        //  setTimeout(gotoShowsDiv, 2000);

                    }
                    else {
                        document.getElementById('textformBlocking').innerHTML = "";
                        document.getElementById('textformBlocking').innerHTML += "<br><br><br>";
                        document.getElementById('textformBlocking').innerHTML += "<span style='color:red'>Sorry Plz try again..! </span>";
                        alert("Sorry Plz try again..!");
                        back();
                        //  setTimeout(gotoShowsDiv, 2000);
                    }

                }
                else {
                    //alert('sorry..plz try again');
                    //document.getElementById('bookingButtonDiv').setAttribute('style', 'display:none;');
                    alert('sorry..plz try again');
                    back();
                }
            }
        }
    });

}
function MoveToACTBlockingSummary(Result) {
    var BlockingInfo = {};
    //alert(Result);
    BlockingInfo.checking = Result;
    bookingSummary();
    if (BlockingInfo.checking == "BLOCKSEATSDONE") {
        //alert("here");
       
        //alert(bookingInfo.BlockReqNo);
        var paymentGetWayUrl = DetailsEnteredForCC(putReqForBlockingObj.MemIDt, putReqForBlockingObj.VerifiedName, putReqForBlockingObj.VerifiedEmail, putReqForBlockingObj.VerifiedMobile);

        //alert(paymentGetWayUrl + putReqForBlockingObj.MemIDt+ putReqForBlockingObj.VerifiedName+ putReqForBlockingObj.VerifiedEmail + putReqForBlockingObj.VerifiedMobile);
        //  DetailsEnteredForCC(putReqForBlockingObj.MemIDt, putReqForBlockingObj.VerifiedName, putReqForBlockingObj.VerifiedEmail, putReqForBlockingObj.VerifiedMobile);
        document.getElementById('textformBlocking').innerHTML = "";
        // document.getElementById('textformBlocking').innerHTML += "<span style='color:red'>Blocked Seats successfull...</span>" + "<br>";
        document.getElementById('textformBlocking').innerHTML += "<span style='color:red' ><a href='" + paymentGetWayUrl + "' style='width:auto;' id='paymentGateWayLink' class='button' target='_blank' onclick='hidePaymentGateWayLink();' >Proceed To Payment</a></span>" + "<br>";

    }
    else if (BlockingInfo.checking == "BLOCKSEATSFAIL") {
        document.getElementById('textformBlocking').innerHTML = "";
        document.getElementById('textformBlocking').innerHTML += "<br><br><br>";
        document.getElementById('textformBlocking').innerHTML += "<span style='color:red'>Oops!... Seats of your choice are not available anymore.. please select other seats...</span>";

        alert("Oops!... Seats of your choice are not available anymore.. please select other seats...");

        back();
        //  setTimeout(gotoShowsDiv, 2000);

    }
}

function plotTranDeatails(userData) {
    var User_Id = dataBetweenIg(userData, "AUSERID=", "ZUSERID");
    if (User_Id == "9849004440" || User_Id == "9849039145" || User_Id == "9000609492" ) {
        alert("userData=" + userData);
        document.getElementById("BData").value = userData;
        document.getElementById("BrowserPrint").click();
    }
    //  alert('plotTranscationDeatails');
    //alert(userData);
    
    var ThId = dataBetweenIg(userData, "ATHID=", "ZTHID");
    // UserImage.ImageUrl = "http://202.63.106.71/WebDataForNewSite/getimage.aspx?user_id=" + EncryptData(User_Id);
    var Name = dataBetweenIg(userData, "ACUSTOMERNAME=", "ZCUSTOMERNAME");
    var LThName = dataBetweenIg(userData, "ATHEATRENAME=", "ZTHEATRENAME");

    LThName = LThName.toUpperCase().replace("ACTACT", "");

    var Movieid = dataBetweenIg(userData, "AEMSEQNO=", "ZEMSEQNO");
    //var movieImgSrc="http://202.63.109.110/ctspsonnet/Images/titles/"+Movieid+".jpg";
    var movieImgSrc = "http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/images/" + Movieid + ".jpg";

     var LMv = dataBetweenIg(userData, "ACINEMANAME=", "ZCINEMANAME");
     var Ldt = dataBetweenIg(userData, "ASHOWDATE=", "ZSHOWDATE");
    // alert(userData + " err "+Ldt);
    var showtime = dataBetweenIg(userData, "ASHOWTIME=", "ZSHOWTIME");
    // var LshN = dataBetween(userData, "ASHOWNAME=", "ZSHOWNAME") + "(" + format12(showtime) + ")"; ;
    var LshN = "(" + format12(showtime) + ")";
    var Lshcls = dataBetweenIg(userData, "ACLASSDESC=", "ZCLASSDESC");
    var LNoTic = dataBetweenIg(userData, "ANOTICK=", "ZNOTICK");

    var ticAmt = dataBetweenIg(userData, "ATICKPRICE=", "ZTICKPRICE");
 
 

    // ACLASSDESC=MAHARAJACIRCLEZCLASSDESC

    var EMCHARGE = dataBetweenIg(userData, "AEMCHARGE=", "ZEMCHARGE");

    var EMTOTALCHARGE = bookingInfo.REMTotChg;//  dataBetweenIg(userData, "AEMTOTALCHARGE=", "ZEMTOTALCHARGE");

   // alert("1 EMCHARGE" + EMCHARGE + "EMTOTALCHARGE" + EMTOTALCHARGE);

//    var EMCHARGE = dataBetween(userData, "AEMCHARGE=", "ZEMCHARGE");
//    var EMTOTALCHARGE = dataBetween(userData, "AEMTOTALCHARGE=", "ZEMTOTALCHARGE");

  //  alert("2 EMCHARGE" + EMCHARGE + "EMTOTALCHARGE" + EMTOTALCHARGE);
    var TickIdP1 = dataBetweenIg(userData, "ATicketIdP1=", "ZTicketIdP1");

    //alert(TickIdP1);
    //var Lamt = bookingInfo.TotalPrice;//  caluclateTotalPrice(LNoTic, ticAmt, EMCHARGE, EMTOTALCHARGE);
    var Lamt = dataBetweenIg(userData, "ATRANAMOUNT=", "ATRANAMOUNT=");
    //var Ltrans = LocalPrefObj.userPwd + dataBetweenIg(userData, "ARESNO=", "ZRESNO");
    var Ltrans = TickIdP1 + dataBetweenIg(userData, "ARESNO=", "ZRESNO");

    var city = dataBetweenIg(userData, "ACITYCODE=", "ZCITYCODE");

    var SpTranNo = dataBetweenIg(userData, "ASPTRANNO=", "ZSPTRANNO");

    var bookingDoneFor = dataBetweenIg(userData, "ABOOKINGDONEFOR=", "ZBOOKINGDONEFOR");

    var SubMemberId = dataBetweenIg(userData, "ASUBMEMID=", "ZSUBMEMID");
    
    
    //0010409142115269930011
    var LCity = "";
//    if (city == "1") {
//        LCity = "Hyderabad";
//    }
//    else if (city == "20") {
//        LCity = "Warangal";
//    }
//    else if (city == "4") {
//        LCity = "Kakinada";
//    }
//    else if (city == "5") {
//        LCity = "Rajahmundry";
//    }
//    else if (city == "6") {
//        LCity = "Vijayawada";
    //    }

    LCity = getCookie("citynameCookie");



    var LsysTime = new Date();

    LSeatIndexes = dataBetweenIg(userData, "ASEATNOSTOSHOW=", "ZSEATNOSTOSHOW");



    var url = "PrintCthtrBookingDetails.aspx?ShowDate=" + Ldt + "&ShowTime=" + showtime + "&ThId=" + ThId + "&MemberId=" + User_Id + "&ResNO=" + Ltrans + "&BookingDoneFor=" + bookingDoneFor + "&SubMemberId=" + SubMemberId + "&SpTranNo=" + SpTranNo;

var TranDeatailsInnerHtml=""

//alert(Ltrans);
TranDeatailsInnerHtml+="<div style=' background-color: #82CAFA;font-size: 20px;font-weight:500;color: black;text-align: center;'>";
TranDeatailsInnerHtml+="<table class='table1' align='center'>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml += "<td ><img src=" + movieImgSrc + " alt='' /></td>";
TranDeatailsInnerHtml += "<td class='td1'></td>";
//TranDeatailsInnerHtml+="<td class='td1'><a href="+url+" target='_blank'>Print Your Ticket</a></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>UserName:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='Name' >" + Name + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>TicketId:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='Ltrans' >" + Ltrans + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>Theatre Name:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='LThName' >" + LThName + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>City:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='LCity' >" + LCity + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>MovieName:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='LMv' >" + LMv + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>ShowDate:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='Ldt' >" + Ldt + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>ShowTime:</td>";
TranDeatailsInnerHtml+="<td class='td2'><label id='LshN' >"+LshN+"</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>Class:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='Lshcls' >" + Lshcls + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>No Of Tickets:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='LNoTic' >" + LNoTic + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml+="<td class='td1'>SeatNo:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='LSeatIndexes' >" + LSeatIndexes + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="<tr>";
TranDeatailsInnerHtml += "<td class='td1'>Total Amount:</td>";
TranDeatailsInnerHtml += "<td class='td2'><label id='Lamt' >" + bookingInfo.TotalPrice + "</label></td>";
//TranDeatailsInnerHtml += "<td class='td2'><label id='Lamt' >" + Lamt + "</label></td>";
TranDeatailsInnerHtml+="</tr>";
TranDeatailsInnerHtml+="</table>";
TranDeatailsInnerHtml+="</div>";

 document.getElementById('spareDiv').innerHTML = "";
 document.getElementById('spareDiv').innerHTML = TranDeatailsInnerHtml; //xyz


}

function caluclateTotalPrice(seatCount, price, EMCHARGE, EMTOTALCHARGE) {

  //  alert("seatCount " + seatCount + "price" + price + "EMCHARGE " + EMCHARGE + "EMTOTALCHARGE " + EMTOTALCHARGE);
    var ServicePrice = (parseFloat(seatCount) * parseFloat(EMTOTALCHARGE)) + (parseFloat(seatCount) * parseInt(EMCHARGE));
    var ActualPrice = parseFloat(seatCount) * parseFloat(price);

    TotalPrice = (parseFloat(ServicePrice)) + (parseFloat(ActualPrice));
   // alert(TotalPrice);
    return TotalPrice;
}

function showErrorInfo(errorCode, forWhich) {

    //                            var spanTranStatus = document.getElementById(forWhich);
    //                            while (spanTranStatus.firstChild) {
    //                                spanTranStatus.removeChild(spanTranStatus.firstChild);
    //                            }

    if (errorCode == "0") {
        errorText = 'Your online wallet does not have enough funds to buy these tickets....You need to  recharge your wallet by going to \"My Account\" and clicking \"Add Balance to my wallet\" ';
    }
    else if (errorCode == "1") {
        errorText = "something is wrong..!";
    }
    else if (errorCode == "2") {
        errorText = "file is not created..!";
    }
    else if (errorCode == "6") {
        errorText = "sorry plz reset your AccountDetails and try again...";
    }
    else if (errorCode == "7") {
        errorText = "Sorry for inconvenience plz try again..!";
    }
    else if (errorCode == "8") {
        errorText = "Sorry You can not do Cancellation on ShowDate. ";
    }
    else if (errorCode == "9") {
        errorText = "sorry...Exceeded Max Number Of Tickets for theatre";
    }
    else {
        errorText = errorCode;
    }

    alert(errorText);



//    if (forWhich=="Booking") {
//    document.getElementById('spareDiv').innerHTML = "";
//    document.getElementById('spareDiv').innerHTML = TranDeatailsInnerHtml; //xyz
//    }

    //  spanTranStatus.setAttribute('style', 'color:red;');
    //  spanTranStatus.appendChild(document.createTextNode(errorText));
}