var imagesLength = 0, textLength = 0, targetElement, margin=0, textPattern, totalEl, elWidthpx, leftnum = -1, topnum = 0, topLine = 0, t = -1, rndmtxtpos, randoImgData, previousrdm;

$.fn.multiuse = function(option){
	imagesLength = option.images.length;
	textLength = option.texts.length;
	totalEl = parseInt(imagesLength+textLength);
	imagesData = option.images;
	textData = option.texts;
	gridColumns = option.gridColumns;
	elWidthper = 100/parseInt(option.gridColumns);
	targetElement = $(this);
	margin = option.margin;
	textPattern = option.textPattern;
	boxHeight = option.boxHeight;
	elWidthpx = targetElement.width()/gridColumns;

		createHTMLelements(targetElement, imagesLength, textLength, imagesData, textData, elWidthpx, boxHeight,  gridColumns, margin, textPattern, totalEl);
}

function createHTMLelements(el, imgL, txtL, imgdata, txtdata, width, height, boxes, gap, textbg, elcount){
	

	var eachElW ;
	for(var i = 0; i < elcount; i++){
				
			
				leftnum++;
				if(leftnum == boxes){
						leftnum = 0;
						topnum++;
						topLine = height*topnum;
				}
				leftLine =  width*leftnum;
				
		if(i < imgL){
				el.append('<div multiuse-image style="position:absolute;top:'+topLine+'px; left:'+leftLine+'px;height:'+height+'px; width:'+width+'px;padding:'+gap+'px"> <div style="background-image:url('+imgdata[i]+')"></div></div>');

			}else{
				var txtbglength = textbg.length;

					t++;
					//t = t > (txtbglength-1) ? 0 : t;
				 
  						 rndmtxtpos = Math.floor((Math.random() * 20) + 1) ;
  						 rndmtxtpos = previousrdm == rndmtxtpos ? Math.floor((Math.random() * 20) + 1) : rndmtxtpos;

  						console.log(rndmtxtpos);
						randoImgData = targetElement.find(':nth-child(' + rndmtxtpos + ')').attr('style');

						el.append('<div multiuse-text style="'+randoImgData+'"><div><p>'+txtdata[t]+'</p></div></div>');
						 
						previousrdm = rndmtxtpos;


			}

	}


	shuffleImages(el, imgL, imgdata);
}


function shuffleImages(el, imgL, imgdata, txtL){
	
	setTimeout(function(){

		//console.log(el, imgL, imgdata, txtL);


	},1000);

}






