/*=======================
----TABLE OF CONTENTS----
1.  OPEN TRIGGER
2.  CLOSE TRIGGER
3.  NAVIGATION
4.  TIMELINE
5.  OPEN TIMELINE
6.  CLOSE TIMELINE
========================*/

//OPEN TRIGGER
var trigger = $('.nav-toggle__icon');

var openTriggerTop = trigger.find('.open--top');
var openTriggerMiddle = trigger.find('.open--middle');
var openTriggerBottom = trigger.find('.open--bottom');

//CLOSE TRIGGER
var closeTriggerLeft = trigger.find('.close--left');
var closeTriggerRight = trigger.find('.close--right');

//NAVIGATION
var navContainer = $('.nav-menu');
var navMenu = $('.nav');
var navTop = $('.av-menu__bkgd.top');
var navMiddle = $('.av-menu__bkgd.middle');
var navBottom = $('.av-menu__bkgd.bottom');

//TIMELINE
var tlOpen = new TimelineMax({paused: true});
var tlClose = new TimelineMax({paused: true});

//OPEN TIMELINE
tlOpen.add("preOpen")
.to(openTriggerTop, 0.4, {
  x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
    trigger.css('z-index','25');
  }
}, "preOpen")
.to(openTriggerMiddle, 0.4, {
  x: "+=80px", y: "-=80px", ease: Power4.easeIn,
}, "preOpen")
.to(openTriggerBottom, 0.4, {
  x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
}, "preOpen")
.add("open", "-=0.4")
.to(navTop, 0.8, {
  y: "13%",
  ease: Power4.easeInOut
}, "open")
.to(navMiddle, 0.8, {
  scaleY: 1,
  ease: Power4.easeInOut
}, "open")
.to(navBottom, 0.8, {
  y: "-114%",
  ease: Power4.easeInOut
}, "open")
.fromTo(navMenu, 0.6, {
  y: 30, opacity: 0, visibility: 'hidden'
}, {
  y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
}, "-=0.2")
.add("preClose", "-=0.8")
.to(closeTriggerLeft, 0.8, {
  x: "-=100px", y: "+=100px", ease: Power4.easeOut
}, "preClose")
.to(closeTriggerRight, 0.8, {
  x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
}, "preClose");

//CLOSE TIMELINE
tlClose.add("close")
  .to(navTop, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut, onComplete: function() {
    trigger.css('z-index','5');}
}, "close")
.to(navMiddle, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut
}, "close") 
.to(navBottom, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut
}, "close")
  .to(navMenu, 0.6, {
  y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
    navMenu.css('visibility','hidden');
  }
}, "close")
.to(navTop, 0.8, {
  y: "-113%",
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(navMiddle, 0.8, {
  scaleY: 0,
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(navBottom, 0.8, {
  y: "23%",
  ease: Power4.easeInOut,
  onComplete: function() {
    navTop.css('background-color','var(--clr-bkgd-light)');
    navMiddle.css('background-color','var(--clr-bkgd-light)');
    navBottom.css('background-color','var(--clr-bkgd-light)');
  }
}, "close", "+=0.2")
.to(closeTriggerLeft, 0.2, {
  x: "+=100px", y: "-=100px", ease: Power4.easeIn
}, "close")
.to(closeTriggerRight, 0.2, {
  x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
}, "close")
.to(openTriggerTop, 1, {
  x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
}, "close")
.to(openTriggerMiddle, 1, {
  x: "-=80px", y: "+=80px", ease: Power4.easeOut
}, "close")
.to(openTriggerBottom, 1, {
  x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
}, "close");
