var maxOddTrigger = 26.00;
var elementToObserve = document.getElementsByClassName("ipo-Competition ipo-Competition-open ");
var statsHtmlElement = document.getElementsByClassName("ipo-MainMarkets ");
var oddsSpan = document.getElementsByClassName("gl-ParticipantCentered_Odds");
var counter = 0;

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        for (let i = 0; i < statsHtmlElement.length; i++) {

            for (let y = 1; y < statsHtmlElement[i].childNodes.length - 1; y++) { // just for next goal 

                statsHtmlElement[i].childNodes[y].childNodes.forEach(el => {
                    counter++;
                    if (el.childNodes[1] != undefined) {
                        if (Number.parseFloat(el.childNodes[1].innerText) >= maxOddTrigger) {
                            //el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"}); 
                            el.style = "background-color: red !important;"

                            console.log(el.childNodes[1].innerText);
                        }
                        else {
                            el.style.cssText = null
                        }
                    }
                });
            }
        }
    });
});

var config = {
    characterData: true,
    subtree: true
};

for (let i = 0; i < statsHtmlElement.length; i++) {
    observer.observe(statsHtmlElement[i], config);
}
