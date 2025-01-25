// Spesifik bilgiyi kontrol etmek için anahtar
const keyToCheck = "specificKey";

// LocalStorage'den bilgi al
const storedValue = localStorage.getItem(keyToCheck);

// Eğer bilgi varsa DOM'dan elemanı sil
if (storedValue) {
  const elementToRemove = document.getElementById("remove-me");
  if (elementToRemove) {
    elementToRemove.remove();
  }
}

// Butona tıklandığında localStorage'e bilgi ekle
const setLocalStorageButton = document.getElementById("set-localstorage");
setLocalStorageButton.addEventListener("click", () => {
  localStorage.setItem(keyToCheck, "true");
  alert("Bilgi oluşturuldu. Sayfayı yenileyin!");
});

/**    <div id="content">
        <p id="remove-me">Bu paragraf silinebilir.</p>
        <p id="keep-me">Bu paragraf her zaman kalacak.</p>
        <button id="set-localstorage">Bilgi Oluştur</button>
    </div> */
