function login(form, e) {
  e.preventDefault();

  $.ajax({
    url: '/users/sign_in',
    dataType: 'json',
    data: form.serialize(),
    method: 'POST',
    success: function (data) {
      $('#myModal').modal('hide');
      location.href = '/';
    },
    error: function (data){
      form.find(".errors").html(data.responseJSON.error).show();
    }
  });
}

$(document).on('ready page:load', function(event) {
  
  $(".modal .new_user").on("submit", function (e) {
    var form = $(this);
    login(form, e);
  });

  $(".panel .new_user").on("submit", function (e) {
    var form = $(this);
    login(form, e);
  });


});
