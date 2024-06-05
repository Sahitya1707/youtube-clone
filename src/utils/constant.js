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
  return `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}
`;
};

// Get video comment
export const getVideoComment = function (videoId) {
  return `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`;
};
// https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY] HTTP/1.1

//  <iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/SrWHnSDQyps\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
