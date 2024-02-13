
document.addEventListener("DOMContentLoaded", function() {
    var kullanıcıGirişi = prompt("Lütfen adınızı giriniz:");
    alert("Merhaba, " + kullanıcıGirişi + "! Hoş geldiniz!");

    document.getElementById("nameOfUser").innerHTML= "Hoşgeldin " + kullanıcıGirişi;

});


function büyükResmiGöster(imageID) {
    var küçükResim = document.getElementById(imageID);
    var büyükResim = document.getElementById("büyükResim");
    var büyükResimKapat = document.getElementById("büyükResimKapat");

    büyükResim.style.display = "block";
    büyükResimKapat.src = küçükResim.src;
}

function büyükResmiKapat() {
    var büyükResim = document.getElementById("büyükResim");
    büyükResim.style.display = "none";
}

