
var paymentGetWayObj;

function PaymentGetWay() {
    this.TotalAmountPayable = "";
    this.ServiceTax = "";
    this.HDFCCharges = "";

    this.MemID = "";
    this.MemberName = "";
    this.txtEmailID = "";
    this.txtPhoneNo = "";
    this.Amount = "";
    this.paymentGetWayUrl = "";

    this.setPaymentGetWay = function (TotalAmountPayable, ServiceTax, HDFCCharges, MemID, MemberName, txtEmailID, txtPhoneNo, Amount) {
        this.TotalAmountPayable = TotalAmountPayable;
        this.ServiceTax = ServiceTax;
        this.HDFCCharges = HDFCCharges;

        this.MemID = MemID;
        this.MemberName = MemberName;
        this.txtEmailID = txtEmailID;
        this.txtPhoneNo = txtPhoneNo;
        this.Amount = Amount;

    }
    this.setPaymentGetWayAmtInfo = function (TotalAmountPayable, ServiceTax, HDFCCharges, Amount) {
        // alert("amtb" + Amount);
        this.TotalAmountPayable = TotalAmountPayable;
        this.ServiceTax = ServiceTax;
        this.HDFCCharges = HDFCCharges;
        this.Amount = Amount;
        // alert("amt"+this.Amount);
    }


    this.setPaymentGetUserInfo = function (MemID, MemberName, txtEmailID, txtPhoneNo) {

        this.MemID = MemID;
        this.MemberName = MemberName;
        this.txtEmailID = txtEmailID;
        this.txtPhoneNo = txtPhoneNo;

    }

    this.makePaymentGetWayUrl = function () {
         //alert("amtl" + this.Amount);
        // this.paymentGetWayUrl = "http://202.63.106.72/mver1/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable;
        //this.paymentGetWayUrl = "http://202.63.106.69/mobiledevice/android/cinegoer/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC2.aspx?TotalAmountPayable=" + this.TotalAmountPayable;
        //this.paymentGetWayUrl = "http://202.63.106.72/mobiledevice/android/cinegoer/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable;
         //this.paymentGetWayUrl = "http://202.63.106.69/easy100newsite1/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable; //working
        //this.paymentGetWayUrl = "http://202.63.106.75/awssite/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable; //working 75
        //this.paymentGetWayUrl = "http://www.easynow.in/awssite/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable; //working

      this.paymentGetWayUrl = "http://www.easymovies.in/awssite/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable; //working
      //this.paymentGetWayUrl = "http://183.82.108.243/awssite/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable; //working
     
      //  this.paymentGetWayUrl = "http://202.63.106.72/site/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable;
       // this.paymentGetWayUrl = "http://localhost:2804/desktop/Users/CCAvenueGotoPaymentGatewayToAddMemberDepositByCC1.aspx?TotalAmountPayable=" + this.TotalAmountPayable;
        
        this.paymentGetWayUrl += "&ServiceTax=" + this.ServiceTax;
        this.paymentGetWayUrl += "&HDFCCharges=" + this.HDFCCharges;
        this.paymentGetWayUrl += "&MemID=" + this.MemID;
        this.paymentGetWayUrl += "&MemberName=" + this.MemberName;
        this.paymentGetWayUrl += "&txtEmailID=" + this.txtEmailID;
        this.paymentGetWayUrl += "&txtPhoneNo=" + this.txtPhoneNo;
        this.paymentGetWayUrl += "&Amount=" + this.Amount;
        // alert("amt2" + this.Amount);
    }


    this.AddBookingParamsPaymentGetWayUrl = function () {
        //alert(this.paymentGetWayUrl);
        this.paymentGetWayUrl += "&Bcity=" + bookingInfo.city;
        this.paymentGetWayUrl += "&Bcity_id=" + bookingInfo.city_id;
        this.paymentGetWayUrl += "&Bmovie=" + bookingInfo.movie;
        this.paymentGetWayUrl += "&BemCseqNo=" + bookingInfo.emCseqNo;
        this.paymentGetWayUrl += "&BthCseqNo=" + bookingInfo.thCseqNo;
        this.paymentGetWayUrl += "&Bdate=" + bookingInfo.date;
        this.paymentGetWayUrl += "&Btheatre=" + bookingInfo.theatre;
        this.paymentGetWayUrl += "&Btheatre_id=" + bookingInfo.thiatre_id;
        this.paymentGetWayUrl += "&BdateshowNo=" + bookingInfo.dateshowNo;
        this.paymentGetWayUrl += "&Bshowtime=" + bookingInfo.showtime;
        this.paymentGetWayUrl += "&Bprice=" + bookingInfo.price;
        this.paymentGetWayUrl += "&Beurnme=" + bookingInfo.eurnme;
        this.paymentGetWayUrl += "&Beupsod=" + bookingInfo.eupsod;
        this.paymentGetWayUrl += "&BseatCount=" + bookingInfo.seatCount;
        this.paymentGetWayUrl += "&Bseats=" + bookingInfo.seats;
        //alert(this.paymentGetWayUrl);
    }
}


var LocalPrefObj;

