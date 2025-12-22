// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

if (mobileMenuBtn) {
    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu-links a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu();
        });
    });
}

// Floating Contact Button
const contactBtn = document.getElementById('contactBtn');
const contactPopup = document.getElementById('contactPopup');
const wechatId = document.getElementById('wechatId');
const copyNotification = document.getElementById('copyNotification');

if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        contactPopup.classList.toggle('show');
    });
}

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (contactPopup && !contactPopup.contains(e.target) && e.target !== contactBtn) {
        contactPopup.classList.remove('show');
    }
});

// Copy WeChat ID
if (wechatId) {
    wechatId.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText('feijia');
            showCopyNotification();
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = 'feijia';
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showCopyNotification();
            } catch (err) {
                console.error('Copy failed:', err);
            }
            document.body.removeChild(textArea);
        }
    });
}

function showCopyNotification() {
    if (copyNotification) {
        copyNotification.classList.add('show');
        setTimeout(() => {
            copyNotification.classList.remove('show');
        }, 2000);
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }

    lastScroll = currentScroll;
});
