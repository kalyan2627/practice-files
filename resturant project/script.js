// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
         // Remove active class from all nav links
         document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
         });
         // Add active class to clicked link
         this.classList.add('active');

         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
      navLinks.classList.remove('active');
   });
});

// Update active nav item on scroll
function updateActiveNavItem() {
   const sections = document.querySelectorAll('section[id]');
   const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

   let current = '';
   const scrollPosition = window.scrollY + 100;

   sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
         current = section.getAttribute('id');
      }
   });

   navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
         link.classList.add('active');
      }
   });
}

// Generate diagonal elements for entire home area
function createDiagonalGrid() {
   const grid = document.querySelector('.diagonal-grid');
   if (!grid) return;

   // Create 6 solid light grey diagonal blocks in bottom-left corner, moved down and spread out
   const blocks = [{
         width: 80,
         bottom: -400,
         left: -100,
         delay: 0,
         duration: 22
      },
      {
         width: 60,
         bottom: -300,
         left: 100,
         delay: 2,
         duration: 20
      },
      {
         width: 100,
         bottom: -370,
         left: 350,
         delay: 1,
         duration: 24
      },
      {
         width: 70,
         bottom: -230,
         left: 200,
         delay: 1.5,
         duration: 21
      },
      {
         width: 90,
         bottom: -170,
         left: 500,
         delay: 0.5,
         duration: 23
      },
      {
         width: 50,
         bottom: -270,
         left: 400,
         delay: 3,
         duration: 25
      }
   ];

   blocks.forEach(block => {
      const element = document.createElement('div');
      element.className = 'soft-block';
      element.style.width = `${block.width}px`;
      element.style.bottom = `${block.bottom}px`;
      element.style.left = `${block.left}px`;
      element.style.animationDelay = `${block.delay}s`;
      element.style.animationDuration = `${block.duration}s`;
      grid.appendChild(element);
   });
}

// Create static decoration blocks
function createStaticDecoration() {
   const decoration = document.querySelector('.static-decoration');
   if (!decoration) return;

   // 9 blocks for top-right corner decoration (6 outline, 3 filled) with sizes from 40px to 120px
   const staticBlocks = [{
         size: 85,
         top: '20px',
         right: '30px',
         outline: true
      },
      {
         size: 120,
         top: '80px',
         right: '120px',
         outline: false
      },
      {
         size: 100,
         top: '140px',
         right: '50px',
         outline: true
      },
      {
         size: 40,
         top: '50px',
         right: '180px',
         outline: true
      },
      {
         size: 95,
         top: '200px',
         right: '150px',
         outline: false
      },
      {
         size: 60,
         top: '100px',
         right: '280px',
         outline: true
      },
      {
         size: 75,
         top: '180px',
         right: '220px',
         outline: true
      },
      {
         size: 50,
         top: '300px',
         right: '180px',
         outline: true
      },
      {
         size: 90,
         top: '60px',
         right: '320px',
         outline: false
      }
   ];

   staticBlocks.forEach(block => {
      const element = document.createElement('div');
      element.className = block.outline ? 'static-block-outline' : 'static-block';
      element.style.width = `${block.size}px`;
      element.style.height = `${block.size}px`;
      element.style.top = block.top;
      element.style.right = block.right;
      decoration.appendChild(element);
   });
}

// Create red decoration blocks for bottom right
function createBottomRightDecoration() {
   const decoration = document.querySelector('.bottom-right-decoration');
   if (!decoration) return;

   // 6 blocks for bottom-right corner (4 filled red + 2 outline)
   const redBlocks = [{
         size: 65,
         bottom: '20px',
         right: '40px',
         outline: false
      },
      {
         size: 45,
         bottom: '60px',
         right: '120px',
         outline: false
      },
      {
         size: 85,
         bottom: '120px',
         right: '60px',
         outline: false
      },
      {
         size: 35,
         bottom: '100px',
         right: '150px',
         outline: false
      },
      {
         size: 55,
         bottom: '40px',
         right: '200px',
         outline: true
      },
      {
         size: 70,
         bottom: '160px',
         right: '140px',
         outline: true
      }
   ];

   redBlocks.forEach(block => {
      const element = document.createElement('div');
      element.className = block.outline ? 'red-block-outline' : 'red-block';
      element.style.width = `${block.size}px`;
      element.style.height = `${block.size}px`;
      element.style.bottom = block.bottom;
      element.style.right = block.right;
      decoration.appendChild(element);
   });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
   const nav = document.querySelector('nav');
   if (window.scrollY > 100) {
      nav.style.background = 'rgba(255, 255, 255, 0.98)';
      nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
   } else {
      nav.style.background = 'rgba(255, 255, 255, 0.95)';
      nav.style.boxShadow = 'none';
   }

   // Update active nav item
   updateActiveNavItem();
});

