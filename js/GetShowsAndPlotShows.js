var GetShowsAndPlotShowsObj;

    //for selection purpose Begin.
    var PropertyThtrIndexArray = [];
    var TheatreIdIndexArray = [];
    var singleTheatreArray = [];
    var ShowidsArray = [];
    var ShowOpenCheckAndTickAvil = [];
    var DtshNoArray = [];
    var ShowOpenCheckAndTickAvil = [];
    var ClassesDivIdArray = [];
    
  
    //for selection purpose End.

    var PropertyObjsForMovie;

//begin...
    function GetShowsAndPlotShows() {
        this.presentShowSelectionid;
        this.presentClassesSelectionid = "";


        this.getShowsForSelectedDate = function (citycode, cityname, movieid, movieName, Did) {
        
            //  showsDiv.innerHTML = "";

            var params = {};

            params.citycode = citycode;
            params.cityName = cityname;
            params.emseqno = movieid;
            params.movieName = movieName;
            params.date = Did;
            alert("test-test" + citycode + "," + cityname + "," + movieid + "," + movieName + "," + Did);
            var sinfo = { "si": params };

            jQuery_1_7_1.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "ServerDataForDesktop.asmx/getShowsForSelectedDate",
                data: JSON.stringify(sinfo),
                dataType: "json",
                async: true,
                // cache: false,
                beforeSend: function () {

                },
                success: function (showsData) {

                    PropertyObjsForMovie = showsData.d;
                   
                   // nlbStatus(PropertyObjsForMovie.NlbIps);

                    var ShowsDataForSelectedDateObj = PropertyObjsForMovie.ShowsDataForSelectedDate;


                    if (ShowsDataForSelectedDateObj.exceptionStatus != "exception") {
                        if (ShowsDataForSelectedDateObj.result == "YES") {
                           // dateSelection(Did);
                            GetShowsAndPlotShowsObj.plotShowsForDate(citycode, cityname, movieid, movieName, Did);
                        }
                        else if (ShowsDataForSelectedDateObj.result == "ShowsDATAisEmpty") {
                            alert("No Shows for Selected Date..!");

                            GetShowsAndPlotShowsObj.getShowsForNextDate(citycode, cityname, movieid, movieName, movieLanguage, movieStarCast, Did);

                        }
                        else if (ShowsDataForSelectedDateObj.result == "NO") {

                            GetShowsAndPlotShowsObj.getShowsForNextDate(citycode, cityname, movieid, movieName, movieLanguage, movieStarCast, Did);

                        }
                        else {
                            alert("No Shows for Selected Movie..!");
                        }
                    }
                    else {
                        alert("Sorry for inconvenience plz try again..!");
                    }

                },
                error: function (statusCode, errorThrown) {
                    if (statusCode.status == 0) {                       
                        showAndroidToast("you're offline");
                    }
                },
                complete: function (transport) {               
                    myShowsScroll.refresh();
                    myShowsScroll.scrollTo(0, -0);
                }
            });
        }

    this.testShowsDataForSelectedDate = function (ShowsDataForSelectedDateObj) {
                                      
                                            var flag = false;
                                            if (ShowsDataForSelectedDateObj.exceptionStatus != "exception") {
                                                if (ShowsDataForSelectedDateObj.result == "YES") {
                                                    flag = true;
                                                }
                                                else if (ShowsDataForSelectedDateObj.result == "ShowsDATAisEmpty") {
                                                    alert("No Shows for Selected Movie..!");
                                                    flag = false;
                                                }
                                                else if (ShowsDataForSelectedDateObj.result == "NO") {
                                                   // alert("No Theatres for Selected Movie..!");
                                                    flag = false;
                                                }
                                                else {
                                                  //  alert("No Shows for Selected Movie..!");
                                                    flag = false;
                                                }
                                            }
                                            else {
                                                alert("Sorry for inconvenience plz try again..!");
                                                flag = false;
                                            }
                                            return flag;
                                        }


                                        this.plotShowsForDate = function (citycode, cityname, movieid, movieName, Did) {

                                            var cityCode = PropertyObjsForMovie.RcityCode;
                                            var cityName = PropertyObjsForMovie.RcityName;
                                            var empseqNo = PropertyObjsForMovie.RemseqNo;
                                            var movieName = PropertyObjsForMovie.RmovieName;
                                            var movieLanguage = PropertyObjsForMovie.RmovieLanguage;
                                            var movieStarCast = PropertyObjsForMovie.RmovieStarCast;
                                            var date = PropertyObjsForMovie.Rdate;

                                            showsDiv.innerHTML = "";

                                            var PropertyInfoArray = PropertyObjsForMovie.ShowsDataForSelectedDate.RPropertyInfoArray;
                                           

                                            var PropertyGroupUL = document.createElement('ul'); //change
                                            PropertyGroupUL.setAttribute('style', 'display:inline-block;');
                                         
                                            PropertyThtrIndexArray = [];
                                            var PTindex = 0;
                                            TheatreIdIndexArray = [];
                                            var ThtrIndex = 0;
                                            singleTheatreArray = [];
                                            var singleThtrIndex = 0;
                                            ShowidsArray = []; //ploting time should be null
                                            var showIndex = 0;
                                            var ShowOpenIndex = 0;
                                            ShowOpenCheckAndTickAvil = [];
                                            DtshNoArray = []; //ploting time should be null
                                            var dtshIndex = 0;
                                            ClassesDivIdArray = [];
                                            var classIndex = 0;
                                            var TickAvilIndex = 0;
                                            DtshNoOpenCheckAndTickAvil = [];

                                            var pColorFlag = true;
                                            var tColorFlag = true;

                                            for (var p = 0; p < PropertyInfoArray.length; p++) {

                                                var Property = PropertyInfoArray[p];
                                                var PropertyDetailsWithTheatres = Property.split('*$');
                                                var PropertyDetails = PropertyDetailsWithTheatres[0].split(',');

                                                var currentPropertyId = PropertyDetails[0];
                                                var currentPropertyName = PropertyDetails[1];
                                                var currentPropertyArea = PropertyDetails[2];

                                                var PropId = 'p' + currentPropertyId;
                                                var pColorLi;
                                                var tColorLi;

                                                if (pColorFlag) {
                                                    pColorFlag = false;
                                                    pColorLi = 'background-color:#DAFFCB;';
                                                    tColorLi = 'background-color:white;';
                                                }
                                                else {
                                                    pColorFlag = true;
                                                    pColorLi = 'background-color:#DAFFCB;';
                                                    tColorLi = 'background-color:white;';
                                                }

                                                var pnameli = document.createElement('li');
                                                pnameli.setAttribute('id', 'li_' + PTindex);
                                                pnameli.setAttribute('style', pColorLi);

                                                PropertyThtrIndexArray[PTindex++] = PropId;

                                                var PropNAmeheading = document.createElement('div');
                                                PropNAmeheading.setAttribute('style', 'display:table;font-size:20px;');

                                                var PNameSpan = document.createElement('div');
                                                PNameSpan.setAttribute('style', ' font-family: PT Sans Narrow, sans-serif;display:inline-block;font-size:20px;font-weight:bold;color:#00145D;');
                                                PNameSpan.appendChild(document.createTextNode(currentPropertyName));

                                                var PropAreaNameSpan = document.createElement('span');
                                                PropAreaNameSpan.setAttribute('style', '  font-family:PT Sans Narrow, sans-serif;display:inline-block;font-size:15px;font-weight:normal;color:black;');
                                                PropAreaNameSpan.appendChild(document.createTextNode("(" + currentPropertyArea + ")"));


                                                PropNAmeheading.appendChild(PNameSpan);
                                                PropNAmeheading.appendChild(PropAreaNameSpan);


                                                pnameli.appendChild(PropNAmeheading);

                                                PropertyGroupUL.appendChild(pnameli);


                                                var TheatreInfoArray = PropertyDetailsWithTheatres[1].split('#*');

                                                for (var i = 0; i < TheatreInfoArray.length; i++) {

                                                    var Theatre = TheatreInfoArray[i];
                                                    var TheatreDetailsWithShows = Theatre.split('$#');
                                                    var TheatreDetails = TheatreDetailsWithShows[0].split(',');

                                                 
                                                    var currentThid = TheatreDetails[3];
                                                    TheatreIdIndexArray[ThtrIndex++] = currentThid;
                                                    PropertyThtrIndexArray[PTindex] = currentThid;
                                                    var currentTheatreName = TheatreDetails[4];

                                                    var TheatreDiv = document.createElement('div');
                                                    TheatreDiv.setAttribute('style', 'display:block;position;relative;');

                                                    
                                                    var thtrNAmeheading = document.createElement('div');
                                                    thtrNAmeheading.setAttribute('style', 'font-family: PT Sans Narrow, sans-serif;display:table;font-size:20px;font-weight:bold;');
                                                    
                                                    var thtrNameSpan = document.createElement('span');

                                                    thtrNameSpan.setAttribute('style', 'display:inline-block;text-align:left;font-style:italic;font-size:16px;font-weight:bold;color:Black;');

                                                    if (currentPropertyName != currentTheatreName) {

                                                        thtrNameSpan.appendChild(document.createTextNode(currentTheatreName));
                                                    }
                                                    else {
                                                        singleTheatreArray[singleThtrIndex++] = currentThid;
                                                    }

                                                    thtrNAmeheading.appendChild(thtrNameSpan);

                                                    var ShowsDetails = TheatreDetailsWithShows[1];
                                                    var Shows = ShowsDetails.split('#$');

                                                    var showTimeDiv = document.createElement('div');
                                                    showTimeDiv.setAttribute('style', 'display:table;width:auto;font-family:PT Sans Narrow, sans-serif;');

                                                    var ClassesDivRow = document.createElement('div');
                                                    ClassesDivRow.setAttribute('id', 'ClassesDivRow' + currentThid);                                                  
                                                    ClassesDivRow.setAttribute('style', 'display:none;width:100%;background-color:White;position:relative;border: 2px solid lime;border-radius: 5px;');


                                                    var imgClose = document.createElement('img');
                                                    imgClose.setAttribute('src', '../images/dialogCloseButton.png');
                                                    imgClose.setAttribute('alt', 'close');
                                                    imgClose.setAttribute('style', 'height;40px;width:40px;');
                                                    var closeBtn = document.createElement('a');
                                                    closeBtn.appendChild(imgClose);
                                                    var C_btnId='C_btn' + currentThid;
                                                    closeBtn.setAttribute('id', C_btnId);
                                                    closeBtn.setAttribute('href', '#');
                                                    closeBtn.setAttribute('alt', 'close');
                             
                                                    var cdata = { ThtrID: currentThid };

                                                    jQuery_1_7_1(document).off("tap", "#" + C_btnId);
                                                    jQuery_1_7_1(document).on('tap', "#" + C_btnId, cdata, onCloseClassesDivRow);
                                        

                                                    closeBtn.setAttribute('style', 'display: inline-block; float:right;position:absolute; top:0px; right: 0px;height: 20px;color:black;');


                                                    var ClassesDivTitle = document.createElement('div');
                                                    ClassesDivTitle.setAttribute('style', 'font-family: PT Sans Narrow, sans-serif;display:inline-block;width:100%;height:40px;background-color:white;position:relative;border: 1px none #000;border-radius: 5px;font-weight:bold;text-align:center;');
                                                    ClassesDivTitle.appendChild(document.createTextNode('Select Class'));

                                                    ClassesDivTitle.appendChild(closeBtn);
                                                    ClassesDivRow.appendChild(ClassesDivTitle);

                                                    for (var j = 0; j < Shows.length; j++) {

                                                        var dateShowTimeClass = Shows[j].split('*');

                                                        var dateShowTime = dateShowTimeClass[0];

                                                        var date_ShowTime = dateShowTime.split(',');
                                                        var pShowDateYYYYMMDD = date_ShowTime[0];

                                                        var TAShowTime = date_ShowTime[1];

                                                        var ShowOpenOrNot = date_ShowTime[2];                                                    

                                                        var showTime = document.createElement('span');
                                                        //ShowidsArray
                                                        var showtimeid = 'showtime_' + currentThid + "_" + TAShowTime;

                                                        var ClassesDiv = document.createElement('div');
                                                        var ClassesDivId = currentThid + "_" + TAShowTime;

                                                        ShowidsArray[showIndex++] = showtimeid;

                                                        showTime.setAttribute('id', showtimeid);

                                                        if (ShowOpenOrNot.toUpperCase() == "Y") {
                                                            ShowOpenCheckAndTickAvil[ShowOpenIndex++] = "Y";
                                                            showTime.setAttribute('style', ' float:left;display:inline-block;padding: 2px 5px;font-size:16px;margin-right: 10px;margin-bottom: 3px;color:#084200;font-weight:bold;');
                                                        }
                                                        else {
                                                            ShowOpenCheckAndTickAvil[ShowOpenIndex++] = "N";
                                                            showTime.setAttribute('style', 'float:left; display:inline-block;padding: 2px 5px;font-size:16px;margin-right: 10px;margin-bottom: 3px;color:red;font-weight:bold;');
                                                        }

                                                        var data = { citycode: citycode, movieid: movieid, ShowDateYYYYMMDD: pShowDateYYYYMMDD, ThID: currentThid, date: Did, currentPropertyId: currentPropertyId, currentPropertyName: currentPropertyName, currentPropertyArea: currentPropertyArea, theatreName: currentTheatreName, TAShowTime:TAShowTime,showtime: format12(TAShowTime), ClassesDivId: ClassesDivId, showtimeid: showtimeid };

                                                        jQuery_1_7_1(document).off("tap", "#" + showtimeid);
                                                        jQuery_1_7_1(document).on('tap', "#" + showtimeid, data, onShowClick);
                                        

                                                        showTime.appendChild(document.createTextNode(format12(TAShowTime)));

                                                        showTimeDiv.appendChild(showTime);


                                                        ClassesDivIdArray[classIndex++] = ClassesDivId;
                                                        ClassesDiv.setAttribute('id', ClassesDivId);
                                                        ClassesDiv.setAttribute('style', 'display:none');


                                                        var ClassesBox = document.createElement('div');
                                                        ClassesBox.setAttribute('style', 'position:relative;font-family:PT Sans Narrow, sans-serif;');


                                                        var dateShowNos = dateShowTimeClass[1];

                                                        var dateShowNoArray = dateShowNos.split('|');

                                                        for (var k = 0; k < dateShowNoArray.length; k++) {

                                                            var dateShowNoDetails = dateShowNoArray[k].split(',');

                                                            var TAClassNo = dateShowNoDetails[0];
                                                            var TAClassDesc = dateShowNoDetails[1];

                                                            var TATickPrice = dateShowNoDetails[2];

                                                            var TANonAvail = dateShowNoDetails[3];
                                                            var TAMemAvail = dateShowNoDetails[4];
                                                            var TATSPAvail = dateShowNoDetails[5];
                                                            var TAOpenForThtr = dateShowNoDetails[6];
                                                            var TAOpenForEM = dateShowNoDetails[7];

                                                            var TADtshno = dateShowNoDetails[8];
                                                            var TAMemSold = dateShowNoDetails[9];
                                                            var TATSPSold = dateShowNoDetails[10]; ;
                                                            var TATotalEMSold = dateShowNoDetails[11];
                                                            var TATotalTheatreSold = dateShowNoDetails[12];
                                                            var TATotalTickets = dateShowNoDetails[13];

                                                            DtshNoArray[dtshIndex++] = TADtshno;


                                                            var ClassDescAndPriceSpan = document.createElement('div');
                                                            ClassDescAndPriceSpan.setAttribute('id', TADtshno);



                                                            if (TAOpenForEM == "Y" && TAMemAvail != 0) {

                                                                DtshNoOpenCheckAndTickAvil[TickAvilIndex++] = "Y";

                                                                if (TADtshno.length != 6) {
                                                                                                                                                                              // (citycode, movieid, classDesc, dtshNo, ShowDateYYYYMMDD, ThID, date, currentPropertyId, currentPropertyName, currentPropertyArea, theatreName, showtime, price)
                                                                    var data = { citycode: citycode, movieid: movieid, classDesc: TAClassDesc, dtshNo: TADtshno, ShowDateYYYYMMDD: pShowDateYYYYMMDD, ThID: currentThid, date: Did, currentPropertyId: currentPropertyId, currentPropertyName: currentPropertyName, currentPropertyArea: currentPropertyArea, theatreName: currentTheatreName, showtime: format12(TAShowTime), price: TATickPrice };

                                                                    jQuery_1_7_1(document).off("tap", "#" + TADtshno);
                                                                    jQuery_1_7_1(document).on('tap', "#" + TADtshno, data, onClassClick);
                                        

                                                                }
                                                                else {
                              
                                                                    jQuery_1_7_1(document).off("tap", "#" + TADtshno);
                                                                    jQuery_1_7_1(document).on('tap', "#" + TADtshno,  onNctClick);
                                        
                                                                }

                                                                ClassDescAndPriceSpan.setAttribute('style', 'background-color:#E6E6E6;padding: 1px 10px;border: 1px solid #000;border-radius: 5px;font-size:15px;font-weight:bold;margin-right: 10px;margin-bottom: 3px;color:Black;text-align:left;display:table;');

                                                                var TickPriceSpan = document.createElement('span');
//                                                              
                                                                TickPriceSpan.appendChild(document.createTextNode("Rs." + TATickPrice + ""));

                                                                var ClassDescSpan = document.createElement('span');
                                                                ClassDescSpan.appendChild(document.createTextNode("(" + TAClassDesc + ")"));
                                                               
                                                                ClassDescAndPriceSpan.appendChild(TickPriceSpan);
                                                                ClassDescAndPriceSpan.appendChild(ClassDescSpan);


                                                            }
                                                            else {
                                                                DtshNoOpenCheckAndTickAvil[TickAvilIndex++] = "N";

                                                                if (TADtshno.length != 6) {
                                                                    jQuery_1_7_1(document).off("tap", "#" + TADtshno);
                                                                    // ClassDescAndPriceSpan.setAttribute('onclick', "onClassClick('" + citycode + "', '" + movieid + "', '" + TADtshno + "', '" + pShowDateYYYYMMDD + "', '" + currentThid + "', '" + Did + "', '" + currentTheatreName + "', '" + TAShowTime + "', '" + TATickPrice + "')");
                                                                }
                                                                else {
                                                                    jQuery_1_7_1(document).off("tap", "#" + TADtshno);
                                                                    // ClassDescAndPriceSpan.setAttribute('onclick', "onClassClick(alert('NCT'))");
                                                                }

                                                                ClassDescAndPriceSpan.setAttribute('style', 'background-color:#BBBBBB;padding: 1px 10px;border: 1px solid #000;border-radius: 5px;font-size:15px;font-weight:bold;margin-right: 10px;margin-bottom: 3px;color:#9B9B9B;text-align:left;display:table;');
                                                                
                                                                var TickPriceSpan = document.createElement('span');
//                                                            
                                                                TickPriceSpan.appendChild(document.createTextNode("Rs." + TATickPrice + ""));

                                                                var ClassDescSpan = document.createElement('span');
                                                                ClassDescSpan.appendChild(document.createTextNode("(" + TAClassDesc + ")"));
                                                              
                                                                ClassDescAndPriceSpan.appendChild(TickPriceSpan);
                                                                ClassDescAndPriceSpan.appendChild(ClassDescSpan);

                                                            }

                                                         ClassesBox.appendChild(ClassDescAndPriceSpan);

                                                        } ////k            

                                                        ClassesDiv.appendChild(ClassesBox);
                                                        ClassesDivRow.appendChild(ClassesDiv);
                                                    } ///j



                                                    TheatreDiv.appendChild(thtrNAmeheading);
                                                    TheatreDiv.appendChild(showTimeDiv);
                                                  
                                                    TheatreDiv.appendChild(ClassesDivRow);

                                                    var liItem = document.createElement('li');
                                                    liItem.setAttribute('id', 'li_' + PTindex);
                                                    liItem.setAttribute('style', tColorLi);

                                                    PTindex++;

                                                    liItem.appendChild(TheatreDiv);
                                                    PropertyGroupUL.appendChild(liItem);
                                                }

                                            }

                                            showsDiv.appendChild(PropertyGroupUL);

                                          //  myShowsScroll.refresh();
                                           // myShowsScroll.scrollTo(0, -0);

                                        }
      this.getShowsForNextDate = function (citycode, cityname, movieid, movieName, movieLanguage, movieStarCast, Did) {

                                            GetDatesAndPlotDatesObj.noThtrSDid.push(Did);

                                            var dateButton = document.getElementById(Did);
                                            dateButton.removeAttribute('onclick');
                              
                                            ///////////////////////////////////////////
                                            var myDate = new Date(Did);
                                            myDate.setDate(myDate.getDate() + 1);
                                            var ddMMMyyyy = (myDate.getMonth() + 1) + "/" + myDate.getDate() + "/" + myDate.getFullYear();
                                            var nextDate = GetDatesAndPlotDatesObj.getFormattedDate(ddMMMyyyy); //mdy
                                           
                                            nextDate = nextDate

                                            if (DatesForMovieArray.indexOf(nextDate) != -1) {
                                                
                                                GetShowsAndPlotShowsObj.getShowsForSelectedDate(citycode, cityname, movieid, movieName, movieLanguage, movieStarCast, nextDate);
                                            }
                                            else {
                                                dateSelection(nextDate);                                               
                                                alert("No 2 Dates in Selected Movie..!");
                                            }
                                            ///////////////////////////////////////////

                                        }

}
//end...



