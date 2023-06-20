$(document).ready(function () {
    // Navbar toggle
    const body = $("body");
    const sidebar = body.find(".sidebar");
    const toggle = body.find(".toggle");
    // const searchBtn = body.find(".search-box");
    const modeSwitch = body.find(".toggle-switch");
    const modeText = body.find(".mode-text");

    toggle.on("click", function () {
        sidebar.toggleClass("close");
    });
});

