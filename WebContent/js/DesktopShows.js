var ClassesIndexArray = [];
var ShowsArray = [];
var PresentTime = "";
var ShowsStructureObj;

function ShowsStructure() {

    this.currentPropertyId = "";
    this.currentPropertyName = "";
    this.currentPropertyArea = "";
    this.currentThid = "";
    this.currentTheatreName = "";

    this.pShowDateYYYYMMDD = "";
    this.TAShowTime = "";
    this.TAClassNo = "";
    this.TAClassDesc = "";
    this.TATickPrice = "";

    this.TANonAvail = "";
    this.TAMemAvail = "";
    this.TATSPAvail = "";
    this.TAOpenForThtr = "";
    this.TAOpenForEM = "";

    this.TADtshno = "";
    this.TAMemSold = "";
    this.TATSPSold = "";
    this.TATotalEMSold = "";
    this.TATotalTheatreSold = "";
    this.TATotalTickets = "";

    this.TAUpdateTime = "";

    this.setShowInfo = function (currentPropertyId, currentPropertyName,
                                 currentPropertyArea,
                                 currentThid,
                                	currentTheatreName,

                                 pShowDateYYYYMMDD,
                                	TAShowTime,
                                	TAClassNo,
                                	TAClassDesc,
                                	TATickPrice,

                                	TANonAvail,
                                	TAMemAvail,
                                	TATSPAvail,
                                	TAOpenForThtr,
                                	TAOpenForEM,

                                 TADtshno,
                                 	TAMemSold,
                                	TATSPSold,
                                	TATotalEMSold,
                                 TATotalTheatreSold,
                                	TATotalTickets, TAUpdateTime) {

        this.currentPropertyId = currentPropertyId;
        //alert(currentPropertyId);
        this.currentPropertyName = currentPropertyName;
        this.currentPropertyArea = currentPropertyArea;
        this.currentThid = currentThid;
        this.currentTheatreName = currentTheatreName;

        this.pShowDateYYYYMMDD = pShowDateYYYYMMDD;
        this.TAShowTime = TAShowTime;
        this.TAClassNo = TAClassNo;
        this.TAClassDesc = TAClassDesc;
        this.TATickPrice = TATickPrice;

        this.TANonAvail = TANonAvail;
        this.TAMemAvail = TAMemAvail;
        this.TATSPAvail = TATSPAvail;
        this.TAOpenForThtr = TAOpenForThtr;
        this.TAOpenForEM = TAOpenForEM;

        this.TADtshno = TADtshno;
        this.TAMemSold = TAMemSold;
        this.TATSPSold = TATSPSold;
        this.TATotalEMSold = TATotalEMSold;
        this.TATotalTheatreSold = TATotalTheatreSold;
        this.TATotalTickets = TATotalTickets;


        this.TAUpdateTime = TAUpdateTime;

    }


}