function onShowClick(event) {
  event.preventDefault();
    var data = event.data;   
    var citycode = data.citycode ;
    var movieid = data.movieid ;
    var ShowDateYYYYMMDD = data.ShowDateYYYYMMDD 
    var ThID = data.ThID ;
    var date = data.date 
    var currentPropertyId = data.currentPropertyId ;
    var currentPropertyName = data.currentPropertyName;
    var currentPropertyArea = data.currentPropertyArea ;
     var theatreName = data.theatreName ;
     var showtime = data.showtime ;
     var ClassesDivId = data.ClassesDivId
     var showtimeid = data.showtimeid;
     var TAShowTime = data.TAShowTime;
     //alert("showtime " + showtime);
     //alert("showtimeid " + showtimeid);
     //alert("TAShowTime " + TAShowTime);
     bookingInfo.setShowDetails(currentPropertyId, currentPropertyName, currentPropertyArea, theatreName, ThID, TAShowTime, showtime);
     showSelectionInformation();
     showSelection(ClassesDivId, showtimeid);
   }


function onNctClick(event) {
    event.preventDefault();
    alert('NCT');
    return false;
}
function onClassClick(event) {

    event.preventDefault();
    var data = event.data;   
    var citycode = data.citycode ;
    var movieid=data.movieid;
    var classDesc=data.classDesc;
    var TAClassDesc=data.TAClassDesc;
    var dtshNo=data.dtshNo;
    var ShowDateYYYYMMDD=data.ShowDateYYYYMMDD;
    var ThID=data.ThID;
    var date=data.date;
    var currentPropertyId=data.currentPropertyId;
    var currentPropertyName=data.currentPropertyName;
    var currentPropertyArea=data.currentPropertyArea;
    var theatreName= data.theatreName;
    var showtime=data.showtime;
    var price = data.price;

    bookingInfo.setClassDetails(classDesc, dtshNo, price);
    showSelectionInformation();
    classSelection(dtshNo); //class selection

    GetSeatingAndPlotSeatingObj = new GetSeatingAndPlotSeating();
    GetSeatingAndPlotSeatingObj.getSeatingForClass(citycode, movieid, dtshNo, ShowDateYYYYMMDD, ThID, date, theatreName, showtime, price);


}
function ShowClassesDivRow(ThtrID) {
    for (var i = 0; i < TheatreIdIndexArray.length; i++) {

        if (ThtrID == TheatreIdIndexArray[i]) {
            document.getElementById('ClassesDivRow' + TheatreIdIndexArray[i]).setAttribute('style', 'display:table;width:100%;background-color:White;position:relative;border: 2px solid lime;border-radius: 5px;');
            myShowsScroll.refresh();
        }
        else {
            document.getElementById('ClassesDivRow' + TheatreIdIndexArray[i]).setAttribute('style', 'display:none;width:100%;background-color:White;position:relative;border: 2px solid lime;border-radius: 5px;');
        }
    }
 
}

