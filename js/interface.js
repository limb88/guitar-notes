var noteWidth=721;
var noteHeight=125;
var guitarWidth=1803;
var guitarHeight=608;
var vultureCenter=770;
var guitarShift=0; //shift to move vulture to center
var gradient;
var nextQ;
var playedSound;
var dotPosX;
var dotPosY;

var questNum=-1;
var mood;
var string;
var notePos;

var timerId;
var resNumber=0; //текущий номер заргужаемого в кеш ресурса


	//loader

	var ctx;
    var al=0; //actual point
    var start=4.72; //start point
    var finish=100;
    var cw;
    var ch;
    var diff;
    var lineW=10;
    //end loader

$(document).ready(function(){

	loadRes();

	setPref();

	renderNotes();

	renderGuitar();

	ctx=document.getElementById('loader').getContext('2d');
	cw=ctx.canvas.width;
    ch=ctx.canvas.height;


	$(window).on("resize",function(){
		renderGuitar();
		resizeModal();
		$("#load-status").css("height",$(window).height());

		if (localStorage.firstTime=="true")
		{
			posTipsBlock();
		}
		
	});

	$("#menu-button").on("click",function(){
		showModal();
		clearTimeout(timerId);
		if (window.loaderInt!=undefined)
		{
			clearInterval(loaderInt);
		}
		ctx.clearRect(0,0,cw,ch);

		//clear notes
		var ctxNotes=document.getElementById('notes').getContext('2d');
		var cwN=ctxNotes.canvas.width;
		var chN=ctxNotes.canvas.height;
		ctxNotes.clearRect(0,0,cwN,chN);

		//clear dot
		hideGuitarDot();

		al=0;
		showPlayBtn();
		hideNextBtn();
		hidePauseBtn();

		clearInterval(nextQ);
		hideNextTimer();
	});

	$("#close-menu").on("click",function(){
		hideModal();
	});


	//rangeslider

	$("#questions-delay").rangeslider({
  		polyfill: false,
  		onInit: function() {
  			var value=document.getElementById("questions-delay").getAttribute("value");
    		$("#questions-delay-value").html(value+" сек");
  		},
  		onSlide: function(pos, value) {
  			$("#questions-delay-value").html(value+" сек");
  			localStorage.questionsDelay=value;
  		}
	}); 

	$("#answers-delay").rangeslider({
  		polyfill: false,
  		onInit: function() {
  			var value=document.getElementById("answers-delay").getAttribute("value");
    		$("#answers-delay-value").html(value+" сек");
  		},
  		onSlide: function(pos, value) {
  			$("#answers-delay-value").html(value+" сек");
  			localStorage.answersDelay=value;
  		}
	});

	$("#volume").rangeslider({
  		polyfill: false,
  		onInit: function() {
  			var value=document.getElementById("volume").getAttribute("value");
    		$("#try-sound").html(value);
  		},
  		onSlide: function(pos, value) {
  			$("#try-sound").html(value);
  			localStorage.volume=value;
  		}
	});

	//end rangeslider

	$("#check-autoplay").on("change",function(){
		var input=document.getElementById("check-autoplay");
		var $inputRange = $("#questions-delay");

		if (input.checked)
		{
			$inputRange.prop("disabled", false);
			$inputRange.rangeslider('update');
			$(".questions-delay-element").css("color","black");
			localStorage.autoplay="true";
		}
		else
		{
			$inputRange.prop("disabled", true);
			$inputRange.rangeslider('update');
			$(".questions-delay-element").css("color","rgba(0,0,0,0.1)");
			localStorage.autoplay="false";
		}
	});


	$("#check-volume").on("change",function(){
		var input=document.getElementById("check-volume");
		var $inputRange = $("#volume");

		if (input.checked)
		{
			$inputRange.prop("disabled", false);
			$inputRange.rangeslider('update');
			$(".volume-element").css("color","black");
			$("#try-sound").css("color","white");
			$("#try-sound").removeAttr("disabled");
			$("#try-sound").removeClass("button-3d-disabled");
			$("#try-sound").addClass("button-3d");
			localStorage.sound="true";
		}
		else
		{
			$inputRange.prop("disabled", true);
			$inputRange.rangeslider('update');
			$(".volume-element").css("color","rgba(0,0,0,0.1)");
			$("#try-sound").attr("disabled","disabled");
			$("#try-sound").removeClass("button-3d");
			$("#try-sound").addClass("button-3d-disabled");
			localStorage.sound="false";
		}
	});

	$("#try-sound").on("click",function(){
		if (!document.getElementById("try-sound").hasAttribute("disabled"))
		{
			document.getElementById("test-player").volume=localStorage.volume/100;
			document.getElementById("test-player").play();
		}
		
	});

	$("#play-button").on("click",function(){
		hidePlayBtn(100);
		setTimeout(function(){
			showNextBtn(100);
			if (localStorage.autoplay=="true")
			{
				showPauseBtn(100);
			}
		}, 200);

		//clearTimeout(timerId);
		playQuestion();
	});

	$("#next-button").on("click",function(){
		clearTimeout(timerId);
		clearInterval(loaderInt);
		ctx.clearRect(0,0,cw,ch);
		al=0;
		pauseState="false";
		hideGuitarDot();
		playQuestion();
		showPauseBtn();
		clearInterval(nextQ);
		hideNextTimer();
	});

	$("#pause-button").on("click",function(){
		clearTimeout(timerId);
		clearInterval(loaderInt);
		drawAnswer();

		if (playedSound=="false")
		{
			playAnswer();
		}
		
		showGuitarDot();
		clearInterval(nextQ);
		hidePauseBtn();

		clearInterval(nextQ);
		hideNextTimer();
	});


	document.getElementById("close-tips").addEventListener("click",function(){
		document.getElementById("tips-block").style.top="-300px";
	});

});

