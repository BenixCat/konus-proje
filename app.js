// Donation Tiers
document.querySelectorAll(".tier-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tier-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Impact Calculator
const impactRange = document.querySelector(".impact-range");
const resultNumbers = document.querySelectorAll(".result-number");

impactRange.addEventListener("input", (e) => {
  const value = e.target.value;
  const multiplier = value / 25;

  resultNumbers[0].textContent = Math.round(25 * multiplier);
  resultNumbers[1].textContent = Math.round(10 * multiplier);
  resultNumbers[2].textContent = Math.round(5 * multiplier);
});

// Scroll Animation
function revealOnScroll() {
  const elements = document.querySelectorAll(
    ".story-card, .action-card, .research-card"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("revealed");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Newsletter Form
document.querySelector(".newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const consent = document.querySelector("#newsletter-consent").checked;

  if (!email || !consent) {
    alert("Please fill in your email and confirm your consent.");
    return;
  }

  // Here you would typically send this to your backend
  alert("Thank you for subscribing!");
  e.target.reset();
});

// Sticky Navigation
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }

  lastScroll = currentScroll;
});

// Progress Ring Animation
function animateProgressRings() {
  document.querySelectorAll(".progress-ring").forEach((ring) => {
    const percentage = ring.querySelector(".progress-number").textContent;
    ring.style.background = `conic-gradient(
         var(--primary-color) ${percentage},
         #eee ${percentage} 100%
     )`;
  });
}

animateProgressRings();

// Dark Overlay Animation
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".freedom-overlay");
  const continueBtn = document.querySelector(".continue-btn");

  continueBtn.addEventListener("click", () => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 2000);
  });
});

// Initialize World Map
// Note: You'll need to include a mapping library like jVectorMap or Leaflet
// This is a placeholder for the map initialization
function initializeMap() {
  // Map initialization code here
}

// Animate story cards on scroll
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".animated-card").forEach((card) => {
  observer.observe(card);
});

const chainSvg = document.querySelector(".chain-svg");

chainSvg.addEventListener("animationend", (event) => {
  if (event.animationName === "breakChain") {
    chainSvg.style.display = "none"; // Alan kaplamaması için gizle
  }
});
