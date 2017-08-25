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

<<<<<<< HEAD
  $("#createAcctBtn").on("click",function(event) {
=======
  $("#createUser").on("click",function(event) {
>>>>>>> f4d9890a39f5e554356673e98def138bf90cc9b6
    event.preventDefault();

    var nameVal = $("#createUserName").val().trim();
    var passwordVal = $("#createUserPassword").val().trim();

<<<<<<< HEAD
    console.log(nameVal);
    console.log(passwordVal);
 	
 	//HOLDING NEW USER INFO IN TEMPORARY OBJECT----------------------------------------------------
    newObject = {
       username: nameVal,
       password: passwordVal
    };
    console.log(newObject);

    //PUSHING THE NEW OBJECT TO THE DATABASE---------------------------------------------------
    var mysql = require('mysql');

	var con = mysql.createConnection({
	  host: "localhost",
	  user: nameVal,
	  password: passwordVal,
	  database: "roulette_db"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
	  con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log("1 record inserted");
	  });
	});

     //CLEARS THE INPUT BOXES----------------------------------------------------------------------
     $("#createUserName").val("");
     $("#createUserPassword").val("");



    //ERICS CODE--------------------------------------
=======
>>>>>>> f4d9890a39f5e554356673e98def138bf90cc9b6
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

<<<<<<< HEAD
  });
=======
  });
>>>>>>> f4d9890a39f5e554356673e98def138bf90cc9b6
