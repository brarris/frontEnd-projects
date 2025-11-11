let homeScore = 0;
let guestScore = 0;

const homeEl = document.getElementById("num-home");
const guestEl = document.getElementById("num-guest");

homeEl.textContent = homeScore;
guestEl.textContent = guestScore;

/**
 * --- Tambah poin ke tim tertentu (home/guest) ---
 * param {('home'|'guest')} team - tim yang akan bertambah skornya
 * param {number} points - jumlah poin yang akan di tambahkan (1,2,atau 3)
 */
const addPoints = (team, points) => {
  if (team === "home") {
    homeScore += points;
    homeEl.textContent = homeScore;
  } else if (team === "guest") {
    guestScore += points;
    guestEl.textContent = guestScore;
  }
};
