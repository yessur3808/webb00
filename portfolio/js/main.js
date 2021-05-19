/*! Lazy Load 1.9.1 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);


var config = {
	name: "Yaser Ibrahim's Portfolio", url_path: window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1), index: "index.html",
	carousel:{},	
	frames: [], swipers: {}, loader: { queue: 0, loaded: 0 }, delays: { scroll: 300 }, current: { frame: 0 },

	isInView: function(elem){
		var bound=elem.getBoundingClientRect();
		return((bound.bottom>=0&&bound.top<=(window.innerHeight||document.documentElement.clientHeight)) && (bound.right>=0 &&bound.right<=(window.innerWidth||document.documentElement.clientWidth)));
	},
	belongsLinks: {
		"scmp":"https://www.scmp.com/infographic/","personal":"https://github.com/yessur3808"
	},
	counterbool: false
}

var PlatformEvent = 'click';

$(document).ready(function() {
	initTracking();
	checkBrowser();
	siteControls();
	dataInput();
	
	setTimeout(function(){
		particlesJS.load('particles-js', 'https://raw.githubusercontent.com/yessur3808/curly/master/particlesjs-config.json');
	}, 1200);
});

function initSwiper(){
	
	config.swipers.frames = new Swiper("#projectslides", { 
		direction: 'horizontal', 
		effect: "slide",
		slidesPerView: 1,
		slidesPerGroup: 1, 
		breakpoints: {
			780: { spaceBetween:12,slidesPerView: 1.1,centeredSlides: true }
		},
		centeredSlides: false, 
		speed: config.delays.scroll, 
		longSwipersRatio: .32, 
		grabCursor: true,
		resistance: false, 
		loop: false,
		pagination: { el: '.swiper-pagination',type: 'bullets', clickable: true }, 
		setWrapperSize: false, 
		cache:true, 
		autoResize: true,
		spaceBetween:"100%",
		simulateTouch: true,
		scrollbarDraggable: true, 
		scrollbarHide: true, 
		prevButton: "#control-prev", 
		nextButton: "#control-next", 
		mousewheelControl: true, 
		keyboard:true, 
		observer: false,
		navigation: { nextEl: "#control-next", prevEl: "#control-prev", disabledClass: "control-inactive" }, 
		on: { slidePrevTransitionStart: prevFrame, slideNextTransitionStart: nextFrame} 
	});
	setTimeout(function(){ configFrames(); },800);
}


function prevFrame() {
  if(_.isObject(config.swipers.frames) && _.isObject(config.swipers.frames.slides) && !_.isEmpty(config.swipers.frames.slides)
    && _.isFinite(config.swipers.frames.activeIndex) && config.swipers.frames.activeIndex >= 0 && config.swipers.frames.activeIndex < config.swipers.frames.slides.length){ 

		YIUtils.ga.click("yaser", config.name, "prev frame - " + config.swipers.frames.activeIndex); 
		config.current.round++; 
		setFrame(config.swipers.frames.activeIndex); 

	}
}

function nextFrame() {
  if(_.isObject(config.swipers.frames) && _.isObject(config.swipers.frames.slides) && !_.isEmpty(config.swipers.frames.slides)
    && _.isFinite(config.swipers.frames.activeIndex) && config.swipers.frames.activeIndex >= 0 && config.swipers.frames.activeIndex < config.swipers.frames.slides.length){
		

		YIUtils.ga.click("yaser",  config.name, "next frame - " + config.swipers.frames.activeIndex);
		config.current.round++;
		setFrame(config.swipers.frames.activeIndex);
		
	}
}
function setFrame(index) {
	if (_.isObject(config.swipers.frames) && _.isFinite(index) && index >= 0 && index < config.swipers.frames.slides.length) { 
		resetFrame();
		$(".featuredProjects").addClass("frame-" + index); 
		configFrames(); 
	}
}

function resetFrame(){
	for(var i = 0; i < document.querySelectorAll('.featuredProjects .projects0 .project0').length; i++  ){ $('.featuredProjects').removeClass('frame-'+i);}
	
	
	$('.featuredProjects .control').removeClass('disabled')
}

function configFrames(){
	var curSlide = config.swipers.frames.activeIndex, 
	curimg = $('.featuredProjects .projects0 .project0.swiper-slide-active').attr('data-img'), 
	curtype = $('.featuredProjects .projects0 .project0.swiper-slide-active').attr('data-type');
	var curindex = config.swipers.frames.slides.length -1;
	
	if(config.swipers.frames.activeIndex === curindex){
		$('#control-next').addClass('disabled');
	}
		
	if(config.swipers.frames.activeIndex === 0){
		$('#control-prev').addClass('disabled');
	}

	$('.featuredProjects .bgSwiper img').attr('src',curimg);
	$('.featuredProjects .type').text(curtype)
}

function siteControls(){
	smoothScroll();
}

function dataInput(){
	var tempCode = '', projArr = '',
	dataset = [...projects_config.data].sort(function(a,b){
		var dateA = parseInt(moment(a.date, 'DD/MM/YYYY').format('YYYYMMDD')),
		dateB = parseInt(moment(b.date, 'DD/MM/YYYY').format('YYYYMMDD'));
		
		if(dateA < dateB){ return 1; }else{ return -1; }
	});
	
	var counter = 0, bulletsCode ='';
	
	for(var i = 0; i < dataset.length; i++){
		var curdata = dataset[i];
		
		var curname = curdata.name,
		curid = curdata.id,
		cururl = curdata.url,
		curDate = (curdata.date) ? moment(curdata.date, "DD/MM/YYYY").format('Do MMM, YYYY') : "",
		techstack = curdata["tech stack"].split(';'),
		curbelongs = (curdata.belongs) ? (curdata.belongs) : 'personal',
		curtype = curdata.type,
		curdesc = (curdata.desc) ? (curdata.desc) : "",
		curimg = (curdata.img) ? (curdata.img) : "../img/cvrs/noimg.png" ;
		
		var curtypeClass = ((curtype.trim()).replace(/\s/g, "")).toLowerCase();

		var hide = '';
		if(curdata.featured && curdata.featured === "TRUE"){
			if(counter === 0){ hide = 'active'; }
			if(curimg && curimg === ""){ curimg = "../img/aiwave.gif"; }
			if(curdesc && curdesc === ""){ curdesc = "This is where the description goes..."; }

			projArr += '<div id="project'+counter+'" class="project0 swiper-slide '+curdata.type+' '+hide+'" data-img="'+curimg+'" data-type="'+curdata.type+'"><img src="'+curimg+'">';

			projArr += '<div class="projectinfo">'
			
			projArr += '<h3>'+curdata.name+'</h3>'
			projArr += '<div class="desc">'+curdesc+'</div>';
			projArr += '<div class="footerInfo"><div class="belongs">'+curbelongs+'</div></div>'
			
			projArr += '<div class="linkto"><a href="'+cururl+'" target="_blank" rel="noreferrer noopener"><i class="ion ion-android-open"></i></a></div>'
			
			projArr += '</div>';
			projArr += '</div>';
			
			bulletsCode += '<span class="swiper-pagination-bullet"></span>';
			counter++;
		}	
		
			if(cururl && cururl != "FALSE"){
				curtypeClass += ' link';
			}else{
				curtypeClass += ' nolink';
			}
		
		tempCode += '<div id="project'+i+'" class="project '+curtypeClass+'">';
		
		if(cururl && cururl != "FALSE"){
			tempCode += '<a href="'+cururl+'" target="_blank" rel="noreferrer noopener">';
		}
		
		tempCode += '<div class="projectType">'+curtype+'</div>';
		tempCode += '<div class="innerContainer">';
		tempCode += '<div class="imgContainer"><img class="lazy" data-original="'+curimg+'" src="'+curimg+'"></div>';
		
		tempCode += '<div class="info">';
		tempCode += '<h3 class="title">'+curname+'</h3>';
		tempCode += '<p class="desc">'+curDate+'</p>';
		tempCode += '<div class="footerInfo"><div class="belongs">'+curbelongs+'</div></div>';
		
		tempCode += '<div class="skillsContainer"><div class="header">Skills</div><div class="usedskills">';
		
		for(var j = 0; j < techstack.length; j++){
			var curskill = techstack[j];
			tempCode += '<div class="skill">'+curskill+'</div>';
		}
		tempCode += '</div></div>';
		tempCode += '</div></div>';
		
		if(cururl && cururl != "FALSE"){ 
			tempCode += '</a>'; 
		}else{
			tempCode += '<div class="nolink">Confidential</div>';
		}
		tempCode += '</div>';
	}
	
	document.querySelector('#portfolioContainter .projects.grid').innerHTML = tempCode;
	$('.frames-container').html(projArr);

	/* Lazy load for images - load when in viewport */
	$("img.lazy").lazyload();

	document.querySelector('.projects0 .frames-container').innerHTML = projArr;
	document.querySelector('.swiper-pagination').innerHTML = bulletsCode;
	portfolioControls();
	initSwiper();
	countersInit();
	window.addEventListener("scroll",function(){ countersInit(); });
}