function getUserPrefFromLocal() {
    //    
    this.debug = false;
    this.Admin = false;

    this.AdminOrNot = false;
    this.SysAdmin = false;
    this.testUser = false;

    this.userMemId = ""; //0
    this.userIsActive = ""; //1
    this.userPwd = ""; //2
    this.NameValue = ""; //3
    this.EmailIdValue = ""; //4
    this.PremoneyValue = ""; //5
    this.MNoValue = ""; //6

    this.saveUserData = function (userMemId, userIsActive, userPwd, NameValue, EmailIdValue, PremoneyValue, MNoValue) {


        if (userMemId != "") {
            this.userMemId = userMemId;
        }
        else {
            this.userMemId = MNoValue;
        }

        this.userIsActive = userIsActive; //1
        this.userPwd = userPwd; //2
        this.NameValue = NameValue; //3
        this.EmailIdValue = EmailIdValue; //4
        this.PremoneyValue = PremoneyValue; //5
        this.MNoValue = MNoValue;


        this.SetAdminOrNot(MNoValue);

    }

    this.setNameValue = function (NameValue) {
        this.NameValue = NameValue;
    }
    this.setEmailIdValue = function (EmailIdValue) {
        this.EmailIdValue = EmailIdValue;
    }
    this.loadUserData = function () {
        //loadUserData to local obj variables;     
        this.userMemId = this.GetSpecificPreference("userMemId");
        this.userIsActive = this.GetSpecificPreference("userIsActive");
        this.userPwd = this.GetSpecificPreference("userPwd");
        this.NameValue = this.GetSpecificPreference("NameValue");
        this.EmailIdValue = this.GetSpecificPreference("EmailIdValue");
        this.PremoneyValue = this.GetSpecificPreference("PremoneyValue");
        this.MNoValue = this.GetSpecificPreference("MNoValue");

        // this.SetAdminOrNot(this.MNoValue);
    }

    this.resetUserData = function () {     

        this.userMemId = ""; //0
        this.userIsActive = ""; //1
        this.userPwd = ""; //2
        this.NameValue = ""; //3
        this.EmailIdValue = ""; //4
        this.PremoneyValue = ""; //5
        this.MNoValue = "";


        this.SetAdminOrNot("");
    }

    this.saveCityCode = function (citycode) {
        this.citycode = citycode;
        this.cityName = this.getCityName(citycode);
    }

    this.SetAdminOrNot = function (mobileNumber) {
        // alert('admin check');
        if (mobileNumber == "8099421920") {
            debugMode();
            this.AdminOrNot = true;
        }
        else if (mobileNumber == "9000609492") {
            debugMode();
            this.AdminOrNot = true;
        }
        else if (mobileNumber == "9912593488") {
            debugMode();
           
            this.AdminOrNot = true;
            this.testUser = true;
        }
        else if (mobileNumber == "9849004440") {
            debugMode();
            
            this.AdminOrNot = true;
            this.testUser = true;
        }
        else if (mobileNumber == "9849305057") {
            debugMode();
            this.AdminOrNot = true;
        }
        else if (mobileNumber == "9849039145") {
            debugMode();
            this.AdminOrNot = true;
            this.SysAdmin = true;
        }
        else if (mobileNumber == "9849039205") {
            debugMode();
            this.AdminOrNot = true;
        }
        else if (mobileNumber == "9573319931") {
            debugMode();
            this.AdminOrNot = true;
        }
        else {
            closeDebugMode();
            this.AdminOrNot = false;
            this.SysAdmin = false;
            this.testUser = false;
        }

    }

}



