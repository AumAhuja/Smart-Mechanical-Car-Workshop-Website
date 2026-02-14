// HOME    

function goToServices() {
    window.location.href = "show_services.html";
}

function goToBook() {
    window.location.href = "book_services.html";
}

// SHOW SERVICES

const services = [
    { 
        name: "Engine Repair", 
        description: "Complete engine diagnostics and repair.", 
        price: 5000,
        image: "show_services_1.png"
    },
    { 
        name: "Brake Service", 
        description: "Brake inspection and pad replacement.", 
        price: 2000,
        image: "show_services_2.png"
    },
    { 
        name: "Oil Change", 
        description: "Premium oil and filter replacement.", 
        price: 1200,
        image: "show_services_3.png"
    },
    { 
        name: "Wheel Alignment", 
        description: "Precision wheel alignment service.", 
        price: 1500,
        image: "show_services_4.png"
    },
    { 
        name: "AC Repair", 
        description: "AC gas refill and cooling repair.", 
        price: 2500,
        image: "show_services_5.png"
    },
    { 
        name: "Battery Replacement", 
        description: "High quality battery replacement.", 
        price: 3500,
        image: "show_services_6.png"
    }
];

const container = document.getElementById("services-container");

let stored = localStorage.getItem("selectedServices");
let selectedServices = stored ? JSON.parse(stored) : [];

services.forEach(service => {

    const card = document.createElement("div");
    card.classList.add("service-card");

    const isChecked = selectedServices.some(
        s => s.name === service.name
    );

    card.innerHTML = `
        <img src="${service.image}" alt="${service.name}">
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <p class="price">₹${service.price}</p>
        <label>
            <input type="checkbox" value="${service.name}" ${isChecked ? "checked" : ""}>
            Select Service
        </label>
    `;

    container.appendChild(card);
});

updateTotal();

container.addEventListener("change", function(e) {

    if (e.target.type === "checkbox") {

        const serviceName = e.target.value;
        const serviceObj = services.find(
            s => s.name === serviceName
        );

        if (e.target.checked) {
            selectedServices.push(serviceObj);
        } else {
            selectedServices = selectedServices.filter(
                s => s.name !== serviceName
            );
        }

        localStorage.setItem(
            "selectedServices",
            JSON.stringify(selectedServices)
        );

        updateTotal();
    }
});

function updateTotal() {

    let total = 0;

    selectedServices.forEach(service => {
        total += service.price;
    });

    document.getElementById("total-cost").textContent =
        "Total Estimated Cost: ₹" + total;
}
