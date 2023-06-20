const form = document.querySelector('.form-content');
const Myname = document.querySelector('#input-name');
const address = document.querySelector('#input-address');
const myUnit = document.querySelector('#input-unit');
const myState = document.querySelector('#input-state');
const myPrice = document.querySelector('#input-price');
const myRoom = document.querySelector('#input-room');
const picturecontainer = document.querySelector('.third-container');
const btnforpic = document.querySelector ('.add-btn');


//adding event lisiten to the button//

btnforpic.addEventListener("click", (e) => {
  e.preventDefault();

  const newdiv = document.createElement('div');
  newdiv.classList.add("first");

  const h2 = document.createElement('h2');
  const h2Text = document.createTextNode(address.value);
  h2.classList.add("word")
  h2.appendChild(h2Text);

  newdiv.appendChild(h2);

  

  const h6 = document.createElement('h6');
  const h6Text = document.createTextNode(myRoom.value);
  h6.classList.add("pp-tag")
  h6.appendChild(h6Text);
  newdiv.appendChild(h6);


  const p = document.createElement('p');
  const pText = document.createTextNode(myPrice.value);
  p.classList.add("p-tag")
  p.appendChild(pText);
  newdiv.appendChild(p);

  var fileInput = document.getElementById('img');
  var file = fileInput.files[0]; // Get the selected file

  var reader = new FileReader();
  reader.onload = function(e) {
    var img = document.createElement('img');
    img.src = e.target.result; // Set the src attribute of the img element to the image data URL
    newdiv.insertBefore(img, newdiv.firstChild);
  };
  reader.readAsDataURL(file);
  
  picturecontainer.appendChild(newdiv)
  console.log(newdiv);
});
