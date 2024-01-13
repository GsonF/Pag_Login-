
var password = document.getElementById ('password');
var iconPassWord = document.getElementById('iconPassWord');


password.addEventListener('focus', function(){
    iconPassWord.src = 'img/2.png';
});

password.addEventListener('blur', function(){
    iconPassWord.src = 'img/1.png';
});