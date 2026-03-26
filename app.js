/* =============================================
   PORTFOLIO CORE LOGIC - MULTI-PAGE VERSION
   ============================================= */

   document.addEventListener("DOMContentLoaded", () => {
    // Initialize common UI elements
    initNav();
    initCustomCursor();
    
    // Page-specific initializations with element checks
    initStatsCounters();
    initSkills();
    initProjects();
    initContactForm();
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  /* NAVIGATION SCROLL EFFECT */
  function initNav() {
    const nav = document.getElementById("nav");
    if (!nav) return;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }
  
  /* SKILLS INJECTION */
  function initSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid || typeof SKILLS_DATA === "undefined") return;
  
    grid.innerHTML = "";
    SKILLS_DATA.forEach(skill => {
      const item = document.createElement("div");
      item.className = "skill-item";
      item.innerHTML = `
        <span class="skill-emoji">${skill.emoji}</span>
        <span class="skill-name">${skill.name}</span>
      `;
      grid.appendChild(item);
    });
  }
  
  /* PROJECTS INJECTION */
  function initProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid || typeof PROJECTS_DATA === "undefined") return;
  
    grid.innerHTML = "";
    PROJECTS_DATA.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      
      const stackHTML = project.stack
        .map(tech => `<span class="stack-pill">${tech}</span>`)
        .join("");
  
      card.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
        <div class="project-stack">${stackHTML}</div>
        <div class="project-actions" style="margin-top: auto; display: flex; gap: 1rem; padding-top: 1.5rem;">
          <a href="${project.github}" target="_blank" class="btn-main" style="padding: 0.6rem 1.2rem; font-size: 0.8rem;">GitHub</a>
          ${project.live ? `<a href="${project.live}" target="_blank" class="btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.8rem;">Live Demo</a>` : ''}
        </div>
      `;
      grid.appendChild(card);
    });
  }
  
  /* STATS COUNTER */
  function initStatsCounters() {
    const counters = document.querySelectorAll(".hs-num");
    if (counters.length === 0) return;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute("data-count");
          let count = 0;
          const increment = target / 30;
  
          const updateCount = () => {
            if (count < target) {
              count += increment;
              entry.target.innerText = Math.ceil(count);
              setTimeout(updateCount, 40);
            } else {
              entry.target.innerText = target;
            }
          };
          updateCount();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1 });
  
    counters.forEach(c => observer.observe(c));
  }
  
  /* CUSTOM CURSOR LOGIC */
  function initCustomCursor() {
    const cursor = document.getElementById("cursor");
    const trail = document.getElementById("cursor-trail");
    if (!cursor || !trail || window.innerWidth < 768) return;
  
    window.addEventListener("mousemove", (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      setTimeout(() => {
        trail.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }, 60);
    });
  }
  
  /* CONTACT FORM HANDLER */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent (Demo only).");
      form.reset();
    });
  }