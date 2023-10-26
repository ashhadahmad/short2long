const shorts_url = "https://www.youtube.com/shorts/";

let current_url = null;

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  // The current url exists and starts with youtube.com/shorts/
  if (tab.url && tab.url.startsWith(shorts_url)) {
    const youtube_video_id = tab.url.split("/")[4];
    if (current_url !== youtube_video_id) {
      current_url = youtube_video_id;
      await chrome.tabs.sendMessage(tabId, {
        youtube_video_id: current_url,
      });
    }
  }
});
