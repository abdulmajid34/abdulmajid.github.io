const img = ['img/kartini.png', 'img/mengheningkan cipta.png', 'img/tanah airku.png', 'img/bagimuNegeri.jpg', 'img/gundul pacul.jpg', 'img/17 agustus.JPG', 'img/satu-nusa-satu-bangsa.jpg', 'img/sabang ke merauke.jpg', 'img/amparpisang.png', 'img/anak kambing.png', 'img/apuse.png', 'img/balonku.jpg', 'img/hbd.jpg', 'img/suwe.png', 'img/abang tukang bakso.jpg', 'img/anak gembala.png', 'img/anak kambing saya.png', 'img/a whole.jpg', 'img/bintang kecil.jpg', 'img/cicak didinding.jpg', 'img/naik delman.png', 'img/Naik-Naik Ke Puncak Gunung.jpg', 'img/potong bebek.png', 'img/titanik.png']
let idx = 0;
function changeChord () {
    if(idx === img.length - 1) {
        idx = 0;
    }else {
        idx++;
    }
    document.getElementById("gambar").src = img[idx];
    
}
function randomColor() {
    let output = "#"
    let value = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    for (i = 0; i < 6; i++) {
        output += value[ Math.floor( Math.random() * value.length ) ]
    }

    return output
}
  
document.addEventListener('click', function(event) {
    let color = randomColor()

    if (event.target.className === "warna") {
    document.querySelector("body").style.backgroundColor = color
    }
})

const keys = document.querySelectorAll('.key');
const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');
const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k'];
const blacks = ['w', 'e', 'r', 't', 'y'];

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = whites.indexOf(key);
    const blackKeyIndex = blacks.indexOf(key);
  
    if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);
  });
  let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note)
    noteSound.currentTime = 0
    noteSound.play()
    key.classList.add('active')
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

// let randomAngka = Math.floor(Math.random() * 10);
// // console.log(randomAngka);
// let tebakan = -1;
// while (randomAngka != tebakan) {
//     tebakan = parseInt(prompt("MASUKKAN NOMOR KEBERUNTUNGANMU dari 1 sampai 10 DISINI?? apakah anda hoki hari ini 😛 😝 😜 🤪"));
//     if(randomAngka == tebakan) alert("Yeaayy🤗🤗🤗 Anda berhasil menebak. Selamat😍🤩"); else alert("Oops Salah🤭, coba lagi ya🤗😘 ")
// }