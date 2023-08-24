function checkPassword() {
            var password = document.getElementById("password").value;
            if (password === "12345678") {
                document.getElementById("login-form").style.display = "none";
                document.getElementById("content").style.display = "block";
            } else {
                alert("Incorrect password bro.");
            }
        }
