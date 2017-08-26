$("#createButton").click(function(){
  $("#creaButton").toggleClass("is-active");  
});

$("#create-modal-background").click(function(){
   $("#creaButton").toggleClass("is-active"); 
})

$("#loginButton").click(function(){
  $("#logButton").toggleClass("is-active");  
});

$("#login-modal-background").click(function(){
   $("#logButton").toggleClass("is-active"); 
})

$("#createUserError").hide();
$("#loginUserError").hide();

  var currentURL = window.location.origin;

  $("#createUser").on("click",function(event) {
    event.preventDefault();

    var nameVal = $("#createUserName").val().trim();
    var passwordVal = $("#createUserPassword").val().trim();

    // Form validation
    if (nameVal === "" || passwordVal === "") {
    	$("#createUserError").html("*All fields are required*");
        $("#createUserError").show();
        return;
    }

    $("#createUserError").hide();



    // Creates user object
    var newUser = {
      "user_name":nameVal,
      "password":passwordVal,
      "money": 100 // Default Value for now
    };

    // Clears fields
    $("#creaButton").toggleClass("is-active");
    $("#createUserName").val("");
    $("#createUserPassword").val("");

    // POSTs new user
    $.post(currentURL + "/api/signup", newUser, function(data) {
      // console.log(data);
      // login(data.userId);
      window.location = currentURL + "/roulette/" + data.userId;
    });

  });

$("#loginUser").click(function(event){

  var userLogin = $("#userLogIn").val().trim();
  var userPassword = $("#passwordLogIn").val().trim();
  console.log(userLogin);
  console.log(userPassword);

  //CREATES LOGIN PAIR
  var loginPair = {
    "userLogin": userLogin,
    "userPassword": userPassword
  };
    console.log(loginPair)
  // Clears fields

    // GET loginPair from 
    $.post(currentURL + "/api/login", loginPair, function(data) {
      // console.log(data);
      // login(data.userId);

      if(!data.userId) {
        $("#loginUserError").html("*There is no user that matched these inputs*");
        $("#loginUserError").show();
        $("#passwordLogIn").val("");
        return;
      }

      $("#loginUserError").hide();
      $("#logButton").toggleClass("is-active");
      $("#userLogIn").val("");
      $("#passwordLogIn").val("");

      window.location = currentURL + "/roulette/" + data.userId;
    });

});
