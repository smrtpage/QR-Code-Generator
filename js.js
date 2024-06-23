const qrCodeImg = document.getElementById("qr-code-img");
const input = document.querySelector(".input");
const generateBtn = document.querySelector(".generate-btn");

function generateQrCode() {
  const inputValue = input.value;
  if (inputValue === "") {
    alert("Please enter your text or URL!");
    qrCodeImg.style.marginBottom = "0";
    return;
  }

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  qrCodeImg.style.marginBottom = "40px";
}

generateBtn.addEventListener("click", generateQrCode);
