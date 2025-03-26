       // Theme Toggle Functionality
       const themeToggle = document.getElementById('theme-toggle');
       const body = document.body;

       // Check for saved theme preference or prefer-color-scheme
       const currentTheme = localStorage.getItem('theme');
       if (currentTheme) {
           body.setAttribute('data-theme', currentTheme);
           if (currentTheme === 'dark') {
               themeToggle.checked = true;
           }
       } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
           body.setAttribute('data-theme', 'dark');
           themeToggle.checked = true;
       }

       // Toggle theme when switch is clicked
       themeToggle.addEventListener('change', function () {
           if (this.checked) {
               body.setAttribute('data-theme', 'dark');
               localStorage.setItem('theme', 'dark');
           } else {
               body.setAttribute('data-theme', 'light');
               localStorage.setItem('theme', 'light');
           }
       });

       // Smooth scrolling for anchor links
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
           anchor.addEventListener('click', function (e) {
               e.preventDefault();
               document.querySelector(this.getAttribute('href')).scrollIntoView({
                   behavior: 'smooth'
               });
           });
       });

       const textArray = [
           " Daniel Zan Baltazar | Web Developer & Full-Stack Developer",
           " Always Learning, Always Building",
           " Writing Clean Code & Crafting Experiences",
           " Open to Collaboration | Let's Build Something Awesome"
       ];

       let index = 0;
       let charIndex = 0;
       let isDeleting = false;
       const speed = 100; // Typing speed
       const eraseSpeed = 50; // Erasing speed
       const delay = 1500; // Delay before erasing

       function typeEffect() {
           const typingElement = document.getElementById("typing");

           if (!isDeleting && charIndex <= textArray[index].length) {
               typingElement.innerHTML = textArray[index].substring(0, charIndex) + "<span class='cursor'>|</span>";
               charIndex++;
               setTimeout(typeEffect, speed);
           } else if (isDeleting && charIndex >= 0) {
               typingElement.innerHTML = textArray[index].substring(0, charIndex) + "<span class='cursor'>|</span>";
               charIndex--;
               setTimeout(typeEffect, eraseSpeed);
           } else {
               isDeleting = !isDeleting;
               if (!isDeleting) {
                   index = (index + 1) % textArray.length; // Loop back to first phrase
               }
               setTimeout(typeEffect, delay);
           }
       }

       document.addEventListener("DOMContentLoaded", () => {
           setTimeout(typeEffect, 100); // Start typing after page loads
       });

       // Navbar color change on scroll
       window.addEventListener('scroll', function () {
           const navbar = document.querySelector('.navbar');
           if (window.scrollY > 50) {
               navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
           } else {
               navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
           }
       });