self.addEventListener("push", function(event) {
    event.waitUntil(
      self.registration.showNotification("Website Updated", {
        body: "There are new updates available on the website!",
      })
    );
  });
  