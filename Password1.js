function CheckPassword(inputtxt) {
    var myInput = document.getElementById("psw");
    var latin_lower = document.getElementById("latin_lower");
    var latin_upper = document.getElementById("latin_upper");
    var number = document.getElementById("number");
    var special = document.getElementById("special");
    var length = document.getElementById("length");

    // Когда пользователь начинает вводить что-то в поле пароля
    myInput.onkeyup = function () {
        // Проверка строчных букв
        var latin_lower = /[a-z]/g;
        if (myInput.value.match(latin_lower)) {
            latin_lower.classList.remove("invalid");
            latin_lower.classList.add("valid");
        } else {
            latin_lower.classList.remove("valid");
            latin_lower.classList.add("invalid");
        }

        // Проверка заглавных букв
        var latin_upper = /[A-Z]/g;
        if (myInput.value.match(latin_upper)) {
            latin_upper.classList.remove("invalid");
            latin_upper.classList.add("valid");
        } else {
            latin_upper.classList.remove("valid");
            latin_upper.classList.add("invalid");
        }

        // Проверка чисел
        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
        // Проверка специальных символов
        var special = /[!@#$%^&*]/g;
        if (myInput.value.match( special)) {
            special.classList.remove("valid");
            special.classList.add("valid");
        } else {
            special.classList.remove("valid")
            special.classList.add("invalid");

        }
        // Проверка длины
        if (myInput.value.length >= 6) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }
}