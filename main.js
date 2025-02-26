document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".firstunit");

    sections.forEach((section, index) => {
        section.addEventListener("click", function () {
            // Remove active class and hide all size sections
            sections.forEach(s => {
                s.classList.remove("active");
                s.querySelector(".size-section").style.display = "none";
                s.querySelector('input[type="radio"]').checked = false;
            });

            // Add active class, show size-section, and check radio
            this.classList.add("active");
            this.querySelector(".size-section").style.display = "block";
            this.querySelector('input[type="radio"]').checked = true;
        });

        // Set the first section as active by default
        if (index === 0) {
            section.classList.add("active");
            section.querySelector(".size-section").style.display = "block";
            section.querySelector('input[type="radio"]').checked = true;
        } else {
            section.querySelector(".size-section").style.display = "none";
        }
    });
});
