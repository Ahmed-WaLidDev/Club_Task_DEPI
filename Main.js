function askFavoriteClub() {
  let favoriteClub = prompt("What is your favorite club?");

  if (favoriteClub === null) {
    alert("You didn't select any club.");
  } else if (favoriteClub.trim() === "") {
    alert("Invalid club.");
  } else {
    alert("Your favorite club is " + favoriteClub.trim() + ".");
  }
}

const clubButton = document.getElementById("clubButton");
clubButton.addEventListener("click", askFavoriteClub);
