import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getRedirectResult, signInWithPopup, GithubAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, deleteDoc, getFirestore, collection, addDoc, query, where, getDocs, getDoc, setDoc, documentId } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-performance.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app-check.js";
import { getDownloadURL, getStorage, ref, uploadBytes, listAll } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyCrXbgrgnkGFfPkbHdJ5oRD4ezbv5ypWbE",
  authDomain: "playmusichtml.firebaseapp.com",
  projectId: "playmusichtml",
  storageBucket: "playmusichtml.appspot.com",
  messagingSenderId: "485050816009",
  appId: "1:485050816009:web:c1630df9ed354c33d98ad8",
  measurementId: "G-DZ88CYJF8L"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LfhO68oAAAAAH-9cGAU4C9VEZHm0gzxXmS0ubbw'),
  isTokenAutoRefreshEnabled: true
});
const auth = getAuth();
const db = getFirestore(app);
const storage  = getStorage(app);

// Get elements
const ResetEmail = document.getElementById("reset-email");
const resetbutton = document.getElementById("resetbutton");
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupForm = document.getElementById("signup-form");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const logoutButton = document.getElementById("logout-button");
const savebutton = document.getElementById("savebutton");
const githublogin = document.getElementById("githubuttonlogin");
var createPlaylistButton = document.getElementById("createplaylist");
const bnr = document.getElementById("bupfb");
var audio = document.getElementById("myAudio");
// end of get elements


var modal = document.getElementById("myModalU");
var span = document.getElementsByClassName("closeU")[0];



  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


function handlegithub(event) {
  event.preventDefault(event);
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
  .then(async (result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    console.log(credential.accessToken, 'data');
    setLoader(prevState => ({ ...prevState, githubLoading: false }));
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    result = await getRedirectResult(auth);
// Provider of the access token could be Facebook, Github, etc.
if (result === null || provider.credentialFromResult(result) === null) {
  return null;
}
return result;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
}



// Function to handle login
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission
  const email = loginEmail.value;
  const password = loginPassword.value;
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Logged in as: " + user.email);
    window.location.href = "./"
    // Update the UI with user information
  })
  .catch((error) => {
    alert("Login error: " + error.message);
  });

}
function handlereset(event) {
  event.preventDefault();
  const email = ResetEmail.value; // Assuming you have an element with id "emailforreset"
  
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent. Check your inbox.");
    })
    .catch((error) => {
      alert("Error sending password reset email: " + error.message);
    });
}



// Function to handle signup
function handleSignup(event) {
  event.preventDefault(); // Prevent form submission
  const email = signupEmail.value;
  const password = signupPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let user = auth.currentUser;
      alert("Signed up:", user);
      window.location.reload();
    window.location.href = "https://music.sillyangel.me/"
    })
    .catch((error) => {
      alert("Signup error:", error.message);
    });
}
function logout(event) {
  event.preventDefault();
  signOut(auth).then(() => {
    // Sign-out successful.
    alert("Log Out")
    window.location.href = "https://music.sillyangel.me/"
  }).catch((error) => {
    alert("a error happened when loging out", error.message)
  });
}

// Attach event listeners to forms
loginForm.addEventListener("submit", handleLogin);
signupForm.addEventListener("submit", handleSignup);
logoutButton.addEventListener("click", logout);
resetbutton.addEventListener("click", handlereset);
githublogin.addEventListener("click", handlegithub);
createPlaylistButton.addEventListener("click", createPlaylistInFirestore);
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'src') {
            // console.log("Current Track Index:", currentTrackIndex);
            // console.log("Current Album Index:", currentAlbumIndex);
      }
  });
});


async function createPlaylistInFirestore() {
  const nameofplaylist = prompt("Name of new playlist?");
  const urltonewplaylistimg = prompt("URL for the playlist image");
  const user = auth.currentUser;
  if (nameofplaylist && urltonewplaylistimg) {
    // Check the user's authentication status using your preferred method

    if (user.uid) {
      // Replace 'userId123' with the actual user ID or identifier
      const userId = user.uid;

      const playlistData = {
        name: nameofplaylist,
        imageUrl: urltonewplaylistimg,
        // Add more properties as needed
      };

      const playlistsCollection = collection(db, "playlists");

      try {
        await addDoc(playlistsCollection, {
          userId: userId,
          data: playlistData,
        });
        alert("Playlist data saved in Firestore.");
        // Optionally, you can reload the page or update the UI here
      } catch (error) {
        alert("Error adding playlist data: " + error.message);
      }
    } else {
      alert("You need to be logged in to create a playlist.");
    }
  }
}





