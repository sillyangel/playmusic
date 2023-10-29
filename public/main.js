try {
var albums = [
    { artist: "Tyler, The Creator", album: "Wolf", folder: "tylerthecreator/wolf", image: "https://cdn.sillyangel.me/songs/tylerthecreator/wolf/albumcover.png" },
    { artist: "Tyler, The Creator", album: "Flower Boy", folder: "tylerthecreator/flowerboy", image: "https://cdn.sillyangel.me/songs/tylerthecreator/flowerboy/albumcover.png" },
    { artist: "Tyler, The Creator", album: "Igor", folder: "tylerthecreator/igor", image: "https://cdn.sillyangel.me/songs/tylerthecreator/igor/igorcover.png" },
    { artist: "Tyler, The Creator", album: "Cherry Bomb", folder: "tylerthecreator/cherrybomb", image: "https://cdn.sillyangel.me/songs/tylerthecreator/cherrybomb/cherrybomb.png" },
    { artist: "Tyler, The Creator", album: "Goblin", folder: "tylerthecreator/goblin", image: "https://cdn.sillyangel.me/songs/tylerthecreator/goblin/Goblincover.png" },
    { artist: "Tyler, The Creator", album: "Bastard", folder: "tylerthecreator/bas", image: "https://cdn.sillyangel.me/songs/tylerthecreator/bas/bas.png" },
    { artist: "Arctic Monkeys", album: "AM", folder: "arcticmonkeys/am", image: "https://cdn.sillyangel.me/songs/arcticmonkeys/am/albumcover.jpg"},
    { artist: "Arctic Monkeys", album: "Humbug", folder: "arcticmonkeys/humbug", image: "https://cdn.sillyangel.me/songs/arcticmonkeys/humbug/albumcover.jpg"},
    { artist: "Arctic Monkeys", album: "WPSIATWIN", folder: "arcticmonkeys/wpsiatwin", image: "https://cdn.sillyangel.me/songs/arcticmonkeys/wpsiatwin/albumcover.jpg"},
    { artist: "Arctic Monkeys", album: "Favourite Worst Nightmare", folder: "arcticmonkeys/fwn", image: "https://cdn.sillyangel.me/songs/arcticmonkeys/fwn/albumcover.jpg"},
    { artist: "Arctic Monkeys", album: "Suck It and See", folder: "arcticmonkeys/sias", image: "https://cdn.sillyangel.me/songs/arcticmonkeys/sias/albumcover.jpg"},
    { artist: "Arctic Monkeys", album: "Tranquility Base Hotel & Casino", folder: "arcticmonkeys/tbhc", image: "https://cdn.sillyangel.me/songs/arcticmonkeys/tbhc/albumcover.png"},
    { artist: "Arctic Monkeys", album: "The Car", folder: "arcticmonkeys/car", image: "https://cdn.sillyangel.me/songs/arcticmonkeys/car/albumcover.jpg"},
    { artist: "Wallows", album: "Nothing Happens", folder: "wallows/nonthinghappens", image: "https://cdn.sillyangel.me/songs/wallows/nonthinghappens/albumcover.png"},
    { artist: "Melanie Martinez", album: "Crybaby", folder: "melanie/crybaby", image: "https://cdn.sillyangel.me/songs/melanie/crybaby/albumcover.png"},
    { artist: "Melanie Martinez", album: "K-12", folder: "melanie/k12", image: "https://cdn.sillyangel.me/songs/melanie/k12/albumcover.png"},
    { artist: "Melanie Martinez", album: "Portals", folder: "melanie/portals", image: "https://cdn.sillyangel.me/songs/melanie/portals/albumcover.png"},
    { artist: "The weeknd", album: "Kiss Land", folder: "theweekend/kissland", image: "https://cdn.sillyangel.me/songs/theweekend/kissland/albumcover.png"},
    { artist: "The weeknd", album: "Beauty Behind the Madness", folder: "theweekend/bbtm", image: "https://cdn.sillyangel.me/songs/theweekend/bbtm/albumcover.png"},
    { artist: "The weeknd", album: "starboy", folder: "theweekend/starboy", image: "https://cdn.sillyangel.me/songs/theweekend/starboy/albumcover.png"},
    { artist: "The weeknd", album: "Afterhours", folder: "theweekend/afterhours", image: "https://cdn.sillyangel.me/songs/theweekend/afterhours/albumcover.png"},
    { artist: "The weeknd", album: "Dawnfm", folder: "theweekend/dawnfm", image: "https://cdn.sillyangel.me/songs/theweekend/dawnfm/albumcover.png"},
    { artist: "Laufey", album: "Bewitched", folder: "laufey/bewitched", image: "https://cdn.sillyangel.me/songs/laufey/bewitched/albumcover.png"},
    { artist: "Laufey", album: "Everything I know about love", folder: "laufey/eikal", image: "https://cdn.sillyangel.me/songs/laufey/eikal/albumcover.png"},
    { artist: "Roddy Ricch", album: "life lives fast", folder: "rr/llf", image: "https://cdn.sillyangel.me/songs/rr/llf/albumcover.png"},
    { artist: "Roddy Ricch", album: "Please excuse me for being antisocial", folder: "rr/pemfba", image: "https://cdn.sillyangel.me/songs/rr/pemfba/albumcover.png"},
    { artist: "Lemon Demon", album: "Spirit phone", folder: "ld/sp", image: "https://cdn.sillyangel.me/songs/ld/sp/albumcover.png"},
    { artist: "Lemon Demon", album: "Clown", folder: "ld/cc", image: "https://cdn.sillyangel.me/songs/ld/cc/albumcover.jpg"},
    { artist: "Kanye West", album: "My Beautiful Dark Twisted Fantasy", folder: "kanyewest/mbdtf", image: "https://cdn.sillyangel.me/songs/kanyewest/mbdtf/albumcover.jpg"},
    { artist: "Kanye West", album: "Yeezus", folder: "kanyewest/yeezus", image: "https://cdn.sillyangel.me/songs/kanyewest/yeezus/Cover.jpg"},
    { artist: "Kanye West", album: "Ye", folder: "kanyewest/ye", image: "https://cdn.sillyangel.me/songs/kanyewest/ye/Cover.jpg" },
    { artist: "Kanye West", album: "Jesus Is King", folder: "kanyewest/jesusisking", image: "https://cdn.sillyangel.me/songs/kanyewest/jesusisking/Cover.jpg" },
    { artist: "Kanye West", album: "Donda", folder: "kanyewest/donda", image: "https://cdn.sillyangel.me/songs/kanyewest/donda/cover.jpg" },
    { artist: "Kanye West", album: "Donda 2", folder: "kanyewest/donda2", image: "https://cdn.sillyangel.me/songs/kanyewest/donda2/" },
    // Add more albums here
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
    ],
    "tylerthecreator/flowerboy": [
        "01 Foreword (feat. Rex Orange County).mp3",
        "02 Where This Flower Blooms (feat. Frank Ocean).mp3",
        "Sometimes....mp3",
        "04 See You Again (feat. Kali Uchis).mp3",
        "05 Who Dat Boy (feat. A$AP Rocky).mp3",
        "06 Pothole (feat. Jaden Smith).mp3",
        "07 Garden Shed (feat. Estelle).mp3",
        "08 Boredom (feat. Rex Orange County _ Anna of the North).mp3",
        "09 I Ain_t Got Time!.mp3",
        "10 911 _ Mr. Lonely (feat. Frank Ocean _ Steve Lacy).mp3",
        "11 Droppin _ Seeds (feat. Lil Wayne).mp3",
        "November.mp3",
        "Glitter.mp3",
        "Enjoy Right Now, Today.mp3"
    ],
    "tylerthecreator/igor": [
        "01 IGOR_S THEME (feat. Lil Uzi Vert _ Kali Uchis).mp3",
        "02 EARFQUAKE (feat. Playboi Carti _ Charlie Wilson).mp3",
        "03 I THINK (feat. Solange).mp3",
        "04 BOYFRIEND (feat. Charlie Wilson _ Santigold).mp3",
        "05 RUNNING OUT OF TIME (feat. Jessy Wilson).mp3",
        "06 NEW MAGIC WAND (feat. Santigold _ Jessy Wilson).mp3",
        "07 A BOY IS A GUN_.mp3",
        "08 PUPPET (feat. Kanye West).mp3",
        "09 WHAT_S GOOD (feat. Slowthai).mp3",
        "10 GONE, GONE _ THANK YOU (feat. CeeLo Green, Cullen Omori _ La Roux).mp3",
        "11 I DON_T LOVE YOU ANYMORE (feat. Charlie Wilson, Jessy Wilson _ Solange).mp3",
        "12 ARE WE STILL FRIENDS_ (feat. Pharell Williams).mp3"
    ],
    "tylerthecreator/cherrybomb": [
        "1 Deathcamp.mp3",
        "2 Buffalo.mp3",
        "3 PILOT.mp3",
        "4 RUN.mp3",
        "5 FIND YOUR WINGS.mp3",
        "6 Cherry Bomb.mp3",
        "7 BLOW MY LOAD.mp3",
        "8 2SEATER.mp3",
        "9 THE BROWN STAINS OF DARKEESE.mp3",
        "10 F YOUNG _ PERFECT.mp3",
        "11 SMUCKERS.mp3",
        "12 KEEP DA O_S.mp3",
        "13 OKAGA, CA.mp3"
    ],
    "tylerthecreator/goblin": [
      "01 Goblin.mp3",
      "02 Yonkers.mp3",
      "03 Radicals.mp3",
      "04 She (feat. Frank Ocean.mp3)",
      "05 Transylvania.mp3",
      "06 Nightmare.mp3",
      "07 Tron Cat.mp3",
      "08 Her.mp3",
      "",
      "",
      "",
      "",
      "13 Window (feat. Domo Genesis, Frank Ocean, Hodgy Beats _ Mike G).mp3",
      "14 AU79.mp3",
      "15 Golden.mp3",
      "2-01 Burger (feat. Hodgy Beats).mp3",
      "",
      "2-03 Steak Sauce.mp3",
    ],
    "tylerthecreator/bas": [
      ""
    ],
    "arcticmonkeys/am": [
        "01 - Do I Wanna Know.mp3",
        "02 - R U Mine.mp3",
        "03 - One For the Road.mp3",
        "04 - Arabella.mp3",
        "05 - I Want It All.mp3",
        "06 - No. 1 Party Anthem.mp3",
        "07 - Mad Sounds.mp3",
        "08 - Fireside.mp3",
        "09 - Why'd You Only Call Me When You're High.mp3",
        "10 - Snap Out of It.mp3",
        "11 - Knee Socks.mp3",
        "12 - I Wanna Be Yours.mp3"
    ],
    "arcticmonkeys/humbug": [
        "01. My Propeller.mp3",
        "02. Crying Lightning.mp3",
        "03. Dangerous Animals.mp3",
        "04. Secret Door.mp3",
        "05. Potion Approaching.mp3",
        "06. Fire And The Thud.mp3",
        "07. Cornerstone.mp3",
        "08. Dance Little Liar.mp3",
        "09. pretty visitors.mp3",
        "10 the jeweller's hands.mp3",
        "11_red right hand(2)(2).mp3"
    ],
    "arcticmonkeys/wpsiatwin": [
      "01 The View from the Afternoon.mp3",
      "02 I Bet You Look Good on the Dancefloor.mp3",
      "03 Fake Tales of San Francisco.mp3",
      "04 Dancing Shoes.mp3",
      "05 You Probably Couldn't See for the Lights But You Were Staring.mp3",
      "06 Still Take You Home.mp3",
      "07 Riot Van.mp3",
      "08 Red Light Indicates Doors Are Secured.mp3",
      "09 Mardy Bum.mp3",
      "10 Perhaps Vampires Is a Bit Strong But.mp3",
      "11 When the Sun Goes Down.mp3",
      "12 From the Ritz to the Rubble.mp3",
      "13 A Certain Romance.mp3",
    ],
    "arcticmonkeys/fwn": [
      "01 Brainstorm.mp3",
      "02 Teddy Picker.mp3",
      "03 D is For Dangerous.mp3",
      "04 Balaclava.mp3",
      "05 Fluorescent Adolescent.mp3",
      "06 Only Ones Who Know.mp3",
      "07 Do Me a Favour.mp3",
      "08 This House Is A Circus.mp3",
      "09 If You Were There, Beware.mp3",
      "10 The Bad Thing.mp3",
      "11 Old Yellow Bricks.mp3",
      "12 505.mp3",
    ],
    "arcticmonkeys/sias": [
      ""
    ],
    "arcticmonkeys/tbhc": [
      ""
    ],
    "arcticmonkeys/car": [
      ""
    ],
    "wallows/nonthinghappens": [
      "Only Friend.mp3",
      "Treacherous Doctor.mp3",
      "Sidelines.mp3",
      "Are You Bored Yet (feat. Clairo).mp3",
      "Scrawny.mp3",
      "Ice Cold Pool.mp3",
      "Worlds Apart.mp3",
      "What You Like.mp3",
      "Remember When.mp3",
      "I_m Full.mp3",
      "Do Not Wait.mp3"
  ],
    "melanie/crybaby": [],
    "melanie/k12": [],
    "melanie/portals": [],
    "theweekend/kissland": [
        "01 - The Weeknd - Professional.mp3",
        "02 - The Weeknd - The Town.mp3",
        "03 - The Weeknd - Adaptation.mp3",
        "04 - The Weeknd - Love In The Sky.mp3",
        "05 - The Weeknd - Belong To The World.mp3",
        "06 - The Weeknd - Live For (feat. Drake).mp3",
        "07 - The Weeknd - Wanderlust.mp3",
        "08 - The Weeknd - Kiss Land.mp3",
        "09 - The Weeknd - Pretty.mp3",
        "10 - The Weeknd - Tears In The Rain.mp3",
    ],
    "theweekend/bbtm": [
        "01 - Real Life.mp3",
        "02 - Losers (feat. Labrinth).mp3",
        "03 - Tell Your Friends.mp3",
        "04 - Often.mp3",
        "05 - The Hills.mp3",
        "06 - Acquainted.mp3",
        "07 - Can't Feel My Face.mp3",
        "08 - Shameless.mp3",
        "09 - Earned It (Fifty Shades of Grey).mp3",
        "10 - In the Night.mp3",
        "11 - As You Are.mp3",
        "12 - Dark Times.mp3",
        "13 - Prisoner.mp3",
        "14 - Angel.mp3"
    ],
    "theweekend/starboy": [
        "01. Starboy.mp3",
        "02. Party Monster.mp3",
        "03. False Alarm.mp3",
        "04. Reminder.mp3",
        "05. Rockin.mp3",
        "06. Secrets.mp3",
        "07. True Colors.mp3",
        "08. Stargirl Interlude.mp3",
        "09. Sidewalks.mp3",
        "10. Six Feet Under.mp3",
        "11. Love To Lay.mp3",
        "12. A Lonely Night.mp3",
        "13. Attention.mp3",
        "14. Ordinary Life.mp3",
        "15. Nothing Without You.mp3",
        "16. All I Know.mp3",
        "17. Die For You.mp3",
        "18. I Feel It Coming.mp3",
        "19. Die For You (Remix).mp3",
        "20. Starboy (Kygo Remix).mp3",
        "21 Reminder (Remix).mp3"

    ],
    "theweekend/afterhours": [
        "01. Alone Again.mp3",
        "02. Too Late.mp3",
        "03. Hardest To Love.mp3",
        "04. Scared To Live.mp3",
        "05. Snowchild.mp3",
        "06. Escape From LA.mp3",
        "07. Heartless.mp3",
        "08. Faith.mp3",
        "09. Blinding Lights.mp3",
        "10. In Your Eyes.mp3",
        "11. Save Your Tears.mp3",
        "12. Repeat After Me (Interlude).mp3",
        "13. After Hours.mp3",
        "14. Until I Bleed Out.mp3"
    ],
    "theweekend/dawnfm": [
        "01. Dawn FM.mp3",
        "02. Gasoline.mp3",
        "03. How Do I Make You Love Me_.mp3",
        "04. Take My Breath.mp3",
        "05. Sacrifice.mp3",
        "06. A Tale By Quincy.mp3",
        "07. Out Of Time.mp3",
        "08. Here We Go... Again.mp3",
        "09. Best Friends.mp3",
        "10. Is There Someone Else_.mp3",
        "11. Starry Eyes.mp3",
        "12. Every Angel is Terrifying.mp3",
        "13 Don't Break My Heart.mp3",
        "14. I Heard You Married.mp3",
        "15. Less Than Zero.mp3",
        "16. Phantom Regret by Jim.mp3"
    ],
    "laufey/bewitched": [],
    "laufey/eikal": [],
    "rr/llf": [],
    "rr/pemfba": [],
    "ld/sp": [],
    "ld/cc": [],
    "kanyewest/mbdtf": [
        "01. Dark Fantasy.mp3",
        "02. Who Will Survive In America.mp3",
        "03. Gorgeous [feat. Kid Cudi].mp3",
        "04. POWER.mp3",
        "05. All Of The Lights [Interlude].mp3",
        "06. All Of The Lights.mp3",
        "07. Monster [feat. Jay-Z, Rick Ross, Nicki Minaj & Bon Iver].mp3",
        "08. So Appalled [feat. Jay-Z, Pusha T, CyHi Da Prynce, Swizz Beatz & The RZA].mp3",
        "09. Devil In A New Dress [feat. Rick Ross].mp3",
        "10. Runaway [feat. Pusha T].mp3",
        "11. Hell Of A Life.mp3",
        "12. Blame Game [feat. John Legend].mp3",
        "13. Lost In The World [feat. Bon Iver].mp3"
    ],
    "kanyewest/yeezus": [
      "01 Kanye West - On Sight.mp3",
      "02 Kanye West - Black Skinhead.mp3",
      "03 Kanye West - I Am A God.mp3",
      "04 Kanye West - New Slaves.mp3",
      "05 Kanye West - Hold My Liquor.mp3",
      "06 Kanye West - I'm In It.mp3",
      "07 Kanye West - Blood On The Leaves.mp3",
      "08 Kanye West - Guilt Trip.mp3",
      "09 Kanye West - Send It Up.mp3",
      "10 Kanye West - Bound 2.mp3"
    ],
    "kanyewest/ye": [
        "01. I Thought About Killing You.mp3",
        "02. Yikes.mp3",
        "03. All Mine.mp3",
        "04. Wouldn't Leave.mp3",
        "05. No Mistakes.mp3",
        "06. Ghost Town.mp3",
        "07. Violent Crimes.mp3"
    ],
    "kanyewest/jesusisking": [
        "01 Every Hour (feat. Sunday Service Choir).mp3",
        "02 Selah.mp3",
        "03 Follow God.mp3",
        "04 Closed On Sunday.mp3",
        "05 On God.mp3",
        "06 Everything We Need (feat. Ty Doll.mp3",
        "07 Water (feat. Ant Clemons).mp3",
        "08 God Is.mp3",
        "09 Hands On (feat. Fred Hammond).mp3",
        "10 Use This Gospel (feat. Clipse & K.mp3",
        "11 Jesus Is Lord.mp3"
    ],
    "kanyewest/donda": [
        "01 Donda Chant.mp3",
        "02 Jail.mp3",
        "03 God Breathed.mp3",
        "04 Off The Grid.mp3",
        "05 Hurricane.mp3",
        "06 Praise God.mp3",
        "07 Jonah.mp3",
        "08 Ok Ok.mp3",
        "09 Junya.mp3",
        "10 Believe What I Say.mp3",
        "11 24.mp3",
        "12 Remote.mp3",
        "13 Moon.mp3",
        "14 Heaven And Hell.mp3",
        "15 Donda.mp3",
        "16 Keep My Spirit Alive.mp3",
        "17 Jesus Lord.mp3",
        "18 New Again.mp3",
        "19 Tell The Vision.mp3",
        "20 Lord I Need You.mp3",
        "21 Pure Souls.mp3",
        "22 Come To Life.mp3",
        "23 No Child Left Behind.mp3",
        "24 Jail Pt 2.mp3",
        "25 Ok Ok Pt 2.mp3",
        "26 Junya Pt 2.mp3",
        "27 Jesus Lord Pt 2.mp3"
    ],
    "kanyewest/donda2": [
        "01 True Love (feat. XXXTentacion).mp3",
        "02 Broken Road (feat. Don Toliver).mp3"
    ]

};
var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playbuttonthung");
var volumeControl = document.getElementById("volume");
var progressBar = document.getElementById("progress");
var currentTrackIndex = localStorage.getItem("Trackindex");
var currentAlbum = localStorage.getItem("CurrentAlbum");
var currentAlbumIndex = localStorage.getItem("Albumindex");
var audiotimern;

