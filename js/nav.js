/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */
var toggled = null;

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);



function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  favoritesOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);



function navMyStories(evt) {
  console.debug("navMyStories", evt);
  hidePageComponents();
  userStoriesOnPage();
  $ownStories.show();
}

$body.on("click", "#nav-my-stories", navMyStories);


/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

// hide & show form on nav link "submit" click 

function updateNavSubmit() {
  if (!toggled) {
  $submitForm.show();
  toggled = true;
  } else {
    $submitForm.hide();
    toggled = false;
  }
}


// hide & show my stories on nav link "my stories" click

// function updateNavStories() {
//   if (!toggled) {
//     hidePageComponents();
//     userStoriesOnPage();
//     $ownStories.show();
//     toggled = true;
//   } else {
//     putStoriesOnPage();
//     toggled = false;
//   }
// }

// hide & show favorites on nav link "favorites" click

// function updateNavFavorites() {
//   if (!toggled) {
//     hidePageComponents();
//     favoritesOnPage();
//     toggled = true;
//   } else {
//     putStoriesOnPage();
//     toggled = false;
//   }
// }


//refactored into one loop (WIP)
// function updateNav(evt) {
//   if(evt.target.id === $navSubmit) {
//     $submitForm.show();
//   } else if(evt.target.id === $navStories) {
//     $navStories.show();
//   } else if(evt.target.id === $navFavorites) {
//     $navFavorites.show();
//   } else {
//     submi
//   }

//   }
// }

//navbar event listeners

$navSubmit.on("click", updateNavSubmit);
// $navStories.on("click", updateNavStories);
// $navFavorites.on("click", updateNavFavorites);

//refactored into one loop
// $mainNav.on("click", updateNav);

