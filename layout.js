document.addEventListener("DOMContentLoaded", function() {
    // Navigasi / Header
    const navbar = `
    <nav class="bg-amber-900 text-white p-4 sticky top-0 z-50 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Branding Section -->
            <a href="index.html" class="flex flex-col group">
                <h1 class="text-xl md:text-2xl font-bold tracking-widest uppercase leading-none">
                    BOJONEGORO <span class="font-light text-amber-200">HERITAGE</span>
                </h1>
                <span class="text-[10px] md:text-xs tracking-[0.3em] uppercase text-amber-100/80 mt-1 font-semibold group-hover:text-white transition-colors">
                    Museum Rajekwesi
                </span>
            </a>

            <!-- Menu Section -->
            <ul class="flex space-x-6 text-sm md:text-base items-center">
                <li><a href="index.html" class="hover:text-amber-200 transition">Beranda</a></li>
                <li>
                    <a href="kriteria-uu.html" class="bg-amber-800 hover:bg-amber-700 px-3 py-2 rounded text-xs font-bold uppercase tracking-tighter border border-amber-600 transition">
                        Kriteria Cagar Budaya
                    </a>
                </li>
            </ul>
        </div>
    </nav>`;

    // Footer
    const footer = `
    <footer class="bg-stone-900 text-stone-400 py-8 text-center mt-12">
        <p>&copy; 2026 Dinas Kebudayaan dan Pariwisata Kabupaten Bojonegoro <br> Bidang Kebudayaan  </p>
        <div class="mt-4 space-x-4">
            <a href="#" class="hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="#" class="hover:text-white"><i class="fab fa-facebook"></i></a>
        </div>
    </footer>`;

    // Pasang ke HTML
    if (document.getElementById('nav-placeholder')) document.getElementById('nav-placeholder').innerHTML = navbar;
    if (document.getElementById('footer-placeholder')) document.getElementById('footer-placeholder').innerHTML = footer;
});
