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
 String name=request.getParameter("name");
String email=request.getParameter("email");
String mobile=request.getParameter("mobile");
String password=request.getParameter("password");


try{  
	 
	Class.forName("oracle.jdbc.driver.OracleDriver");  
	  
	 
	Connection con=DriverManager.getConnection(  
	"jdbc:oracle:thin:@localhost:1521:xe","HR","hr"); 
	
	
	//step3 create the statement object  
PreparedStatement stmt=con.prepareStatement("insert into Registration(name,email,mobile,password)values('"+name+"','"+email+"','"+mobile+"','"+password+"')");
	  int i=stmt.executeUpdate();
out.println(i+"data inserted successfully inserted");
	  
	//step5 close the connection object  
	con.close();  
	  
	}catch(Exception e){ System.out.println(e);}  
	  
	
%>

</body>
</html>