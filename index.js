gsap.to(".whatwedo",{
    scrollTrigger:{
        trigger:"#page2",
        scrub:1,
        // markers:true,
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last"
    },
    y:"-500%",
    ease:Power1,
})
let time = gsap.timeline()
function counting(){
    let count= 0;
    setInterval(() => {
        count++
        count=Math.floor(count+Math.random()*5)
    if (count<=100) {
        document.querySelector(".loadin_num").innerHTML=`${count}%`
        
    } else {
        count=100
        document.querySelector(".loadin_num").innerHTML=count+"%";
        
    }
    }, 100);

}
time.to("#loading-ani",{
    yPercent: -150, 
    duration:3,
    delay:4,
    onStart:counting()
})
time.from("#content_main h1", {
    y: 20,
    opacity:0,
    delay:-1,
    duration: 2,
});
time.from(".content img", {
    scale:0,
    // opacity:0,
    delay:-1,
    scrollTrigger:{
        Trigger:"#page2",
        scroller:"body",
    },
    // stagger:0.3,
    duration: 4,
});
gsap.to("#content_main h5", {
    y: 40,
    yoyo:true,
    repeat:-1,
    delay:0,
    duration: 2,
});
gsap.to(".text-animation .translate", {
    transform:"TranslateX(-120%)",
    duration: 2,
    scrollTrigger:{
        Trigger:"#page1",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:2,
        // pin:true
    }
});

function vide(){
let vid = document.querySelector("video");
vid.playbackRate = 0.5;
}
vide()