if (isNaN(currentTrackIndex) || currentTrackIndex === null) {
    currentTrackIndex = 0;
}

if (currentAlbum === null) {
    currentAlbum = "tylerthecreator/wolf";
}

if (isNaN(currentAlbumIndex) || currentAlbumIndex === null) {
    currentAlbumIndex = 0;
}

if (localStorage.getItem("timerforaudio") !== null) {
    audiotimern = localStorage.getItem("timerforaudio");
}
var currentTrackElements = document.querySelectorAll(".currentTrack");
var currentTrack2Elements = document.querySelectorAll(".currentTrack2");

function loadTrack() {
    var trackPath = audioTracks[currentAlbum][currentTrackIndex];
    console.log(trackPath);
    audio.src = "https://cdn.sillyangel.me/" + "songs/" + currentAlbum + "/" + trackPath;
    audio.load();
    updateTrackText();
    updateAlbumCover();
    mediathinggy();
    localStorage.setItem("Albumindex", currentAlbumIndex);
    localStorage.setItem("Trackindex", currentTrackIndex);
    localStorage.setItem("CurrentAlbum", currentAlbum);
}
function playPause() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
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

// Modify the updateAlbumCover function
function updateAlbumCover() {
    // Get all elements with the same ID "albumCover"
    var albumCovers = document.querySelectorAll('[id="albumCover"]');
    var selectedAlbum = albums[currentAlbumIndex];

    // Loop through each element with the same ID and update its src attribute
    albumCovers.forEach(function(element) {
        element.src = selectedAlbum.image;
    });
}


