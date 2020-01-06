/* -------------------------------------------------------------------------- */
/*                              Button Variables                              */
/* -------------------------------------------------------------------------- */
const randomButton  = document.getElementById("randomButton")
const loremButton   = document.getElementById("loremButton");
const skateButton   = document.getElementById("skateButton");
const pirateButton  = document.getElementById("pirateButton");
const cakeButton    = document.getElementById("cakeButton");
const baconButton   = document.getElementById("baconButton");
const fillerButton  = document.getElementById("fillerButton");
const cheeseButton  = document.getElementById("cheeseButton");
const hipsterButton = document.getElementById("hipsterButton");
const saganButton   = document.getElementById("saganButton");
const officeButton  = document.getElementById("officeButton");
const zombieButton  = document.getElementById("zombieButton");
const catButton     = document.getElementById("catButton");
const bluthButton   = document.getElementById("bluthButton");
const legalButton   = document.getElementById("legalButton");
const litButton     = document.getElementById("litButton");
const monoButton    = document.getElementById("monoButton");
const dateButton    = document.getElementById("dateButton");
const contactButton = document.getElementById("contactButton");

/* -------------------------------------------------------------------------- */
/*                        Button Objects (Button , URL)                       */
/* -------------------------------------------------------------------------- */
const lorem    = {button: loremButton,   url: "https://loremipsum.io/"};
const skate    = {button: skateButton,   url: "http://skateipsum.com/"};
const pirate   = {button: pirateButton,  url: "https://pirateipsum.me/"};
const cake     = {button: cakeButton,    url: "http://www.cupcakeipsum.com/"};
const bacon    = {button: baconButton,   url: "https://baconipsum.com/"}
const filler   = {button: fillerButton,  url: "http://fillerama.io/"};
const cheese   = {button: cheeseButton,  url: "http://www.cheeseipsum.co.uk/"};
const hipster  = {button: hipsterButton, url: "https://hipsum.co/"};
const sagan    = {button: saganButton,   url: "http://saganipsum.com/"};
const office   = {button: officeButton,  url: "http://officeipsum.com/"};
const zombie   = {button: zombieButton,  url: "http://www.zombieipsum.com/"};
const cat      = {button: catButton,     url: "http://www.catipsum.com/"};
const bluth    = {button: bluthButton,   url: "https://bluthipsum.com/"};
const legal    = {button: legalButton,   url: "http://legalipsum.com/"};
const lit      = {button: litButton,     url: "https://litipsum.com/"};
const mono     = {button: monoButton,    url: "http://www.monocleipsum.com/"};
const date     = {button: dateButton,    url: "https://laurenhallden.com/datingipsum/"};
const contact  = {button: contactButton, url: "contact.html"};


/* -------------------------------------------------------------------------- */
/*                                    Logic                                   */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

    //jQuery fadeIn buttons
    $(".hidden").fadeIn(750, () => {
        $(this).css("display", "normal");
    }); 
    
    //Create 'buttons' array:
    let buttons = [];

    //Push all objects into 'buttons' array:
    buttons.push(lorem, skate, pirate, cake, bacon, filler, cheese, hipster, sagan, office, zombie, cat, bluth, legal, lit, mono, date);

    //Iterate over 'buttons' array:
    buttons.forEach((button) => {
        var a = button.button;
        var b = button.url;
        //Listen for click:
        a.addEventListener("click", () => {
            //Go to assocaited url:
            chrome.tabs.create({ url: b });
        });
    });

    //Pick a button at random:
    randomButton.addEventListener("click", () => {
       var choice = buttons[Math.floor(Math.random() * buttons.length)];
       //var a = choice.button;
       var b = choice.url;
       chrome.tabs.create({ url: b });
    });
    
    //Contact button:
    contactButton.addEventListener("click", () => {
        //var a = contact.button;
        var b = contact.url;
        window.location.href = b;
    });
    

});

