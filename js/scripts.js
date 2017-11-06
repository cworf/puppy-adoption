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
            '<img src="cat.jpg" alt="cat" class="col-md-4"' +
            '<div class="col-md-8">' +
            '<h3>' + this.name + '</h3>' +
            '<h4>' + this.gender + '</h4>' +
            '<h6>' + this.age + '</h6>' +
            '<p>' + this.bio + '</p>'  +
            '</div>' +
              '<button type="button" name="adopt" class="btn btn-success adopt-btn">Adopt</button>' +
          '</div>'
}
