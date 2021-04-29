
let MainBodyContainer = document.querySelector('.main-body-container');


let HomeTitle = document.createElement("h2");
HomeTitle.textContent = "Home";
HomeTitle.classList.add("section-title")

let CreateTweetSection = document.querySelector(".create-tweet-section");

let TweetProfile_ = document.createElement("img");
TweetProfile_.classList.add("tweet-profile-image");
TweetProfile_.src = "profile.png";

let TweetTextArea = document.createElement("textarea");
TweetTextArea.classList.add('tweet-text-area');
TweetTextArea.placeholder = "What's happening?"

let EveryoneCanReplyButton = document.createElement("span");
EveryoneCanReplyButton.classList.add("tweet-type-option");
EveryoneCanReplyButton.innerHTML = `
  <i class="fas fa-globe-americas"></i>
  Everyone can reply
`;


CreateTweetSection.append(TweetProfile_);
let CreateTweetSectionRight = document.createElement("div");
CreateTweetSectionRight.classList.add("create-tweet-section-right");

CreateTweetSectionRight.append(TweetTextArea);
CreateTweetSectionRight.append(EveryoneCanReplyButton);

CreateTweetSection.append(CreateTweetSectionRight);

let CreateTweetActionLayer = document.createElement("div");
CreateTweetActionLayer.classList.add("create-tweet-action-layer");
CreateTweetActionLayer.innerHTML = `
  <div>
    <i class="far fa-image"></i>
    <i class="fas fa-chart-line"></i>
    <i class="far fa-smile"></i>
    <i class="far fa-calendar"></i>
  </div>

  <button class="tweet-button">
        Tweet
      </button>
`;

CreateTweetSectionRight.append(CreateTweetActionLayer)

let TweetListSection = document.querySelector(".tweet-list-section");



for (let tweet_count = 0; tweet_count < 10; tweet_count++) {
  
  let TweetComponent = document.createElement("div");
  TweetComponent.classList.add('tweet');
  
  let Tweet_UserDetails_Layer = document.createElement("div");
  Tweet_UserDetails_Layer.classList.add("tweet-user-details-layer");

  let TweetProfile = document.createElement("img");
  TweetProfile.classList.add("tweet-profile-image");
  
  TweetProfile.src = 'profile.png';

  let Tweet_FullName = document.createElement("p");
  Tweet_FullName.classList.add('tweet-full-name');

  Tweet_FullName.textContent = "Yash Sehgal";
  
  let Tweet_Username = document.createElement("p");
  Tweet_Username.classList.add("tweet-username");

  Tweet_Username.textContent = "@yashsehgal";
  
  let Tweet_Content = document.createElement("p");
  Tweet_Content.classList.add('tweet-content');

  Tweet_Content.textContent = "This is my first tweet of twitter clone :)";



  let Tweet_ActionLayer = document.createElement("div");
  Tweet_ActionLayer.classList.add("tweet-action-layer");
  
  Tweet_ActionLayer.innerHTML = `
    <ul>
      <li>
        <i class="far fa-comment"></i>
      </li>
      <li>
        <i class="fas fa-retweet"></i>
      </li>
      <li>
        <i class="far fa-heart"></i>
      </li>
      <li>
        <i class="fas fa-share"></i>
      </li>
    </ul>
  `;

  // Appending all the components in the parent tweet container

  Tweet_UserDetails_Layer.append(TweetProfile);
  Tweet_UserDetails_Layer.append(Tweet_FullName);
  Tweet_UserDetails_Layer.append(Tweet_Username);

  TweetComponent.append(Tweet_UserDetails_Layer)
  TweetComponent.append(Tweet_Content);
  TweetComponent.append(Tweet_ActionLayer);

  TweetListSection.append(TweetComponent);

}

MainBodyContainer.append(HomeTitle)
MainBodyContainer.append(CreateTweetSection)
MainBodyContainer.append(TweetListSection)