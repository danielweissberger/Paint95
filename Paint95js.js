

var selectedColor = "";
var brushSize = 4;
var brushRadius = 0;
var canvasSize = 500;
var toolbar = document.getElementById("toolbar");
var toolbar1 = document.getElementById("toolbar1");
var toolbar2 = document.getElementById("toolbar2");
var canvas = document.getElementById("canvas");

function toolBarDivMaker(item, toolbarStrip, height){
    height = height || 60;
    var tbDiv = document.createElement("div");
    tbDiv.style.height = height + "px";
    tbDiv.style.width = "100%";
    tbDiv.style.display = "inline-block";
    tbDiv.style.textAlign = "center";
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
        selectedColor = "";
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

var colors = ["red","blue","yellow","green","magenta","black","orange","pink","brown","teal","aqua","purple","white"]

for(var i=0;i<colors.length;i++){
    toolBarDivMaker(createColor(colors[i]),toolbar1,45);
}



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


function canvasLarger(){
    canvas = document.getElementById("canvas");
    canvas.style.height = (parseInt(canvas.style.height)+20)+"px";
    canvas.style.width = (parseInt(canvas.style.width)+20) + "px";
}
function canvasSmaller(){
    canvas = document.getElementById("canvas");
    canvas.style.height= (parseInt(canvas.style.height)-20) + "px";
    canvas.style.width = (parseInt(canvas.style.width)-20) + "px";
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


function setRadius(){
    if (brushRadius == 0) {
        brushRadius = 15;
        return;
    }
    else{
        brushRadius = 0;
    }

}



function clearCanvas(){
    var canvas = document.getElementById("canvas");
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

}


var clrCanvas = document.createElement("BUTTON");
clrCanvas.textContent = "Clear Canvas";
clrCanvas.backgroundColor = "grey";
clrCanvas.style.color = "blue";
clrCanvas.classList.add("options");
clrCanvas.addEventListener("click",clearCanvas)
toolBarDivMaker(clrCanvas,toolbar2,40);


function updateBrushRadius(e){
    console.log(e.target.value);
    var radius = e.target.value;
    var brush = document.getElementById("brush");
    brush.style.borderRadius = radius + "px";
    brushRadius = radius;
}

var brushSlider = document.createElement("input");
brushSlider.type = "range";
brushSlider.min = 0;
brushSlider.max = 25;
brushSlider.addEventListener("input",updateBrushRadius);
var brush = document.createElement("div");
brush.style.height = 60 + "px";
brush.style.width = 60 + "px";
brush.textContent = "Brush";
brush.id = "brush";
brush.style.backgroundColor = "lightgrey";
brush.style.color = "blue";
brush.style.borderRadius = 0 + "px";
brush.style.display = "inline-block";
brush.style.lineHeight = "60px";
brush.addEventListener("click", setRadius );
toolBarDivMaker(brush,toolbar2,75);
toolBarDivMaker(brushSlider,toolbar2,30);



function updateRGBPreview(e){
    var R = document.getElementById("rgbR").value;
    var G = document.getElementById("rgbG").value;
    var B = document.getElementById("rgbB").value;
    var rgbDiv = document.getElementById("rgbDiv");
    rgbDiv.style.backgroundColor = "rgb("+R+","+G+","+B+")";
    if(rgbDiv.classList.contains("selected")){
        selectedColor = "rgb("+R+","+G+","+B+")";
    }
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
rgbDiv.style.backgroundColor = "rgb(0,0,0)";
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
rgbR.value = 0;
rgbR.min = 0;
rgbR.max = 255;
rgbR.addEventListener("input", updateRGBPreview);
rgbR.classList.add("rgb");
var rgbG = document.createElement("input");
rgbG.type = "number";
rgbG.id = "rgbG";
rgbG.value = 0;
rgbG.min = 0;
rgbG.max = 255;
rgbG.addEventListener("input", updateRGBPreview);
rgbG.classList.add("rgb");
var rgbB = document.createElement("input");
rgbB.type = "number";
rgbB.id = "rgbB";
rgbB.value = 0;
rgbB.min= 0;
rgbB.max = 255;
rgbB.addEventListener("input", updateRGBPreview);
rgbB.classList.add("rgb");


toolBarDivMaker([R,rgbR],toolbar2,40);
toolBarDivMaker([G,rgbG],toolbar2,40);
toolBarDivMaker([B,rgbB],toolbar2,40);
toolBarDivMaker(rgbDivTitle,toolbar2,30);
toolBarDivMaker(rgbDiv,toolbar2,60);



var savedFiles="";
function saveCanvas(e){
    var canvasDiv = document.getElementById("canvasDiv");
    var saveString = prompt("Enter the name for the current canvas to be saved:")
    var files = localStorage.getItem("savedFiles");
    if (files === null){
        localStorage.setItem("savedFiles","[]");
    }
    var files = JSON.parse(localStorage.getItem("savedFiles"));
    files.push(saveString);
    localStorage.setItem("savedFiles", JSON.stringify(files));
    localStorage.setItem(saveString, canvasDiv.innerHTML);




}
function loadCanvas(e){
    var canvasDiv = document.getElementById("canvasDiv");
    canvasDiv.innerHTML = localStorage.getItem(e.target.value);
    canvas = document.getElementById("canvas");
    canvas.addEventListener("mousemove",paintDiv);
    var loadOptions = document.getElementById("loadOptions");
    loadOptions.style.display = "none";
    var blankOption= document.getElementById("blankOption");
    blankOption.selected = true;
}

function loadCanvasGUI()
{
        var savedFiles = JSON.parse(localStorage.getItem("savedFiles"));
        var optionsToCreate = savedFiles.length;
        var loadOptions = document.getElementById("loadOptions");
        while (loadOptions.options.length>1) {
            loadOptions.removeChild(loadOptions.lastChild);
        }
        for (var i = 0; i < optionsToCreate; i++) {
            var newOption = document.createElement("option");
            newOption.textContent = savedFiles[i];
            loadOptions.add(newOption);
        }
        loadOptions.style.display = "inline-block";

}

var rotated = false;
function rotateCanvas(e)
{
    var deg;
    if(rotated){
        deg = 0;
    }
    else {
        deg = 90;
    }
    var canvas = document.getElementById("canvas");
    canvas.style.webkitTransform = 'rotate('+deg+'deg)';
    canvas.style.mozTransform    = 'rotate('+deg+'deg)';
    canvas.style.msTransform     = 'rotate('+deg+'deg)';
    canvas.style.oTransform      = 'rotate('+deg+'deg)';
    canvas.style.transform       = 'rotate('+deg+'deg)';
    rotated = !rotated;
}


var rotateBtn = document.createElement("button");
rotateBtn.textContent = "Rotate Canvas";
rotateBtn.addEventListener("click",rotateCanvas);
rotateBtn.style.color = "blue";
rotateBtn.style.fontSize = "13px";
toolBarDivMaker(rotateBtn,toolbar2,50);


var saveBtn = document.createElement("button");
saveBtn.textContent = "Save Canvas";
saveBtn.addEventListener("click", saveCanvas);
saveBtn.style.color = "blue";
toolBarDivMaker(saveBtn,toolbar2,30);


var loadBtn = document.createElement("button");
loadBtn.textContent = "Load Canvas";
loadBtn.addEventListener("click", loadCanvasGUI);
loadBtn.style.color = "blue";

var loadOptions = document.createElement("select");
loadOptions.id = "loadOptions";
loadOptions.style.display = "none";
loadOptions.addEventListener("change", loadCanvas);
var blankOption = document.createElement("option");
blankOption.disabled = true;
blankOption.selected = true;
blankOption.id = "blankOption";
blankOption.textContent = "Select A File";
loadOptions.add(blankOption);
loadOptions.style.display = "none";

toolBarDivMaker(loadBtn,toolbar2,30);
toolBarDivMaker(loadOptions,toolbar2);


toolbar.appendChild(toolbar2);


function paintDiv(e){


    if(e.which == 1)
    {
            if(selectedColor != "") {
                canvas = document.getElementById("canvas");
                var newDiv = document.createElement("div");
                newDiv.style.backgroundColor = selectedColor;
                newDiv.style.left = (e.pageX - canvas.offsetLeft) + "px";
                newDiv.style.top = (e.pageY - canvas.offsetTop) + "px";
                newDiv.style.height = brushSize + "px";
                newDiv.style.width = brushSize + "px";
                newDiv.style.borderRadius = brushRadius + "px";
                newDiv.style.position = "absolute";
                newDiv.style.display = "inline-block";
                canvas.appendChild(newDiv);
            }
            else{
                alert("Please select a color, you can select the RGB Preview as well as any color on the left palette")
            }
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