var bookingInfo;
//begin...
function bookingObj() {
    this.selectedCity = "";
    this.selectedCity_id = "";

    this.selectedMovie = "";
    this.selectedMovieLanguage = "";
    this.selectedEmCseqNo = "";
    this.selectedStarCast = "";

    this.selectedDate = "";
    this.selectedShowDateYYYYMMDD = "";

    this.selectedShowtime = "";
    this.selectedShowingTime = "";

    this.selectedCurrentPropertyId = "";
    this.selectedCurrentPropertyName = "";
    this.selectedCurrentPropertyArea = "";

    this.selectedTheatre = "";
    this.selectedThiatre_id = "";


    this.selectedClassDesc = "";
    this.selectedDateshowNo = "";
    this.selectedSeatPrice = "";

    this.selectedThCseqNo = "";

    this.selectedSeatCount = "";
    this.selectedSeats = "";
    this.selectedseatNosWithRow = "";
    

    this.customerName = "";
    this.customerPwd = "";
    

    this.REMChg = "10";
    //this.REMTotChg = "1.24";
    //this.REMTotChg = "1.40";
    this.REMTotChg = "1.50";

    this.PriceWithServiceCharges = 0;
    this.otherCharges = 0;
    this.otherChargesDesc = "";

    this.InclusiveCharges = 0;
    this.InclusiveChargesDesc = "";

    this.TotalPrice = 0;

    this.BlockReqNo = "";

    this.hasSufficientBal = false;

    // order ID

    this.TOrderID = "";

    this.setCityInfo = function (city, city_id) {

        this.selectedCity = city;
        this.selectedCity_id = city_id;
       // alert(this.selectedCity + '  setCityInfo  ' + this.selectedCity_id);
    }

    this.setMovieInfo = function (emCseqNo, movieName, movieLanguage, starCast) {
        // #3484~X Men~TELUGU~Hugh jackman,Simon Kimberg and Others
        this.selectedEmCseqNo = emCseqNo;
        this.selectedMovie = movieName;
        this.selectedMovieLanguage = movieLanguage;
        this.selectedStarCast = starCast;

       //  alert(this.selectedEmCseqNo + '    ' + this.selectedMovie + ' ' + this.selectedMovieLanguage + '    ' + this.selectedStarCast);
    }

    this.resetMovieInfo = function () {
        // #3484~X Men~TELUGU~Hugh jackman,Simon Kimberg and Others
        this.selectedEmCseqNo = "";
        this.selectedMovie = "";
        this.selectedMovieLanguage = "";
        this.selectedStarCast = "";

        // alert(this.selectedEmCseqNo + '    ' + this.selectedMovie + ' ' + this.selectedMovieLanguage + '    ' + this.selectedStarCast);
    }

    this.setDateInfo = function (date) {
        this.selectedDate = date;
        this.selectedShowDateYYYYMMDD = "";

         // alert(this.selectedDate + " setDateInfo " + this.selectedShowDateYYYYMMDD);
        this.resetShowInfo();
        this.resetTheatreInfo();
        this.resetClassInfo();
    }

    this.setShowDateYYYYMMDDInfo = function (showDateYYYYMMDD) {

        this.selectedShowDateYYYYMMDD = showDateYYYYMMDD;
        //  alert(" setShowDateYYYYMMDDInfo " + this.selectedShowDateYYYYMMDD);

    }

    this.resetShowDateYYYYMMDDInfo = function () {
        this.selectedShowDateYYYYMMDD = "";
      //  alert(" resetShowDateYYYYMMDDInfo " + this.selectedShowDateYYYYMMDD);

    }



    this.setTheatreInfo = function (currentPropertyId, currentPropertyName, currentPropertyArea, theatre, thiatre_id) {


        this.selectedCurrentPropertyId = currentPropertyId;
        this.selectedCurrentPropertyName = currentPropertyName;
        this.selectedCurrentPropertyArea = currentPropertyArea;

        this.selectedTheatre = theatre;
        this.selectedThiatre_id = thiatre_id;

      //  alert("setTheatreInfo " + this.selectedCurrentPropertyId + " - " + this.selectedCurrentPropertyName + "-" + this.selectedCurrentPropertyArea + " - " + this.selectedTheatre + "-" + this.selectedThiatre_id);

    }

    this.resetTheatreInfo = function () {


        this.selectedCurrentPropertyId = "";
        this.selectedCurrentPropertyName = "";
        this.selectedCurrentPropertyArea = "";

        this.selectedTheatre = "";
        this.selectedThiatre_id = "";

       //   alert("resetTheatreInfo " + this.selectedCurrentPropertyId + " - " + this.selectedCurrentPropertyName + "-" + this.selectedCurrentPropertyArea + " - " + this.selectedTheatre + "-" + this.selectedThiatre_id);

    }



    this.setShowInfo = function (Showtime, ShowingTime) {

        this.selectedShowtime = Showtime;
        this.selectedShowingTime = ShowingTime;

        // alert(this.selectedShowtime + " setShowInfo " + this.selectedShowingTime);
        this.resetShowDateYYYYMMDDInfo();
        this.resetClassInfo();
        this.resetSeatInfo();
        this.resetCinemaSeqNo();
    }

    this.resetShowInfo = function () {

        this.selectedShowtime = "";
        this.selectedShowingTime = "";

       //  alert(this.selectedShowtime + " resetShowInfo " + this.selectedShowingTime);
    }

    this.setClassInfo = function (classDesc, dateshowNo, price) {

        this.selectedClassDesc = classDesc;
        this.selectedDateshowNo = dateshowNo;
        this.selectedSeatPrice = price;

        //  alert("setClassInfo " + this.selectedClassDesc + " - " + this.selectedDateshowNo + "-" + this.selectedSeatPrice);
        this.resetSeatInfo();
        this.resetBlockReqNo();
        this.resetCinemaSeqNo();
    }
    this.resetClassInfo = function () {

        this.selectedClassDesc = "";
        this.selectedDateshowNo = "";
        this.selectedSeatPrice = "";
      //   alert("resetClassInfo " + this.selectedClassDesc + " - " + this.selectedDateshowNo + "-" + this.selectedSeatPrice);

    }

    this.seatInfo = function (seatCount, seats, seatNosWithRow) {

        this.selectedSeatCount = seatCount;
        this.selectedSeats = seats;
        this.selectedseatNosWithRow = seatNosWithRow;
        //  alert("this.seatInfo " + this.selectedSeatCount + "-" + this.selectedSeats + "-" +
        // this.selectedseatNosWithRow
        // );
    }
    this.setCinemaSeqNo = function (CinemaSeqNo) {
        this.selectedThCseqNo = CinemaSeqNo;
        //  alert("setCinemaSeqNo " + this.selectedThCseqNo);
    }

    this.resetSeatInfo = function () {

        this.selectedSeatCount = "";
        this.selectedSeats = "";
        this.selectedseatNosWithRow = "";
       //  alert("this.seatInfo " + this.selectedSeatCount + "-" + this.selectedSeats + "-" +
       // this.selectedseatNosWithRow
       //  );
    }
    this.resetCinemaSeqNo = function () {
        this.selectedThCseqNo = "";
        // alert("setCinemaSeqNo " + this.selectedThCseqNo);
    }

    this.resetBlockReqNo = function () {
        this.BlockReqNo = "";
         //alert("resetBlockReqNo " + this.BlockReqNo);
    } 


    this.setMovieDetails = function (city_id, city, movie, emCseqNo, movieLanguage) {

        this.city = city;
        this.city_id = city_id;
        this.movie = movie;
        this.emCseqNo = emCseqNo;
        this.movieLanguage = movieLanguage;

    }

    this.setDate = function (date) {

        this.date = date;

    }
    this.setShowDetails = function (currentPropertyId, currentPropertyName, currentPropertyArea, theatre, thiatre_id, showtime, showingTime) {

        this.currentPropertyId = currentPropertyId;
        this.currentPropertyName = currentPropertyName;
        this.currentPropertyArea = currentPropertyArea;

        this.theatre = theatre;
        this.thiatre_id = thiatre_id;
        this.showtime = showtime;
        this.showingTime = showingTime;

    }
    this.setClassDetails = function (classDesc, dateshowNo, price) {

        this.classDesc = classDesc;
        this.dateshowNo = dateshowNo;
        this.price = price;
    }

    this.resetShowDetails = function () {

        this.currentPropertyId = "";
        this.currentPropertyName = "";
        this.currentPropertyArea = "";

        this.theatre = "";
        this.thiatre_id = "";
        this.showtime = "";
        this.showingTime = "";
    }
    this.resetClassDetails = function () {

        this.classDesc = "";
        this.dateshowNo = "";
        this.price = "";
    }

    this.caluclateTotalPrice0 = function () {

        var ServicePrice = (parseFloat(this.selectedSeatCount) * parseFloat(this.REMTotChg)) + (parseFloat(this.selectedSeatCount) * parseFloat(this.REMChg));
        var ActualPrice = parseFloat(this.selectedSeatCount) * parseFloat(this.selectedSeatPrice);
        this.PriceWithServiceCharges = (parseFloat(ServicePrice)) + (parseFloat(ActualPrice));

        this.otherCharges = 0
        this.otherChargesDesc = "";
        alert("s1-- "+OtherChargesArray.toString());
        for (i = 0; i < OtherChargesArray.length; i++) {

            if (OtherChargesArray[i] == "") {
                continue;
            }
            var ETCD = OtherChargesArray[i].split('#');
            // alert(this.thiatre_id + " " + i+" "+OtherChargesArray[i]);
            //if ((this.emCseqNo == "3522" || this.emCseqNo == "3526" && this.thiatre_id == "1")) {
            if ((this.emCseqNo == ETCD[0] && this.thiatre_id == ETCD[1])) {
                this.otherCharges = (parseFloat(this.seatCount) * parseFloat(ETCD[2]));
                this.otherChargesDesc = ETCD[3];
            }

        }
        this.TotalPrice = this.PriceWithServiceCharges + this.otherCharges;

        // return TotalPrice;
    }


    this.caluclateTotalPrice = function () {

        var ServicePrice = (parseFloat(this.selectedSeatCount) * parseFloat(this.REMTotChg)) + (parseFloat(this.selectedSeatCount) * parseFloat(this.REMChg));
        var ActualPrice = parseFloat(this.selectedSeatCount) * parseFloat(this.selectedSeatPrice);
        this.PriceWithServiceCharges = (parseFloat(ServicePrice)) + (parseFloat(ActualPrice));

        this.otherCharges = 0
        this.otherChargesDesc = "";
        //alert("s2-- " + OtherChargesArray.toString());
        var ETCDCEMCSN, ETCDCThID, ETCDCCharge, ETCDCDtshno, ETCDCType, ETCDCDescription, ETCDCCityCode, ETCDCPropertyId;
        var LExtraAmount = 0;
        var LExtraDesc = "";

        if (OtherChargesArray != null) {
            for (i = 0; i < OtherChargesArray.length; i++) {
                if (OtherChargesArray[i] == "") {
                    continue;
                }
                else {
                    var ETCD = OtherChargesArray[i].split('#');
                    if (ETCD[0] == "EC") {
                        if (ETCD[1] == "MPWISE") {
                            ETCDCCityCode = ETCD[3];
                            ETCDCPropertyId = ETCD[4];
                            //ETCDCThID = ETCD[5];
                            ETCDCEMCSN = ETCD[5];
                            //ETCDCDtshno = ETCD[7];
                            ETCDCCharge = ETCD[6];
                            ETCDCDescription = ETCD[7];
                            ETCDCType = ETCD[8];

                            if (this.selectedCity_id == ETCDCCityCode && this.selectedEmCseqNo == ETCDCEMCSN && this.selectedCurrentPropertyId == ETCDCPropertyId) {
                                if (this.otherChargesDesc.toString().indexOf(ETCDCDescription) < 0) {
                                    LExtraAmount = parseInt(LExtraAmount) + parseInt(ETCDCCharge);
                                    //alert("P-" + LExtraAmount);
                                    if (this.otherChargesDesc == "") {
                                        this.otherChargesDesc = ETCDCDescription;
                                    }
                                    else {
                                        this.otherChargesDesc = this.otherChargesDesc + " & " + ETCDCDescription;
                                    }
                                    //break;
                                    this.otherCharges = parseFloat(this.otherCharges) + (parseFloat(this.selectedSeatCount) * parseFloat(LExtraAmount));
                                    //this.otherChargesDesc += " &p " + LExtraDesc;
                                }
                            }
                        }

                    }
                }
                //                this.otherCharges = (parseFloat(this.selectedSeatCount) * parseFloat(LExtraAmount));
                //                this.otherChargesDesc = LExtraDesc;

            }
            //alert("P-" + this.otherCharges);
            LExtraAmount = 0;
            LExtraDesc = "";
            for (i = 0; i < OtherChargesArray.length; i++) {
                if (OtherChargesArray[i] == "") {
                    continue;
                }
                else {
                    var ETCD = OtherChargesArray[i].split('#');
                    if (ETCD[0] == "EC") {
                        if (ETCD[1] == "CLASSWISE") {
                            ETCDCCityCode = ETCD[3];
                            ETCDCPropertyId = ETCD[4];
                            ETCDCThID = ETCD[5];
                            ETCDCEMCSN = ETCD[6];
                            ETCDCDtshno = ETCD[7];
                            ETCDCCharge = ETCD[8];
                            ETCDCDescription = ETCD[9];
                            ETCDCType = ETCD[10];

                            if (this.selectedThiatre_id == ETCDCThID && this.selectedCity_id == ETCDCCityCode && this.selectedDateshowNo == ETCDCDtshno && this.selectedCurrentPropertyId == ETCDCPropertyId) {
                                if (this.otherChargesDesc.toString().indexOf(ETCDCDescription) < 0)    //LExtraAmount = parseInt(LExtraAmount) + parseInt(ETCDCCharge);
                                {
                                    LExtraAmount = parseInt(ETCDCCharge);
                                    //alert("C-" + LExtraAmount);
                                    if (this.otherChargesDesc == "") {

                                        this.otherChargesDesc = ETCDCDescription;
                                    }
                                    else {
                                        this.otherChargesDesc = this.otherChargesDesc + " & " + ETCDCDescription;
                                    }
                                    //break;
                                    this.otherCharges = parseFloat(this.otherCharges) + (parseFloat(this.selectedSeatCount) * parseFloat(LExtraAmount));
                                    //this.otherChargesDesc += " & c" + LExtraDesc;
                                }
                            }
                        }

                    }
                }
            }

            //alert("T-" + this.otherCharges);



        }



        this.InclusiveCharges = 0;
        this.InclusiveChargesDesc = "";

        var IncETCDCEMCSN, IncETCDCThID, IncETCDCCharge, IncETCDCDescription, IncETCDCCityCode;


        if (InclusiveChargesArray != null) {
            for (i = 0; i < InclusiveChargesArray.length; i++) {

                if (InclusiveChargesArray[i] == "") {
                    continue;
                }
                else {
                    var IncETCD = InclusiveChargesArray[i].split('#');

                    if (IncETCD.length >= 2) {
                        IncETCDCEMCSN = IncETCD[0];
                        IncETCDCThID = IncETCD[1];
                    }
                    else {
                        IncETCDCEMCSN = "";
                        IncETCDCThID = "";
                    }

                    if (IncETCD.length >= 3) {
                        IncETCDCCharge = IncETCD[2];
                    }
                    else {
                        IncETCDCCharge = "";
                    }
                    if (IncETCD.length >= 4) {
                        IncETCDCDescription = IncETCD[3];
                    }
                    else {
                        IncETCDCDescription = "";
                    }
                    if (IncETCD.length >= 5) {
                        IncETCDCCityCode = IncETCD[4];
                    }
                    else {
                        IncETCDCCityCode = "";
                    }



                    if (IncETCD.length != 5) {

                        if ((this.selectedEmCseqNo == IncETCDCEMCSN && this.selectedThiatre_id == IncETCDCThID)) {

                            this.InclusiveCharges = IncETCDCCharge;
                            this.InclusiveChargesDesc = IncETCDCDescription;

                            break;
                        }
                    }
                    else {

                        if ((this.selectedEmCseqNo == IncETCDCEMCSN && this.selectedThiatre_id == IncETCDCThID && this.selectedCity_id == IncETCDCCityCode)) {

                            this.InclusiveCharges = IncETCDCCharge;
                            this.InclusiveChargesDesc = IncETCDCDescription;

                            break;
                        }
                    }
                }

            }
        }


        this.TotalPrice = this.PriceWithServiceCharges + this.otherCharges;
        this.TotalPrice = parseFloat(this.TotalPrice).toFixed(2);

        // return TotalPrice;
    }

    this.setTheatreDetails = function (currentPropertyId, currentPropertyName, currentPropertyArea, theatre, thiatre_id, classDesc, dateshowNo, showtime, price) {

        this.currentPropertyId = currentPropertyId;
        this.currentPropertyName = currentPropertyName;
        this.currentPropertyArea = currentPropertyArea;

        this.theatre = theatre;
        this.thiatre_id = thiatre_id;
        this.classDesc = classDesc;
        this.dateshowNo = dateshowNo;
        this.showtime = showtime;
        this.price = price;
    }

    this.setUserCredentials = function (mobileNumber, Password) {

        alert('setUserCredentials');

        this.customerName = mobileNumber;
        this.customerPwd = Password;
    }

//    this.seatInfo = function (seatCount, seats, seatNosWithRow) {

//        this.selectedSeatCount = seatCount;
//        this.selectedSeats = seats;
//        this.selectedseatNosWithRow = seatNosWithRow;
//    }
//    this.setCinemaSeqNo = function (CinemaSeqNo) {
//        this.selectedThCseqNo = CinemaSeqNo;
//    }
}
//end...




