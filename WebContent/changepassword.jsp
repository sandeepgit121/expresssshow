<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
   <jsp:include page="head.jsp"/>
     
          <div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    

    <!-- Login Form -->
    <form action="sqlchangepassword.jsp" method="post">
      <input type="password" id="mobile" class="fadeIn second" name="password" placeholder="currentpassword">
      <input type="password" id="password" class="fadeIn third" name="pwd" placeholder="newpassword">
      <input type="password" id="password" class="fadeIn third" name="pwd" placeholder="reenter newpassword">
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>

    
    

  </div>
</div>
       
           
   <jsp:include page="footer.jsp"/>
</body>
</html>