$(document).ready(function() {
	var s = $(".navigation_wrapper");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <=1000) {
			s.removeClass("stick");	
		} else {
			s.addClass("stick");
		}
	});
	$(".mobile_menu_button").on('click touch', function () {
	    $(".navigation_wrapper").toggleClass("mobile_open");
	});
	$(".mobilenav .agis").on('click touch', function () {
	    $(".mobilenav .dropdown").slideToggle();
	});
	$(".footer .agis").on('click touch', function () {
	    $(".footer .dropdown").slideToggle();
	});
});

/*-----------------------------------------------------------------*/
    /* Form Steps
/*-----------------------------------------------------------------*/
$(document).ready(function(){		
	
	function checkForInput(element) {
	  // element is passed to the function ^
	  
	  const $label = $(element).parent();
	
	  if ($(element).val().length > 0) {
	    $label.addClass('focus');
	  } else {
	    $label.removeClass('focus');
	  }
	}
	
	// The lines below are executed on page load
	$('.field .floatlabel').each(function() {
	  checkForInput(this);
	});
	
	// The lines below (inside) are executed on change & keyup
	$('.field .floatlabel').on('change keyup', function() {
	  checkForInput(this);  
	});
	
    var current = 1;
     
    widget      = $(".step");
    btnnext     = $(".next");
    btnback     = $(".back"); 
    btnsubmit   = $(".submit");
    btnone     = $(".step1-progress");
    btntwo     = $(".step2-progress");
  
    // Init buttons and UI
    widget.not(':eq(0)').hide();
    hideButtons(current);
    setProgress(current);
  
    // Next button click action
    btnnext.click(function(){
        if(current < widget.length){
            // Check validation
            if($(".form").valid()){
                widget.fadeIn(1000);
                widget.not(':eq('+(current++)+')').hide();
                setProgress(current);
            }
        }
        hideButtons(current);
    }) 
    // Back button click action
    btnback.click(function(){
        if(current > 1){
            current = current - 2;
            if(current < widget.length){
                widget.fadeIn(1000);
                widget.not(':eq('+(current++)+')').hide();
                setProgress(current);
            }
        }
        hideButtons(current);
    })
  
    // Submit button click
    btnsubmit.click(function(){
        alert("Submit button clicked");
    });
     
    btnone.click(function(){
        if(current = 2){
            current = current - 2;
            if(current < widget.length){
                widget.fadeIn(1000);
                widget.not(':eq('+(current++)+')').hide();
                setProgress(current);
            }
        } else {
            current = current - 3;
            if(current < widget.length){
                widget.fadeIn(1000);
                widget.not(':eq('+(current++)+')').hide();
                setProgress(current);
            }
        }
        hideButtons(current);
    });
    btntwo.click(function(){
        if(current = 3){
            current = current - 2;
            if(current < widget.length){
                widget.fadeIn(1000);
                widget.not(':eq('+(current++)+')').hide();
                setProgress(current);
            }
        } else {
            if($(".form").valid()){
                widget.fadeIn(1000);
                widget.not(':eq('+(current++)+')').hide();
                setProgress(current);
            }
        }
        hideButtons(current);
    });
     
  
    $('.form').validate({ // initialize plugin
        //ignore:":not(:visible)",          
        rules: {
            f_name : "required",
            l_name : "required",
            email : "required",
            phone : "required",
            location : "required",
            program : "required"
        },
    });
});
 
// Change progress bar action
setProgress = function(currstep){
    var percent = parseFloat(100 / widget.length) * currstep;
    percent = percent.toFixed();
    $(".step-counter ul").removeClass();    
    $(".step-counter ul").addClass("active-"+percent);      
}
  
// Hide buttons according to the current step
hideButtons = function(current){
    var limit = parseInt(widget.length); 
  
    $(".action").hide();
  
    if(current < limit) btnnext.fadeIn(1000);
    if(current > 1) btnback.fadeIn(1000);
    if (current == limit) { 
        btnnext.hide(); 
        btnsubmit.fadeIn(1000);
    }
}
 
$('.secondChoice').change(function(){
    $(this).removeClass('unselect');
});

/*-----------------------------------------------------------------*/
    /* IS SCROLLED INTO VIEW
/*-----------------------------------------------------------------*/
function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);
    var halfheight = $window.height() / 5;
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(window).scroll(function() {
    $('.section_wrapper').each(function() {
        if (isScrolledIntoView($(this))) {
            $(this).addClass('visible');
        } else {}
    });
    $('.visible .count').each(function() {
        function commaSeparateNumber(val) {
            while (/(\d+)(\d{3})/.test(val.toString())) {
                val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
            }
            return val;
        }

        var $this = $(this),
            countTo = $this.attr('data-count');
        var numtext = $this.text();

        if (numtext <= 0) {
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 1000,
                easing: 'linear',
                step: function() {
                    $this.text(commaSeparateNumber(Math.floor(this.countNum)));
                },
                complete: function() {
                    $this.text(commaSeparateNumber(this.countNum));
                }

            });
        }
    });
});
  





