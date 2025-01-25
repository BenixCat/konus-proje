
      document.addEventListener("DOMContentLoaded", function () {
        const continueButton = document.getElementById("continueButton");
        const infoPage = document.getElementById("infoPage");
        const actionButton = document.getElementById("actionButton");
        const overlay = document.getElementById("overlay");

        // Kullanıcının daha önce bu etkinliği gördüğünü kontrol et
        if (localStorage.getItem("freedomSeen")) {
          document.body.style.overflow = "auto"; // Scroll etkin
          overlay.style.display = "none"; // Overlay gizlenir
          return;
        }

        // "Devam Et" butonuna tıklama işlemi
        continueButton.addEventListener("click", function () {
          // Local storage kaydı oluştur
          localStorage.setItem("freedomSeen", "true");
          // Yeni bir siteye yönlendirme
          window.location.href = "https://css-tricks.com/snippets/html/glyphs/"; // Buraya hedef site URL'sini gir
        });

        // "Aksiyon Al" butonuna tıklama işlemi
        //    actionButton.addEventListener("click", function () {
        //      alert(
        //        "Tebrikler, özgürlüğün tadını çıkarın! Özgürlüğe giden ilk adım farkındalıktır."
        //      );
        //      localStorage.setItem("freedomSeen", "true"); // Local storage kaydı
        //      setTimeout(() => {
        //        document.body.style.overflow = "auto"; // Scroll etkin
        //        overlay.style.display = "none"; // Overlay gizlenir
        //      }, 3000);
        //    });
      });