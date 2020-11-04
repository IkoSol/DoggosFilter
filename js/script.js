var dogs = [
  {
    name: 'Chihuahua',
    size: 'Chico'
  },
  {
    name: 'Pastor Aleman',
    size: 'Mediano'
  },
  {
    name: 'Pitbull',
    size: 'Mediano'
  },
  {
    name: 'Pug',
    size: 'Chico'
  },
  {
    name: 'Doberman',
    size: 'Mediano'
  },
  {
    name: 'Gran Danes',
    size: 'Grande'
  },
  {
    name: 'San Bernardo',
    size: 'Grande'
  }
];

var doggosFilterByButton = ''
var newDoggosArray = []
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");

function displayDoggos() {
  var result = '';
	dogs.forEach(function(dog) {
    result += `<p> ${dog.name} (${dog.size})</p>`
  });
  document.getElementById('dogs').innerHTML = result;
}

displayDoggos();

function doggosTypeFilter() {
  var input, filter, result = '';
  input = document.getElementById("razaFilter");
  filter = input.value.toLowerCase();
  dogs.map(dog =>{
    if (dog.name.toLowerCase().indexOf(filter) > -1) {
      result += `<p> ${dog.name} (${dog.size})</p>`
    }
    document.getElementById('dogs').innerHTML = result;
  })
}

function addElementsForBtnFilter(size){
  dogs.map(dog =>{
    if (dog.size == size) {
      newDoggosArray = [...newDoggosArray, dog]
    }
  })
  doggosFilterByButton = ''
  newDoggosArray.map(newDog =>{
    doggosFilterByButton += `<p> ${newDog.name} (${newDog.size})</p>`
  })
  document.getElementById('dogs').innerHTML = doggosFilterByButton;
}

function removeElementsForBtnFilter(size){
  dogs.map(dog =>{
    if (dog.size == size) {
      newDoggosArray = newDoggosArray.filter(function (d) {
        return d.size != size
      })
    }
  })
  if (!newDoggosArray.length){
    displayDoggos()
  } else {
    doggosFilterByButton = ''
    newDoggosArray.map(newDog =>{
      doggosFilterByButton += `<p> ${newDog.name} (${newDog.size})</p>`
    })
    document.getElementById('dogs').innerHTML = doggosFilterByButton;
  }
}

/* This is for setting active buttons*/
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    if (this.classList.contains("active")) {
      removeElementsForBtnFilter(this.id);
      this.style.backgroundColor = "#EFEFEF";
      this.classList.remove("active");
    } else {
      addElementsForBtnFilter(this.id);
      this.style.backgroundColor = "yellow";
      this.classList.add("active")
    };
  });
}