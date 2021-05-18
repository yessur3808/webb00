
var config = {
	name: "Yaser Ibrahim's Personal Website", name_long: "Yaser Ibrahim's Personal Website", url_path: window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1), index: "index.html", carousel:{},	
	frames: [], swipers: {}, loader: { queue: 0, loaded: 0 }, delays: { scroll: 300 }, current: { frame: 0 },
	perSkills: [
			{name:"Bootstrap",per: 80},
			{name:"C++",per: 24},
			{name:"Java",per: 42},
			{name:"MATLAB",per: 60},
			{name:"Assembly Languages",per: 80},
			{name:"Fedora",per: 75},
			{name:"Raspberry PI",per: 30}
		],
	workExp: [{
			type:"work",
			position:"Software Engineer",
			company:"South China Morning Post Ltd.",
			smallname: "SCMP",
			location:"Hong Kong",
			dates:["07/2018", "current"],
			desc:"Description",
			
			points: [
				" My work varies from front end to backend. On the frontend I have worked on infographics and interactive data visualizations that can be embedded in articles. This consists of JQuery, Vanilla JS, D3js and other libraries.", 
				"I have made working templates so that it is easy for the designers on my team to just add their visualizations and be able to publish their work.",
				"I have made also generators that are made to help make it easy for the designers to make easy embeddable visualizations on their own.",
				"I have also done a lot of backend work using Node Js, Express JS, SQL, Python, Websockets, JSON files and LoopbackJs. I have made APIs using LoopbackJs and ExpressJS as well as web scrapers and data handling scripts.",
				
				"I have scripts that constantly updates a lot of our data sources like for example the scmp covid19 tracker grabbing data from several sources, scraping the sources and placing them into JSON files for ease to use for my team and others."
			],
			
			imgSrc:"img/scmpOffice.jpg",
			website:"https://www.scmp.com/",
			skills: [
				{ skillname:'HTML5', per:84 },
				{ skillname:'CSS3', per:76 },
				{ skillname:'Javascript', per:72 },
				{ skillname:'JQuery', per:72 },
				{ skillname:'NodeJS', per:66 },
				{ skillname:'LoopbackJS', per:70 },
				{ skillname:'D3js', per:70 },
				{ skillname:'ReactJS', per:20 },
				{ skillname:'Google Sheets', per:68 },
				{ skillname:'Websockets', per:50 },
				{ skillname:'SQL', per: 20 },
				{ skillname:'Git', per: 20 },
				{ skillname:'Research', per: 72 },
				{ skillname:'Problem Solving', per: 70 },
				{ skillname:'Troubleshooting', per:70 },
				{ skillname:'Analytics', per:76 },
				{ skillname:'Organization', per:80 },
				{ skillname:'Creativity', per:70 },
				{ skillname:"Team Work", per: 78 },
				{ skillname:"Ubuntu", per: 50 },
				{ skillname:"PuttyTel", per: 90 },
				{ skillname:"Presentation", per: 74 }
			]
		},{
			type:"work",
			position:"Associate System Consultant",
			company:"Poly-Asia(China) Co. Ltd.",
			smallname: "Poly-Asia",
			location:"Hong Kong",
			dates:["07/2017","07/2018"],
			desc:"Right after graduating University I started my job at Poly-Asia as a Trainee then went on to be promoted to Associate after 3 months: I worked on Microsoft ERP software customization like Microsoft Dynamics NAV and Microsoft Dynamics GP. I had also assisted in the ecommerce website using Joomla and basic HTML & CSS. I then lead the setting up of networks for several of the company's clients and kept up with maintenance of others.",
			
			points: [
				"I mainly did a lot of network setups due to my CCNA training. This consisted of administration, consulting, maintenance, it security, routing, switching and firewall setups in several of the client companies. I had to as well perform network diagnostics. This also required me to manage Microsoft Active Directory within the company along with our clients. I also needed a basic understanding of Cisco VoIP system. (DNS, DHCP, Group Policy, SSH, SFTP)",
				"I also had to for a while take care of backup operations, system disaster recovery and troubleshooting services.",
				"I had also been studying in order to attain a few certifications in Microsoft Azure cloud service as we provided a lot setup services along with Microsoft for our clients.",
				"I was promoted from Trainee to Associate within 3 months.",
				"I also worked on customizing Microsoft ERP software like NAV and GP using CSIDE & C#. I had a team to assist me this at times. I had managed 2 of my colleagues for 2 months before leaving my position and help lead them through some final projects regarding GP.",
				"I had to as well assist in maintaining the company website via Joomla and some basic html5, php and css3."
			],
			
			imgSrc:"img/polyasia.jpg",
			website:"http://www.polyasia.net/",
			skills: [
				{ skillname:'Networking', per:84 },
				{ skillname:'Networking Auditing', per:40},
				{ skillname:'LAN & WAN', per:42 },
				{ skillname:'Designing schemes', per:32 },
				{ skillname:'Switch Configuration', per:34 },
				{ skillname:'VLAN configuration', per:24 },
				{ skillname:'Router configuration', per:84 },
				{ skillname:'Firewall Configuration', per:84 },			
				{ skillname:'HTML5', per:40 },
				{ skillname:'CSS3', per:40 },
				{ skillname:'Joomla', per:20 },
				{ skillname:'CSIDE', per:46 },
				{ skillname:'C#', per:30 },
				{ skillname:'C++', per:20 },
				{ skillname:'SQL', per:72 },
				{ skillname:"Microsoft Office", per: 85 },
				{ skillname:'Microsoft Dynamics NAV', per:60 },
				{ skillname:'Microsoft Dynamics GP', per:60 },
				{ skillname:'Network Administration', per:70 }
			]
		},{
			type:"work",
			position:"STEM & Programming Teacher",
			company:"Creative Coding HK Ltd.",
			smallname: "Creative Coding",
			location:"Hong Kong",
			dates:["05/2017 ","07/2017"],
			
			points: [
				"I taught children from ages of 5 to 12 about basics of coding, robotics, mathematics, and science.",
				"I had taught them many concepts using several learning tools such as mBot, Edison, Arduino, Raspberry Pi, etc...",
				"Given it had similarities to the Apps lab activity I had joined in university I was able to adjust quickly and benefit from my previous experiences.",
				"I had done this alongside other teachers and instructors for 2-3 weeks as a part time job."
			],
			
			
			desc:"I part time taught children programming & STEM subjects as well as the basics of it. I focused on teaching the process of problem solving as that mattered more than whatever language they were learning. Focusing on emphasizing the language was just a tool and problem solving with any tool given is the skill. All while having fun and creatong cool stuff.",
			imgSrc:"img/ccoding.jpg",
			website:"https://www.creativecoding.hk/",
			skills: [
				{ skillname:'Physics', per:84 },
				{ skillname:'Java', per:84 },
				{ skillname:'Javascript', per:84 },
				{ skillname:'Scratch', per:84 },
				{ skillname:'Edison programming', per:84 },
				{ skillname:'Codeblocks', per:84 },
				{ skillname:'HTML5', per:84 },
				{ skillname:'CSS3', per:84 },
				{ skillname:'Teaching', per:99.99 }
			]
		},{
			type:"work",
			position:"Arabic Tutor/Teacher",
			company:"Sunny Day Education Centre",
			smallname:"Sunny Day",
			location:"Hong Kong",
			dates:["02/2015","02/2017"],
			
			points :[
				"I tutored people Arabic in speaking, reading, and writing.",
				"Lesson plans were developed based on what they wanted to acheive after their classes.",
				"Tested their current level of understanding in order to fully customixe their experience to what suited them best."
			],
			
			desc:"I tutored people Arabic in speaking, reading, and writing, it was all based on what they wanted to acheive by the end of the all the sessions. Whether they wanted to be well off on a conversational level or wanted to review some Arabic they had learned previously.",
			imgSrc:"img/sunnydayedu.png",
			website:"http://hksunnyday.com/",
			skills: [
				{ skillname:'English', per:99.99 },
				{ skillname:'Arabic', per:99.99 },
				{ skillname:'Teaching', per:99.99 },
				{ skillname:'Developing Material', per:99.99 }
			]
		},
		{
			type:"edu",
			name: "City University of Hong Kong",
			smallname:"City University",
			location:"Hong Kong",
			dates:["2012","2017"],
			website: "https://www.cityu.edu.hk/",
			degree:"Bachelors of Electronic Engineering",
			
			points: [
				"Learn the ability to apply knowledge of mathematics, science and engineering",
				"Learn the ability to design and conduct experiments as well as to analyze and interpret data",
				"Learn the ability to design a system, component, or process that conforms to a given specification within realistic constraints",
				"Learn the ability to function on multi-disciplinary teams",
				"Learn the ability to identify, evaluate, formulate and solve engineering problems",
				"Gain awareness of professional and ethical responsibilities",
				"Learn the ability to communicate effectively",
				"Gain knowledge in contemporary issues and an awareness of the impact of engineering solutions in a broad, global and societal context",
				"Recognition of the need for life-long learning",
				"Learn the ability to use necessary engineering tools"
			],
			
			
			major: "Information Engineering",
			skills: [
				{ skillname: 'Engineering Mathematics', per:99.99 },
				{ skillname: 'Logic Circuits', per:99.99 },
				{ skillname: 'Computer Programming', per:99.99 },
				{ skillname: 'Java', per:99.99 },
				{ skillname: 'C++', per:99.99 },
				{ skillname: 'Data Structures and Algorithms', per:99.99 },
				{ skillname: 'Microcomputer Systems', per:99.99 },
				{ skillname: 'Signals and Systems', per:99.99 },
				{ skillname: 'Systems Optimization Methods', per:99.99 },
				{ skillname: 'Operating/Database Systems', per:99.99 },
				{ skillname: 'Data Communications and Networking', per:99.99 },
				{ skillname: 'Internet Technology', per:99.99 },
				{ skillname: 'Raspberry PI', per:99.99 },
				{ skillname: 'Logic Circuits', per:99.99 },
				{ skillname: 'Engineering Mathematics', per:99.99 },
				{ skillname: 'Principles of Communications', per:99.99 },
				{ skillname: 'Product Design', per:99.99 },
				{ skillname: 'Project Management', per:99.99 },
				{ skillname: 'Advanced Networking Technologies', per:99.99 },
				{ skillname: 'Cloud computing', per:99.99 },
				{ skillname: 'Network Security', per:99.99 },
				{ skillname: 'Cyber Security', per:99.99 },
				{ skillname:'Teaching', per:99.99 }
			]
		}],
	eduExp : [
	{
		name: "City University of Hong Kong",
		dates: "2012 -2017",
		degree: "Bachelors of Electronic Engineering - Majoring in Information Engineering"
	}
		],
	tabContent:{
		tab1:'<span><i class="ion ion-android-laptop"></i><b>Software Engineer</b> @ South China Morning Post(SCMP).</span><span><br><i class="ion ion-coffee"></i>I am up for a coffee anytime</span><span><br><i class="ion ion-university"></i>Bachelors of Electronic Engineering - (Information Engineering)</span><span><br><i class="ion ion-android-globe"></i>Currently in Hong Kong</span><span><br><i class="ion ion-android-person"></i>Egyptian/American</span><span><br><i class="ion ion-icecream"></i>In love with chocolate (espicially belgian)</span><span><br><i class="ion ion-headphone"></i> Listen to music all the time.</span>',
		tab2: 'I see engineering as a bridge linking creativity and science in order to help in the development of our world. I believe in blending ideas & concepts in order to enhance the creativity of innovating everyday useful software, applications, and similar innovations which are used on a daily basis by countless PC & mobile users.',
		tab3: 'My mission is to help develop the world in which we live in for a better one. My mission is to make as much of a difference as possible. Benefit humanity to the best of my abilities. To learn as much as I can. To teach & help others to the best of my knowledge.',
		tab4: 'Raised in Fremont, California and then Cairo, Egypt. Visted a few places, yet at the moment working in Hong Kong. I believe being around such diverse areas in the world gives me an edge at understanding the different mindsets & different cultures. This gives me different perspectives on various aspects of life, boosting my knowledge & creativity.'
	},
	
	isInView: function(elem){
		var bound=elem.getBoundingClientRect();
		return((bound.bottom>=0&&bound.top<=(window.innerHeight||document.documentElement.clientHeight)) && (bound.right>=0 &&bound.right<=(window.innerWidth||document.documentElement.clientWidth)));
	}, 
	counterbool: false
};