function onCloseClassesDivRow(event) {
    event.preventDefault();
    var data = event.data;  

    var ThtrID = data.ThtrID;
    CloseClassesDivRow(ThtrID)
}

function CloseClassesDivRow(ThtrID) {

    document.getElementById('ClassesDivRow' + ThtrID).setAttribute('style', 'display:none;width:100%;background-color:lime;position:relative;border: 1px none #000;border-radius: 5px;');

    for (var i = 0; i < ClassesDivIdArray.length; i++) {
        document.getElementById(ClassesDivIdArray[i]).setAttribute('style', 'display:none;');
    }

    showUnSelection();
    myShowsScroll.refresh();
}


function showSelection(ClassesDivId, showtimeid) {
    ThtrId = ClassesDivId.split('_')[0];
  
    if (GetShowsAndPlotShowsObj.presentShowSelectionid == showtimeid) {
        CloseClassesDivRow(ThtrId);
        GetShowsAndPlotShowsObj.presentShowSelectionid = 0;
    }
    else {

        for (var i = 0; i < ShowidsArray.length; i++) {
            if (ShowidsArray[i] == showtimeid) {
                GetShowsAndPlotShowsObj.presentShowSelectionid = showtimeid;
                document.getElementById(ShowidsArray[i]).setAttribute('style', 'float:left;background-color:lime; display: block; padding: 2px 5px;border: 1px solid #000;border-radius: 10px;font-size:16px;margin-right: 10px;margin-bottom: 3px;color:black;font-weight:bold;');
                ShowClassesDivRow(ThtrId);
                showClassesonShowClick(ClassesDivId);
                

                if (GetShowsAndPlotShowsObj.presentClassesSelectionid == "") {
                    GetShowsAndPlotShowsObj.presentClassesSelectionid = ClassesDivId;
                    showClassesonShowClick(ClassesDivId);
                   
                }
                else {
                   
                    document.getElementById(GetShowsAndPlotShowsObj.presentClassesSelectionid).setAttribute('style', 'display:none;');
                    GetShowsAndPlotShowsObj.presentClassesSelectionid = ClassesDivId;
                    showClassesonShowClick(ClassesDivId);
                   
                }     

                GetShowsAndPlotShowsObj.presentShowSelectionid = showtimeid;
            }
            else {               
                
                if (ShowOpenCheckAndTickAvil[i] == "Y") {
                    document.getElementById(ShowidsArray[i]).setAttribute('style', 'float:left;display:inline-block;padding: 2px 5px;font-size:16px;margin-right: 10px;margin-bottom: 3px;color:black;font-weight:bold;');
                                               
                }
                else {
                    document.getElementById(ShowidsArray[i]).setAttribute('style', 'float:left;display:inline-block;padding: 2px 5px;font-size:16px;margin-right: 10px;margin-bottom: 3px;color:red;font-weight:bold;');
                }
            }
        }
    }
}
function showUnSelection() {

    for (var i = 0; i < ShowidsArray.length; i++) {
       
        if (ShowOpenCheckAndTickAvil[i] == "Y") {
            document.getElementById(ShowidsArray[i]).setAttribute('style', 'float:left;display:inline-block;padding: 2px 5px;font-size:16px;margin-right: 10px;margin-bottom: 3px;color:black;font-weight:bold;');
        }
        else {
            document.getElementById(ShowidsArray[i]).setAttribute('style', 'float:left;display:inline-block;padding: 2px 5px;font-size:16px;margin-right: 10px;margin-bottom: 3px;color:red;font-weight:bold;');
        }
    }
}
function showClassesonShowClick(ClassesDivId) {
    var scrollToEle; //theatreID.
    scrollToEle = ClassesDivId.split('_')[0];

    for (var i = 0; i < ClassesDivIdArray.length; i++) {
        if (ClassesDivIdArray[i] == ClassesDivId) {
            document.getElementById(ClassesDivIdArray[i]).setAttribute('style', 'display:block;');
        }
        else {
            document.getElementById(ClassesDivIdArray[i]).setAttribute('style', 'display:none;');
        }
    }

    var ise = (singleTheatreArray.indexOf(scrollToEle) != -1) ? PropertyThtrIndexArray.indexOf('p'+scrollToEle) : PropertyThtrIndexArray.indexOf(scrollToEle);
    
    var nthNodeEle = ise + 1;
    myShowsScroll.refresh();    
    myShowsScroll.scrollToElement(document.querySelector("#ShowsScroller li:nth-child(" + nthNodeEle + ")"), 1200);
}
function classSelection(classid) {

    for (var i = 0; i < DtshNoArray.length; i++) {
        if (DtshNoArray[i] == classid) {

            document.getElementById(DtshNoArray[i]).setAttribute('style', 'background-color:lime;padding: 3px 10px;border: 1px solid #000;border-radius: 5px;font-size:15px;font-weight:bold;margin-right: 10px;margin-bottom: 3px;color:Black;text-align:left;display:table;');
        }
        else {
            if (DtshNoOpenCheckAndTickAvil[i] == "Y") {//xyz
                document.getElementById(DtshNoArray[i]).setAttribute('style', 'background-color:#E6E6E6;padding: 3px 10px;border: 1px solid #000;border-radius: 5px;font-size:15px;font-weight:bold;margin-right: 10px;margin-bottom: 3px;color:Black;text-align:left;display:table;');
            }
            else {
                document.getElementById(DtshNoArray[i]).setAttribute('style', 'background-color:#BBBBBB;padding: 3px 10px;border: 1px solid #000;border-radius: 5px;font-size:15px;font-weight:bold;margin-right: 10px;margin-bottom: 3px;color:#9B9B9B;text-align:left;display:table;');
            }
        }
    }
}

function classUnSelection() {

    for (var i = 0; i < DtshNoArray.length; i++) {

        if (DtshNoOpenCheckAndTickAvil[i] == "Y") {
            document.getElementById(DtshNoArray[i]).setAttribute('style', 'background-color:#E6E6E6;padding: 3px 10px;border: 1px solid #000;border-radius: 5px;font-size:15px;font-weight:bold;margin-right: 10px;margin-bottom: 3px;color:Black;text-align:left;display:table;');
        }
        else {
            document.getElementById(DtshNoArray[i]).setAttribute('style', 'background-color:#BBBBBB;padding: 3px 10px;border: 1px solid #000;border-radius: 5px;font-size:15px;font-weight:bold;margin-right: 10px;margin-bottom: 3px;color:#9B9B9B;text-align:left;display:table;');
        }
        
    }
}

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