observer.observe(audio, { attributes: true });
 // Check for user authentication when the page is loaded
 
 // Firebase initialization code (already defined)
 
 // Check for user authentication when the page is loadedMake sure 'app' is properly initialized

 auth.onAuthStateChanged(async (user) => {
   if (user) {
     // User is authenticated
     const userId = user.uid;
     // Check if the user has a playlist (assuming you have a 'playlists' collection)
     const playlistsCollection = collection(db, "playlists");
     const q = query(playlistsCollection, where("userId", "==", userId));
     try {
       const querySnapshot = await getDocs(q);
       if (!querySnapshot.empty) {
         // User has a playlist, load and display it
         querySnapshot.forEach((doc) => {
           const playlistData = doc.data();

          //  console.log("Loaded playlist:", playlistData);
         });
         playlistdatathn(user);         
       } else {
         // User doesn't have a playlist
         console.log("User doesn't have a playlist.");
       }
     } catch (error) {
       console.error("Error checking for playlist:", error);
     }
   } else {
     // User is not authenticated
     console.log("User is not authenticated.");
   }
 });
async function addsongtoplaylist() {
   
}
async function playlistdatathn(user) {
  if (user) {
    const userId = user.uid;
    const playlistsCollection = collection(db, "playlists");
    const q = query(playlistsCollection, where("userId", "==", userId));
    try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                const playlistData = doc.data().data;
                const playlistName = playlistData.name;
                
                // Create a new div for each playlist
                const playlistDiv = document.createElement("div");
                playlistDiv.id = playlistName;
                playlistDiv.classList.add('playlist-item'); // Add the class for CSS styling
                playlistDiv.style.display = "none"; // Initially set to hidden

                const img = document.createElement("img")
                img.src = playlistData.imageUrl;

                const addtrack = document.createElement("button")
                addtrack.id = "bupfb";
                addtrack.textContent = "Add Custom Music";
                addtrack.addEventListener("click", () => {
                  const modulediv = document.createElement("div");
                  modulediv.id = "divmodule"
                  modulediv.style.display = "block";
                  document.body.appendChild(modulediv)
                });
                // heading
                const h3 = document.createElement("h2");
                h3.textContent = playlistName + ' - Playlist';
                // spacing
                const br1 = document.createElement("br");
                const br2 = document.createElement("br");
                const br3 = document.createElement("br");
                const br4 = document.createElement("br");
                const br5 = document.createElement("br");
                const br6 = document.createElement("br");
                const br7 = document.createElement("br");
                const br8 = document.createElement("br");
                const br9 = document.createElement("br");
                const br10 = document.createElement("br");
                const br11 = document.createElement("br");
                // Create an exit button
                const exitButton = document.createElement("button");
                exitButton.id = "exitbutton";
                exitButton.textContent = "Exit";
                exitButton.addEventListener("click", () => {
                    playlistDiv.style.display = "none"; // Hide the playlist div
                    document.getElementById("lilbrary").style.display = "flex"; // Show the library
                });

                // creating delete button
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.id = "deletebutton";
                deleteButton.addEventListener("click", async () => {
                    try {
                        await deleteDoc(doc.ref);
                        document.getElementById("lilbrary").style.display = "flex"
                        document.body.removeChild(playlistDiv); // Remove the playlist div from the body
                        playlistDiv.style.display = "none"
                    } catch (error) {
                        console.error("Error deleting playlist:", error);
                    }
                });
                // append newely created elements 
                playlistDiv.appendChild(h3);
                playlistDiv.appendChild(br1);
                playlistDiv.appendChild(br2);
                playlistDiv.appendChild(img);
                playlistDiv.appendChild(exitButton);
                playlistDiv.appendChild(br3);
                playlistDiv.appendChild(deleteButton);
                playlistDiv.appendChild(br4);
                playlistDiv.appendChild(addtrack);
                playlistDiv.appendChild(br5);
                
                // Append the div to the body
                playlistDiv.appendChild(br6);
                document.body.appendChild(playlistDiv);

                // Create a button for each playlist in the library
                const showPlaylistButton = document.createElement("button");
                const buttonpimage = document.createElement("img");
                buttonpimage.src = playlistData.imageUrl;
                buttonpimage.alt = playlistName;
                showPlaylistButton.addEventListener("click", () => {
                  const allDivs = document.querySelectorAll('.playlist-item'); // Select all elements with the class 'playlist-item'
                  allDivs.forEach((div) => {
                    div.style.display = "none"; // Hide all playlist divs
                  });
                  playlistDiv.style.display = "flex"; // Show the selected playlist div
                  document.getElementById("lilbrary").style.display = "none"; // Hide the library
                });
                showPlaylistButton.appendChild(buttonpimage);
                playlistContainer.appendChild(showPlaylistButton); // Append the button to the library
            });
        } else {
            // User doesn't have a playlist
            console.log("User doesn't have a playlist.");
        }
    } catch (error) {
        console.error("Error checking for playlist:", error);
    }
} else {
    // User is not authenticated
    console.log("User is not authenticated.");
}};

 auth.onAuthStateChanged(async (user) => {
  const nameu = document.getElementById('username');
  if (user) {
    const user = auth.currentUser;
    const nameu = document.getElementById('username');
    nameu.innerHTML = user.displayName;
  } else {
    const nameu = document.getElementById('username');  
    nameu.innerHTML = "Not Logged In"
  }
 });
 auth.onAuthStateChanged(async (user) => {
  var profiled = document.getElementById("iconsa");
  if (!user.photoURL) {
    profiled.src = "./assets/nonealubm.png"
  } else {
    profiled.src = user.photoURL;
  }
 });

 // if userdiv is clicked check if the user is logged if so show the settings
 auth.onAuthStateChanged(async (user) => {
  if (user) {
  const accountmain = document.getElementById("accountmainbutton");
  var home = document.getElementById("songselector");
  var search = document.getElementById("searching");
  var libaraby = document.getElementById("lilbrary");
  var login = document.getElementById("mlogin");
  var accountsettings = document.getElementById("accountsettings");

  // Define a function to handle the click event
  function handleAccountMainButtonClick() {
    home.style.display = "none";
    search.style.display = "none";
    libaraby.style.display = "none";
    login.style.display = "none";
    accountsettings.style.display = "block";
  }

  // Set the onclick property to the function reference
  accountmain.onclick = handleAccountMainButtonClick;

}});

