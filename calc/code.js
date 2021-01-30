// Loosely templated from this lecture note code: https://github.com/NatTuck/scratch-2021-01/blob/master/4550/0126/code.js
// Though there is little final resemblance. 
(function () {
    "use strict";

    function Value(val, isNewVal) {
        this.val = val;
        this.isNewVal = isNewVal;
    }

    function numPress(num) {
        if (document.querySelector("#results").innerText === "0" || res.isNewVal) {
            document.querySelector("#results").innerText = num;
            res.isNewVal = false;
        }
        else {
            document.querySelector("#results").innerText = parseFloat(document.querySelector("#results").innerText + parseFloat(num));
        }
    }

    function deactivateOps() {
        document.querySelector("#minus").className = "";
        document.querySelector("#plusequals").className = "";
        document.querySelector("#mult").className = "";
        document.querySelector("#divide").className = "";
    }

    function onSevenPress() {
        numPress(7);
    }

    function onEightPress() {
        numPress(8);
    }

    function onNinePress() {
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

    function onClearPress() {
        document.querySelector("#results").innerText = "0";
        res.val = 0;
        deactivateOps();
    }

    function onDecPress() {
        if (!(document.querySelector("#results").innerText.includes("."))) {
            document.querySelector("#results").innerText += ".";
        }
    }

    function updateResBasedOnOp() {
        if (document.querySelector("#plusequals").className === "activeOpButton" && !(res.isNewVal)) {
            res.val = parseFloat(res.val) + parseFloat(document.querySelector("#results").innerText)
        }
        else if (document.querySelector("#minus").className === "activeOpButton" && !(res.isNewVal)) {
            res.val -= document.querySelector("#results").innerText;
        }
        else if (document.querySelector("#mult").className === "activeOpButton" && !(res.isNewVal)) {
            res.val *= document.querySelector("#results").innerText;
        }
        else if (document.querySelector("#divide").className === "activeOpButton" && !(res.isNewVal)) {
            res.val /= document.querySelector("#results").innerText;
        }
        else { //none currently selected 
            res.val = document.querySelector("#results").innerText;
        }
        res.isNewVal = true
    }

    function onPEPress() {
        updateResBasedOnOp();
        deactivateOps();
        document.querySelector("#plusequals").className = "activeOpButton";
        document.querySelector("#results").innerText = res.val;
    }

    function onMinusPress() {
        res.isNewVal = true;
        res.val = document.querySelector("#results").innerText;
        deactivateOps();
        document.querySelector("#minus").className = "activeOpButton";
    }

    function onMultPress() {
        res.isNewVal = true;
        res.val = document.querySelector("#results").innerText;
        deactivateOps();
        document.querySelector("#mult").className = "activeOpButton";
    }

    function onDividePress() {
        res.isNewVal = true;
        res.val = document.querySelector("#results").innerText;
        deactivateOps();
        document.querySelector("#divide").className = "activeOpButton";
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

        let clear = document.querySelector("#clear");
        clear.addEventListener("click", onClearPress);

        let dec = document.querySelector("#dec");
        dec.addEventListener("click", onDecPress);

        let plusequals = document.querySelector("#plusequals");
        plusequals.addEventListener("click", onPEPress);

        let minus = document.querySelector("#minus");
        minus.addEventListener("click", onMinusPress);

        let mult = document.querySelector("#mult");
        mult.addEventListener("click", onMultPress);

        let divide = document.querySelector("#divide");
        divide.addEventListener("click", onDividePress);
    }

    window.addEventListener("load", init, false);
    let res = new Value(0);
})()