var bookingInfo1;
//begin...
function bookingObj1() {
    this.selectedCity = "";
    this.selectedCity_id = "";

    this.selectedMovie = "";
    this.selectedMovieLanguage = "";
    this.selectedEmCseqNo = "";
    this.selectedStarCast = "";

    this.selectedDate = "";
    this.selectedShowDateYYYYMMDD = "";

    this.selectedShowtime = "";
    this.selectedShowingTime = "";  

    this.selectedCurrentPropertyId = "";
    this.selectedCurrentPropertyName = "";
    this.selectedCurrentPropertyArea = "";

    this.selectedTheatre = "";
    this.selectedThiatre_id = "";

    this.selectedClassDesc = "";
    this.selectedDateshowNo = "";
    this.selectedSeatPrice = "";

    this.selectedThCseqNo = "";

    this.selectedSeatCount = "";
    this.selectedSeats = "";
    this.selectedseatNosWithRow = "";
    
    this.customerName = "";
    this.customerPwd = "";

   

    this.REMChg = "10";
    //this.REMTotChg = "1.24";
    //this.REMTotChg = "1.40";
    this.REMTotChg = "1.50";

    this.PriceWithServiceCharges = 0;
    this.otherCharges = 0;
    this.otherChargesDesc = "";
    this.TotalPrice = 0;

    this.BlockReqNo = "";

    this.hasSufficientBal = false;




    this.setCityInfo = function (city, city_id) {

        this.selectedCity = city;
        this.selectedCity_id = city_id;
        //alert(this.selectedCity + '  setCityInfo  ' + this.selectedCity_id);
    }

    this.setMovieInfo = function (emCseqNo, movieName,movieLanguage,starCast) {
        // #3484~X Men~TELUGU~Hugh jackman,Simon Kimberg and Others
        this.selectedEmCseqNo = emCseqNo;
        this.selectedMovie = movieName;
        this.selectedMovieLanguage = movieLanguage;
        this.selectedStarCast = starCast;

       // alert(this.selectedEmCseqNo + '    ' + this.selectedMovie + ' ' + this.selectedMovieLanguage + '    ' + this.selectedStarCast);
    }

    this.resetMovieInfo = function () {
        // #3484~X Men~TELUGU~Hugh jackman,Simon Kimberg and Others
        this.selectedEmCseqNo = "";
        this.selectedMovie = "";
        this.selectedMovieLanguage = "";
        this.selectedStarCast = "";

       // alert(this.selectedEmCseqNo + '    ' + this.selectedMovie + ' ' + this.selectedMovieLanguage + '    ' + this.selectedStarCast);
    }

    this.setDateInfo = function (date) {
        this.selectedDate = date;
        this.selectedShowDateYYYYMMDD = "";

      //  alert(this.selectedDate + " setDateInfo " + this.selectedShowDateYYYYMMDD);
        this.resetShowInfo();
        this.resetTheatreInfo();
        this.resetClassInfo();
    }

    this.setShowDateYYYYMMDDInfo = function (showDateYYYYMMDD) {

        this.selectedShowDateYYYYMMDD = showDateYYYYMMDD;
      //  alert(" setShowDateYYYYMMDDInfo " + this.selectedShowDateYYYYMMDD);

    }

    this.resetShowDateYYYYMMDDInfo = function () {
        this.selectedShowDateYYYYMMDD = "";
        //alert(" resetShowDateYYYYMMDDInfo " + this.selectedShowDateYYYYMMDD);

    }



    this.setTheatreInfo = function (currentPropertyId, currentPropertyName, currentPropertyArea, theatre, thiatre_id) {


        this.selectedCurrentPropertyId = currentPropertyId;
        this.selectedCurrentPropertyName = currentPropertyName;
        this.selectedCurrentPropertyArea = currentPropertyArea;

        this.selectedTheatre = theatre;
        this.selectedThiatre_id = thiatre_id;

        //alert("setTheatreInfo " + this.selectedCurrentPropertyId + " - " + this.selectedCurrentPropertyName + "-" + this.selectedCurrentPropertyArea + " - " + this.selectedTheatre + "-" + this.selectedThiatre_id);

    }

    this.resetTheatreInfo = function () {


        this.selectedCurrentPropertyId = "";
        this.selectedCurrentPropertyName = "";
        this.selectedCurrentPropertyArea = "";

        this.selectedTheatre = "";
        this.selectedThiatre_id = "";

      //  alert("resetTheatreInfo " + this.selectedCurrentPropertyId + " - " + this.selectedCurrentPropertyName + "-" + this.selectedCurrentPropertyArea + " - " + this.selectedTheatre + "-" + this.selectedThiatre_id);

    }



    this.setShowInfo = function (Showtime, ShowingTime) {

        this.selectedShowtime = Showtime;
        this.selectedShowingTime = ShowingTime;

       // alert(this.selectedShowtime + " setShowInfo " + this.selectedShowingTime);
        this.resetShowDateYYYYMMDDInfo();
        this.resetClassInfo();
        this.resetSeatInfo();
        this.resetCinemaSeqNo();
    }

    this.resetShowInfo = function () {

        this.selectedShowtime = "";
        this.selectedShowingTime = "";

       // alert(this.selectedShowtime + " resetShowInfo " + this.selectedShowingTime);
    }

    this.setClassInfo = function (classDesc, dateshowNo, price) {

        this.selectedClassDesc = classDesc;
        this.selectedDateshowNo = dateshowNo;
        this.selectedSeatPrice = price;

       // alert("setClassInfo " + this.selectedClassDesc + " - " + this.selectedDateshowNo + "-" + this.selectedSeatPrice);
        this.resetSeatInfo();
        this.resetCinemaSeqNo();
    }
    this.resetClassInfo = function () {

        this.selectedClassDesc = "";
        this.selectedDateshowNo = "";
        this.selectedSeatPrice = "";
       // alert("resetClassInfo " + this.selectedClassDesc + " - " + this.selectedDateshowNo + "-" + this.selectedSeatPrice);

    }

    this.seatInfo = function (seatCount, seats, seatNosWithRow) {

        this.selectedSeatCount = seatCount;
        this.selectedSeats = seats;
        this.selectedseatNosWithRow = seatNosWithRow;
      //  alert("this.seatInfo " + this.selectedSeatCount + "-" + this.selectedSeats + "-" +
      //  this.selectedseatNosWithRow
       // );
    }
    this.setCinemaSeqNo = function (CinemaSeqNo) {
        this.selectedThCseqNo = CinemaSeqNo;
     //   alert("setCinemaSeqNo " + this.selectedThCseqNo);
    }

    this.resetSeatInfo = function () {

        this.selectedSeatCount = "";
        this.selectedSeats = "";
        this.selectedseatNosWithRow = "";
       // alert("this.seatInfo " + this.selectedSeatCount + "-" + this.selectedSeats + "-" +
       // this.selectedseatNosWithRow
       // );
    }
    this.resetCinemaSeqNo = function () {
        this.selectedThCseqNo = "";
       // alert("setCinemaSeqNo " + this.selectedThCseqNo);
    }



    this.setMovieDetails = function (city_id, city, movie, emCseqNo, movieLanguage) {

        this.city = city;
        this.city_id = city_id;
        this.movie = movie;
        this.emCseqNo = emCseqNo;
        this.movieLanguage = movieLanguage;

    }

    this.setDate = function (date) {

        this.date = date;

    }
    this.setShowDetails = function (currentPropertyId, currentPropertyName, currentPropertyArea, theatre, thiatre_id, showtime, showingTime) {

        this.currentPropertyId = currentPropertyId;
        this.currentPropertyName = currentPropertyName;
        this.currentPropertyArea = currentPropertyArea;

        this.theatre = theatre;
        this.thiatre_id = thiatre_id;
        this.showtime = showtime;
        this.showingTime = showingTime;

    }
    this.setClassDetails = function (classDesc, dateshowNo, price) {

        this.classDesc = classDesc;
        this.dateshowNo = dateshowNo;
        this.price = price;
    }

    this.resetShowDetails = function () {

        this.currentPropertyId = "";
        this.currentPropertyName = "";
        this.currentPropertyArea = "";

        this.theatre = "";
        this.thiatre_id = "";
        this.showtime = "";
        this.showingTime = "";
    }
    this.resetClassDetails = function () {

        this.classDesc = "";
        this.dateshowNo = "";
        this.price = "";
    }

    this.caluclateTotalPrice0 = function () {

        var ServicePrice = (parseFloat(this.selectedSeatCount) * parseFloat(this.REMTotChg)) + (parseFloat(this.selectedSeatCount) * parseFloat(this.REMChg));
        var ActualPrice = parseFloat(this.selectedSeatCount) * parseFloat(this.selectedSeatPrice);
        this.PriceWithServiceCharges = (parseFloat(ServicePrice)) + (parseFloat(ActualPrice));

        this.otherCharges = 0
        this.otherChargesDesc = "";

        for (i = 0; i < OtherChargesArray.length; i++) {

            if (OtherChargesArray[i] == "") {
                continue;
            }
            var ETCD = OtherChargesArray[i].split('#');
            // alert(this.thiatre_id + " " + i+" "+OtherChargesArray[i]);
            //if ((this.emCseqNo == "3522" || this.emCseqNo == "3526" && this.thiatre_id == "1")) {
            if ((this.emCseqNo == ETCD[0] && this.thiatre_id == ETCD[1])) {
                this.otherCharges = (parseFloat(this.seatCount) * parseFloat(ETCD[2]));
                this.otherChargesDesc = ETCD[3];
            }

        }
        this.TotalPrice = this.PriceWithServiceCharges + this.otherCharges;

        // return TotalPrice;
    }


    this.caluclateTotalPrice = function () {

        var ServicePrice = (parseFloat(this.selectedSeatCount) * parseFloat(this.REMTotChg)) + (parseFloat(this.selectedSeatCount) * parseFloat(this.REMChg));
        var ActualPrice = parseFloat(this.selectedSeatCount) * parseFloat(this.selectedSeatPrice);
        this.PriceWithServiceCharges = (parseFloat(ServicePrice)) + (parseFloat(ActualPrice));

        this.otherCharges = 0
        this.otherChargesDesc = "";
        //alert("s3-- " + OtherChargesArray.toString());
        var ETCDCEMCSN, ETCDCThID, ETCDCCharge, ETCDCDescription, ETCDCCityCode;

        if (OtherChargesArray != null) {
            for (i = 0; i < OtherChargesArray.length; i++) {

                if (OtherChargesArray[i] == "") {
                    continue;
                }
                else {
                    var ETCD = OtherChargesArray[i].split('#');

                    if (ETCD.length >= 2) {
                        ETCDCEMCSN = ETCD[0];
                        ETCDCThID = ETCD[1];
                    }
                    else {
                        ETCDCEMCSN = "";
                        ETCDCThID = "";
                    }

                    if (ETCD.length >= 3) {
                        ETCDCCharge = ETCD[2];
                    }
                    else {
                        ETCDCCharge = "";
                    }
                    if (ETCD.length >= 4) {
                        ETCDCDescription = ETCD[3];
                    }
                    else {
                        ETCDCDescription = "";
                    }
                    if (ETCD.length >= 5) {
                        ETCDCCityCode = ETCD[4];
                    }
                    else {
                        ETCDCCityCode = "";
                    }

                    /*
                    if (ETCD.length != 5) {

                    if ((this.emCseqNo == ETCD[0] && this.thiatre_id == ETCD[1])) {
                    this.otherCharges = (parseFloat(this.seatCount) * parseFloat(ETCD[2]));
                    this.otherChargesDesc = ETCD[3];
                    break;
                    }
                    }
                    else {

                    if ((this.emCseqNo == ETCD[0] && this.thiatre_id == ETCD[1] && this.city_id == ETCD[4])) {
                    this.otherCharges = (parseFloat(this.seatCount) * parseFloat(ETCD[2]));
                    this.otherChargesDesc = ETCD[3];
                    break;
                    }
                    }*/

                    if (ETCD.length != 5) {

                        if ((this.selectedEmCseqNo == ETCDCEMCSN && this.selectedThiatre_id == ETCDCThID)) {

                            this.otherCharges = (parseFloat(this.selectedSeatCount) * parseFloat(ETCDCCharge));
                            this.otherChargesDesc = ETCDCDescription;
                            break;
                        }
                    }
                    else {

                        if ((this.selectedEmCseqNo == ETCDCEMCSN && this.selectedThiatre_id == ETCDCThID && this.selectedCity_id == ETCDCCityCode)) {

                            this.otherCharges = (parseFloat(this.selectedSeatCount) * parseFloat(ETCDCCharge));
                            this.otherChargesDesc = ETCDCDescription;
                            break;
                        }
                    }
                }

            }
        }

        this.TotalPrice = this.PriceWithServiceCharges + this.otherCharges;

        // return TotalPrice;
    }

    this.setTheatreDetails = function (currentPropertyId, currentPropertyName, currentPropertyArea, theatre, thiatre_id, classDesc, dateshowNo, showtime, price) {

        this.currentPropertyId = currentPropertyId;
        this.currentPropertyName = currentPropertyName;
        this.currentPropertyArea = currentPropertyArea;

        this.theatre = theatre;
        this.thiatre_id = thiatre_id;
        this.classDesc = classDesc;
        this.dateshowNo = dateshowNo;
        this.showtime = showtime;
        this.price = price;
    }

    this.setUserCredentials = function (mobileNumber, Password) {

        alert('setUserCredentials');

        this.customerName = mobileNumber;
        this.customerPwd = Password;
    }

 
}
//end...

