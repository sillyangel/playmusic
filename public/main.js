// Console Log Ascil Art
console.log(` 
     ___ ___ _                 _                _   _ ___     
 ___|  _|  _| |_ ___ ___ ___ _| |   ___ ___ ___| |_|_|  _|_ _ 
| . |  _|  _| . |  _| .'|   | . |  |_ -| . | . |  _| |  _| | |
|___|_| |_| |___|_| |__,|_|_|___|  |___|  _|___|_| |_|_| |_  |
                                       |_|               |___|
v2.0.6                                                        by angel
`);
var audio = document.getElementById("myAudio");
var playButton = document.querySelectorAll("#playbuttonthung");
var volumeControl = document.getElementById("volume");
var progressBar = document.querySelectorAll("progress");
var currentTrackIndex = 0;
var currentAlbum = "place/holder";
var currentAlbumIndex = albums.length - 1;
var audiotimern;
var repeatButtonClickCount = 0;
let selectedDatabase;
let DatabaseDomain;
let selectedDatabaseimage;
let DatabaseimageDomain;
let playbackMode = "none";
let savedaudio;
let backgroundcs;
let backgroundColorr;

if (localStorage.getItem("Volume") !== null) {volumeControl.value = localStorage.getItem("Volume");audio.volume = localStorage.getItem("Volume");}else{audio.volume = 0.5;}
if (localStorage.getItem("Albumindex") !== null) {currentAlbumIndex = localStorage.getItem("Albumindex");}
if (localStorage.getItem("Trackindex") !== null) {currentTrackIndex = parseInt(localStorage.getItem("Trackindex"), 10);}
if (localStorage.getItem("CurrentAlbum") !== null) {currentAlbum = localStorage.getItem("CurrentAlbum");}
if (localStorage.getItem("timerforaudio") !== null) {audiotimern = localStorage.getItem("timerforaudio");}
// if (localStorage.getItem("folart") !== null) {folart = localStorage.getItem("folart");}
//Databases
const databases = [
    { id: 0, url: "https://playmusichtml.web.app/" },
    { id: 1, url: "https://playmusicstorage.web.app/" },
    { id: 2, url: "https://playstorage2.web.app/" },
    { id: 3, url: "https://playstorage3.web.app/"}
];
const databasesimages = [
    { id: 0, url: "https://playmusichtml.web.app/" },
    { id: 1, url: "https://playmusicstorage.web.app/" },
    { id: 2, url: "https://playstorage2.web.app/" },
    { id: 3, url: "https://playstorage3.web.app/"}
];
function fetchDatabase() {
    selectedDatabase = null;
    DatabaseDomain = null;
    selectedDatabase = databases.find(db => db.id === albums[currentAlbumIndex].database);
    DatabaseDomain = selectedDatabase.url;
// You can add additional database fetching logic here if needed
}
function fetchDatabaseImages(item) {
    selectedDatabaseimage = null;
    DatabaseimageDomain = null;
    selectedDatabaseimage = databasesimages.find(db => db.id === albums[item].database);
    DatabaseimageDomain = selectedDatabaseimage.url;
}
fetchDatabase();
function loadTrack() {      
    fetchDatabase();  
    var trackPath = audioTracks[currentAlbum][currentTrackIndex];

    audio.src = DatabaseDomain + "songs/" + currentAlbum + "/" + trackPath;
    audio.load();
    updateTrackText();
    updateAlbumCover();
    
    mediathinggy();
    localStorage.setItem("Albumindex", currentAlbumIndex);
    localStorage.setItem("Trackindex", currentTrackIndex);
    localStorage.setItem("CurrentAlbum", currentAlbum);

    preloadNextTrack(); // Call the function to preload the next track
}

function preloadNextTrack() {
    let nextTrackIndex = currentTrackIndex + 1;
    let nextAlbum = currentAlbum;
    // Check if the next track index exceeds the current album's track count
    if (nextTrackIndex >= audioTracks[nextAlbum].length) {
        nextTrackIndex = 0; // Reset to the first track of the album
    }
    let nextTrackPath = audioTracks[nextAlbum][nextTrackIndex];
    let nextTrackSrc = DatabaseDomain + "songs/" + nextAlbum + "/" + nextTrackPath;
    let nextAudio = new Audio(nextTrackSrc);
    nextAudio.load(); // This starts loading the track without playing it
}
loadTrack();    
document.addEventListener('keydown', function(event) {
if (event.key === '\\') {
    doSomething();
}
});

