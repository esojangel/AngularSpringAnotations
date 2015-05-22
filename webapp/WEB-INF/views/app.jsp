<%@ include file="/WEB-INF/views/include.jsp"%>
<!-- top navbar-->
<header class="topnavbar-wrapper">
	<%@ include file="/WEB-INF/views/partials/top-navbar.html"%>
</header>
<!-- sidebar-->
<aside ng-controller="SidebarController" class="aside">
	<%@ include file="/WEB-INF/views/partials/sidebar.html"%>
</aside>
<!-- offsidebar-->
<aside class="offsidebar">
	<%@ include file="/WEB-INF/views/partials/offsidebar.jsp"%>
</aside>
<!-- Main section-->
<section>
   <!-- Page content-->
   <div ui-view="" autoscroll="false" ng-class="app.viewAnimation" class="content-wrapper"></div>
</section>
<!-- Page footer-->
<footer >
	<%@ include file="/WEB-INF/views/partials/footer.html"%>
</footer>