// Find all profile picture elements in the feed with class .EntityPhoto-circle-3
const profilePictures1 = document.querySelectorAll('.EntityPhoto-circle-3');

// Replace each profile picture with the specified image
profilePictures1.forEach(picture => {
  picture.src = chrome.runtime.getURL('profile.jpg');
});


// Find all profile picture elements with class .feed-identity-module__member-photo
const profilePictures2 = document.querySelectorAll('.feed-identity-module__member-photo.EntityPhoto-circle-5.evi-image.lazy-image.ember-view');

// Replace each profile picture with the specified image
profilePictures2.forEach(picture => {
  picture.src = chrome.runtime.getURL('profile.jpg');
  picture.classList.remove('EntityPhoto-circle-5'); // Remove circular shape class
  picture.classList.add('square-profile'); // Add class for square shape
});
