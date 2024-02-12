function saatGüncelle() {
    var tarih = new Date();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();

    // Saati düzenle
    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    var saatMetni = saat + ":" + dakika + ":" + saniye;

    // Saati göster
    document.getElementById("saat").innerText = saatMetni;

    // Her saniyede bir fonksiyonu çağır
    setTimeout(saatGüncelle, 1000);
}

// Sayfa yüklendiğinde saatGüncelle fonksiyonunu çağır
window.onload = saatGüncelle;


// Tema değiştirme fonksiyonu
function temaDegistir(tema) {
    // Tema değişkenleri
    var arkaPlanRengi, metinRengi;

    // Tema seçeneklerine göre renkleri belirle
    if (tema === "koyu") {
        arkaPlanRengi = "#333";
        metinRengi = "#fff";
    } else if (tema === "açık") {
        arkaPlanRengi = "#fff";
        metinRengi = "#333";
    }

    // Sayfadaki öğelerin stillerini güncelle
    document.body.style.backgroundColor = arkaPlanRengi;
    document.body.style.color = metinRengi;
    var headTextler = document.getElementsByClassName("headText");
    for (var i = 0; i < headTextler.length; i++) {
        headTextler[i].style.color = metinRengi;
    }
    var resimler = document.querySelectorAll(".sectionArt img");
    resimler.forEach(function(resim) {
        resim.style.backgroundColor = "#919191";
        resim.style.boxShadow = "1px 1px 6px #919191";
    });
}

// Tema değiştirme düğmelerine olay dinleyicilerini ekle
document.getElementById("koyuTemaBtn").addEventListener("click", function() {
    temaDegistir("koyu");
});

document.getElementById("açıkTemaBtn").addEventListener("click", function() {
    temaDegistir("açık");
});
