//your JS code here. If required.
const btn = document.querySelector('input[type="button"]');
const select = document.getElementById("colorSelect");

btn.addEventListener("click", () => {
  // Find selected option
  const selectedIndex = select.selectedIndex;

  // If a valid option is selected, remove it
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
});

