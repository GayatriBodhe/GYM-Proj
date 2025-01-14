document.addEventListener("DOMContentLoaded", () => {
    console.log("Gym Website Loaded!");
  
    const heroSection = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-image");
  
    // Trigger animations when hero section is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroContent.classList.add("slide-in-left");
            heroImage.classList.add("slide-in-right");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(heroSection);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior

      const target = document.querySelector(this.getAttribute('href')); // Get target section
      const headerOffset = 70; // Adjust for header height
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      // Smooth scroll to the target section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

