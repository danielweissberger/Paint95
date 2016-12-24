

var selectedColor = "white";
var brushSize = 4;
var brushRadius = 0;
var canvasSize = 500;
var toolbar = document.getElementById("toolbar");
var toolbar1 = document.getElementById("toolbar1");
var toolbar2 = document.getElementById("toolbar2");
var canvas = document.getElementById("canvas");
//
function toolBarDivMaker(item, toolbarStrip, height){
    height = height || 60;
    var tbDiv = document.createElement("div");
    tbDiv.style.height = height + "px";
    tbDiv.style.width = "100%";
    tbDiv.style.display = "inline-block";
    tbDiv.style.textAlign = "center";
//            tbDiv.style.border = "2px solid black";
    tbDiv.style.veticalAlign = "middle";

    if(!(item.constructor === Array)) {
        item.style.margin = "auto";
        item.style.verticalAlign = "middle";
        item.style.marginTop = "10%";
        tbDiv.appendChild(item);

    }
    else{
        for(var i =0;i<item.length;i++){
            item[i].style.margin = "auto";
            item[i].style.marginTop = "15%";
            item[i].style.verticalAlign = "center";
            tbDiv.appendChild(item[i]);
        }

    }
    toolbarStrip.appendChild(tbDiv);
}
function colorSelect(e){
    if (e.target.classList.contains("unselected")) {
        var selColors = document.getElementsByClassName("selected");
        if (selColors.length >= 1) {
            selColors[0].classList.add("unselected");
            selColors[0].classList.remove("selected");

        }
        selectedColor = e.target.style.backgroundColor;
        e.target.classList.add("selected");
        e.target.classList.remove("unselected");


    }
    else {
        e.target.classList.remove("selected");
        e.target.classList.add("unselected");
    }
}


function createColor(color){
    var col = document.createElement("div");
    col.style.backgroundColor = color;
    col.className = "color unselected";
    col.id = color;
    col.addEventListener("click",colorSelect)
    return col;
}
toolBarDivMaker(createColor("red"),toolbar1,45);
toolBarDivMaker(createColor("blue"),toolbar1,45);
toolBarDivMaker(createColor("yellow"),toolbar1,45);
toolBarDivMaker(createColor("green"),toolbar1,45);
toolBarDivMaker(createColor("magenta"),toolbar1,45);
toolBarDivMaker(createColor("black"),toolbar1,45);
toolBarDivMaker(createColor("orange"),toolbar1,45);
toolBarDivMaker(createColor("pink"),toolbar1,45);
toolBarDivMaker(createColor("brown"),toolbar1,45);
toolBarDivMaker(createColor("teal"),toolbar1,45);
toolBarDivMaker(createColor("aqua"),toolbar1,45);
toolBarDivMaker(createColor("purple"),toolbar1,45);
toolBarDivMaker(createColor("white"),toolbar1,45);



function setBrushSize(e) {
    if (e.target.value == "X-Small"){
        brushSize = 3;
        return;
    }
    if (e.target.value == "Small") {
        brushSize = 4;
        return;
    }
    if (e.target.value == "Medium"){
        brushSize = 8;
        return;
    }
    if (e.target.value == "Large"){
        brushSize = 16;
        return;
    }
    brushSize = 32;
}

var brushOptionsContainer = document.createElement("div");
brushOptionsContainer.style.display = "inline-block";
brushOptionsContainer.style.width = "100px";
brushOptionsContainer.id = "brushOptions";
var brushOptionsText = document.createElement("p");
brushOptionsText.textContent = "Brush Size";
brushOptionsText.style.color = "blue";
brushOptionsText.style.margin = "0px";

brushOptionsContainer.appendChild(brushOptionsText);
//
//
var brushOptions = document.createElement("select");
var Xsmall = document.createElement("option");
Xsmall.textContent = "X-Small";
var small = document.createElement("option");
small.textContent = "Small";
var medium = document.createElement("option");
medium.textContent = "Medium";
var large = document.createElement("option");
large.textContent = "Large";
var XL = document.createElement("option");
XL.textContent = "Xlarge";
brushOptions.add(Xsmall);
brushOptions.add(small);
brushOptions.add(medium);
brushOptions.add(large);
brushOptions.add(XL);
brushOptions.classList.add("options");
brushOptions.style.margin = 0;
brushOptions.addEventListener("change",setBrushSize);
brushOptionsContainer.appendChild(brushOptions);

