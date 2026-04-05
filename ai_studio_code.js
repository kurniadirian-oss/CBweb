document.addEventListener("DOMContentLoaded", function() {
    // Navigasi / Header
    const navbar = `
    <nav class="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="text-xl font-bold tracking-widest uppercase">
                BOJONEGORO <span class="font-light text-amber-200">HERITAGE</span>
            </a>
            <ul class="flex space-x-6 text-sm md:text-base">
                <li><a href="index.html" class="hover:text-amber-200">Beranda</a></li>
                <li><a href="kriteria-uu.html" class="hover:text-amber-200 font-semibold text-amber-300">Kriteria UU</a></li>
            </ul>
        </div>
    </nav>`;

    // Footer
    const footer = `
    <footer class="bg-stone-900 text-stone-400 py-8 text-center mt-12">
        <p>&copy; 2026 Dinas Kebudayaan dan Pariwisata Kabupaten Bojonegoro. <br> Bidang Kebudayaan <br> Made with ❤️ </p>
        <div class="mt-4 space-x-4">
            <a href="#" class="hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="#" class="hover:text-white"><i class="fab fa-facebook"></i></a>
        </div>
    </footer>`;

    // Pasang ke HTML
    if (document.getElementById('nav-placeholder')) document.getElementById('nav-placeholder').innerHTML = navbar;
    if (document.getElementById('footer-placeholder')) document.getElementById('footer-placeholder').innerHTML = footer;
});