// const apiKey = `${process.env.YOUTUTBE_CLONE_API_KEY}`;
const apiKey = "AIzaSyCWlUAospZBl54g0WDdygw - jHPNXmtmBuM";
export const youtubePopularApiUrl = function (chart, maxResults) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&regionCode=CA&chart=${chart}&maxResults=${maxResults}&key=${apiKey}`;
};
// this given api is for getting the image of the channel
export const getChannelInfoApi = function (channelId) {
  return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId}&key=${apiKey}`;
};

// Individual data
export const individualVideoData = function (videoId) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=${apiKey}
`;
};

// Get video comment
export const getVideoComment = function (videoId) {
  return `https://www.googleapis.com/youtube/v3/comments?part=snippet&id=${videoId}&key=${apiKey}`;
};
