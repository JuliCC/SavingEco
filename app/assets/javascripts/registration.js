function registration(form, e) {
  e.preventDefault();


 
  $.ajax({
    url: '/users',
    dataType: 'json',
    data: form.serialize(),
    method: 'POST',
    success: function (data) {
      $('#ModalRegistration').modal('hide');
      location.href = '/';
    },
    error: function (data){
      console.log(data.responseJSON.errors)
      form.find(".errors").html(data.responseJSON.errors.email[0]).show();
    }
  });
}


$(document).on('ready page:load', function(event) {
  
  $("#ModalRegistration .new_user").on("submit", function (e) {
    var form = $(this);
    registration(form, e);
  });

  $(".panel .new_user").on("submit", function (e) {
    var form = $(this);
    registration(form, e);
  });


});

