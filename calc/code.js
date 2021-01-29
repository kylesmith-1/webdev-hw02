// Manual namespacing with anonymous scope.
// This isn't nesissary once we use a toolchain
// that provides JavaScript modules.
(function() {
    "use strict";

    function Value(val) {
        this.val = val;
    }

    function numPress(num) {
        let ps = document.getElementsByTagName("th");
        ps = Array.from(ps);

        ps.forEach((p) => {
            if (p.innerText === "0") {
                p.innerText = num;
            }
            else {
                p.innerText += num;
            }
        });
    }
    
    function onSevenPress() {
        numPress(7);
    }

    function onEightPress() {
        numPress(8);
    }

    function onNinePress() {
        /*let ps = document.getElementsByTagName("th");
        ps = Array.from(ps);

        ps.forEach((p) => {
            p.innerText = p.innerText + "9";
            if (document.querySelector("#plusequals").className === "activeOpButton") {
                res.val += 9;
            }
        });

        document.querySelector("#plusequals").className = "";*/
        numPress(9);
    }

    function onFourPress() {
        numPress(4);
    }

    function onFivePress() {
        numPress(5);
    }

    function onSixPress() {
        numPress(6);
    }

    function onOnePress() {
        numPress(1);
    }

    function onTwoPress() {
        numPress(2);
    }

    function onThreePress() {
        numPress(3);
    }

    function onZeroPress() {
        numPress(0);
    }

    function onPEPress() {
        document.querySelector("#plusequals").className = "activeOpButton";
        let ps = document.getElementsByTagName("th");
        ps = Array.from(ps);

        ps.forEach((p) => {
            p.innerText = res.val
        });
    }

    function onClearPress() {
        let ps = document.getElementsByTagName("th");
        ps = Array.from(ps);

        ps.forEach((p) => {
            p.innerText = 0;
            res.val = 0;
        });
    }

    function onDecPress() {
        let ps = document.getElementsByTagName("th");
        ps = Array.from(ps);

        ps.forEach((p) => {
            if (!(p.innerText.includes("."))) {
                p.innerText += ".";
            }
        });
    }

    function init() {
        let seven = document.querySelector("#seven");
        seven.addEventListener("click", onSevenPress);

        let eight = document.querySelector("#eight");
        eight.addEventListener("click", onEightPress);

        let nine = document.querySelector("#nine");
        nine.addEventListener("click", onNinePress);

        let four = document.querySelector("#four");
        four.addEventListener("click", onFourPress);

        let five = document.querySelector("#five");
        five.addEventListener("click", onFivePress);

        let six = document.querySelector("#six");
        six.addEventListener("click", onSixPress);

        let one = document.querySelector("#one");
        one.addEventListener("click", onOnePress);

        let two = document.querySelector("#two");
        two.addEventListener("click", onTwoPress);

        let three = document.querySelector("#three");
        three.addEventListener("click", onThreePress);

        let zero = document.querySelector("#zero");
        zero.addEventListener("click", onZeroPress);

        let plusequals = document.querySelector("#plusequals");
        plusequals.addEventListener("click", onPEPress);

        let clear = document.querySelector("#clear");
        clear.addEventListener("click", onClearPress);

        let dec = document.querySelector("#dec");
        dec.addEventListener("click", onDecPress);
    }

    window.addEventListener("load", init, false);
    let res = new Value(0);
})()

//notes: WHEN YOU DO AN OPERATION, KEEP OLD NUM IN TEXT BOX, do something to plus
// possible oldval + operation in JS??
