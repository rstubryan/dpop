// Menunggu hingga seluruh halaman dan konten dimuat sebelum menjalankan fungsi
window.onload = () => {
  // Mengambil elemen gambar dengan id "doa1" dan elemen dengan id "hitung" dari HTML
  let img = document.querySelector("#doa1");
  let counter = document.querySelector("#hitung");

  // Menginisialisasi variabel score dan mendefinisikan elemen audio
  let score = 0;
  let sound = new Audio("subhanallah.mp3");

  // Inisialisasi flag untuk penanda klik
  let isClicked = false;

  // Fungsi untuk menambah nilai pada variabel score dan mengupdate tampilan counter
  function addToCounter() {
    score++; // Menambahkan nilai pada variabel score
    counter.innerHTML = score; // Mengganti isi elemen "hitung" dengan nilai dari variabel score
  }

  // Fungsi untuk mengembalikan gambar ke posisi semula
  function resetImage() {
    img.src = "berdoaa1.png"; // Mengganti sumber gambar menjadi "berdoa1.png"
  }

  // Menambahkan event listener untuk event "touchstart" dan "mousedown" pada gambar
  img.addEventListener("touchstart", (event) => {
    if (!isClicked) {
      isClicked = true; // Set flag menjadi true untuk mencegah aksi klik kedua
      event.preventDefault(); // Mencegah aksi default saat sentuhan dimulai
      img.src = "berdoaa2.png"; // Mengganti sumber gambar saat sentuhan dimulai
      sound.currentTime = 0; // Menyetel waktu audio kembali ke awal
      sound.play(); // Memainkan audio "subhanallah.mp3"
      addToCounter(); // Memanggil fungsi addToCounter() untuk menambah nilai counter

      // Setelah 1 detik (1000 milidetik), panggil fungsi resetImage()
      setTimeout(() => {
        resetImage();
      }, 1000);
    }
  });

  img.addEventListener("mousedown", () => {
    if (!isClicked) {
      isClicked = true; // Set flag menjadi true untuk mencegah aksi klik kedua
      img.src = "berdoaa2.png"; // Mengganti sumber gambar saat mouse ditekan
      sound.currentTime = 0; // Menyetel waktu audio kembali ke awal
      sound.play(); // Memainkan audio "subhanallah.mp3"
      addToCounter(); // Memanggil fungsi addToCounter() untuk menambah nilai counter

      // Setelah 1 detik (1000 milidetik), panggil fungsi resetImage()
      setTimeout(() => {
        resetImage();
      }, 1000);
    }
  });

  // Menambahkan event listener untuk event "touchend" dan "mouseup" pada gambar
  img.addEventListener("touchend", () => {
    isClicked = false; // Set flag kembali ke false setelah sentuhan berakhir
  });

  img.addEventListener("mouseup", () => {
    isClicked = false; // Set flag kembali ke false setelah mouse ditekan
  });

  // Menambahkan event listener untuk event "ended" pada audio
  sound.addEventListener("ended", () => {
    sound.currentTime = 0; // Menyetel waktu audio kembali ke awal saat audio selesai diputar
  });

  document.getElementById("doa1").addEventListener("touchstart", function () {
    const selectedProvince = document.getElementById("prov").value;
    updateData(selectedProvince);
  });
};
