const expertiseArray = [
  "Robotics",
  "Embedded Systems",
  "Electronics",
  "Control Systems",
  "Automation",
];
let currentExpertise = 0;
let currentCharIndex = 0;
const typewriterTextElement = document.getElementById("typewriter-text");

function typeText() {
  if (currentCharIndex < expertiseArray[currentExpertise].length) {
      typewriterTextElement.textContent += expertiseArray[currentExpertise].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeText, 50);  // Delay for typing speed
  } else {
      setTimeout(deleteText, 700);  // Wait for 1 second before deleting
  }
}

function deleteText() {
  if (currentCharIndex > 0) {
      typewriterTextElement.textContent = expertiseArray[currentExpertise].substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(deleteText, 40);  // Delay for deleting speed
  } else {
      currentExpertise = (currentExpertise + 1) % expertiseArray.length;
      setTimeout(typeText, 350);  // Wait for 0.5 seconds before starting to type again
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, 500);  // Start typing after page loads
});

// Video auto-play/pause on scroll based on focus
const videos = document.querySelectorAll('video');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
          video.play();  // Play video when it comes into view
      } else {
          video.pause();  // Pause video when it goes out of view
      }
  });
});

// Observe each video
videos.forEach(video => {
  observer.observe(video);
});

// Smooth scrolling for menu links, but only for in-page anchors
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Check if the href starts with "#" indicating it's an in-page link
      if (href.startsWith("#")) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50,  // Adjust offset for the fixed navbar height
                  behavior: 'smooth'  // Enable smooth scroll
              });
          }
      }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Add click event listener for all filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
      
      // If "all" is selected, show all projects
      if (filterValue === 'all') {
        projectCards.forEach(card => {
          card.style.display = 'block';  // Show all projects
        });
      } else {
        // Otherwise, show/hide based on filter
        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category').split(' ');
          if (categories.includes(filterValue)) {
            card.style.display = 'block';  // Show matched projects
          } else {
            card.style.display = 'none';  // Hide unmatched projects
          }
        });
      }

      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll("#coursesAccordion .card");

  accordionItems.forEach((item, index) => {
    const chevron = item.querySelector(".chevron");
    const button = item.querySelector(".btn-link");
    const collapseElement = item.querySelector(".collapse");

    // On page load, check if the first section is expanded and rotate its chevron
    if (index === 0 && collapseElement.classList.contains("show")) {
      chevron.classList.add("rotate");
    }

    // Add click event to both the button and chevron
    [button, chevron].forEach((element) => {
      element.addEventListener("click", () => {
        const isExpanded = collapseElement.classList.contains("show");
        chevron.classList.toggle("rotate", !isExpanded);
      });
    });

    // Handle state when accordion toggles using Bootstrap events
    collapseElement.addEventListener("shown.bs.collapse", () => {
      chevron.classList.add("rotate");
    });

    collapseElement.addEventListener("hidden.bs.collapse", () => {
      chevron.classList.remove("rotate");
    });
  });
});

// Light mode toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  // Restore previous preference
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
  });
});



const themeToggleIcon = document.getElementById("themeToggleIcon");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let isDark = localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark);

function applyTheme(dark) {
  document.body.classList.toggle("light-mode", !dark);
  document.body.classList.toggle("dark-mode", dark);
  themeToggleIcon.textContent = dark ? "🌙" : "☀️";
  localStorage.setItem("theme", dark ? "dark" : "light");
}

themeToggleIcon.addEventListener("click", () => {
  isDark = !isDark;
  applyTheme(isDark);
});

applyTheme(isDark); // On page load
  


