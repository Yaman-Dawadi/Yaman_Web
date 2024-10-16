// Function to unlock the screen
function unlockScreen() {
    document.getElementById('lockScreen').style.display = 'none'; // Hide lock screen
    document.getElementById('content').classList.add('visible'); // Show main content with fade-in effect
  }
  
  // Toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
    } else {
      localStorage.setItem('theme', 'light-mode');
    }
  }
  
  // Initialize dark mode on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
      document.body.classList.add('dark-mode');
    }
  
    // Attach event listener to dark mode toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
  
    // Attach event listener to unlock button
    document.getElementById('unlockBtn').addEventListener('click', unlockScreen);
  });
  