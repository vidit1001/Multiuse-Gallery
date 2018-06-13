var imageArr = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',

];

var textContentArr = [
    '<div>Some Content</div>',
    '<div>Some Content</div>',
    '<div>Some Content</div>',
    '<div>Some Content</div>',
    '<div>Some Content</div>',
    '<div>Some Content</div>',
    '<div>Some Content</div>',
    '<div>Some Content</div>',
    '<div>Some Content</div>',

];



var textPos = [4, 7];
var textPtr = 0;
var imgPtr = 0;



function changeHTML(i) {
    $("#grid_" + i).html('<span class="realbg" style="background: url(' + imageArr[getImgPtr()] + ') 50% / cover no-repeat"> </span>');
    setTimeout('addclass(' + i + ')', 1000);
}

function addclass(i) {
    $("#grid_" + i).addClass('active');
}


function changeImagePosAndContent() {
    var imgChangeCount = Math.floor(getRandomArbitrary(2, 4));
    for (var i = 0; i < imgChangeCount; i++) {
        var g = reGenTextImagePos();
        g = Math.floor(g);


        $("#grid_" + g).removeClass('active');
        setTimeout('changeHTML(' + g + ')', 1000);


    }
    index6Timer = setTimeout(changeTextPosAndContent, 9000);
}

function changeTextPosAndContent() {
    
    var textLastPos = new Array();
    textLastPos[0] = textPos[0];
    textLastPos[1] = textPos[1];
    for (var i = 0; i < 2; i++) {
        textPos[i] = Math.floor(reGenTextImagePos());
    }
    swapOldtextPosWithImage(textLastPos, textPos);
    setTimeout(changeTextPosition, 2500);
    index6Timer = setTimeout(changeImagePosAndContent, 12000);
}



function changeHTML1(i, j) {
    var htmlContent = $("#grid_" + j).html();

    $("#grid_" + i).html(htmlContent);
    setTimeout('addclass1(' + i + ')', 1000);
}

function addclass1(i) {
    $("#grid_" + i).addClass('active');
}


function swapOldtextPosWithImage(textLastPos, textCurrentPos) {

    
    $("#grid_" + textLastPos[0]).removeClass('active');
    setTimeout('changeHTML1(' + textLastPos[0] + ',' + textCurrentPos[0] + ')', 1000);



    $("#grid_" + textLastPos[1]).removeClass('active');
    setTimeout('changeHTML1(' + textLastPos[1] + ',' + textCurrentPos[1] + ')', 1500);

}

function changeHTML2(i) {
    $("#grid_" + i).html(textContentArr[getTextPtr()]);
    setTimeout('addclass2(' + i + ')', 1000);
}

function addclass2(i) {
    $("#grid_" + i).addClass('active');
}

function removeActiveClass(id) {
    $("#grid_" + id).removeClass('active');
}

function changeTextPosition() {

    $("#grid_" + textPos[0]).removeClass('active');
    setTimeout('changeHTML2(' + textPos[0] + ')', 1000);



    $("#grid_" + textPos[1]).removeClass('active');
    setTimeout('changeHTML2(' + textPos[1] + ')', 1500);

}

function reGenTextImagePos(index) {
    var rNum = getRandomArbitrary(0, 16);
    while (textPos.includes(rNum)) {
        rNum = getRandomArbitrary(0, 16);
    }

    return rNum;
}

function fillImageAndText() {
    
    for (i = 0; i < 16; i++) {
        if (textPos.includes(i)) {
            // Fill with text

            $("#grid_" + i).removeClass('active');
            $("#grid_" + i).html(textContentArr[getTextPtr()])
            $("#grid_" + i).addClass('active');
        } else {
            // fill wih image

            $("#grid_" + i).removeClass('active');
            $("#grid_" + i).html('<span class="realbg" style="background: url(' + imageArr[getImgPtr()] + ') 50% / cover no-repeat"> </span>');
            $("#grid_" + i).addClass('active');

        }
    }
}

function getRandomArbitrary(min, max) {
    var rNum = Math.random() * (max - min) + min;
    return Math.floor(rNum);
}

function getTextPtr() {
    var retPtr = textPtr;
    textPtr++;
    if (textPtr == textContentArr.length)
        textPtr = 0;
    return retPtr;
}

function getImgPtr() {
    var retPtr = imgPtr;
    imgPtr++;
    if (imgPtr == imageArr.length)
        imgPtr = 0;
    return retPtr;
}