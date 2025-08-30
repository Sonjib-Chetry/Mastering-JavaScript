// DOM Element References - Get all interactive elements from the HTML
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

// Music Data - Array containing all available songs with metadata
const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

// Audio Controller - HTML5 Audio element for playback functionality
const audio = new Audio();

// Application State - Maintains current player status and data
let userData = {
  songs: [...allSongs],  // Clone original array to preserve original order
  currentSong: null,     // Track currently playing song
  songCurrentTime: 0,    // Remember playback position when paused
};

// Core Playback Function - Handles song loading and playback logic
const playSong = (id) => {
  // Find the requested song in the current playlist
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;      // Set audio source
  audio.title = song.title;  // Set metadata for accessibility

  // Reset playback position if new song or first play
  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    // Resume from stored position if same song
    audio.currentTime = userData?.songCurrentTime;
  }

  // Update application state and UI
  userData.currentSong = song;
  playButton.classList.add("playing");  // Visual indicator for playing state
  highlightCurrentSong();    // Update playlist highlighting
  setPlayerDisplay();        // Show song info in player
  setPlayButtonAccessibleText();  // Improve accessibility
  audio.play();              // Start/continue playback
};

// Pause Functionality - Freezes playback and saves position
const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;  // Store current position
  playButton.classList.remove("playing");        // Update visual state
  audio.pause();                                 // Stop playback
};

// Song Navigation - Next Track Logic
const playNextSong = () => {
  if (userData?.currentSong === null) {
    // Start from beginning if no current song
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];
    playSong(nextSong.id);  // Play subsequent track
  }
};

// Song Navigation - Previous Track Logic
const playPreviousSong = () => {
  if (userData?.currentSong === null) return;  // Do nothing if no current song
  const currentSongIndex = getCurrentSongIndex();
  const previousSong = userData?.songs[currentSongIndex - 1];
  playSong(previousSong.id);  // Play previous track
};

// Playlist Management - Randomize Song Order
const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);  // Fisher-Yates shuffle
  userData.currentSong = null;     // Reset playback state
  userData.songCurrentTime = 0;
  renderSongs(userData?.songs);    // Update UI with new order
  pauseSong();                     // Stop current playback
  setPlayerDisplay();              // Clear song info display
  setPlayButtonAccessibleText();   // Update accessibility info
};

// Playlist Management - Remove Song
const deleteSong = (id) => {
  // Handle case where deleted song is currently playing
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();           // Stop playback
    setPlayerDisplay();    // Clear display
  }

  // Filter out deleted song and update UI
  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs);
  highlightCurrentSong();       // Update playlist highlighting
  setPlayButtonAccessibleText();// Update accessibility info
};

// UI Update - Display Current Song Info
const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  
  // Safely handle null/undefined current song
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

// UI Update - Highlight Active Song in Playlist
const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  // Clear previous highlights
  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  // Highlight current song if available
  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

// UI Generation - Create Playlist HTML
const renderSongs = (array) => {
  // Generate HTML string for each song
  const songsHTML = array
    .map((song) => {
      return `
      <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button onclick="deleteSong(${song.id})" 
                class="playlist-song-delete" 
                aria-label="Delete ${song.title}">
          <!-- Delete icon SVG -->
        </button>
      </li>`;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;

  // Handle empty playlist state
  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    // Configure reset button
    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    // Reset functionality
    resetButton.addEventListener("click", () => {
      userData.songs = [...allSongs];  // Restore original songs
      renderSongs(sortSongs());        // Re-render sorted list
      setPlayButtonAccessibleText();   // Update accessibility
      resetButton.remove();            // Remove reset button
    });
  }
};

// Accessibility Features - Dynamic Button Labels
const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];
  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};

// Helper Function - Get Current Song Index
const getCurrentSongIndex = () => 
  userData?.songs.indexOf(userData?.currentSong);

// Event Listeners - Player Controls
playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);  // Start first song
  } else {
    playSong(userData?.currentSong.id);  // Resume current
  }
});

pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);
shuffleButton.addEventListener("click", shuffle);

// Auto-advance on Song Completion
audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

  if (nextSongExists) {
    playNextSong();  // Auto-play next track
  } else {
    // Reset player after last song
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
});

// Song Sorting - Alphabetical by Title
const sortSongs = () => {
  userData?.songs.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
  return userData?.songs;
};

// Initial Setup
renderSongs(sortSongs());  // First render with sorted list
setPlayButtonAccessibleText();  // Initial accessibility setup