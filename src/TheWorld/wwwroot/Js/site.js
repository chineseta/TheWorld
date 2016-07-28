//site js
(function () {
    //var ele = $("#username");
    //ele.text("jack");

    //var main = $("#main");
    //main.on("mouseenter", function () {
    //    main.style = "background-color : #888";

    //});

    //main.on("mouseleave", function () {
    //    main.style = "";
    //});

    //var menItems = $("ul.menu li a");
    //menItems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //});
    var $sidebarAndWrapper = $("#sidebar,#wrapper");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }


    });

})();