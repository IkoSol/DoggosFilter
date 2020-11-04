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
 
function doggosSizeFilter(size){
  var btnPressed=false, smallBtn, mediumBtn, largeBtn, result = '';
  smallBtn = document.getElementById('Chico');
  mediumBtn = document.getElementById('Mediano');
  largeBtn = document.getElementById('Grande');
  dogs.map(dog =>{
    if (dog.size == size) {
      result += `<p> ${dog.name} (${dog.size})</p>`
    }
    document.getElementById('dogs').innerHTML = result;
  })
}