var ShowsObj;
var IsLocal = "";
function ShowsJs() {

    this.getShowsForSelectedDate = function (citycode, cityname, movieid, movieName, Did) {


        document.getElementById('showsDiv').innerHTML = "";

        // bookingInfo = new bookingObj();

        var params = {};

        params.citycode = citycode;
        params.cityName = cityname;
        params.emseqno = movieid;
        params.movieName = movieName;
        params.date = Did;
        params.MNoValue = LocalPrefObj.MNoValue;



        //        bookingInfo.selectedCity_id = citycode;
        //        bookingInfo.selectedCity = cityname;
        //        bookingInfo.selectedEmCseqNo = movieid;
        //        bookingInfo.selectedMovie = movieName;
        //        bookingInfo.selectedDate = Did;

        var sinfo = { "si": params };

        jQuery_1_7_1.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServerDataForDesktop.asmx/getShowsForSelectedDate2",
            data: JSON.stringify(sinfo),
            dataType: "json",
            async: true,

            // cache: false,
            beforeSend: function () {

            },
            success: function (showsData) {

                var showsDataObj = showsData.d;
                nlbStatus(showsDataObj.NlbIps);
                var text = showsDataObj.ShowsDataForSelectedDate;

                OtherChargesArray = [];
                OtherChargesArray = showsDataObj.OtherChargesArray;

                InclusiveChargesArray = [];
                InclusiveChargesArray = showsDataObj.InclusiveChargesArray;

                // alert(InclusiveChargesArray);

                if (text.toUpperCase() != "exception".toUpperCase()) {

                    var Result = dataBetween(text, "ARESULT=", "ZRESULT");

                    if (Result == "YES") {
                        showDetailsStaus = "YES";

                        var cityCode = dataBetweenIg(text, "ACITYCODE=", "ZCITYCODE");
                        var emSeqNo = dataBetweenIg(text, "AEMSEQNO=", "ZEMSeqNo");
                        var yyyymmdd = dataBetweenIg(text, "AYYYYMMDD=", "ZYYYYMMDD");
                        var showDateDDMONYY = dataBetweenIg(text, "ASHOWDATEDDMONYY=", "ZSHOWDATEDDMONYY");
                        PresentTime = dataBetweenIg(text, "APresentTime=", "ZPresentTime");
                        IsLocal = dataBetweenIg(text, "ALOCAL=", "ZLOCAL");
                        //alert(PresentTime);
                        //var showdata = dataBetweenIg(text, "AShowsDATA=", "ZShowsDATA");
                        var showdata = dataBetweenIg(text, "AData=", "ZData");


                        if (showdata == "") {

                            document.getElementById('showsDiv').innerHTML = "";
                        }
                        else {
                            var AllTheatreShowDetails = showdata.split("B#B");
                            //alert(AllTheatreShowDetails.length);
                            ClassesArray = [];

                            for (i = 0; i < AllTheatreShowDetails.length; i++) {

                                var showsString = AllTheatreShowDetails[i];
                                //var showStrings = showsString.split(';');
                                var showStrings = showsString.split('A#A');

                                ShowsStructureObj = new ShowsStructure();
                                //ShowsStructureObj.setShowInfo(showStrings[0], showStrings[1], showStrings[2], showStrings[3], showStrings[4], showStrings[5], showStrings[6], showStrings[7], showStrings[8], showStrings[9], showStrings[10], showStrings[11], showStrings[12], showStrings[13], showStrings[14], showStrings[15], showStrings[16], showStrings[17], showStrings[18], showStrings[19], showStrings[20]);
                                if (showStrings.length < 24) {
                                    ShowsStructureObj.setShowInfo(showStrings[0], showStrings[21], showStrings[22], showStrings[1], showStrings[20], yyyymmdd, showStrings[2], showStrings[3], showStrings[4], showStrings[5], showStrings[6], showStrings[7], showStrings[8], showStrings[9], showStrings[10], showStrings[11], showStrings[12], showStrings[13], showStrings[14], showStrings[15], showStrings[16],"");
                                }
                                else {
                                    ShowsStructureObj.setShowInfo(showStrings[0], showStrings[21], showStrings[22], showStrings[1], showStrings[20], yyyymmdd, showStrings[2], showStrings[3], showStrings[4], showStrings[5], showStrings[6], showStrings[7], showStrings[8], showStrings[9], showStrings[10], showStrings[11], showStrings[12], showStrings[13], showStrings[14], showStrings[15], showStrings[16], showStrings[23]);
                                }

                                ClassesArray[i] = ShowsStructureObj;

                            }

                            ShowsObj.showClassArrayData4(citycode, cityname, movieid, movieName, Did);


                        }
                    }
                    else {

                        // alert('Result' + Result + "\n" + "no DateS available");
                        document.getElementById('showsDiv').innerHTML = "<span style='color:red;'>No Shows Available</span>";
                    }

                }
                else {

                    alert('exceptionStatus' + text);
                    document.getElementById('showsDiv').innerHTML = "";
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


    this.showClassArrayData4 = function (citycode, cityname, movieid, movieName, Did) {
        //alert('4');
        var ShowsHTML = "";
        var ClassesHTML = "";

        var PreviousPropertyID = "";
        var PreviousScreenID = "";
        var PreviousShowTimeHHMM = "";
        var firstPropertyId = ""; //tool tip
        var CSSclassName = ""; //tool tip
        var firstPropertyIdCount = 0; //tooltip
        var propertyid; //tooltip

        ClassesIndexArray = [];
        ShowsArray = [];
        var jshows = 0;

        var showCount = 0; //to increase Scroll.
        var showlimit = 4; //toincrease width
        var widthIncr = 0;
        var width = 100;
        var widthStyle = "width:" + (width + widthIncr) + "%;";
        document.getElementById('spareDivScrollDiv').setAttribute('style', widthStyle); //toincrease width

        var showOpenFlag = false;
        var showsOpenArray = [];
        var showsOpenIndex = 0;



        var table, tableBody;

        ShowsHTML += "<div style='width:99%;padding-left:1%;'>";
        var classLinks = "";

        var flag;
        var showTimeId;
        try {
            for (i = 0; i < ClassesArray.length; i++) {


                var ShowsStructure = ClassesArray[i];

                var ClassesIndex = "classesOf" + ShowsStructure.currentThid;

                ClassesIndexArray[i] = ClassesIndex;
                var ISOfNct = ShowsStructure.currentPropertyName.toString().indexOf("on-Computer");

                if (ShowsStructure.currentPropertyId != PreviousPropertyID) {//|| (ISOfNct >= 0 && ShowsStructure.currentThid != PreviousScreenID)) {

                    //plot pertyname area
                    flag = false;
                    showCount = 0;
                    firstPropertyIdCount++;




                    if (ClassesHTML != "") {
                        ShowsHTML += ClassesHTML;
                        ClassesHTML = "";
                    }

                    propertyid = "p" + ShowsStructure.currentThid;

                    if (firstPropertyIdCount == 1) {//hr line;

                    } else {
                        ShowsHTML += "<hr style='color:#C8C8C8'>";
                    }
                    //alert(IsLocal);



                    ClassesHTML = "<div style='clear:both;'></div>";

                    ShowsHTML += "<div id='" + propertyid + "' style='float:left;width:100%;'>";
                    if (IsLocal.toUpperCase() == "Yes".toUpperCase()) {
                        if (ShowsStructure.currentPropertyName.toString().indexOf("on-Computer") >= 0) {
                            ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + "." + ShowsStructure.currentTheatreName + "</span>";

                        }
                        else if (ShowsStructure.currentPropertyName.toString().indexOf("ACTACT") >= 0) {
                            ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + "." + ShowsStructure.currentPropertyName.substr(6) + "</span>";
                            //ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'><span style='color:green;'>" + ShowsStructure.currentPropertyName.substr(6) + "</span></div>";
                        }
                        else {
                            //alert(" s "+ShowsStructure.currentTheatreName);
                            ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + "." + ShowsStructure.currentPropertyName + "</span>";
                        }
                    }
                    else {
                        if (ShowsStructure.currentPropertyName.toString().indexOf("on-Computer") >= 0) {
                            ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + "." + ShowsStructure.currentTheatreName + "</span>";

                        }
                        else if (ShowsStructure.currentPropertyName.toString().indexOf("ACTACT") >= 0) {
                            ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + "." + ShowsStructure.currentPropertyName.substr(6) + "</span>";
                            //ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'><span style='color:black;'>" + ShowsStructure.currentTheatreName.substr(6) + "</span></div>";
                        }
                        else {
                            ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + "." + ShowsStructure.currentPropertyName + "</span>";
                        }
                        // ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + ShowsStructure.currentPropertyName + "</span>";
                    }

                    ShowsHTML += "<span style='color:Green;'> (" + ShowsStructure.currentPropertyArea + " )</span>";
                    PreviousPropertyID = ShowsStructure.currentPropertyId;
                    ShowsHTML += "</div>";

                    if (ShowsStructure.currentThid != PreviousScreenID) {
                        PreviousShowTimeHHMM = ""; //error fixed
                        //plot pertyname area
                        showCount = 0;

                        showOpenFlag = false; //show open or not

                        if (flag) {

                            if (ClassesHTML != "") {
                                ShowsHTML += ClassesHTML;
                                ClassesHTML = "";
                            }

                            ClassesHTML = "<div style='clear:both;'></div>";
                        }
                        else {
                            flag = true;
                            //to increase screen
                        }
                        ShowsHTML += "<div style='float:left;width:15%;'>&nbsp;</div>";

                        if (ShowsStructure.currentTheatreName != ShowsStructure.currentPropertyName) {

                            // {    
                            //alert(ShowsStructure.currentPropertyName.toString().indexOf("on-Computer"));
                            if (ShowsStructure.currentPropertyName.toString().indexOf("on-Computer") >= 0) {
                                ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'>&nbsp;</div>";
                            }
                            else if (ShowsStructure.currentPropertyName.toString().indexOf("ACTACT") >= 0) {
                                //alert("s" + ShowsStructure.currentTheatreName);
                                //ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + "." + ShowsStructure.currentTheatreName.substr(6) + "</span>";
                                ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'><span style='color:black;'>" + ShowsStructure.currentTheatreName.substr(6) + "</span></div>";
                            }
                            else {
                                //alert("e "+ShowsStructure.currentTheatreName);
                                ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'><span style='color:black;'>" + ShowsStructure.currentTheatreName + "</span></div>";
                            }
                            // PreviousScreenID = ShowsStructure.currentThid;
                        }
                        else {
                            //alert(ShowsStructure.currentTheatreName + " - " + ShowsStructure.currentPropertyName);
                            ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'>&nbsp;</div>";
                        }

                        PreviousScreenID = ShowsStructure.currentThid;

                        if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                            //plot Show Time
                            showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;


                            classLinks += "_" + ShowsStructure.TATickPrice;

                            //  if (!showOpenFlag) {

                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            //alert(diff);
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }
                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;
                                //alert(UpadeTime);
                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }


                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow && IsToShow) {
                                showOpenFlag = true;

                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }


                            }

                            // }

                            //  if (showOpenFlag) {
                            ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";

                            PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                            ShowsArray[jshows++] = showTimeId;

                            showCount++;
                        }
                        else {

                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }


                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }


                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }

                            }
                        }


                    }
                    else {

                        if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                            //plot Show Time
                            showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;



                            // ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";

                            // if (!showOpenFlag) {

                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }


                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }


                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }

                            }
                            //  }

                            // if (showOpenFlag) {
                            ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                            // }
                            //  else {
                            //      ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:red'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                            //   }

                            PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                            ShowsArray[jshows++] = showTimeId;

                            showCount++;
                        }
                        else {
                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }


                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }

                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }

                            }
                        }
                    }

                }

                else {              // for same propertyId


                    //
                    PreviousPropertyID = ShowsStructure.currentPropertyId;

                    var SfirstPropertyIdCount = 0;
                    //flag = false;
                    if (ShowsStructure.currentThid != PreviousScreenID && ISOfNct != -1) {
                        firstPropertyIdCount++;
                        //ShowsHTML = "";
                        //alert(ShowsStructure.currentThid);
                        //alert(ClassesHTML);
                        if (ClassesHTML != "") {
                            ShowsHTML += ClassesHTML;
                            ClassesHTML = "";
                        }

                        propertyid = "p" + ShowsStructure.currentThid;

                        if (SfirstPropertyIdCount == 1) {//hr line;

                        } else {
                            ShowsHTML += "<hr style='color:#C8C8C8'>";
                        }
                        PreviousShowTimeHHMM = ""; //error fixed
                        showCount = 0;
                        //alert(ShowsStructure.currentThid);
                        showOpenFlag = false; //show open or not

                        if (flag) {

                            if (ClassesHTML != "") {
                                ShowsHTML += ClassesHTML;
                                ClassesHTML = "";
                            }

                            ClassesHTML = "<div style='clear:both;'></div>";
                        }
                        else {
                            flag = true;

                        }

                        ShowsHTML += "<div id='" + propertyid + "' style='float:left;width:100%;'>";

                        //if (ShowsStructure.currentPropertyName.toString().indexOf("on-Computer") >= 0) {
                        ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + "." + ShowsStructure.currentTheatreName + "</span>";

                        ShowsHTML += "<span style='color:Green;'> (" + ShowsStructure.currentPropertyArea + " )</span>";
                        PreviousPropertyID = ShowsStructure.currentPropertyId;
                        ShowsHTML += "</div>";

                        PreviousScreenID = ShowsStructure.currentThid;

                        if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                            //plot Show Time

                            showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;

                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }


                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }

                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }

                            }
                            ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'>&nbsp;</div>";
                            ShowsHTML += "<div style='float:left;width:15%;'>&nbsp;</div>";
                            ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";



                            PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                            ShowsArray[jshows++] = showTimeId;

                            showCount++;
                        }
                        else {
                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }


                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }

                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }

                            }
                        }

                    }



                    else if (ShowsStructure.currentThid != PreviousScreenID) {

                        PreviousShowTimeHHMM = ""; //error fixed
                        showCount = 0;

                        showOpenFlag = false; //show open or not

                        if (flag) {

                            if (ClassesHTML != "") {
                                ShowsHTML += ClassesHTML;
                                ClassesHTML = "";
                            }

                            ClassesHTML = "<div style='clear:both;'></div>";
                        }
                        else {
                            flag = true;

                        }
                        //alert("n");
                        ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'>&nbsp;</div>";
                        if (ShowsStructure.currentTheatreName != ShowsStructure.currentPropertyName) {
                            //ShowsHTML += "<div style='float:left;width:15%;'><span href='#' style='color:black;'>" + ShowsStructure.currentTheatreName + "</span></div>";
                            if (ShowsStructure.currentPropertyName.toString().indexOf("on-Computer") >= 0) {
                                ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'>&nbsp;</div>";
                            }
                            else if(ShowsStructure.currentPropertyName.toString().indexOf("ACTACT") >= 0){
                                //alert("f "+ShowsStructure.currentTheatreName);
                                ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'><span style='color:black;'>" + ShowsStructure.currentTheatreName.substr(6) + "</span></div>";
                            }
                            else {
                                //alert("f "+ShowsStructure.currentTheatreName);
                                ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'><span style='color:black;'>" + ShowsStructure.currentTheatreName + "</span></div>";
                            }

                        }
                        else {
                            //alert("G "+ShowsStructure.currentTheatreName);
                            ShowsHTML += "<div style='float:left;width:15%;line-height: 30px;'>&nbsp;</div>";
                        }
                        PreviousScreenID = ShowsStructure.currentThid;

                        if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                            //plot Show Time

                            showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;

                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }

                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }

                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }

                            }
                            ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";



                            PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                            ShowsArray[jshows++] = showTimeId;

                            showCount++;
                        }
                        else {
                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }

                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }

                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }

                            }
                        }
                    }
                    else {

                        if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                            //plot Show Time
                            showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;


                            classLinks += "_" + ShowsStructure.TATickPrice;



                            // ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#' style='text-decoration:none'  ><span class='show'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'>" + format12(ShowsStructure.TAShowTime) + "</span></a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";

                            //  if (!showOpenFlag) {
                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }


                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }


                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }

                            }
                            ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";

                            PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                            ShowsArray[jshows++] = showTimeId;

                            showCount++;
                        }
                        else {
                            var IsExpire = true;
                            var YYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
                            var ShDate = new Date(YYYYMMDD.substr(0, 4) + "/" + YYYYMMDD.substr(4, 2) + "/" + YYYYMMDD.substr(6, 8) + " " + ShowsStructure.TAShowTime.substr(0, 2) + ":" + ShowsStructure.TAShowTime.substr(2, 2) + ":00");
                            var ConvertToDate = new Date(PresentTime);
                            var diff = ShDate - ConvertToDate;
                            if (parseInt(diff) > 0) {
                                IsExpire = false;
                            }

                            var ActPropertyName = ShowsStructure.currentPropertyName;
                            var UpadeTime = "";
                            var IsToShow = "";
                            if (ActPropertyName.toUpperCase().indexOf("ACTACT") != -1) {
                                //UpadeTime = ShowsStructure.TAUpdateTime;
                                IsToShow = true;
                            } else {

                                UpadeTime = ShowsStructure.TAUpdateTime;

                                if (UpadeTime != null && UpadeTime != "") {
                                    var seconds = UpadeTime;
                                    if (seconds > 900) {
                                        IsToShow = false;
                                    }
                                    else {
                                        IsToShow = true;
                                    }
                                }
                                else {
                                    IsToShow = true;
                                }

                            }

                            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0 && !IsExpire && IsToShow) {
                                showOpenFlag = true;
                                if (showsOpenArray.indexOf(showTimeId) == -1) {
                                    showsOpenArray[showsOpenIndex++] = showTimeId;
                                }
                            }
                        }

                    }


                }

                /*
                if (showCount > showlimit) {

                widthIncr = widthIncr + 25;
                width = width + widthIncr;

                widthStyle = "width:" + (width) + "%;";

                document.getElementById('spareDivScrollDiv').setAttribute('style', widthStyle);
                showlimit++;
                }
                */

            }

            if (ClassesHTML != "") {
                ShowsHTML += ClassesHTML;
                ClassesHTML = "";
            }

            ShowsHTML += "</div><br><br><br>";


            document.getElementById('showsDiv').innerHTML = "";
            document.getElementById('showsDiv').innerHTML = ShowsHTML;



            for (l = 0; l < ShowsArray.length; l++) {

                if (showsOpenArray.indexOf(ShowsArray[l]) != -1) {

                    document.getElementById(ShowsArray[l]).style.color = "blue";
                }
                else {
                    document.getElementById(ShowsArray[l]).style.color = "#bbbbbb";
                    document.getElementById(ShowsArray[l]).onmouseover = null;
                    document.getElementById(ShowsArray[l]).onmouseout = null;
                    document.getElementById(ShowsArray[l]).onclick = null;
                }
            }
        }
        catch (e)
          { alert(e.Message) }

    }

    /*
    this.showClassArrayData4Backup= function (citycode, cityname, movieid, movieName, Did) {
        //alert('4');
        var ShowsHTML = "";
        var ClassesHTML = "";

        var PreviousPropertyID = "";
        var PreviousScreenID = "";
        var PreviousShowTimeHHMM = "";
        var firstPropertyId = ""; //tool tip
        var CSSclassName = ""; //tool tip
        var firstPropertyIdCount = 0; //tooltip
        var propertyid; //tooltip

        ClassesIndexArray = [];
        ShowsArray = [];
        var jshows = 0;

        var showCount = 0; //to increase Scroll.
        var showlimit = 4; //toincrease width
        var widthIncr = 0;
        var width = 100;
        var widthStyle = "width:" + (width + widthIncr) + "%;";
        document.getElementById('spareDivScrollDiv').setAttribute('style', widthStyle); //toincrease width

        var showOpenFlag = false;
        var showsOpenArray = [];
        var showsOpenIndex = 0;



        var table, tableBody;

        ShowsHTML += "<div style='width:100%;padding-left:5px;'>";
        var classLinks = "";

        var flag;
        var showTimeId;

        for (i = 0; i < ClassesArray.length; i++) {


            var ShowsStructure = ClassesArray[i];

            var ClassesIndex = "classesOf" + ShowsStructure.currentThid;

            ClassesIndexArray[i] = ClassesIndex;

            if (ShowsStructure.currentPropertyId != PreviousPropertyID) {
                //plot pertyname area
                flag = false;
                showCount = 0;
                firstPropertyIdCount++;




                //                if (firstPropertyIdCount <= 4) {//tool tip
                //                    CSSclassName = "span1";
                //                }
                //                else {
                //                    CSSclassName = "span2";
                //                }



                if (ClassesHTML != "") {
                    ShowsHTML += ClassesHTML;
                    ClassesHTML = "";
                }

                propertyid = "p" + ShowsStructure.currentThid;

                if (firstPropertyIdCount == 1) {//hr line;

                } else {
                    ShowsHTML += "<hr style='color:#C8C8C8'>";
                }

                ClassesHTML = "<div style='clear:both;'></div>";
                //                ClassesHTML += "<div id='" + ClassesIndex + "' style='display:none;'>";
                //                ClassesHTML += "<img src='../images/dialogCloseButton.png' style='float:right;position:relative;top:-20px;right:0px;' alt='close' onclick='closeClassesForShowTime();' />";
                //                ClassesHTML += "<div  style='width:100%;height:100%;'>";
                //                ClassesHTML += "<div id='" + ShowsStructure.currentThid + "Classes' align='center' class='TheatreClass'></div> </div></div>";

                ShowsHTML += "<div id='" + propertyid + "' style='float:left;width:35%;'>";

                ShowsHTML += "<span style='font-weight:bold;color:Green;'>" + ShowsStructure.currentPropertyName + "</span>";
                ShowsHTML += "<span> (" + ShowsStructure.currentPropertyArea + " )</span>";
                PreviousPropertyID = ShowsStructure.currentPropertyId;
                ShowsHTML += "</div>";

                if (ShowsStructure.currentThid != PreviousScreenID) {
                    //plot pertyname area
                    showCount = 0;

                    showOpenFlag = false; //show open or not

                    if (flag) {

                        if (ClassesHTML != "") {
                            ShowsHTML += ClassesHTML;
                            ClassesHTML = "";
                        }

                        ClassesHTML = "<div style='clear:both;'></div>";
                        //                        ClassesHTML += "<div id='" + ClassesIndex + "' style='display:none;'>";
                        //                        ClassesHTML += "<img src='../images/dialogCloseButton.png' style='float:right;position:relative;top:-20px;right:0px;' alt='close' onclick='closeClassesForShowTime();' />";
                        //                        ClassesHTML += "<div  style='width:100%;height:100%;'>";
                        //                        ClassesHTML += "<div id='" + ShowsStructure.currentThid + "Classes' align='center' class='TheatreClass' ></div> </div></div>";
                    }
                    else {
                        flag = true;
                        //to increase screen
                    }

                    if (ShowsStructure.currentTheatreName != ShowsStructure.currentPropertyName) {
                        ShowsHTML += "<div style='float:left;width:15%;'><span style='color:black;'>" + ShowsStructure.currentTheatreName + "</span></div>";
                        // PreviousScreenID = ShowsStructure.currentThid;
                    }
                    else {
                        ShowsHTML += "<div style='float:left;width:15%;'>&nbsp;</div>";
                    }

                    PreviousScreenID = ShowsStructure.currentThid;

                    if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                        //plot Show Time
                        showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;


                        classLinks += "_" + ShowsStructure.TATickPrice;

                        //  if (!showOpenFlag) {
                        if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                            showOpenFlag = true;

                            if (showsOpenArray.indexOf(showTimeId) == -1) {
                                showsOpenArray[showsOpenIndex++] = showTimeId;
                            }


                        }
                        // }

                        //  if (showOpenFlag) {
                        ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                        //                        }
                        //                        else {
                        //                            ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:red'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                        //                        }

                        //ShowsHTML += "<div style='float:left;'>&nbsp;&nbsp;<a href='#' style='color:blue;' id=" + showTimeId + " onmouseover='showBalloon(this.id);' onclick='showClassesForShowTime(this.id)'  >" + ShowsStructure.TAShowTime + "</a></div>";
                        PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                        ShowsArray[jshows++] = showTimeId;

                        showCount++;
                    }
                    else {
                        if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                            showOpenFlag = true;
                            if (showsOpenArray.indexOf(showTimeId) == -1) {
                                showsOpenArray[showsOpenIndex++] = showTimeId;
                            }

                        }
                    }

                }
                else {

                    if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                        //plot Show Time
                        showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;



                        // ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";

                        // if (!showOpenFlag) {
                        if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                            showOpenFlag = true;
                            if (showsOpenArray.indexOf(showTimeId) == -1) {
                                showsOpenArray[showsOpenIndex++] = showTimeId;
                            }

                        }
                        //  }

                        // if (showOpenFlag) {
                        ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                        // }
                        //  else {
                        //      ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:red'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                        //   }

                        PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                        ShowsArray[jshows++] = showTimeId;

                        showCount++;
                    }
                    else {
                        if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                            showOpenFlag = true;
                            if (showsOpenArray.indexOf(showTimeId) == -1) {
                                showsOpenArray[showsOpenIndex++] = showTimeId;
                            }

                        }
                    }
                }

            }
            else {



                //                if (firstPropertyIdCount <= 4) {//tool tip
                //                    CSSclassName = "span1";
                //                }
                //                else {
                //                    CSSclassName = "span2";
                //                }

                PreviousPropertyID = ShowsStructure.currentPropertyId;


                if (ShowsStructure.currentThid != PreviousScreenID) {

                    showCount = 0;

                    showOpenFlag = false; //show open or not

                    if (flag) {

                        if (ClassesHTML != "") {
                            ShowsHTML += ClassesHTML;
                            ClassesHTML = "";
                        }

                        ClassesHTML = "<div style='clear:both;'></div>";
                        //                        ClassesHTML += "<div id='" + ClassesIndex + "' style='display:none;'>";
                        //                        ClassesHTML += "<img src='../images/dialogCloseButton.png' style='float:right;position:relative;top:-20px;right:0px;' alt='close' onclick='closeClassesForShowTime();' />";
                        //                        ClassesHTML += "<div  style='width:100%;height:100%;'>";
                        //                        ClassesHTML += "<div id='" + ShowsStructure.currentThid + "Classes' align='center' class='TheatreClass'></div> </div></div>";
                    }
                    else {
                        flag = true;

                    }

                    ShowsHTML += "<div style='float:left;width:35%;'>&nbsp;</div>";
                    if (ShowsStructure.currentTheatreName != ShowsStructure.currentPropertyName) {
                        ShowsHTML += "<div style='float:left;width:15%;'><span href='#' style='color:black;'>" + ShowsStructure.currentTheatreName + "</span></div>";

                    }
                    else {
                        ShowsHTML += "<div style='float:left;width:15%;'>&nbsp;</div>";
                    }
                    PreviousScreenID = ShowsStructure.currentThid;

                    if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                        //plot Show Time

                        showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;



                        // ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#' class='show'   id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";

                        //  if (!showOpenFlag) {
                        if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                            showOpenFlag = true;
                            if (showsOpenArray.indexOf(showTimeId) == -1) {
                                showsOpenArray[showsOpenIndex++] = showTimeId;
                            }

                        }
                        // }

                        // if (showOpenFlag) {
                        ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                        //  }
                        //  else {
                        //      ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:red'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                        //  }


                        PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                        ShowsArray[jshows++] = showTimeId;

                        showCount++;
                    }
                    else {
                        if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                            showOpenFlag = true;
                            if (showsOpenArray.indexOf(showTimeId) == -1) {
                                showsOpenArray[showsOpenIndex++] = showTimeId;
                            }

                        }
                    }

                }
                else {

                    if (ShowsStructure.TAShowTime != PreviousShowTimeHHMM) {
                        //plot Show Time
                        showTimeId = ShowsStructure.currentThid + "_" + ShowsStructure.TAShowTime;


                        classLinks += "_" + ShowsStructure.TATickPrice;



                        // ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#' style='text-decoration:none'  ><span class='show'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'>" + format12(ShowsStructure.TAShowTime) + "</span></a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";

                        //  if (!showOpenFlag) {
                        if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                            showOpenFlag = true;
                            if (showsOpenArray.indexOf(showTimeId) == -1) {
                                showsOpenArray[showsOpenIndex++] = showTimeId;
                            }

                        }
                        //  }

                        //  if (showOpenFlag) {
                        ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:blue'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                        //  }
                        //  else {
                        //      ShowsHTML += "<div style='float:left;position:relative;' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href='#'  class='show' style='color:red'  id=" + showTimeId + " onmouseout='unshowToolTIp(this.id);' onmouseover='showToolTIp(this.id,\"" + propertyid + "\"); ' onclick='showClassesForShowTime(this.id)'  >" + format12(ShowsStructure.TAShowTime) + "</a></span><div style='display:none'  id='sContent" + showTimeId + "'></div></div>";
                        //  }

                        PreviousShowTimeHHMM = ShowsStructure.TAShowTime;

                        ShowsArray[jshows++] = showTimeId;

                        showCount++;
                    }
                    else {
                        if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                            showOpenFlag = true;
                            if (showsOpenArray.indexOf(showTimeId) == -1) {
                                showsOpenArray[showsOpenIndex++] = showTimeId;
                            }
                        }
                    }

                }

            }

            if (showCount > showlimit) {

                widthIncr = widthIncr + 25;
                width = width + widthIncr;

                widthStyle = "width:" + (width) + "%;";

                document.getElementById('spareDivScrollDiv').setAttribute('style', widthStyle);
                showlimit++;
            }


        }

        if (ClassesHTML != "") {
            ShowsHTML += ClassesHTML;
            ClassesHTML = "";
        }

        ShowsHTML += "</div>";

        table += "</table>";

        document.getElementById('showsDiv').innerHTML = "";
        document.getElementById('showsDiv').innerHTML = ShowsHTML;



        for (l = 0; l < ShowsArray.length; l++) {

            if (showsOpenArray.indexOf(ShowsArray[l]) != -1) {

                document.getElementById(ShowsArray[l]).style.color = "blue";
            }
            else {
                document.getElementById(ShowsArray[l]).style.color = "#bbbbbb";
                document.getElementById(ShowsArray[l]).onmouseover = null;
                document.getElementById(ShowsArray[l]).onmouseout = null;
                document.getElementById(ShowsArray[l]).onclick = null;
            }
        }

    }
    */

    this.ShowClassesAvailability=function (PThID, PShowTimeHHHH) {

        var ClassesForSHowHTML = "";
        var classLinks = "";

        var Classesid = PThID + "Classes";

        for (i = 0; i < ClassesArray.length; i++) {

            var ShowsStructure = ClassesArray[i];

            var citycode = bookingInfo.selectedCity_id;
            var movieid = bookingInfo.selectedEmCseqNo;
            var dtshNo = ShowsStructure.TADtshno;
            var ShowDateYYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
            var ThID = ShowsStructure.currentThid;
            var date = bookingInfo.selectedDate;
            var theatreName = ShowsStructure.currentTheatreName;
            var showtime = ShowsStructure.TAShowTime;
            var price = ShowsStructure.TATickPrice;
            

            if ((ShowsStructure.currentThid == PThID) && (ShowsStructure.TAShowTime == PShowTimeHHHH)) {
                ClassesForSHowHTML += "<div  id='" + ShowsStructure.TADtshno + "' onclick='getSeatingForClass(\"" + citycode + "\",\"" + movieid + "\",\"" + dtshNo + "\",\"" + ShowDateYYYYMMDD + "\",\"" + ThID + "\",\"" + showtime + "\",\"" + price + "\",\"" + theatreName + "\"" + ",\"" + date + "\")' >" + ShowsStructure.TAClassDesc.trim() + "</div>";
            }
        }

        document.getElementById(Classesid).innerHTML = "";
        document.getElementById(Classesid).innerHTML = ClassesForSHowHTML;

    }


    this.ShowClassesAvailabilityOnMouseOver = function (id, PThID, PShowTimeHHHH, elePos) {


        var ClassesForSHowHTML = "";
        var ClassWiseInfo = "";
        var classLinks = "";

        var Classesid = PThID + "Classes";

        var sContentId = "sContent" + id;

        for (i = 0; i < ClassesArray.length; i++) {

            var ShowsStructure = ClassesArray[i];

            var citycode = bookingInfo.selectedCity_id;
            var movieid = bookingInfo.selectedEmCseqNo;
            var dtshNo = ShowsStructure.TADtshno;
            var ShowDateYYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
            var ThID = ShowsStructure.currentThid;
            var date = bookingInfo.selectedDate;
            var theatreName = ShowsStructure.currentTheatreName;
            var showtime = ShowsStructure.TAShowTime;
            var price = ShowsStructure.TATickPrice;



            if ((ShowsStructure.currentThid == PThID) && (ShowsStructure.TAShowTime == PShowTimeHHHH)) {
                // ClassesForSHowHTML += "<span id='m_" + ShowsStructure.TADtshno + "' onclick='getSeatingForClass(\"" + citycode + "\",\"" + movieid + "\",\"" + dtshNo + "\",\"" + ShowDateYYYYMMDD + "\",\"" + ThID + "\",\"" + showtime + "\",\"" + price + "\",\"" + theatreName + "\"" + ",\"" + date + "\")' >" + ShowsStructure.TAClassDesc.trim() + "</span>";



                ClassWiseInfo += "<div id='m_" + ShowsStructure.TADtshno + "' class='column'>";
                ClassWiseInfo += "<div id='price'>Rs." + price + "</div>";
                ClassWiseInfo += "<div id='className'>" + ShowsStructure.TAClassDesc.trim() + "</div>";

                if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {
                    ClassWiseInfo += "<div id='AvlOrNot' style='color:green;'>" + 'Available' + "</div>";
                }
                else {
                    ClassWiseInfo += "<div id='AvlOrNot' style='color:red;'>" + 'Unavailable' + "</div>";
                }
                ClassWiseInfo += "</div>";

                //  ClassesForSHowHTML += "<div class='container' id='m_" + ShowsStructure.TADtshno + "' ><div class='row'>" + ClassWiseInfo + "</div></div>";
            }
        }

        ClassesForSHowHTML += "<div id='container" + sContentId + "' class='container'  ><div class='row'>" + ClassWiseInfo + "</div></div>";
        document.getElementById(sContentId).innerHTML = "";
        document.getElementById(sContentId).innerHTML = ClassesForSHowHTML;

    }

}
function showClassesForShowTime(id) {
   

    for (i = 0; i < ShowsArray.length; i++) {

        if (ShowsArray[i] == id) {

           var time= id.split('_');

           bookingInfo.setShowInfo(time[1], format12(time[1]));

           // document.getElementById(ShowsArray[i]).className = ' ';
           // jQuery_1_7_1('#' + ShowsArray[i]).addClass("showSelection");
            //jQuery_1_7_1('#' + ShowsArray[i]).removeAttr("onmouseout");
           // var sContentId = "sContent" + id;
          //  jQuery_1_7_1("#" + sContentId).css("background-color", "white");
           // jQuery_1_7_1("#" + sContentId).css("color", "black");

        }
        else {

            //document.getElementById(ShowsArray[i]).className = ' ';
           // jQuery_1_7_1('#' + ShowsArray[i]).addClass("show");
        }

    }

   
   
   
   // var sContentId = "#sContent" + id;
   // jQuery_1_7_1(sContentId).hide();
    var Thid_Showtime = id.split('_');
    /*
    var classesOfThid = 'classesOf' + Thid_Showtime[0];

    ShowsObj.ShowClassesAvailability(Thid_Showtime[0], Thid_Showtime[1]);

    for (i = 0; i < ClassesIndexArray.length; i++) {
    if (ClassesIndexArray[i] == classesOfThid) {
    document.getElementById(ClassesIndexArray[i]).setAttribute('style', 'display:block;');
        
    }
    else {
    document.getElementById(ClassesIndexArray[i]).setAttribute('style', 'display:none;');
    }
    }
    */

    showClassesInSeatingDiv(Thid_Showtime[0], Thid_Showtime[1]);


}

