




//                        function putTextfileForBlocking(RCommunicationNumber, AllTextFileContent, checkBlocking) {
//                        
//                            var params = {};

//                            params.RCommunicationNumber = RCommunicationNumber;
//                            params.AllTextFileContent = AllTextFileContent;


//                            var putReqinfo = { "putReq": params };

//                            jQuery_1_7_1.ajax({
//                                type: "POST",
//                                contentType: "application/json; charset=utf-8",
//                                url: "ServerData.asmx/putTextFileForBlocking",
//                                data: JSON.stringify(putReqinfo),
//                                dataType: "json",
//                                async: true,
//                                //cache: false,
//                                beforeSend: function () {

//                                },
//                                success: function (putReqResponse) {
//                          
//                                    if (putReqResponse.d == "DONE") {

//                                        check2(checkBlocking.Rcsstr, checkBlocking.TotalFileCount, checkBlocking.Rtcsserver);

//                                    }
//                                    else {
//                                        forWhich = "tranStatus";
//                                        showErrorInfo(errorInfo, forWhich);
//                                       // myTransactionScroll.refresh();
//                                       // myTransactionScroll.scrollTo(0, -0);
//                                    }

//                                },
//                                error: function (statusCode, errorThrown) {
//                                    if (statusCode.status == 0) {
//                                        alert("you're offline");
//                                       // showAndroidToast("you're offline");
//                                    }
//                                },
//                                complete: function (transport) {

//                                }
//                            });
//                        }




//                        



//                        var Var1;
//                        var msg;
//                        var process = false;
//                        var timeoutCount = 0;

//                      


//                       

//                        function plotTranscationDeatails(userData) {


//                            var User_Id = dataBetween(userData, "AUSERID=", "ZUSERID");
//                            var ThId = dataBetween(userData, "ATHID=", "ZTHID");
//                            // UserImage.ImageUrl = "http://202.63.106.71/WebDataForNewSite/getimage.aspx?user_id=" + EncryptData(User_Id);
//                            var Name = dataBetween(userData, "ACUSTOMERNAME=", "ZCUSTOMERNAME");
//                            var LThName = dataBetween(userData, "ATHEATRENAME=", "ZTHEATRENAME");
//                            var LMv = dataBetween(userData, "ACINEMANAME=", "ZCINEMANAME");


//                            var Ldt = dataBetween(userData, "ASHOWDATE=", "ZSHOWDATE");
//                            var showtime = dataBetween(userData, "ASHOWTIME=", "ZSHOWTIME");
//                            // var LshN = dataBetween(userData, "ASHOWNAME=", "ZSHOWNAME") + "(" + format12(showtime) + ")"; ;
//                            var LshN = "(" + format12(showtime) + ")";
//                            var Lshcls = dataBetween(userData, "ACLASSDESC=", "ZCLASSDESC");
//                            var LNoTic = dataBetween(userData, "ANOTICK=", "ZNOTICK");
//                            var ticAmt = dataBetween(userData, "ATICKPRICE=", "ZTICKPRICE");

//                            // ACLASSDESC=MAHARAJACIRCLEZCLASSDESC

//                            var EMCHARGE = dataBetween(userData, "AEMCHARGE=", "ZEMCHARGE");
//                            var EMTOTALCHARGE = dataBetween(userData, "AEMTOTALCHARGE=", "ZEMTOTALCHARGE");

//                            var Lamt = caluclateTotalPrice(LNoTic, ticAmt, EMCHARGE, EMTOTALCHARGE);

//                            var Ltrans = dataBetween(userData, "ARESNO=", "ZRESNO");

//                            var city = dataBetween(userData, "ACITYCODE=", "ZCITYCODE");
//                            if (city == "1") {
//                                LCity = "Hyderabad";
//                            }
//                            else if (city == "20") {
//                                LCity = "Warangal";
//                            }
//                            else if (city == "9") {
//                                LCity = "Kakinada";
//                            }

//                            var LsysTime = new Date();

//                            LSeatIndexes = dataBetween(userData, "ASEATNOSTOSHOW=", "ZSEATNOSTOSHOW");


//                            var spanName = document.getElementById('Name');
//                            while (spanName.firstChild) {
//                                spanName.removeChild(spanName.firstChild);
//                            }
//                            spanName.appendChild(document.createTextNode(Name));

//                            var spanLtrans = document.getElementById('Ltrans');
//                            while (spanLtrans.firstChild) {
//                                spanLtrans.removeChild(spanLtrans.firstChild);
//                            }
//                            spanLtrans.appendChild(document.createTextNode(Ltrans));

