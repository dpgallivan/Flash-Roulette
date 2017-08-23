$(document).ready(function(){
	var login = $('form.login');
	var Username = $('input#Username-input');
	var Password = ($'input#Password-input');

	login.on('submit', function(event){
		event.preventDefault();
    var userData = {
      user: Username.val().trim(),
      password: Password.val().trim()
    };

    if (!userData.user || !userData.password) {
      return;
    }

    loginUser(userData.user, userData.password);
    Username.val("");
    Password.val("");
  });

  function loginUser(user, password) {
    $.post("/api/login", {
      user: user,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});
