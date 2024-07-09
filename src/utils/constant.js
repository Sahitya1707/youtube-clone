// const apiKey = `${process.env.YOUTUTBE_CLONE_API_KEY}`;
const apiKey = "AIzaSyCWlUAospZBl54g0WDdygw - jHPNXmtmBuM";
export const youtubePopularApiUrl = function (chart, maxResults) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&regionCode=CA&chart=${chart}&maxResults=${maxResults}&key=${apiKey}`;
};
// this given api is for getting the image of the channel
export const getChannelInfoApi = function (channelId) {
  return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${apiKey}`;
};

// Individual data
export const individualVideoData = function (videoId) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}
`;
};

// Get video comment
export const getVideoComment = function (videoId) {
  return `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`;
};

// get single video data
export const getSingleVideoData = (videoId) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey} 
`;
};

// get video suggestion for each item

export const videoSuggestion = (categoryId, region) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${region}&videoCategoryId=${categoryId}&key=${apiKey}`;
};

// Const Search function
export const getVideoSearch = (searchQuery, maxResult, type) => {
  console.log(searchQuery);
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=${type}&maxResult=${maxResult}&q=${searchQuery}&key=${apiKey}`;
};
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=hi&key=[YOUR_API_KEY] HTTP/1.1
