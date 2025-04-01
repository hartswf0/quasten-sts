// Search functionality
function searchAuthors() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const authorCards = document.querySelectorAll('.author-card');
    
    authorCards.forEach(card => {
        const authorName = card.querySelector('h3').textContent.toLowerCase();
        if (authorName.includes(filter)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Dark/Light mode toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    
    // Save preference to localStorage
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    // Add event listener to search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', searchAuthors);
    }
    
    // Add event listener to theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// Make entire author cards clickable
document.addEventListener('DOMContentLoaded', () => {
    const authorCards = document.querySelectorAll('.author-card');
    
    authorCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Only trigger if the click wasn't on a link or tag
            if (!e.target.closest('a') && !e.target.closest('.tag')) {
                const link = card.querySelector('a');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });
});
