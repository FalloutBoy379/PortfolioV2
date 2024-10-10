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

// Smooth scrolling for menu links
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 50,  // Adjust offset for the fixed navbar height
      behavior: 'smooth'  // Enable smooth scroll
    });
  });
});


