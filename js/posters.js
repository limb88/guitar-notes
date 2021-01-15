function redrawElements(countInStroke,ePadding,wWidth)
{
	var eWidth = (wWidth-((countInStroke-1)*ePadding))/countInStroke;
	var elements = document.getElementsByClassName("blocks");
	var i=0;
	var topPos=0;
	var maxHeight=0;

	while (i<elements.length)
	{
		var leftPos=0;
		var k=0;
		while (k<countInStroke&&i<elements.length)
		{
			elements[i].style.width=eWidth+"px";
			elements[i].style.position="absolute";
			elements[i].style.marginLeft=leftPos+"px";
			if (i<countInStroke)
			{
				elements[i].style.marginTop=topPos+"px";
			}
			else
			{
				var prev=i-countInStroke;
				var eHeight=0;
				while (prev>=0)
				{
					eHeight+=elements[prev].offsetHeight+ePadding;
					prev=prev-countInStroke;
				}
							
				elements[i].style.marginTop=eHeight+"px";
			}
			leftPos=leftPos+ePadding+eWidth;
			i++;
			k++;
		}
	}
	//count maxHeight
	for (i=0;i<elements.length;i++)
	{
		if (maxHeight<parseFloat(elements[i].style.marginTop)+parseFloat(elements[i].offsetHeight))
		{
			maxHeight=parseFloat(elements[i].style.marginTop)+parseFloat(elements[i].offsetHeight);
		}
	}
	//----
	document.getElementById("contBlocks").style.height=maxHeight+"px";	
	//console.log(maxHeight);	
}

function alignPosters()
{

	width=document.getElementById("contBlocks").offsetWidth;
	if (width>900)		
	{	
		redrawElements(3,20,width);
	}
	else if (width>580)
	{
		redrawElements(2,20,width);
	}
	else 
	{
		redrawElements(1,20,width);
	}
}

window.addEventListener("load",function()
{	
	alignPosters();
			
	$(window).on('resize', function()	
	{		
		alignPosters();
	});
});