var AvailbleClassArray = [];

function showClassesInSeatingDiv(PThID, PShowTimeHHHH) {
    // alert('showClassesInSeatingDiv');

    AvailbleClassArray = [];

    var ClassesForSHowHTML = "";
    var classLinks = "";

    var classesDiv = document.createElement('div');
    classesDiv.setAttribute('style', 'width:auto;margin-bottom:10px;padding-top:5px;padding-bottom:5px;position:relative;background-color:white;');
    var classDiv;


    var Classesid = PThID + "Classes";
    var flag = true;

    for (i = 0; i < ClassesArray.length; i++) {

        var ShowsStructure = ClassesArray[i];

        var tcitycode, tmovieid, tdtshNo, tclassDesc, tShowDateYYYYMMDD, tThID, tshowtime, tprice, ttheatreName, tdate;

        var citycode = bookingInfo.selectedCity_id;
        var movieid = bookingInfo.selectedEmCseqNo;

        var dtshNo = ShowsStructure.TADtshno;
        var classDesc = ShowsStructure.TAClassDesc;
        var ShowDateYYYYMMDD = ShowsStructure.pShowDateYYYYMMDD;
        var ThID = ShowsStructure.currentThid;
        var date = bookingInfo.selectedDate;
        var theatreName = ShowsStructure.currentTheatreName;
        var showtime = ShowsStructure.TAShowTime;
        var price = ShowsStructure.TATickPrice;

        var classid = 'Class' + dtshNo;
        
        if ((ShowsStructure.currentThid == PThID) && (ShowsStructure.TAShowTime == PShowTimeHHHH)) {
            // ClassesForSHowHTML += "<div  id='S_" + ShowsStructure.TADtshno + "' style='background-color:lime;color:black;position:relative;display:block;' onclick='getSeatingForClass(\"" + citycode + "\",\"" + movieid + "\",\"" + dtshNo + "\",\"" + ShowDateYYYYMMDD + "\",\"" + ThID + "\",\"" + showtime + "\",\"" + price + "\",\"" + theatreName + "\"" + ",\"" + date + "\")' >" + ShowsStructure.TAClassDesc.trim() + "</div>";
//xyx


            if (ShowsStructure.TAOpenForEM == "Y" && ShowsStructure.TAMemAvail != 0) {

                if (flag) {
                    tcitycode = citycode;
                    tmovieid = movieid;
                    tdtshNo = dtshNo;
                    tclassDesc = classDesc;
                    tShowDateYYYYMMDD = ShowDateYYYYMMDD;
                    tThID = ThID;
                    tshowtime = showtime;
                    tprice = price;
                    ttheatreName = theatreName;
                    tdate = date;

                    bookingInfo.setTheatreInfo(ShowsStructure.currentPropertyId, ShowsStructure.currentPropertyName, ShowsStructure.currentPropertyArea, ShowsStructure.currentTheatreName, ShowsStructure.currentThid);
                    flag = false;
                }

                AvailbleClassArray.push(classid);

            classDiv = document.createElement('a');
            classDiv.appendChild(document.createTextNode("Rs." + ShowsStructure.TATickPrice.trim() + "( " + ShowsStructure.TAClassDesc.trim() + " )" ));
            classDiv.setAttribute('href', '#');
            classDiv.setAttribute('id', classid);
            classDiv.setAttribute('style', 'text-decoration:none;width:auto;float:left;margin-bottom:5px;padding-left:10px;padding-right:10px;position:relative;color:black;background-color:white;border:1px solid black;border-radius:2px');
            classDiv.setAttribute('onclick', "getSeatingForClass('" + citycode + "','" + movieid + "','" + dtshNo + "','" + classDesc + "','" + ShowDateYYYYMMDD + "','" + ThID + "','" + showtime + "','" + price + "','" + theatreName + "','" + date + "')");
            classesDiv.appendChild(classDiv);

            classDiv = document.createElement('a');
            classDiv.setAttribute('style', 'width:auto;float:left;margin-left:10px;margin-bottom:5px; padding-left:10px;position:relative;');
            classDiv.appendChild(document.createTextNode(""));
        }
        else {
            classDiv = document.createElement('a');
            classDiv.appendChild(document.createTextNode("Rs." + ShowsStructure.TATickPrice.trim() + "( " + ShowsStructure.TAClassDesc.trim() + " )" ));
            classDiv.setAttribute('href', '#');
           // classDiv.setAttribute('id', classid);
            classDiv.setAttribute('style', 'text-decoration:none;width:auto;float:left;margin-bottom:5px;padding-left:10px;padding-right:10px;position:relative;color:black;background-color:#bbbbbb;border:1px solid black;border-radius:2px');
          //  classDiv.setAttribute('onclick', "getSeatingForClass('" + citycode + "','" + movieid + "','" + dtshNo + "','" + classDesc + "','" + ShowDateYYYYMMDD + "','" + ThID + "','" + showtime + "','" + price + "','" + theatreName + "','" + date + "')");
            classesDiv.appendChild(classDiv);

            classDiv = document.createElement('a');
            classDiv.setAttribute('style', 'width:auto;float:left;margin-left:10px;margin-bottom:5px; padding-left:10px;position:relative;');
            classDiv.appendChild(document.createTextNode(""));
        }

        classesDiv.appendChild(classDiv);

        }
    }

    //document.getElementById(Classesid).innerHTML = "";
    //document.getElementById(Classesid).innerHTML = ClassesForSHowHTML;
    //alert(classesDiv);

    document.getElementById('movieNameSpan').innerHTML = "";
    document.getElementById('movieNameSpan').innerHTML = bookingInfo.selectedMovie;


    document.getElementById('movieLanguageSpan').innerHTML = "";
    document.getElementById('movieLanguageSpan').innerHTML = "( "+bookingInfo.selectedMovieLanguage+" )";



    document.getElementById('dateSPan').innerHTML = "";
    document.getElementById('dateSPan').innerHTML = bookingInfo.selectedDate;

    document.getElementById('timeSpan').innerHTML = "";
    document.getElementById('timeSpan').innerHTML = bookingInfo.selectedShowingTime;


    document.getElementById('propertySpan').innerHTML = "";
    if (bookingInfo.selectedCurrentPropertyName.indexOf("ACTACT") >= 0) {
        document.getElementById('propertySpan').innerHTML = bookingInfo.selectedCurrentPropertyName.substr(6);
    }
    else {
        document.getElementById('propertySpan').innerHTML = bookingInfo.selectedCurrentPropertyName;
    }


    document.getElementById('theatreSpan').innerHTML = "";
    if (bookingInfo.selectedTheatre.indexOf("ACTACT") >= 0) {
        document.getElementById('theatreSpan').innerHTML = bookingInfo.selectedTheatre.substr(6);
    }
    else {
        document.getElementById('theatreSpan').innerHTML = bookingInfo.selectedTheatre;
    }

    document.getElementById('propertyAreaSpan').innerHTML = "";
    document.getElementById('propertyAreaSpan').innerHTML = "( "+bookingInfo.selectedCurrentPropertyArea+" )";

    

    document.getElementById('seatingDiv').innerHTML = "";
    document.getElementById('classesInfo').innerHTML = "";
    document.getElementById('classesInfo').appendChild(classesDiv);    
   // document.getElementById('seatingDiv').appendChild(classesDiv);
    // document.getElementById('seatingDiv').innerHTML = ClassesForSHowHTML;
    //document.getElementById('seatingDiv').appendChild(document.createTextNode('test'));
    getSeatingForClass(tcitycode, tmovieid, tdtshNo, tclassDesc, tShowDateYYYYMMDD, tThID, tshowtime, tprice, ttheatreName, tdate);
    showSeatingPopup();

}

