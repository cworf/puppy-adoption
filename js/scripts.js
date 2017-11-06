<<<<<<< Updated upstream
=======
//Backend Logic
function Animal(type, name, age, gender, bio) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.bio = bio;
}

Animal.prototype.addAnimal = function() {
  return '<div class="profile row">' +
            '<div class="col-md-4"><img src="cat.jpg" alt="cat"></div>' +
            '<div class="col-md-8">' +
            '<h3>' + this.name + '</h3>' +
            '<h4>' + this.gender + '</h4>' +
            '<h6>' + this.age + '</h6>' +
            '<p>' + this.bio + '</p>'  +
            '</div>' +
              '<button type="button" name="adopt" class="btn btn-success adopt-btn">Adopt</button>' +
          '</div>'
}

>>>>>>> Stashed changes
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
    $('.adopt-btn').click(function(){
      $(this).parent().addClass('adopted');
    });
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
