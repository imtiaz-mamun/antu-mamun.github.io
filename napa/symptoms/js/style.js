$(document).ready(function(){

  var controller = new ScrollMagic.Controller();
  /*$('#napaProduct').height($(window).innerWidth()*0.502599);*/
  //$('#WrapperAllProduct').height($(window).innerWidth()*0.492599);
  //$('.allProductImg').height($(window).innerWidth()*0.43584);
setTimeout(All, 1000);
function All(){
  $('body').width($(window).innerWidth()+30);
  $('#animated').height($(window).innerHeight()+15);
  $('.leftIcon').height(700);
  $('.leftIconP').css({paddingTop:200});
  $('#WrapperAllProduct').height(820);
  $('#Layer_1_1').width(800);
  $('#Layer_1_1').height(800);
  $('#Layer_1_2').width(800);
  $('#Layer_1_2').height(800);
  $('#Layer_1_3').width(800);
  $('#Layer_1_3').height(800);
  $('#Layer_1_4').width(800);
  $('#Layer_1_4').height(800);
  $('#Layer_1_5').width(800);
  $('#Layer_1_5').height(800);
  $('#Layer_1_6').width(800);
  $('#Layer_1_6').height(800);
  $('#Layer_1_7').width(800);
  $('#Layer_1_7').height(800);
  $('#Layer_1_8').width(800);
  $('#Layer_1_8').height(800);
  $('.allProductImg').width(800);
  $('.allProductImg').height(800);
  $('#ageRelateBody').height($(window).innerHeight());
  $('#ageRelateBody').width($(window).innerWidth()+30);
  $('.womenSections').width($(window).innerWidth());
  /*$('.womenSections').height($(window).innerHeight()*.8);*/
  /*$('.agrdiv').width($(window).innerWidth()*0.2);
  $('.agrdiv').height($(window).innerWidth()*0.2);*/
  /*$('.Dose_Card').height(800);
  $('#turbine').height(800);
  $('#turbine1').height(649);*/
  $('#Layer_headache').height($(window).innerWidth()/3.00);
  $('#Layer_headache').width($(window).innerWidth()/3.00);
  $('.arthritis').width($(window).innerWidth()/3.00);
  $('.arthritis2').width($(window).innerWidth()/3.00);
  $('#Layer_Back').height($(window).innerWidth()/3.00);
  $('#Layer_Back').width($(window).innerWidth()/3.00);
  $('.modalBody').height($(window).innerHeight()*0.85);
  /*$('#turbine').css({left:($(window).innerWidth()-30)*.27});
  $('#turbine1').css({left:($(window).innerWidth()-30)*.27});*/
  /*if($(window).innerWidth()<=1050)
  {
    $('#turbine').css({left:($(window).innerWidth()-30)*.135});
    $('#turbine1').css({left:($(window).innerWidth()-30)*.135});
    $('.arrow').css({left:($(window).innerWidth()-30)*.12});
  }*/ 
  //console.log($('.womenImg').width()+ ' Outside');
  setTimeout(dose0, 1000);
  function dose0(){
      $('#turbine1').css({marginTop:$('#turbine').height()*0.09491});
      $('#turbine1').css({marginLeft:($('#turbine').width()*0.09428)+(($('.Dose_Card').width()-800)/2.0)});
      $('.redDot').css({top:$('#symptomSolutions11').width()*0.08077});
      $('.redDot').css({left:$('#symptomSolutions11').width()*0.40388});
      /*$('.womenH').height($('.womenSections').height()*.15);
      $('.womenImg').height($('.womenSections').height()*.85);*/
      //console.log($('.womenImg').width()+ ' Inside');
      $('.womenImg').css({paddingLeft:($('.womenImg').width()-670)/2.0});
      $('#turbine').css({marginLeft:($('.Dose_Card').width()-800)/2.0});
      //$('#turbine1').css({paddingLeft:Math.max(($('.Dose_Card').width()-800),0)/2.0});
      $('#Layer_W').width($(window).innerWidth()*.12);
      $('#Layer_W').height($(window).innerWidth()*.12);
      $('#Layer_W1').width($(window).innerWidth()*.12);
      $('#Layer_W1').height($(window).innerWidth()*.12);
      $('#Layer_W').css({left:$('.womenSections').width()*0.0108});
      $('#Layer_W1').css({left:$('.womenSections').width()*0.8533});
      $('.middle11').css({top:$('#WrapperAllProduct').height()*.45});
  }

/**************************************************************************/
$( ".allProductDiv" ).hover(function() {
  $('.middle11').css({opacity:1, zIndex:3});
  $('.allProductSvg').css({opacity:0.7});
}, 
function () {
  $('.middle11').css({opacity:0, zIndex:0});
  $('.allProductSvg').css({opacity:1});
});
$( ".agrdiv1" ).hover(function() {
  $('.middle1').css({opacity:1, zIndex:3});
  $('.agrImg1').css({opacity:0.4});
  $('.title1').css({opacity:0.8});
}, 
function () {
  $('.middle1').css({opacity:0, zIndex:0});
  $('.agrImg1').css({opacity:1});
  $('.title1').css({opacity:1});
});
$( ".agrdiv2" ).hover(function() {
  $('.middle2').css({opacity:1, zIndex:3});
  $('.agrImg2').css({opacity:0.4});
  $('.title2').css({opacity:0.8});
}, 
function () {
  $('.middle2').css({opacity:0, zIndex:0});
  $('.agrImg2').css({opacity:1});
  $('.title2').css({opacity:1});
});
$( ".agrdiv3" ).hover(function() {
  $('.middle3').css({opacity:1, zIndex:3});
  $('.agrImg3').css({opacity:0.4});
  $('.title3').css({opacity:0.8});
}, 
function () {
  $('.middle3').css({opacity:0, zIndex:0});
  $('.agrImg3').css({opacity:1});
  $('.title3').css({opacity:1});
});
$( ".agrdiv4" ).hover(function() {
  $('.middle4').css({opacity:1, zIndex:3});
  $('.agrImg4').css({opacity:0.4});
  $('.title4').css({opacity:0.8});
}, 
function () {
  $('.middle4').css({opacity:0, zIndex:0});
  $('.agrImg4').css({opacity:1});
  $('.title4').css({opacity:1});
});
$( ".agrdiv5" ).hover(function() {
  $('.middle5').css({opacity:1, zIndex:3});
  $('.agrImg5').css({opacity:0.4});
  $('.title5').css({opacity:0.8});
}, 
function () {
  $('.middle5').css({opacity:0, zIndex:0});
  $('.agrImg5').css({opacity:1});
  $('.title5').css({opacity:1});
});
$( ".agrdiv6" ).hover(function() {
  $('.middle6').css({opacity:1, zIndex:3});
  $('.agrImg6').css({opacity:0.4});
  $('.title6').css({opacity:0.8});
}, 
function () {
  $('.middle6').css({opacity:0, zIndex:0});
  $('.agrImg6').css({opacity:1});
  $('.title6').css({opacity:1});
});
$( ".agrdiv9" ).hover(function() {
  $('.middle9').css({opacity:1, zIndex:3});
  $('.agrImg9').css({opacity:0.4});
  $('.title9').css({opacity:0.8});
}, 
function () {
  $('.middle9').css({opacity:0, zIndex:0});
  $('.agrImg9').css({opacity:1});
  $('.title9').css({opacity:1});
});
$( ".wImg1, .middle7" ).hover(function() {
  $('.middle7').css({opacity:1, zIndex:3});
  $('.wImg1').css({opacity:0.4});
  $('.title7').css({opacity:0.8});
}, 
function () {
  $('.middle7').css({opacity:0, zIndex:1});
  $('.wImg1').css({opacity:1});
  $('.title7').css({opacity:1});
});
$( ".wImg2, .middle8" ).hover(function() {
  $('.middle8').css({opacity:1, zIndex:3});
  $('.wImg2').css({opacity:0.4});
  $('.title8').css({opacity:0.8});
}, 
function () {
  $('.middle8').css({opacity:0, zIndex:1});
  $('.wImg2').css({opacity:1});
  $('.title8').css({opacity:1});
});

$( "#text1" ).click(function() {
$(".modal-title").html("Dosage for Infants and Children");
$(".modal-body").html("1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/><br/>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
});
$( "#text2" ).click(function() {
$(".modal-title").html("Managing Children Fever");
$(".modal-body").html("1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/><br/>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
});
$( "#text3" ).click(function() {
$(".modal-title").html("Managing Children vomiting and diarrhea");
$(".modal-body").html("1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/><br/>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
});
$( "#text4" ).click(function() {
$(".modal-title").html("Common Colds In Children – And How To Manage It");
$(".modal-body").html("1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/><br/>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
});
$( "#text5" ).click(function() {
$(".modal-title").html("Dosage for Adults");
$(".modal-body").html("1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/><br/>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
});
$( "#text6" ).click(function() {
$(".modal-title").html("Managing Adult Fever");
$(".modal-body").html("1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/><br/>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
});
$( "#text7" ).click(function() {
$(".modal-title").html("Menstrual Pain");
$(".modal-body").html("1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/><br/>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
});
$( "#text8" ).click(function() {
$(".modal-title").html("Sinus Problem");
$(".modal-body").html("1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br/><br/>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
});
$( "#animatedUp" ).click(function() {
$('html, body').animate({ scrollTop: ($("#doseTrigger").offset().top) }, 1000,'linear');
});
$( "#doseUp" ).click(function() {
$('html, body').animate({ scrollTop: $("#animated").offset().top }, 1000,'linear');
});
$( "#doseDown" ).click(function() {
$('html, body').animate({ scrollTop: ($("#ProductNavTrigger").offset().top) }, 1000,'linear');
});
$( "#productUp" ).click(function() {
$('html, body').animate({ scrollTop: ($(window).innerHeight()) }, 1000,'linear');
});
$( "#productDown" ).click(function() {
$('html, body').animate({ scrollTop: $("#symptomNavTrigger").offset().top }, 1000,'linear');
});
$( "#symtomUp" ).click(function() {
$('html, body').animate({ scrollTop: ($("#ProductNavTrigger").offset().top) }, 1000,'linear');
});
$( "#symtomDown1" ).click(function() {
$('html, body').animate({ scrollTop: $("#triggerSas2").offset().top }, 1000,'linear');
});
$( "#symtomDown2" ).click(function() {
$('html, body').animate({ scrollTop: $("#triggerSas3").offset().top }, 800,'linear');
});
$( "#symtomDown3" ).click(function() {
$('html, body').animate({ scrollTop: $("#ageRelatedTrigger").offset().top }, 800,'linear');
});
$( "#agrUp" ).click(function() {
$('html, body').animate({ scrollTop: $("#symptomNavTrigger").offset().top }, 1000,'linear');
});
$( "#agrDown" ).click(function() {
$('html, body').animate({ scrollTop: $("#womenTrigger").offset().top }, 1000,'linear');
});
$( "#womenUp" ).click(function() {
$('html, body').animate({ scrollTop: $("#ageRelatedTrigger").offset().top }, 1000,'linear');
});
$( ".backToTop" ).click(function() {
$('html, body').animate({ scrollTop: 0 }, 4000,'linear');
});
$('#siteNav a').click(function(){
    /*var paralaxAvoid=0;
    if($(window).scrollTop()>=$(window).innerHeight()){
      paralaxAvoid=0;
    }
    else if($( $.attr(this, 'href') ).offset().top>=$(window).innerHeight()*2){
      paralaxAvoid=$(window).innerHeight();
    }
    else
    {
      paralaxAvoid=$(window).innerHeight()/2.0;
    }
    console.log(this..prop('href'));
    console.log($($.attr(this,'href')));*/
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, (Math.abs($( $.attr(this, 'href') ).offset().top -$(window).scrollTop()))*0.2, 'linear');
      return false;
  });

/**************************************************************************/
/*var paralaxTween = new TimelineMax();
        paralaxTween
             .to(".DoseCardWrapper",1,{marginTop:-$(window).innerHeight(),ease:Linear.easeNone});
var parlaxScene = new ScrollMagic.Scene({
    triggerElement: "#animated",
    duration: 2000,
    triggerHook:"onLeave"
  })
  .setTween(paralaxTween)
  .addTo(controller)*/

/*$(window).bind('scroll',function(e){
    parallaxScroll();
});
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    //console.log(scrolled);
    //console.log($('#animated').height());
    $('#animated').height(Math.max($(window).innerHeight()-scrolled,0));
    //console.log($('#animated').height());   
}*/
setTimeout(dose1, 1000);
function dose1()
{

var doseTween = new TimelineMax();
        doseTween
            .fromTo('.napa_dose', 0.1, {opacity:0},{opacity:1})
            .add("level2")
            .fromTo('.napa_dose', 1.5, {x:-1500},{x:0},"level2")
            .fromTo('#turbine', 1.5, {rotation:0},{rotation:150, transformOrigin:"50% 50%"},"level2")
            .fromTo('.doseHeader', 0.1, {opacity:0},{opacity:1},"level2")
            .to("#dose", 1, {scrambleText:{text:"Napa Dose Chart", chars:"lowerCase", revealDelay:0.5, tweenLength:false, ease:Power1. easeOut}},"level2")
            .fromTo('.arrow', 0.3, {opacity:0},{opacity:1});
            
  var doseScene = new ScrollMagic.Scene({
    triggerElement: "#doseTrigger",
    duration: 0,
    offset: -300
  })
  .setTween(doseTween)
  .addTo(controller)
}
/************************************************************************/
setTimeout(dose, 500);
function dose()
{
  var doseTween1 = new TimelineMax();
        doseTween1
            .add("level1")
            .fromTo('.napa_dose', 1.5, {x:0},{x:1500},"level1")
            .fromTo('#turbine', 1.5, {rotation:0},{rotation:150, transformOrigin:"50% 50%"},"level1");
  var doseScene1 = new ScrollMagic.Scene({
    triggerElement: "#allProductTrigger",
    duration: 0,
    offset: -150
  })
  .setTween(doseTween1)
  .addTo(controller)
}
Draggable.create("#turbine", {type: "rotation", throwProps: true});
/*function rotationUpdate(){
  var el = document.getElementById("i-am-rotated");

}*/

/************************************************************************/
function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}
/****Product_1 Path****/
var $path11 = $("path#path11");
var $path12 = $("path#path12");
var $path13 = $("polygon#path13");
var $path14 = $("path#path14");
/****Product_2 Path****/
var $path21 = $("path#path21");
var $path22 = $("path#path22");
var $path23 = $("path#path23");
var $path24 = $("path#path24");
/****Product_3 Path****/
var $path31 = $("path#path31");
var $path32 = $("path#path32");
var $path33 = $("path#path33");
var $path34 = $("path#path34");
var $path35 = $("path#path35");
/****Product_4 Path****/
var $path41 = $("path#path41");
var $path42 = $("path#path42");
var $path43 = $("path#path43");
var $path44 = $("path#path44");
/****Product_5 Path****/
var $path51 = $("path#path51");
var $path52 = $("path#path52");
var $path53 = $("path#path53");
var $path54 = $("path#path54");
var $path55 = $("path#path55");
/****Product_6 Path****/
var $path61 = $("path#path61");
var $path62 = $("path#path62");
var $path63 = $("path#path63");
var $path64 = $("path#path64");
/****Product_7 Path****/
var $path71 = $("path#path71");
var $path72 = $("path#path72");
var $path73 = $("path#path73");
var $path74 = $("path#path74");
/****Product_8 Path****/
var $path81 = $("path#path81");
var $path82 = $("path#path82");
var $path83 = $("path#path83");
var $path84 = $("path#path84");
var allProductSlideTween = new TimelineMax();
var allProductSlideTween1 = new TimelineMax();
var allProductSlideTween2 = new TimelineMax();
var allProductSlideTween3 = new TimelineMax();
var allProductSlideTween4 = new TimelineMax();
var allProductSlideTween5 = new TimelineMax();
var allProductSlideTween6 = new TimelineMax();
var allProductSlideTween7 = new TimelineMax();

myIndex=-1;
var a=1,b=0;
function initMain()
{
  if(b==0)
  {
    b=1;
    init();
  }
}
$( "#text11" ).click(function() {
  if(myIndex==0){
    var string= "<p style='font-size:20px;'><strong>Brand Slogan</strong>:  The symbol of Trust, Safety, Reliability and Authenticity</p>";
    var s1="<br/><p>For effective temporary relief of aches and discomforts associated with fever and mild pain</p>";
    string+=s1;
    s1="<br/><ul class='productLi'><li>Reduces fever and relieves pains right away</li><li>Outstanding safety profile across all category patients</li><li>Gentle on the stomach</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What does it contain?</strong></p><p style='font-size:16px;'>Each Napa Tablet contains Paracetamol 500 mg</p>"
    string+=s1;
    s1="<br/><p><strong>What it is for?</strong></p><ul class='productLi'><li>Fever</li><li>Headache/ tension headache</li><li>Aches and pains of cold and flu</li><li>Aches of sore throat</li><li>Toothache</li><li>Backache</li><li>Post immunization pain</li><li>Pain due to rheumatic disorder</li><li>Period pain</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What are its features?</strong></p><ul class='productLi'><li>Film coated round shaped tablet</li><li>Disintegrates in the stomach right away, acts quickly</li></ul>"
    string+=s1;
    s1="<br/><p><strong>How to use it?</strong></p><p style='font-size:16px;'>Place tablet(s) in mouth and swallow down with water</p>"
    string+=s1;
    s1="<br/><p><strong>Dosage</strong></p>";
    string+=s1;
    s1="<p>Adults and children over 12 years: 1-2 tablets every <strong>4-6</strong> hours as required, do not exceed 8 tablets in 24 hours</p>";
    string+=s1;
    s1="<p>Consult your physician for the most appropriate dose for you<br/>Do not take with any other products containing paracetamol at the same time</p>";
    string+=s1;
    s1="<p>*Individual response varies</p>";
    string+=s1;
    s1="<br/><p><strong>How to store it?</strong></p><p style='font-size:16px;'>Store in a cool and dry place, keep away from children</p>"
    string+=s1;
    $(".productModalTitle").html("Napa");
    $(".productModalBody").html(string);
  }
  else if(myIndex==1){
    var string= "<p style='font-size:20px;'><strong>Brand Slogan</strong>:  STRONGER action. EXTRA relief</p>";
    var s1="<br/><p>For fast and extra effective temporary relief of aches and discomforts associated with high fever and tough pains</p>";
    string+=s1;
    s1="<br/><ul class='productLi'><li>40% stronger than Paracetamol without Caffeine</li><li>Reduces high fever and relieves tough pains</li><li>Stimulates CNS and  helps feel fresh</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What does it contain?</strong></p><p style='font-size:16px;'>Paracetamol 500 mg and Caffeine 65 mg Tablet</p>"
    string+=s1;
    s1="<br/><p><strong>What it is for?</strong></p><ul class='productLi'><li>High Fever</li><li>Headache/ tension headache</li><li>Migraine Headache</li><li>Premenstrual and menstrual cramps</li><li>Muscular Aches</li><li>Osteoarthritis/arthritis</li><li>Sore throat</li><li>toothache</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What are its features?</strong></p><ul class='productLi'><li>Slick and slim film coated Tablet</li><li>Easy to swallow</li><li>Breaks down in the stomach right away, acts faster</li></ul>"
    string+=s1;
    s1="<br/><p><strong>How to use it?</strong></p><p style='font-size:16px;'>Place tablet(s) in mouth and swallow down with water</p>"
    string+=s1;
    s1="<br/><p><strong>Dosage</strong></p>";
    string+=s1;
    s1="<p>Adults and children over 12 years: 1-2 tablets every 4-6  hours as required, do not exceed 8 Tablets in 24 hours</p>";
    string+=s1;
    s1="<p>Not suitable for children under 12 years and pregnant women Consult your physician for the most appropriate dose for you<br/>Do not take with any other products containing paracetamol at the same time</p>";
    string+=s1;
    s1="<p>*Individual response varies</p>";
    string+=s1;
    s1="<br/><p><strong>How to store it?</strong></p><p style='font-size:16px;'>Store in a cool and dry place, keep away from children</p>"
    string+=s1;
    $(".productModalTitle").html("Napa Extra Tablet");
    $(".productModalBody").html(string);
  }
  else if(myIndex==2){
     var string= "<p style='font-size:20px;'><strong>Brand Slogan</strong>:  Before, during and after surgery as a component of Multimodal Analgesia technique</p>";
    /*var s1="<br/><p>For fast and extra effective temporary relief of aches and discomforts associated with high fever and tough pains</p>";
    string+=s1;*/
    s1="<br/><ul class='productLi'><li>Reduces Opioid consumption</li><li>Minimizes adverse effects</li><li>Improve PO pain relief</li> <li>Increases patient satisfaction</li><li>Expedite mobilization and rehabilitation</li><li>Shortens Hospital stay</li><li>Reduces overall treatment costs</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What does it contain?</strong></p><p style='font-size:16px;'>Paracetamol 10 mg/ml, 100 ml IV infusion</p>"
    string+=s1;
    s1="<br/><p><strong>What it is for?</strong></p><ul class='productLi'><li>As an adjunct to Opioids/NSAIDs in pre-, during and post-operative pain</li><li>Persistent high fever in kids</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What are its features?</strong></p><ul class='productLi'><li>International standard raw material</li><li>Packed in glass bottle with complete infusion set</li></ul>"
    string+=s1;
    s1="<br/><p><strong>Dosage</strong></p>";
    string+=s1;
    s1="<p><img src='http://beximcopharma.com/cdn/napa/images/Napa_IV_Dosage.png'></p>";
    string+=s1;
    s1="<p>Consult your physician for the most appropriate dose for you<br/>Do not take with any other products containing paracetamol at the same time</p>";
    string+=s1;
    s1="<p>*Individual response varies</p>";
    string+=s1;
    s1="<br/><p><strong>How to store it?</strong></p><p style='font-size:16px;'>Store in a cool and dry place, keep away from children</p>"
    string+=s1;
    $(".productModalTitle").html("Napa IV");
    $(".productModalBody").html(string);
  }
  else if(myIndex==3){
    var string= "<p style='font-size:20px;'><strong>Brand Slogan</strong>:  For extended pain relief</p>";
    var s1="<br/><p>Napa® Extend is the preparation of Paracetamol 665 mg extended release formulation. It is formulated by dual granulation technology. </p>";
    string+=s1;
    /*s1="<br/><ul class='productLi'><li>Reduces Opioid consumption</li><li>Minimizes adverse effects</li><li>Improve PO pain relief</li> <li>Increases patient satisfaction</li><li>Expedite mobilization and rehabilitation</li><li>Shortens Hospital stay</li><li>Reduces overall treatment costs</li></ul>"
    string+=s1;*/
    s1="<br/><p><strong>What does it contain?</strong></p><p style='font-size:16px;'>Paracetamol 665mg Extended Release Formulation</p>"
    string+=s1;
    s1="<br/><p><strong>What it is for?</strong></p><p style='font-size:16px;'>Napa Extend is a patented bi-layer tablet incorporating an immediate release and a sustained release dose to help manage osteoarthritis. It can provide long-lasting relief from persistent pain.</p>"
    string+=s1;
    s1="<br/><p><strong>What are its features?</strong></p><p style='font-size:16px;'>There are two types’ granules in each tablet 31% (206 mg) is in immediate release form for immediate action and 69% (459 mg) in sustain release form for continuous pain relief for 8 hours.  Paracetamol extended release tablet as a first line treatment option for Osteoarthritis pain, Musculoskeletal pain and persistent pain in older adults.</p>"
    string+=s1;
    s1="<br/><p><strong>How to use it?</strong></p><p style='font-size:16px;'>Place Tablet(s) in mouth and swallow with water.</p>"
    string+=s1;
    s1="<br/><p><strong>Dosage</strong></p>";
    string+=s1;
    s1="<p>Adults and children over 12 years: Two tablets, swallowed whole, every 6-8 hours (maximum of 6 tablets in any 24 hours). The tablets must not be crushed.</p>";
    string+=s1;
    /*s1="<p>Consult your physician for the most appropriate dose for you<br/>Do not take with any other products containing paracetamol at the same time</p>";
    string+=s1;
    s1="<p>*Individual response varies</p>";
    string+=s1;*/
    s1="<br/><p><strong>How to store it?</strong></p><p style='font-size:16px;'>Store in a cool and dry place, keep away from children</p>"
    string+=s1;
    $(".productModalTitle").html("Napa Extened");
    $(".productModalBody").html(string);
  }
  else if(myIndex==4){
    var string= "<p style='font-size:20px;'><strong>Brand Slogan</strong>:  The symbol of Trust, Safety, Reliability and Authenticity</p>";
    var s1="<br/><p>For effective relief from fever and mild pain in kids</p>";
    string+=s1;
    s1="<br/><ul class='productLi'><li>Reduces fever and relieves pains quickly</li><li>Gentle to little tummies</li><li>Safe for neonates</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What does it contain?</strong></p><p style='font-size:16px;'>Paracetamol 80 mg/ ml, 15 ml Drop</p>"
    string+=s1;
    s1="<br/><p><strong>What it is for?</strong></p><ul class='productLi'><li>Fever</li><li>Mild pain- <ol><li>Post immunization pain/pyrexia</li><li>Aches and pains of cold and flu</li><li>Aches of sore throat</li><li>Toothache</li><li>Muscle pain</li></ol></li></ul>"
    string+=s1;
    s1="<br/><p><strong>What are its features?</strong></p><ul class='productLi'><li>Leaching free glass bottle packaging that ensures complete safety to kids</li><li>Strawberry flavored concentrated formulation with an unforgettable taste</li><li>Color free drop is available</li></ul>"
    string+=s1;
    /*s1="<br/><p><strong>How to use it?</strong></p><p style='font-size:16px;'>Place Tablet(s) in mouth and swallow with water.</p>"
    string+=s1;*/
    s1="<br/><p><strong>Dosage</strong></p>";
    string+=s1;
    s1="<ul class='productLi'><li>Neonates and child 0-3 months : .5 ml</li><li>Child 4-11 months 1 ml</li><li>Child 12-23 months : 1.5 ml</li><li>Child 2-3 years : 2ml</li><li>Child 4-5 years : 3ml</li></ul><p><img src='http://beximcopharma.com/cdn/napa/images/Napa_Drops.png'></p>";
    string+=s1;
    s1="<p>Consult your physician for the most appropriate dose for you<br/>Do not take with any other products containing paracetamol at the same time</p>";
    string+=s1;
    s1="<p>*Individual response varies</p>";
    string+=s1;
    s1="<br/><p><strong>How to store it?</strong></p><p style='font-size:16px;'>Store in a cool and dry place, keep away from children</p>"
    string+=s1;
    $(".productModalTitle").html("Napa Drop");
    $(".productModalBody").html(string);
  }




  else if(myIndex==5){
    var string= "<p style='font-size:20px;'><strong>Brand Slogan</strong>:  The symbol of Trust, Safety, Reliability and Authenticity</p>";
    var s1="<br/><p>For effective relief of aches and discomforts associated with fever and mild pain</p>";
    string+=s1;
    s1="<br/><ul class='productLi'><li>Reduces fever and relieves pains right away</li><li>Gentle to little Stomach</li><li>Safe for children</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What does it contain?</strong></p><p style='font-size:16px;'>Each 5 ml Napa syrup contains Paracetamol 120 mg.<br/>60 and 100 ml syrup bottle is available</p>"
    string+=s1;
    s1="<br/><p><strong>What it is for?</strong></p><ul class='productLi'><li>Fever</li><li>Post immunization pain</li><li>Aches and pains of cold and flu</li><li>Aches of sore throat</li><li>Headache</li><li>Toothache</li><li>Backache</li><li>Muscle pain</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What are its features?</strong></p><ul class='productLi'><li>Leaching free glass bottle packaging that ensures complete safety to kids</li><li>Raspberry flavored mouthwatering formulation with elegant look</li></ul>"
    string+=s1;
    /*s1="<br/><p><strong>How to use it?</strong></p><p style='font-size:16px;'>Place Tablet(s) in mouth and swallow with water.</p>"
    string+=s1;*/
    s1="<br/><p><strong>Dosage</strong></p>";
    string+=s1;
    s1="<ul class='productLi'><li>Child 2 – 3 months 2.5 ml usually once. However, if necessary, after 4–6 hours a second 2⋅5 mL dose may be given for  Post-vaccination fever and other causes of pain and fever if your baby weighs over 4 kg and was born after 37 weeks</li><li>Children 3-6 months 2.5ml – Leave at least 4 hours between doses ( max. 4 doses in 24 hours)</li><li>Child 6 months–2 years 5ml – Leave at least 4 hours between doses (max. 4 doses in 24 hours)</li><li>Child 2–4 years 7.5ml – Leave at least 4 hours between doses (max. 4 doses in 24 hours)</li><li>Child 4–6 years 10ml  – Leave at least 4 hours between doses (max. 4 doses in 24 hours)</li><li>Child 6–12 years 10-20ml – Leave at least 4 hours between doses (max. 4 doses in 24 hours)</li></ul>";
    string+=s1;
    s1="<p>Consult your physician for the most appropriate dose for you<br/>Do not take with any other products containing paracetamol at the same time</p>";
    string+=s1;
    s1="<p>*Individual response varies</p>";
    string+=s1;
    s1="<br/><p><strong>How to store it?</strong></p><p style='font-size:16px;'>Store in a cool and dry place, keep away from children</p>"
    string+=s1;
    $(".productModalTitle").html("Napa Syrup");
    $(".productModalBody").html(string);
  }
  else if(myIndex==6){
    var string= "<p style='font-size:20px;'><strong>Brand Slogan</strong>:  The symbol of Trust, Safety, Reliability and Authenticity</p>";
    var s1="<br/><p>For quicker relief from high fever</p>";
    string+=s1;
    s1="<br/><ul class='productLi'><li>Extra-ordinary formulation offers prompt relief from high fever</li><li>Safe for all age patients</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What does it contain?</strong></p><p style='font-size:16px;'>Paracetamol 60, 125, 250 and 500 mg suppository</p>"
    string+=s1;
    s1="<br/><p><strong>What it is for?</strong></p><ul class='productLi'><li>High fever</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What are its features?</strong></p><ul class='productLi'><li>Completely sterile</li><li>Maximum protection against oxygen, moisture, light</li><li>Less chance of deformation and cracking during storage</li><li>Non-hazardous to health, contains no plasticizers</li><li>Environmentally friendly</li></ul>"
    string+=s1;
    /*s1="<br/><p><strong>How to use it?</strong></p><p style='font-size:16px;'>Place Tablet(s) in mouth and swallow with water.</p>"
    string+=s1;*/
    s1="<br/><p><strong>Dosage</strong></p>";
    string+=s1;
    s1="<ul class='productLi'><li>Children 3-12 months: 60-120mg, maximum 4 times dailys</li><li>Children 1-5 years: 125-250mg , maximum 4 times daily</li><li>Children 6-9 years (20-30kg):  one 250 mg , maximum 4 times daily</li><li>Children 10-12 years (30-40kg): one to two 250 mg , maximum 4 times daily</li><li>Children 10-12 years (30-40kg): one 500 mg, maximum 4 times daily</li><li>Children 12 years and older : one to two 500 mg suppositories , maximum 4 times daily</li></ul>";
    string+=s1;
    s1="<p>Consult your physician for the most appropriate dose for you<br/>Do not take with any other products containing paracetamol at the same time</p>";
    string+=s1;
    s1="<p>*Individual response varies</p>";
    string+=s1;
    s1="<br/><p><strong>How to store it?</strong></p><p style='font-size:16px;'>Store in a cool and dry place, keep away from children</p>"
    string+=s1;
    $(".productModalTitle").html("Napa Suppository");
    $(".productModalBody").html(string);
  }
  else if(myIndex==7){
    var string= "<p style='font-size:20px;'><strong>Brand Slogan</strong>:  The symbol of Trust, Safety, Reliability and Authenticity</p>";
    var s1="<br/><p>For effective relief of aches and discomforts associated with fever and mild pain</p>";
    string+=s1;
    s1="<br/><ul class='productLi'><li>Reduces fever and relieves pains right away</li><li>Gentle to little Stomach</li><li>Safe for children</li></ul>"
    string+=s1;
    s1="<br/><p><strong>What does it contain?</strong></p><p style='font-size:16px;'>Each 5 ml Napa syrup contains Paracetamol 120 mg.<br/>60 ml suspension is available</p>"
    string+=s1;
    s1="<br/><p><strong>What it is for?</strong></p><ul class='productLi'><li>Fever</li><li>Mild pain- <ol><li>Post immunization pain</li><li>Aches and pains of cold and flu</li><li>Aches of sore throat</li><li>Headache</li><li>Toothache</li><li>Backache</li><li>Muscle pain</li></ol></li></ul>"
    string+=s1;
    s1="<br/><p><strong>What are its features?</strong></p><ul class='productLi'><li>Leaching free glass bottle packaging that ensures complete safety to kids</li><li>Banana flavored mouthwatering  formulation</li></ul>"
    string+=s1;
    /*s1="<br/><p><strong>How to use it?</strong></p><p style='font-size:16px;'>Place Tablet(s) in mouth and swallow with water.</p>"
    string+=s1;*/
    s1="<br/><p><strong>Dosage</strong></p>";
    string+=s1;
    s1="<ul class='productLi'><li>Child 2 – 3 months 2.5 ml usually once. However, if necessary, after 4–6 hours a second 2⋅5 mL dose may be given for  Post-vaccination fever and other causes of pain and fever if your baby weighs over 4 kg and was born after 37 weeks</li><li>Children 3-6 months 2.5ml – Leave at least 4 hours between doses ( max. 4 doses in 24 hours)</li><li>Child 6 months–2 years 5ml – Leave at least 4 hours between doses (max. 4 doses in 24 hours)</li><li>Child 2–4 years 7.5ml – Leave at least 4 hours between doses (max. 4 doses in 24 hours)</li><li>Child 4–6 years 10ml  – Leave at least 4 hours between doses (max. 4 doses in 24 hours)</li><li>Child 6–12 years 10-20ml – Leave at least 4 hours between doses (max. 4 doses in 24 hours)</li></ul>";
    string+=s1;
    s1="<p>Consult your physician for the most appropriate dose for you<br/>Do not take with any other products containing paracetamol at the same time</p>";
    string+=s1;
    s1="<p>*Individual response varies</p>";
    string+=s1;
    s1="<br/><p><strong>How to store it?</strong></p><p style='font-size:16px;'>Store in a cool and dry place, keep away from children</p>"
    string+=s1;
    $(".productModalTitle").html("Napa Suspension");
    $(".productModalBody").html(string);
  }
});
$( "#leftIconP1" ).click(function() {
  initA(-1);
});
$( "#leftIconP2" ).click(function() {
  initA(1);
});
function initA(n)
{
  a=n;
  allProductSlideTween.timeScale(1000);
  allProductSlideTween1.timeScale(1000);
  allProductSlideTween2.timeScale(1000);
  allProductSlideTween3.timeScale(1000);
  allProductSlideTween4.timeScale(1000);
  allProductSlideTween5.timeScale(1000);
  allProductSlideTween6.timeScale(1000);
  allProductSlideTween7.timeScale(1000);
}
function init()
{
  
  myIndex=(myIndex+8+a)%8;
  a=1;
  allProductSlideTween.timeScale(1);
  allProductSlideTween1.timeScale(1);
  allProductSlideTween2.timeScale(1);
  allProductSlideTween3.timeScale(1);
  allProductSlideTween4.timeScale(1);
  allProductSlideTween5.timeScale(1);
  allProductSlideTween6.timeScale(1);
  allProductSlideTween7.timeScale(1);
  if(myIndex==0)
    slide1();
  else if(myIndex==1)
    slide2();
  else if(myIndex==2)
    slide3();
  else if(myIndex==3)
    slide4();
  else if(myIndex==4)
    slide5();
  else if(myIndex==5)
    slide6();
  else if(myIndex==6)
    slide7();
  else
    slide8();
}
function slide1() {
    pathPrepare($path11);
    pathPrepare($path12);
    /*pathPrepare($path13);*/
    pathPrepare($path14);
    var i;

    var x = document.getElementsByClassName("allProductSvg");
    var y = document.getElementsByClassName("allProductImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      y[i].style.display = "none";
      y[i].style.opacity = 0;  
    }   
    x[0].style.display = "block";
    y[0].style.display = "block";
    
        allProductSlideTween
             .add(TweenMax.to($path11, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path12, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             /*.add(TweenMax.to($path13, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))*/
             .add(TweenMax.to($path14, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add("level0")
             .fromTo(x[0],1, {opacity:1},{opacity:0},"level0")
             .fromTo(y[0],1, {opacity:0},{opacity:1},"level0")
             .to(y[0],0.5, {opacity:0,delay:1.5, onComplete:init});
}
function slide2() {
    pathPrepare($path21);
    pathPrepare($path22);
    pathPrepare($path23);
    pathPrepare($path24);
    var i;

    var x = document.getElementsByClassName("allProductSvg");
    var y = document.getElementsByClassName("allProductImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      y[i].style.display = "none";
      y[i].style.opacity = 0;  
    }   
    x[1].style.display = "block";
    y[1].style.display = "block";  
        allProductSlideTween1
             .add(TweenMax.to($path21, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path22, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path23, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path24, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add("level1")
             .fromTo(x[1],1, {opacity:1},{opacity:0},"level1")
             .fromTo(y[1],1, {opacity:0},{opacity:1},"level1")
             .to(y[1],0.5, {opacity:0,delay:1.5, onComplete:init});
}
function slide3() {
    pathPrepare($path31);
    pathPrepare($path32);
    pathPrepare($path33);
    pathPrepare($path34);
    pathPrepare($path35);
    var i;
    var x = document.getElementsByClassName("allProductSvg");
    var y = document.getElementsByClassName("allProductImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      y[i].style.display = "none";
      y[i].style.opacity = 0;  
    }   
    x[2].style.display = "block";
    y[2].style.display = "block";  
        allProductSlideTween2
             .add(TweenMax.to($path31, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path32, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path33, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path34, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path35, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add("level2")
             .fromTo(x[2],1, {opacity:1},{opacity:0},"level2")
             .fromTo(y[2],1, {opacity:0},{opacity:1},"level2")
             .to(y[2],0.5, {opacity:0,delay:1.5, onComplete:init});
}
function slide4() {
    pathPrepare($path41);
    pathPrepare($path42);
    pathPrepare($path43);
    pathPrepare($path44);
    var i;
    var x = document.getElementsByClassName("allProductSvg");
    var y = document.getElementsByClassName("allProductImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      y[i].style.display = "none";
      y[i].style.opacity = 0;  
    }   
    x[3].style.display = "block";
    y[3].style.display = "block";  
        allProductSlideTween3
             .add(TweenMax.to($path41, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path42, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path43, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path44, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add("level3")
             .fromTo(x[3],1, {opacity:1},{opacity:0},"level3")
             .fromTo(y[3],1, {opacity:0},{opacity:1},"level3")
             .to(y[3],0.5, {opacity:0,delay:1.5, onComplete:init});
}
function slide5() {
    pathPrepare($path51);
    pathPrepare($path52);
    pathPrepare($path53);
    pathPrepare($path54);
    pathPrepare($path55);
    var i;
    var x = document.getElementsByClassName("allProductSvg");
    var y = document.getElementsByClassName("allProductImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      y[i].style.display = "none";
      y[i].style.opacity = 0;  
    }   
    x[4].style.display = "block";
    y[4].style.display = "block";  
        allProductSlideTween4
             .add(TweenMax.to($path51, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path52, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path53, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path54, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path55, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add("level4")
             .fromTo(x[4],1, {opacity:1},{opacity:0},"level4")
             .fromTo(y[4],1, {opacity:0},{opacity:1},"level4")
             .to(y[4],0.5, {opacity:0,delay:1.5, onComplete:init});
}
function slide6() {
    pathPrepare($path61);
    /*pathPrepare($path62);*/
    pathPrepare($path63);
    pathPrepare($path64);
    var i;
    var x = document.getElementsByClassName("allProductSvg");
    var y = document.getElementsByClassName("allProductImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      y[i].style.display = "none";
      y[i].style.opacity = 0;  
    }   
    x[5].style.display = "block";
    y[5].style.display = "block";  
        allProductSlideTween5
             .add(TweenMax.to($path61, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             /*.add(TweenMax.to($path62, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))*/
             .add(TweenMax.to($path63, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path64, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add("level5")
             .fromTo(x[5],1, {opacity:1},{opacity:0},"level5")
             .fromTo(y[5],1, {opacity:0},{opacity:1},"level5")
             .to(y[5],0.5, {opacity:0,delay:1.5, onComplete:init});
}
function slide7() {
    pathPrepare($path71);
    pathPrepare($path72);
    pathPrepare($path73);
    pathPrepare($path74);
    var i;
    var x = document.getElementsByClassName("allProductSvg");
    var y = document.getElementsByClassName("allProductImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      y[i].style.display = "none";
      y[i].style.opacity = 0;  
    }   
    x[6].style.display = "block";
    y[6].style.display = "block";  
        allProductSlideTween6
             .add(TweenMax.to($path71, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path72, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path73, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path74, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add("level6")
             .fromTo(x[6],1, {opacity:1},{opacity:0},"level6")
             .fromTo(y[6],1, {opacity:0},{opacity:1},"level6")
             .to(y[6],0.5, {opacity:0,delay:1.5, onComplete:init});
}
function slide8() {
    pathPrepare($path81);
    pathPrepare($path82);
    pathPrepare($path83);
    pathPrepare($path84);
    var i;
    var x = document.getElementsByClassName("allProductSvg");
    var y = document.getElementsByClassName("allProductImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      y[i].style.display = "none";
      y[i].style.opacity = 0;  
    }   
    x[7].style.display = "block";
    y[7].style.display = "block";  
        allProductSlideTween7
             .add(TweenMax.to($path81, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path82, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path83, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add(TweenMax.to($path84, 0.7, {strokeDashoffset: 0, ease:Linear.easeNone}))
             .add("level7")
             .fromTo(x[7],1, {opacity:1},{opacity:0},"level7")
             .fromTo(y[7],1, {opacity:0},{opacity:1},"level7")
             .to(y[7],0.5, {opacity:0,delay:1.5, onComplete:init});
}

var allProductTween = new TimelineMax();
        allProductTween
             .fromTo("#product",0.1,{opacity:0},{opacity:1})
             .add("levelP0",0.1)
             .to("#product", 1, {scrambleText:{text:"Napa Products", chars:"lowerCase", revealDelay:0.5, tweenLength:false, ease:Power1. easeOut}},"levelP0")
             .fromTo(".productline", 0.8, {width:"0.5%"}, {width:"100%",ease:  Power4. easeIn},"levelP0")
             .fromTo('#allProduct',0.1,{display:"none"},{display:"block",onComplete:initMain})
             .to(".productline", 0.8, {width:"0.5%",left:"99.5%",ease:  Power4. easeOut,delay:0.2});
             /*.fromTo('.product', 0.6, {opacity:0,scale:0.95},{opacity:1,scale:1});*/
  var allProductScene = new ScrollMagic.Scene({
    triggerElement: "#allProductTrigger",
    duration: 0,
    offset: -100
  })
  .setTween(allProductTween)
  .addTo(controller)
  /*.fromTo("#product",0.1,{opacity:0},{opacity:1})
 .add("levelP0",0.1)
 .to("#product", 1, {scrambleText:{text:"Napa Products", chars:"lowerCase", revealDelay:0.5, tweenLength:false, ease:Power1. easeOut}},"levelP0")
 .fromTo(before, .6, {cssRule:{width:"0%"}}, {cssRule:{width:"100%"},ease:  Power4. easeIn},"levelP0")
 .to('#WrapperAllProduct', 0, {backgroundColor:"#14c4ff"})
 .to(before, 0, {cssRule:{width:"0%"}})
 .to(before, 0, {cssRule:{backgroundColor:"#fff"}})
 .to(before, .6, {cssRule:{width:"100%"},ease:  Power4. easeIn})
 .to('#WrapperAllProduct', 0, {backgroundColor:"#fff"})
 .fromTo(before, 0.1, {cssRule:{display:"block"}}, {cssRule:{display:"none"}})
 .fromTo('#allProduct',0,{display:"none"},{display:"block",onComplete:initMain});
 /*.fromTo('.product', 0.6, {opacity:0,scale:0.95},{opacity:1,scale:1});*/
/************************************************************************/

var sasControl1=0;
Draggable.create(".bottle1", {
    type:"x",
    onDragEnd:function(e) {
        if (this.hitTest("#symptomSolutions11")) {
            sasControl1=1;
            var hitSolutionTween1 = new TimelineMax();
              hitSolutionTween1
                .add("levelH11",1)
                .to('.redDot', 1, {scale:.01, transformOrigin:"50% 15%"})
                /*.fromTo('.headache', 0.7,{opacity:1}, {opacity:0},"levelH11")
                .fromTo('.headache2', 0.7,{opacity:0}, {opacity:1}, "levelH11")*/
                .set(" #eye25", {visibility:"visible", opacity:1,fill:"#3B1B10"})/*#3B1B10*/
                .set(" #eye26", {visibility:"visible", opacity:1,fill:"#3B1B10"})
                .set(" #eye27", {visibility:"visible", opacity:1})
                .set(" #eye28", {visibility:"visible", opacity:1})
                .to("#eye11", 0.3, {morphSVG:{shape:"#eye21", shapeIndex:0}},"levelH11")
                .to("#eye12", 0.3, {morphSVG:{shape:"#eye22", shapeIndex:600}},"levelH11")
                .to("#eye13", 0.3, {morphSVG:{shape:"#eye23", shapeIndex:100}},"levelH11")
                .to("#eye14", 0.3, {morphSVG:{shape:"#eye24", shapeIndex:-500}},"levelH11")
                .to("#mouth11", 0.4, {morphSVG:{shape:"#mouth21", shapeIndex:0}},"levelH11")
                .to("#mouth12", 0.4, {morphSVG:{shape:"#mouth22", shapeIndex:0}},"levelH11")
                .to("#mouth13", 0.4, {morphSVG:{shape:"#mouth23", shapeIndex:0}},"levelH11")
                .to("#mouth14", 0.4, {morphSVG:{shape:"#mouth24", shapeIndex:0}},"levelH11")
                .set(" #headache2", {visibility:"visible"})
                .add("levelH111",1.4)
                .to(" #headache",0.9, { opacity:0},"levelH111")
                .to(" #headache2",0.9, { opacity:1},"levelH111")
                .add("levelH1",0)
                .fromTo('.bottle1', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH1")
                .fromTo('.hand1', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH1")
                .fromTo('.dis1', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH1")
                .fromTo('.sysHead1', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH1")
                .fromTo('.bottle1', 0,{display:"block"}, {display:"none"})
                .fromTo('.hand1', 0,{display:"block"}, {display:"none"})
                .fromTo('.dis1', 0,{display:"block"}, {display:"none"})
                .fromTo('.sysHead1', 0,{display:"block"}, {display:"none"})
                .fromTo('.underline11', 0.7,{height:"0.8%",top:"97%"},{height:"100%",top:"0%",ease:  Power4. easeOut},"levelH1")
                .add("levelH222", 0.7).
                fromTo('#symptomSolutions12', 0.1,{display:"none"}, {display:"block"},"levelH222")
                .add("levelH2", 0.9)
                .to('.underline11', 0.7,{height:"0.8%",top:"97%",ease:  Power4. easeIn},"levelH2");
        }
    }
});
hand1();
function hand1()
{
  if(sasControl1==1)
    return ;
  var dotTween1 = new TimelineMax({});
    dotTween1
      .to('.redDot', 0.8, {opacity:1})
      .to('.redDot', 0.8, {opacity:0.4});
  var handTween1 = new TimelineMax({});
    handTween1
      .to('.hand1', 0.1, {opacity:.15})
      .fromTo('.hand1', 1.5,{left:"68.5%",rotation:45}, {left:"38.5%",rotation:-45,ease: Power0. easeOut, transformOrigin:"50% 50%"})
      .to('.hand1', 0.1, {opacity:0})
      .fromTo('.hand1', 0,{left:"38.5%",rotation:-45}, {left:"68.5%",rotation:45,ease: Power0. easeOut, transformOrigin:"50% 50%",onComplete:hand1});
}
var disTween1 = new TimelineMax({repeat:-1});
  disTween1
    .fromTo('.dis1', 1.5,{y:0}, {y:-15,ease: Power0. easeOut})
    .fromTo('.dis1', 1.5,{y:-15}, {y:0,ease: Power0. easeOut});
var symptomSolutionTween1 = new TimelineMax();
        symptomSolutionTween1
            .add("levelS11")
            .fromTo("#sas", 0.1,{opacity:0},{opacity:1})
            .to("#sas", 0.6, {scrambleText:{text:"Symptoms and Solution", chars:"lowerCase", revealDelay:0.5, tweenLength:false, ease:Power1. easeOut}},"levelS11")
            .fromTo('.underline1', 0.5,{width:".5%"},{width:"34%",ease:  Power4. easeOut},"levelS11")
            .fromTo('.underline1', 0.5,{height:".4%"},{height:"100%",ease:  Power4. easeIn})
            .fromTo('#symptomSolutions11', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn})
            .to('.redDot', 0.1, {display:"block"})
            .to('.underline1', 0.5,{height:"0.8%",top:"97%",ease:  Power4. easeIn})
            .add("levelS1",0.2)
            .fromTo('.underline11', 0.5,{width:".5%",left:"91%"},{width:"34%",left:"57.5%",ease:  Power4. easeOut},"levelS1")
            .fromTo('.underline11', 0.5,{height:".4%"},{height:"100%",ease:  Power4. easeIn,delay:0.5},"levelS1")
            .fromTo('.bottle1', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1},"levelS1")
            .fromTo('.hand1', 0,{display:"none"}, {display:"block",delay:1.1},"levelS1")
            .fromTo('.dis1', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1.1},"levelS1")
            .fromTo('.sysHead1', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1.1},"levelS1")
            .to('.underline11', 0.5,{height:"0.8%",top:"97%",ease:  Power4. easeIn,delay:1.2},"levelS1")
            .fromTo('#symptomSolutions12', 0,{opacity:0}, {opacity:1});
  var symptomSolutionScene1 = new ScrollMagic.Scene({
    triggerElement: "#symptomSolutionTrigger",
    duration: 0,
    offset: -200
  })
  .setTween(symptomSolutionTween1)
  .addTo(controller)
/**************************/
var sasControl2=0;
Draggable.create(".bottle2", {
    type:"x",
    onDragEnd:function(e) {
        if (this.hitTest(".arthritis")) {
            sasControl2=1;
            var hitSolutionTween2 = new TimelineMax();
              hitSolutionTween2
                .to('.yLine', 0.7, {opacity:0, scale:2.25, top:"19%", left:"80%"})
                .to('.cloud1', 0.1, {display:"none"})
                .add("levelH22",0.9)
                .fromTo('.arthritis', 0.7,{opacity:1}, {opacity:0},"levelH22")
                .fromTo('.arthritis2', 0.7,{opacity:0}, {opacity:1}, "levelH22")
                .add("levelH2",0)
                .fromTo('.bottle2', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH2")
                .fromTo('.hand2', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH2")
                .fromTo('.dis2', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH2")
                .fromTo('.sysHead2', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH2")
                .fromTo('.bottle2', 0,{display:"block"}, {display:"none"})
                .fromTo('.hand2', 0,{display:"block"}, {display:"none"})
                .fromTo('.dis2', 0,{display:"block"}, {display:"none"})
                .fromTo('.sysHead2', 0,{display:"block"}, {display:"none"})
                .fromTo('.underline22', 0.7,{height:".4%",top:"96%"},{height:"100%",top:"0%",ease:  Power4. easeOut},"levelH2")
                .fromTo('#symptomSolutions22', 0.1,{display:"none"}, {display:"block",delay:0.7},"levelH2")
                .to('.underline22', 0.7,{height:".8%",top:"96%",ease:  Power4. easeIn,delay:0.8},"levelH2")
                .to('.underline2', 0.7,{top:"96%",ease:  Power4. easeIn,delay:0.8},"levelH2");
        }
    }
});
hand2();
function hand2()
{
  if(sasControl2==1)
    return ;
  var lineTween1 = new TimelineMax({});
    lineTween1
      .to('.yLine', 0.8, {width:"25%", top:"11%", left:"60%"})
      .to('.yLine', 0.8, {width:"22%", top:"20.5%", left:"56.5%"});
  var cloudTween1 = new TimelineMax({});
    cloudTween1
      .to('.cloud1', 0.8, {opacity:1})
      .to('.cloud1', 0.8, {opacity:0, delay:1.5});
  var handTween2 = new TimelineMax({});
    handTween2
      .to('.hand2', 0.1, {opacity:0.15})
      .fromTo('.hand2', 1.5,{left:"68.5%",rotation:45}, {left:"38.5%",rotation:-45,ease: Power0. easeOut, transformOrigin:"50% 50%"})
      .to('.hand2', 0.1, {opacity:0})
      .fromTo('.hand2', 0,{left:"38.5%",rotation:-45}, {left:"68.5%",rotation:45,ease: Power0. easeOut, transformOrigin:"50% 50%",onComplete:hand2});
}
var disTween2 = new TimelineMax({repeat:-1});
  disTween2
    .fromTo('.dis2', 1.5,{y:0}, {y:-15,ease: Power0. easeOut})
    .fromTo('.dis2', 1.5,{y:-15}, {y:0,ease: Power0. easeOut});
var symptomSolutionTween2 = new TimelineMax();
        symptomSolutionTween2
            .fromTo('.underline2', 0.5,{width:".5%"},{width:"34%",ease:  Power4. easeOut})
            .fromTo('.underline2', 0.5,{height:".4%"},{height:"100%",ease:  Power4. easeIn})
            .fromTo('#symptomSolutions21', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn})
            .to('.yLine', 0.1, {display:"block"})
            .to('.cloud1', 0, {display:"block"})
            .to('.underline2', 0.5,{height:"0.8%", top:"96%",ease:  Power4. easeIn})
            .to('.underline2', 0,{zIndex:0})
            .add("levelS2",0.2)
            .fromTo('.underline22', 0.5,{width:".5%",left:"91%"},{width:"34%",left:"57.5%",ease:  Power4. easeOut},"levelS2")
            .fromTo('.underline22', 0.5,{height:".4%"},{height:"100%",ease:  Power4. easeIn,delay:0.5},"levelS2")
            .fromTo('.bottle2', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1},"levelS2")
            .fromTo('.hand2', 0,{display:"none"}, {display:"block",delay:1.1},"levelS2")
            .fromTo('.dis2', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1.1},"levelS2")
            .fromTo('.sysHead2', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1.1},"levelS2")
            .to('.underline22', 0.5,{height:"0.8%",top:"97%",ease:  Power4. easeIn,delay:1.2},"levelS2")
            .fromTo('#symptomSolutions22', 0,{opacity:0}, {opacity:1});
  var symptomSolutionScene2 = new ScrollMagic.Scene({
    triggerElement: "#triggerSas2",
    duration: 0,
    offset: 0
  })
  .setTween(symptomSolutionTween2)
  .addTo(controller)
/**************************/
var sasControl3=0;
Draggable.create(".bottle3", {
    type:"x",
    onDragEnd:function(e) {
        if (this.hitTest("#sas31")) {
            sasControl3=1;
            var hitSolutionTween3 = new TimelineMax();
              hitSolutionTween3
                .to('.lalGollaImg', 0.5, {scale:2.5,opacity:0, transformOrigin:"50% 50%"})
                /*.set(" #sas31", {visibility:"hidden", opacity:0},"levelH33")*/
                .set(" #sas32", {visibility:"visible"},"levelH33")
                .add("levelH33",0.7)
                .to(" #sas31",0.9, {opacity:0},"levelH333")
                .to(" #sas32",0.9, {opacity:1},"levelH333")
                .add("levelH3",0)
                .fromTo('.bottle3', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH3")
                .fromTo('.hand3', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH3")
                .fromTo('.dis3', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH3")
                .fromTo('.sysHead3', 0.2,{opacity:1}, {opacity:0,ease: Power1. easeOut},"levelH3")
                .fromTo('.bottle3', 0,{display:"block"}, {display:"none"})
                .fromTo('.hand3', 0,{display:"block"}, {display:"none"})
                .fromTo('.dis3', 0,{display:"block"}, {display:"none"})
                .fromTo('.sysHead3', 0,{display:"block"}, {display:"none"})
                .fromTo('.underline33', 0.7,{height:"0.8%",top:"97%"},{height:"100%",top:"0%",ease:  Power4. easeOut},"levelH3")
                .fromTo('#symptomSolutions32', 0.1,{display:"none"}, {display:"block"})
                .to('.underline33', 0.7,{height:"0.8%",top:"97%",ease:  Power4. easeIn});
        }
    }
});
hand3();
function hand3()
{
  if(sasControl3==1)
    return ;
  var lalTween3 = new TimelineMax({});
    lalTween3
      .to('.lalGollaImg', 0.8, {scale:1, transformOrigin:"50% 50%"})
      .to('.lalGollaImg', 0.8, {scale:0.7, transformOrigin:"50% 50%"});
  var handTween3 = new TimelineMax({});
    handTween3
      .to('.hand3', 0.1, {opacity:0.15})
      .fromTo('.hand3', 1.5,{left:"68.5%",rotation:45}, {left:"38.5%",rotation:-45,ease: Power0. easeOut, transformOrigin:"50% 50%"})
      .to('.hand3', 0.1, {opacity:0})
      .fromTo('.hand3', 0,{left:"38.5%",rotation:-45}, {left:"68.5%",rotation:45,ease: Power0. easeOut, transformOrigin:"50% 50%",onComplete:hand3});
}
var disTween3 = new TimelineMax({repeat:-1});
  disTween3
    .fromTo('.dis3', 1.5,{y:0}, {y:-15,ease: Power0. easeOut})
    .fromTo('.dis3', 1.5,{y:-15}, {y:0,ease: Power0. easeOut});
var symptomSolutionTween3 = new TimelineMax();
        symptomSolutionTween3
            .fromTo('.underline3', 0.5,{width:".5%"},{width:"34%",ease:  Power4. easeOut})
            .fromTo('.underline3', 0.5,{height:".4%"},{height:"100%",ease:  Power4. easeIn})
            .fromTo('#symptomSolutions31', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn})
            .to('.lalGolla', 0.1, {display:"block"})
            .to('.underline3', 0.5,{height:"0.8%",top:"97%",ease:  Power4. easeIn})
            .add("levelS3",0.2)
            .fromTo('.underline33', 0.5,{width:".5%",left:"91%"},{width:"34%",left:"57.5%",ease:  Power4. easeOut},"levelS3")
            .fromTo('.underline33', 0.5,{height:".4%"},{height:"100%",ease:  Power4. easeIn,delay:0.5},"levelS3")
            .fromTo('.bottle3', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1},"levelS3")
            .fromTo('.hand3', 0,{display:"none"}, {display:"block",delay:1.1},"levelS3")
            .fromTo('.dis3', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1.1},"levelS3")
            .fromTo('.sysHead3', 0.1,{opacity:0}, {opacity:1,ease:  Power4. easeIn,delay:1.1},"levelS3")
            .to('.underline33', 0.5,{height:"0.8%",top:"97%",ease:  Power4. easeIn,delay:1.2},"levelS3")
            .fromTo('#symptomSolutions32', 0,{opacity:0}, {opacity:1});
  var symptomSolutionScene3 = new ScrollMagic.Scene({
    triggerElement: "#triggerSas3",
    duration: 0,
    offset: 0
  })
  .setTween(symptomSolutionTween3)
  .addTo(controller)

/*******************************************************************************************/
var agrControll=0;
setTimeout(AgrF,4000);
function AgrF()
{
}
var agrScroll=0,scrollPrev=$("#ageRelatedTrigger").offset().top;
window.addEventListener("scroll", scrollFunction);
function scrollFunction()
{
  if($("#ageRelatedTrigger").offset().top>$(window).scrollTop()+500)
            return ;
        if(agrScroll==0)
            return ;
          agrScroll=0;
          var crtl=-1;
          if($(window).scrollTop()<scrollPrev)
            crtl=0.6;
          scrollPrev=$(window).scrollTop();
          var ageRelatedTween1 = new TimelineMax();
                ageRelatedTween1
                  .add("levelAge1")
                  .to('#back1',1, {y:"+="+(3*1*crtl),ease:   Power3.easeOut},"levelAge1")
                  .to('#back2',1, {y:"+="+(3*2*crtl),ease:   Power3.easeOut},"levelAge1")
                  .to('#back3',1, {y:"+="+(3*2*crtl),ease:   Power3.easeOut},"levelAge1")
                  .to('#back4',1, {y:"+="+(3*3*crtl),ease:   Power3.easeOut},"levelAge1")
                  .to('#back5',1, {y:"+="+(3*4*crtl),ease:   Power3.easeOut,onComplete:abc},"levelAge1");
}

function abc1()
{
 scrollPrev=$(window).scrollTop();
 abc();
}
function abc()
{
  agrScroll=1;
}
/***************************************************************************/

function onStartTween()
{
   disable_scroll();
    setTimeout(enable_scroll,1000);
}
var ageRelatedTween = new TimelineMax();
        ageRelatedTween
          .to("#agr",0.1,{opacity:1})
          .add("levelAge",0.1)
          .to("#agr", 0.6, {scrambleText:{text:"Age Related Problems", chars:"lowerCase", revealDelay:0.5, tweenLength:false, ease:Power1. easeOut}},"levelAge")
          .fromTo('#back1',0.5,{y:$(window).innerHeight()}, {y:0,ease:  Expo. easeOut},"levelAge")
          .fromTo('#back2',0.5,{y:$(window).innerHeight()}, {y:0,ease:  Expo. easeOut,delay:0.1},"levelAge")
          .fromTo('#back3',0.5,{y:$(window).innerHeight()}, {y:0,ease:  Expo. easeOut,delay:0.2},"levelAge")
          .fromTo('#back4',0.5,{y:$(window).innerHeight()}, {y:0,ease:  Expo. easeOut,delay:0.3},"levelAge")
          .fromTo('#back5',0.5,{y:$(window).innerHeight()}, {y:0,ease:  Expo. easeOut,delay:0.4},"levelAge")
          .to('.agrdiv',0.5,{opacity:1,delay:0.4,onComplete:agrMainC},"levelAge");
          /*.add("LevelZoom",1)
          .fromTo(".agrdiv1",1,{x:"-200%", y:"-200%",zIndex:0,opacity:0},{x:"0%", y:"0%",zIndex:2,opacity:1,ease:  Power0. easeOut},"LevelZoom")
          .fromTo(".agrdiv2",1,{x:"240%",y:"-180%",opacity:0},{x:"120%",y:"-90%",opacity:1,ease:  Power0. easeOut},"LevelZoom")
          .fromTo(".agrdiv3",1,{x:"120%", y:"300%",opacity:0},{x:"72%", y:"180%",opacity:1,ease:  Power0. easeOut,onComplete:abc1},"LevelZoom");*/
    var ageRelatedScene = new ScrollMagic.Scene({
    triggerElement: "#ageRelatedTrigger",
    duration: 0,
    offset: 0
  })
  .setTween(ageRelatedTween)
  .addTo(controller)
/*******************************************************************************************/
var opacityControl1=[1,.50,.20,0,0,.20,.50];
var opacityControl2=[.50,1,.50,.20,0,0,.20];
var opacityControl3=[.20,.50,1,.50,.20,0,0];
var opacityControl4=[0,.20,.50,1,.50,.20,0];
var opacityControl5=[0,0,.20,.50,1,.50,.20];
var opacityControl6=[.20,0,0,.20,.50,1,.50];
var opacityControl7=[.50,.20,0,0,.20,.50,1];
var x1=[0,420,550,1300,-1300,-550,-420];
var y1=[0,420,550,1300,-1300,-550,-420];

var x2=[84,0,-84,-110,-260,260,110];
var y2=[-420,0,420,550,1300,-1300,-550];

var x3=[550,420,0,-420,-550,-1300,1300];
var y3=[-550,-420,0,420,550,1300,-1300];

var x4=[1300,550,420,0,-420,-550,-1300];
var y4=[1300,550,420,0,-420,-550,-1300];

var x5=[-260,260,110,84,0,-84,-110];
var y5=[-1300,1300,550,420,0,-420,-550];

var x6=[550,1300,-1300,-550,-420,0,420];
var y6=[-550,-1300,1300,550,420,0,-420];

var x7=[420,550,1300,-1300,-550,-420,0];
var y7=[0,0,0,0,0,0,0];
var tweenOfAgr0 = new TimelineMax();
var tweenOfAgr1 = new TimelineMax();
var tweenOfAgr2 = new TimelineMax();
var tweenOfAgr3 = new TimelineMax();
var tweenOfAgr4 = new TimelineMax();
var tweenOfAgr5 = new TimelineMax();
var tweenOfAgr6 = new TimelineMax();
var tweenAgrMainC=0;
var tweenAgr=-1;
var tweenAgr0=0;
var tweenAgr1=0;
function agrMainC()
{
  if(tweenAgrMainC==0)
  {
     $('.agrdiv9').addClass('centerItem');
    tweenAgrMainC=1;
    agrMain();
  }
}
function agrMain()
{
  if(tweenAgr1==0){
    tweenAgr1=1;
    tweenAgr0=0;
  }
  else{
    tweenAgr0=2;
  }
  tweenAgr=(tweenAgr+1)%7;
  //console.log('agrMain ' + tweenAgr);
  if(tweenAgr==0){
    $('.agrdiv3').css({opacity:1});
    $('.agrdiv4').css({opacity:0});
    tweenOfAgr0.clear();
    if(tweenOfAgr0.pause())
      tweenOfAgr0.play();
    agrTween0();
  }
  else if(tweenAgr==1){
    $('.agrdiv4').css({opacity:1});
    $('.agrdiv5').css({opacity:0});
    tweenOfAgr1.clear();
    if(tweenOfAgr1.pause())
      tweenOfAgr1.play();
    agrTween1();
  }
  else if(tweenAgr==2){
    $('.agrdiv5').css({opacity:1});
    $('.agrdiv6').css({opacity:0});
    tweenOfAgr2.clear();
    if(tweenOfAgr2.pause())
      tweenOfAgr2.play();
    agrTween2();
  }
  else if(tweenAgr==3){
    $('.agrdiv6').css({opacity:1});
    $('.agrdiv9').css({opacity:0});
    tweenOfAgr3.clear();
    if(tweenOfAgr3.pause())
      tweenOfAgr3.play();
    agrTween3();
  }
  else if(tweenAgr==4){
    $('.agrdiv9').css({opacity:1});
    $('.agrdiv1').css({opacity:0});
    tweenOfAgr4.clear();
    if(tweenOfAgr4.pause())
      tweenOfAgr4.play();
    agrTween4();
  }
  else if(tweenAgr==5){
    $('.agrdiv1').css({opacity:1});
    $('.agrdiv2').css({opacity:0});
    tweenOfAgr5.clear();
    if(tweenOfAgr5.pause())
      tweenOfAgr5.play();
    agrTween5();
  }
  else if(tweenAgr==6){
    $('.agrdiv2').css({opacity:1});
    $('.agrdiv3').css({opacity:0});
    tweenOfAgr6.clear();
    if(tweenOfAgr6.pause())
      tweenOfAgr6.play();
    agrTween6();
  }
}
$( ".iconRight" ).click(function() {
  tweenOfAgr0.timeScale(3);
  tweenOfAgr1.timeScale(3);
  tweenOfAgr2.timeScale(3);
  tweenOfAgr3.timeScale(3);
  tweenOfAgr4.timeScale(3);
  tweenOfAgr5.timeScale(3);
  tweenOfAgr6.timeScale(3);
});
$( ".iconLeft" ).click(function() {
  if(tweenAgr==0){
    tweenOfAgr0.pause();
  }
  if(tweenAgr==1){
    tweenOfAgr1.pause(); 
  }
  if(tweenAgr==2){
    tweenOfAgr2.pause();
  }
  if(tweenAgr==3){
    tweenOfAgr3.pause(); 
  }
  if(tweenAgr==4){
    tweenOfAgr4.pause(); 
  }
  if(tweenAgr==5){
    tweenOfAgr5.pause(); 
  }
  if(tweenAgr==6){
    tweenOfAgr6.pause(); 
  }
  tweenAgr=(tweenAgr-3+7)%7;
  tweenAgr1=0;
  //console.log(tweenAgr);
  agrMain();
});
function agrTween0()
{
  $('.agrdiv6').removeClass('centerItem');
  $('.agrdiv9').addClass('centerItem');
  tweenOfAgr0.timeScale(1);
        tweenOfAgr0
          .add("levelAgr0",tweenAgr0)
          /*.set(".slideText",{text:"Dosage for Infants and Children"},"levelAgr0")*/
          .to(".agrdiv1", 1, {x:x1[tweenAgr],y:y1[tweenAgr],opacity:opacityControl1[tweenAgr],zIndex:1,ease:  Power0. easeNone},"levelAgr0")
          .to(".agrdiv2", 1, {x:x2[tweenAgr],y:y2[tweenAgr],opacity:opacityControl2[tweenAgr],ease:  Power0. easeNone},"levelAgr0")
          .to(".agrdiv3", 1, {x:x3[tweenAgr],y:y3[tweenAgr],opacity:opacityControl3[tweenAgr],ease:  Power0. easeNone},"levelAgr0")
          .to(".agrdiv4", 1, {x:x4[tweenAgr],y:y4[tweenAgr],opacity:opacityControl4[tweenAgr],ease:  Power0. easeNone},"levelAgr0")
          .to(".agrdiv5", 1, {x:x5[tweenAgr],y:y5[tweenAgr],opacity:opacityControl5[tweenAgr],ease:  Power0. easeNone},"levelAgr0")
          .to(".agrdiv6", 1, {x:x6[tweenAgr],y:y6[tweenAgr],opacity:opacityControl6[tweenAgr],ease:  Power0. easeNone},"levelAgr0")
          .to(".agrdiv9", 1, {x:x7[tweenAgr],y:y7[tweenAgr],opacity:opacityControl7[tweenAgr],zIndex:0,ease:  Power0. easeNone, onComplete:agrMain},"levelAgr0");
}
function agrTween1()
{
  $('.agrdiv9').removeClass('centerItem');
  $('.agrdiv1').addClass('centerItem');
  tweenOfAgr1.timeScale(1);
        tweenOfAgr1
          .add("levelAgr1",tweenAgr0)
          /*.set(".slideText",{text:"Managing Children Fever"},"levelAgr1")*/
          .to(".agrdiv1", 1, {x:x1[tweenAgr],y:y1[tweenAgr],opacity:opacityControl1[tweenAgr],zIndex:0,ease:  Power0. easeNone},"levelAgr1")
          .to(".agrdiv2", 1, {x:x2[tweenAgr],y:y2[tweenAgr],opacity:opacityControl2[tweenAgr],zIndex:1,ease:  Power0. easeNone},"levelAgr1")
          .to(".agrdiv3", 1, {x:x3[tweenAgr],y:y3[tweenAgr],opacity:opacityControl3[tweenAgr],ease:  Power0. easeNone},"levelAgr1")
          .to(".agrdiv4", 1, {x:x4[tweenAgr],y:y4[tweenAgr],opacity:opacityControl4[tweenAgr],ease:  Power0. easeNone},"levelAgr1")
          .to(".agrdiv5", 1, {x:x5[tweenAgr],y:y5[tweenAgr],opacity:opacityControl5[tweenAgr],ease:  Power0. easeNone},"levelAgr1")
          .to(".agrdiv6", 1, {x:x6[tweenAgr],y:y6[tweenAgr],opacity:opacityControl6[tweenAgr],ease:  Power0. easeNone},"levelAgr1")
          .to(".agrdiv9", 1, {x:x7[tweenAgr],y:y7[tweenAgr],opacity:opacityControl7[tweenAgr],ease:  Power0. easeNone, onComplete:agrMain},"levelAgr1");
}
function agrTween2()
{
  $('.agrdiv1').removeClass('centerItem');
  $('.agrdiv2').addClass('centerItem');
  tweenOfAgr2.timeScale(1);
        tweenOfAgr2
          .add("levelAgr2",tweenAgr0)
          /*.set(".slideText",{text:"Managing Children vomiting and diarrhea"},"levelAgr2")*/
          .to(".agrdiv1", 1, {x:x1[tweenAgr],y:y1[tweenAgr],opacity:opacityControl1[tweenAgr],ease:  Power0. easeNone},"levelAgr2")
          .to(".agrdiv2", 1, {x:x2[tweenAgr],y:y2[tweenAgr],opacity:opacityControl2[tweenAgr],zIndex:0,ease:  Power0. easeNone},"levelAgr2")
          .to(".agrdiv3", 1, {x:x3[tweenAgr],y:y3[tweenAgr],opacity:opacityControl3[tweenAgr],zIndex:1,ease:  Power0. easeNone},"levelAgr2")
          .to(".agrdiv4", 1, {x:x4[tweenAgr],y:y4[tweenAgr],opacity:opacityControl4[tweenAgr],ease:  Power0. easeNone},"levelAgr2")
          .to(".agrdiv5", 1, {x:x5[tweenAgr],y:y5[tweenAgr],opacity:opacityControl5[tweenAgr],ease:  Power0. easeNone},"levelAgr2")
          .to(".agrdiv6", 1, {x:x6[tweenAgr],y:y6[tweenAgr],opacity:opacityControl6[tweenAgr],ease:  Power0. easeNone},"levelAgr2")
          .to(".agrdiv9", 1, {x:x7[tweenAgr],y:y7[tweenAgr],opacity:opacityControl7[tweenAgr],ease:  Power0. easeNone, onComplete:agrMain},"levelAgr2");
}
function agrTween3()
{
  $('.agrdiv2').removeClass('centerItem');
  $('.agrdiv3').addClass('centerItem');
  tweenOfAgr3.timeScale(1);
        tweenOfAgr3
          .add("levelAgr3",tweenAgr0)
          /*.set(".slideText",{text:"Common Colds In Children – And How To Manage It"},"levelAgr3")*/
          .to(".agrdiv1", 1, {x:x1[tweenAgr],y:y1[tweenAgr],opacity:opacityControl1[tweenAgr],ease:  Power0. easeNone},"levelAgr3")
          .to(".agrdiv2", 1, {x:x2[tweenAgr],y:y2[tweenAgr],opacity:opacityControl2[tweenAgr],ease:  Power0. easeNone},"levelAgr3")
          .to(".agrdiv3", 1, {x:x3[tweenAgr],y:y3[tweenAgr],opacity:opacityControl3[tweenAgr],zIndex:0,ease:  Power0. easeNone},"levelAgr3")
          .to(".agrdiv4", 1, {x:x4[tweenAgr],y:y4[tweenAgr],opacity:opacityControl4[tweenAgr],zIndex:1,ease:  Power0. easeNone},"levelAgr3")
          .to(".agrdiv5", 1, {x:x5[tweenAgr],y:y5[tweenAgr],opacity:opacityControl5[tweenAgr],ease:  Power0. easeNone},"levelAgr3")
          .to(".agrdiv6", 1, {x:x6[tweenAgr],y:y6[tweenAgr],opacity:opacityControl6[tweenAgr],ease:  Power0. easeNone},"levelAgr3")
          .to(".agrdiv9", 1, {x:x7[tweenAgr],y:y7[tweenAgr],opacity:opacityControl7[tweenAgr],ease:  Power0. easeNone, onComplete:agrMain},"levelAgr3");
}
function agrTween4()
{
  $('.agrdiv3').removeClass('centerItem');
  $('.agrdiv4').addClass('centerItem');
  tweenOfAgr4.timeScale(1);
        tweenOfAgr4
          .add("levelAgr4",tweenAgr0)
          /*.set(".slideText",{text:"Dosage for Adults"},"levelAgr4")*/
          .to(".agrdiv1", 1, {x:x1[tweenAgr],y:y1[tweenAgr],opacity:opacityControl1[tweenAgr],ease:  Power0. easeNone},"levelAgr4")
          .to(".agrdiv2", 1, {x:x2[tweenAgr],y:y2[tweenAgr],opacity:opacityControl2[tweenAgr],ease:  Power0. easeNone},"levelAgr4")
          .to(".agrdiv3", 1, {x:x3[tweenAgr],y:y3[tweenAgr],opacity:opacityControl3[tweenAgr],ease:  Power0. easeNone},"levelAgr4")
          .to(".agrdiv4", 1, {x:x4[tweenAgr],y:y4[tweenAgr],opacity:opacityControl4[tweenAgr],zIndex:0,ease:  Power0. easeNone},"levelAgr4")
          .to(".agrdiv5", 1, {x:x5[tweenAgr],y:y5[tweenAgr],opacity:opacityControl5[tweenAgr],zIndex:1,ease:  Power0. easeNone},"levelAgr4")
          .to(".agrdiv6", 1, {x:x6[tweenAgr],y:y6[tweenAgr],opacity:opacityControl6[tweenAgr],ease:  Power0. easeNone},"levelAgr4")
          .to(".agrdiv9", 1, {x:x7[tweenAgr],y:y7[tweenAgr],opacity:opacityControl7[tweenAgr],ease:  Power0. easeNone, onComplete:agrMain},"levelAgr4");
}
function agrTween5()
{
  $('.agrdiv4').removeClass('centerItem');
  $('.agrdiv5').addClass('centerItem');
  tweenOfAgr5.timeScale(1);
        tweenOfAgr5
          .add("levelAgr5",tweenAgr0)
          /*.set(".slideText",{text:"Managing Adult vomiting and diarrhea"},"levelAgr5")*/
          .to(".agrdiv1", 1, {x:x1[tweenAgr],y:y1[tweenAgr],opacity:opacityControl1[tweenAgr],ease:  Power0. easeNone},"levelAgr5")
          .to(".agrdiv2", 1, {x:x2[tweenAgr],y:y2[tweenAgr],opacity:opacityControl2[tweenAgr],ease:  Power0. easeNone},"levelAgr5")
          .to(".agrdiv3", 1, {x:x3[tweenAgr],y:y3[tweenAgr],opacity:opacityControl3[tweenAgr],ease:  Power0. easeNone},"levelAgr5")
          .to(".agrdiv4", 1, {x:x4[tweenAgr],y:y4[tweenAgr],opacity:opacityControl4[tweenAgr],ease:  Power0. easeNone},"levelAgr5")
          .to(".agrdiv5", 1, {x:x5[tweenAgr],y:y5[tweenAgr],opacity:opacityControl5[tweenAgr],zIndex:0,ease:  Power0. easeNone},"levelAgr5")
          .to(".agrdiv6", 1, {x:x6[tweenAgr],y:y6[tweenAgr],opacity:opacityControl6[tweenAgr],zIndex:1,ease:  Power0. easeNone},"levelAgr5")
          .to(".agrdiv9", 1, {x:x7[tweenAgr],y:y7[tweenAgr],opacity:opacityControl7[tweenAgr],ease:  Power0. easeNone, onComplete:agrMain},"levelAgr5");
}
function agrTween6()
{
  $('.agrdiv5').removeClass('centerItem');
  $('.agrdiv6').addClass('centerItem');
  tweenOfAgr6.timeScale(1);
        tweenOfAgr6
          .add("levelAgr6",tweenAgr0)
          /*.set(".slideText",{text:"Dosage for Infants and Children"},"levelAgr6")*/
          .to(".agrdiv1", 1, {x:x1[tweenAgr],y:y1[tweenAgr],opacity:opacityControl1[tweenAgr],ease:  Power0. easeNone},"levelAgr6")
          .to(".agrdiv2", 1, {x:x2[tweenAgr],y:y2[tweenAgr],opacity:opacityControl2[tweenAgr],ease:  Power0. easeNone},"levelAgr6")
          .to(".agrdiv3", 1, {x:x3[tweenAgr],y:y3[tweenAgr],opacity:opacityControl3[tweenAgr],ease:  Power0. easeNone},"levelAgr6")
          .to(".agrdiv4", 1, {x:x4[tweenAgr],y:y4[tweenAgr],opacity:opacityControl4[tweenAgr],ease:  Power0. easeNone},"levelAgr6")
          .to(".agrdiv5", 1, {x:x5[tweenAgr],y:y5[tweenAgr],opacity:opacityControl5[tweenAgr],ease:  Power0. easeNone},"levelAgr6")
          .to(".agrdiv6", 1, {x:x6[tweenAgr],y:y6[tweenAgr],opacity:opacityControl6[tweenAgr],zIndex:0,ease:  Power0. easeNone},"levelAgr6")
          .to(".agrdiv9", 1, {x:x7[tweenAgr],y:y7[tweenAgr],opacity:opacityControl7[tweenAgr],zIndex:1,ease:  Power0. easeNone, onComplete:agrMain},"levelAgr6");
}

/**************************************************************************/
MorphSVGPlugin.convertToPath("#wDraw2");
MorphSVGPlugin.convertToPath("#wDraw4");
function pathPrepare1 ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}
var $pathW1 = $("path#wDraw1");
var $pathW2 = $("path#wDraw2");
var $pathW3 = $("path#wDraw3");
var $pathW4 = $("path#wDraw4");
pathPrepare1($pathW1);
pathPrepare1($pathW2);
pathPrepare1($pathW3);
pathPrepare1($pathW4);
var womenVar=0;
function womenFuntionControl()
{
  if(womenVar==0){
    womenVar=1;
    womenF1();
  }

} 
function womenF1()
{
  pathPrepare1($pathW1);
  pathPrepare1($pathW2);
  pathPrepare1($pathW3);
  pathPrepare1($pathW4);
  var womenSectionTween1 = new TimelineMax();
        womenSectionTween1
          //.to('.womenSections',0.7, {backgroundColor:"#ffccff"})
          .to('#Layer_W',0, {opacity:1})
          .to('#Layer_W1',0, {opacity:1})
          .add("levelWomen1",0.2)
          .add(TweenMax.to($pathW2, 1.5, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen1")
          .add(TweenMax.to($pathW1, 2, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen1")
          .add(TweenMax.to($pathW4, 1.5, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen1")
          .add(TweenMax.to($pathW3, 2, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen1")
          .add("levelNewWomen2",2.2)
          .to('#Layer_W',0.4, {opacity:0,ease:  Power0. easeOut},"levelNewWomen2")
          .to('#Layer_W1',0.4, {opacity:0,ease:  Power0. easeOut,onComplete:womenF2},"levelNewWomen2");
          /*.fromTo('.womendiv1',3,{width:"0.3%"}, {width:"100%",ease:  Power0. easeOut},"levelWomen1")
          .fromTo('.womendiv',3,{height:"0.4%"}, {height:"100%",ease:  Power0. easeOut,onComplete:womenF2},"levelWomen1");*/
}
function womenF2()
{
  pathPrepare1($pathW1);
  pathPrepare1($pathW2);
  pathPrepare1($pathW3);
  pathPrepare1($pathW4);
  var womenSectionTween1 = new TimelineMax();
        womenSectionTween1
          //.to('.womenSections',0.7, {backgroundColor:"#14c4ff"})
          .to('#Layer_W',0, {opacity:1})
          .to('#Layer_W1',0, {opacity:1})
          .add("levelWomen2",0.2)
          .add(TweenMax.to($pathW2, 1.5, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen2")
          .add(TweenMax.to($pathW1, 2, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen2")
          .add(TweenMax.to($pathW4, 1.5, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen2")
          .add(TweenMax.to($pathW3, 2, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen2")
          .add("levelNewWomen1",2.2)
          .to('#Layer_W',0.4, {opacity:0,ease:  Power0. easeOut},"levelNewWomen1")
          .to('#Layer_W1',0.4, {opacity:0,ease:  Power0. easeOut,onComplete:womenF1},"levelNewWomen1");
          /*.fromTo('.womendiv1',3,{width:"0.3%"}, {width:"100%",ease:  Power0. easeOut},"levelWomen2")
          .fromTo('.womendiv',3,{height:"0.4%"}, {height:"100%",ease:  Power0. easeOut,onComplete:womenF1},"levelWomen2");*/
}
var womenImgTween = new TimelineMax({repeat:-1});
        womenImgTween
          .fromTo('.wImg',1.5,{y:0}, {y:-10,ease:  Power0. easeOut})
          .fromTo('.wImg',1.5,{y:-10}, {y:0,ease:  Power0. easeOut});
  var womenSectionTween = new TimelineMax();
        womenSectionTween
          .fromTo('.womendiv',0.6,{width:"0.01%"}, {width:"100%",ease: Power4. easeOut})
          .to("#women",0.1,{opacity:1})
          .to(".womenSections",0.1,{opacity:1})
          .to('.womendiv',0.6, {width:"0.01%",left:"99.99%",ease: Power4. easeIn})
          .add("levelWomen",1.3)
          .to("#women", 0.6, {scrambleText:{text:"Female Section", chars:"lowerCase", revealDelay:0.5, tweenLength:false, ease:Power1. easeOut}},"levelWomen")
          /*.to("#womenH1", 1, {text:"Menstrual Pain", ease:Linear.easeNone,delay:1},"levelWomen")
          .to("#womenH2", 1, {text:"Sinus Problem", ease:Linear.easeNone,delay:1.5},"levelWomen")*/
          .add(TweenMax.to($pathW2, 1.5, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen")
          .add(TweenMax.to($pathW1, 2, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen")
          .add(TweenMax.to($pathW4, 1.5, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen")
          .add(TweenMax.to($pathW3, 2, {strokeDashoffset: 0, ease:Linear.easeNone}),"levelWomen")
          .add("levelNewWomen",2.2)
          .to('#Layer_W',0.4, {opacity:0,ease:  Power0. easeOut},"levelNewWomen")
          .to('#Layer_W1',0.4, {opacity:0,ease:  Power0. easeOut,onComplete:womenFuntionControl},"levelNewWomen");
          /*.fromTo('.womendiv1',4,{width:"0.3%"}, {width:"100%",ease:  Power0. easeOut},"levelWomen")
          .fromTo('.womendiv',4,{height:"0.4%"}, {height:"100%",ease:  Power0. easeOut},"levelWomen");*/

    var WomenScene = new ScrollMagic.Scene({
    triggerElement: "#womenTrigger",
    duration: 0,
    offset: 0
  })
  .setTween(womenSectionTween)
  .addTo(controller)

}
});
/***************************************************************************
***************************************************************************/