function portfolioControls(){
	
	var grid = $('.projects');
	
	grid.isotope({
		itemSelector: '.project',
		layoutMode: 'masonry',
		masonry: { columnWidth: '.project',isFitWidth: true }
	});
	
	$('.filterMenu').on('change', function(){
		var curChoice = $('.filterMenu option:selected').val();
		
		if(curChoice != "all"){
			grid.isotope({ filter: '.'+curChoice });
		}else{
			grid.isotope({ filter: '*' });
		}
		YIUtils.ga.click("yaser", config.name, "Filter choosen to view : "+curChoice);
	});
	
	$('.filtering .filter').on('click', function(){
		var curfilter = $(this).attr('data-filter');		
		if($(this).hasClass('active')){
			$('.filtering .filter').removeClass('active');
			grid.isotope({ filter: '*' });
			$('.filterMenu').val(curfilter);
			$('.filterMenu select option #'+curfilter).prop('selected', true);
			YIUtils.ga.click("yaser", config.name, "Filter choosen to view : all");
		}else{
			$('.filtering .filter').removeClass('active');
			this.classList.add('active');
			grid.isotope({ filter: '.'+curfilter });
			$('.filterMenu').val(curfilter);
			$('.filterMenu select option #'+curfilter).prop('selected', true);
			YIUtils.ga.click("yaser", config.name, "Filter choosen to view : "+curfilter);
		}
	});

}


