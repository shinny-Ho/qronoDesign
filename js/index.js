var scrollAnimate,
		currentSection = -1,
		checkSectionLock = 0,
		updateCount = 0,
		loadProgress;
	var ratio = 0;
	var extraFudgeFactor = 0;
	//var imgSrc =0;
	var pulseReminders = 3;
	var lastActivity = (new Date()).getTime();
	var pulseReminders = 3;
	var pulseScrollTeaserRunning = false;
	var sectionIndex = [
		{id:"#sec01",name:"sec01",tag:"#sec01",position:0,correct:false},
		{id:"#sec02",name:"sec02",tag:"#sec02",position:800,correct:false},
		{id:"#sec03",name:"sec03",tag:"#sec03",position:1700,correct:false},
		{id:"#sec04",name:"sec04",tag:"#sec04",position:2250,correct:false},
		{id:"#sec05",name:"sec05",tag:"#sec05",position:2780,correct:false},
		{id:"#sec06",name:"sec06",tag:"#sec06",position:3149,correct:false},
		{id:"#sec07",name:"sec07",tag:"#sec07",position:3549,correct:false},
		{id:"#sec08",name:"sec08",tag:"#sec08",position:4300,correct:false},
	];
	var $win;
	var brightTimer;
	var animation = [
	         		{
	         			selector: '#sec01',
	         			startAt: 0,
	         			endAt: 350,
	         			onEndAnimate:function( anim ) {
	         			},
						onProgress:function( keyframeProgress ) {
							var imgSrc = Math.ceil(78*keyframeProgress);
							//console.log(imgSrc);
							$("#sec01 img").hide();
							$("#caseStep"+imgSrc).show();						
							//$("#sec01 img").attr("src","images/case/case"+imgSrc+".jpg");
								
						},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity: 1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity: 1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec01 .descBlk',
	         			startAt: 350,
	         			endAt: 410,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity: 0,
									"margin-left":-550
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity: 1,
									"margin-left":-364
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec01 .descBlk .desc',
	         			startAt: 500,
	         			endAt: 550,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity: 1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity: 0
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#sec01 .descBlk',
	         			startAt: 650,
	         			endAt: 700,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						"margin-top":-133
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						"margin-top":-373
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#sec01 .descBlk',
	         			startAt: 650,
	         			endAt: 730,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02',
	         			startAt: 600,
	         			endAt: 750,
						onStartAnimate:function( anim ) {
							
	         			},
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top: 900,
									"padding-right":1600
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:0,
									"padding-right":0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec01',
	         			startAt: 710,
	         			endAt: 760,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top: 0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-450
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02 .mask',
	         			startAt: 595,
	         			endAt: 750,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width: 0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:1600
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02 .desc',
	         			startAt: 750,
	         			endAt: 800,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#logo',
	         			startAt: 680,
	         			endAt: 750,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity: 0,
									top:-75
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:.8,
									top:28
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec03',
	         			startAt: 850,
	         			endAt: 950,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									width:1000,
	         						left: 1600
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									width:1600,
	         						left:388
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#shadow',
	         			startAt: 850,
	         			endAt: 950,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02 .desc',
	         			startAt: 850,
	         			endAt: 950,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02 img',
	         			startAt: 950,
	         			endAt: 1050,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec03 .descBlk p',
	         			startAt: 950,
	         			endAt: 1050,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity: 0,
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity: 1,
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec03',
	         			startAt: 1050,
	         			endAt: 1200,
						onStarTAnimate:function( anim ) {
							
	         			},
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left: 388
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:1600
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#shadow',
	         			startAt: 1050,
	         			endAt: 1200,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02 .desc02',
	         			startAt: 1050,
	         			endAt: 1200,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		}
					,
					{
	         			selector: '#sec03 .descBlk p',
	         			startAt: 1050,
	         			endAt: 1180,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec03 .descBlk',
	         			startAt: 1050,
	         			endAt: 1100,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:150
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec04',
	         			startAt: 1250,
	         			endAt: 1400,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:900
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						"margin-top":100,
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02',
	         			startAt: 1270,
	         			endAt: 1400,
						onStartAnimate:function( anim ) {/*$("#logo img").attr("src","images/startLogo_1.png");*/},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-450
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02 .desc02',
	         			startAt: 1320,
	         			endAt: 1380,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#moveCase',
	         			startAt: 1290,
	         			endAt: 1400,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#buildingFront',
	         			startAt: 1400,
	         			endAt: 1800,
						onStartAnimate:function( anim ) {/*$("#logo img").attr("src","images/startLogo_2.png");*/},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width:1600,
									left:0,
									top:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:2000,
									left:-200,
									top:-200
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#buildingBack',
	         			startAt: 1410,
	         			endAt: 1800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width:1600,
									left:0,
									top:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:1800,
									left:-100,
									top:-100
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#moveCaseHand',
	         			startAt: 1480,
	         			endAt: 1550,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#moveCaseBlock',
	         			startAt: 1480,
	         			endAt: 1550,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0.7
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec04 .desc',
	         			startAt: 1600,
	         			endAt: 1680,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec04 .desc',
	         			startAt: 1820,
	         			endAt: 2150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:250
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-650
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#moveCase,#moveCaseHand',
	         			startAt: 1820,
	         			endAt: 2150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top	:0,
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 0.5,
	         					properties: {
	         						top:-450,
									opacity:0
	         					}
	         				}
							,
	         				{
	         					position: 1,
	         					properties: {
	         						top:-900,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#moveCaseBlock',
	         			startAt: 1820,
	         			endAt: 2150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0.7
	         					}
	         					
	         				},
							{ 
	         					position: 0.5,
	         					properties: {
									opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec04 .desc',
	         			startAt: 1820,
	         			endAt: 1870,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec04',
	         			startAt: 1850,
	         			endAt: 1950,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec05',
	         			startAt: 1800,
	         			endAt: 2000,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:1600
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#mFront',
	         			startAt: 1800,
	         			endAt: 1900,
						onStartAnimate:function( anim ) {/*$("#logo img").attr("src","images/startLogo_3.png");*/},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:700
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#mBack',
	         			startAt: 1800,
	         			endAt: 1900,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:250
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:600
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#mFront',
	         			startAt: 1950,
	         			endAt: 2050,
						onStartAnimate:function( anim ) {/*$("#logo img").attr("src","images/startLogo_3.png");*/},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:700
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#mBack',
	         			startAt: 1950,
	         			endAt: 2050,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:600
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#cardCase',
	         			startAt: 2000,
	         			endAt: 2100,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0,
									"margin-left":200,
									"margin-top":250
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1,
									"margin-left":-3,
									"margin-top":20
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#cardCaseHand',
	         			startAt: 2100,
	         			endAt: 2170,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#cardCaseBlock',
	         			startAt: 2100,
	         			endAt: 2170,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0.5
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec05 .desc',
	         			startAt: 2170,
	         			endAt: 2270,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec05 .desc',
	         			startAt: 2280,
	         			endAt: 2350,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:0,
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:-400,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#cardCase',
	         			startAt: 2300,
	         			endAt: 2400,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#cardCaseBlock',
	         			startAt: 2320,
	         			endAt: 2400,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0.5
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#cardCaseHand',
	         			startAt: 2320,
	         			endAt: 2350,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec05',
	         			startAt: 2280,
	         			endAt: 2400,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:-1400
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec06',
	         			startAt: 2280,
	         			endAt: 2400,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:1600
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseStyle2',
	         			startAt: 2280,
	         			endAt: 2400,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:534
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseStyle3',
	         			startAt: 2280,
	         			endAt: 2400,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:1068
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec06 .desc',
	         			startAt: 2400,
	         			endAt: 2550,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						
									opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						
									opacity:1
	         					}
	         				}
	         			]
	         		},,
					{
	         			selector: '#sec06 .descBlk',
	         			startAt: 2600,
	         			endAt: 2700,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						bottom:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						bottom:1100
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec06 .desc',
	         			startAt: 2600,
	         			endAt: 2630,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseStyle1',
	         			startAt: 2600,
	         			endAt: 2670,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-150
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseStyle2',
	         			startAt: 2600,
	         			endAt: 2670,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-300
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseStyle3',
	         			startAt: 2600,
	         			endAt: 2670,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-450
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#buildingNight',
	         			startAt: 2600,
	         			endAt: 2700,
						onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:900
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-200
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase1',
	         			startAt: 2650,
	         			endAt: 2700,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#buildingNight',
	         			startAt: 2700,
	         			endAt: 2750,
						onStartAnimate:function( anim ) {/*$("#logo img").attr("src","images/startLogo_5.png");*/},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						//width:1600,
									top:-200,
									//left:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						//width:1800,
									top:-250,
									//left:-100
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase3',
	         			startAt: 2700,
	         			endAt: 2800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0,
									left:0
	         					}
	         					
	         				},
	         				{
	         					position: 0.7,
	         					properties: {
	         						opacity:1,
									left:441
	         					}
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0,
									left:630
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase4',
	         			startAt: 2700,
	         			endAt: 2800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0,
									right:0
	         					}
	         					
	         				},
	         				{
	         					position: 0.7,
	         					properties: {
	         						opacity:1,
									right:441
	         					}
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0,
									right:630
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec07 .desc',
	         			startAt: 2700,
	         			endAt: 2800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase1',
	         			startAt: 2790,
	         			endAt: 2850,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: .1,
	         					properties: {
									opacity:0
	         					}
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase2',
	         			startAt: 2600,
	         			endAt: 2790,
						onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties:{
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase2',
	         			startAt: 2790,
	         			endAt: 2900,
						onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties:{
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec08',
	         			startAt: 2850,
	         			endAt: 3050,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:1600
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0
	         					}
	         				}
	         			]
	         		},				
					{
	         			selector: '#sec07 .desc',
	         			startAt: 2870,
	         			endAt: 2920,
						onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:667,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:417,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase2',
	         			startAt: 2900,
	         			endAt: 3050,
						onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec07',
	         			startAt: 2920,
	         			endAt: 3070,
						onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:0
	         					}	         					
	         				},
							{
	         					position: 1,
	         					properties: {
	         						left:-1600,
									
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec08 .desc',
	         			startAt: 3080,
	         			endAt: 3180,
						onStartAnimate:function( anim ) {/*$("#logo img").attr("src","images/startLogo_1.png");*/},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameBlack',
	         			startAt: 2950,
	         			endAt: 3100,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameBg',
	         			startAt: 2900,
	         			endAt: 3150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width:1600,
									height:900,
									left:0,
									top:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:2000,
									height:1300,
									left:-200,
									top:-200
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameLeft',
	         			startAt: 3050,
	         			endAt: 3150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									left:14,
									top:6
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0,
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameRight',
	         			startAt: 3050,
	         			endAt: 3150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									left:-24,
									top:-11
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0,
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameLockRight',
	         			startAt: 3050,
	         			endAt: 3150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									left:44,
									top:21
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0,
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameLockLeft',
	         			startAt: 3050,
	         			endAt: 3150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									left:-63,
									top:-31
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0,
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameBack',
	         			startAt: 3050,
	         			endAt: 3150,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									left:-44,
									top:25
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:0,
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec09',
	         			startAt: 3150,
	         			endAt: 3250,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:900
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseConcert',
	         			startAt: 3170,
	         			endAt: 3250,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec08 .desc',
	         			startAt: 3180,
	         			endAt: 3230,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:171,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-171,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '.caseFrame',
	         			startAt: 3200-50,
	         			endAt: 3250-50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0,
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-200,
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '.caseFrame',
	         			startAt: 3200-50,
	         			endAt: 3250,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameLeft,#caseFrameRight',
	         			startAt: 3210-30,
	         			endAt: 3260-30,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-200,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrameBack,#caseFrameLockLeft,#caseFrameLockRight',
	         			startAt: 3220-20,
	         			endAt: 3270-20,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-200,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrame',
	         			startAt: 3170,
	         			endAt: 3260,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-800
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrame',
	         			startAt: 3160,
	         			endAt: 3300,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseBubble01',
	         			startAt: 3260,
	         			endAt: 3310,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:.5
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseBubble02',
	         			startAt: 3260,
	         			endAt: 3310,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:.8
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseBubble01',
	         			startAt: 3300,
	         			endAt: 3450,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width:1600,
									left:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:1800,
									left:-200
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseBubble02',
	         			startAt: 3300,
	         			endAt: 3450,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width:1600
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:1800
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseConcertHand',
	         			startAt: 3300,
	         			endAt: 3370,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseConcertBlock',
	         			startAt: 3300,
	         			endAt: 3370,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0.6
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec09 .desc',
	         			startAt: 3370,
	         			endAt: 3470,
						onStartAnimate:function( anim ) {/*$("#logo img").attr("src","images/startLogo_7.png");*/},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseBubble01',
	         			startAt: 3550,
	         			endAt: 3700,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width:1800,
									left:-200
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:1600,
									left:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseBubble02',
	         			startAt: 3550,
	         			endAt: 3700,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width:1800
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:1600
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseConcertHand',
	         			startAt: 3550,
	         			endAt: 3700,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseConcertBlock',
	         			startAt: 3550,
	         			endAt: 3700,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						opacity:0.6
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec10',
	         			startAt: 3700,
	         			endAt: 3800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:900
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:0
	         					}
	         				}
	         			]
	         		},
					
					{
	         			selector: '#sec09 .desc',
	         			startAt: 3720,
	         			endAt: 3780,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:136,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-104,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseConcert',
	         			startAt: 3730,
	         			endAt: 3800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:0,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-200,
									opacity:.5
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameHand',
	         			startAt: 3800,
	         			endAt: 3950,
						onStartAnimate:function( anim ) {/*$("#logo img").attr("src","images/startLogo_3.png");*/},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:.5
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec10 .desc',
	         			startAt: 2450+1400,
	         			endAt: 2600+1400,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameBlack',
	         			startAt: 2450+1350,
	         			endAt: 2600+1350,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:.8
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameBlack',
	         			startAt: 2600+1500,
	         			endAt: 2650+1500+200,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:.8
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameHand',
	         			startAt: 2600+1500,
	         			endAt: 2650+1500+200,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:.5/*圖片本身透明*/
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameScore,#caseGameLife',
	         			startAt: 2450+1350+200,
	         			endAt: 2550+1350+200,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGamePlayer',
	         			startAt: 2500+1350+450,
	         			endAt: 2650+1350+450,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: .2,
	         					properties: {
									opacity:1
	         					}
	         				},
							{ 
	         					position: .4,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: .6,
	         					properties: {
									opacity:1
	         					}
	         				},
							{ 
	         					position: .8,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGamePlayer',
	         			startAt: 4530,
	         			endAt: 4600,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									left:930
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									left:387
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec10 .desc',
	         			startAt: 2600+1350+450,
	         			endAt: 2750+1350+450,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		}/*,
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 2600+1350,
	         			endAt: 2750+1350,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-250
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:50
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy02',
	         			startAt: 2600+1350,
	         			endAt: 2750+1350,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-300
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:200
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameDie',
	         			startAt: 2550+1350,
	         			endAt: 2750+1350,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-50
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:300
	         					}
	         				}
	         			]
	         		}*/
					,
					{
	         			selector: '#caseGameDie',
	         			startAt: 3850+450+50,
	         			endAt: 3900+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-100
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:-100
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameDie',
	         			startAt: 3900+450+50,
	         			endAt: 3950+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameDie',
	         			startAt: 3950+450+50,
	         			endAt: 4000+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:100
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:100
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameDie',
	         			startAt: 4000+450+50,
	         			endAt: 4050+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:200
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:200
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameDie',
	         			startAt: 4100+450+50,
	         			endAt: 4150+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:300
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:300
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameDie',
	         			startAt: 4150+450+50,
	         			endAt: 4200+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:350
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:350
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 3925+450+50,
	         			endAt: 3975+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-250
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:-250
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 3975+450+50,
	         			endAt: 4025+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-150
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:-150
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 4025+450+50,
	         			endAt: 4075+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-50
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:-50
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 4100+450+50,
	         			endAt: 4125+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:50
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:50
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 4125+450+50,
	         			endAt: 4150+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:150
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:150
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 4150+450+50,
	         			endAt: 4175+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:250
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:250
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 4175+450+50,
	         			endAt: 4200+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:350
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:350
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy02',
	         			startAt: 3900+450+50,
	         			endAt: 3950+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-450
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:-450
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy02',
	         			startAt: 3950+450+50,
	         			endAt: 4000+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-300
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:-300
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy02',
	         			startAt: 4000+450+50,
	         			endAt: 4050+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:-150
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:-150
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy02',
	         			startAt: 4050+450+50,
	         			endAt: 4100+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy02',
	         			startAt: 4125+450+50,
	         			endAt: 4175+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:150
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:150
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy02',
	         			startAt: 4175+450+50,
	         			endAt: 4200+450+50,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:300
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:300
	         					}
	         				}
	         			]
	         		},				
					{
	         			selector: '#caseGameMissile',
	         			startAt: 4600,
	         			endAt: 4650,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:495,
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:370,
									opacity:10
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameDie,#caseGameMissile',
	         			startAt: 4650,
	         			endAt: 4700,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},					
					{
	         			selector: '#caseGameBoom',
	         			startAt: 4680,
	         			endAt: 4750,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: .25,
	         					properties: {
									opacity:1
	         					}
	         				},
							{ 
	         					position: .5,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: .75,
	         					properties: {
									opacity:1
	         					}
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy01,#caseGameEnermy02',
	         			startAt: 4650,
	         			endAt: 4800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGamePlayer',
	         			startAt: 4800,
	         			endAt: 4950,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1,
									left:387
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0,
									left:930
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameScore,#caseGameLife',
	         			startAt: 4800,
	         			endAt: 4950,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec11',
	         			startAt: 4950,
	         			endAt: 5200,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:900
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGame',
	         			startAt: 4980,
	         			endAt: 5300,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									bottom:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									bottom:900
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameHand',
	         			startAt: 4980,
	         			endAt: 5300,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									"margin-top":250
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									"margin-top":-650
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameHand',
	         			startAt: 4980,
	         			endAt: 5100,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGame',
	         			startAt: 4980,
	         			endAt: 5200,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseLimitBlack',
	         			startAt: 5200,
	         			endAt: 5300,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:900
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseLimitLabel',
	         			startAt: 5300,
	         			endAt: 5500,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec11 .descBlk',
	         			startAt: 5500,
	         			endAt: 5700,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseLimit02',
	         			startAt: 5700,
	         			endAt: 5800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseLimit03',
	         			startAt: 5800,
	         			endAt: 5900,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseLimit04',
	         			startAt: 5900,
	         			endAt: 6000,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		}/*,
					{
	         			selector: '#sec11 .descBlk p.highlight',
	         			startAt: 6000,
	         			endAt: 6250,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:.4
	         					}	         					
	         				},							
	         				{
	         					position: .2,
	         					properties: {
									opacity:.8
	         					}
	         				},							
	         				{
	         					position: .4,
	         					properties: {
									opacity:.4
	         					}
	         				},							
	         				{
	         					position: .6,
	         					properties: {
									opacity:.8
	         					}
	         				},							
	         				{
	         					position: .8,
	         					properties: {
									opacity:.4
	         					}
	         				},							
	         				{
	         					position: 1,
	         					properties: {
									opacity:.8
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec11 .descBlk p.highlight',
	         			startAt: 6250,
	         			endAt: 6500,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:.8
	         					}	         					
	         				},							
	         				{
	         					position: .2,
	         					properties: {
									opacity:.4
	         					}
	         				},							
	         				{
	         					position: .4,
	         					properties: {
									opacity:.8
	         					}
	         				},							
	         				{
	         					position: .6,
	         					properties: {
									opacity:.4
	         					}
	         				},							
	         				{
	         					position: .8,
	         					properties: {
									opacity:.8
	         					}
	         				},							
	         				{
	         					position: 1,
	         					properties: {
									opacity:.4
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec11 .descBlk p.highlight',
	         			startAt: 6500,
	         			endAt: 6750,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:.4
	         					}	         					
	         				},							
	         				{
	         					position: 1,
	         					properties: {
									opacity:.8
	         					}
	         				}
	         			]
	         		}*/											         		
					];
	function doBright(){
		$("#sec11 .descBlk p.highlight").animate({opacity:.8},300,function(){
			$("#sec11 .descBlk p.highlight").animate({opacity:.4},300);	
		});	
	}	
	function testAnimate(position){
		scrollAnimate.scrollTo(position);
	}	
	$(function(){
		var imgCaseStepStr="";
		for(var i=1;i<=78;i++){
			imgCaseStepStr+='<img id="caseStep'+i+'" src="images/case/case'+i+'.jpg"/>';			
		}
		$("#sec01").append(imgCaseStepStr);
		scrollAnimate = ScrollAnimator();
		scrollAnimate.init({
			animation: animation,
			maxScroll: 6001,
			useRAF : false,
			tickSpeed: 100,	
			scrollSpeed: 15,
			debug:    false,
			tweenSpeed: .2,
			startAt: 0,	
			container: $('#main')
			
		})	;
		//debug/////////////////////////////////////////////////////////////////////
		//scrollAnimate.scrollTo(3060);
		
		$("#btnStart").click(function(){scrollAnimate.autoScrollStart();});
		$("#btnStop").click(function(){scrollAnimate.autoScrollStop();});
		$("#compare a").click(function(){
			var _self = $(this);
			var _idx = 	$("#compare a").index(_self);
			if(_self.hasClass("act")){
				_self.removeClass("act");
				$("#ori img:visible").hide();
				return;
			}
			$(".act").removeClass("act");
			_self.addClass("act");
			$("#ori img:visible").hide();
			$("#ori img").eq(_idx).show();
			
		});
		
		
		//debug/////////////////////////////////////////////////////////////////////
		$win = $(window);
		onResize();
		$win.bind("resize",onResize);
		function onResize(){
			var _h = $win.height();
			var _w = $("#allMask").width();
			if(_h>=900){
				$("#allMask").css("margin-top",((_h-900)/2));
				$("#main").css("margin-top",0);		
			}else{
				$("#allMask").css("margin-top",0);
				$("#main").css("margin-top",((_h-900)/2));	
			}
			$("#main").css("margin-left",(-(1600-_w)/2));
		}
		$('#nav a').click( function(e) {
			var _self = $(this);	
			e.preventDefault();
			var hash = (_self.attr("href")).substring( (_self.attr("href")).indexOf('#') );
			checkSectionLock = 3;
			gotoSectionTag(hash);
			return false;
		});
		
		function gotoSectionTag(sectionTag) {
			for (var i = 0; i < sectionIndex.length; i++) {
				if (sectionIndex[i].tag===sectionTag) {
					var newpos = sectionIndex[i].position + 1;
					if (sectionIndex[i].correct == true ) 
						newpos -=ratio;
					scrollAnimate.scrollTo( newpos);
					enterSection(i);
					return;
				}
			}
		}


		
		function enterSection(index) {
			if (currentSection==index) {
				return;
			}
			currentSection = index;
			$('#nav a').each( function(i, elm){
				if (i==index) {
					$(elm).addClass('active');
				} else {
					$(elm).removeClass('active');
				}
			});
		}
		function checkSection() {
			if (checkSectionLock>0) {
				checkSectionLock--;
				return;
			}
			var scrollTop = scrollAnimate.getScrollTop();
			console.log(scrollTop);
			for (var i = 0; i<sectionIndex.length; i++) {				
				var section = sectionIndex[i];
				var actualScrollTop = section.correct ? scrollTop+ratio+extraFudgeFactor : scrollTop;
				actualScrollTop = Math.ceil(actualScrollTop);
				if (actualScrollTop > section.position ) {
					var sectionEnd = (i==sectionIndex.length-1) ? scrollAnimate.getMaxScroll()+ratio+extraFudgeFactor : sectionIndex[i+1].position;					
					if (actualScrollTop < sectionEnd) {
						enterSection(i);
						return;
					}
					
				}
			};
		}
		setInterval( checkSection, 1000 );
	})