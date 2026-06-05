// Configuration
const CONFIG = {
    name: "Plxgx",
    uid: "1",
    avatar: "https://cdn.discordapp.com/avatars/1298026435188883509/9211697ff29576fda4f123b1a2f68ff0.png",
    status: "Twitch/Youtube",
    welcomeText: "[ CLICK TO OPEN ]",
    pageTitle: "Plxgx",
    socials: [
        { platform: "Website", url: "https://plxgx.org" },
        { platform: "Discord", url: "https://discord.gg/HUxvy4Dge" },
        { platform: "Instagram", url: "https://instagram.com/dontfwgavin" },
        { platform: "Roblox", url: "https://roblox.com/users/6210090215" },
        { platform: "Steam", url: "https://steamcommunity.com/id/plxgx" },
        { platform: "Twitch", url: "https://twitch.tv/onlyplxgx" },
        { platform: "YouTube", url: "https://youtube.com/@plxgx" }
    ]
};

// Return SVG markup for a given platform
function getPlatformIcon(platform) {
    switch ((platform || '').toLowerCase()) {
        case 'website':
            return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg>';
        case 'discord':
            return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.036c-.21.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.036 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.08.08 0 00.087-.027c.461-.637.872-1.306 1.225-2.01a.077.077 0 00-.042-.107 13.107 13.107 0 01-1.872-.892.077.077 0 00-.008-.128 10.713 10.713 0 00.372-.294.075.075 0 00.076-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 00.075.009c.12.098.246.198.373.295a.077.077 0 00-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.108c.36.704.77 1.372 1.225 2.01a.077.077 0 00.087.027 19.86 19.86 0 006.002-3.03.077.077 0 00.032-.054c.5-4.65-.838-8.686-3.554-12.254a.06.06 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.19-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.965-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.19-.964 2.156-2.157 2.156z"/></svg>';
        case 'instagram':
            return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>';
        case 'roblox':
            // generic cube icon (non-branded)
            return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.18L5 7.5v8.96l7 3.86 7-3.86V7.5l-7-3.32zM12 12.87L7.5 10.5 12 8.13 16.5 10.5 12 12.87z"/></svg>';
        case 'steam':
            // generic gamepad icon (non-branded)
            return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 9a3 3 0 00-3 3v1a4 4 0 004 4h1a2 2 0 002-2v-1h4v1a2 2 0 002 2h1a4 4 0 004-4v-1a3 3 0 00-3-3H6zm3 3v1H7v-1h2zm6 0v1h-2v-1h2z"/></svg>';
        case 'twitch':
            return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.429v3.428h-1.429V4.714zM15.571 4.714h1.429v3.428h-1.429V4.714z"/><path d="M3.857 0L1.143 4.286v15.428h4.571v2.857h2.857l2.857-2.857h4.571l6.428-6.428V0H3.857zm13.428 11.143l-3.428 3.428h-4.571l-2.857 2.857v-2.857H6.857V1.429h10.428v9.714z"/></svg>';
        case 'youtube':
            return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
        default:
            return '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>';
    }
}

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    initializePage();
});

function initializePage() {
    // Set Title
    document.getElementById("pageTitle").textContent = CONFIG.pageTitle;


    // Profile Info
    document.getElementById("profileName").textContent = CONFIG.name;
    document.getElementById("avatar").src = CONFIG.avatar;
    document.getElementById("statusText").textContent = CONFIG.status;

    // Social Buttons - inject platform icons and add click handlers
    const socialBtns = document.querySelectorAll(".social-btn");
    socialBtns.forEach((btn) => {
        const platform = btn.dataset.platform;
        // inject SVG icon
        btn.innerHTML = getPlatformIcon(platform);
        btn.title = platform;
        btn.setAttribute('aria-label', platform);

        // find matching URL in CONFIG by platform name
        const social = CONFIG.socials.find(s => s.platform.toLowerCase() === (platform || '').toLowerCase());
        if (social && social.url) {
            btn.addEventListener("click", () => {
                window.open(social.url, "_blank");
            });
        }
    });
}

// (mute controls removed)

// Add any background music or animation effects
document.addEventListener("mousemove", (e) => {
    // Optional: Add parallax or other mouse tracking effects
});

// Smooth page transitions
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.opacity = "1";
        document.body.style.transition = "opacity 0.5s ease";
    }, 100);
});

// Splash overlay handling
function setupSplash() {
    const overlay = document.getElementById('splashOverlay');
    if (!overlay) return;

    const enter = () => {
        overlay.classList.add('hidden');
        setTimeout(() => {
            if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 600);
        const firstBtn = document.querySelector('.social-btn');
        if (firstBtn) firstBtn.focus();
    };

    overlay.addEventListener('click', enter);
    overlay.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') enter();
    });
    overlay.tabIndex = 0;
}

// initialize splash on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    setupSplash();
});
