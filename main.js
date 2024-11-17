// JavaScript for Portfolio Interactivity

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Submission Validation with Success Message
  const contactForm = document.querySelector('.contact-form');
  const successMessage = document.createElement('div');
  successMessage.classList.add('success-message');
  document.body.appendChild(successMessage);
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Show success message
    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
    successMessage.style.display = 'block';
  
    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  
    // Reset the form
    this.reset();
  });
  
  // Scroll-to-Top Button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.textContent = '⬆';
  scrollToTopButton.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopButton);
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Animate Progress Bars on Scroll
  const skillBars = document.querySelectorAll('.progress-bar');
  const animateProgressBars = () => {
    skillBars.forEach(bar => {
      const barWidth = bar.getAttribute('data-skill');
      if (bar.getBoundingClientRect().top < window.innerHeight) {
        bar.style.width = barWidth;
      }
    });
  };
  
  window.addEventListener('scroll', animateProgressBars);
  
  // Initialize Animation on Load
  window.onload = () => {
    animateProgressBars();
  };
  
  