// Call the updateAlbumCover function when changing albums
function nextAlbum() {
    currentAlbumIndex++;
    if (currentAlbumIndex >= albums.length) {
        currentAlbumIndex = 0; // Loop back to the first album
    }
    currentAlbum = albums[currentAlbumIndex].folder;
    currentTrackIndex = 0;
    // Check if audioTracks[currentAlbum] exists before loading
    if (audioTracks[currentAlbum]) {
        loadTrack();
        audio.play();
        // Update the album cover image
        updateAlbumCover();
    } else {
        // Handle the case when the album is not found
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
    // Update the album cover image
    updateAlbumCover();
}
audio.addEventListener("timeupdate", function() {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    // Check if duration is a finite number before calculating percentComplete
    if (isFinite(duration)) {
        var percentComplete = (currentTime / duration) * 100;
        progressBar.value = percentComplete;
    }
    localStorage.setItem("timerforaudio", audio.currentTime);
});

// Load the first track when the page loads
loadTrack();
// Event listener for when the current track ends
audio.addEventListener("ended", function() {
    // Play the next track automatically
    skipTrack();
});



function updateTrackText() {
    var artist = albums[currentAlbumIndex].artist;
    var track = audioTracks[currentAlbum][currentTrackIndex];

    // Remove the .mp3 extension from the track name
    track = track.replace(".mp3", "");

    // Remove the numbering at the beginning of the track name, handling extra dash or period
    track = track.replace(/^\d+\s*[-.]*\s*/, "");

    // Loop through each element with class "currentTrack" and update its content
    currentTrackElements.forEach(function(element) {
        element.textContent = artist + " - " + track;
    });

    // Loop through each element with class "currentTrack2" and update its content
    currentTrack2Elements.forEach(function(element) {
        element.textContent = artist + " - " + track;
    });
}


// Call the function to update both elements
updateTrackText();
// Add these lines to update the song duration and current time
var songTimeElement = document.getElementById("songTime");
var songDurationElement = document.getElementById("songDuration");
audio.addEventListener("timeupdate", function() {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    // Check if duration is a finite number before calculating percentComplete
    if (isFinite(duration)) {
        var percentComplete = (currentTime / duration) * 100;
        progressBar.value = percentComplete;
        // Update the song duration and current time
        var currentMinutes = Math.floor(currentTime / 60);
        var currentSeconds = Math.floor(currentTime % 60);
        var durationMinutes = Math.floor(duration / 60);
        var durationSeconds = Math.floor(duration % 60);
        // Display current time and duration in the format "M:SS"
        songTimeElement.textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
        songDurationElement.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
    }
});
// Load data from JSON file
fetch('https://sillyangel.me/songs.json')
    .then((response) => response.json())
    .then((data) => {
        const songSelector = document.getElementById('farts');
        songSelector.innerHTML = ''; // Clear existing content

        let currentArtist = ''; // Initialize the current artist
        data.albums.forEach((album, albumIndex) => {
            if (album.artist !== currentArtist) {
                // Create a new <h1> for a different artist
                const artistHeader = document.createElement('h1');
                artistHeader.textContent = album.artist;
                songSelector.appendChild(artistHeader);
                // Update the current artist
                currentArtist = album.artist;
            }

            // Create a button for the album
            const albumButton = document.createElement('button');
            albumButton.innerHTML = `<img src="${album.cover}" alt="${album.album}" width="100px" height="100px">`;
            albumButton.onclick = () => albumsec(albumIndex);
            songSelector.appendChild(albumButton);
        });
    })
    .catch((error) => {
        alert('Error loading JSON data:', error);
        console.log('Error loading JSON data:', error);
    });


function albumsec(albumnumber) {
    // Retrieve the album details from the albums array
    const albumDetails = albums[albumnumber];

    if (albumDetails) {
        // Update the currentAlbumIndex
        currentAlbumIndex = albumnumber;

        // Update the currentAlbum and currentTrackIndex
        currentAlbum = albumDetails.folder;
        currentTrackIndex = 0;

        // Load the track and play it
        loadTrack();
        audio.play();

        // Update the album cover image
        updateAlbumCover();
    } else {
        console.error(`Album with index ${albumnumber} not found in the albums array.`);
    }
}



function mediathinggy() {
    var track = audioTracks[currentAlbum][currentTrackIndex]
    console.log("Original track:", track);
    track = track.replace(".mp3", "");
    console.log("Track after removing .mp3:", track);
    track = track.replace(/^\d+\s*[-.]*\s*/, "");
    console.log("Track after regex replacement:", track);
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

    home.style.display = "none";
    search.style.display = "none";
    libaraby.style.display = "none";
    login.style.display = "none";
    accountsettings.style.display = "none";

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
            const listItem = document.createElement("li");
            listItem.textContent = `${obj.album} - ${obj.artist}`;
            listHolder.appendChild(listItem);
            listHolder.appendChild(document.createElement('br'));
        }
    }
}


function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 } 
} catch(error) {
    alert(error.message);
    alert(error);
    console.log(error);
    console.log(error.message);
}