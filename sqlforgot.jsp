<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@ page import="java.sql.*"%>
<%

String mobile=request.getParameter("mobile");
String password=request.getParameter("password");


try{  
	 
	Class.forName("oracle.jdbc.driver.OracleDriver");  
	  
	 
	Connection con=DriverManager.getConnection(  
	"jdbc:oracle:thin:@localhost:1521:xe","HR","hr"); 
	
}

catch(Exception e)
{
	out.println("somthing went wrong");
}  
	  
	
%>

</body>
</html>