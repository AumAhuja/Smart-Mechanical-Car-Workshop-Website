const buttons = document.querySelectorAll(".mech-btn");
const cards = document.querySelectorAll(".card-container");

buttons.forEach(button => {
    button.addEventListener("click", function() {

        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        cards.forEach(card => {
            if (filter === "all") {
                card.style.display = "inline-block";
            } else {
                if (card.getAttribute("data-category") === filter) {
                    card.style.display = "inline-block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    });
});