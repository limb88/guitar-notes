function drawNote(pos)
{
	var ctxNotes=document.getElementById('notes').getContext('2d');
	var cwN=ctxNotes.canvas.width;
	var chN=ctxNotes.canvas.height;
	ctxNotes.clearRect(0,0,cwN,chN);
	var shiftN=0;
	var shiftPointA=0;
	var shiftPoinbB=0;

	bgNotes = new Image();

	if (cwN<noteWidth)
	{
		if (pos+20>cwN)
		{
			shiftPointA=cwN-pos-20;
			shiftPointB=pos-noteWidth-20;
			while(pos+shiftN>cwN-20||pos+shiftN<20)
			{
				shiftN=shiftPointA + Math.floor(Math.random() * shiftPointB);
			}
		}
	}
	bgNotes.onload=function()
	{
		ctxNotes.drawImage(bgNotes,shiftN,0,noteWidth,noteHeight);
		ctxNotes.fillStyle = "rgba(208,254,167,0.5)";
		ctxNotes.fillRect(pos+shiftN-10, 15, 20, 100);
		$("#notes").css("opacity","0");
		$('#notes').animate(
  		{
    		opacity: 1
  		},
		1000);

	}

	bgNotes.src="/"+lesson+"img/"+questions[questNum][3]+".png";
}

function renderNotes()
{
	var winW=$(window).width();
	if (winW>noteWidth)
	{
		$('#note-container').css("width",noteWidth+'px');
		$('#note-container').css("height",noteHeight+'px');
		$('#notes').css("width",noteWidth+'px');
		$('#notes').css("height",noteHeight+'px');
		$('#notes').attr("width",noteWidth+'px');
		$('#notes').attr("height",noteHeight+'px');
	}
	else
	{
		$('#note-container').css("width",winW+'px');
		$('#note-container').css("height",noteHeight+'px');
		$('#notes').css("width",winW+'px');
		$('#notes').css("height",noteHeight+'px');
		$('#notes').attr("width",winW+'px');
		$('#notes').attr("height",noteHeight+'px');
	}
}

function renderGuitar()
{
	var winW=$(window).width();
	var winH=$(window).height();

	if(moodPositions[18][1]-moodPositions[0][0] < winW)
	{
		vultureCenter=(moodPositions[18][1]-moodPositions[0][0])/2+moodPositions[0][0];
	}
	else 
	{
		vultureCenter=(moodPositions[moodE][1]-moodPositions[moodB][0])/2+moodPositions[moodB][0];
	}

	if (winH<620)
	{
		$("body").css("background-image","none");
	}
	else
	{
		$("body").css("background-image","url('/img/guitar.png')");
		guitarShift=winW/2-vultureCenter;

		$("body").css("background-position",guitarShift+"px"+" 250px");
		
	}
}

function showModal()
{
	var winW=$(window).width();
	var winH=$(window).height();

	actualPrefModal();

	$("#modal").css("opacity","0");
	$("#modal").css("display","block");
	$("#modal").css("position","fixed");
	$("#modal").css("width",winW*0.8+"px");
	$("#modal").css("height",winH*0.8+"px");
	$("#modal").css("top",winW*0.1+"px");
	$("#modal").css("left",winH*0.1+"px");

	$('#modal').animate(
  		{
    		"opacity": 1,
    		"width":winW,
    		"height":winH,
    		"top":0,
    		"left":0
  		},
	300);

	$('#modal-content').animate(
  		{
    		"margin-top": "10px"
  		},
	400);
	$('#modal-content').animate(
  		{
    		"margin-top": "25px"
  		},
	100);
	$('#modal-content').animate(
  		{
    		"margin-top": "20px"
  		},
	100);
}

function hideModal()
{
	var winW=$(window).width();
	var winH=$(window).height();

	$('#modal').animate(
  		{
    		"opacity": 0,
    		"width":winW*0.8,
    		"height":winH*0.8,
    		"top":winW*0.1,
    		"left":winH*0.1
  		},
	300);

	$('#modal-content').animate(
  		{
    		"margin-top": "100%"
  		},
	500);

	setTimeout(killModal, 300);
}

