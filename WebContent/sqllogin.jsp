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
	
	
	PreparedStatement stmt=con.prepareStatement("select mobile,password from registration where mobile=? and password=?");
	stmt.setString(1, mobile);
	stmt.setString(2, password);
	ResultSet rs=stmt.executeQuery();
	if(rs.next())
	
		response.sendRedirect("userpage.jsp");
		
	
	else
		out.println("login.jsp");
 }
catch(Exception e)
{
	out.println("somthing went wrong");
}  
	  
	
%>

</body>

</body>
</html>