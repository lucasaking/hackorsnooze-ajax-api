// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, showDel = false, showX = false) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  const displayFav = Boolean(currentUser);

  return $(`
      <li id="${story.storyId}">
      ${showDel ? getDelete() : ""}
      ${showX ? getShowX() : ""}
      ${displayFav ? getFav(story, currentUser) : ""}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

function getDelete() {
  return `
          <span class="trash-can">
            <i class="fas fa-trash-alt"></li>
          </span>`;
}

//favorite story /w icon

function getFav(story, user) {
  const isFav = user.isFav(story)
  const favType = isFav ? "fas" : "far";
  return `<span class="heart">
            <i class="${favType} fa-heart"></i>
            </span>`;
}

//delete story /w icon

function getShowX() {
  return `
      <span class="delete-x">
        <i class="fas fa-times"></i>
      </span>`;
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

// Deleting a story
async function deleteStory(evt){
console.debug("deleteStory");

const $closest = $(evt.target).closest("li");
const $storyId = $closest.attr("id")

await storyList.removeStory(currentUser, $storyId);

// Reload content to page 
await userStoriesOnPage();
}

// remove story event listener

$ownStories.on("click", ".trash-can", deleteStory)

// Submitting a story

async function submitStory(evt){
  evt.preventDefault();

  //grabing info from form
  const title = $("#form-title").val();
  const url = $("#form-url").val();
  const author = $("#form-author").val();
  const username = currentUser.username;
  const storyData = {title, url, author, username};

  const story = await storyList.addStory(currentUser, storyData);
  console.log("testing");

  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);
  

  console.log(username, storyData);
  $submitForm.hide();
  toggled = false;
}

//submit story on submit event

$submitForm.on("submit", submitStory);

//clear form values after posting

$(document).ready(function () {
  $(".submits-btn").click(function () {
    setTimeout(function () { 
    $("#form-submit").trigger("reset");
    }, 1000); 
  });
});

// show user stories on page

async function userStoriesOnPage(){
  console.debug("userStoriesOnPage");

  $ownStories.empty();

  if(currentUser.ownStories.length === 0){
    $ownStories.append("<h4>No stories added</h4>");
  } else {
    for(let story of currentUser.ownStories){
      const $story = generateStoryMarkup(story,true);
      $ownStories.append($story);
    }
  }
  $ownStories.show();
}

// favorited stories

function favoritesOnPage(){
  console.debug("favoritesOnPage");

  $favoritedStories.empty();

  if (currentUser.favorites.length === 0){
    $favoritedStories.append("<h4>No favorites added</h4>")
  } else {

    for (let story of currentUser.favorites){
    const $story = generateStoryMarkup(story);
    $favoritedStories.append($story);
    }
  }
  $favoritedStories.show();
}


async function toggleStoryFavorite(evt) {
  console.debug("toggleStoryFavorite");

  const $tgt = $(evt.target);
  const $closestLi = $tgt.closest("li");
  const storyId = $closestLi.attr("id");
  const story = storyList.stories.find(s => s.storyId === storyId);

  // see if the item is already favorited (checking by presence of star)
  if ($tgt.hasClass("fas")) {
    // currently a favorite: remove from user's fav list and change star
    await currentUser.removeFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  } else {
    // currently not a favorite: do the opposite
    await currentUser.addFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  }
}

$allStoriesList.on("click", ".heart", toggleStoryFavorite);



