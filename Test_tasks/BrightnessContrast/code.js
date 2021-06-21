function drawBrightnessPictures() {

    // draw original image
    let origBrCanv = document.getElementById('origBrightCanvas');
    let ctxOrigBr = origBrCanv.getContext('2d');
    let origBrImage = new Image();
    origBrImage.src = './image.jpg';
    origBrImage.onload = function () {
        ctxOrigBr.drawImage(origBrImage, 0, 0, 400, 600);
    }

    // draw changed image brightness to 1 const
    let changeBrCanvas = document.getElementById('changBrightCanvas');
    let ctxChangeBr = changeBrCanvas.getContext('2d');
    let changBrImage = new Image();
    changBrImage.src = './image.jpg';
    changBrImage.onload = function () {

        ctxChangeBr.drawImage(changBrImage, 0, 0, 400, 600);

        //get ImageData
        let changeBrImgData = ctxChangeBr.getImageData(0, 0, 400, 600);
        //run function "changeImgBright" with our arguments
        changeImgBright(changeBrImgData, 1);
        //put change image
        ctxChangeBr.putImageData(changeBrImgData, 0, 0);

    }

    // draw +50% brightness picture
    let fiftyBrPercent = document.getElementById('fifBrightCanvas');
    let ctxPerFiftyBr = fiftyBrPercent.getContext('2d');
    let fiftyBrPerImage = new Image();
    fiftyBrPerImage.src = './image.jpg';
    fiftyBrPerImage.onload = function () {

        ctxPerFiftyBr.drawImage(fiftyBrPerImage, 0, 0, 400, 600);

        //get ImageData
        let fiftyPerBrImgData = ctxPerFiftyBr.getImageData(0, 0, 400, 600);
        //run function "changeImgBright" with our arguments
        changeImgBright(fiftyPerBrImgData, 50);
        //put change image
        ctxPerFiftyBr.putImageData(fiftyPerBrImgData, 0, 0);

    }

}

//create "brightness" for change brightness
function changeImgBright(imageData, brightness) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        d[i] += brightness;
        d[i + 1] += brightness;
        d[i + 2] += brightness;
    }
    return imageData;
}

function drawContrastPictures() {

    // draw original image
    let origContrCanv = document.getElementById('origContrCanvas');
    let ctxOrigContr = origContrCanv.getContext('2d');
    let origContrImage = new Image();
    origContrImage.src = './image.jpg';
    origContrImage.onload = function () {
        ctxOrigContr.drawImage(origContrImage, 0, 0, 400, 600);
    }

    // draw changed image contrast to 1 const
    let changeContrCanvas = document.getElementById('changContrCanvas');
    let ctxChangeContr = changeContrCanvas.getContext('2d');
    let changContrImage = new Image();
    changContrImage.src = './image.jpg';
    changContrImage.onload = function () {

        ctxChangeContr.drawImage(changContrImage, 0, 0, 400, 600);

        //get ImageData
        let changeImgData = ctxChangeContr.getImageData(0, 0, 400, 600);
        //run function "changeImgContrast" with our arguments
        changeImgContrast(changeImgData, .01); //  range [-1..1]
        //put change image
        ctxChangeContr.putImageData(changeImgData, 0, 0);

    }

    // draw +50% contrast picture
    let fiftyContrPercent = document.getElementById('fifPerContrCanvas');
    let ctxPerFiftyContr = fiftyContrPercent.getContext('2d');
    let fiftyContrPerImage = new Image();
    fiftyContrPerImage.src = './image.jpg';
    fiftyContrPerImage.onload = function () {

        ctxPerFiftyContr.drawImage(fiftyContrPerImage, 0, 0, 400, 600);

        //get ImageData
        let fiftyPerImgData = ctxPerFiftyContr.getImageData(0, 0, 400, 600);
        //run function "changeImgContrast" with our arguments
        changeImgContrast(fiftyPerImgData, .5); // range [-1..1]
        //put change image
        ctxPerFiftyContr.putImageData(fiftyPerImgData, 0, 0);

    }

}

//create "changeImgContrast" for change contrast, argument contrast - percent range [-1..1]
function changeImgContrast(imageData, contrast) {
    //get our ImageData
    let data = imageData.data;
    contrast *= 255;

    //add 0.1 to avoid /0 error
    var factor = (contrast + 255) / (255.01 - contrast);

    //work with pixels
    for (var i = 0; i < data.length; i += 4) {
        data[i] = factor * (data[i] - 128) + 128;
        data[i + 1] = factor * (data[i + 1] - 128) + 128;
        data[i + 2] = factor * (data[i + 2] - 128) + 128;
    }
    return imageData;
}

drawBrightnessPictures();
drawContrastPictures();