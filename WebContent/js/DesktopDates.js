
var GetDatesAndPlotDatesObj;

var DatesForMovieArray;
var IsOfLocal = "";
//begin...
function GetDatesAndPlotDates() {

    this.SelectionAndDefaultDate;
    this.Dates = [];
    this.Days = [];
    this.noThtrSDid = [];

    this.getDatesDataForMovie = function (citycode, cityname, movieid, movieName, SelectedDate) {

        var params = {};
        params.citycode = citycode;
        params.emseqno = movieid;
        var dtinfo = { "di": params };

        jQuery_1_7_1.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServerDataForDesktop.asmx/getDatesDataForMovie",
            data: JSON.stringify(dtinfo),
            dataType: "json",
            async: true,

            // cache :false,
            beforeSend: function () {

            },
            success: function (DatesData) {
                var movieDatesObj = DatesData.d;

                nlbStatus(movieDatesObj.NlbIps);
                var DatesDataObj = movieDatesObj.movieDates;

                //alert(DatesDataObj.PIslocal);
                if (GetDatesAndPlotDatesObj.testDatesDataBeforePlot(DatesDataObj)) {


                    DatesForMovieArray = [];
                    DatesForMovieArray = DatesDataObj.datesForMovie;
                    alert("getDatesDataForMovie " + DatesForMovieArray);
                    SelectionAndDefaultDate = DatesForMovieArray[0];
                    alert("SelectionAndDefaultDate " + SelectionAndDefaultDate);

                    GetDatesAndPlotDatesObj.plotMovieDates(citycode, cityname, movieid, movieName, SelectionAndDefaultDate)
                    DateSelection(SelectedDate);

                }
            },
            error: function (statusCode, errorThrown) {
                if (statusCode.status == 0) {

                }
            },
            complete: function (transport) {

            }
        });
    }

    this.getDatesDataForMovie1 = function () {

        var today = new Date();
        GetDatesAndPlotDatesObj.genrateDates(today, 10);
        GetDatesAndPlotDatesObj.createDates1();

    }

    this.getDatesAndShowsForMovie = function (citycode, cityname, movieid, movieName) {

        document.getElementById('showsDiv').innerHTML = "";
        document.getElementById('DatesDivHtml').innerHTML = "";
        
        var params = {};
        params.citycode = citycode;
        params.emseqno = movieid;
        params.MNoValue = LocalPrefObj.MNoValue;

        var dtinfo = { "di": params };

        jQuery_1_7_1.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServerDataForDesktop.asmx/getDatesDataForMovie",
            data: JSON.stringify(dtinfo),
            dataType: "json",
            async: true,
            timeout: 3000,
            // cache :false,
            beforeSend: function () {

            },
            success: function (DatesData) {
                var movieDatesObj = DatesData.d;
                //alert(DatesData);
                nlbStatus(movieDatesObj.NlbIps);
                var DatesDataObj = movieDatesObj.movieDates;
                //alert(DatesDataObj.PIslocal);
                if (GetDatesAndPlotDatesObj.testDatesDataBeforePlot(DatesDataObj)) {
                    DatesForMovieArray = [];
                    DatesForMovieArray = DatesDataObj.datesForMovie;
                    //alert("nene");
                    IsOfLocal = DatesDataObj.PIslocal;
                    SelectionAndDefaultDate = DatesForMovieArray[0];
                    GetDatesAndPlotDatesObj.plotMovieDates(citycode, cityname, movieid, movieName, SelectionAndDefaultDate)
                    

                    ShowsObj = new ShowsJs();

                    ShowsObj.getShowsForSelectedDate(citycode, cityname, movieid, movieName, SelectionAndDefaultDate)
                    DateSelection(SelectionAndDefaultDate);

                }
            },
            error: function (statusCode, errorThrown) {
                if (statusCode.status == 0) {
                    //alert();
                }
            },
            complete: function (transport) {
                //alert("s");
            }
        });
    }

    this.testDatesDataBeforePlot = function (DatesDataObj) {

        var flag = false;
        if (DatesDataObj.exceptionStatus != "exception") {
            if (DatesDataObj.result != "NO" && DatesDataObj.result != "") {
                flag = true;
            }
            else {

                document.getElementById('DatesDivHtml').innerHTML = "<span style='color:red;'>No Dates in Selected Movie..!</span>"; ;
                document.getElementById('showsDiv').innerHTML = "";
                flag = false;
            }
        }
        else {
            alert("Sorry for inconvenience plz try again..!");
            document.getElementById('DatesDivHtml').innerHTML = "";
            document.getElementById('showsDiv').innerHTML = "";
            flag = false;
        }
        //alert(flag);
        return flag;
    }


    this.plotMovieDates = function (citycode, cityname, movieid, movieName, ReleaseOrTodayDate) {
        var ddMMMyy = ReleaseOrTodayDate.split('-');
        // var d = new Date(99, 5, 24, 11, 33, 30, 0);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var dd = ddMMMyy[0];
        var MMM = months.indexOf(ddMMMyy[1]);
        var yy = ddMMMyy[2];

        ReleaseOrTodayDate = new Date(2000 + parseInt(yy), MMM, dd, 0, 0, 0, 0);

        GetDatesAndPlotDatesObj.genrateDates(ReleaseOrTodayDate, 10);
        GetDatesAndPlotDatesObj.createDates(citycode, cityname, movieid, movieName, ReleaseOrTodayDate);
    }



    this.genrateDates = function (ReleaseOrTodayDate, noofDates) {
        if (IsOfLocal.toUpperCase() == "yes".toUpperCase()) {
            var days = ['SUN.', 'MON.', 'TUE.', 'WED.', 'THU.', 'FRI.', 'SAT.'];
        }
        else {
            var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        }
        //alert("ReleaseOrTodayDate " + ReleaseOrTodayDate);
        var flag = true;

        for (i = 0; i < noofDates; i++) {

            var myDate = new Date(ReleaseOrTodayDate);
            myDate.setDate(myDate.getDate() + i);

            var ddMMMyyyy = (myDate.getMonth() + 1) + "/" + myDate.getDate() + "/" + myDate.getFullYear();
            // alert('ddMMMyyyy ' + ddMMMyyyy);
            var day = myDate.getDay();
            if (IsOfLocal.toUpperCase() == "yes".toUpperCase()) {
                if (flag) {
                    flag = false;
                    day = day;
                }
            }
            //alert('day ' + day);

            var ithDate = GetDatesAndPlotDatesObj.getFormattedDate(ddMMMyyyy); //mdy



            this.Dates[i] = ithDate;
            this.Days[i] = days[day];
            // alert('day ' + days[day]);
        }

    }


    this.getFormattedDate = function (date) {
        var pattern = /(.*?)\/(.*?)\/(.*?)$/;
        var result = date.replace(pattern, function (match, p1, p2, p3) {
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return (p2 < 10 ? "0" + p2 : p2) + "-" + months[(p1 - 1)] + "-" + p3.substring(2, 4);
        });

        return result;
    }

    this.createDates = function (citycode, cityname, movieid, movieName, ReleaseOrTodayDate) {

        //IsOfLocal = DatesDataObj.PIslocal;
        var datesGroup = document.createElement('ul');
        datesGroup.setAttribute('id', 'datesGroup');

        j = 0;
        var flag = true;
        for (i = 1; i <= this.Dates.length; i++) {

            var dateval = this.Dates[j];
            var dayval = this.Days[j];

            j++;
            var dateButton = GetDatesAndPlotDatesObj.designDate(dateval, dayval);
            dateButton.setAttribute('id', dateval);

            if (IsOfLocal.toUpperCase() == "yes".toUpperCase()) {
                if (flag) {
                    flag = false;
                    dateButton.setAttribute('style', "background-color:Green;color:red;");
                }
            }

            if (DatesForMovieArray.indexOf(dateval) != -1) {

                dateButton.setAttribute('style', 'text-align:center;background-color:;float:left;height:58px;width:9.2%;padding-left:1px; padding-right:1px;border:1px solid #C8C8C8;cursor: pointer; color:#D81B22');
                dateButton.setAttribute('onclick', "getShowsOnDateClick('" + citycode + "', '" + cityname + "','" + movieid + "','" + movieName + "','" + dateval + "')");
                dateButton.setAttribute('onmouseover', "DateMouseOver('" + dateval + "')");
                dateButton.setAttribute('onmouseout', "DateMouseOut('" + dateval + "')");

            }
            else {

                dateButton.setAttribute('style', 'display:none;text-align:center;background-color:#BBBBBB;float:left;height:58px;width:9.2%;padding-left:1px; padding-right:1px;border:1px solid #C8C8C8;color:#9B9B9B');
            }
            datesGroup.appendChild(dateButton);
        }

        document.getElementById('DatesDivHtml').innerHTML = "";
        document.getElementById('DatesDivHtml').appendChild(datesGroup);


    }

    this.createDates1 = function () {

        

        var datesGroup = document.createElement('ul');
        datesGroup.setAttribute('id', 'datesGroup');

        j = 0;

        for (i = 1; i <= this.Dates.length; i++) {

            var dateval = this.Dates[j];
            var dayval = this.Days[j];


            j++;
            var dateButton = GetDatesAndPlotDatesObj.designDate(dateval, dayval);
            dateButton.setAttribute('id', dateval);



            dateButton.setAttribute('style', 'text-align:center;background-color:#BBBBBB;float:left;height:100%;width:9.2%;padding-left:1px; padding-right:1px;border-width:1px;color:#9B9B9B;border:1px solid #C8C8C8');

            datesGroup.appendChild(dateButton);

        }


        document.getElementById('DatesDivHtml').innerHTML = "";
        document.getElementById('DatesDivHtml').appendChild(datesGroup);


    }

    this.designDate = function (ddmmmyy, dayval) {

        var Did = ddmmmyy;

        var ddMMMyy = Did.split('-');
        var dd = ddMMMyy[0];
        var MMM = ddMMMyy[1];
        var day = dayval;

        var dateButton = document.createElement('li');

        var daySpan = document.createElement('div');
        daySpan.setAttribute('style', 'height:33%;width:100%;font-weight:bold;font-style:italic;font-family: PT Sans Narrow, sans-serif;');
        daySpan.appendChild(document.createTextNode(day));

        var ddSpan = document.createElement('div');
        ddSpan.setAttribute('style', 'height:33%;width:100%;font-weight:bold;');
        ddSpan.appendChild(document.createTextNode(dd));

        var MMMSpan = document.createElement('div');
        MMMSpan.setAttribute('style', 'height:33%;width:100%;font-weight:bold;font-style:italic;font-family: PT Sans Narrow, sans-serif;');
        MMMSpan.appendChild(document.createTextNode(MMM));

        dateButton.appendChild(daySpan);
        dateButton.appendChild(ddSpan);
        dateButton.appendChild(MMMSpan);

        return dateButton;
    }

}
//end...
function DateSelection(Did) {
    
    for (var i = 0; i < DatesForMovieArray.length; i++) {       

        if (Did == DatesForMovieArray[i]) {
            bookingInfo.setDateInfo(Did);

            document.getElementById(DatesForMovieArray[i]).removeAttribute('onmouseover', "DateMouseOver('" + DatesForMovieArray[i] + "')");
            document.getElementById(DatesForMovieArray[i]).removeAttribute('onmouseout', "DateMouseOut('" + DatesForMovieArray[i] + "')");
            document.getElementById(DatesForMovieArray[i]).setAttribute('style', 'text-align:center;background-color:#D81B22;float:left;height:58px;width:9.2%;padding-left:1px; padding-right:1px; cursor: pointer;color:white;border:1px solid #C8C8C8');
        }
        else {
            document.getElementById(DatesForMovieArray[i]).setAttribute('onmouseover', "DateMouseOver('" + DatesForMovieArray[i] + "')");
            document.getElementById(DatesForMovieArray[i]).setAttribute('onmouseout', "DateMouseOut('" + DatesForMovieArray[i] + "')");

            document.getElementById(DatesForMovieArray[i]).setAttribute('style', 'text-align:center;background-color:white;float:left;height:58px;width:9.2%;padding-left:1px; padding-right:1px;cursor: pointer;color:#D81B22;border:1px solid #C8C8C8');

        }

    }
}

function DateMouseOver(Did) {

    //document.getElementById(DatesForMovieArray[i]).setAttribute('style', 'text-align:center;background-color:white;float:left;height:58px;width:9.2%;padding-left:1px; padding-right:1px;color:black;border:1px solid #C8C8C8');
    document.getElementById(Did).style.color = "black";

}

function DateMouseOut(Did) {

    document.getElementById(Did).style.color = "#D81B22";
    //document.getElementById(DatesForMovieArray[i]).setAttribute('style', 'text-align:center;background-color:white;float:left;height:58px;width:9.2%;padding-left:1px; padding-right:1px;color:#D81B22;border:1px solid #C8C8C8');

}


function getShowsOnDateClick(citycode, cityname, movieid, movieName, Did) {

    DateSelection(Did);
    // jQuery_1_7_1("#SelectMovieDl").val(movieid);
    ShowsObj.getShowsForSelectedDate(citycode, cityname, movieid, movieName, Did);

}