/*-----------------------------------------------------------------*/
    /* Dynamic Location select
/*-----------------------------------------------------------------*/
$("#locationFirstChoice").change(function() {
 
    var $dropdown = $(this);
     
    $.getJSON("jsondata/datalocation.json", function(data) {
 
        var key = $dropdown.val();
        var vals = [];
                             
        switch(key) {
            case 'lincoln':
                vals = data.lincoln.split(",");
                break;
            case 'omaha':
                vals = data.omaha.split(",");
                break;
            case 'gi':
                vals = data.gi.split(",");
                break;
            case 'online':
                vals = data.online.split(",");
                break;
            case 'base':
                vals = ['Please select a Location!'];
        }
         
        var $secondChoice = $("#programSecondChoice");
        $secondChoice.empty();
        $.each(vals, function(index, value) {
            $secondChoice.append("<option>" + value + "</option>");
        });
    });
});
 
$("#programFirstChoice").change(function() {
 
    var $dropdown = $(this);
 
    $.getJSON("../jsondata/dataprogram.json", function(data) {
     
        var key = $dropdown.val();
        var vals = [];
                             
        switch(key) {
            case 'criminal_justice':
                vals = data.criminal_justice.split(",");
                break;
            case 'graphic_design':
                vals = data.graphic_design.split(",");
                break;
            case 'health_sciences':
                vals = data.health_sciences.split(",");
                break;
            case 'rn_to_bsn':
                vals = data.rn_to_bsn.split(",");
                break;
            case 'human_relations':
                vals = data.human_relations.split(",");
                break;
            case 'info_systems':
                vals = data.info_systems.split(",");
                break;
            case 'liberal_arts':
                vals = data.liberal_arts.split(",");
                break;
            case 'organizational_comm':
                vals = data.organizational_comm.split(",");
                break;
            case 'paraleagal':
                vals = data.paraleagal.split(",");
                break;
            case 'accounting':
                vals = data.accounting.split(",");
                break;
            case 'business':
                vals = data.business.split(",");
                break;
            case 'public_admin':
                vals = data.public_admin.split(",");
                break;
            case 'advanced_certification':
                vals = data.advanced_certification.split(",");
                break;
            case 'counseling':
                vals = data.counseling.split(",");
                break;
            case 'counseling_school':
                vals = data.counseling_school.split(",");
                break;
            case 'arts_management':
                vals = data.arts_management.split(",");
                break;
            case 'masters_education_instruction':
                vals = data.masters_education_instruction.split(",");
                break;
            case 'masters_education_leadership':
                vals = data.masters_education_leadership.split(",");
                break;
            case 'english_language':
                vals = data.english_language.split(",");
                break;
            case 'childhood_teaching':
                vals = data.childhood_teaching.split(",");
                break;
            case 'k12_teaching_endorsement':
                vals = data.k12_teaching_endorsement.split(",");
                break;
            case 'special_education':
                vals = data.special_education.split(",");
                break;
            case 'reading_specialist':
                vals = data.reading_specialist.split(",");
                break;
            case 'education_specialist':
                vals = data.education_specialist.split(",");
                break;
            case 'doctorate_education':
                vals = data.doctorate_education.split(",");
                break;
            case 'base':
                vals = ['Please select a Location!'];
        }
         
        var $secondChoice = $("#locationSecondChoice");
        $secondChoice.empty();
        $.each(vals, function(index, value) {
            $secondChoice.append("<option>" + value + "</option>");
        });
 
    });
});



