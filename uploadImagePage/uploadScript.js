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