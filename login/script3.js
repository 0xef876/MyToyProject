//  모달을 띄우는 함수

function openmodal()
{
    document.querySelector(".signup").style.display = "block";
    document.querySelector(".login").style.display = "none";
}

function closemodal()
{
    document.querySelector(".signup").style.display = "none";
    document.querySelector(".login").style.display = "block";
}

function logout()
{
    location.reload();
}

function login() {
    
    var id = document.querySelector("#id").value;
    var pw = document.querySelector("#pw").value;
    const hash_pw = CryptoJS.SHA256(pw).toString();
    var data = { "username": id, "password": hash_pw };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://toy.rainclouds.xyz:8443/login?username=${id}&password=${hash_pw}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(JSON.stringify(data));

    xhr.addEventListener("load", function () {
        var result = JSON.parse(xhr.responseText);
        if (result.message == "Login successful!") {
            alert("로그인 성공");
            document.querySelector(".logined").style.display = "block";
            document.querySelector(".login").style.display = "none";
            document.querySelector(".signup").style.display = "none";
            document.querySelector(".logined").querySelector("h2").textContent = id;
            document.querySelector(".logined").querySelector(".username").textContent = result["name"];
            document.querySelector(".logined").querySelector(".userphone").textContent = result["phone"];
        }
        else {
            alert("로그인 실패");
        }
    });
}

function signup() {
    var id1 = document.querySelector("#id1").value;
    var pw1 = document.querySelector("#pw1").value;
    var phone = document.querySelector("#phone").value;
    var name= document.querySelector("#name").value;
    const hash_pw1 = CryptoJS.SHA256(pw1).toString();
    var data = { "username": id1, "password": hash_pw1, "phone": phone, "name": name };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `https://toy.rainclouds.xyz:8443/signup?username=${id1}&password=${hash_pw1}&phone=${phone}&name=${name}`);
    // xhr.open("POST", "https://toy.rainclouds.xyz:8443/signup?username=" + id1 + "&password=" + hash_pw1 + "&phone=" + phone + "&name=" + name);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(JSON.stringify(data));

    xhr.addEventListener("load", function () {
        var result = JSON.parse(xhr.responseText);
        if (result.message == "Signup successful!") {
            alert("회원가입 성공");
            location.reload();
        }
        else {
            alert("회원가입 실패" + result.message);
        }
    });
}