chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { youtube_video_id } = request;
  addShortButton(youtube_video_id);
});

const addShortButton = () => {
  // Add a button to YT Shorts
  const actionsMenu = document.querySelector("#actions");
  console.log(actionsMenu);
  const yt_button = document.createElement("button");
};
