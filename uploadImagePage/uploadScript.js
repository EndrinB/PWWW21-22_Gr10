const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");
let color;

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
  // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
  // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
}

//Events fired on the drop target

function dragEnter(event) {
    event.target.classList.add("droppable-hover");
}

function dragOver(event) {
    event.preventDefault(); // Prevent default to allow drop
}

function dragLeave(event) {
    event.target.classList.remove("droppable-hover");
}

function drop(event) {
  event.preventDefault(); // This is in order to prevent the browser default handling of the data
  event.target.classList.remove("droppable-hover");
  draggableElements.forEach(elem =>{elem.classList.remove("dragged");});

  const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;

    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    draggableElement.setAttribute("draggable", "false");
    ctx.font = "900 100px'Font Awesome 5 Free'";
    ctx.fillStyle = color;
    let icon = '';
    switch(draggableElementData){
    	case 'cat': icon = '\uf6be'; break;
    	case 'dog': icon = '\uf6d3'; break;
    	case 'dove': icon = '\uf4ba'; break;
    	case 'fish': icon = '\uf578'; break;
    }
    ctx.fillText(icon,event.offsetX,event.offsetY);
 //   event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
  
}

// Upload your memory
const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('.input');
let file;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

button.onclick = () =>{
  input.click();
};

input.addEventListener('change', function() {
  file = this.files[0];
  dragArea.classList.add('active');
     displayFile();
});

dragArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragArea.classList.add('active');
  dragText.textContent = 'Release to Upload';
});

dragArea.addEventListener('dragleave', (event) => {
   dragText.textContent = 'Drag & Drop';
   dragArea.classList.remove('active');
});

dragArea.addEventListener('drop', (event) => {
  event.preventDefault();
  
   file = event.dataTransfer.files[0];
   displayFile();
});

function displayFile(){
  let fileType = file.type;

  let validExtensions = ['image/jpeg','image/jpg','image/png'];

  if(validExtensions.includes(fileType)){
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img id="source" src="${fileURL}" alt="">`;
      dragArea.innerHTML = imgTag;

      let img = document.getElementById("source");

      img.onload = () => {
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
      };
    };

    fileReader.readAsDataURL(file);
  }else{
    alert('file not supported');
    dragArea.classList.remove('active');
  }
};

// Vizatimi
ctx.lineCap = 'round';
const colorPicker = document.querySelector( '.js-color-picker');

colorPicker.addEventListener( 'change', event => {
    color = event.target.value; 
    ctx.strokeStyle = color; 
} );

const lineWidthRange = document.querySelector( '.js-line-range' );
const lineWidthLabel = document.querySelector( '.js-range-value' );

lineWidthRange.addEventListener( 'input', event => {
    const width = event.target.value;
    lineWidthLabel.innerHTML = width;
    ctx.lineWidth = width;
} );

let x = 0, y = 0;
let isMouseDown = false;

const stopDrawing = () => { isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;   
   [x, y] = [event.offsetX, event.offsetY];  
}
const drawLine = event => {
    if ( isMouseDown ) {
        const newX = event.offsetX;
        const newY = event.offsetY;
        ctx.beginPath();
        ctx.moveTo( x, y );
        ctx.lineTo( newX, newY );
        ctx.stroke();
        [x, y] = [newX, newY];
    }
}

canvas.addEventListener( 'mousedown', startDrawing );
canvas.addEventListener( 'mousemove', drawLine );
canvas.addEventListener( 'mouseup', stopDrawing );
canvas.addEventListener( 'mouseout', stopDrawing );

function resetCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dragArea.innerHTML = `<div class="icon">
          <!-- Perdorimi i atributeve width dhe height -->
          <!-- Perdorimi i tagut img dhe te gjitha atributet e tij -->
            <img src="img/image.png" alt="image icon" width="50px" height="50px">
        </div>

        <span class="header"> Drag & Drop</span>
        <span class="header"> or <span class="button"><b><u>browse</u></b></span></span>
        <input class="input" type="file" hidden>
        <span class="support">Supports: <abbr title="Joint Photographic Expert Group">JPEG</abbr>, <abbr title="Joint Photographic Expert Group">JPG</abbr>, <abbr title="Portable Graphics Format">PNG</abbr></span>`;
   dragArea.classList.remove('active');
}

function validateForm() {
  let x = document.forms["memory"]["name"].value;
  let y = document.forms["memory"]["author"].value;
  if (x == "" || y =="") {
    alert("Form must be filled out");
    return false;
  }else{
    return true;
  }
}
// Button handling

function createMemory(){
    if(validateForm()){
    alert("Memory Created");
    localStorage.clear();
    location.reload();
}
}

function saveMemory(){
    localStorage.setItem('canvas', canvas.toDataURL());
    localStorage.setItem('name',document.forms["memory"]["name"].value);
    localStorage.setItem('author',document.forms["memory"]["author"].value);
    alert("Memory Saved for Later")
}

window.addEventListener('load', (event) => {
      let saveImage = localStorage.getItem('canvas');
      if(saveImage){
        let image = new Image();
        image.src = saveImage;

            image.onload = () => {
                ctx.drawImage(image,0,0,canvas.width,canvas.height);
            };
        }

    document.forms["memory"]["name"].value = localStorage.getItem('name');
    document.forms["memory"]["author"].value = localStorage.getItem('author');  

});
