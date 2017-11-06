$(document).ready(function() {
  $("form#animal").submit(function(event) {
    event.preventDefault();
    var animalType = $("select#pet-type").val();
    var animalName = $("input#pet-name").val();
    var animalAge = parseInt($("input#pet-age").val());
    var animalSex = $("input[name=sex]:checked").val();
    var animalBio = $('input#bio').val();
    var newAnimal = new Animal (animalType, animalName, animalAge, animalSex, animalBio);

    $("#all-pets").append(newAnimal.addAnimal());
  });
  $('.adopt-btn').click(function(){
    $(this).parent().addClass('adopted');
  });
  $('#show-all').click(function(){
    $('.profile').show();
  });
  $('#show-avail').click(function(){
    $('.profile').show();
    $('.profile.adopted').hide();

  });
  $('#show-adopted').click(function(){
    $('.profile').show();
    $('.profile:not(.adopted)').hide();
  });
});
