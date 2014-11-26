$(document).ready( function(){
  loadResources();
  loadGear();
});

function loadResources() {
  $("#resources .spinner").show();
  $.ajax({
    url:  "/resources"
  }).done(function(data){
    $.each(data, function(index, value) {
      addResource(value);
    })
    $("#resources .spinner").hide();
  });
}

function loadGear() {
  $("#gear .spinner").show();
  $.ajax({
    url:  "/gear"
  }).done(function(data){
    $.each(data, function(index, value) {
      addGear(value);
    })
    $("#gear .spinner").hide();
  });
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