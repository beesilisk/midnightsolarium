/*
          __
        /    \
       | STOP |
        \ __ /
          ||
  ^~^  ,  ||
 ('Y') )  ||
 /   \/   ||
(\|||/)   ||

You didn't come here to cheat, did you?
*/

let input = "";

const passphrases = {
  "1234": {
    src: "img/secret_image1.png",
    alt: "Secret 1",
    id: "secretImage1"
  },
  "420": {
    src: "img/secret_image2.png",
    alt: "Secret 2",
    id: "secretImage2"
  },
  // Add more passphrases here
};

function press(num) {
  if (input.length < 9) {
    input += num;
    updateDisplay();
  }
}

function updateDisplay() {
    document.getElementById("display").textContent = input || "000000000";
}

function clearDisplay() {
  input = "";
  updateDisplay();
}

function submitCode() {
  const container = document.getElementById("image-container");

  container.innerHTML = "";

  const entry = passphrases[input];
  if (entry) {
    const img = document.createElement("img");
    img.src = entry.src;
    img.alt = entry.alt;
    img.id = entry.id;
    img.style.display = "block";
    container.appendChild(img);
  } else {
    alert("PASSPHRASE NOT RECOGNIZED!");
  }

  clearDisplay();
}