function doSomething() {
    var iframethingy = document.getElementById("iframeas");
    if (iframethingy.style.display === "block") {
        iframethingy.style.display = "none";
    } else {
        iframethingy.style.display = "block";
    }
}

function playPause() {
    const isPaused = audio.paused;
    audio[isPaused ? 'play' : 'pause']();
    const iconClass = isPaused ? 'fas fa-pause' : 'fas fa-play';
    playButton.forEach(element => element.innerHTML = `<i class="${iconClass}"></i>`);
}

function setVolume() {
    // load save volume and set it to the audio if it exists
    audio.volume = volumeControl.value;
    localStorage.setItem("Volume", volumeControl.value);
}



var volumeControl = document.getElementById('volume');
volumeControl.addEventListener('input', setVolume);

function changeTrack(step) {
    console.log(`Saved track from previous: ${localStorage.getItem("Trackindex")}\n Ran ChangeTrack `);
    currentTrackIndex += step;
    console.log(`Before and After currentTrackIndex: ${currentTrackIndex - step} -> ${currentTrackIndex}`);
    let trackCount = audioTracks[currentAlbum].length;

    if (playbackMode === "repeat-song") {
        audio.currentTime = 0;
        audio.play();
        playbackMode = "none";
    updatePlaybackModeText();
        return;
    }

    // The rest of the previous logic remains unchanged
    if (playbackMode === "repeat") {
        currentTrackIndex = ((currentTrackIndex % trackCount) + trackCount) % trackCount;
    } else if (playbackMode === "loop" && currentTrackIndex < 0) {
        currentTrackIndex = trackCount - 1;        
    } else {
        currentTrackIndex = currentTrackIndex % trackCount;
    }
    updatePlaybackModeText();
    loadTrack();
    // wait for the track to load before playing
    audio.onloadeddata = function() {
        audio.play();
    };
}


function toggleRepeat() {
    repeatButtonClickCount += 1;

    // After the second click, reset the counter to return to normal playback
    if (repeatButtonClickCount > 1) {
        repeatButtonClickCount = 0;
        playbackMode = "none";
    } else if (repeatButtonClickCount === 1) {
        // On the first click, enable repeat
        playbackMode = "repeat";
    }

    updatePlaybackModeText();
}
function updatePlaybackModeText() {
    var buttonrepeat = document.getElementById("repeatbutton");
    if (playbackMode === "none") {
        buttonrepeat.innerHTML = '<i class="fa-solid fa-repeat" style="color: #ffffff;"></i>';
    } else if (playbackMode === "repeat") {
        buttonrepeat.innerHTML = '<i class="fa-solid fa-redo" style="color: #ffffff;"></i>';
    }
}
// if spacebar is clicked pause without keycode since keycode is deprecated
document.addEventListener('keydown', function(event) {
    const target = event.target;
    const nodeName = target.nodeName.toLowerCase();
    
    if (nodeName === 'input' || nodeName === 'textarea') {
        return; // Skip the keyboard shortcuts if the target is an input or textarea
    }
    
    if (event.code === 'Space') {
        event.preventDefault();
        playPause();
    } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        skipTrack();  
    } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        previousTrack();
    } else if (event.code === 'ArrowUp') {
        event.preventDefault();
        volumeControl = document.getElementById("volume");
        volumeControl.value = parseFloat(volumeControl.value) + 0.03;
        audio.volume = volumeControl.value;
        setVolume();
    } else if (event.code === 'ArrowDown') {
        event.preventDefault();
        volumeControl = document.getElementById("volume");
        volumeControl.value = parseFloat(volumeControl.value) - 0.01;
        audio.volume = volumeControl.value;
        setVolume();
    } else if (event.code === 'KeyF') {
        event.preventDefault();
        openfullplayer();
    } else if (event.code === 'KeyG') {
        event.preventDefault();
        hidefullplayer();
    } else if (event.code === 'KeyL') {
        event.preventDefault();
        toggleRepeat();
    }
    });
    



function skipTrack() {
    changeTrack(1);
}

function previousTrack() {
    changeTrack(-1);
}

function seek(event, progressBarId) {
    const percent = event.offsetX / document.getElementById(progressBarId).offsetWidth;
    audio.currentTime = isFinite(percent * audio.duration) ? percent * audio.duration : console.error("Invalid seek time");
}