function showSelection(id) {

}

function closeClassesForShowTime() {

    for (i = 0; i < ClassesIndexArray.length; i++) {
        document.getElementById(ClassesIndexArray[i]).setAttribute('style', 'display:none;');
    }

}

function unshowToolTIp(id) {
     // alert('unshowToolTIp'+id);

    var sContentId = "#sContent" + id;

    jQuery_1_7_1(sContentId).hide();
   // document.getElementById(sContentId).setAttribute('style','display:none;');
}

function showToolTIp(id,pid) {
    // alert("pid "+pid);
    var sContentId = "#sContent" + id;

//     margin-top:-110px;
    //     margin-left:-120px;

//  margin-bottom:-120px;
//                margin-left:-120px;

    var elePos = jQuery_1_7_1("#"+pid).position().top;

  //  var showelePos = jQuery_1_7_1("#"+id).position().top;

    //$("p").addClass("myClass yourClass");

    var Thid_Showtime = id.split('_');
    ShowsObj.ShowClassesAvailabilityOnMouseOver(id,Thid_Showtime[0], Thid_Showtime[1],elePos);

  //  document.getElementById('testPos').innerHTML = elePos + "-" + showelePos;

    if (elePos <= 300) {
        document.getElementById('sContent'+id).className = ' ';
         jQuery_1_7_1(sContentId).addClass("spanDown");
         //jQuery_1_7_1(sContentId).addClass("span2");

           // margin-bottom:-120px;
             //  margin-left:-120px;

         var cwidth = jQuery_1_7_1(sContentId).width();
         var cheight = jQuery_1_7_1(sContentId).height();

         document.getElementById('sContent' + id).style.marginBottom = "-" + (0) + "px";
         //document.getElementById('sContent' + id).style.marginLeft = +((cwidth * 30 / 100)) + "px";
         document.getElementById('sContent' + id).style.marginLeft = "-" + ((cwidth/3)) + "px";


    }
    else {
        document.getElementById('sContent' + id).className = ' ';
        jQuery_1_7_1(sContentId).addClass("spanUp");

        var cwidth = jQuery_1_7_1(sContentId).width();
        var cheight = jQuery_1_7_1(sContentId).height();

        document.getElementById('sContent' + id).style.marginTop = "-" + (cheight + 35) + "px";
        // document.getElementById('sContent' + id).style.marginLeft = "-" + (cwidth - (cwidth*80/100)) + "px";
        document.getElementById('sContent' + id).style.marginLeft = "-" + (cwidth/3) + "px";



//        var cwidth = jQuery_1_7_1("#container" + sContentId).width();
//        var cheight = jQuery_1_7_1("#container" + sContentId).height();

//        document.getElementById('sContent' + id).style.marginTop = (cheight + 20) + "px";
//        document.getElementById('sContent' + id).style.marginLeft = "-" + (cwidth / 2) + "px";

//        alert(cwidth);
    }


    


    jQuery_1_7_1(sContentId).show();
    //document.getElementById(sContentId).setAttribute('style', 'display:inline;');
}

/*
       .span1 {
      position: absolute;
      width: 100px;
      height: 20px;
      line-height: 20px;
      padding: 10px;
      font-size: 14px;
      text-align: center;
      color: white;
      background: blue;
      
     // color: rgb(113, 157, 171);
     // background: rgb(255, 255, 255);
      border: 4px solid rgb(255, 255, 255);
      border-radius: 5px;
      text-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 1px;
      box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 2px 0px;
}

.span:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 10px;
      border-style: solid;
      border-color: blue transparent transparent transparent;
      top: 44px;
      left: 50px;
}*/
function format12(time) {

    var hh = time.substr(0, 2);
    var m = time.substr(2, 2);

    var dd = "AM";

    hh = (hh.substr(0, 1) == 0) ? hh.substr(1, 1) : hh;

    var h = hh;

    if (h >= 12) {
        h = hh - 12;
        dd = "PM";
    }
    if (h == 0) {
        h = 12;
    }

    return replacement = h + ":" + m + " " + dd;
}