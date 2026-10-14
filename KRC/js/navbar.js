
const navbar = document.getElementById("navbar");

if (navbar) {
    navbar.innerHTML = `
        <header class="navbar">

            <!-- LOGO KRC -->
            <a href="index.html"
               class="navbar-logo"
               aria-label="KRC Ayam Guling - Home">
                <span>KRC</span>
                <small>AYAM GULING</small>
            </a>

            <!-- NAVBAR DESKTOP -->
            <nav class="desktop-nav" aria-label="Navigasi utama">
                <a href="index.html">Home</a>
                <a href="menu.html">Menu</a>
                <a href="lokasi.html">Google Review &amp; Lokasi</a>
                <a href="pesan.html" class="nav-order">
                    🛵 Pesan Sekarang
                </a>
            </nav>

            <!-- TOMBOL MENU HP -->
            <button
                class="menu-toggle"
                id="menu-toggle"
                type="button"
                aria-label="Buka menu"
                aria-expanded="false"
                aria-controls="mobile-menu">
                ☰
            </button>

        </header>

        <!-- MENU DROPDOWN HP -->
        <nav
            class="mobile-menu"
            id="mobile-menu"
            aria-label="Navigasi mobile">

            <a href="index.html"> &nbsp; Home</a>
            <a href="menu.html"> &nbsp; Menu</a>
            <a href="lokasi.html"> &nbsp; Google Review &amp; Lokasi</a>
            <a href="pesan.html" class="mobile-order">
                🛵 &nbsp; Pesan Sekarang
            </a>

        </nav>
    `;

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    // BUKA DAN TUTUP MENU HP
    menuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("show");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu" : "Buka menu"
        );
    });

    // TUTUP MENU SETELAH LINK DIPILIH
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("show");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");
        });
    });

    // TANDAI HALAMAN YANG SEDANG DIBUKA
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(
        ".desktop-nav a, .mobile-menu a"
    ).forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // TUTUP MENU JIKA LAYAR BERUBAH KE DESKTOP
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            mobileMenu.classList.remove("show");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");
        }
    });
}
