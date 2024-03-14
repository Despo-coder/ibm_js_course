let length;
let width;

results = document.getElementById('result')
// results.innertext
results.innerText = `The area of the rectangle is: ${area}`;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
   let area = length * width;
   
   }

  