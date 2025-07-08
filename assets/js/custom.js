// Dark mode functionality
function initDarkMode() {
  const darkModeToggle = document.createElement('button');
  darkModeToggle.className = 'dark-mode-toggle';
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(darkModeToggle);

  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  updateDarkModeIcon(theme);

  darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeIcon(newTheme);
  });
}

function updateDarkModeIcon(theme) {
  const icon = document.querySelector('.dark-mode-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Search functionality
let searchIndex;

async function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (!searchInput || !searchResults) return;

  // Load the search index if not already loaded
  if (!searchIndex) {
    try {
      const response = await fetch('/search-index.json');
      const data = await response.json();
      searchIndex = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('categories');
        this.ref('id');

        data.forEach((item) => {
          this.add(item);
        });
      });
    } catch (error) {
      console.error('Error loading search index:', error);
      return;
    }
  }

  searchInput.addEventListener('input', debounce(function(e) {
    const query = e.target.value;
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    const results = searchIndex.search(query);
    displaySearchResults(results, searchResults);
  }, 300));
}

function displaySearchResults(results, container) {
  if (results.length === 0) {
    container.innerHTML = '<p>No results found</p>';
    return;
  }

  const html = results.map(result => `
    <div class="search-result">
      <h3><a href="${result.ref}">${result.title}</a></h3>
      <p>${result.preview}</p>
      ${result.categories ? `<div class="categories">${result.categories.join(', ')}</div>` : ''}
    </div>
  `).join('');

  container.innerHTML = html;
}

// Social sharing
function initSocialSharing() {
  const shareButtons = document.querySelectorAll('.share-button');
  shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      const platform = button.dataset.platform;

      let shareUrl;
      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          break;
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
      }

      window.open(shareUrl, '_blank', 'width=600,height=400');
    });
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initSearch();
  initSocialSharing();
});