var backAndHome;

function BackAndHomeObj() {

    this.debug = false;
    this.Admin = false;

    this.previous = "homeDiv";
    this.current = "homeDiv";
    this.homeflag = true;
    this.innerHtmlText = "";

    this.isNotRedirectToCC = true;
    // (SpareDiv1, "SpareDiv1", "MessageforUser")
    // BackAndHomeObj.goForwardInnerHtml(SpareDiv1, "SpareDiv1", "CollectUserDetailsForCC");

    this.goForwardInnerHtml = function (innerHtmlText, current, next) {

        this.innerHtmlText = innerHtmlText;

        if (current == "SpareDiv1" && next == "MessageforUser") {
            this.previous = current;
            this.current = next;
        }
        if (current == "SpareDiv1" && next == "CollectUserDetailsForCC") {
            this.isNotRedirectToCC = true;
            this.previous = current;
            this.current = next;
        }


    }

    this.goBack = function () {

        document.getElementById('spareDiv').innerHTML = this.innerHtmlText;

        var movieid = bookingInfo.selectedEmCseqNo;

        //        var index = document.getElementById(movieid).selectedIndex;
        //        var val = document.getElementById(id).options[index].value;

        //var SelectMovieDl = jQuery_1_7_1('#SelectMovieDl');

        //  jQuery_1_7_1('#SelectMovieDl').selectedIndex = movieid;

        var citycode = bookingInfo.selectedCity_id;

        MoviesObj.plotMoviesData1(citycode, "#SelectMovieDl", movieid);

        bookingInfo.resetShowInfo();
        bookingInfo.resetTheatreInfo();
        bookingInfo.resetClassInfo();

    }

//     if (this.current == "homeDiv") {

//            document.getElementById('HomeWrapper').setAttribute('style', 'display:block;');
//            document.getElementById('versionDiv').setAttribute('style', 'display:block;');

//            this.current = "homeDiv";

//            this.alertAndExit();
//            // myHomeScroll.refresh();
//            myHomeScroll.scrollTo(0, -0);

//        }
//        else if (this.current == "CitiesWrapper") {


}


