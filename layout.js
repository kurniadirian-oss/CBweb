document.addEventListener("DOMContentLoaded", function() {
    // Navigasi / Header yang sudah diperbaiki untuk Mobile
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png'; // atau 'image/x-icon'
    favicon.href = '/lg.ico'; // Ganti dengan path/URL logo Anda
    document.head.appendChild(favicon);
    const navbar = `
    <nav class="bg-amber-900 text-white p-3 md:p-4 sticky top-0 z-50 shadow-md">
        <div class="container mx-auto flex justify-between items-center gap-2">
            
            <!-- Branding Section (Kiri) -->
            <a href="index.html" class="flex flex-col min-w-0">
                <h1 class="text-sm md:text-xl font-bold tracking-widest uppercase leading-tight truncate">
                    BOJONEGORO <span class="font-light text-amber-200">HERITAGE</span>
                </h1>
                <span class="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-amber-100/80 font-semibold truncate">
                    Museum Rajekwesi
                </span>
            </a>

            <!-- Menu Section (Kanan) -->
            <div class="flex items-center space-x-2 md:space-x-6 shrink-0">
                <a href="index.html" class="hidden sm:block hover:text-amber-200 transition text-sm font-medium">Beranda</a>
                <a href="kriteria-uu.html" class="bg-amber-700 hover:bg-amber-600 px-2 py-1.5 md:px-4 md:py-2 rounded text-[10px] md:text-xs font-bold uppercase tracking-tighter border border-amber-500/50 transition whitespace-nowrap shadow-sm">
                    Kriteria Cagar Budaya
                </a>
            </div>

        </div>
    </nav>`;

    // Footer
    const footer = `
    <footer class="bg-stone-900 text-stone-400 py-8 text-center mt-12 w-full">
        <p>&copy; 2026 Dinas Kebudayaan dan Pariwisata Kabupaten Bojonegoro <br> Bidang Kebudayaan  </p>
        <div class="mt-4 space-x-4 w-full">
            <a href="https://instagram.com/museumrajekwesi" class="hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@museum.rajekwesi" class="hover:text-white"><i class="fab fa-tiktok"></i></a>
        </div>
    </footer>`;

    // Pasang ke HTML
    if (document.getElementById('nav-placeholder')) document.getElementById('nav-placeholder').innerHTML = navbar;
    if (document.getElementById('footer-placeholder')) document.getElementById('footer-placeholder').innerHTML = footer;
});