function killModal()
{
	$("#modal").css("display","none");
}

function resizeModal()
{
	if ($('#modal').css("display")=="block")
	{
		var winW=$(window).width();
		var winH=$(window).height();
		$('#modal').animate(
  		{
    		"width":winW,
    		"height":winH
  		},
		100);
	}
}

function setPref()
{
	if (localStorage.autoplay==undefined)
	{
		localStorage.autoplay="true";
	}
	if (localStorage.questionsDelay==undefined)
	{
		localStorage.questionsDelay="5";
	}
	if (localStorage.answersDelay==undefined)
	{
		localStorage.answersDelay="5";
	}
	if (localStorage.sound==undefined)
	{
		localStorage.sound="true";
	}
	if (localStorage.volume==undefined)
	{
		localStorage.volume="70";
	}
}

function actualPrefModal()
{
	$("#questions-delay").val(localStorage.questionsDelay).change();
	$("#answers-delay").val(localStorage.answersDelay).change();
	$("#volume").val(localStorage.volume).change();

	if(localStorage.autoplay=="true")
	{
		$("#check-autoplay").attr("checked","checked");
		$("#questions-delay").prop("disabled", false);
		$("#questions-delay").rangeslider('update');
		$(".questions-delay-element").css("color","black");
	}
	else
	{
		$("#check-autoplay").removeAttr("checked");
		$("#questions-delay").prop("disabled", true);
		$("#questions-delay").rangeslider('update');
		$(".questions-delay-element").css("color","rgba(0,0,0,0.1)");
	}

	if(localStorage.sound=="true")
	{
		$("#check-volume").attr("checked","checked");
		$("#volume").prop("disabled", false);
		$("#volume").rangeslider('update');
		$(".volume-element").css("color","black");
		$("#try-sound").css("color","white");
		$("#try-sound").removeAttr("disabled");
		$("#try-sound").removeClass("button-3d-disabled");
		$("#try-sound").addClass("button-3d");
	}
	else
	{
		$("#check-volume").removeAttr("checked");
		$("#volume").prop("disabled", true);
		$("#volume").rangeslider('update');
		$(".volume-element").css("color","rgba(0,0,0,0.1)");
		$("#try-sound").attr("disabled","disabled");
		$("#try-sound").removeClass("button-3d");
		$("#try-sound").addClass("button-3d-disabled");
	}
}

function hidePlayBtn(time)
{
	$("#play-button").animate(
  	{
    	"opacity":0
  	},
	time);

	setTimeout(function(){
		$("#play-button").css("display","none");
	}, time+100);
}

function showPlayBtn(time)
{
	$("#play-button").css("display","block");
	$("#play-button").animate({
    	"opacity":1
	},time);
}

function showNextBtn(time)
{
	$("#next-button").css("display","block");
	$("#next-button").animate({
    	"opacity":1
	},time);
}

function hideNextBtn(time)
{
	$("#next-button").animate(
  	{
    	"opacity":0
  	},
	time);

	setTimeout(function(){
		$("#next-button").css("display","none");
	}, time+100);
}

function showPauseBtn(time)
{
	if (localStorage.autoplay=="true")
	{
		$("#pause-button").css("display","block");
		$("#pause-button").animate({
	    	"opacity":1
		},time);	
	}
	
}

function hidePauseBtn(time)
{
	$("#pause-button").animate(
  	{
    	"opacity":0
  	},
	time);

	setTimeout(function(){
		$("#pause-button").css("display","none");
	}, time+100);
}

