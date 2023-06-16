function attemptLogin() {
    var inputLoginId = document.getElementsByClassName("loginId")[0].value;
    var inputPassword = document.getElementsByClassName("password")[0].value;

    // login logic
    var storedLoginId = "123456789";
    var storedPassword = "SecureBank";

    var loginResult = document.createElement("p");
    var loginResultText = "";

    if (inputLoginId === storedLoginId && inputPassword === storedPassword) {
        loginResultText = "Login successful!";
        {/*  */
            window.location.href = "dashboard.html"; //Redirect to dashboard page
        }i
        // Grant access or perform 
    } else {
        alert("Login failed , invalid credentials")
    }

    loginResult.textContent = loginResultText;
    loginResult.className = "login-result";

    var loginPage = document.getElementsByClassName("loginpage")[0];
    loginPage.appendChild(loginResult);
}

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/648af1b194cf5d49dc5ddac3/1h2vc08ck';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