function getContrastColor(rgbColor) {
    const [red, green, blue] = rgbColor.match(/\d+/g);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    return brightness >= 195 ? "#222222" : "white";
}

function updateThemeColor(color) {
    let themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMetaTag) {
        themeColorMetaTag = document.createElement('meta');
        themeColorMetaTag.name = "theme-color";
        document.head.appendChild(themeColorMetaTag);
    }
    themeColorMetaTag.content = color;
}

function updateAlbumCover() {
    const selectedAlbum = DatabaseDomain + "songs/" + currentAlbum + "/" +albums[currentAlbumIndex].image;
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = selectedAlbum,
    document.querySelectorAll('[id="albumCover"]').forEach(element => element.src = selectedAlbum);

    image.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);

        const [red, green, blue] = context.getImageData(0, 0, canvas.width, canvas.height).data;
        const audioControls = document.querySelector(".audio-controls-full");
        const audioControlsMini = document.querySelector(".audio-controls");
        const rgbColor = `rgb(${red},${green},${blue})`;
        // border color and background color is darker than the background color
        const backgroundColor = `rgb(${red - 25},${green - 25},${blue - 25})`
        const borderColor = `rgb(${red + 7},${green + 7},${blue + 7})`;
        const textContrastColor = getContrastColor(rgbColor);
        const sidebarmen = document.getElementsByClassName("sidebarmen")[0];

            updateThemeColor(backgroundColor)
            
            audioControls.style.backgroundColor = rgbColor;
            audioControls.style.color = textContrastColor;

            backgroundcs = rgbColor;
            backgroundColorr = backgroundColor;

            sidebarmen.style.borderColor = borderColor;
            sidebarmen.style.backgroundColor = backgroundColor;


            document.querySelectorAll('i').forEach(element => element.style.color = textContrastColor);
            document.body.style.backgroundColor = backgroundColor;
            document.body.style.color = textContrastColor;
        
            audioControlsMini.style.backgroundColor = rgbColor;
            audioControlsMini.style.color = textContrastColor;
            audioControlsMini.style.borderColor = borderColor;
    };
}
                


// Call the updateAlbumCover function when changing albums
function changeAlbum(step) {
    currentAlbumIndex += step;
    let albumCount = albums.length;
    currentAlbumIndex = ((currentAlbumIndex % albumCount) + albumCount) % albumCount;
    currentAlbum = albums[currentAlbumIndex].folder;
    currentTrackIndex = 0;
    if (audioTracks[currentAlbum]) {
        loadTrack();
        audio.play();
        updateAlbumCover();
    } else {
        console.error(`Album not found: ${currentAlbum}`);
    }
}

function nextAlbum() {
    changeAlbum(1);
}

function previousAlbum() {
    changeAlbum(-1);
}

audio.addEventListener("timeupdate", function() {
    const duration = audio.duration;
    if (isFinite(duration)) {
        const percentComplete = (audio.currentTime / duration) * 100;
        progressBar.forEach(element => element.value = percentComplete);
    }
    localStorage.setItem("timerforaudio", audio.currentTime);
});

audio.currentTime = localStorage.getItem("timerforaudio");

loadTrack();

audio.addEventListener("ended", skipTrack);

function updateTrackText() {
    var currentTrackElements = document.querySelectorAll(".currentTrack");
    var currentTrack2Elements = document.querySelectorAll(".currentTrack2");
    var currentartist = document.querySelectorAll(".currentartist");
    var currentartist2  = document.querySelectorAll('.currentartist2')
    
    var artist = albums[currentAlbumIndex].artist;
    var track = audioTracks[currentAlbum][currentTrackIndex];

    // Remove the .mp3 extension from the track name
    track = track.replace(".mp3", "");

    // Remove the numbering at the beginning of the track name, handling extra dash or period
    track = track.replace(/^\d{2,}\s*[-.]*\s*/, "");

    currentTrackElements.forEach(function(element) {
        element.textContent = track;
    });
    
    currentartist.forEach(function(element) {
        element.textContent = artist;
    });

    currentartist2.forEach(function(element){
        element.textContent = artist;
    });

    currentTrack2Elements.forEach(function(element) {
        element.textContent =  track;
    });
}
const elementsById = ['songselector', 'accountsettings', 'searching', 'lilbrary', 'settings', 'mlogin'].reduce((obj, id) => {
    obj[id] = document.getElementById(id);
    return obj;
}, {});

