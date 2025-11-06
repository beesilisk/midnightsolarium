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
  "222": {
    src: "garden_img/zzz.png",
    alt: "Secret 1",
    id: "secretImage2",
    url: "https://www.youtube.com/watch?v=xxy0ZtIFSlk"
  },
  "231": {
    src: "garden_img/deku_scrub_brother.png",
    alt: "Secret 2",
    id: "secretImage1",
    url: "https://youtu.be/DYK2bNjmXE0?si=mCdK_Ce5PlZvbbxB&t=24"
  },
  "420": {
    src: "garden_img/secret_image3.png",
    alt: "Secret 3",
    id: "secretImage2",
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
    const img = document.createElement("img"); // create the image
    img.src = entry.src;
    img.alt = entry.alt;
    img.id = entry.id;
    img.style.display = "block";

    if (entry.url) {
      // If a URL exists, wrap the image in a link
      const link = document.createElement("a");
      link.href = entry.url;
      link.target = "_blank"; // optional: open in new tab
      link.appendChild(img);
      container.appendChild(link);
    } else {
      // Otherwise just show the image
      container.appendChild(img);
    }
  } else {
    alert("PASSPHRASE NOT RECOGNIZED");
  }

  clearDisplay();
}