toolBarDivMaker(brushOptionsContainer,toolbar2,50);
//    toolbar2.appendChild(brushOptionsContainer);

//
//
//
//



function canvasLarger(){
    canvasSize +=20;
    canvas.style.height = canvasSize + "px";
    canvas.style.width = canvasSize + "px";
}
function canvasSmaller(){
    canvasSize -=20;
    canvas.style.height= canvasSize + "px";
    canvas.style.width = canvasSize + "px";
}
var cLarger = document.createElement("button");
cLarger.textContent = "+";
cLarger.style.backgroundColor = "lightgrey";
cLarger.style.color = "blue";
cLarger.classList.add("options");
cLarger.addEventListener("click",canvasLarger);

var cSmaller = document.createElement("button");
cSmaller.textContent = "-";
cSmaller.style.backgroundColor = "lightgrey";
cSmaller.style.color = "blue";
cSmaller.classList.add("options");
cSmaller.addEventListener("click",canvasSmaller);

toolBarDivMaker([cSmaller,cLarger],toolbar2,40)
//    toolbar2.appendChild(cSmaller);
//    toolbar2.appendChild(cLarger);

function setRadius(){
    if (brushRadius == 0) {
        brushRadius = 15;
        return;
    }
    else{
        brushRadius = 0;
    }

}

function createBrushButton(size, radius, divText){

    var btn = document.createElement("button");
    btn.style.height = size + "px";
    btn.style.width = size + "px";
    btn.textContent = divText;
    btn.style.backgroundColor = "lightgrey";
    btn.style.color = "blue";
    btn.style.borderRadius = radius + "px";
    btn.style.display = "inline-block";
    btn.style.margin = "3px";
    btn.style.border = "2px solid black";
    btn.addEventListener("click", setRadius );
    toolBarDivMaker(btn,toolbar2,75);
//        toolbar2.appendChild(btn);
}


function clearCanvas(){
    var canvas = document.getElementById("canvas");
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

}


var clrCanvas = document.createElement("BUTTON");
clrCanvas.textContent = "CLEAR CANVAS";
clrCanvas.backgroundColor = "grey";
clrCanvas.style.color = "blue";
clrCanvas.classList.add("options");
clrCanvas.addEventListener("click",clearCanvas)
toolBarDivMaker(clrCanvas,toolbar2,60);

createBrushButton(60,30,"Circle Brush");
createBrushButton(60,0,"Square Brush");


function updateRGBPreview(e){
    var R = document.getElementById("rgbR").value;
    var G = document.getElementById("rgbG").value;
    var B = document.getElementById("rgbB").value;
    var rgbDiv = document.getElementById("rgbDiv");
    rgbDiv.style.backgroundColor = "rgb("+R+","+G+","+B+")";
}


var rgbDivTitle = document.createElement("div");
rgbDivTitle.textContent = "RGB Preview"
rgbDivTitle.style.color = "blue";
var rgbDiv = document.createElement("div");
rgbDiv.style.display = "inline-block";

rgbDiv.style.height = "50px";
rgbDiv.style.width = "50px";
rgbDiv.id = "rgbDiv";
rgbDiv.className = "unselected";
rgbDiv.style.backgroundColor = "white";
rgbDiv.addEventListener("click",colorSelect);


var R = document.createElement("p");
R.style.display = "inline-block";
R.textContent = "R";
R.style.color = "Red";
R.style.marginLeft = "20px";
var G = document.createElement("p");
G.style.display = "inline-block";
G.textContent = "G";
G.style.color = "Green";
var B = document.createElement("p");
B.style.display = "inline-block";
B.textContent = "B";
B.style.color = "Blue";
var rgbR = document.createElement("input");
rgbR.type = "number";
rgbR.id = "rgbR";
rgbR.addEventListener("change", updateRGBPreview);
rgbR.classList.add("rgb");
var rgbG = document.createElement("input");
rgbG.type = "number";
rgbG.id = "rgbG";
rgbG.addEventListener("change", updateRGBPreview);
rgbG.classList.add("rgb");
var rgbB = document.createElement("input");
rgbB.type = "number";
rgbB.id = "rgbB";
rgbB.addEventListener("change", updateRGBPreview);
rgbB.classList.add("rgb");


