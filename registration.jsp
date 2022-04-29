<%-- 
    Document   : registration
    Created on : Sep 27, 2016, 12:54:32 PM
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
    

    <!-- sign in Form -->
 <!-- Login Form -->
    <form action="sqlregistration.jsp" method="post">
      <input type="text" id="name" class="fadeIn second" name="name" placeholder="Full Name">
      <input type="text" id="emailid" class="fadeIn third" name="email" placeholder="E-mailid">
      <input type="text" id="mobile" class="fadeIn second" name="mobile" placeholder="mobile">
      <input type="password" id="password" class="fadeIn third" name="password" placeholder="password">
      
      <input type="submit" class="fadeIn fourth" value="Sign In">
      
    </form>
    <div id="formFooter">
      <a class="underlineHover" href="login.jsp">Already have account</a>
    </div>

  

  </div>
</div>
       
                
        <jsp:include page="footer.jsp"/>
    </body>
</html>
