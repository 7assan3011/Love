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
        stateIcon.innerText = "⏸️";
    } else {
        mySingleAudio.pause();
        stateIcon.innerText = "▶️";
    }
}

// تحديث شريط التحميل للأغنية الواحدة
mySingleAudio.ontimeupdate = () => {
    const pct = (mySingleAudio.currentTime / mySingleAudio.duration) * 100;
    fill.style.width = pct + "%";
};

// لما الأغنية تخلص يرجع الأيقونة لـ Play
mySingleAudio.onended = () => {
    stateIcon.innerText = "▶️";
    fill.style.width = "0%";
};