// Initialize all elements when page loads
document.addEventListener('DOMContentLoaded', () => {
   // Set minimum date to today
   const dateInput = document.getElementById('date');
   if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
   }

   // Create all decorative elements
   createDiagonalGrid();
   createStaticDecoration();
   createBottomRightDecoration();

   // Set initial active nav item to Home
   const homeLink = document.querySelector('.nav-links a[href="#home"]');
   if (homeLink) {
      homeLink.classList.add('active');
   }
});

// ===============================
// INGREDIENTS DATA
// ===============================

const ingredients = {

   "hyderabadi-biryani": [
      "Basmati Rice",
      "Chicken",
      "Yogurt",
      "Fried Onions",
      "Mint Leaves",
      "Coriander Leaves",
      "Green Chillies",
      "Ginger Garlic Paste",
      "Biryani Masala",
      "Ghee",
      "Salt"
   ],

   "andhra-mutton-curry": [
      "Mutton",
      "Onions",
      "Tomatoes",
      "Green Chillies",
      "Garlic",
      "Red Chilli Powder",
      "Turmeric",
      "Coriander Powder",
      "Garam Masala",
      "Oil",
      "Salt"
   ],

   "andhra-veg-meals": [
      "Rice",
      "Sambar",
      "Rasam",
      "Dal",
      "Vegetable Curry",
      "Pickle",
      "Papad",
      "Curd",
      "Ghee"
   ],

   "andhra-fish-curry": [
      "Fish",
      "Onions",
      "Tomatoes",
      "Tamarind",
      "Garlic",
      "Red Chilli Powder",
      "Turmeric",
      "Curry Leaves",
      "Oil",
      "Salt"
   ],

   "paneer-butter-masala": [
      "Paneer",
      "Tomatoes",
      "Butter",
      "Cream",
      "Onions",
      "Garlic",
      "Garam Masala",
      "Kasuri Methi",
      "Salt"
   ],

   "andhra-nonveg-meals": [
      "Rice",
      "Chicken Curry",
      "Mutton Curry",
      "prawns Curry",
      "Fish Fry",
      "Papad",
      "Curd",
      "Ghee"
   ],

   "andhra-chicken-fry": [
      "Chicken",
      "Onions",
      "Green Chillies",
      "Garlic",
      "Red Chilli Powder",
      "Curry Leaves",
      "Oil",
      "Salt"
   ],

   "gongura-chicken": [
      "Chicken",
      "Gongura Leaves",
      "Onions",
      "Garlic",
      "Green Chillies",
      "Red Chilli Powder",
      "Oil",
      "Salt"
   ],

   "andhra-prawn-curry": [
      "Prawns",
      "Onions",
      "Tomatoes",
      "Tamarind",
      "Garlic",
      "Red Chilli Powder",
      "Turmeric",
      "Curry Leaves",
      "Oil",
      "Salt"
   ],

   "veg-biryani": [
      "Basmati Rice",
      "Carrots",
      "Beans",
      "Potatoes",
      "Peas",
      "Onions",
      "Mint Leaves",
      "Spices",
      "Salt"
   ],

   "andhra-egg-curry": [
      "Eggs",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Red Chilli Powder",
      "Turmeric",
      "Oil",
      "Salt"
   ],

   "gongura-mutton": [
      "Mutton",
      "Gongura Leaves",
      "Onions",
      "Garlic",
      "Red Chilli Powder",
      "Turmeric",
      "Oil",
      "Salt"
   ]

};


// ===============================
// SHOW INGREDIENTS MODAL
// ===============================

function showIngredients(dish) {

   const modal = document.getElementById("ingredientsModal");
   const title = document.getElementById("modalTitle");
   const list = document.getElementById("modalList");

   if (!ingredients[dish]) return;

   title.innerText = dish.replaceAll("-", " ").toUpperCase();

   list.innerHTML = "";

   ingredients[dish].forEach(item => {

      const li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);

   });

   modal.style.display = "block";

}


// ===============================
// CLOSE MODAL
// ===============================

function closeModal() {

   document.getElementById("ingredientsModal").style.display = "none";

}


// close when clicking outside modal
window.addEventListener("click", function(event) {

   const modal = document.getElementById("ingredientsModal");

   if (event.target === modal) {
      modal.style.display = "none";
   }

});