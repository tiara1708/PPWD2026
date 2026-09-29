const activities = [
    {
        title: "Teamwork, responsibility, and event experience.",
        image: "image/kepanitiaan.webp",
        text: "Merupakan kegiatan yang memberikan banyak pengalaman serta pembelajaran "
    },
    {
        title: "Sharing knowledge and helping others learn.",
        image: "image/mengajar.webp",
        text: "Memberikan pengalaman dalam menyampaikan materi, membimbing, dan berkomunikasi dengan orang lain."
    },
    {
        title: "Communication, customer service, and marketing",
        image: "image/berjualan.webp",
        text: " Membantu saya belajar dalam menawarkan produk, melayani pelanggan, berkomunikasi, dan menjadi lebih percaya diri."
    },
    {
        title: "Creativity, patience, and attention to detail",
        image: "image/kreativitas.webp",
        text: "Membuat kerajinan menjadi salah satu kegiatan yang membantu saya mengembangkan kreativitas dan ketelitian serta sebagai healing."
    }
];

function showDetail(index) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImage").src = activities[index].image;
    document.getElementById("modalTitle").textContent = activities[index].title;
    document.getElementById("modalText").textContent = activities[index].text;
}

function closeDetail() {
    document.getElementById("modal").style.display = "none";
}