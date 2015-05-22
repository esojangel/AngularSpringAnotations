<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" data-ng-app="app">

<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
   <meta name="description" content="{{app.description}}">
   <meta name="keywords" content="">
   <title data-ng-bind="pageTitle()">AngularSpringSeed</title>
   <link rel="stylesheet" href="public/app/css/app.css" data-ng-if="!app.layout.isRTL">
   <link rel="stylesheet" href="public/app/css/app-rtl.css" data-ng-if="app.layout.isRTL">
</head>

<body data-ng-class="{ 'layout-fixed' : app.layout.isFixed, 'aside-collapsed' : app.layout.isCollapsed, 'layout-boxed' : app.layout.isBoxed, 'layout-fs': app.useFullLayout, 'hidden-footer': app.hiddenFooter }">
   <div data-ui-view="" data-autoscroll="false" data-ng-class="mainViewAnimation" class="wrapper"></div>
   <script src="public/app/js/base.js"></script>
   <script src="public/app/js/app.js"></script>
   <script src="public/app/js/angle.js"></script>
   <script src="public/app/js/constants.js"></script>
</body>

</html>