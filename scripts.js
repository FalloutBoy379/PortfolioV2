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
  