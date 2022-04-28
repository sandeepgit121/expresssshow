<%-- 
    Document   : login
    Created on : Sep 27, 2016, 12:56:17 PM
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
     
          <div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    

    <!-- Login Form -->
    <form action="sqlforgot.jsp">
      <input type="text" id="login" class="fadeIn second" name="email" placeholder="email">
      <input type="submit" class="fadeIn fourth" value="submit">
    </form>


  </div>
</div>
       
           
   <jsp:include page="footer.jsp"/>
      
    </body>
</html>
