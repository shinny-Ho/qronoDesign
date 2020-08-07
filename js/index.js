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
		{id:"#sec01",name:"sec01",tag:"#sec01",position:1048,correct:false},
		{id:"#sec02",name:"sec02",tag:"#sec02",position:1500,correct:false},
		{id:"#sec03",name:"sec03",tag:"#sec03",position:1650,correct:false},
		{id:"#sec04",name:"sec04",tag:"#sec04",position:1850,correct:false},
		{id:"#sec05",name:"sec05",tag:"#sec05",position:2100,correct:false},
		{id:"#sec06",name:"sec06",tag:"#sec06",position:2350,correct:false},
		{id:"#sec07",name:"sec07",tag:"#sec07",position:2850,correct:false},
		{id:"#sec08",name:"sec08",tag:"#sec08",position:3150,correct:false},
	];
	var $win;
	var animation = [
	         		{
	         			selector: '#sec01',
	         			startAt: 0,
	         			endAt: 435,
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
	         			endAt: 500,
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
									"margin-left":-300
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
	         			startAt: 550,
	         			endAt: 650,
	         			onEndAnimate:function( anim ) {
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:1,
	         						"margin-top":-60
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									opacity:.3,
	         						"margin-top":-200
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
	         			startAt: 700,
	         			endAt: 750,
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
	         						opacity:1,
									top:10
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec03',
	         			startAt: 750,
	         			endAt: 900,
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
	         						left:345
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec02 img',
	         			startAt: 890,
	         			endAt: 900,
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
	         			startAt: 780,
	         			endAt: 850,
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
	         			startAt: 900,
	         			endAt: 1050,
						onStarTAnimate:function( anim ) {
							
	         			},
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left: 345
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
	         			selector: '#sec02 .desc',
	         			startAt: 950,
	         			endAt: 1000,
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
	         			selector: '#sec03 .descBlk p',
	         			startAt: 900,
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
	         			selector: '#sec02',
	         			startAt: 1050,
	         			endAt: 1150,
						onStartAnimate:function( anim ) {$("#logo img").attr("src","images/startLogo_1.png");},
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
	         			selector: '#sec02 .desc',
	         			startAt: 1050,
	         			endAt: 1150,
	         			onEndAnimate:function( anim ) {
							
	         			},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						"margin-top":0,
									opacity:1
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						"margin-top":100,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec04',
	         			startAt: 1050,
	         			endAt: 1150,
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
	         			selector: '#moveCase',
	         			startAt: 1100,
	         			endAt: 1150,
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
	         			startAt: 1150,
	         			endAt: 1300,
						onStartAnimate:function( anim ) {$("#logo img").attr("src","images/startLogo_2.png");},
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
	         			startAt: 1150,
	         			endAt: 1350,
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
	         			selector: '#sec04 .desc',
	         			startAt: 1150,
	         			endAt: 1300,
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
	         			selector: '#sec04',
	         			startAt: 1300,
	         			endAt: 1500,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top	:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-700
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec04 .desc',
	         			startAt: 1300,
	         			endAt: 1500,
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
	         			startAt: 1300,
	         			endAt: 1400,
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
	         			selector: '#mFront',
	         			startAt: 1400,
	         			endAt: 1500,
						onStartAnimate:function( anim ) {$("#logo img").attr("src","images/startLogo_3.png");},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:100
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
	         			startAt: 1400,
	         			endAt: 1500,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:550
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:520
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#cardCase',
	         			startAt: 1400,
	         			endAt: 1500,
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
									"margin-left":100,
									"margin-top":20
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec05 .desc',
	         			startAt: 1400,
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
	         			selector: '#sec05 .desc',
	         			startAt: 1550,
	         			endAt: 1600,
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
	         			startAt: 1560,
	         			endAt: 1650,
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
	         						left:-500,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec05',
	         			startAt: 1600,
	         			endAt: 1650,
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
	         						left:-800
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec06',
	         			startAt: 1580,
	         			endAt: 1650,
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
	         			selector: '#sec06',
	         			startAt: 1580,
	         			endAt: 1650,
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
	         			startAt: 1580,
	         			endAt: 1650,
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
	         			startAt: 1580,
	         			endAt: 1650,
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
	         			selector: '#sec06 .descBlk',
	         			startAt: 1650,
	         			endAt: 1750,
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
	         			startAt: 1650,
	         			endAt: 1680,
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
	         			startAt: 1680,
	         			endAt: 1750,
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
	         			startAt: 1680,
	         			endAt: 1750,
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
	         			startAt: 1680,
	         			endAt: 1750,
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
	         			startAt: 1650,
	         			endAt: 1750,
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
	         			startAt: 1700,
	         			endAt: 1750,
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
	         			startAt: 1750,
	         			endAt: 1850,
						onStartAnimate:function( anim ) {$("#logo img").attr("src","images/startLogo_5.png");},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						width:1600,
									top:-200,
									left:0
	         					}
	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						width:1800,
									top:-300,
									left:-100
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase3',
	         			startAt: 1750,
	         			endAt: 1850,
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
	         			startAt: 1750,
	         			endAt: 1850,
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
	         			startAt: 1750,
	         			endAt: 1850,
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
					/*{
	         			selector: '#colorCase1',
	         			startAt: 1800,
	         			endAt: 1850,
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
	         			selector: '#colorCase2',
	         			startAt: 1800,
	         			endAt: 1850,
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
	         		}*/				
					{
	         			selector: '#sec07 .desc',
	         			startAt: 1850,
	         			endAt: 1900,
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:750,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						left:300,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase1',
	         			startAt: 1850,
	         			endAt: 1900,
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
	         			selector: '#colorCase2',
	         			startAt: 1850,
	         			endAt: 1900,
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
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#colorCase2',
	         			startAt: 1900,
	         			endAt: 1930,
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
	         			startAt: 1870,
	         			endAt: 1950,
						onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						left:0
	         					}	         					
	         				},
	         				{
	         					position: .8,
	         					properties: {
	         						left:-200,
									
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
	         			selector: '#sec08',
	         			startAt: 1850,
	         			endAt: 1950,
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
	         			selector: '#sec08 .desc',
	         			startAt: 1950,
	         			endAt: 2050,
						onStartAnimate:function( anim ) {$("#logo img").attr("src","images/startLogo_1.png");},
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
	         			startAt: 1950,
	         			endAt: 2100,
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
	         			selector: '#sec09',
	         			startAt: 2100,
	         			endAt: 2200,
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
	         			startAt: 2150,
	         			endAt: 2200,
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
	         			startAt: 2150,
	         			endAt: 2200,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:300,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:-300,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseFrame',
	         			startAt: 2160,
	         			endAt: 2200,
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
	         			selector: '#sec09 .desc',
	         			startAt: 2200,
	         			endAt: 2350,
						onStartAnimate:function( anim ) {$("#logo img").attr("src","images/startLogo_7.png");},
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
	         			selector: '#caseBubble01,#caseBubble02',
	         			startAt: 2200,
	         			endAt: 2250,
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
	         			startAt: 2250,
	         			endAt: 2350,
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
	         			startAt: 2250,
	         			endAt: 2350,
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
	         			selector: '#sec10',
	         			startAt: 2350,
	         			endAt: 2450,
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
	         			startAt: 2370,
	         			endAt: 2430,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
	         						top:240,
									opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
	         						top:0,
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseConcert',
	         			startAt: 2400,
	         			endAt: 2450,
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
	         			startAt: 2450,
	         			endAt: 2600,
						onStartAnimate:function( anim ) {$("#logo img").attr("src","images/startLogo_3.png");},
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: .5,
	         					properties: {
									opacity:1
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
	         			startAt: 2450,
	         			endAt: 2600,
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
	         			startAt: 2450,
	         			endAt: 2600,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: .5,
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
	         			selector: '#caseGameScore,#caseGameLife',
	         			startAt: 2450,
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
	         		},
					{
	         			selector: '#caseGamePlayer',
	         			startAt: 2500,
	         			endAt: 2650,
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
	         			startAt: 2600,
	         			endAt: 2700,
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
	         			startAt: 2600,
	         			endAt: 2750,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:180
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:280
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy01',
	         			startAt: 2600,
	         			endAt: 2750,
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
	         			startAt: 2600,
	         			endAt: 2750,
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
	         			startAt: 2550,
	         			endAt: 2750,
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
	         		},					
					{
	         			selector: '#caseGameMissile',
	         			startAt: 2700,
	         			endAt: 2750,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:610,
									opacity:0
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:350,
									opacity:10
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameDie,#caseGameMissile',
	         			startAt: 2750,
	         			endAt: 2760,
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
	         			startAt: 2750,
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
	         			selector: '#caseGameEnermy01',
	         			startAt: 2750,
	         			endAt: 2800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:50,opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:150,opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameEnermy02',
	         			startAt: 2750,
	         			endAt: 2800,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:200,opacity:1
	         					}	         					
	         				},
	         				{
	         					position: 1,
	         					properties: {
									top:350,opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameHand',
	         			startAt: 2750,
	         			endAt: 2850,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									opacity:.5
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
	         			startAt: 2780,
	         			endAt: 2850,
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
									left:950,opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseGameScore,#caseGameLife',
	         			startAt: 2800,
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
	         					position: 1,
	         					properties: {
									opacity:0
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec10 .desc',
	         			startAt: 2850,
	         			endAt: 2950,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
	         					properties: {
									top:280
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
	         			selector: '#caseGame',
	         			startAt: 2860,
	         			endAt: 2950,
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
									bottom:450
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#sec11',
	         			startAt: 2850,
	         			endAt: 2950,
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
	         			selector: '#caseLimitBlack',
	         			startAt: 2950,
	         			endAt: 3000,
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
	         			startAt: 3000,
	         			endAt: 3050,
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
	         			startAt: 3050,
	         			endAt: 3100,
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
	         			selector: '#sec11 .descBlk p.highlight',
	         			startAt: 3050,
	         			endAt: 3200,
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
	         			startAt: 3200,
	         			endAt: 3300,
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
	         			selector: '#sec11 .descBlk p.highlight',
	         			startAt: 3200,
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
	         					position: .5,
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
	         			startAt: 3300,
	         			endAt: 3400,
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
	         			selector: '#sec11 .descBlk p.highlight',
	         			startAt: 3300,
	         			endAt: 3400,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
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
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		},
					{
	         			selector: '#caseLimit04',
	         			startAt: 3400,
	         			endAt: 3500,
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
	         			selector: '#sec11 .descBlk p.highlight',
	         			startAt: 3400,
	         			endAt: 3500,
	         			onEndAnimate:function( anim ) {},
	         			keyframes: [
	         				{ 
	         					position: 0,
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
	         					position: 1,
	         					properties: {
									opacity:1
	         					}
	         				}
	         			]
	         		}									         		
					];
	$(function(){
		var imgCaseStepStr="";
		for(var i=1;i<=78;i++){
			imgCaseStepStr+='<img id="caseStep'+i+'" src="images/case/case'+i+'.jpg"/>';			
		}
		$("#sec01").append(imgCaseStepStr);
		scrollAnimate = ScrollAnimator();
		scrollAnimate.init({
			animation: animation,
			maxScroll: 3500,
			useRAF : false,
			tickSpeed: 50,	
			scrollSpeed: 15,
			debug:    false,
			tweenSpeed: .2,
			startAt: 0,	
			container: $('#main')
		})	;
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