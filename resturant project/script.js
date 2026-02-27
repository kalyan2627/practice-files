// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('active');
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