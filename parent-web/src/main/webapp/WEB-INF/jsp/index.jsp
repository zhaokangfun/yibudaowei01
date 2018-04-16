<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>haha</title>
</head>
<body>
	<select>
	<c:forEach items="${list}" var="l">
  <option value ="${l.banciid}">${l.banciname}</option>
</c:forEach>
</select>

	<c:forEach items="${list}" var="l">
		<p>${l.banciname}</p>
	</c:forEach>
</body>
</html>