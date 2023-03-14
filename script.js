// var signUpBtn = document.querySelector('.signUp');
// var logInBtn = document.querySelector('.logIn');
// // var msg = document.getElementById('message');


// //註冊
// function signUpcheck() {

//   // model
//   var emailStr = document.querySelector('.email').value;
//   var passwordStr = document.querySelector('.password').value;
//   var account = {}; //輸入的資料，填入空物件
//   account.email = emailStr; //填入的 email
//   account.password = passwordStr; //填入的密碼

//   var xhr = new XMLHttpRequest();
//   xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
//   xhr.setRequestHeader('Content-type', 'application/json');
//   var data = JSON.stringify(account); //因為格式是 JSON，所以要轉字串
//   xhr.send(data);
//   xhr.onload = function () {
//     var callbackData = JSON.parse(xhr.responseText); //因為輸入資料目前是字串，要轉成物件才能使用
//     var str = callbackData.message;
//     if (str == "帳號註冊成功") {
//       alert('Sign Up Success');
//     } else {
//       alert('Account has been used');
//     }
//   }
// }

// //登入
// function logIncheck() {

//   // model
//   var emailStr = document.querySelector('.email').value;
//   var passwordStr = document.querySelector('.password').value;
//   var account = {}; //輸入的資料，填入空物件
//   account.email = emailStr; //填入的 email
//   account.password = passwordStr; //填入的密碼

//   var xhr = new XMLHttpRequest();
//   xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signIn', true);
//   xhr.setRequestHeader('Content-type', 'application/json');
//   var data = JSON.stringify(account); //因為格式是 JSON，所以要轉字串
//   xhr.send(data);
//   xhr.onload = function () {
//     var callbackData = JSON.parse(xhr.responseText); //因為輸入資料目前是字串，要轉成物件才能使用
//     var str = callbackData.message;
//     if (str == "登入成功") {
//       alert('Log In Success');
//       location.href="./blog.html"
//     } else {
//       alert('Wrong Account or Password');
//     }
//   }

// }

// // event
// signUpBtn.addEventListener('click', signUpcheck, false);
// logInBtn.addEventListener('click', logIncheck, false);


// new login

function show_hide() {
  var login = document.getElementById("container1");
  var signup = document.getElementById("container2");
  var copyright = document.getElementById("copyright");

  if (login.style.display === "none") {
      login.style.display = "block";  //lonin出現
      document.getElementById("username").value="";
      document.getElementById("password").value="";
      signup.style.display = "none";  //signup消失
      copyright.style.margin = "200px 0px 0px 0px";
  } else {
      login.style.display = "none";   //login消失
      signup.style.display = "block"; //signup出現
      signup.style.visibility="visible";
      copyright.style.margin = "200px 0px 0px 0px";
   
      document.getElementById("fullname").value="";
      document.getElementById("username2").value="";
      document.getElementById("password2").value="";
      document.getElementById("comfirm_password").value="";
  }
}