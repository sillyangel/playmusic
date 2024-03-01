
try {
  var albums = [
      { artist: "Tyler, The Creator", album: "Wolf", folder: "tylerthecreator/wolf", image: "https://cdn.sillyangel.me/songs/tylerthecreator/wolf/albumcover.png" }
  ];
  var audioTracks = {
      "tylerthecreator/wolf": [
          "WOLF.mp3",
          "Jamba.mp3",
          "Cowboy.mp3",
          "Awkward.mp3",
          "Domo23.mp3",
          "Answer.mp3",
          "Slater.mp3",
          "48.mp3",
          "Colossus.mp3",
          "10 PartyIsntOver_Campfire_Bimmer.mp3",
          "IFHY.mp3",
          "Pigs.mp3",
          "Parking Lot.mp3",
          "Rusty.mp3",
          "Trashwang.mp3",
          "Treehome95.mp3",
          "Tamale.mp3",
          "Lone.mp3"
      ]
  };
  var audio = document.getElementById("myAudio");
  var playButton = document.querySelectorAll("#playbuttonthung");
  var volumeControl = document.getElementById("volume");
  var progressBar = document.querySelectorAll("progress");
  var currentTrackIndex = 0;
  var currentAlbum = "tylerthecreator/wolf"
  var currentAlbumIndex = 0;
  var audiotimern;
  if (localStorage.getItem("Albumindex") !== null) {
      currentAlbumIndex = localStorage.getItem("Albumindex");
  }
  
  if (localStorage.getItem("Trackindex") !== null) {
      currentTrackIndex = localStorage.getItem("Trackindex");
  }
  
  if (localStorage.getItem("CurrentAlbum") !== null) {
      currentAlbum = localStorage.getItem("CurrentAlbum");
  }
  
  if (localStorage.getItem("timerforaudio") !== null) {
      audiotimern = localStorage.getItem("timerforaudio");
  }
  var currentTrackElements = document.querySelectorAll(".currentTrack");
  var currentTrack2Elements = document.querySelectorAll(".currentTrack2");
  function loadTrack() {
      var trackPath = audioTracks[currentAlbum][currentTrackIndex];
      audio.src = "https://cdn.sillyangel.me/" + "songs/" + currentAlbum + "/" + trackPath;
      audio.load();
      updateTrackText();
      updateAlbumCover();
      mediathinggy();
      localStorage.setItem("Albumindex", currentAlbumIndex);
      localStorage.setItem("Trackindex", currentTrackIndex);
      localStorage.setItem("CurrentAlbum", currentAlbum);
  }
  function w() {
      for (let album in audioTracks) {
          for (let i = 0; i < audioTracks[album].length; i++) {
              let trackPath = audioTracks[album][i];
              let url = "https://cdn.sillyangel.me/songs/" + album + "/" + trackPath;
              let request = new XMLHttpRequest();
              request.open('HEAD', url, false);
              request.send();
          }
      }
  }
  function playPause() {
      if (audio.paused) {
          audio.play();
          playButton.forEach(function(element) {
              element.innerHTML = '<i class="fas fa-pause"></i>';
          });
      } else {
          audio.pause();
          playButton.forEach(function(element) {
              element.innerHTML = '<i class="fas fa-play"></i>';
          });
      }
  }
  function setVolume() {
      localStorage.setItem("Volume", volumeControl.value);
      audio.volume = localStorage.getItem("Volume")
  }
  function skipTrack() {
      currentTrackIndex++;
      if (currentTrackIndex >= audioTracks[currentAlbum].length) {
          currentTrackIndex = 0; // Loop back to the first track
      }
      loadTrack();
      audio.play();
  }
  function previousTrack() {
      currentTrackIndex--;
      if (currentTrackIndex < 0) {
          currentTrackIndex = audioTracks[currentAlbum].length - 1; // Go to the last track
      }
      loadTrack();
      audio.play();
  }
  function seek(event) {
      const progressBar = document.getElementById('progress');
      const percent = event.offsetX / progressBar.offsetWidth;
      const seekTime = percent * audio.duration;
      if (isFinite(seekTime)) {
          audio.currentTime = seekTime;
      } else {
          console.error("Invalid seek time");
      }
  }
  function updateAlbumCover() {
      var albumCovers = document.querySelectorAll('[id="albumCover"]');
      var selectedAlbum = albums[currentAlbumIndex];
      albumCovers.forEach(function(element) {
          element.src = selectedAlbum.image;
      });
  }
  function nextAlbum() {
      currentAlbumIndex++;
      if (currentAlbumIndex >= albums.length) {
          currentAlbumIndex = 0; // Loop back to the first album
      }
      currentAlbum = albums[currentAlbumIndex].folder;
      currentTrackIndex = 0;
      if (audioTracks[currentAlbum]) {
          loadTrack();
          audio.play();
          updateAlbumCover();
      } else {
          console.error("Album not found: " + currentAlbum);
      }
  }
  function previousAlbum() {
      currentAlbumIndex--;
      if (currentAlbumIndex < 0) {
          currentAlbumIndex = albums.length - 1; // Go to the last album
      }
      currentAlbum = albums[currentAlbumIndex].folder;
      currentTrackIndex = 0;
      loadTrack();
      audio.play();
      updateAlbumCover();
  }
  audio.addEventListener("timeupdate", function() {
      var currentTime = audio.currentTime;
      var duration = audio.duration;
      if (isFinite(duration)) {
          var percentComplete = (currentTime / duration) * 100;
          progressBar.forEach(function(element) {
              element.value = percentComplete;
          });
          }
      localStorage.setItem("timerforaudio", audio.currentTime);
  });
  audio.currentTime = localStorage.getItem("timerforaudio");
  loadTrack();
  audio.addEventListener("ended", function() {
      skipTrack();
  });
  function updateTrackText() {
      var artist = albums[currentAlbumIndex].artist;
      var track = audioTracks[currentAlbum][currentTrackIndex];
      track = track.replace(".mp3", "");
      track = track.replace(/^\d+\s*[-.]*\s*/, "");
      currentTrackElements.forEach(function(element) {
          element.textContent = artist + " - " + track;
      });
      currentTrack2Elements.forEach(function(element) {
          element.textContent = artist + " - " + track;
      });
  }
  var songselectorjs = document.getElementById("songselector");
  var accountsettings = document.getElementById("accountsettings");
  var searchingthi = document.getElementById("searching");
  var lilbrarys = document.getElementById("lilbrary");
  var settongs = document.getElementById("settings");
  var mlogin = document.getElementById("mlogin");
  var playerfull = document.getElementsByClassName("audio-controls-full");
  var playermini = document.getElementsByClassName("audio-controls");
  var sidebarmen = document.getElementsByClassName("sidebarmen");
  function hidefullplayer() {
    songselectorjs.style.display = "flex";
    playerfull[0].style.display = "none";
    playermini[0].style.display = "flex";
    sidebarmen[0].style.display = "block";
  }
  function openfullplayer() {
  accountsettings.style.display = "none";
  searchingthi.style.display = "none";
  lilbrarys.style.display = "none";
  settongs.style.display = "none";
  mlogin.style.display = "none";
    songselectorjs.style.display = "none";
    playerfull[0].style.display = "flex";
    playermini[0].style.display = "none";
    sidebarmen[0].style.display = "none";
  }
  updateTrackText();
  var songTimeElement = document.querySelectorAll("#songTime");
  var songDurationElement = document.querySelectorAll("#songDuration");
  var songTimeElement2 = document.getElementById("songTime2");
  var songDurationElement2 = document.getElementById("songDuration2");
  audio.addEventListener("timeupdate", function() {
      var currentTime = audio.currentTime;
      var duration = audio.duration;
      if (isFinite(duration)) {
          var percentComplete = (currentTime / duration) * 100;
          progressBar.forEach(function(element) {
              element.value = percentComplete;
          });
          var currentMinutes = Math.floor(currentTime / 60);
          var currentSeconds = Math.floor(currentTime % 60);
          var durationMinutes = Math.floor(duration / 60);
          var durationSeconds = Math.floor(duration % 60);
          songTimeElement.forEach(function(element) {
              element.textContent = textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;;
          });
          songDurationElement.forEach(function(element) {
              element.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
          })
          songTimeElement2.textContent = textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;;
          songDurationElement2.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
      }
  });
  document.getElementById('hideExplicitCheckbox').addEventListener('change', (event) => {
      localStorage.setItem('hideExplicit', event.target.checked ? 'true' : 'false');
      const songSelector = document.getElementById('farts');
      songSelector.innerHTML = '';
      fetchAndDisplayAlbums();
    });
    document.getElementById('swithcbox').addEventListener('change', (event) => {
      if (event.target.checked == true) {
          document.getElementById('farts').style.display = "none";
          document.getElementById("single").style.display = "block";
      } else {
          document.getElementById('farts').style.display = "block";
          document.getElementById("single").style.display = "none";
      }
  });
  function fetchAndDisplayAlbums () {
  fetch('songs.json')
      .then((response) => response.json())
      .then((data) => {
          const songSelector = document.getElementById('farts');
          songSelector.innerHTML = ''; // Clear existing content
          let currentArtist = ''; // Initialize the current artist
          data.albums.forEach((album, albumIndex) => {
              if (album.artist !== currentArtist) {
                  const artistHeader = document.createElement('h1');
                  artistHeader.textContent = album.artist;
                  songSelector.appendChild(artistHeader);
                  currentArtist = album.artist;
              }
              const albumButton = document.createElement('button');
              const imageSize = getSelectedSize(); // Call a function to get the selected size
              albumButton.innerHTML = `<img src="${album.cover}" alt="${album.album}" class="album-${imageSize}">`;
              albumButton.onclick = () => albumsec(albumIndex);
              songSelector.appendChild(albumButton);
              if (album.explicit === "true" && localStorage.getItem("hideExplicit") === "true") {
                  albumButton.style.display = "none";
                  console.log('albumButton:', albumButton);
                  const artistHeaders = document.querySelectorAll('h1');
                  artistHeaders.forEach((artistHeader) => {
                      const artistAlbums = data.albums.filter(album => album.artist === artistHeader.textContent);
                        if (artistAlbums.every(album => album.explicit === "true")) {
                          artistHeader.style.display = "none";
                  }});
              }
          });
          const selectedSize = getSelectedSize();
          localStorage.setItem('selectedSize', selectedSize);
      })
      .catch((error) => {
          alert('Error loading JSON data:', error);
          console.log('Error loading JSON data:', error);
      });
  }
  fetchAndDisplayAlbums();
  const radioOptions = document.getElementsByName('size');
  radioOptions.forEach(option => {
      option.addEventListener('click', fetchAndDisplayAlbums);
  });
function getSelectedSize() {
  const radioOptions = document.getElementsByName('size');
  let selectedSize = localStorage.getItem('selectedSize'); // Check if a value is saved in localStorage
  if (!selectedSize) {
      selectedSize = 'medium';
  }
  for (let i = 0; i < radioOptions.length; i++) {
      if (radioOptions[i].value === selectedSize) {
          radioOptions[i].checked = true; // Check the appropriate radio button based on the saved value
      }
      radioOptions[i].addEventListener('click', function() {
          if (this.checked && this.value !== selectedSize) { // Check if the selected size is different
              selectedSize = this.value;
              localStorage.setItem('selectedSize', selectedSize); // Save the selected size to localStorage
              fetchAndDisplayAlbums(); // Fetch and display albums with the updated size
          }
      });
  }
  return selectedSize;
}
  document.getElementById("single").style.display = "none"; 
  function albumsec(albumnumber) {
      const albumDetails = albums[albumnumber];
      if (albumDetails) {
          currentAlbumIndex = albumnumber;
          currentAlbum = albumDetails.folder;
          currentTrackIndex = 0;
          loadTrack();
          audio.play();
          updateAlbumCover();
      } else {
          console.error(`Album with index ${albumnumber} not found in the albums array.`);
      }
  }
  function mediathinggy() {
      var track = audioTracks[currentAlbum][currentTrackIndex]
      track = track.replace(".mp3", "");
      track = track.replace(/^\d+\s*[-.]*\s*/, "");
      if ("mediaSession" in navigator) {
          navigator.mediaSession.metadata = new MediaMetadata({
              title: track,
              artist: albums[currentAlbumIndex].artist,
              album: albums[currentAlbumIndex].album,
              artwork: [{
                      src: albums[currentAlbumIndex].image,
                      sizes: "96x96",
                      type: "image/png",
                  },
                  {
                      src: albums[currentAlbumIndex].image,
                      sizes: "128x128",
                      type: "image/png",
                  },
                  {
                      src: albums[currentAlbumIndex].image,
                      sizes: "192x192",
                      type: "image/png",
                  },
                  {
                      src: albums[currentAlbumIndex].image,
                      sizes: "256x256",
                      type: "image/png",
                  },
                  {
                      src: albums[currentAlbumIndex].image,
                      sizes: "384x384",
                      type: "image/png",
                  },
                  {
                      src: albums[currentAlbumIndex].image,
                      sizes: "512x512",
                      type: "image/png",
                  },
              ],
          });
          navigator.mediaSession.setActionHandler("play", () => {
              playPause();
          });
          navigator.mediaSession.setActionHandler("pause", () => {
              playPause();
          });
          navigator.mediaSession.setActionHandler("seekto", (details) => {
              if (details && details.seekTime !== undefined) {
                  if (details.fastSeek && 'fastSeek' in audio) {
                      audio.fastSeek(details.seekTime);
                  } else {
                      audio.currentTime = details.seekTime;
                  }
              } else {
                  console.error("Invalid or missing details for seekto operation");
              }
          });
          navigator.mediaSession.setActionHandler("previoustrack", () => {
              previousTrack();
          });
          navigator.mediaSession.setActionHandler("nexttrack", () => {
              skipTrack();
          });
      }
  }
  function switchthingy(st) {
      var home = document.getElementById("songselector");
      var search = document.getElementById("searching");
      var libaraby = document.getElementById("lilbrary");
      var login = document.getElementById("mlogin");
      var accountsettings = document.getElementById("accountsettings");
      var settings = document.getElementById("settings");
      home.style.display = "none";
      search.style.display = "none";
      libaraby.style.display = "none";
      login.style.display = "none";
      accountsettings.style.display = "none";
      settings.style.display = "none";
      switch(st) {
          case "hom":
              home.style.display = "flex";
              break;
          case "lil":
              libaraby.style.display = "flex";
              break;
          case "user":
              login.style.display = "block";
              break;
          case "search":
              search.style.display = "block";
              break;
          case "set":
              settings.style.display = "block";
              break;
      }
  }
  function searchfunction() {
      const input = document.getElementById('myInput').value.toLowerCase();
      const listHolder = document.querySelector('#list-holder');
      listHolder.innerHTML = "";
      for (let i = 0; i < albums.length; i++) {
          const obj = albums[i];
          const albumName = obj.album.toLowerCase();
          const artistName = obj.artist.toLowerCase();
          if (albumName.includes(input) || artistName.includes(input)) {
              const listitem = document.createElement('li')
              const albumButton = document.createElement('button');
              albumButton.onclick = () => albumsec(i);
              albumButton.id = "buttonys"
              albumButton.textContent = `${obj.album} - ${obj.artist}`;
              listitem.appendChild(albumButton)
              listHolder.appendChild(listitem);
              listHolder.appendChild(document.createElement('br'));
          }
      }
  }
  navigator.serviceWorker.register("sw.js");
  } catch(error) {
      alert(error);
      alert(error.message);
      console.log(error);
      console.log(error.message);
  }