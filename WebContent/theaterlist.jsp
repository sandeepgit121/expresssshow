<%-- 
    Document   : theaterlist
    Created on : Sep 27, 2016, 12:46:45 PM
    Author     : vardhan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
       <jsp:include page="head.jsp"/>
      
      <center>  <div style="height: 50%; width: 50%; position: relative;  align:center;background-color:skyblue;">
            <table width="100%" border="1" align="center" cellpadding="6" cellspacing="0" bgcolor="#FFFFFF">
                <tbody>
                    <tr bgcolor="#FFFFFF">
                        <td colspan="8">
                            <div align="center" style="font-size: 20px;">
                                &nbsp;Expressshow Theatres List In Telangana</div>
                        </td>
                    </tr>
                    <tr bgcolor="#006666">
                        <td colspan="8">
                            <div align="center" style="font-size: 20px;">
                                Hyderabad</div>
                        </td>
                    </tr>
                    <tr bgcolor="#0066CC">
                        <td width="15" height="20" class="style10">
                            <div align="center" class="style24">
                                S.No</div>
                        </td>
                        <td height="20" class="style36">
                            <div align="center" class="style26">
                                Theatre Name
                            </div>
                        </td>
                        <td colspan="4" height="20" class="style37">
                            <div align="center" class="style26">
                                Area
                            </div>
                        </td>
                        <td height="20" class="style32">
                            <div align="center" class="style26">
                                View Map</div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            1
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Aaradhana 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style10">
                            Tarnaka
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?q=17.425421,78.533338&amp;num=1&amp;hl=en&amp;ie=UTF8&amp;t=m&amp;z=14&amp;iwloc=lyrftr:m,11249835039700950307,17.424827,78.533449&amp;ll=17.426915,78.534544&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            2
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Amba 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Mehdipatnam
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?q=17.391658,78.441315&amp;num=1&amp;hl=en&amp;ie=UTF8&amp;t=m&amp;z=14&amp;iwloc=lyrftr:m,596540701543233969,17.391655,78.44135&amp;ll=17.391778,78.441412&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            3
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Anjali Cinema
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Secunderabad
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Anjali+Cinema+Movie+Magic,+Somasundaram+Street,+Kalasiguda,+Secunderabad,+Telangana&amp;aq=0&amp;oq=Anjali+cinema+&amp;sll=17.437643,78.493881&amp;sspn=0.012713,0.013797&amp;ie=UTF8&amp;hq=Anjali+Cinema+Movie+Magic,&amp;hnear=Somasundaram+St,+Kalasiguda,+Secunderabad,+Ranga+Reddy,+Telangana&amp;ll=17.437413,78.493137&amp;spn=0.006356,0.006899&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=1147912145489106440&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            4
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asain GPR Multiplex Screen-1</div>
                        </td>
                        <td colspan="4" class="style10">
                            KPHB
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=asian+gpr+multiplex+uppal+hyderabad&amp;aq=&amp;sll=21.125498,81.914063&amp;sspn=23.829055,28.256836&amp;ie=UTF8&amp;hq=asian+gpr+multiplex&amp;hnear=Uppal,+Secunderabad,+Hyderabad,+Telangana&amp;ll=17.499042,78.390608&amp;spn=0.047887,0.055189&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=11755389027111829463&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            5
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asain GPR Multiplex Screen-2</div>
                        </td>
                        <td colspan="4" class="style10">
                            KPHB
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=asian+gpr+multiplex+uppal+hyderabad&amp;aq=&amp;sll=21.125498,81.914063&amp;sspn=23.829055,28.256836&amp;ie=UTF8&amp;hq=asian+gpr+multiplex&amp;hnear=Uppal,+Secunderabad,+Hyderabad,+Telangana&amp;ll=17.499042,78.390608&amp;spn=0.047887,0.055189&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=11755389027111829463&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            6
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asain GPR Multiplex Screen-3</div>
                        </td>
                        <td colspan="4" class="style10">
                            KPHB
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=asian+gpr+multiplex+uppal+hyderabad&amp;aq=&amp;sll=21.125498,81.914063&amp;sspn=23.829055,28.256836&amp;ie=UTF8&amp;hq=asian+gpr+multiplex&amp;hnear=Uppal,+Secunderabad,+Hyderabad,+Telangana&amp;ll=17.499042,78.390608&amp;spn=0.047887,0.055189&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=11755389027111829463&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            7
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asian Cine Square Screen-1
                            </div>
                        </td>
                        <td colspan="4" class="style10">
                            Uppal
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Asian+Cine+Square+Multiplex+-+Uppal&amp;aq=&amp;sll=17.402221,78.571998&amp;sspn=0.047913,0.055189&amp;ie=UTF8&amp;hq=Asian+Cine+Square+Multiplex+-&amp;hnear=Uppal,+Secunderabad,+Ranga+Reddy,+Telangana&amp;ll=17.402221,78.571998&amp;spn=0.011978,0.013797&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=14542732084606791350&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            8
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asian Cine Square Screen-2
                            </div>
                        </td>
                        <td colspan="4" class="style10">
                            Uppal
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Asian+Cine+Square+Multiplex+-+Uppal&amp;aq=&amp;sll=17.402221,78.571998&amp;sspn=0.047913,0.055189&amp;ie=UTF8&amp;hq=Asian+Cine+Square+Multiplex+-&amp;hnear=Uppal,+Secunderabad,+Ranga+Reddy,+Telangana&amp;ll=17.402221,78.571998&amp;spn=0.011978,0.013797&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=14542732084606791350&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            9
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asian Cine Square Screen-3</div>
                        </td>
                        <td colspan="4" class="style10">
                            Uppal
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Asian+Cine+Square+Multiplex+-+Uppal&amp;aq=&amp;sll=17.402221,78.571998&amp;sspn=0.047913,0.055189&amp;ie=UTF8&amp;hq=Asian+Cine+Square+Multiplex+-&amp;hnear=Uppal,+Secunderabad,+Ranga+Reddy,+Telangana&amp;ll=17.402221,78.571998&amp;spn=0.011978,0.013797&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=14542732084606791350&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            10
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asian Cine Square Screen-4
                            </div>
                        </td>
                        <td colspan="4" class="style10">
                            Uppal
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Asian+Cine+Square+Multiplex+-+Uppal&amp;aq=&amp;sll=17.402221,78.571998&amp;sspn=0.047913,0.055189&amp;ie=UTF8&amp;hq=Asian+Cine+Square+Multiplex+-&amp;hnear=Uppal,+Secunderabad,+Ranga+Reddy,+Telangana&amp;ll=17.402221,78.571998&amp;spn=0.011978,0.013797&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=14542732084606791350&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            11
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asian Cine Square Screen-5</div>
                        </td>
                        <td colspan="4" class="style10">
                            Uppal
                        </td>
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Asian+Cine+Square+Multiplex+-+Uppal&amp;aq=&amp;sll=17.402221,78.571998&amp;sspn=0.047913,0.055189&amp;ie=UTF8&amp;hq=Asian+Cine+Square+Multiplex+-&amp;hnear=Uppal,+Secunderabad,+Ranga+Reddy,+Telangana&amp;ll=17.402221,78.571998&amp;spn=0.011978,0.013797&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=14542732084606791350&amp;output=embed">View
                                    Map</a>
                            </div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            12
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Bhujanga 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Jeedimetla
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src=".img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=bhujanga+theatre&amp;aq=0&amp;oq=bujanga+the&amp;sll=17.437418,78.493516&amp;sspn=0.006356,0.006899&amp;ie=UTF8&amp;hq=bhujanga+theatre&amp;hnear=&amp;ll=17.512153,78.448602&amp;spn=0.012708,0.013797&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=1690339459408629678&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            13
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Bramarambha 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kukatpally
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Brahmaramba+Cinema+Hall,+Hyderabad,+Telangana&amp;aq=0&amp;oq=brahmara&amp;sll=17.987803,79.59234&amp;sspn=0.050696,0.055189&amp;ie=UTF8&amp;hq=Brahmaramba+Cinema+Hall,+Hyderabad,+Telangana&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=17553570740641455775&amp;ll=17.500135,78.386555&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            14
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Chandrakala 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Moosapet
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Chandrakala+A%2FC+70+MM,+Street+Number+4,+Moosapet,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=chandrakala&amp;sll=17.406247,78.495265&amp;sspn=0.006358,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.467649,78.429373&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            15
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Cineplanet Screen 1
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kompally
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Cine+Planet+Multiplex,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=cineplanet&amp;sll=17.467652,78.429744&amp;sspn=0.006355,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.529139,78.485841&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            16
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Cineplanet Screen 2
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kompally
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Cine+Planet+Multiplex,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=cineplanet&amp;sll=17.467652,78.429744&amp;sspn=0.006355,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.529139,78.485841&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            17
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Cineplanet Screen 3
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kompally
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Cine+Planet+Multiplex,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=cineplanet&amp;sll=17.467652,78.429744&amp;sspn=0.006355,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.529139,78.485841&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            18
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Cineplanet Screen 4
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kompally
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Cine+Planet+Multiplex,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=cineplanet&amp;sll=17.467652,78.429744&amp;sspn=0.006355,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.529139,78.485841&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            19
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Devi 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                RTC X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=devi+70mm+rtc+x+roads&amp;aq=0&amp;oq=devi+70mm+r&amp;sll=37.0625,-95.677068&amp;sspn=43.037246,56.513672&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.406248,78.495032&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            20
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Ganga 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Dilsukhnagar
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=ganga+theatre+hyderabad&amp;aq=&amp;sll=17.529138,78.485963&amp;sspn=0.006353,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=Shiva-Ganga+Theater+Rd,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=17.361031,78.522839&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            21
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Ganesh 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Shamshabad
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=ganesh+theatre+shamshabad&amp;aq=0&amp;oq=ganesh+theatre+sha&amp;sll=17.361031,78.522839&amp;sspn=0.006359,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=17.26488,78.389856&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            22
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Galaxy 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Tolichowki
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Galaxy+Theatre,+Deluxe+Colony,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=gala&amp;sll=17.26488,78.389856&amp;sspn=0.006362,0.006899&amp;ie=UTF8&amp;hq=Galaxy+Theatre,&amp;hnear=Deluxe+Colony,+Janaki+Nagar+Colony,+Toli+Chowki,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;ll=17.403398,78.411004&amp;spn=0.006358,0.006899&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=10261869193926134006&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            23
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Indra
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Karmanghat
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Indra+Cinema+Theatre,+Karmanghat,+Hyderabad,+Telangana&amp;aq=0&amp;oq=indra&amp;sll=17.345815,78.531497&amp;sspn=0.005991,0.006899&amp;ie=UTF8&amp;hq=Indra+Cinema+Theatre,&amp;hnear=Karmanghat,+Hyderabad,+Ranga+Reddy,+Telangana&amp;ll=17.345341,78.531344&amp;spn=0.002995,0.003449&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=3102804687027632703&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            24
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Kalyani MovieMax
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Bowenpally
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Kalyani+Movie+Max,+Old+Bowenpally,+Secunderabad,+Telangana,+India&amp;aq=0&amp;oq=kalyani&amp;sll=17.403401,78.411376&amp;sspn=0.006358,0.006899&amp;ie=UTF8&amp;hq=Kalyani+Movie+Max,&amp;hnear=Old+Bowenpally,+Secunderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=3476372122207040338&amp;ll=17.473743,78.479736&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            25
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Laxmikala 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Moosapet
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=lakshmikala+theatre+moosapet&amp;aq=0&amp;oq=lakshmikala+th&amp;sll=17.440438,78.468135&amp;sspn=0.203402,0.220757&amp;ie=UTF8&amp;hq=lakshmikala+theatre&amp;hnear=Moosapet,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;ll=17.46773,78.428152&amp;spn=0.025421,0.027595&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=6985824577514251352&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            26
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Manju 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Secunderabad
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=manju+theater,+Sarojini+Devi+Rd,+Kalasiguda,+Secunderabad,+Telangana,+India&amp;aq=0&amp;oq=manju+&amp;sll=17.46759,78.430281&amp;sspn=0.025421,0.027595&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=17.440471,78.493508&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            27
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Metro 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Bahadurpura X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Metro+Theater,+Bahadurpura+West,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=metro+the&amp;sll=17.440471,78.493508&amp;sspn=0.006356,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.355778,78.453727&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            28
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Mallikarjuna 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kukatpally
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=mallikarjuna+70mm+theatre&amp;aq=&amp;sll=17.355779,78.454099&amp;sspn=0.006359,0.006899&amp;ie=UTF8&amp;hq=mallikarjuna+70mm+theatre&amp;hnear=&amp;ll=17.499865,78.386599&amp;spn=0.203348,0.220757&amp;t=m&amp;z=12&amp;iwloc=A&amp;cid=8734571753380546300&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            29
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Nagendra 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Karmanghat</div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Nagendra+Cinema+Theatre,+Karmanghat,+Hyderabad,+Telangana&amp;aq=0&amp;oq=nagendra&amp;sll=17.345339,78.531346&amp;sspn=0.002995,0.003449&amp;ie=UTF8&amp;hq=Nagendra+Cinema+Theatre,&amp;hnear=Karmanghat,+Hyderabad,+Ranga+Reddy,+Telangana&amp;ll=17.345318,78.531575&amp;spn=0.023963,0.027595&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=9259026334041785759&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            30
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Padmavathi Cineplex
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kachiguda
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Padmavathi+Theatre,+Kachiguda+Station+Road,+Lingampally,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=padmava&amp;sll=17.488876,78.42041&amp;sspn=0.203348,0.220757&amp;ie=UTF8&amp;hq=Padmavathi+Theatre,&amp;hnear=Kachiguda+Station+Rd,+Lingampally,+Kachiguda,+Hyderabad,+Ranga+Reddy,+Telangana+500027,+India&amp;t=m&amp;ll=17.390633,78.491602&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            31
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Prashanth 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Secunderabad
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=prashanth+theatre+hyderabad&amp;aq=0&amp;oq=prashanth+theatre+hy&amp;sll=17.390633,78.491602&amp;sspn=0.006358,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.439508,78.498543&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            32
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                RajyaLaxmi 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Uppal
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Rajyalaxmi+Theater,+Uppal,+Hyderabad,+Andhra+Pradesh,+India&amp;aq=0&amp;oq=rajya&amp;sll=17.439516,78.498924&amp;sspn=0.006356,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=17.396636,78.560296&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            33
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Rajadhani 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Dilsukhnagar
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=rajdhani+70mm+theatre+hyderabad&amp;aq=&amp;sll=17.382863,78.543855&amp;sspn=0.050867,0.055189&amp;ie=UTF8&amp;hq=rajdhani+70mm+theatre+hyderabad&amp;hnear=&amp;radius=15000&amp;t=m&amp;ll=17.369091,78.527414&amp;spn=0.071946,0.071946&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            34
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Rajadhani Deluxe
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Dilsukhnagar
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=rajdhani+deluxe+theatre+hyderabad&amp;aq=&amp;sll=17.369091,78.527414&amp;sspn=0.101741,0.110378&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=17.369091,78.527414&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            35
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Ramakrishna 35mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Abids
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=ramakrishna++theatre+hyderabad&amp;aq=&amp;sll=17.385757,78.477192&amp;sspn=0.101732,0.110378&amp;ie=UTF8&amp;hq=ramakrishna+theatre&amp;hnear=Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;ll=17.385757,78.477192&amp;spn=0.006295,0.020854&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            36
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Ramakrishna 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Abids
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=ramakrishna+70mm+theatre+hyderabad&amp;aq=&amp;sll=17.385757,78.477192&amp;sspn=0.025433,0.027595&amp;ie=UTF8&amp;hq=ramakrishna+70mm+theatre&amp;hnear=Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=11185039822354891017&amp;ll=17.385757,78.477192&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            37
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Ranga 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Jeedimetla
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Ranga+Theatre,+Pipe+Line+Road,+Jeedimetla,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=ranga++theatre+jeedimetla&amp;sll=17.495159,78.359655&amp;sspn=0.203341,0.220757&amp;ie=UTF8&amp;hq=Ranga+Theatre,&amp;hnear=Pipe+Line+Rd,+Jeedimetla,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;ll=17.512111,78.448208&amp;spn=0.025415,0.027595&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=13231260813670456185&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            38
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Rukmini 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Patancheru
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Rukmini+Theatre,+Patancheru,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=rukmini&amp;sll=17.512778,78.455215&amp;sspn=0.025415,0.027595&amp;ie=UTF8&amp;hq=Rukmini+Theatre,&amp;hnear=Patancheru,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;ll=17.532102,78.26481&amp;spn=0.006295,0.011418&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            39
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                SaiRanga 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Miyapur
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=SAIRANGA+70mm+air+cooling+Theatre,+Mumbai+Highway,+Hafeezpet,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=sai+ranga+the&amp;sll=17.532102,78.26481&amp;sspn=0.012706,0.013797&amp;ie=UTF8&amp;hq=SAIRANGA+70mm+air+cooling+Theatre,&amp;hnear=Mumbai+Hwy,+Ambedkar+Nagar,+Hafeezpet,+Hyderabad,+Ranga+Reddy,+Telangana+500049,+India&amp;ll=17.495159,78.359655&amp;spn=0.006354,0.006899&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=15802649813727717229&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            40
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sandhya 35mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                RTC X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sandhya+35+mm+theatre+hyderabad&amp;aq=&amp;sll=17.495333,78.360028&amp;sspn=0.006354,0.006899&amp;ie=UTF8&amp;hq=sandhya+35+mm+theatre&amp;hnear=Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;ll=17.406962,78.497446&amp;spn=0.05086,0.055189&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=5502523966959194760&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            41
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sandhya 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                RTC X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sandhya++theatre+hyderabad+rtc+cross+roads&amp;aq=&amp;sll=17.406994,78.497486&amp;sspn=0.05086,0.055189&amp;ie=UTF8&amp;hq=sandhya++theatre+hyderabad+rtc+cross+roads&amp;ll=17.406962,78.497446&amp;spn=0.006357,0.006899&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=5502523966959194760&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            42
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Santosh 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Abids
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Santosh+Theatre,+Abids,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=santhosh+theatre&amp;sll=17.407076,78.497497&amp;sspn=0.006357,0.006899&amp;ie=UTF8&amp;hq=Santosh+Theatre,&amp;hnear=Abids,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;ll=17.390957,78.475991&amp;spn=0.006295,0.00658&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            43
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sapna 35mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Abids
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Sapna+Theater,+Abids+Road,+Abids,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=sapna&amp;sll=17.390957,78.475991&amp;sspn=0.006358,0.006899&amp;ie=UTF8&amp;hq=Sapna+Theater,&amp;hnear=Abids+Rd,+Abids,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;ll=17.390962,78.475996&amp;spn=0.006295,0.006295&amp;t=m&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            44
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sapthagiri 70MM
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                R.T.C Cross Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Sapthagiri+Cinema,+Hyderabad,+Telangana&amp;aq=0&amp;oq=sapth&amp;sll=17.348099,78.531003&amp;sspn=0.023963,0.027595&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.408083,78.49675&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            45
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Select Theatre
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Macha Bollaram
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=select+theatre+machabollaram&amp;aq=&amp;sll=17.406994,78.497486&amp;sspn=0.05086,0.055189&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=17.511448,78.510797&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            46
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sensation Insomnia
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Lakdi-ka-pul
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Sensation+Insomnia+Cinema+Hall,+Lakdikapul,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=sensatio&amp;sll=17.511448,78.510797&amp;sspn=0.006354,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.406969,78.464094&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            47
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sensation Sunshine
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Lakdi-ka-pul
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sensation+theatre&amp;aq=0&amp;oq=sensation+the&amp;sll=17.406984,78.464473&amp;sspn=0.006357,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.406984,78.464473&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            48
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sha
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Jeedimetla
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Sha+Theatre,+Jeedimetla+Main+Road,+Durga+Nagar,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=sha+theatre&amp;sll=17.406984,78.464473&amp;sspn=0.006357,0.006899&amp;ie=UTF8&amp;hq=Sha+Theatre,&amp;hnear=Jeedimetla+Main+Rd,+Durga+Nagar,+Chandra+Nagar,+Balanagar,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;ll=17.492249,78.452089&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            49
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Shahensha
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Jeedimetla
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Shahensha+Theater,+Jeedimetla+Main+Road,+Dee+Nagar,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=shahen&amp;sll=17.492249,78.452089&amp;sspn=0.006355,0.006899&amp;ie=UTF8&amp;hq=Shahensha+Theater,&amp;hnear=Jeedimetla+Main+Rd,+Dee+Nagar,+Quthbullapur,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;ll=17.492253,78.452092&amp;spn=0.006295,0.006295&amp;t=m&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            50
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Shalini 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kothapet X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=shalini+theatre+dilsukhnagar&amp;aq=0&amp;oq=shalini+theatre+&amp;sll=17.367609,78.536239&amp;sspn=0.101742,0.110378&amp;ie=UTF8&amp;hq=shalini+theatre&amp;hnear=Dilsukh+Nagar,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;ll=17.367609,78.536239&amp;spn=0.006295,0.02545&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            51
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Shanti
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Narayanguda
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Shanti+Theatre,+Narayanguda+Main+Road,+Narayanguda,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=shanthi+theatre&amp;sll=17.367609,78.536239&amp;sspn=0.025435,0.027595&amp;ie=UTF8&amp;hq=Shanti+Theatre,&amp;hnear=Narayanguda+Main+Rd,+Narayanguda,+Hyderabad,+Ranga+Reddy,+Telangana+500029,+India&amp;t=m&amp;ll=17.396016,78.489822&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            52
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Shashikala 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Moosapet
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=shashikala+theatre+moosapet&amp;aq=0&amp;oq=shashikala+theatre+&amp;sll=17.396016,78.489822&amp;sspn=0.006358,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=17.467741,78.428194&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            53
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Shivani 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kothapet X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Shivani+Theater,+Kothapet,+Hyderabad,+Andhra+Pradesh,+India&amp;aq=0&amp;oq=shivani+&amp;sll=17.467741,78.428194&amp;sspn=0.006355,0.006899&amp;ie=UTF8&amp;hq=Shivani+Theater,+Kothapet,+Hyderabad,+Andhra+Pradesh,+India&amp;t=m&amp;ll=17.367544,78.536265&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            54
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Shiva 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Dilsukhnagar
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Shiva-Ganga+Theater+Road,+New+Malakpet,+Hyderabad,+Telangana,+India&amp;aq=0&amp;oq=Shiva+&amp;sll=17.418882,78.524714&amp;sspn=0.203426,0.220757&amp;ie=UTF8&amp;hq=&amp;hnear=Shiva-Ganga+Theater+Rd,+New+Malakpet,+Hyderabad,+Ranga+Reddy,+Telangana,+India&amp;t=m&amp;z=14&amp;ll=17.361099,78.522717&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            55
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Shivashakti 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kapra
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=shiva+shakti+theatre+kapra+hyderabad&amp;aq=&amp;sll=17.48718,78.39567&amp;sspn=0.406699,0.441513&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=17.476486,78.562756&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            56
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sree Mayuri 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                RTC X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sri+mayuri+theatre&amp;aq=&amp;sll=17.476486,78.562756&amp;sspn=0.01271,0.013797&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.407383,78.496238&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            57
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                SreeRamana 35mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Amberpet X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sri+ramana+35mm+amberpet&amp;aq=0&amp;oq=sri+ramana+35&amp;sll=17.407383,78.49637&amp;sspn=0.006357,0.006899&amp;ie=UTF8&amp;hq=sri+ramana+35mm&amp;hnear=Amberpet,+Hyderabad,+Ranga+Reddy,+Telangana&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=11282843106712698003&amp;ll=17.392505,78.515384&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            58
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                SreeRamana 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Amberpet X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sri+ramana+70mm+amberpet&amp;aq=&amp;sll=17.392505,78.515384&amp;sspn=0.025432,0.027595&amp;ie=UTF8&amp;hq=sri+ramana+70mm&amp;hnear=Amberpet,+Hyderabad,+Ranga+Reddy,+Telangana&amp;ll=17.392467,78.515776&amp;spn=0.025432,0.027595&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=8349623620035619937&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            59
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sri LaxmiKala Mandir</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Alwal</div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sri+lakshmi+kala+mandir+theater&amp;aq=&amp;sll=17.493788,78.523064&amp;sspn=0.203342,0.220757&amp;ie=UTF8&amp;hq=sri+lakshmi+kala+mandir+theater&amp;hnear=&amp;ll=17.494852,78.511185&amp;spn=0.203342,0.220757&amp;t=m&amp;z=12&amp;iwloc=A&amp;cid=14135921733311494647&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            60
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                SriLakshmi 70MM</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Karmanghat</div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Sri+Lakshmi+Theatre,+Karmanghat,+Hyderabad,+Telangana&amp;aq=0&amp;oq=srilakshi&amp;sll=17.402674,78.572502&amp;sspn=0.011978,0.013797&amp;ie=UTF8&amp;hq=Sri+Lakshmi+Theatre,&amp;hnear=Karmanghat,+Hyderabad,+Ranga+Reddy,+Telangana&amp;ll=17.345812,78.531501&amp;spn=0.005991,0.006899&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=10595945018004392944&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            61
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                SriRama 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Bahadurpura
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sri+rama+70mm+theatre+hyderabad&amp;aq=&amp;sll=17.494115,78.523064&amp;sspn=0.203342,0.220757&amp;ie=UTF8&amp;hq=sri+rama+70mm+theatre&amp;hnear=Hyderabad,+Ranga+Reddy,+Telangana&amp;t=m&amp;z=13&amp;iwloc=A&amp;cid=10408274495488321869&amp;ll=17.354487,78.4573&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            62
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                SriSaiRaja 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Musheerabad
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sri+sai+raja+theatre&amp;aq=0&amp;oq=sri+sai+raja&amp;sll=17.354487,78.4573&amp;sspn=0.101749,0.110378&amp;ie=UTF8&amp;hq=sri+sai+raja+theatre&amp;hnear=&amp;ll=17.416336,78.499443&amp;spn=0.101715,0.110378&amp;t=m&amp;z=13&amp;iwloc=A&amp;cid=669164887485264590&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            63
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Sudarshan 35mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                RTC X Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=sudarshan+70mm+theatre+rtc+cross+roads&amp;aq=&amp;sll=17.416003,78.505383&amp;sspn=0.101715,0.110378&amp;ie=UTF8&amp;hq=sudarshan+70mm+theatre+rtc+cross+roads&amp;hnear=&amp;t=m&amp;z=12&amp;iwloc=A&amp;cid=15382611664120192198&amp;ll=17.406225,78.495625&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            64
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Tarakarama Cineplex</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kachiguda 'X' Roads
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Tarakarama+Cinema+Hall+70mm,+Hyderabad,+Andhra+Pradesh&amp;aq=0&amp;oq=Tarakarama+Ci&amp;sll=17.390491,78.487943&amp;sspn=0.101729,0.110378&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.390491,78.487943&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            65
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                UshaMayuri 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Musheerabad.
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Usha+Mayuri,+Musheerabad+Main+Road,+Zamistanpur,+Hyderabad,+Telangana&amp;aq=0&amp;oq=usha&amp;sll=17.390501,78.488324&amp;sspn=0.006358,0.006899&amp;ie=UTF8&amp;hq=Usha+Mayuri,&amp;hnear=Musheerabad+Main+Rd,+Bakaram,+Kavadiguda,+Hyderabad,+Ranga+Reddy,+Telangana&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=12414275773225009627&amp;ll=17.412214,78.497514&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            66
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Venkatramana Megaplex
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Kachiguda
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=venkataramana+cinema+kachiguda&amp;aq=0&amp;oq=venkata+ramana+cinem&amp;sll=17.412214,78.497514&amp;sspn=0.006357,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.39054,78.491286&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            67
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Venkateshwara Cineaquare
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Patancheru
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=venkateswara+cine+square+patancheru&amp;aq=&amp;sll=17.390542,78.491575&amp;sspn=0.006358,0.006899&amp;ie=UTF8&amp;hq=venkateswara+cine+square+patancheru&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=12984988624272906552&amp;ll=17.533304,78.271819&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            68
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Vijetha 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Borabanda
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Vijetha+Theatre,+Borabanda,+Hyderabad,+Telangana&amp;aq=0&amp;oq=vijetha+th&amp;sll=17.533304,78.271819&amp;sspn=0.012706,0.013797&amp;ie=UTF8&amp;hq=Vijetha+Theatre,&amp;hnear=Borabanda,+Hyderabad,+Ranga+Reddy,+Telangana&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=13153300747888616988&amp;ll=17.454194,78.419219&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            69
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Vimal 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Balanagar
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Vimal+70MM,+Shobana+Colony,+Hyderabad,+Telangana&amp;aq=0&amp;oq=vimal&amp;sll=17.454194,78.419219&amp;sspn=0.025423,0.027595&amp;ie=UTF8&amp;hq=Vimal+70MM,&amp;hnear=Shobana+Colony,+Balanagar,+Hyderabad,+Ranga+Reddy,+Telangana&amp;t=m&amp;ll=17.463701,78.451319&amp;spn=0.006295,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            70
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Viswanath 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                KPHB
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Viswanath+70+MM+A%2FC,+Raji+Reddy+Nagar,+Hyderabad,+Telangana&amp;aq=0&amp;oq=viswanath&amp;sll=17.463701,78.451319&amp;sspn=0.006356,0.006899&amp;ie=UTF8&amp;hq=Viswanath+70+MM+A%2FC,&amp;hnear=Raji+Reddy+Nagar,+Hyderabad,+Ranga+Reddy,+Telangana&amp;ll=17.496735,78.396463&amp;spn=0.006354,0.006899&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=1192905929718543377&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="skyblue">
                        <td width="15" class="style10">
                            71
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Yadagiri 70mm
                            </div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Santhosh Nagar
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Yadagiri+70+MM,+Santosh+Nagar+Road,+Santosh+Nagar,+Hyderabad,+Telangana&amp;aq=0&amp;oq=yadgiri&amp;sll=17.496878,78.396839&amp;sspn=0.006354,0.006899&amp;ie=UTF8&amp;hq=Yadagiri+70+MM,+Santosh+Nagar+Road,+Santosh+Nagar,+Hyderabad,+Telangana&amp;ll=17.346583,78.50888&amp;spn=0.00636,0.006899&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=11749321567173946445&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="red">
                        <td colspan="8">
                            <div align="center" style="font-size: 20px; color: #9900CC;">
                                Warangal</div>
                        </td>
                    </tr>
                    <tr bgcolor="red">
                        <td width="15" class="style10">
                            1
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asian Sridevi Screen 1</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Hanumakonda</div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=asian+sridevi+theater+hyderabad&amp;aq=t&amp;sll=17.346696,78.509256&amp;sspn=0.00636,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=18.004488,79.56301&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="red">
                        <td width="15" class="style10">
                            2
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asian Sridevi Screen 2</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Hanumakonda</div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=asian+sridevi+theater+hyderabad&amp;aq=t&amp;sll=17.346696,78.509256&amp;sspn=0.00636,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=18.004488,79.56301&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="red">
                        <td width="15" class="style10">
                            3
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Asian Sridevi Screen 3</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Hanumakonda</div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=asian+sridevi+theater+hyderabad&amp;aq=t&amp;sll=17.346696,78.509256&amp;sspn=0.00636,0.006899&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=18.004488,79.56301&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="red">
                        <td width="15" class="style10">
                            4
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Ram BigCinemas</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Warangal
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=ram+laxman+big+cinemas+warangal&amp;aq=&amp;sll=17.987009,79.592975&amp;sspn=0.050696,0.055189&amp;ie=UTF8&amp;hq=ram+laxman+big+cinemas&amp;hnear=Warangal,+Telangana&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=15603612852610213813&amp;ll=17.987009,79.592975&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="red">
                        <td width="15" class="style10">
                            5
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Laxman BigCinemas</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Warangal
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=ram+laxman+big+cinemas+warangal&amp;aq=&amp;sll=17.987009,79.592975&amp;sspn=0.050696,0.055189&amp;ie=UTF8&amp;hq=ram+laxman+big+cinemas&amp;hnear=Warangal,+Telangana&amp;t=m&amp;z=14&amp;iwloc=A&amp;cid=15603612852610213813&amp;ll=17.987009,79.592975&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="red">
                        <td width="15" class="style10">
                            6
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Gemini BigCinemas</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Warangal</div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Gemini+Big+Cinemas,+Swami+Vivekananda+Road,+Sherpura,+Warangal,+Telangana&amp;aq=0&amp;oq=gemini+big&amp;sll=17.987009,79.592975&amp;sspn=0.050696,0.055189&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;ll=17.987803,79.59234&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                    <tr bgcolor="red">
                        <td width="15" class="style10">
                            7
                        </td>
                        <td class="style36">
                            <div align="left" class="style10">
                                Mayuri BigCinemas</div>
                        </td>
                        <td colspan="4" class="style37">
                            <div align="left" class="style10">
                                Warangal
                            </div>
                        </td>
                        
                        <td class="style32">
                            <div class="style10">
                                <img style="width: 20px; height: 20px;" src="img/maps.png" alt="" />&nbsp<a
                                    onclick="return popup(this,'examplea')" href="https://maps.google.co.in/maps?q=mayuri+big+cinemas+warangal&amp;ie=UTF8&amp;hq=mayuri+big+cinemas&amp;hnear=Warangal,+Telangana&amp;t=m&amp;ll=17.987803,79.59234&amp;spn=0.041585,0.006295&amp;output=embed">View
                                    Map</a></div>
                        </td>
                    </tr>
                </tbody>
            </table></center>
        </div>
        
       <jsp:include page="footer.jsp"/>
    
  
   
    
   
  
    </body>
</html>
