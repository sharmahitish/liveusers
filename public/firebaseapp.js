// var firebaseConfig = {
//     apiKey: "AIzaSyB0sBZIsuyJDLB2Q0wnwy1UIywLusRTEfw",
//     authDomain: "form-7f24d.firebaseapp.com",
//     databaseURL: "https://form-7f24d.firebaseio.com",
//     projectId: "form-7f24d",
//     storageBucket: "form-7f24d.appspot.com",
//     messagingSenderId: "185216490023",
//     appId: "1:185216490023:web:0ee1bbfa39b7b956914c02"
//   };
//   // Initialize Firebase
//   var app  = firebase.initializeApp(firebaseConfig);
//    // Get a reference to the database service
// var db = firebase.firestore(app);

// // Commong Validation Class
// function signUp(){
//     var userName = document.getElementById("username").value;
//       var userEmail = document.getElementById("email").value;
//       var password= document.getElementById("password").value;
//     if(validateForm1()){ 
       
//         db.collection("users").doc(userEmail.value).set({
//                 first: userName.value,
//                 useremail: email.value,
//                 userPass: password.value
//             })
//             .then(function() {
//     // console.log("Document successfully written!");
//     window.open("file:///Users/kunalasharma/Desktop/Form/Dashboard.html");
// })
//             .catch(function(error) {
//                 console.error("Error adding document: ", error);
//             }); 
//     }
// }
// function isEmailValied(inputText) {
//     var atposition=inputText.indexOf("@");  
//     var dotposition=inputText.lastIndexOf(".");  
//     if (atposition<1 || dotposition<atposition+2 || dotposition+2>=inputText.length){  
//         alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//         return false;  
//     }  
//     return true;
// }

//     function validateForm1() {
     
//         var x = document.getElementById("username").value;
//       var y = document.getElementById("email").value;
//       var localPassword= document.getElementById("password").value;

//        if (x == "" || x == null) {
//         alert("UserName must be filled out");
//         return false;
//       } else if(y == "" || y == null){
//         alert("Email must be filled out");
//         return false;
//       } else if(localPassword == "" || localPassword== null){
//         alert("Password must be filled out");
//         return false;
//        } else if(localPassword.length<6) {
//         alert("Password should be more than 6 character");
//         return false;
//        } else if(!isEmailValied(y)){
//         alert("Enter valid email address");
//         return false;
//        } else{
//            return true;
//        } 
//     }