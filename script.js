const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const apiURL = "https://api.lyrics.ovh";

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = search.value.trim();

  if (!searchValue) {
    alert("Please enter an artist or song title.");
  } else {
    searchSong(searchValue);
  }
});

// Show loading message
function showLoading() {
  result.innerHTML = `<p class="loading">Loading...</p>`;
}

// Search song suggestions
async function searchSong(searchValue) {
  showLoading();
  try {
    const response = await fetch(`${apiURL}/suggest/${searchValue}`);
    const data = await response.json();
    showData(data);
  } catch (error) {
    result.innerHTML = `<p class="error">Failed to fetch songs. Please try again.</p>`;
  }
}

// Render song results
function showData(data) {
  if (!data.data.length) {
    result.innerHTML = `<p class="error">No results found.</p>`;
    return;
  }

  result.innerHTML = `
    <ul class="song-list">
      ${data.data
        .map(
          (song) => `
          <li>
            <div>
              <img src="${song.artist.picture}" alt="${song.artist.name}" />
              <strong>${song.artist.name}</strong>
            </div>
            <span data-artist="${song.artist.name}" data-songtitle="${song.title}">Get lyrics</span>
          </li>
        `
        )
        .join("")}
    </ul>
  `;
}

// Handle clicks on "Get lyrics"
result.addEventListener("click", (e) => {
  const el = e.target;
  if (el.tagName === "SPAN") {
    const artist = el.getAttribute("data-artist");
    const songTitle = el.getAttribute("data-songtitle");
    getLyrics(artist, songTitle);
  }
});

// Fetch and display lyrics
async function getLyrics(artist, songTitle) {
  showLoading();
  try {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();

    if (!data.lyrics) {
      result.innerHTML = `<p class="error">Sorry, lyrics not found for "${songTitle}".</p>`;
      return;
    }

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");
    result.innerHTML = `
      <div class="full-lyrics">
        <h2>${artist} - ${songTitle}</h2>
        <p>${lyrics}</p>
      </div>
    `;
  } catch (error) {
    result.innerHTML = `<p class="error">Error fetching lyrics. Please try again.</p>`;
  }
}
