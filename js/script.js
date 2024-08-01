$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // get all slides
    var slides = document.querySelectorAll("section.plane");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
});

function setColor(e){
    if(e.type==="mouseover"){
        console.log('sdsd')
        tst.classList.add('open_plan')
    }else if( e.type==="mouseout"){
        tst.classList.remove('open_plan')
    }
}
const langPlanBar = document.querySelector('.btn-lang')
const tst = document.querySelector('.lang__plan')

langPlanBar.addEventListener("mouseover", setColor);
tst.addEventListener("mouseover", setColor);
langPlanBar.addEventListener("mouseout", setColor);
tst.addEventListener("mouseout", setColor);





// function openBar() {
//     langPlanBar.classList.toggle('open_plan')
//     console.log(langPlanBar)
// }