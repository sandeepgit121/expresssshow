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
    <form action="sqllogin.jsp" method="post">
      <input type="text" id="mobile" class="fadeIn second" name="mobile" placeholder="mobile">
      <input type="password" id="password" class="fadeIn third" name="password" placeholder="password">
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="forgot.jsp">Forgot Password?</a>
    </div>

  </div>
</div>
       
           
   <jsp:include page="footer.jsp"/>
      
    </body>
</html>
