
function getMovies() {
    MoviesObj.getMovies1();
    document.getElementById('spareDiv').innerHTML = "";
    jQuery_1_7_1('#showsDivToggle').hide();
    jQuery_1_7_1('#homeImgSlides').show();
}

var MoviesObj;

function MoviesJs() {

    this.getMovies1 = function () {

        gotoMenu("HomeAndMyAccount");

        var params = {};
        // params.citycode = citycode;
        params.citycode = bookingInfo.selectedCity_id;
        params.MNoValue = LocalPrefObj.MNoValue;

        var ctinfo = { "mi": params };
        //alert("s");
        jQuery_1_7_1.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "ServerDataForDesktop.asmx/getMoviesData",
            data: JSON.stringify(ctinfo),
            dataType: "json",
            async: true,

            //cache: false,
            beforeSend: function () {

            },
            success: function (MovieData) {

                var cityMovieDetailsObj = MovieData.d;
                nlbStatus(cityMovieDetailsObj.NlbIps);

                MovieDataObj = cityMovieDetailsObj.cityMovieDetails;

                OtherChargesArray = [];
                OtherChargesArray = MovieDataObj.OtherChargesArray;
                //alert(MoviesObj.testMovieDataBeforePlot(MovieDataObj));
                if (MoviesObj.testMovieDataBeforePlot(MovieDataObj)) {
                    MoviesObj.plotMoviesData1(citycode, "#SelectMovieDl_home", "movieid");
                }
                else {
                    document.getElementById('SelectMovieDl_home').options.length = 0;
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

    this.plotMoviesData1 = function (citycode, selectCityDropDown, movieid) {

        MovieIdLiArray = [];
        MovieIdLiInfoArray = [];

        var MoviesDataArray = MovieDataObj.mdata;


        //        for (var l = 0;l< MoviesDataArray.length;l++ ) {
        //        }
        var teluguFlag = true;
        var englishFlag = true;
        var hindiFlag = true;

        var SelectMovieDl = jQuery_1_7_1(selectCityDropDown);
        SelectMovieDl.empty();

        SelectMovieDl.append("<option value='SelectMovie'  style='font-weight: bolder;background-color:white;color:red;' >Select Movie</option>");
        // SelectMovieDl.append("<option  value='TELUGU' >-TELUGU-</option>");
        jQuery_1_7_1.each(MoviesDataArray, function (index, value) {

            var singleMovieDetails = value.split('~');

            // #3484~X Men~TELUGU~Hugh jackman,Simon Kimberg and Others

                       singleMovieDetails[0];
                      singleMovieDetails[1];
                      singleMovieDetails[2];
                      singleMovieDetails[3];


            //             <optgroup label="Swedish Cars">
            //    <option value="volvo">Volvo</option>
            //    <option value="saab">Saab</option>
            //  </optgroup>

            if ("TELUGU" == singleMovieDetails[2] && teluguFlag) {
                SelectMovieDl.append("<option  value='" + singleMovieDetails[2] + "' disabled='disabled' style='font-weight: bolder;'>" + singleMovieDetails[2] + "</option>");
                teluguFlag = false;
            }
            else if ("HINDI" == singleMovieDetails[2] && hindiFlag) {
                SelectMovieDl.append("<option  value='" + singleMovieDetails[2] + "' disabled='disabled' style='font-weight: bolder;'>" + singleMovieDetails[2] + "</option>");
                hindiFlag = false;
            }
            else if ("ENGLISH" == singleMovieDetails[2] && englishFlag) {
                SelectMovieDl.append("<option  value='" + singleMovieDetails[2] + "' disabled='disabled' style='font-weight: bolder;'>" + singleMovieDetails[2] + "</option>");
                englishFlag = false;
            }

            if (movieid == singleMovieDetails[0]) {
                SelectMovieDl.append("<option  value='" + value + "' selected='selected'>" + singleMovieDetails[1] + "</option>");
            }
            else {
                SelectMovieDl.append("<option  value='" + value + "' >" + singleMovieDetails[1] + "</option>");
            }
        });

    }

    this.testMovieDataBeforePlot = function (MovieDataObj) {
        
        var flag = false;
        if (MovieDataObj.exceptionStatus != "exception") {
            if (MovieDataObj.result != "NO" && MovieDataObj.result != "") {
                flag = true;
            }
            else {
                alert("No Movies in Selected City..!");
                flag = false;
            }
        }
        else {
            alert("Sorry for inconvenience plz try again..!");
            flag = false;
        }
        return flag;
    }

}

function GetShowsForSelectedMovie(id) {//xyz
    
    var movieDropDownList = "";
    movieDropDownList += "<select style='height:40px;width:100%; background-color:#fff;font-size:16px;font-family: PT Sans Narrow, sans-serif;'   class='ddlnew' id='SelectMovieDl' onchange='GetShowsForSelectedMovie(this.id)' onclick='setColor(this);'>"
    movieDropDownList += "<option value=''>Select Movie</option>";
    movieDropDownList += "</select>";

    
    var CastDiv="<div style='color:blue;text-align:left;font-weight:bold;'>Cast : </div>"
    CastDiv += "<div id='castInfo' style='color:black;text-align:left;word-wrap: break-word;'></div>";

    var SpareDivInnerHTML = "";

    SpareDivInnerHTML += "<div id='InformationDiv' style=' background-color:#e6e5e5;color:White;width:100%; height:60px;border:1px solid #C8C8C8'>";
    SpareDivInnerHTML += "<div id='MovieSelectionDiv' style='float:left; background-color:Gray;color:White;width:29%; height:60px;'><div style='text-align:center;background-color:#e6e5e5;color:black;'>Select Movie</div><div style='width:100%;height:100%;'>" + movieDropDownList + "</div></div>";
    SpareDivInnerHTML += "<div  style='float:left;margin-left:1%; background-color:Gray;color:White;width:70%; height:60px;'><div id='DatesDivHtml' style='height:60px;width:100%;background-color:#e6e5e5'>&nbsp;</div></div>";
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "<div style='clear:both;'></div>";
    SpareDivInnerHTML += "<div id='showsDivToggle' style='display:none;'>";
    SpareDivInnerHTML += "<div style='display:block;width:100%;background-color:white;'>";
    SpareDivInnerHTML += "<div id='starcastDiv' style='display:block;width:150px;height:450px;float:left;border:1px solid #C8C8C8';'>";
    SpareDivInnerHTML += "<div id='movieImg' style='display:block;width:150px;height:150px;background-color:white;'>";
    SpareDivInnerHTML += "<img id='selectedMovieImg' src='' alt='movieImage' style='width:100px;height:100px; padding:25px 25px 25px 25px;'/>";
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "<div id='selectedMovieTitle' style='font-size:16px;font-weight:bold;'>";    
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "<div id='starcast' style='display:block;width:150px;height:auto'>";
    SpareDivInnerHTML += "<div id='starcastDesc' style='width:142px;height:300px;padding:4px;background-color:white;'>"+CastDiv+"</div>";
    SpareDivInnerHTML += "<div id='testPos' style='width:142px;height:50px;padding:4px;background-color:white;'></div>";
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML +="</div>";
    SpareDivInnerHTML += "<div id='spareDivWrapperDiv' style='padding-top:5px; font-size:15px;width:745px;padding-top:30px;padding-bottom:10px; height:450px;overflow:scroll;' >";
    SpareDivInnerHTML += "<div id='spareDivScrollDiv' style='width:100%;'>";
    SpareDivInnerHTML += "<div id='showsDiv' style='font-size:14px;' align='left'>";
    SpareDivInnerHTML += slides;
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "</div>";
    SpareDivInnerHTML += "</div>";

    document.getElementById('spareDiv').innerHTML = "";
    document.getElementById('spareDiv').innerHTML = SpareDivInnerHTML;


    citycode = bookingInfo.selectedCity_id;
    alert("citycode"+citycode);

    var singleMovieDetails = singleMovieInfo.split('~');
    var index = document.getElementById(id).selectedIndex;
    var val = document.getElementById(id).options[index].value;

    alert(val + "-" + citycode);
    var singleMovieDetails = val.split('~');
    citycode, cityname, movieid, movieName
    document.getElementById('castInfo').innerHTML = singleMovieDetails[3];
    document.getElementById('selectedMovieImg').src = "http://202.63.109.110/ctspsonnet/Images/titles/" + singleMovieDetails[0] + ".jpg";
    document.getElementById('selectedMovieImg').src = "http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/images/" + singleMovieDetails[0] + ".jpg";

    document.getElementById('selectedMovieTitle').innerHTML = singleMovieDetails[1];
    setMovieInfo(singleMovieDetails[0], singleMovieDetails[1], singleMovieDetails[2], singleMovieDetails[3]);

    MoviesObj.plotMoviesData1(citycode, "#SelectMovieDl", singleMovieDetails[0]);
    GetDatesAndPlotDatesObj = new GetDatesAndPlotDates();
    GetDatesAndPlotDatesObj.getDatesAndShowsForMovie(citycode, getCityName(citycode), singleMovieDetails[0], singleMovieDetails[1]);
    alert(getCookie("citynameCookie"));
    GetDatesAndPlotDatesObj.getDatesAndShowsForMovie(citycode, getCookie("citynameCookie"), singleMovieDetails[0], singleMovieDetails[1]);
    jQuery_1_7_1('#homeImgSlides').hide();
    jQuery_1_7_1('#showsDivToggle').show();
}


function GetShowsForSelectedMovie1(id) { 


    citycode = bookingInfo.selectedCity_id;
 
    var index = document.getElementById(id).selectedIndex;
    var val = document.getElementById(id).options[index].value;


    var singleMovieDetails = val.split('~');

    document.getElementById('castInfo').innerHTML = singleMovieDetails[3];
    document.getElementById('selectedMovieImg').src = "http://202.63.109.110/ctspsonnet/Images/titles/" + singleMovieDetails[0] + ".jpg";
    document.getElementById('selectedMovieImg').src = "http://emdata1.s3-website-ap-southeast-1.amazonaws.com/Easy100Services/newsite/images/" + singleMovieDetails[0] + ".jpg";
    document.getElementById('selectedMovieTitle').innerHTML = singleMovieDetails[1];

    //citycode, cityname, movieid, movieName
    setMovieInfo(singleMovieDetails[0], singleMovieDetails[1], singleMovieDetails[2], singleMovieDetails[3]);

    GetDatesAndPlotDatesObj = new GetDatesAndPlotDates();
    //GetDatesAndPlotDatesObj.getDatesAndShowsForMovie(citycode, getCityName(citycode), singleMovieDetails[0], singleMovieDetails[1]);
    //alert("ss "+getCookie("citynameCookie"));
    GetDatesAndPlotDatesObj.getDatesAndShowsForMovie(citycode, getCookie("citynameCookie"), singleMovieDetails[0], singleMovieDetails[1]);
    jQuery_1_7_1('#homeImgSlides').hide();
    jQuery_1_7_1('#showsDivToggle').show();
}


function setMovieInfo(emCseqNo, movieName, movieLanguage, starCast) {
    bookingInfo.setMovieInfo(emCseqNo, movieName, movieLanguage, starCast);
}