const elementsByClassName = ['audio-controls-full', 'audio-controls', 'sidebarmen'].reduce((obj, className) => {
    obj[className] = document.getElementsByClassName(className);
    return obj;
}, {});

function hidefullplayer() {
    updateThemeColor(backgroundColorr);
    elementsById['songselector'].style.display = "flex";
    elementsByClassName['audio-controls-full'][0].style.display = "none";
    elementsByClassName['audio-controls'][0].style.display = "flex";
    elementsByClassName['sidebarmen'][0].style.display = "block";
}

function openfullplayer() {
    updateThemeColor(backgroundcs);
    Object.values(elementsById).forEach(element => element.style.display = "none");
    elementsById['songselector'].style.display = "none";
    elementsByClassName['audio-controls-full'][0].style.display = "flex";
    elementsByClassName['audio-controls'][0].style.display = "none";
    elementsByClassName['sidebarmen'][0].style.display = "none";
}



// Call the function to update both elements
updateTrackText();
// Add these lines to update the song duration and current time
var songTimeElement = document.querySelectorAll("#songTime");
var songDurationElement = document.querySelectorAll("#songDuration");
var songTimeElement2 = document.getElementById("songTime2");
var songDurationElement2 = document.getElementById("songDuration2");
audio.addEventListener("timeupdate", function() {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    // Check if duration is a finite number before calculating percentComplete
    if (isFinite(duration)) {
        var percentComplete = (currentTime / duration) * 100;
        
        progressBar.forEach(function(element) {
            element.value = percentComplete;
        });
        // Update the song duration and current time
        var currentMinutes = Math.floor(currentTime / 60);
        var currentSeconds = Math.floor(currentTime % 60);
        var durationMinutes = Math.floor(duration / 60);
        var durationSeconds = Math.floor(duration % 60);
        // Display current time and duration in the format "M:SS"
        songTimeElement.forEach(function(element) {
            element.textContent = textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
        });
        songDurationElement.forEach(function(element) {
            element.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
        })
        songTimeElement2.textContent = textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;;
        songDurationElement2.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
    }
});


// load the songs
document.getElementById("volumeIcon").addEventListener("click", function() {
    var volumeSlider = document.getElementById("volume");
    if (volumeSlider.style.display === "none" || volumeSlider.style.display === "") {
        volumeSlider.style.display = "block";
    } else {
        volumeSlider.style.display = "none";
    }
});

