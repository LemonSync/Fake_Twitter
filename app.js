/*
    Makasih starnya :)
*/

const avatar = document.getElementById('avatar');
const fileName = document.getElementById('file-name');
const reset = document.getElementById('reset');
const nama = document.getElementById('name');
const username = document.getElementById('username');
const message = document.getElementById('message');
const waktu = document.getElementById('time');
const tanggal = document.getElementById('date');
const client = document.getElementById('client');
const retweets = document.getElementById('retweets');
const quotes = document.getElementById('quotes');
const like = document.getElementById('likes');
const themeRadios = document.getElementsByName('theme_radio');
const verifiedRadios = document.getElementsByName('verified_radio');
const tweetBox = document.getElementById('tweet_box');
const tweet = document.getElementById('tweet');
const tweetAvatar = document.getElementById('tweet_avatar');
const tweetName = document.getElementById('tweet_name');
const tweetVerified = document.getElementById('tweet_verified');
const tweetUsername = document.getElementById('tweet_username');
const tweetMessage = document.getElementById('tweet_message');
const tweetTime = document.getElementById('tweet_time');
const tweetDate = document.getElementById('tweet_date');
const tweetClient = document.getElementById('tweet_client');
const tweetRetweets = document.getElementById('tweet_retweets');
const tweetQuotes = document.getElementById('tweet_quotes');
const tweetLikes = document.getElementById('tweet_likes');
const download = document.getElementById('download');

// Function untuk random, tapi ga guna :v
function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let themeColor = '#ffffff';
let color = '#0f1419'

// Ini mungubah tulisan yang awalnya 1000 menjadi 1k (format number)
function numberFormatter(num, fixed) {
  if (num === null) {
    return null;
  }

  if (num === 0) {
    return '0';
  }

  fixed = !fixed || fixed < 0 ? 0 : fixed;

  let b = num.toPrecision(2).split('e'),
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
    c =
      k < 1
        ? num.toFixed(0 + fixed)
        : (num / Math.pow(10, k * 3)).toFixed(1 + fixed),
    d = c < 0 ? c : Math.abs(c),
    e = d + ['', 'K', 'M', 'B', 'T'][k];

  return e;
}

// Ini hanya untuk penempatan nama foto saja, tidak terlalu berguna juga
function showFileName(name) {
  fileName.classList.add('show');
  fileName.innerText = name;
}

// Function untuk penempatan foto profile yang sudah diupload
function profileFunction() {
  const [file] = avatar.files;
  if (file) {
    showFileName(file.name);
    tweetAvatar.src = URL.createObjectURL(file);
  }
}

// Ini function untuk reset foto profilenya
function resetProfileFunction() {
  fileName.innerText = '';
  fileName.classList.remove('show');
  tweetAvatar.src = 'assets/silhoutte.png';
}

// Function untuk namanya
function namaFunction() {
  const nameValue = nama.value.trim();

  if (nameValue === '') {
    tweetName.innerText = 'Name';
  } else if (nameValue.length > 30) {
    tweetName.innerText = 'Nama Terlalu Panjang';
  } else {
    tweetName.innerText = nameValue;
  }

  const characterCountEl = nama.nextElementSibling.querySelector('.count');
  characterCountEl.innerText = nameValue.length;
}

// Function untuk username Twitternya. + khusus huruf, angka, dan simbol.
function usernameFunction() {
  const usernameValue = username.value.trim();

  if (usernameValue === '') {
  tweetUsername.innerText = 'username';
} else if (!usernameValue.match(/^[a-zA-Z0-9_]+$/)) {
  tweetUsername.innerText = 'Gak boleh pakai itu';
} else if (usernameValue.length > 15) {
  tweetUsername.innerText = 'Username terlalu panjang';
} else {
  tweetUsername.innerText = usernameValue;
}

  const characterCountEl =
    username.parentElement.nextElementSibling.querySelector('.count');
  characterCountEl.innerText = usernameValue.length;
}

// Function untuk isi pesannya
function pesanFunction() {
  const messageValue = message.value.trim();

  if (messageValue === '') {
    tweetMessage.innerText = 'Lemon merupakan salah satu buah terbaik di dunia.';
  } else if (messageValue.length > 280) {
    tweetMessage.innerText = 'Pesan terlalu panjang'
  } else {
    tweetMessage.innerText = messageValue;
  }

  const characterCountEl = message.nextElementSibling.querySelector('.count');
  characterCountEl.innerText = messageValue.length;
}

// Function untuk pengeditan / otomatis waktu
function waktuFunction() {
  const timeValue = waktu.value.trim();
if (timeValue === '') {
  tweetTime.innerText = getCurrentTime();
  } else if (timeValue.toLowerCase() === 'now') {
    tweetTime.innerText = getCurrentTime();
  } else {
    tweetTime.innerText = timeValue;
  }
}

// Function untuk pengeditan / otomatis tanggal
function tanggalFunction() {
  const dateValue = tanggal.value.trim();

  if (dateValue === '') {
    tweetDate.innerText = ambilTanggal();
  } else if (dateValue.toLowerCase() === 'now') {
    tweetDate.innerText = ambilTanggal();
  } else {
    tweetDate.innerText = dateValue;
  }
}

// Function untuk client, semacam watermark aplikasi Twitter lah
function clientFunction() {
  const clientValue = client.value.trim();

  if (clientValue === '') {
    tweetClient.innerText = 'Twitter For iPhone';
  } else {
    tweetClient.innerText = clientValue;
  }
}