var changeMemInfo;

function MemNameOrEmailIdChangeFunction() {
    this.EmailId = "";
    this.user_id = "";
    this.userName = "";
    this.MobileNumber = "";

    this.TypeOfActivity = ""; //"CHANGE MEMNAME"
    this.CurrentValue = "";
    this.PreviousValue = "";

    this.InterfaceType = "NET"; //h	      
    this.Ipaddress = "124.123.4.47"; //h	        
    this.w = ""; //h
    this.h = ""; //h
    this.PNewOrOld = "OLD"; //h


    this.setChangeDetails = function (EmailId, user_id, userName, MobileNumber, PNewOrOld) {
        this.PNewOrOld = PNewOrOld; //h
        this.EmailId = EmailId;
        this.user_id = user_id;
        this.userName = userName;
        this.MobileNumber = MobileNumber;

       // alert("setChangeDetails " + this.MobileNumber);
    }

    this.setTypeOfActivitySettings = function (TypeOfActivity, CurrentValue, PreviousValue) {
        this.TypeOfActivity = TypeOfActivity; //"CHANGE MEMNAME"
        this.CurrentValue = CurrentValue;
        this.PreviousValue = PreviousValue;

        //alert("setTypeOfActivitySettings " + this.PreviousValue);
    }

    this.setCurrentValueInMyAccount = function () {
        var TypeOfActivity = this.TypeOfActivity; //"CHANGE MEMNAME"

        if (TypeOfActivity == "CHANGE MEMNAME") {
            var CurrentValue = this.CurrentValue;
            LocalPrefObj.setNameValue(CurrentValue);
        }
        else {
            var CurrentValue = this.CurrentValue;
            LocalPrefObj.setEmailIdValue(CurrentValue);
        }
    }

}