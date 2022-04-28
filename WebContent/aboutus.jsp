<%-- 
    Document   : aboutus
    Created on : Sep 27, 2016, 12:52:32 PM
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
        
        <div id="AboutUs" style="display: none;">
      
                 <div style="width: 900px; height: 500px; background-color: White; overflow: scroll;
            font-family: 'PT Sans Narrow', sans-serif;">
            <div align="left" style="margin: auto; width: 90%; padding:1%;height:95%; background-color: #F5F6CE; font-family: 'PT Sans Narrow', sans-serif;">
                <table align="center">
                    <tr>
                        <td align="center">
                            <h2>
                                About US</h2>
                        </td>
                    </tr>
                </table>
                <p>EasyMovies is an Online Movie Ticketing portal developed and serviced by 
BeyondBasiks Infotech Pvt.Ltd, established in Hyderabad. During our existence, 
we have developed expertise in various technologies on the platforms of Client-Server Technologies, Internet Technologies, IVR Technologies and Cloud Computing.</p>
                <p>EasyMovies! Online Movie ticketing service can be accessed to Cinegoers through different methods i.e., </p>                                
                <ul style="list-style-type: none;">
                    <li>A.)Mobile Applications (Android, IOS, Windows)
                    </li>
                    <li>B.) Internet (www.easymovies.in) buy tickets using Credit Card or Prepaid user

   (Payment gateway partners CCAvenue / PAYU )

                    </li>
                    <li>C.) IVR 040-27654321(24 Hrs Computerized IVR) with100+ Telephone Lines

                    </li>                
                    <li>D.) Ticket Printing Kiosks in theatres, where cinegoers can print their tickets.
                    </li>
                </ul>
            </div>
        </div>
  
    </div>



        <jsp:include page="footer.jsp"/>
        
    </body>
</html>
