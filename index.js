
console.log("yes")
function generatepassword(){
    console.log("working")
    var password=""
    var passwordEl=document.getElementById("password")
    var character="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
    for (var i = 0; i < 10; i++) {
        var randomIndex = Math.floor(Math.random() *character.length)
        password += character.charAt(randomIndex)
    }
    passwordEl.value=password

}