document.addEventListener("DOMContentLoaded", function () {
    const html5QrCode = new Html5Qrcode("reader");
  
    html5QrCode.start(
      { facingMode: "environment" }, // caméra arrière sur téléphone
      {
        fps: 10,
        qrbox: 250
      },
      (decodedText, decodedResult) => {
        console.log("Code détecté :", decodedText);
        alert("Code détecté : " + decodedText);
      },
      (errorMessage) => {
        // Tu peux laisser vide ou logger les erreurs
      }
    ).catch((err) => {
      console.error("Erreur lors du démarrage de la caméra :", err);
    });
  });
  