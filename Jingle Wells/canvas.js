let theCanvas = new fabric.StaticCanvas('loading-page');
let initRatio = 16 / 9;
theCanvas.setHeight(window.innerHeight);
theCanvas.setWidth(window.innerWidth);


window.onresize = function() {
    theCanvas.setHeight(window.innerHeight);
    theCanvas.setWidth(window.innerWidth);

    renderPage();
}

let borderPic = document.getElementById("border");
let jinglePic = document.getElementById("jingle");
let wellBluePic = document.getElementById("well-blue");
let wellOrangePic = document.getElementById("well-orange");
let progressPic = document.getElementById("progress");
let logoPic = document.getElementById("logo");
let snowFlakePic = document.getElementById("snow-flake");
let bannerPic = document.getElementById("banner");


let iBorderPic1 = new fabric.Image(borderPic);
let iBorderPic2 = new fabric.Image(borderPic);
let iBorderPic3 = new fabric.Image(borderPic);
let iBorderPic4 = new fabric.Image(borderPic);

let iJinglePic = new fabric.Image(jinglePic);
let iLogoPic = new fabric.Image(logoPic);

let iWellBluePic1 = new fabric.Image(wellBluePic);
let iWellBluePic2 = new fabric.Image(wellOrangePic);
let iWellBluePic3 = new fabric.Image(wellOrangePic);
let iWellBluePic5 = new fabric.Image(wellBluePic);
let iWellBluePic6 = new fabric.Image(wellBluePic);
let iWellBluePic7 = new fabric.Image(wellOrangePic);
let iWellBluePic8 = new fabric.Image(wellOrangePic);
let iWellBluePic9 = new fabric.Image(wellOrangePic);
let iWellBluePic10 = new fabric.Image(wellOrangePic);

let iSnowFlakePic1 = new fabric.Image(snowFlakePic);
let iSnowFlakePic2 = new fabric.Image(snowFlakePic);

let iProgressPic = [];
for(let i = 0; i < 50; i++)
    iProgressPic[i] = new fabric.Image(progressPic);

let currProgress = 0;

let iBannerPic1 = new fabric.Image(bannerPic);
let iBannerPic2 = new fabric.Image(bannerPic);