function progressSim()
{	
	playedSound="false";

    diff=((al/finish)*Math.PI*2*10).toFixed(2);
    ctx.clearRect(0,0,cw,ch);
    ctx.lineWidth=lineW;
    
    gradient=ctx.createLinearGradient(300.000, 22.000, 0.000, 278.000);
	gradient.addColorStop(0.000, 'rgba(102, 210, 236, 1.000)');
	gradient.addColorStop(1.000, 'rgba(148, 244, 198, 1.000)');
	ctx.strokeStyle=gradient;

    ctx.beginPath();
    ctx.arc(cw/2, ch/2, cw/2-lineW/2, start, diff/10+start, false);
    ctx.stroke();
    ctx.lineCap="round";

    if (al >=finish)
    {
       	clearInterval(loaderInt);
       	al=0;

		drawAnswer();

		if (localStorage.sound=="true")
		{
			playAnswer(); //Проигрывание ответа
		}
			
		showGuitarDot();

       	if (localStorage.autoplay=="true")
       	{	
       		var a=localStorage.questionsDelay;

       		if (localStorage.questionsDelay>1)
       		{
       			showNextTimer();
       			$("#to-next").html(a);
       		}
       		nextQ=setInterval(function(){
       			a--;
       			
       			if (localStorage.questionsDelay>1)
	       		{
	       			$("#to-next").html(a);
	       		}

       			if (a==0)
       			{
       				clearInterval(nextQ);
       				hideGuitarDot();
       				hideNextTimer();
       			}
       			
       		},1000);
       		timerId=setTimeout(tick,localStorage.questionsDelay*1000);
       	}
       	else
       	{
       		clearTimeout(timerId);
       	}	
    }
    al++;   
}

function centerNextTimer()
{
	var wW=parseInt($(window).width())/2;
	var tW=parseInt($("#to-next").css("width"))/2;
	$("#to-next").css("left",wW-tW+"px");
}

function showNextTimer()
{
	centerNextTimer();
	$("#to-next").css("opacity",1);
	$("#to-next").css("top","10px");
}

function hideNextTimer()
{
	$("#to-next").css("opacity",0);
	$("#to-next").css("top","-10px");
}

function drawAnswer()
{
	ctx.beginPath();
	ctx.arc(cw/2,ch/2,cw/2-lineW+1,0,2*Math.PI);
	ctx.fillStyle=gradient;
	ctx.fill();

	ctx.fillStyle="white";
	ctx.font = "22px 'Arial'";
	ctx.textAlign = "center";

	if (window.questions[questNum][4]!=undefined)
	{
		if (questions[questNum][4]=="sharp")
		{
			ctx.fillText(sharpNotes[mood][string-1][0]+" ("+sharpNotes[mood][string-1][1]+")",cw/2,ch/2-10);
		}
		else
		{
			ctx.fillText(flatNotes[mood][string-1][0]+" ("+flatNotes[mood][string-1][1]+")",cw/2,ch/2-10);
		}

	}
	else
	{
		ctx.fillText(notes[mood][string-1][0]+" ("+notes[mood][string-1][1]+")",cw/2,ch/2-10);
	}

	ctx.font = "30px Arial";
	ctx.textAlign = "center";
	ctx.fillText(toRome(mood)+" - "+string,cw/2,ch/2+30);
}

function prepareSoundAnswer()
{
	fixSound(); //чтобы мобильная сафари проигрывала первый звук

	document.getElementById("player").volume=localStorage.volume/100;
	var fileName="l"+mood+"s"+string;
	if (document.getElementById("player").canPlayType("audio/mp3"))
	{
		document.getElementById("player").src="/sounds/"+fileName+".mp3";
	}
	if (document.getElementById("player").canPlayType("audio/wav"))
	{
		document.getElementById("player").src="/sounds/"+fileName+".wav";
	}
}

function playAnswer()
{
	document.getElementById("player").play();
	playedSound="true";
}

function showQuestion()
{
	renderNotes();
	drawNote(notePos);
}

function tick()
{
	getQuestion();

	showQuestion();
	loaderInt=setInterval(progressSim, localStorage.answersDelay*1000/finish);
}

function playQuestion()
{
    timerId=setTimeout(tick,50);
}

function showGuitarDot()
{
	if ($("body").css("background-image")!="none")
	{
		var dotWidth=parseFloat($("#note-on-guitar").css("width"));
		dotPosX=moodPositions[mood][0]+((moodPositions[mood][1]-moodPositions[mood][0])/2)+guitarShift-dotWidth/2;
		dotPosY=stringsPositions[string-1];

		$("#note-on-guitar").animate({
    		"opacity":1,
    		"top":dotPosY+"px",
    		"left":dotPosX+"px"
		},100);
	}
	
}