async function updateProfileWithFormData() {
  const displayNameV = document.getElementById("displayname").value;
  const photoURLV = document.getElementById("PhotoUrl").value;

  let profileData = {};

  if (displayNameV) {
    profileData.displayName = displayNameV;
  }

  if (photoURLV) {
    profileData.photoURL = photoURLV;
  }

  updateProfile(auth.currentUser, profileData)
    .then(() => {
      alert("Updated Profile Details");
    })
    .catch((error) => {
      alert("a error happened when updatingProfile out ", error.message);
    });
}


savebutton.onclick = updateProfileWithFormData;

auth.onAuthStateChanged(async (user) => {
  if (user) {
    document.getElementById('mp3file').addEventListener('submit', (e) => {
      e.preventDefault();
      const userId = user.uid;
      const file = document.getElementById('myFile').files[0];
      const storageRef = ref(storage, `customsongs/${userId}/${file.name}`);
      
      if (!file) {
        alert('Please select a file.');
        return;
      }

      if (!file.name.endsWith('.mp3') && file.type !== 'audio/mpeg') {
        alert('Please select an MP3 file.');
        return;
      }

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      }).catch((error) => {
        console.error('Error uploading file:', error);
      });
    });
  } else {
    // Handle not logged in user
  }
});

export async function addSongToHistory(title, artist, album) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userId = user.uid;
      const historyCollection = collection(db, `history/${userId}/songs`);
      const songData = {
        title,
        artist,
        album,
        timestamp: new Date(),
      };

      try {
        await addDoc(historyCollection, songData);
        alert('Song data saved in Firestore.');
      } catch (error) {
        alert('Error adding song data: ' + error.message);
      }
    } else {
      console.log('User is not logged in.');
    }
  });
}


auth.onAuthStateChanged(async (user) => {
  if (user) {
    var userId = user.uid;
    const storage = getStorage();
    const listRef = ref(storage, `customsongs/${userId}/`);

    // Fetch all the files in the directory
    const res = await listAll(listRef);

    // Filter out the .mp3 files and get their download URLs
    res.items.forEach(async (itemRef) => {
      if (itemRef.name.endsWith('.mp3')) {
        const url = await getDownloadURL(itemRef);
        // console.log(url);
      }
    });
  }
});