function renderPage() {
    let currRatio = window.innerWidth / window.innerHeight;

    iBorderPic1.scale(0.6 * initRatio / currRatio);
    iBorderPic2.scale(0.6 * initRatio / currRatio);
    iBorderPic3.scale(0.6 * initRatio / currRatio);
    iBorderPic4.scale(0.6 * initRatio / currRatio);
    iJinglePic.scale(0.5 * initRatio / currRatio);
    iWellBluePic1.scale(0.5 * initRatio / currRatio);
    iWellBluePic2.scale(0.5 * initRatio / currRatio);
    iWellBluePic3.scale(0.5 * initRatio / currRatio);
    iLogoPic.scale(0.9 * initRatio / currRatio);
    iWellBluePic5.scale(0.5 * initRatio / currRatio);
    iWellBluePic6.scale(0.5 * initRatio / currRatio);
    iWellBluePic7.scale(0.5 * initRatio / currRatio);
    iWellBluePic8.scale(0.5 * initRatio / currRatio);
    iWellBluePic9.scale(0.5 * initRatio / currRatio);
    iWellBluePic10.scale(0.5 * initRatio / currRatio); 
    iSnowFlakePic1.scale(0.9 * initRatio / currRatio);
    iSnowFlakePic2.scale(0.9 * initRatio / currRatio);
    for(let i = 0; i < 50; i++)
        iProgressPic[i].scale(0.5 * initRatio / currRatio);
    iBannerPic1.scale(0.45 * initRatio / currRatio);
    iBannerPic2.scale(0.45 * initRatio / currRatio);

    if (window.innerWidth < 951) {
        iBorderPic1.scale(0.4 * initRatio / currRatio);
        iBorderPic2.scale(0.4 * initRatio / currRatio);
        iBorderPic3.scale(0.4 * initRatio / currRatio);
        iBorderPic4.scale(0.4 * initRatio / currRatio);
        iJinglePic.scale(0.35 * initRatio / currRatio);   
        iWellBluePic1.scale(0.3 * initRatio / currRatio);
        iWellBluePic2.scale(0.3 * initRatio / currRatio);
        iWellBluePic3.scale(0.3 * initRatio / currRatio);
        iLogoPic.scale(0.7 * initRatio / currRatio);
        iWellBluePic5.scale(0.3 * initRatio / currRatio);
        iWellBluePic6.scale(0.3 * initRatio / currRatio);
        iWellBluePic7.scale(0.3 * initRatio / currRatio);
        iWellBluePic8.scale(0.3 * initRatio / currRatio);
        iWellBluePic9.scale(0.3 * initRatio / currRatio);
        iWellBluePic10.scale(0.3 * initRatio / currRatio); 
        iSnowFlakePic1.scale(0.7 * initRatio / currRatio);
        iSnowFlakePic2.scale(0.7 * initRatio / currRatio);
        for(let i = 0; i < 50; i++)
            iProgressPic[i].scale(0.3 * initRatio / currRatio);
        iBannerPic1.scale(0.6 * initRatio / currRatio);
        iBannerPic2.scale(0.6 * initRatio / currRatio);
    }

    if (window.innerHeight > 801) {
        iBorderPic1.scale(1 * initRatio / currRatio);
        iBorderPic2.scale(1 * initRatio / currRatio);
        iBorderPic3.scale(1 * initRatio / currRatio);
        iBorderPic4.scale(1 * initRatio / currRatio);
        iJinglePic.scale(0.8 * initRatio / currRatio);   
        iWellBluePic1.scale(0.7 * initRatio / currRatio);
        iWellBluePic2.scale(0.7 * initRatio / currRatio);
        iWellBluePic3.scale(0.7 * initRatio / currRatio);
        iLogoPic.scale(1.2 * initRatio / currRatio);
        iWellBluePic5.scale(0.7 * initRatio / currRatio);
        iWellBluePic6.scale(0.7 * initRatio / currRatio);
        iWellBluePic7.scale(0.7 * initRatio / currRatio);
        iWellBluePic8.scale(0.7 * initRatio / currRatio);
        iWellBluePic9.scale(0.7 * initRatio / currRatio);
        iWellBluePic10.scale(0.7 * initRatio / currRatio); 
        iSnowFlakePic1.scale(1 * initRatio / currRatio);
        iSnowFlakePic2.scale(1 * initRatio / currRatio);
        for(let i = 0; i < 50; i++)
            iProgressPic[i].scale(0.4 * initRatio / currRatio);
        iBannerPic1.scale(0.75 * initRatio / currRatio);
        iBannerPic2.scale(0.75 * initRatio / currRatio);
    }

    iBorderPic1.set({
        left: 60,
        top: 40
    });

    iBorderPic2.set({
        flipX: true,
        left: window.innerWidth - iBorderPic2.getScaledWidth() - 60,
        top: 40
    });

    iBorderPic3.set({
        flipY: true,
        left: 60,
        top:  window.innerHeight - iBorderPic3.getScaledHeight() - 40
    });

    iBorderPic4.set({
        flipX: true,
        flipY: true,
        left: window.innerWidth - iBorderPic2.getScaledWidth() - 60,
        top:  window.innerHeight - iBorderPic3.getScaledHeight() - 40
    });

    iJinglePic.set({
        top: window.innerHeight - iJinglePic.getScaledHeight() - 120,
        left: (window.innerWidth / 2) - (iJinglePic.getScaledWidth() / 2)
    });

    iWellBluePic1.set({
        top: 40,
        left: (window.innerWidth / 2) - (iWellBluePic1.getScaledWidth() / 2)
    });

    iWellBluePic2.set({
        top: 25 + iWellBluePic2.getScaledHeight() + 15,
        left: (window.innerWidth / 2) - (iWellBluePic2.getScaledWidth() * 2)
    });

    iWellBluePic3.set({
        top: 25 + iWellBluePic3.getScaledHeight() + 15,
        left: (window.innerWidth / 2) + (iWellBluePic3.getScaledWidth())
    });

    iLogoPic.set({
        top: 50 + iWellBluePic3.getScaledHeight() * 2 + 15,
        left: (window.innerWidth / 2) - (iLogoPic.getScaledWidth() / 2)
    });

    iWellBluePic5.set({
        top: 50 + iWellBluePic3.getScaledHeight() * 2 + 15,
        left: (window.innerWidth / 2) - (iWellBluePic3.getScaledWidth() * 3)
    });

    iWellBluePic6.set({
        top: 50 + iWellBluePic6.getScaledHeight() * 2 + 15,
        left: (window.innerWidth / 2) + (iWellBluePic6.getScaledWidth() * 2)
    });

    iWellBluePic7.set({
        top: 75 + iWellBluePic6.getScaledHeight() * 3 + 15,
        left: (window.innerWidth / 2) - (iWellBluePic6.getScaledWidth() * 9 / 2)
    });
    
    iWellBluePic8.set({
        top: 75 + iWellBluePic6.getScaledHeight() * 3 + 15,
        left: (window.innerWidth / 2) - (iWellBluePic6.getScaledWidth() * 2)
    });
    
    iWellBluePic9.set({
        top: 75 + iWellBluePic6.getScaledHeight() * 3 + 15,
        left: (window.innerWidth / 2) + (iWellBluePic6.getScaledWidth())
    });

    iWellBluePic10.set({
        top: 75 + iWellBluePic6.getScaledHeight() * 3 + 15,
        left: (window.innerWidth / 2) + (iWellBluePic6.getScaledWidth() * 7 / 2)
    });

    iSnowFlakePic1.set({
        top: (window.innerHeight / 4) - (iSnowFlakePic1.getScaledHeight() / 2),
        left: (window.innerWidth / 4) - (iSnowFlakePic1.getScaledWidth() / 2)
    });

    iSnowFlakePic2.set({
        top: (window.innerHeight / 4) - (iSnowFlakePic2.getScaledHeight() / 2),
        left: (3 * window.innerWidth / 4) - (iSnowFlakePic1.getScaledWidth() / 2)
    });

    for(let i = 0; i < 50; i++) {
        iProgressPic[i].set({
            top: window.innerHeight - iProgressPic[i].getScaledHeight() - 40,
            left: (window.innerWidth / 2) - iProgressPic[i].getScaledWidth() * (25 - i)
        });
    }

    iBannerPic1.set({
        top: (window.innerHeight / 2) - (iBannerPic1.getScaledHeight() / 2),
        left: (window.innerWidth / 4) - (iBannerPic1.getScaledWidth())
    });

    iBannerPic2.set({
        top: (window.innerHeight / 2) - (iBannerPic2.getScaledHeight() / 2),
        left: (3 * window.innerWidth / 4)
    });
}

renderPage();

theCanvas.add(iBorderPic1);
theCanvas.add(iBorderPic2);
theCanvas.add(iBorderPic3);
theCanvas.add(iBorderPic4);

theCanvas.add(iJinglePic);

theCanvas.add(iWellBluePic1);
theCanvas.add(iWellBluePic2);
theCanvas.add(iWellBluePic3);
theCanvas.add(iLogoPic);
theCanvas.add(iWellBluePic5);
theCanvas.add(iWellBluePic6);
theCanvas.add(iWellBluePic7);
theCanvas.add(iWellBluePic8);
theCanvas.add(iWellBluePic9);
theCanvas.add(iWellBluePic10);

theCanvas.add(iSnowFlakePic1);
theCanvas.add(iSnowFlakePic2);

window.onload = function() {
    let bar = setInterval(function(){
        if (currProgress < 100 && currProgress % 2 == 0)
            theCanvas.add(iProgressPic[currProgress / 2]);
        currProgress++;

        if (currProgress > 100) {
            clearTimeout(bar);
            window.location = document.getElementById("redirect-to").href;
        }
    }, 50);
}

theCanvas.add(iBannerPic1);
theCanvas.add(iBannerPic2);

theCanvas.renderAll();
