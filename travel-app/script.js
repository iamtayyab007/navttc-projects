function searchTrip() {
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;

  if (!destination || !date) {
    alert("Please enter a destination and date.");
    return;
  }

  alert(`Searching trips to ${destination} on ${date}!`);
}
document.addEventListener("DOMContentLoaded", () => {
  const destinationsContainer = document.getElementById("destinations"); // <-- correct container
  destinations.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    destinationsContainer.appendChild(card); // <-- append to container
  });
});
