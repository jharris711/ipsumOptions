/* -------------------------------------------------------------------------- */
/*                              Button Variables                              */
/* -------------------------------------------------------------------------- */
const emailButton  = document.getElementById("emailButton");
const linkedButton = document.getElementById("linkedButton");
const backButton   = document.getElementById("backButton");

/* -------------------------------------------------------------------------- */
/*                        Button Objects (Button , URL)                       */
/* -------------------------------------------------------------------------- */
const linked = {button: linkedButton,  url: "https://www.linkedin.com/in/joshsharris/"}
const back   = {button: backButton,    url: "popup.html"};

/* -------------------------------------------------------------------------- */
/*                                    Logic                                   */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

    //jQuery fadeIn buttons
    $(".hidden").fadeIn(750, () => {
        $(this).css("display", "normal");
    });

    emailButton.addEventListener("click", () => {
        chrome.tabs.create ({ url: "mailto:js.harris711@gmail.com?subject=Support,%20suggestions,%20or%20something%20else&body=Ask%20me%20something!" });
    });

    linkedButton.addEventListener("click", () => {
        //var a = linked.button;
        var b = linked.url;
        chrome.tabs.create({ url: b });
    });

    //Back button on contact page:
    backButton.addEventListener("click", () => {
        //var a = back.button;
        var b = back.url;
        window.location.href = b;
    });

});

