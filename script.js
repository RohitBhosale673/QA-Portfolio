document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Version 1.0.2 Loaded");

    // --- Sticky Header with blur/shadow on scroll ---
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Theme Toggle (Dark/Light Mode) ---
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    themeBtn.addEventListener('click', () => {
        const currentDataTheme = document.documentElement.getAttribute('data-theme');
        let theme = 'dark';

        if (currentDataTheme !== 'light') {
            theme = 'light';
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.mobile-menu-btn i');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle icon between bars and times (X)
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // --- Scroll Reveal Animations utilizing IntersectionObserver ---
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // --- Parallax Effect for Background Blobs ---
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        blob2.style.transform = `translate(${x * -40}px, ${y * -40}px)`;
    });

    // --- Hire Me Form Submission ---
    const hireMeForm = document.getElementById('hire-me-form');
    const formStatus = document.getElementById('form-status');

    if (hireMeForm) {
        hireMeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = hireMeForm.querySelector('.submit-btn');
            const originalBtnContent = submitBtn.innerHTML;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            formStatus.className = 'status-msg'; // Clear previous status
            formStatus.textContent = '';

            const formData = new FormData(hireMeForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const formDataToSubmit = new URLSearchParams(formData);
                const response = await fetch('https://formspree.io/rohitbhosale673@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    body: formDataToSubmit
                });

                console.log('Formspree response status:', response.status);
                const result = await response.json();
                console.log('Formspree response body:', result);

                if (response.ok) {
                    formStatus.textContent = 'Message sent successfully! Thank you.';
                    formStatus.classList.add('success');
                    hireMeForm.reset();
                    // Scroll to status message
                    formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    formStatus.innerHTML = 'Oops! Something went wrong. Please check your inbox for an activation email from Formspree, or <a href="mailto:rohitbhosale673@gmail.com" style="text-decoration: underline; font-weight: bold;">email me directly</a>.';
                    formStatus.classList.add('error');
                }
            } catch (error) {
                formStatus.textContent = 'Oops! There was a problem. Please try again or email me directly.';
                formStatus.classList.add('error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
            }
        });
    }
});
