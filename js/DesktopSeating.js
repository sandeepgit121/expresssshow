
var SeatingObj;
var MaxCounter = 60;
var TempResSeatsstringArray = [];
function SeatingJS() {

    this.count = 0;
    this.seatNosWithRow = "";
    this.seats = "";
    this.ChkDtshno = "";

    this.ChkCity = "";
    this.ChkMovieId = "";
    this.ChkClssDesc = "";
    this.ChkShowDate = "";
    this.ChkThid = "";
    this.ChkShowTime = "";
    
    this.ChkPrice = "";
    this.ChkTheatreName = "";
    this.ChkDate = "";

    this.getSeatingForClass = function (citycode, movieid, dtshNo, classDesc, ShowDateYYYYMMDD, ThID, showtime, price, theatreName, date) {

        //alert("sai");
        document.getElementById("BlockTime").innerHTML = "";
        if (SetTimerVar != null) {
            clearInterval(SetTimerVar);
        }

        //alert(ShowDateYYYYMMDD+"-"+ThID);
        var params = {};
        var Propertyname = bookingInfo.selectedCurrentPropertyName;
        var PropertyId = bookingInfo.selectedCurrentPropertyId;
        //var PropertyId = bookingInfo.selectedCurrentPropertyId;
        //alert(Propertyname);
        params.citycode = citycode;
        params.movieid = movieid;
        params.dtshNo = dtshNo;
        params.ShowDateYYYYMMDD = ShowDateYYYYMMDD;
        params.ThID = ThID;
        params.MNoValue = LocalPrefObj.MNoValue;
        params.PPropertyId = PropertyId;
        params.PThtrName = theatreName;

        //        bookingInfo.selectedShowDateYYYYMMDD = ShowDateYYYYMMDD;
        //        bookingInfo.selectedShowtime = showtime;
        //        bookingInfo.selectedSeatPrice = price;
        //        bookingInfo.selectedDateshowNo = dtshNo.toString();
        //        bookingInfo.selectedTheatre = theatreName;
        //        bookingInfo.selectedThiatre_id = ThID;

        bookingInfo.setClassInfo(classDesc, dtshNo, price);
        bookingInfo.setShowDateYYYYMMDDInfo(ShowDateYYYYMMDD);

        SeatTimer = 0;
        var seatinginfo = { "seating": params };

        jQuery_1_7_1.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServerDataForDesktop.asmx/getSeatingData",
            data: JSON.stringify(seatinginfo),
            dataType: "json",
            async: true,

            // cache: false,
            beforeSend: function () {

            },
            success: function (seatsData) {

                SeatingObjForClassTid = seatsData.d;
                nlbStatus(SeatingObjForClassTid.NlbIps);
                var seatingDataObj = SeatingObjForClassTid.seatingData;
                //alert(seatingDataObj);
                //alert(SeatingObjForClassTid.seatingData.cinemaSeqNo);
                if (SeatingObjForClassTid.seatingData.prefstring != "") {
                    FillTempResSeats();
                    SeatingObj.plotSeatingForClass();
                }
                else {
                    alert("....oops some thing went wrong");
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

    function FillTempResSeats() {
        var TempClassSeatsStringArray = SeatingObjForClassTid.seatingData.Statusstring;
        for (var i = 0; i < TempClassSeatsStringArray.length; i++) {
            TempResSeatsstringArray[i] = "0";
        }

        var TempResSeats = SeatingObjForClassTid.seatingData.AllTempRes;
        var SplitAllSeats = TempResSeats.split(',');
        for (var k = 0; k < SplitAllSeats.length; k++) {
            TempResSeatsstringArray[SplitAllSeats[k]] = "1";
        }
        //alert(TempResSeatsstringArray);
        
    }


    this.plotSeatingForClass = function () { //validation requaired         


        //  document.getElementById('showsDiv').innerHTML = ''; //ccc           
        document.getElementById("LOtherCharges").innerHTML = "";
        var TempLayoutString = SeatingObjForClassTid.seatingData.plotstring;
        var TempLayoutStringForCheckingSeatsCount = TempLayoutString.replace(/[^0 ]/g, "").length;

        var TempClassSeatsStringArray = SeatingObjForClassTid.seatingData.Statusstring;
        var TempClassOp1Array = SeatingObjForClassTid.seatingData.Op1string;

        var TempClassPrefStringArray = SeatingObjForClassTid.seatingData.prefstring;
        var TempClassFnfStringArray = SeatingObjForClassTid.seatingData.fnfstring;
        var TempClassCaptionStringArray = SeatingObjForClassTid.seatingData.captionstring.split(',');
        var OtherCharges = SeatingObjForClassTid.seatingData.ExtraCharges;
        //alert(OtherCharges);
        OtherChargesArray = [];
        OtherChargesArray = SeatingObjForClassTid.seatingData.AllExtraCharges;
        //alert(OtherChargesArray.toString());
        //var elm = document.querySelector('[id$="LOtherCharges"]');
        //elm.innerHTML = OtherCharges;
        CurrentClassSelectedSeatsArray = [];
        CurrentClassSeatsCaptionArray = [];

        CurrentClassSeatsCaptionArray = TempClassCaptionStringArray;


        var startIndex = 0;

        var rowname = "";
        var seatno = 0;

        var seatingTableDiv = document.createElement('div');

        var seatingTable = document.createElement('table');
        seatingTable.setAttribute('style', 'border: none;padding: 0; margin: 0;');

        var seatingTableBody = document.createElement('tbody');

        var row, cell;

        var startingRow = true;
        var seatNo = 0;


        var CurrentTempResChar;

        do {
            CurrentLayoutChar = null;
            CurrentLayoutChar = TempLayoutString.charAt(startIndex);

            if (CurrentLayoutChar == 'N') {

                if (startingRow) {

                    row = document.createElement('tr');
                    startingRow = false;
                }
                else {

                    seatingTableBody.appendChild(row);
                    row = document.createElement('tr');
                }

            }
            else if (CurrentLayoutChar == '$') {
                CurrentLayoutChar = TempLayoutString.charAt(++startIndex);
                seatno = 0; ////
                cell = document.createElement('td');
                cell.setAttribute('style', 'height:21px;width:20px;background-color:black;color:white;');
                cell.appendChild(document.createTextNode(CurrentLayoutChar));
                rowname = CurrentLayoutChar;
                row.appendChild(cell);
                startIndex++; //$

            }
            else if (CurrentLayoutChar == '0') {

                sno = seatNo++;
                var seatID = 'seatNo' + sno;
                CurrentSeatsStringChar = TempClassSeatsStringArray[sno];
                CurrentOp1StringChar = TempClassOp1Array[sno];
                CurrentClassSelectedSeatsArray[sno] = "0";
                CurrentTempResChar = TempResSeatsstringArray[sno];
                var testseatNO = rowname + ++seatno + "," + sno;

                if (CurrentLayoutChar == CurrentSeatsStringChar) {

                    cell = document.createElement('td');
                    cell.setAttribute('style', 'height:21px;width:20px;');
                    var seatImg = document.createElement('img');
                    seatImg.setAttribute('id', seatID);
                    // jQuery_1_7_1(document).off("tap", "#" + seatID);
                    seatImg.setAttribute('src', '../images/seat-otherarea4.gif');
                    seatImg.setAttribute('alt', 'graySeat');
                    seatImg.setAttribute('style', 'height:21px;width:20px;');
                    //seatImg.setAttribute('title', CurrentClassSeatsCaptionArray[sno]);
                    cell.appendChild(seatImg);
                    row.appendChild(cell);

                }
                else {

                    if ((CurrentSeatsStringChar == "L" || CurrentSeatsStringChar == "H" || CurrentSeatsStringChar == "4" || CurrentSeatsStringChar == "D") && (CurrentTempResChar == "0")) {
                        if (CurrentOp1StringChar == "L" || CurrentOp1StringChar == "H" || CurrentOp1StringChar == "4" || CurrentOp1StringChar == "D") {
                            //blocking tickets pending...
                            cell = document.createElement('td');
                            cell.setAttribute('style', 'height:21px;width:20px;');
                            var seatImg = document.createElement('img');
                            seatImg.setAttribute('id', seatID);
                            seatImg.setAttribute('src', '../images/seat-available3.gif');
                            seatImg.setAttribute('alt', 'WhiteSeat');
                            seatImg.setAttribute('style', 'height:21px;width:20px;');
                            // seatImg.setAttribute('title', CurrentClassSeatsCaptionArray[sno]);
                            seatImg.setAttribute('onclick', "selectSeat(" + sno + ")");
                        }
                        else {
                            cell = document.createElement('td');
                            cell.setAttribute('style', 'height:21px;width:20px;');
                            var seatImg = document.createElement('img');
                            seatImg.setAttribute('id', seatID);
                            //  jQuery_1_7_1(document).off("tap", "#" + seatID);
                            seatImg.setAttribute('src', '../images/seat-otherarea4.gif');
                            seatImg.setAttribute('alt', 'graySeat');
                            seatImg.setAttribute('style', 'height:21px;width:20px;');
                            // seatImg.setAttribute('title', CurrentClassSeatsCaptionArray[sno]);                           
                        }

                    }
                    else if ((CurrentSeatsStringChar == "L" || CurrentSeatsStringChar == "H" || CurrentSeatsStringChar == "4" || CurrentSeatsStringChar == "D") && (CurrentTempResChar == "1")) {
                        cell = document.createElement('td');
                        cell.setAttribute('style', 'height:21px;width:20px;');
                        var seatImg = document.createElement('img');
                        seatImg.setAttribute('id', seatID);
                        // jQuery_1_7_1(document).off("tap", "#" + seatID);
                        seatImg.setAttribute('src', '../images/GraySeatNew.gif');
                        seatImg.setAttribute('alt', 'graySeat');
                        seatImg.setAttribute('style', 'height:21px;width:20px;');
                    }
                    else {
                        cell = document.createElement('td');
                        cell.setAttribute('style', 'height:21px;width:20px;');
                        var seatImg = document.createElement('img');
                        seatImg.setAttribute('id', seatID);
                        // jQuery_1_7_1(document).off("tap", "#" + seatID);
                        seatImg.setAttribute('src', '../images/seat-otherarea4.gif');
                        seatImg.setAttribute('alt', 'graySeat');
                        seatImg.setAttribute('style', 'height:21px;width:20px;');
                        // seatImg.setAttribute('title', CurrentClassSeatsCaptionArray[sno]);                        
                    }

                    cell.appendChild(seatImg);
                    row.appendChild(cell);
                }

            }
            else if (CurrentLayoutChar == 'S') {//space
                cell = document.createElement('td');
                var spaceImg = document.createElement('img');
                spaceImg.setAttribute('src', '');
                spaceImg.setAttribute('alt', 'space');
                spaceImg.setAttribute('style', 'height:5px;width:5px;visibility:hidden;');

                cell.appendChild(spaceImg);
                row.appendChild(cell);
            }
            else if (CurrentLayoutChar == 'E') {//empty

                seatingTableBody.appendChild(row);

                row = document.createElement('tr');
                row.setAttribute('height', '5px');
                seatingTableBody.appendChild(row);
            }
            else {

            }

            startIndex++;

        } while (TempLayoutString.length > startIndex);

        seatingTableBody.appendChild(row);
        seatingTable.appendChild(seatingTableBody);
        seatingTableDiv.appendChild(seatingTable);


        var SpareDivInnerHTML = "";

        SpareDivInnerHTML += "<div id='InformationDiv' style=' background-color:Gray;color:White;width:100%; height:40px;'>&nbsp;</div>";
        SpareDivInnerHTML += "<div id='spareDivWrapperDiv' style='padding-top:5px; width:100%; height:450px;overflow:scroll;' >";
        SpareDivInnerHTML += "<div id='spareDivScrollDiv' style='width:100%;'>";
        SpareDivInnerHTML += "<div id='showsDiv' align='left'>";
        // SpareDivInnerHTML += ShowsHTML;
        SpareDivInnerHTML += "</div>";
        SpareDivInnerHTML += "</div>";
        SpareDivInnerHTML += "</div>";

        //  document.getElementById('spareDiv').innerHTML = "";
        // document.getElementById('spareDiv').innerHTML = SpareDivInnerHTML; //xyz


        var InfoHtml = "";
        InfoHtml += "<div >";
        InfoHtml += "<div id='seatingInfo' style='padding-top:5px;width:50%;float:left;'>";
        InfoHtml += "</div>";
        InfoHtml += "<div id='proceedButtonDiv' style='padding-top:5px;width:50%;float:left;'>";

        InfoHtml += "<input id='proceedButton'  type='button' value='Proceed' onclick='GoToBooking();'/>";
        InfoHtml += "</div>";
        InfoHtml += "<div>";

        //  document.getElementById('InformationDiv').innerHTML = ""
        // document.getElementById('InformationDiv').innerHTML = InfoHtml;



        document.getElementById('seatingDiv').innerHTML = "";
        document.getElementById('seatingDiv').appendChild(seatingTableDiv);
        //alert(OtherCharges);
        if (OtherCharges != "") {

            var splitExtraCharges = OtherCharges.split("$#$");
            var DetailsOfOtherCharges = "";
            for (var i = 0; i < splitExtraCharges.length; i++) {
                if (splitExtraCharges != "") {

                    var ExtraChargeDesc = splitExtraCharges[i].split("#")[1];
                    var ExtraChargeAmt = splitExtraCharges[i].split("#")[0];
                    var ExtraChargetype = splitExtraCharges[i].split("#")[2];
                    var ExtraChargesMatch = splitExtraCharges[i].split("#")[3];
                    //DetailsOfOtherCharges += "This Class Contains" + ExtraChargeDesc + " Of Rs." + ExtraChargeAmt + " " + ExtraChargetype;
                    //DetailsOfOtherCharges += "<lable >Class  Contains " + ExtraChargeDesc + " Of Rs. " + ExtraChargeAmt + "  " + ExtraChargetype + "--" + ExtraChargesMatch + " <\lable></br>";
                    //DetailsOfOtherCharges += "<span >Class  Contains </span><span style='font-weight:bold;font-style:italic;font-size:large;color:black;'>" + ExtraChargeDesc + " </span><span> Of Rs. " + ExtraChargeAmt + "  " + ExtraChargetype + "--" + ExtraChargesMatch + " </span></br>";
                    DetailsOfOtherCharges += "<span >Class  Contains </span><span style='font-weight:bold;font-style:italic;font-size:large;color:black;'>" + ExtraChargeDesc + " </span><span> Of Rs." + ExtraChargeAmt + "  " + ExtraChargetype + " </span></br>";

                }


            }



            document.getElementById("LOtherCharges").innerHTML = DetailsOfOtherCharges;
        }
        showSeatingPopup();
        ShowTimerCounter();


        // document.getElementById('showsDiv').appendChild(seatingTableDiv);

    }
}
var DivLoadTime;
var SeatTimer = 0;
var SetTimerVar;
function ShowTimerCounter() {
    
    DivLoadTime = new Date();
    SetTimerVar = setInterval(GetLatestTime, 1000);
}
function GetLatestTime() {
    var PTime = new Date();
    var ShortTime = PTime - DivLoadTime;
    var msec = ShortTime;
    var ss = Math.floor(msec / 1000);
    var ShortDate = DivLoadTime.toTimeString();
    
    if (SeatingObj.count > 0) {
        SeatTimer = SeatTimer + 1;

    }
    //document.getElementById("BlockTime").innerHTML = ShortDate + "D " + ss + "Timer" + SeatTimer;
    //alert(parseInt(MaxCounter)+" -"+ parseInt(SeatTimer));
    MaxCounter = parseInt(60) - parseInt(SeatTimer);
    if (document.getElementById("BookingTimerDiv") != null) {
        document.getElementById("BookingTimerDiv").innerHTML = MaxCounter +" Sec";
        if (MaxCounter <= 0) {
            clearInterval(SetTimerVar);
            back();
        }
    }
    //BookingTimerDiv
}

function getSeatingForClass(citycode, movieid, dtshNo, ShowDateYYYYMMDD, ThID, showtime, price, theatreName, date) {

    ChkDtshno = dtshNo;

    ChkCity = citycode;
    ChkMovieId = movieid;
    //ChkClssDesc = classDesc;
    ChkShowDate = ShowDateYYYYMMDD;
    ChkThid = ThID;
    ChkShowTime = showtime

    ChkPrice = price;
    ChkTheatreName = theatreName;
    ChkDate = date;
    for (var i = 0;i< AvailbleClassArray.length; i++) {

        if (AvailbleClassArray[i] == 'Class' + dtshNo) {
          
            document.getElementById(AvailbleClassArray[i]).setAttribute('style', 'text-decoration:none;width:auto;float:left;margin-bottom:5px;padding-left:10px;padding-right:10px;position:relative;color:white;background-color:Green;border:1px solid black;border-radius:2px');
        }
        else {
         
            document.getElementById(AvailbleClassArray[i]).setAttribute('style', 'text-decoration:none;width:auto;float:left;margin-bottom:5px;padding-left:10px;padding-right:10px;position:relative;color:black;background-color:white;border:1px solid black;border-radius:2px');
        }

    }
    ChkDate = date;
    //alert(ShowDateYYYYMMDD + " - " + ThID);
    SeatingObj = new SeatingJS(citycode, movieid, dtshNo, ShowDateYYYYMMDD, ThID, showtime, price, theatreName, date);
    SeatingObj.getSeatingForClass(citycode, movieid, dtshNo, ShowDateYYYYMMDD, ThID, showtime, price, theatreName, date);
}




function selectSeat(sindex) {

var BlockTime = false;
 cnt = SeatingObj.count;
    if (BlockTime == true) {

        //alert(this.ChkDtshno);
        if (CurrentClassSelectedSeatsArray[sindex] == "1") {
            CurrentClassSelectedSeatsArray[sindex] = "0";
            document.getElementById("seatNo" + sindex).setAttribute('src', '../images/seat-available3.gif');
            DisplaySelectedSeats();
        }
        else {
            if (cnt < 6) {
                CheckIsReserved(sindex);
            }
            else {
                alert('!..sorry you can only select maximum 6 seats');
            }
        }

        
    }
    else {
        cnt = SeatingObj.count;

        if (CurrentClassSelectedSeatsArray[sindex] == "1") {
            CurrentClassSelectedSeatsArray[sindex] = "0";
            document.getElementById("seatNo" + sindex).setAttribute('src', '../images/seat-available3.gif');

        }
        else {
            if (cnt < 6) {
                CurrentClassSelectedSeatsArray[sindex] = "1";
                document.getElementById("seatNo" + sindex).setAttribute('src', '../images/seat-curentbook2.gif');

            }
            else {
                alert('!..sorry you can only select maximum 6 seats');
            }
        }
        DisplaySelectedSeats();
    }
    //DisplaySelectedSeats();

}


function CheckIsReserved(ChkseatIndex) {

    ChkDtshno = this.ChkDtshno;
    var params = {};
   
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
        async: true,

        // cache: false,
        beforeSend: function () {

        },
        success: function (seatsData) {

            SeatingObjForClassSId = seatsData.d;
            //nlbStatus(SeatingObjForClassTid.NlbIps);
            var seatingDataObj = SeatingObjForClassSId.result;
            //alert(seatingDataObj.result);
            if (seatingDataObj.result == "yes") {
                //SeatingObj.plotSeatingForClass();
                CurrentClassSelectedSeatsArray[ChkseatIndex] = "1";
                //alert(CurrentClassSelectedSeatsArray);
                document.getElementById("seatNo" + ChkseatIndex).setAttribute('src', '../images/seat-curentbook2.gif');
                DisplaySelectedSeats();
            }
            else {
                //alert(ChkCity + "," + ChkMovieId + "," + ChkDtshno + "," + ChkShowDate + "," + ChkThid + "," + ChkShowTime + "," + ChkPrice + "," + ChkTheatreName + "," + ChkDate);
                getSeatingForClass(ChkCity, ChkMovieId, ChkDtshno, ChkShowDate, ChkThid, ChkShowTime, ChkPrice, ChkTheatreName, ChkDate)
                //getSeatingForClass(citycode, movieid, dtshNo, ShowDateYYYYMMDD, ThID, showtime, price, theatreName, date) 
                alert("....oops some thing went wrong");
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


function DisplaySelectedSeats() {

    var selectedSeatsArray = [];
    var seatsIndexArray = [];
    var j = 0;
    //alert(CurrentClassSelectedSeatsArray);
    for (var i = 0; i <= CurrentClassSelectedSeatsArray.length; i++) {

        if (CurrentClassSelectedSeatsArray[i] == "1") {
            selectedSeatsArray[j] = CurrentClassSeatsCaptionArray[i];
            var seatindex = i;
            //alert(seatindex);
            seatsIndexArray[j] = seatindex + 1; // seats to booking [actual indexes]
            j++;
        }

    }

    document.getElementById('seatingInfo').innerHTML = "";
    document.getElementById('seatingInfo').innerHTML = selectedSeatsArray;

   SeatingObj.count = selectedSeatsArray.length;
   SeatingObj.seatNosWithRow = selectedSeatsArray.toString();
   SeatingObj.seats = seatsIndexArray.toString();

}