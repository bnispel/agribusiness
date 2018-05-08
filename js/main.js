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