function initTracking() {
	YIUtils.ga.pageview_yaser("20 May 2021", "Yaser Ibrahim", "Portfolio", config.name); 
	check_url();
}
function check_url(){
	if((window.location.href.indexOf('http://') > -1) || (window.location.href.indexOf('https://') > -1)){ YIUtils.YIsecure(); }
}		
function checkBrowser() {
    if (YIUtils.mobile.any())
        $("body").addClass("yi-m");
    else{
        $("body").addClass("yi-d");
	}
    if (YIUtils.mobile.android())
        $("body").addClass("yi-m-android");
    else if (YIUtils.mobile.ios())
        $("body").addClass("yi-m-ios");
    else if (YIUtils.browser.safari())
        $("body").addClass("yi-d-safari");
    else if (YIUtils.browser.chrome())
        $("body").addClass("yi-d-chrome");
    else if (YIUtils.browser.firefox())
        $("body").addClass("yi-d-firefox");
    else if (YIUtils.browser.opera())
        $("body").addClass("yi-d-opera");
    else if (YIUtils.browser.ie())
        $("body").addClass("yi-d-ie");
		
	console.log("Browser Checked ");
}

function langControl(){
	$('.englishLang').on(PlatformEvent, function(){
		$('body').addClass('eng');
		$('body').removeClass('ar');
	});
	$('.arabicLang').on(PlatformEvent, function(){
		$('body').removeClass('eng');
		$('body').addClass('ar');
	});
}


function smoothScroll(){
	
	$('a').on('click', function(){
		var curlink = $(this).attr('href');
		if(curlink && curlink.indexOf('http') > -1){
			YIUtils.ga.click('yaser', config.name, "Link: "+curlink );
		}
	});
	
  // Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function(){
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var target = $(this.hash);
			// YIUtils.ga.click('pageview',config.name,'Navigation',"Nav Button "+target );
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 70)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	document.querySelector('.hamburger').addEventListener('click', function() {
		this.classList.toggle('opened');
		YIUtils.ga.click('yaser',config.name,"Open Menu" );
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	document.querySelector('.js-scroll-trigger').addEventListener('click' ,function() {
		$('.navbar-collapse').collapse('hide');
		document.querySelector('.hamburger').classList.remove('opened');
		YIUtils.ga.click('yaser', config.name,"Scroll Trigger" );
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({ target: '#mainNav', offset: 100 });

	// Collapse Navbar
	var navbarCollapse = function(){
		if($("#mainNav").offset().top > 100){
			$("#mainNav").addClass("navbar-shrink");
		}else{
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	
	
	var btn = $('#bcktotop');

	$(window).scroll(function() {
	  if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	  } else {
		btn.removeClass('show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '400');
	});
		
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).on('scroll', navbarCollapse );
}

function animateVal(id, start, end, duration) {
    var range = end - start, minTimer = 50, stepTime = Math.abs(Math.floor(duration / range)), startTime = new Date().getTime(), timer, endTime = startTime + duration;  
    stepTime = Math.max(stepTime, minTimer);
    function run() {
        var now = new Date().getTime(), remaining = Math.max((endTime - now) / duration, 0), value = Math.round(end - (remaining * range));
		document.querySelector(id).innerText = (numberWithCommas(value));
        if(value == end){ clearInterval(timer); }
    }
    timer = setInterval(run, stepTime);run();
}


function countersInit(){
	if(config.isInView( document.querySelector('footer .counters .counter') ) && !config.counterbool){
		animateVal('footer .counters .counter.projects span', parseInt(document.querySelector('footer .counters .counter.projects').innerText), projects_config.data.length, 800 );
		setTimeout(function(){
			animateVal('footer .counters .counter.coffee span', parseInt(document.querySelector('footer .counters .counter.coffee').innerText), 3268, 1200);
		}, 600);
		config.counterbool = true;
	}
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}