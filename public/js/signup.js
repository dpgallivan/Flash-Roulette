$(document).ready(function() {
  var signUpForm = $("form.signup");
  var Username = $("input#Username-input");
  var Password = $("input#Password-input");

  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      user: Username.val().trim(),
      password: Password.val().trim()
    };

    if (!userData.user || !userData.password) {
      return;
    }
    signUpUser(userData.user, userData.password);
    Username.val("");
    Password.val("");
  });

  function signUpUser(email, password) {
    $.post("/api/signup", {
      user: user,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});