/*-----------------------------------------------------------------*/
    /* Background Parallax effects
/*-----------------------------------------------------------------*/
/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),"top"!=r[0]&&"bottom"!=r[0]&&"left"!=r[1]&&"right"!=r[1]||(r=[r[1],r[0]]),this.positionX!==s&&(r[0]=this.positionX.toLowerCase()),this.positionY!==s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:'url("'+this.imageSrc+'")',backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:'url("'+this.imageSrc+'")',backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo(this.mirrorContainer);var a=this.$element.find(">.parallax-slider"),n=!1;0==a.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=a.prependTo(this.$mirror),n=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),n||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||a.length>0)&&this.$slider.trigger("load")}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,mirrorContainer:"body",refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t,i=o.winHeight,e=o.docHeight,s=Math.min(this.boxOffsetTop,e-i),h=Math.max(this.boxOffsetTop+this.boxHeight-i,0),r=this.boxHeight+(s-h)*(1-this.speed)|0,a=(this.boxOffsetTop-s)*(1-this.speed)|0;r*this.aspectRatio>=this.boxWidth?(this.imageWidth=r*this.aspectRatio|0,this.imageHeight=r,this.offsetBaseTop=a,t=this.imageWidth-this.boxWidth,"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-t:isNaN(this.positionX)?this.offsetLeft=-t/2|0:this.offsetLeft=Math.max(this.positionX,-t)):(this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0,t=this.imageHeight-r,"top"==this.positionY?this.offsetBaseTop=a:"bottom"==this.positionY?this.offsetBaseTop=a-t:isNaN(this.positionY)?this.offsetBaseTop=a-t/2|0:this.offsetBaseTop=a+Math.max(this.positionY,-t))},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d("+this.mirrorLeft+"px, "+(this.mirrorTop-e)+"px, 0px)",visibility:this.visibility,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d("+this.offsetLeft+"px, "+this.offsetTop+"px, 0px)",position:"absolute",height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){function s(){if(p==i.pageYOffset)return i.requestAnimationFrame(s),!1;p=i.pageYOffset,h.render(),i.requestAnimationFrame(s)}if(!this.isReady){var h=this,r=t(e),a=t(i),n=function(){o.winHeight=a.height(),o.winWidth=a.width(),o.docHeight=r.height(),o.docWidth=r.width()},l=function(){var t=a.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,a.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};a.on("resize.px.parallax load.px.parallax",function(){n(),h.refresh(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){l(),o.requestRender()}),n(),l(),this.isReady=!0;var p=-1;s()}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;t.render(),t.isBusy=!1},destroy:function(e){var s,h=t(e).data("px.parallax");for(h.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==h&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var h=t.fn.parallax;t.fn.parallax=function(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")?"object"==typeof s&&t.extend(h.data("px.parallax"),r):(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})},t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=h,this},t(function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);

/*-----------------------------------------------------------------*/
    /* Foreground parallax effect
/*-----------------------------------------------------------------*/

/*!
 * paroller.js v (https://tgomilar.github.io/paroller.js)
 */
!function(r){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=r(require("jquery")):r(jQuery)}(function($){"use strict";var r={bgVertical:function(r,t){return r.css({"background-position":"center "+-t+"px"})},bgHorizontal:function(r,t){return r.css({"background-position":-t+"px center"})},vertical:function(r,t,o){return"none"===o?o="":!0,r.css({"-webkit-transform":"translateY("+t+"px)"+o,"-moz-transform":"translateY("+t+"px)"+o,transform:"translateY("+t+"px)"+o,transition:"transform linear","will-change":"transform"})},horizontal:function(r,t,o){return"none"===o?o="":!0,r.css({"-webkit-transform":"translateX("+t+"px)"+o,"-moz-transform":"translateX("+t+"px)"+o,transform:"translateX("+t+"px)"+o,transition:"transform linear","will-change":"transform"})}};$.fn.paroller=function(t){var o=$(window).height(),n=$(document).height(),t=$.extend({factor:0,type:"background",direction:"vertical"},t);return this.each(function(){var a=!1,e=$(this),i=e.offset().top,c=e.outerHeight(),l=e.data("paroller-factor"),s=e.data("paroller-type"),u=e.data("paroller-direction"),f=l?l:t.factor,d=s?s:t.type,h=u?u:t.direction,p=Math.round(i*f),g=Math.round((i-o/2+c)*f),m=e.css("transform");"background"==d?"vertical"==h?r.bgVertical(e,p):"horizontal"==h&&r.bgHorizontal(e,p):"foreground"==d&&("vertical"==h?r.vertical(e,g,m):"horizontal"==h&&r.horizontal(e,g,m));var b=function(){a=!1};$(window).on("scroll",function(){if(!a){var t=$(this).scrollTop();n=$(document).height(),p=Math.round((i-t)*f),g=Math.round((i-o/2+c-t)*f),"background"==d?"vertical"==h?r.bgVertical(e,p):"horizontal"==h&&r.bgHorizontal(e,p):"foreground"==d&&n>=t&&("vertical"==h?r.vertical(e,g,m):"horizontal"==h&&r.horizontal(e,g,m)),window.requestAnimationFrame(b),a=!0}}).trigger("scroll")})}});