function hideGuitarDot()
{
	$("#note-on-guitar").animate({
    	"opacity":0
	},100);
}

function fixSound()
{
	document.getElementById("player").volume=0;

	if (document.getElementById("player").canPlayType("audio/mp3"))
	{
		document.getElementById("player").src="/sounds/l0s1.mp3";
	}
	else if (document.getElementById("player").canPlayType("audio/wav"))
	{
		document.getElementById("player").src="/sounds/l0s1.wav";
	}

	document.getElementById("player").play();
	document.getElementById("player").pause();
}

function getQuestion()
{
	var max=questions.length-1;
	var min=0;

	//questNum=Math.floor(Math.random() * (max - min + 1)) + min;
	testQuestion(max);

	mood=questions[questNum][0];
	string=questions[questNum][1];
	notePos=questions[questNum][2];

	prepareSoundAnswer(); //подготавливаем audio нужным файлом

}

function testQuestion(limitQuestions)
{

	if ((questNum+1)<=limitQuestions)
	{
		questNum++;
	}

	else
	{
		questNum=0;
	}
	console.log(questNum);
	
}

function toRome(numMood)
{
	switch(numMood)
	{
		case 0:return("-");break;
		case 1:return("I");break;
		case 2:return("II");break;
		case 3:return("III");break;
		case 4:return("IV");break;
		case 5:return("V");break;
		case 6:return("VI");break;
		case 7:return("VII");break;
		case 8:return("VIII");break;
		case 9:return("IX");break;
		case 10:return("X");break;
		case 11:return("XI");break;
		case 12:return("XII");break;
		case 13:return("XIII");break;
		case 14:return("XIV");break;
		case 15:return("XV");break;
	}
}

function loadRes()
{
	$("#load-status").css("height",$(window).height());

	if (window.applicationCache!=undefined && window.applicationCache.status!=0)
	{
		//window.applicationCache.update();

	}
	
}

if (window.applicationCache)
{
	window.applicationCache.addEventListener('downloading', function(e) {
		document.getElementById("load-text").innerHTML="Загружаются ресурсы"; 
	}, false);

	window.applicationCache.addEventListener('noupdate', function(e) {
		document.getElementById("load-text").innerHTML="Ресурсы актуальны"; 
		document.getElementById("load-status").style.display="none";
		isFirstTime();
	}, false);

	window.applicationCache.addEventListener('cached', function(e) {
		document.getElementById("load-text").innerHTML="Готово"; 
		document.getElementById("load-status").style.display="none";
		isFirstTime();
	}, false);

	window.applicationCache.addEventListener('error', function(e) {
		document.getElementById("load-text").innerHTML="Произошла ошибка"; 
		document.getElementById("load-status").style.display="none";
		isFirstTime();
	}, false);

	window.applicationCache.addEventListener('updateready', function(e) {
		window.applicationCache.swapCache();
	}, false);

	window.applicationCache.addEventListener('progress', function(e) {
		if (e.total!=undefined)
		{
			document.getElementById("load-progress").innerHTML=parseInt((e.loaded/e.total)*100)+"%";
		}
		else
		{
			resNumber++;
			document.getElementById("load-progress").innerHTML=resNumber;
		}
	}, false);

}

function setFirstTime()
{
	if (localStorage.firstTime==undefined || localStorage.firstTime=="true")
	{
		localStorage.firstTime="true";
	}
	else
	{
		localStorage.firstTime="false";
	}
}

function isFirstTime()
{
	setFirstTime();

	if (localStorage.firstTime=="true")
	{
		var tip=document.getElementById("tips-block");
		tip.style.display="block";
		posTipsBlock();
		localStorage.firstTime="false";
	}
}

function posTipsBlock()
{	
	var wW=parseInt($(window).width());
	var tW=parseInt($("#tips-block").css("width"));
	tW=tW+40;
	var lp=(wW-tW)/2;
	$("#tips-block").css("left",lp+"px");
	$("#tips-block").css("top","20px");
}



