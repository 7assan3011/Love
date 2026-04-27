const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const box = document.querySelectorAll(".box2")[0]

// التنقل بين الأقسام
btn1.addEventListener("click", () => {
    sec1.classList.remove("active");
    sec2.classList.add("active");
    box.classList.add("shw");
});

btn2.addEventListener("click", () => {
    sec2.classList.remove("active");
    sec3.classList.add("active");
    sec3.style.setProperty("display", "block", "important");
    loadTrack(); 
});

// تأثير القلوب
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    heart.style.fontSize = 15 + Math.random() * 20 + "px";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 300);

// --- مشغل الصوتيات (Audio Player) ---

const playlist = [
    { name: "1", src: "media/1.ogg" },
    { name: "2", src: "media/2.ogg" },
    { name: "3", src: "media/3.ogg" },
    { name: "4", src: "media/4.ogg" },
    { name: "5", src: "media/5.ogg" },
    { name: "6", src: "media/6.ogg" },
    { name: "7", src: "media/7.ogg" },
    { name: "8", src: "media/8.ogg" },
    { name: "9", src: "media/9.ogg" },
    { name: "10", src: "media/10.ogg" },
    { name: "11", src: "media/11.ogg" },
    { name: "12", src: "media/12.ogg" },
    { name: "13", src: "media/13.ogg" },
    { name: "14", src: "media/14.ogg" },
    { name: "15", src: "media/15.ogg" },
    { name: "16", src: "media/16.ogg" },
    { name: "17", src: "media/17.ogg" },
    { name: "18", src: "media/18.ogg" },
    { name: "19", src: "media/19.ogg" },
    { name: "20", src: "media/20.ogg" },
    { name: "21", src: "media/21.ogg" },
    { name: "22", src: "media/22.ogg" }
];

let currentIndex = 0;
const audio = document.getElementById("myAudio");
const source = document.getElementById("audioSource");
const playIcon = document.getElementById("playIcon");
// تأكد أن لديك عنصر في الـ HTML واخد id="track-name"
const trackName = document.getElementById("track-name");

function loadTrack() {
    source.src = playlist[currentIndex].src;
    // التعديل هنا: بنعرض الاسم فقط بدون أي إضافات
    if(trackName) {
        trackName.innerText = playlist[currentIndex].name;
    }
    audio.load();
}

function updateTrack() {
    loadTrack();
    audio.play();
    playIcon.innerText = "⏸️";
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playIcon.innerText = "⏸️";
    } else {
        audio.pause();
        playIcon.innerText = "▶️";
    }
}

function nextTrack() {
    currentIndex++;
    if (currentIndex >= playlist.length) {
        currentIndex = 0;
    }
    updateTrack();
}

function prevTrack() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = playlist.length - 1;
    }
    updateTrack();
}
// datna
// تاريخ البداية
const startDate = new Date("2025-12-23T00:00:00").getTime();

function updateCounter() {
    const now = new Date().getTime();
    const diff = now - startDate;

    // حساب الأيام والساعات والدقائق والثواني
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // تحديث العناصر في الصفحة
    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}

// تحديث العداد كل ثانية
setInterval(updateCounter, 1000);
// تشغيل الدالة فوراً عند التحميل
updateCounter();
const mySingleAudio = document.getElementById("singleAudio");
const stateIcon = document.getElementById("stateIcon");
const fill = document.getElementById("fill");

// إظهار المشغل عند الدخول لـ Sec3
btn2.addEventListener("click", () => {
    sec2.classList.remove("active");
    sec3.classList.add("active");
    document.querySelector(".mini-player-fixed").style.display = "flex";
});

// وظيفة التشغيل والإيقاف
function handleSinglePlay() {
    if (mySingleAudio.paused) {
        mySingleAudio.play();
        stateIcon.innerHTML = '<img style="width: 35px;" src="img/pause-button.png" alt="">';
    } else {
        mySingleAudio.pause();
        stateIcon.innerHTML = '<img style="width: 35px;" src="img/play-button.png" alt="">';
    }
}

// تحديث شريط التحميل للأغنية الواحدة
mySingleAudio.ontimeupdate = () => {
    const pct = (mySingleAudio.currentTime / mySingleAudio.duration) * 100;
    fill.style.width = pct + "%";
};

// لما الأغنية تخلص يرجع الأيقونة لـ Play
mySingleAudio.onended = () => {
    stateIcon.innerHTML = '<img style="width: 35px;" src="img/play-button.png" alt="">';
    fill.style.width = "0%";
};
// الاستارز
const imges = [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpeg",
    "img/5.jpeg",
    "img/6.jpeg",
    "img/7.jpeg",
    "img/8.jpeg",
    "img/9.jpeg",
    "img/10.jpeg",
    "img/11.jpeg",
    "img/12.jpeg",
    "img/13.jpeg",
    "img/14.jpeg",
    "img/15.jpeg",
    "img/16.jpeg",
    "img/17.jpeg",
    "img/18.jpeg",
    "img/19.jpeg",
    "img/20.jpeg",
    "img/21.jpeg",
    "img/22.jpeg",
    "img/23.jpeg",
    "img/24.jpeg",
    "img/25.jpeg",
    "img/26.jpeg",
    "img/27.jpeg",
    "img/28.jpeg",
    "img/29.jpeg",
    "img/30.jpeg",
    "img/31.jpeg",
    "img/32.jpeg",
    "img/33.jpeg",
    "img/34.jpeg",
    "img/35.jpeg",
    "img/happy1.jpeg",
    "img/happy2.jpeg",
    "img/happy3.jpeg",
    "img/happy4.jpeg",
    "img/happy5.jpeg",
    "img/happy6.jpeg",
    "img/happy7.jpeg"
]
const arrowR = document.getElementById("arrowR")
const arrowL = document.getElementById("arrowL")
const imgStar = document.getElementById("imgStar")
let i = 0
arrowR.addEventListener("click" , ()=>{
    i+= 1
    let imgSnum = imges[i]
    imgStar.src = imgSnum
})
arrowL.addEventListener("click", () => {
    i--; // نقص العداد 1
    
    if (i < 0) {
        i = imges.length - 1; // لو رجعنا قبل أول صورة روح لآخر واحدة
    }
    
    imgStar.src = imges[i];
});
const arrowR2 = document.getElementById("arrowR2")
const arrowL2 = document.getElementById("arrowL2")
const imgPicture = document.getElementById("imgPicture")
const ourImg = [
    "img/ph1.jpeg",
    "img/ph2.jpeg",
]
let j = 0
arrowR2.addEventListener("click", () => {
    j += 1; // زيادة العداد 1
    if (j >= ourImg.length) {
        j = 0; // لو تجاوزنا آخر صورة رجع لأول واحدة
    }
    imgPicture.src = ourImg[j];
})
arrowL2.addEventListener("click", () => {
    j--; // نقص العداد 1
    if (j < 0) {
        j = ourImg.length - 1; // لو رجعنا قبل أول صورة روح لآخر واحدة
    }
    imgPicture.src = ourImg[j];
}
);
