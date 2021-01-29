// Manual namespacing with anonymous scope.
// This isn't nesissary once we use a toolchain
// that provides JavaScript modules.
(function() {
    "use strict";

    function onButtonPress() {
        let ps = document.getElementsByTagName("th");
        ps = Array.from(ps);
        //ps.forEach(function(p) {
        //    p.innerText = "hello";
        //});
        alert("doing work...");

        ps.forEach((p) => {
            p.innerText = "7";
        });
    }

    function init() {
        let btn = document.querySelector("#seven");
        btn.addEventListener("click", onButtonPress);
    }

    window.addEventListener("load", init, false);
})()