function describeDish(dish, rating, spicy) {
  let spicyMessage = (spicy.toLowerCase() === "yes") ? "🔥 Spicy!" : "😋 Not spicy.";

  document.getElementById("result").innerHTML = `
    <h2>Your Dish: ${dish}</h2>
    <p>Rating: ${rating}/10</p>
    <p>${spicyMessage}</p>
  `;
}

document.getElementById("submitBtn").addEventListener("click", function () {
  let dish = document.getElementById("dishInput").value;
  let rating = document.getElementById("ratingInput").value;
  let spicy = document.getElementById("spicyInput").value;

  describeDish(dish, rating, spicy);
});