document.getElementById('hideExplicitCheckbox').addEventListener('change', (event) => {
    localStorage.setItem('hideExplicit', event.target.checked ? 'true' : 'false');
    // Clear existing content and re-fetch the data
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
fetch('json/songs.json')
    .then((response) => response.json())
    .then((data) => {
        const songSelector = document.getElementById('farts');
        songSelector.innerHTML = ''; // Clear existing content

        data.albums.sort((a, b) => {
            const aIsFavorite = folart.includes(a.artist);
            const bIsFavorite = folart.includes(b.artist);
            return bIsFavorite - aIsFavorite; // True values (favorites) will come first
        });
        
        let currentArtist = ''; // Initialize the current artist
        let albumContainer;
        
        data.albums.forEach((album, albumIndex) => {
            if (album.artist !== currentArtist) {
                // Create a new <h1> for a different artist
                albumContainer = document.createElement('div');
                albumContainer.className = 'album-container';
                
                const artistHeader = document.createElement('h1');
                const icon = document.createElement('i');
                const buttonstar = document.createElement('button');
                icon.className = "fa-regular fa-star";
                icon.alt = "Star";
                buttonstar.title = "Favorite Artist"
                buttonstar.ariaLabel = "Favorite Artist";
                artistHeader.textContent = album.artist;
                buttonstar.style.backgroundColor = "none";
                icon.style.fontSize = "25px";
                icon.style.marginLeft = "15px";
                buttonstar.style.color = "inherit";

                
                songSelector.appendChild(artistHeader);
                artistHeader.appendChild(buttonstar)
                buttonstar.appendChild(icon);
                var clickcount = folart.includes(album.artist) ? 1 : 0;
                icon.className = clickcount === 1 ? "fa-solid fa-star" : "fa-regular fa-star";

                buttonstar.addEventListener("click", function() {
                    if (clickcount === 0) {
                        // Toggle star icon to solid
                        icon.className = "fa-solid fa-star";
                        // Add artist to favorites array and save to localStorage
                        folart.push(album.artist);
                        localStorage.setItem("folart", JSON.stringify(folart))
                    } else {
                        // Toggle star icon to regular
                        icon.className = "fa-regular fa-star";
                        // Remove artist from favorites array and update localStorage
                        const index = folart.indexOf(album.artist);
                        if (index > -1) {
                            folart.splice(index, 1);
                            localStorage.setItem("folart", JSON.stringify(folart));
                        }
                    }
                    // Toggle clickcount between 0 and 1
                    clickcount = (clickcount === 0) ? 1 : 0;
                });
                
                
                if (folart.includes(album.artist)) {
                    // Set star icon as filled for favorite artist
                    icon.className = "fa-solid fa-star";
                }
                // Update the current artist
                currentArtist = album.artist;
            }

            // Create a button for the album
            const albumButton = document.createElement('button');
            const imageSize = getSelectedSize(); // Call a function to get the selected size
            albumButton.innerHTML = `<img src="${album.cover}" alt="${album.album}" class="album-${imageSize}">`;
            albumButton.onclick = () => albumsec(albumIndex);
            // Before the forEach loop that processes albums
            
            songSelector.appendChild(albumContainer);
                    
            // Inside the forEach loop, change appending to albumContainer
            albumContainer.appendChild(albumButton);

    
            // if "explicit": "true" hide the album and if localstorage is set to hide explicit albums hide them but hide them is set to true
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
        // After all albums have been processed, check if all albums of an artist are explicit

    })
    .catch((error) => {
        console.log('Error loading JSON data:', error);
        console.log('Error loading JSON data:', error);
    });
}
fetchAndDisplayAlbums();
const radioOptions = document.getElementsByName('size');
radioOptions.forEach(option => {
    option.addEventListener('click', fetchAndDisplayAlbums);
});
// Function to get the selected size from the radio button
function getSelectedSize() {
const radioOptions = document.getElementsByName('size');
let selectedSize = localStorage.getItem('selectedSize'); // Check if a value is saved in localStorage

// If no value is saved in localStorage, set the default to "medium"
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

// Return the selected size
return selectedSize;
}

navigator.registerProtocolHandler('web+music', './?playalbum=%s');
// play the selected from the protocol handler
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const playParam = urlParams.get('play');
    if (playParam !== null) {
        const albumNumber = playParam.split('://')[1];
        if (albumNumber !== undefined) {
            albumsec(parseInt(albumNumber, 10));
        }
    }
};


function albumsec(albumnumber) {
    // Retrieve the album details from the albums array
    const albumDetails = albums[albumnumber];
    fetchDatabase();
    if (albumDetails) {
        // Update the currentAlbumIndex
        currentAlbumIndex = albumnumber;

        // Update the currentAlbum and currentTrackIndex
        currentAlbum = albumDetails.folder;
        currentTrackIndex = 0;

        // Load the track and play it
        loadTrack();
        audio.play();
        playButton.forEach(element => element.innerHTML = `<i class="fas fa-pause"></i>`);
        // Update the album cover image
        updateAlbumCover();
    } else {
        console.error(`Album with index ${albumnumber} not found in the albums array.`);
    }
}



function mediathinggy() {
    const imagealbum = DatabaseDomain + "songs/" + currentAlbum + "/" +albums[currentAlbumIndex].image;
    var track = audioTracks[currentAlbum][currentTrackIndex]
    track = track.replace(".mp3", "");
    track = track.replace(/^\d+\s*[-.]*\s*/, "");
    if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track,
            artist: albums[currentAlbumIndex].artist,
            album: albums[currentAlbumIndex].album,
            artwork: [{
                    src: imagealbum,
                    sizes: "96x96",
                    type: "image/webp",
                },
                {
                    src: imagealbum,
                    sizes: "128x128",
                    type: "image/webp",
                },
                {
                    src: imagealbum,
                    sizes: "192x192",
                    type: "image/webp",
                },
                {
                    src: imagealbum,
                    sizes: "256x256",
                    type: "image/webp",
                },
                {
                    src: imagealbum,
                    sizes: "384x384",
                    type: "image/webp",
                },
                {
                    src: imagealbum,
                    sizes: "512x512",
                    type: "image/webp",
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
    var ap = document.getElementById("albumpage");
    var pp = document.getElementById("playlistpage");

    home.style.display = "none";
    search.style.display = "none";
    libaraby.style.display = "none";
    login.style.display = "none";
    accountsettings.style.display = "none";
    settings.style.display = "none";
    ap.style.display = "none";
    pp.style.display = "none";

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
            search.style.display = "inline-block";
            break;
        case "set":
            settings.style.display = "block";
            break;
        case "ap":
            ap.style.display = "block";
            break;
        case "pp":
            pp.style.display = "block";
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
    fetchDatabaseImages(i)
if (albumName.includes(input) || artistName.includes(input)) {
    const div = document.createElement('div');
    const imagealbum = document.createElement('img');
    const listitem = document.createElement('li');
    const label = document.createElement('span');
    const label2 = document.createElement('span');
    const br = document.createElement('br');
    
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = DatabaseimageDomain + "songs/" + albums[i].folder + "/" + obj.image

    image.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);

        const [red, green, blue] = context.getImageData(0, 0, canvas.width, canvas.height).data;
        const rgbColor = `rgb(${red},${green},${blue})`;
        const textContrastColor = getContrastColor(rgbColor);

        label2.style.color = textContrastColor;
        label.style.color = textContrastColor;
        div.style.backgroundColor = rgbColor;
        
    };

    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.width = "200px";
    div.style.height = "270px"
    div.style.maxHeight = "300px"; // Set maximum height
    div.style.overflow = "hidden"; // or "hidden" if you don't want scrollbars
    div.style.borderRadius = "10px";
    div.style.display = "inline-block";
    
    imagealbum.style.borderRadius = "5px";
    imagealbum.style.width = "200px";
    imagealbum.style.height = "200px";
    
    label2.style.color = "grey";
    label.style.color = "white";
    
    label.style.fontSize = "1em";
    label.style.overflow = "hidden";
    label.style.textOverflow = "ellipsis";
    
    label.textContent = `${obj.album}`;
    label2.textContent = `${obj.artist}`;
    listitem.style.paddingTop = "10px"
    div.appendChild(imagealbum);
    div.appendChild(br); // Add a line break if needed
    div.appendChild(label);
    div.appendChild(label2);
    
    // Append the div to the document or another parent element
    

    div.addEventListener('click', function() {
        document.getElementById('searching').style.display = "none"
        albumpage(i)
    });
    imagealbum.src = DatabaseimageDomain + "songs/" + albums[i].folder + "/" + obj.image;
    listitem.appendChild(label);
    listitem.appendChild(br)
    listitem.appendChild(label2);
    div.appendChild(imagealbum);
    div.appendChild(listitem);
    div.appendChild(document.createElement('br'));
    listHolder.appendChild(div);
}
}
}
function albumpage(i) {
    fetchDatabaseImages(i)
    const albumpagd = document.getElementById("albumpage")
    const nameap = document.getElementById("h2ap")
    const porfileart = document.getElementById("imageap") 
    const artistalbul = document.getElementById("artistalbul");
    const tracklist = document.getElementById("trackalbumpg")
    tracklist.innerHTML = ""
    artistalbul.textContent = albums[i].artist;
    albumpagd.style.display = "block";
    nameap.textContent = `${albums[i].album}`;
    porfileart.src = DatabaseimageDomain + "songs/" + albums[i].folder + "/" + albums[i].image
    var tn = albums[i].folder;
    for (let ij = 0;ij < audioTracks[tn].length; ij++ ) {
        // alert(audioTracks[tn][ij])
            trackname = audioTracks[tn][ij].replace(".mp3", "");
            trackname = trackname.replace(/^\d+\s*[-.]*\s*/, "");
        const p = document.createElement("p");
        p.innerHTML = trackname;
        p.addEventListener("click", function() {
            currentTrackIndex = ij;
            currentAlbum = tn;
            currentAlbumIndex = i;
            loadTrack();
            audio.play();
        });
        tracklist.appendChild(p);
    }
}   
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

window.addEventListener("DOMContentLoaded", async event => {
    installApp()
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

window.addEventListener('appinstalled', (e) => {
    
});

async function installApp() {
    if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    }
}

// navigator.serviceWorker.addEventListener('message', (event) => {
// showSnackbar(event.data);
// });

function showSnackbar(text) {
    var snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = text;
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}