toolBarDivMaker([R,rgbR],toolbar2,40);
toolBarDivMaker([G,rgbG],toolbar2,40);
toolBarDivMaker([B,rgbB],toolbar2,40);
toolBarDivMaker(rgbDivTitle,toolbar2,30);
toolBarDivMaker(rgbDiv,toolbar2,60);



var savedFiles="";
function saveCanvas(e){
    var canvas = document.getElementById("canvas");
    var saveString = prompt("Enter the name for the current canvas to be saved:")
    var files = localStorage.getItem("savedFiles");
    if (files === null){
        localStorage.setItem("savedFiles","");
    }
    if (localStorage.getItem("savedFiles").length>1) {
        localStorage.setItem("savedFiles", files +saveString + ",");
        localStorage.setItem(saveString, canvas.innerHTML);
    }
    else{
        localStorage.setItem("savedFiles",saveString+",")
        localStorage.setItem(saveString,canvas.innerHTML);
    }


}
function loadCanvas(e){
    var canvas = document.getElementById("canvas");
    canvas.innerHTML = localStorage.getItem(e.target.value);
    var loadOptions = document.getElementById("loadOptions");
    loadOptions.style.display = "none";
    var blankOption= document.getElementById("blankOption");
    blankOption.selected = true;
}
//<option value="" disabled selected style="display:none;">Label</option>
var optionsLoaded = false;
function loadCanvasGUI()
{
    if (!optionsLoaded) {
        var savedFiles = localStorage.getItem("savedFiles").split(",")
        var optionsToCreate = savedFiles.length - 1;
        var loadOptions = document.createElement("select");
        loadOptions.id = "loadOptions";
        var blankOption = document.createElement("option");
        blankOption.disabled = true;
        blankOption.selected = true;
        blankOption.id = "blankOption";
        blankOption.textContent = "Select A File";
        loadOptions.add(blankOption);
        for (var i = 0; i < optionsToCreate; i++) {
            var newOption = document.createElement("option");
            newOption.textContent = savedFiles[i];
            loadOptions.add(newOption);
        }
        loadOptions.addEventListener("change", loadCanvas);
        toolBarDivMaker(loadOptions, toolbar2);
        optionsLoaded = true;
    }
    else{
        loadOptions = document.getElementById("loadOptions");
        loadOptions.style.display = "initial";
        var length = loadOptions.options.length;
        console.log(loadOptions.options.length);
        while (loadOptions.options.length>1) {
            loadOptions.removeChild(loadOptions.lastChild);
        }
        var savedFiles = localStorage.getItem("savedFiles").split(",")
        var optionsToCreate = savedFiles.length-1;
        console.log("Options To Create: " + optionsToCreate);
        for (var i = 0; i < optionsToCreate; i++) {
            var newOption = document.createElement("option");
            newOption.textContent = savedFiles[i];
            loadOptions.add(newOption);
        }
    }

}


var saveBtn = document.createElement("button");
saveBtn.textContent = "Save Canvas";
saveBtn.addEventListener("click", saveCanvas);
saveBtn.style.color = "blue";
toolBarDivMaker(saveBtn,toolbar2,30);


var loadBtn = document.createElement("button");
loadBtn.textContent = "Load Canvas";
loadBtn.addEventListener("click", loadCanvasGUI);
loadBtn.style.color = "blue";

toolBarDivMaker(loadBtn,toolbar2,30);

toolbar.appendChild(toolbar2);


function paintDiv(e){

//        if(e.which ==1 && document.getElementsByClassName("selected").length>0) {
    if(e.which == 1){
        canvas = document.getElementById("canvas");
        var newDiv = document.createElement("div");
        newDiv.style.backgroundColor = selectedColor;
        newDiv.style.top = (e.pageY-canvas.offsetTop) + "px";
        newDiv.style.left = (e.clientX-canvas.offsetLeft) + "px";
        newDiv.style.height = brushSize + "px";
        newDiv.style.width = brushSize + "px";
        newDiv.style.borderRadius = brushRadius + "px";
        newDiv.style.position = "absolute";
        newDiv.style.display = "inline-block";
        canvas.appendChild(newDiv);
        return;
    }

}




canvas.style.height = canvasSize + "px";
canvas.style.width = canvasSize + "px";
canvas.style.marginLeft ="25px";
canvas.style.marginTop = "10px";
canvas.className = "shadow";
canvas.id = "canvas";
canvas.style.display = "inline-block";
canvas.style.position = "relative";
canvas.style.overflow = "hidden";
canvas.addEventListener("mousemove",paintDiv);


