import { initializeApp } from "firebase/app";
import { getRedirectResult, signInWithPopup, GithubAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, deleteDoc, getFirestore, collection, addDoc, query, where, getDocs, getDoc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

try {


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
const auth = getAuth();
const db = getFirestore(app);

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
var audio = document.getElementById("myAudio");
// end of get elements




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
    window.location.href = "https://sillyangel.me/"
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
    window.location.href = "https://sillyangel.me/"
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
            console.log("Current Track Index:", currentTrackIndex);
            console.log("Current Album Index:", currentAlbumIndex);
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

           console.log("Loaded playlist:", playlistData);
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

                const h3 = document.createElement("h2");
                h3.textContent = playlistName + ' - Playlist';
                const br1 = document.createElement("br");
                const br2 = document.createElement("br");
                const br3 = document.createElement("br");
                const br4 = document.createElement("br");
                const br5 = document.createElement("br");
                // Create an exit button
                const exitButton = document.createElement("button");
                exitButton.id = "exitbutton";
                exitButton.textContent = "Exit";
                exitButton.addEventListener("click", () => {
                    playlistDiv.style.display = "none"; // Hide the playlist div
                    document.getElementById("lilbrary").style.display = "flex"; // Show the library
                });

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.id = "deletebutton";
                deleteButton.addEventListener("click", async () => {
                    try {
                        await deleteDoc(doc.ref);
                        document.body.removeChild(playlistDiv); // Remove the playlist div from the body
                    } catch (error) {
                        console.error("Error deleting playlist:", error);
                    }
                });
                playlistDiv.appendChild(h3);
                playlistDiv.appendChild(exitButton);
                playlistDiv.appendChild(deleteButton);
                playlistDiv.appendChild(br3);
                playlistDiv.appendChild(img);
                playlistDiv.appendChild(br4);
                playlistDiv.appendChild(br5);

                // Append the div to the body
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
  if (user) {
    const nameu = document.getElementById('username');
    var divsl = document.getElementById("lisuf");
    nameu.innerHTML = ''
    nameu.innerHTML = `${user.displayName}`

  } else {
    const nameu = document.getElementById('username');  
    nameu.innerHTML = "Not Logged In"
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
  updateProfile(auth.currentUser, {
    displayName: displayNameV, photoURL: photoURLV 
  }).then(() => {
    console.log("Updated Profile Details");
  }).catch((error) => {
    alert("a error happened when updatingProfile out ", error.message)
  });
}


savebutton.onclick = updateProfileWithFormData;

} catch(error) {
  alert(error.message);
  alert(error);
  console.log(error.message);
  console.log(error);
}