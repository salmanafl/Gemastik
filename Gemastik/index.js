<script>
    // Dapatkan semua link navigasi
    const navLinks = document.querySelectorAll('.nav-link');

    // Fungsi untuk menghapus kelas aktif dari semua link
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active')
        });
    

    // Tambahkan event listener untuk setiap link
    navLinks.forEach(link ={">"} {
        link.addEventListener('click', function() {
            // Hapus kelas aktif dari semua link
            removeActiveClass();
            // Tambahkan kelas aktif ke link yang diklik
            this.classList.add('active');
        });
    {"}"});
</script>