//                            var spanLThName = document.getElementById('LThName');
//                            while (spanLThName.firstChild) {
//                                spanLThName.removeChild(spanLThName.firstChild);
//                            }
//                            spanLThName.appendChild(document.createTextNode(LThName));

//                            var spanLCity = document.getElementById('LCity');
//                            while (spanLCity.firstChild) {
//                                spanLCity.removeChild(spanLCity.firstChild);
//                            }
//                            spanLCity.appendChild(document.createTextNode(LCity));

//                            var spanLMv = document.getElementById('LMv');
//                            while (spanLMv.firstChild) {
//                                spanLMv.removeChild(spanLMv.firstChild);
//                            }
//                            spanLMv.appendChild(document.createTextNode(LMv + " (" + bookingInfo.movieLanguage + ")"));


//                            var spanLdt = document.getElementById('Ldt');
//                            while (spanLdt.firstChild) {
//                                spanLdt.removeChild(spanLdt.firstChild);
//                            }
//                            spanLdt.appendChild(document.createTextNode(Ldt));

//                            var spanLshN = document.getElementById('LshN');
//                            while (spanLshN.firstChild) {
//                                spanLshN.removeChild(spanLshN.firstChild);
//                            }
//                            spanLshN.appendChild(document.createTextNode(LshN));

//                            var spanLshcls = document.getElementById('Lshcls');
//                            while (spanLshcls.firstChild) {
//                                spanLshcls.removeChild(spanLshcls.firstChild);
//                            }
//                            spanLshcls.appendChild(document.createTextNode(Lshcls));

//                            var spanLNoTic = document.getElementById('LNoTic');
//                            while (spanLNoTic.firstChild) {
//                                spanLNoTic.removeChild(spanLNoTic.firstChild);
//                            }
//                            spanLNoTic.appendChild(document.createTextNode(LNoTic));

//                            var spanLSeatIndexes = document.getElementById('LSeatIndexes');
//                            while (spanLSeatIndexes.firstChild) {
//                                spanLSeatIndexes.removeChild(spanLSeatIndexes.firstChild);
//                            }
//                            spanLSeatIndexes.appendChild(document.createTextNode(LSeatIndexes));

//                            var spanLamt = document.getElementById('Lamt');
//                            while (spanLamt.firstChild) {
//                                spanLamt.removeChild(spanLamt.firstChild);
//                            }
//                            // spanLamt.appendChild(document.createTextNode(Lamt));
//                            spanLamt.appendChild(document.createTextNode(bookingInfo.TotalPrice));

//                        }



//                        function caluclateTotalPrice(seatCount, price, EMCHARGE, EMTOTALCHARGE) {

//                            var ServicePrice = (parseFloat(seatCount) * parseFloat(EMTOTALCHARGE)) + (parseFloat(seatCount) * parseInt(EMCHARGE));
//                            var ActualPrice = parseFloat(seatCount) * parseFloat(price);
//                            TotalPrice = (parseFloat(ServicePrice)) + (parseFloat(ActualPrice));

//                            return TotalPrice;
//                        }

//                        function format12(time) {

//                            var hh = time.substr(0, 2);
//                            var m = time.substr(2, 2);

//                            var dd = "AM";

//                            hh = (hh.substr(0, 1) == 0) ? hh.substr(1, 1) : hh;

//                            var h = hh;

//                            if (h >= 12) {
//                                h = hh - 12;
//                                dd = "PM";
//                            }
//                            if (h == 0) {
//                                h = 12;
//                            }

//                            return replacement = h + ":" + m + " " + dd;
//                        }


//                        function dataBetween(Text, FirstString, LastString) {
//                            var i, j;

//                            FirstString = FirstString.toUpperCase();
//                            LastString = LastString.toUpperCase();
//                            Text = Text.toUpperCase();

//                            if ((FirstString == "") || (LastString == "")) {
//                                return '';
//                            };

//                            i = Text.indexOf(FirstString);
//                            if (i >= 0) {
//                                Text = Text.substring(i + FirstString.length);
//                            }
//                            else {
//                                return '';
//                            }

//                            if (LastString) {
//                                i = Text.indexOf(LastString);
//                                if (i >= 0) {
//                                    Text = Text.substring(0, i);
//                                }
//                                else {
//                                    return '';
//                                }
//                            }
//                            return Text;
//                        }
//                        
//                       
//                        ///////////////////////////////////////////////////////////////////
//                        /////////////////////////////////////////////////////////////////
//                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////