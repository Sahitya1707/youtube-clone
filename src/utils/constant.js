// const apiKey = `${process.env.YOUTUTBE_CLONE_API_KEY}`;
const apiKey = "AIzaSyCWlUAospZBl54g0WDdygw - jHPNXmtmBuM";
export const youtubePopularApiUrl = function (chart, maxResults) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&regios=NP&chart=${chart}&maxResults=${maxResults}&key=${apiKey}`;
};
// `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}`;
// Api key
// key = 'AIzaSyCWlUAospZBl54g0WDdygw - jHPNXmtmBuM';
// key = API_KEY;
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyCWlUAospZBl54g0WDdygw - jHPNXmtmBuM
