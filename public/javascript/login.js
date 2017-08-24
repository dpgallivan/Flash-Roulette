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