// Function untuk retweetsnya
function retweetsFunction() {
  tweetRetweets.parentElement.classList.remove('hide');
let retweetsValue = retweets.value;

if (retweetsValue === '') {
  tweetRetweets.innerText = '96';
} else {
  retweetsValue = +retweetsValue;
  if (retweetsValue >= 0) {
    if (retweetsValue === 0) {
      tweetRetweets.parentElement.classList.add('hide');
    } else {
      tweetRetweets.innerText = numberFormatter(retweetsValue);
    }
  } else {
    tweetRetweets.innerText = '96';
  }
}
}

// Function untuk quotesnya
function quotesFunction() {
  tweetQuotes.parentElement.classList.remove('hide');
let quotesValue = quotes.value;

if (quotesValue === '') {
  tweetQuotes.innerText = '88';
} else {
  quotesValue = +quotesValue;
  if (quotesValue >= 0) {
    if (quotesValue === 0) {
      tweetQuotes.parentElement.classList.add('hide');
    } else {
      tweetQuotes.innerText = numberFormatter(quotesValue);
    }
  } else {
    tweetQuotes.innerText = '88';
  }
}
}

// Function untul likenya 
function likeFunction() {
  tweetLikes.parentElement.classList.remove('hide');
let likesValue = likes.value;

if (likesValue === '') {
  tweetLikes.innerText = '153';
} else {
  likesValue = +likesValue;
  if (likesValue >= 0) {
    if (likesValue === 0) {
      tweetLikes.parentElement.classList.add('hide');
    } else {
      tweetLikes.innerText = numberFormatter(likesValue);
    }
  } else {
    tweetLikes.innerText = '153';
  }
}
}

// Function untuk mengambil waktu saat ini
function getCurrentTime() {
  const dateObj = new Date();
  let hours = +dateObj.getHours();
  let minutes = ('00' + dateObj.getMinutes()).slice(-2);
  let suffix;

  if (hours > 12) {
    hours = hours - 12;
    suffix = 'PM';
  } else {
    if (hours === 0) {
      hours = 12;
      suffix = 'AM';
    } else if (hours === 12) {
      suffix = 'PM';
    } else {
      suffix = 'AM';
    }
  }

  return `${hours}:${minutes} ${suffix}`;
}

// Function untuk mengambil tanggal saat ini
function ambilTanggal() {
  const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${MONTHS[month]} ${day}, ${year}`;
}

// Untuk temanya
function toggleTheme(ev) {
  let choice;

  for (let i = 0; i < themeRadios.length; i++) {
    if (themeRadios[i].checked) {
      choice = themeRadios[i].value;
    }
  }

  if (choice === 'dim') {
    tweet.className = 'tweet dim';
    tweetBox.className = 'tweet_box dim';
    themeColor = '#15202b';
  } else if (choice === 'dark') {
    tweet.className = 'tweet dark';
    tweetBox.className = 'tweet_box dark';
    themeColor = '#000000';
  } else {
    tweet.className = 'tweet';
    tweetBox.className = 'tweet_box';
    themeColor = '#ffffff';
  }
}

// Function untuk tombol verifikasi
function verifikasi() {
  let choice;

  for (let i = 0; i < verifiedRadios.length; i++) {
    if (verifiedRadios[i].checked) {
      choice = verifiedRadios[i].value;
    }
  }

  if (choice === 'show') {
    tweetVerified.classList.remove('hide');
  } else {
    tweetVerified.classList.add('hide');
  }
}

// Hanya untuk nama file foto yang akan didownload
function generateFileName() {
  return `tweet${Math.floor(Math.random() * 90000) + 10000}`;
}

// Ini function download gambar
function saveAs(uri, filename) {
  const link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}

// Hanya function screenshot dari file html2canvas.min.js
// Saran gw jangan diubah, karena posisinya sudah pas
function takeScreenshot() {
  window.scrollTo(0, 0);
  html2canvas(document.querySelector('.tweet'), {
    allowTaint: true,
    backgroundColor: themeColor,
    useCORS: true,
    scrollX: -window.scrollX,
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.offsetWidth,
    windowHeight: document.documentElement.offsetHeight,
  }).then((canvas) => {
    saveAs(canvas.toDataURL(), generateFileName());
  });
}

// Ini biar waktu otomatis ditetapkan saat halaman dimuat
function takWaktu() {
  waktuFunction();
  tanggalFunction();
}

takWaktu();

// Ini semua hasil. Kalau mau diubah namanya, ubah juga nama fuctionnya diatas tadi
avatar.addEventListener('change', profileFunction);
reset.addEventListener('click', resetProfileFunction);
nama.addEventListener('input', namaFunction);
username.addEventListener('input', usernameFunction);
message.addEventListener('input', pesanFunction);
waktu.addEventListener('input', waktuFunction);
tanggal.addEventListener('input', tanggalFunction);
client.addEventListener('input', clientFunction);
retweets.addEventListener('input', retweetsFunction);
quotes.addEventListener('input', quotesFunction);
like.addEventListener('input', likeFunction);
download.addEventListener('click', takeScreenshot);

for (let i = 0; i < themeRadios.length; i++) {
  themeRadios[i].addEventListener('change', toggleTheme);
}

for (let i = 0; i < verifiedRadios.length; i++) {
  verifiedRadios[i].addEventListener('change', verifikasi);
    }
