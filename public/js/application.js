$(document).ready( function(){
  loadResources();
  loadGear();
});

function loadResources() {
 
}

function loadGear() {
  
}

function addGear(item) {
  var li = $('<li>').html(item);
  $("#gearList").append(li);
}

function addResource(item) {
  var a = $('<a>').prop("href", item.href).html(item.description);
  var li = $('<li>').append(a);
  $("#resourceList").append(li);
}