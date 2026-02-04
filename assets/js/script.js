'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Open sidebar by default on mobile (screens smaller than 1250px)
if (window.innerWidth < 1250) {
  sidebar.classList.add("active");
}

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Only add event listeners if elements exist
if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Add event listener for form submission
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Send form data using EmailJS v4
  emailjs.sendForm("service_oq5gn2l", "template_1m98hdo", form)
    .then(function (response) {
      // If email is sent successfully, show a success message or perform any other action
      console.log("Email sent successfully", response);
      // reset only the message field
      form.message.value = "";

      // disable submit button
      formBtn.setAttribute("disabled", "");
      // show message on screen
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr.success("Message sent successfully");      // You can display a success message or redirect the user to a thank you page here
    }, function (error) {
      // If there's an error sending the email, show an error message or perform any other action
      console.error("Error sending email", error);
      // You can display an error message or provide some feedback to the user here
    });
});





// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

    // Remove active class from all navigation links
    for (let k = 0; k < navigationLinks.length; k++) {
      if (k !== i) {
        navigationLinks[k].classList.remove("active");
      }
    }

  });
}



// Profile image modal functionality
const profileAvatar = document.querySelector("#profile-avatar");
const profileModalContainer = document.querySelector("[data-profile-modal]");
const profileOverlay = document.querySelector("[data-profile-overlay]");
const profileCloseBtn = document.querySelector("[data-profile-close-btn]");

// Function to toggle profile modal
const toggleProfileModal = function () {
  profileModalContainer.classList.toggle("active");
  profileOverlay.classList.toggle("active");
}

// Open modal when clicking on profile image
if (profileAvatar) {
  profileAvatar.addEventListener("click", toggleProfileModal);
}

// Close modal when clicking close button
if (profileCloseBtn) {
  profileCloseBtn.addEventListener("click", toggleProfileModal);
}

// Close modal when clicking on overlay
if (profileOverlay) {
  profileOverlay.addEventListener("click", toggleProfileModal);
}
