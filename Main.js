/**
 * Logika JavaScript untuk Portofolio
 * * 1. Mobile Menu Toggle
 * 2. About Me Tabs Functionality
 * 3. Project Filter Functionality
 * 4. Testimonial Carousel Actions (Placeholder)
 * 5. Initial State Load
 */

// 1. MOBILE MENU TOGGLE
document.getElementById('mobile-menu-button')?.addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// 2. ABOUT ME TABS FUNCTIONALITY
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');

        // Reset all button styles
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('border-primary', 'text-primary');
            btn.classList.add('border-transparent', 'text-gray-600', 'hover:border-gray-300');
        });

        // Set active button style
        this.classList.add('border-primary', 'text-primary');
        this.classList.remove('border-transparent', 'text-gray-600', 'hover:border-gray-300');

        // Hide all content and show active content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(`content-${targetTab}`)?.classList.remove('hidden');
    });
});

// 3. PROJECT FILTER FUNCTIONALITY
        document.querySelectorAll('.filter-button').forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                const projectCards = document.querySelectorAll('.project-card');

                // Reset all filter button styles
                document.querySelectorAll('.filter-button').forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white', 'hover:bg-primary-dark');
                    btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-300', 'hover:bg-gray-100');
                });

                // Set active button style
                this.classList.add('bg-primary', 'text-white', 'hover:bg-primary-dark');
                this.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-300', 'hover:bg-gray-100');

                // Filter cards with transition effect
                projectCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.classList.add('active');
                        // Use a slight delay to ensure the `display: block` happens before the transition starts
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 10); 
                    } else {
                        card.style.opacity = '0';
                        // Wait for transition to finish before setting `display: none`
                        setTimeout(() => {
                            card.classList.remove('active');
                        }, 500); 
                    }
                });
            });
        });

// 4. TESTIMONIAL CAROUSEL ACTIONS (Placeholder) - Dibuat global
// Karena fungsi ini dipanggil langsung dari atribut 'onclick' di HTML,
// dia harus dideklarasikan sebagai fungsi global (tidak di dalam DOMContentLoaded)
window.handleTestimonialAction = function(action) {
    if (action === 'refresh') {
        alert("Testimonial berhasil direfresh! (Ini hanya placeholder)");
    } else if (action === 'add') {
        alert("Tombol Tambah testimonial diklik. (Ini hanya placeholder)");
    } else if (action === 'next') {
        alert("Pindah ke testimonial berikutnya. (Ini hanya placeholder)");
    } else if (action === 'prev') {
        alert("Pindah ke testimonial sebelumnya. (Ini hanya placeholder)");
    }
};

// 5. Initial State Load
document.addEventListener('DOMContentLoaded', () => {
     // Tunjukkan hanya 'web' projects di awal
    document.querySelectorAll('.project-card.web').forEach(card => {
        card.classList.add('active');
        card.style.opacity = '1';
    });
     
     // Simulasikan klik pada tab pertama 'Experience' agar tampilannya benar saat dimuat
     const initialTab = document.querySelector('.tab-button[data-tab="experience"]');
     if (initialTab) {
         initialTab.click(); 
     }
});