// ========== ELEMENTS ==========
const overlay = document.getElementById('overlay');
const notifyPanel = document.getElementById('notifyPanel');
const loginModal = document.getElementById('loginModal');
const hashtagPanel = document.getElementById('hashtagPanel');
const searchMobilePanel = document.getElementById('searchMobilePanel');

// Desktop Icons
const bellIcon = document.getElementById('bellIcon');
const userIcon = document.getElementById('userIcon');
const desktopMenuToggle = document.getElementById('desktopMenuToggle');

// Mobile Icons
const searchMobileIcon = document.getElementById('searchMobileIcon');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNotifyIcon = document.getElementById('mobileNotifyIcon');
const mobileUserIcon = document.getElementById('mobileUserIcon');

// Close Buttons
const closeNotify = document.getElementById('closeNotify');
const closeLogin = document.getElementById('closeLogin');
const closeHashtag = document.getElementById('closeHashtag');
const closeSearchMobile = document.getElementById('closeSearchMobile');


// ========== HELPER FUNCTIONS ==========
function showOverlay() {
    overlay.classList.add('show');
}

function hideOverlay() {
    overlay.classList.remove('show');
}

function closeAllPanels() {
    notifyPanel.classList.remove('show');
    loginModal.classList.remove('show');
    hashtagPanel.classList.remove('show');
    searchMobilePanel.classList.remove('show');
    hideOverlay();
}


// ========== DESKTOP - NOTIFICATION PANEL ==========
if (bellIcon) {
    bellIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Đóng tất cả panel khác
        loginModal.classList.remove('show');
        hashtagPanel.classList.remove('show');
        
        // Toggle notification panel
        if (notifyPanel.classList.contains('show')) {
            notifyPanel.classList.remove('show');
            hideOverlay();
        } else {
            notifyPanel.classList.add('show');
            showOverlay();
        }
    });
}


// ========== DESKTOP - LOGIN MODAL ==========
if (userIcon) {
    userIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Đóng tất cả panel khác
        notifyPanel.classList.remove('show');
        hashtagPanel.classList.remove('show');
        
        // Toggle login modal
        if (loginModal.classList.contains('show')) {
            loginModal.classList.remove('show');
            hideOverlay();
        } else {
            loginModal.classList.add('show');
            showOverlay();
        }
    });
}


// ========== DESKTOP - HASHTAG PANEL ==========
if (desktopMenuToggle) {
    desktopMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Đóng tất cả panel khác
        notifyPanel.classList.remove('show');
        loginModal.classList.remove('show');
        
        // Toggle hashtag panel
        if (hashtagPanel.classList.contains('show')) {
            hashtagPanel.classList.remove('show');
            hideOverlay();
        } else {
            hashtagPanel.classList.add('show');
            showOverlay();
        }
    });
}


// ========== MOBILE - SEARCH PANEL ==========
if (searchMobileIcon) {
    searchMobileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (searchMobilePanel.classList.contains('show')) {
            searchMobilePanel.classList.remove('show');
        } else {
            searchMobilePanel.classList.add('show');
        }
    });
}

if (closeSearchMobile) {
    closeSearchMobile.addEventListener('click', () => {
        searchMobilePanel.classList.remove('show');
    });
}


// ========== MOBILE - HASHTAG PANEL ==========
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Đóng các panel khác
        notifyPanel.classList.remove('show');
        loginModal.classList.remove('show');
        
        // Toggle hashtag panel
        if (hashtagPanel.classList.contains('show')) {
            hashtagPanel.classList.remove('show');
            hideOverlay();
        } else {
            hashtagPanel.classList.add('show');
            showOverlay();
        }
    });
}


// ========== MOBILE - NOTIFICATION (from bottom nav) ==========
if (mobileNotifyIcon) {
    mobileNotifyIcon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Đóng các panel khác
        loginModal.classList.remove('show');
        hashtagPanel.classList.remove('show');
        
        // Toggle notification panel
        if (notifyPanel.classList.contains('show')) {
            notifyPanel.classList.remove('show');
            hideOverlay();
        } else {
            notifyPanel.classList.add('show');
            showOverlay();
        }
    });
}


// ========== MOBILE - USER LOGIN (from bottom nav) ==========
if (mobileUserIcon) {
    mobileUserIcon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Đóng các panel khác
        notifyPanel.classList.remove('show');
        hashtagPanel.classList.remove('show');
        
        // Toggle login modal
        if (loginModal.classList.contains('show')) {
            loginModal.classList.remove('show');
            hideOverlay();
        } else {
            loginModal.classList.add('show');
            showOverlay();
        }
    });
}


// ========== CLOSE BUTTONS ==========
if (closeNotify) {
    closeNotify.addEventListener('click', () => {
        notifyPanel.classList.remove('show');
        hideOverlay();
    });
}

if (closeLogin) {
    closeLogin.addEventListener('click', () => {
        loginModal.classList.remove('show');
        hideOverlay();
    });
}

if (closeHashtag) {
    closeHashtag.addEventListener('click', () => {
        hashtagPanel.classList.remove('show');
        hideOverlay();
    });
}


// ========== OVERLAY CLICK - CLOSE ALL ==========
overlay.addEventListener('click', () => {
    closeAllPanels();
});


// ========== PREVENT PANEL CLOSE WHEN CLICKING INSIDE ==========
if (notifyPanel) {
    notifyPanel.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

if (hashtagPanel) {
    hashtagPanel.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}


// ========== KEYBOARD ESC TO CLOSE ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllPanels();
    }
});


// ========== ACTIVE STATE FOR MOBILE NAV ==========
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Không prevent default cho notification và user icons
        if (this.id !== 'mobileNotifyIcon' && this.id !== 'mobileUserIcon') {
            // Remove active từ tất cả
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            // Thêm active vào link được click
            this.classList.add('active');
        }
    });
});


// ========== PREVENT BODY SCROLL WHEN PANEL OPEN ==========
function updateBodyScroll() {
    if (notifyPanel.classList.contains('show') || 
        loginModal.classList.contains('show') || 
        hashtagPanel.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Theo dõi thay đổi class
const observer = new MutationObserver(updateBodyScroll);
observer.observe(notifyPanel, { attributes: true, attributeFilter: ['class'] });
observer.observe(loginModal, { attributes: true, attributeFilter: ['class'] });
observer.observe(hashtagPanel, { attributes: true, attributeFilter: ['class'] });


console.log('News1s JavaScript loaded successfully! ✅');