var PlatformEvent = 'click';

$(document).ready(function() {
	initTracking();
	checkBrowser();	
	dataInput();
	siteControls();
});

function siteControls(){
	smoothScroll();
	// tabControl();
}

function dataInput(){
	particlesJS.load('particles-js', 'https://raw.githubusercontent.com/yessur3808/curly/master/particlesjs-config.json');
	inputPositions();
	inputProj();
}

function initTracking() {
	YIUtils.ga.pageview("13th May 2021", "Yaser Ibrahim");
	check_url();
}

function check_url(){
	if((window.location.href.indexOf('http://') > -1) || (window.location.href.indexOf('https://') > -1)){ YIUtils.YIsecure(); }
}		

function checkBrowser() {
    if (YIUtils.mobile.any()){ $("body").addClass("yi-m"); }else{ $("body").addClass("yi-d"); }
    if (YIUtils.mobile.android()){ $("body").addClass("yi-m-android"); }else if (YIUtils.mobile.ios()){ $("body").addClass("yi-m-ios"); }else if (YIUtils.browser.safari()){ $("body").addClass("yi-d-safari"); }else if (YIUtils.browser.chrome()){ $("body").addClass("yi-d-chrome"); }else if (YIUtils.browser.firefox()){ $("body").addClass("yi-d-firefox"); }else if (YIUtils.browser.opera()){ $("body").addClass("yi-d-opera"); }else if (YIUtils.browser.ie()){ $("body").addClass("yi-d-ie"); }
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

function validateVal(val){
	if(val && val != '' && val != [] && (val != undefined) && (val != null)){ return true; } return false;
}

function inputPositions(){
	var jobCtrl = '', jobExp = '', curSkills = '';
	
	for(var i = 0; i < config.workExp.length;i++){
		var job = config.workExp[i], skillsTemp = '<h5> Used Skills </h5><br>';
		
		if(validateVal(job.skills) && Array.isArray(job.skills)){	
			for(var j = 0; j < job.skills.length;j++){
				var skill = job.skills[j];
				skillsTemp += '<div data-skill="'+skill.skillname+'" class="skill"><div id="'+skill.skillname+'Background'+j+'" data-per="'+skill.per+'" class="skillbackground"></div><div class="curskill">'+skill.skillname+'</div></div>';
			}
		}
		
		var tempPoints = "";
		
		if(job.points && job.points.length && job.points.length > 0){
			tempPoints = "<ul>";
			for(var j = 0; j < job.points.length; j++ ){
				tempPoints += "<li>"+job.points[j]+"</li>";
			}
			tempPoints += "</ul>";
		}
		
		if(job.type === 'work'){
			var date0 = moment(job.dates[0],'MM/YYYY').format('MMM, YYYY'), date1 = job.dates[1];
			if(date1 != "current"){ date1 = moment(job.dates[1],'MM/YYYY').format('MMM, YYYY'); }
			
			jobCtrl += '<li><button id="tab-'+i+'" role="tab" aria-selected="true" aria-controls="panel-'+i+'" tabindex="'+i+'" class="jobTab workTab"><span>'+job.smallname+'</span><i class="fas fa-suitcase"></i></button></li>';
			
			jobExp += '<div id="panel-'+i+'" role="tabpanel" tabindex="'+i+'" aria-labelledby="tab-'+i+'" aria-hidden="false" class="jobsTabContent"><h3><span>'+job.position+'</span><span class="company"><a href="'+job.website+'" class="inline-link">&nbsp;@&nbsp;'+job.company+'</a></span></h3><p class="range">'+date0+' - '+date1+'</p><div>'+tempPoints+'</div><div class="skills">'+skillsTemp+'</div></div>';
		}
		if(job.type === "edu"){
			var date0 = moment(job.dates[0],'YYYY').format('YYYY'), date1 = job.dates[1];

			jobCtrl += '<li><button id="tab-'+i+'" role="tab" aria-selected="true" aria-controls="panel-'+i+'" tabindex="'+i+'" class="jobTab eduTab"><span>'+job.smallname+'</span><i class="fas fa-school"></i></button></li>';
			
			jobExp += '<div id="panel-'+i+'" role="tabpanel" tabindex="'+i+'" aria-labelledby="tab-'+i+'" aria-hidden="false" class="jobsTabContent"><h3><span>'+job.major+'</span><span class="company"><a href="'+job.website+'" class="inline-link">&nbsp;@&nbsp;'+job.name+'</a></span></h3><p class="range">'+date0+' - '+date1+'</p><div>'+tempPoints+'</div><div class="skills">'+skillsTemp+'</div></div>';			
		}
		
		if(i === config.workExp.length-1){
			for(var k = 0; k< config.perSkills.length;k++){
				var skill = config.perSkills[k];
				curSkills += '<div class="skill"><div class="skillname">'+skill.name+'</div><div class="skillbar"><div id="'+skill.name+'inner'+k+'" data-per="'+skill.per+'" class="innerbar"></div></div></div>';
			}
		}
	}
	
	jobCtrl += '<div class="jobs__StyledHighlight"></div>';
	
	document.querySelector('#experience .positions').innerHTML = jobExp;
	document.querySelector('#experience .jobs__StyledTabList').innerHTML = jobCtrl;
	// document.querySelector('#experience .positions').innerHTML = jobExp;
	document.querySelector('#experience .skillsContainer').innerHTML = curSkills;	
	skillBars();
	$(window).on('scroll resize',function(){ skillBars(); });
	expControl();
}

function expControl(){
	
	$('#experience .jobs__StyledTabList li .jobTab').on(PlatformEvent, function(){
		var curindex = $(this).attr('tabindex');
		$('#experience .innerTabs').removeClass('tab0 tab1 tab2 tab3 tab4 tab5');
		$('#experience .innerTabs').addClass('tab'+curindex);	
		YIUtils.ga.click("yaser", config.name, "Choose job tab : "+curindex);		
	});
	
}

function skillBars(){
	var elements = document.querySelectorAll('#experience .skillsContainer .skill .skillbar .innerbar');
	for(var i = 0; i< elements.length; i++){
		if(config.isInView(elements[i])){
			elements[i].style.width = elements[i].getAttribute('data-per')+'%';
		}
	}
}

function inputProj(){
	var projArr = '', bulletsCode ='', projects = projects_config.data, counter = 0;
	
	for(var i = 0; i< projects.length;i++){
		var proj = projects[i], curimg = proj.cvr, curdesc = proj.desc, hide = '';
		if(validateVal(proj.featured) && proj.featured === true){
			if(counter === 0){ hide = 'active'; }
			if(curimg === "" || _.isUndefined(curimg) || _.isNull(curimg)){ curimg = "img/aiwave.gif"; }
			if(curdesc === "" || _.isUndefined(curdesc) || _.isNull(curdesc)){ curdesc = "This is where the description goes..."; }
			
			projArr += '<div id="project'+counter+'" class="project swiper-slide '+proj.type+' '+hide+'" data-img="'+curimg+'" data-type="'+proj.type+'"><img src="'+curimg+'"><div class="projectinfo"><h3>'+proj.name+'</h3><div class="desc">'+curdesc+'</div></div></div>';
			bulletsCode += '<span class="swiper-pagination-bullet"></span>';
			// console.log('counter is ', counter);
			counter++;
		}	
	}
	document.querySelector('#portfolio .projects .frames-container').innerHTML = (projArr);
	document.querySelector('#portfolio .swiper-pagination').innerHTML = (bulletsCode);
	// portControl();
	// initSwiper();
	countersInit();
	window.addEventListener("scroll",function(){ countersInit(); });
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

function tabControl(){
	document.querySelector('.tab-container').innerHTML = (config.tabContent.tab1);
}

function portControl(){
	

}

function allProjects(){
	var projArr = '', bulletsCode ='', projects = projects_config.data, counter = 0;
	
	projects = projects.sort(function(a,b){
		var dateA = parseInt(moment(a.date, 'DD/MM/YYYY').format('YYYYMMDD')),
		dateB = parseInt(moment(b.date, 'DD/MM/YYYY').format('YYYYMMDD'));
		
		if(dateA < dateB){ return -1 }
		else{ return 1; }
	});
	
	for(var i = 0; i< projects.length;i++){
		var proj = projects[i], curimg = proj.cvr, curdesc = proj.desc, hide = '';
		
		if(validateVal(proj.featured)){
			if(counter === 0){ hide = 'active'; }
			if(curimg === "" || (curimg === undefined) || (curimg === null)){ curimg = "img/aiwave.gif"; }
			if(curdesc === "" || (curdesc === undefined) || (curdesc === null)){ curdesc = "This is where the description goes..."; }
			
			var imgPart = '<img data-src="'+curimg+'" src="'+curimg+'">',
			infoArea = '<div class="infobox"><div class="typeDev"></div><h3>'+proj.name+'</h3><div class="techUsed"></div><ul></ul><p>'+curdesc+'</p></div>';
			
			// projArr += '<div id="project'+counter+'" class="project swiper-slide '+proj.type+' '+hide+'" data-img="'+curimg+'" data-type="'+proj.type+'"><img src="'+curimg+'"><div class="projectinfo"><h3>'+proj.name+'</h3><div class="desc">'+curdesc+'</div></div></div>';
			
			projArr += '<div id="'+proj.id+'" class="projectBox"><a href="'+proj.link+'" target="_blank">'+imgPart+'</a></div>';
		}	
	}

}


function smoothScroll(){
  // Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function(){
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var target = $(this.hash);
			// YIUtils.ga.click('yaser','Navigation',"Nav Button "+target );
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
		YIUtils.ga.click('yaser','Navigation Mobile',"Open Menu" );
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	document.querySelector('.js-scroll-trigger').addEventListener('click' ,function() {
		$('.navbar-collapse').collapse('hide');
		document.querySelector('.hamburger').classList.remove('opened');
		YIUtils.ga.click('yaser','Navigation',"Scroll Trigger" );
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
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).on('scroll', navbarCollapse );
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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