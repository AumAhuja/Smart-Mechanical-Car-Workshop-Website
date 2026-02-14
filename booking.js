let services = [];

function loadServices() {

    const container = document.getElementById("selectedServices");
    container.innerHTML = "";

    let stored = localStorage.getItem("selectedServices");

    if (!stored) {
        container.innerHTML = "<p>No services selected.</p>";
        return 0;
    }

    services = JSON.parse(stored);

    let total = 0;

    services.forEach(service => {

        const p = document.createElement("p");
        p.textContent = service.name + " - ₹" + service.price;

        container.appendChild(p);
        total += service.price;
    });

    return total;
}

window.onload = loadServices;

function confirmBooking() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const brand = document.getElementById("brand").value.trim();
    const model = document.getElementById("model").value.trim();
    const date = document.getElementById("date").value;
    const type = document.getElementById("serviceType").value;

    if (!name || !email || !phone || !brand || !model || !date) {
        alert("Please fill all fields");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Invalid phone number");
        return;
    }

    let totalCost = services.reduce((sum, s) => sum + s.price, 0);

    if (type === "express") {
        totalCost += 500;
    }

    const summary = document.getElementById("summary");

    summary.innerHTML = `
        <h3>Booking Summary</h3>
        Name: ${name} <br>
        Car: ${brand} ${model} <br>
        Date: ${date} <br>
        Service Type: ${type} <br>
        Selected Services: ${services.map(s => s.name).join(", ")} <br>
        Total Cost: ₹${totalCost}
    `;

    document.getElementById("successMessage").textContent =
        "Booking Confirmed Successfully!";
}
