import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getRedirectResult, signInWithPopup, GithubAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { doc, deleteDoc, getFirestore, collection, addDoc, query, where, getDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-performance.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app-check.js";
import { getDownloadURL, getStorage, ref, uploadBytes, listAll } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging.js"


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
const messaging = getMessaging(app);

getToken(messaging, {vapidKey: "BIH_uJo9AsIWsO3BKTuPdHFN9iBu9df6f-I79lJQYTnGYfBHh57zONkQ5DBYqYqGUyX0wgZbVmma7SPITN3j4RA"});

// Request permission for notifications
messaging.requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    // Get the registration token
    return getToken(messaging, { vapidKey: "BIH_uJo9AsIWsO3BKTuPdHFN9iBu9df6f-I79lJQYTnGYfBHh57zONkQ5DBYqYqGUyX0wgZbVmma7SPITN3j4RA" });
  })
  .then((token) => {
    alert('Token:', token);
    // sent to database /tokens/
    const tokencollection = collection(db, "tokens");
    const tokenData = {
      token: token
    }
    addDoc(tokencollection, tokenData);

  })
  .catch((error) => {
    console.log('Error:', error);
  });

// Handle incoming messages
messaging.onMessage((payload) => {
  console.log('Message received:', payload);
});

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
  const displayNameOrEmail = user.displayName ? user.displayName : user.email;
  alert("Logged in as: " + displayNameOrEmail);
  window.location.href = "./"
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
    window.location.href = "/"
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

          // create var for each thing on the playlist page
          const playlistpage = document.getElementById("playlistpage")
          const namepp = document.getElementById("h2pp")
          const playlistimage = document.getElementById("imagepp") 
          const creatorofplaylist = document.getElementById("artistpp");
          // const tracklist = document.getElementById("trackalbumpp")
          console.log(playlistData)
          namepp.innerHTML = playlistData.name;
          
          // user display name exist use it if not use email
          creatorofplaylist.innerHTML = "Created by: " + (user.displayName ? user.displayName : user.email);
          playlistimage.src = playlistData.imageUrl;
          playlistimage.alt = playlistName;

          // Button Creaton
          const showPlaylistButton = document.createElement("button");
          const buttonpimage = document.createElement("img");
          buttonpimage.src = playlistData.imageUrl;
          buttonpimage.alt = playlistName;
          showPlaylistButton.addEventListener("click", () => {
            playlistpage.style.display = "block"; // Show the selected playlist div
            document.getElementById("lilbrary").style.display = "none"; // Hide the library
          });
          showPlaylistButton.appendChild(buttonpimage);
          playlistContainer.appendChild(showPlaylistButton);

        });
      } else console.log("User doesn't have a playlist.");
    } catch (error) {
      console.error("Error checking for playlist:", error);
    }
  } else {
    console.log("User is not authenticated.");
  }};
 auth.onAuthStateChanged(async (user) => {
  const nameu = document.getElementById('username');
  if (user) {
    const user = auth.currentUser;
    nameu.innerHTML = user.displayName;
  } else {
    nameu.innerHTML = "Not Logged In"
  }
 });
auth.onAuthStateChanged(async (user) => {
  if (user) {
    var profiled = document.getElementById("iconsa");
    if (!user.photoURL) {
      profiled.src = "./assets/nonealubm.png"
    } else {
      profiled.src = user.photoURL;
    }
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

// History Functoins
async function addSongToHistory(title, artist, album) {
  auth.onAuthStateChanged(async (user) => {
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
        await addDoc(historyCollection, {
          data: songData,
        }
        );
        console.log('Song data saved in Firestore.');
      } catch (error) {
        alert("Error" + error.message)
      }
    } else {
      console.log('User is not logged in.');
    }
  });
}
async function getSongHistory() {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userId = user.uid;
      const historyCollection = collection(db, `history/${userId}/songs`);
      const q = query(historyCollection);

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const songData = doc.data().data;
          console.log('Loaded History:', songData);
        });
      } catch (error) {
        console.error('Error loading song history:', error);
      }
    } else {
      console.log('User is not logged in.');
    }
  });
}
async function deleteSongHistory() {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userId = user.uid;
      const historyCollection = collection(db, `history/${userId}/songs`);
      const q = query(historyCollection);

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        console.log('Deleted all song history.');
      } catch (error) {
        console.error('Error deleting song history:', error);
      }
    } else {
      console.log('User is not logged in.');
    }
  });
}
// End of history functions
// test function above
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
