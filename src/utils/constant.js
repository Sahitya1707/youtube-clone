// const apiKey = `AIzaSyD2kXwjvtM10uxaytH-5QSAhpuJRPF4r-g`;
const apiKey = "AIzaSyCWlUAospZBl54g0WDdygw - jHPNXmtmBuM";
// const apiKey = "AIzaSyC2kaXqk86hg5vsdgCYWoZ6ME8WNu1jWJo";
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
  // console.log(searchQuery);
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${searchQuery}&type=${type}&key=${apiKey}`;
};
// get channel data using user name
export const getChannelDataWithId = (channelId) => {
  return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${channelId}&key=${apiKey}`;
};

// get channel Videos
export const getChannelHomeVideo = (channelId, maxResult, order) => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResult}&order=${order}&key=${apiKey}`;
};
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY] HTTP/1.1

// get channel playlist
export const getChannelPlaylist = (channelId, maxResult) => {
  return `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=${maxResult}&key=${apiKey}
`;
};

// get playlist items
export const getPlaylistItems = (playListId) => {
  return `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2Csnippet%2CcontentDetails&playlistId=${playListId}&key=${apiKey}`;
};
// https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2Csnippet%2CcontentDetails&playlistId=PLte8jfPtVzvpBBiZE-Il4jfoBs5gTSYW6&key=[YOUR_API_KEY] HTTP/1.1
