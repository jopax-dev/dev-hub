const API_KEY_DATA = process.env.YOUTUBEAPIKEY
const API_KEY_SHORT = process.env.YOUTUBEAPIKEY
const API_KEY_MEDIUM = process.env.YOUTUBEAPIKEY
const API_KEY_LONG = process.env.YOUTUBEAPIKEY
const MAX_RESULTS = 3

const getChannelId = async ({ channelName }) => {
  const URL = `https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&q=${channelName}&type=channel&key=${API_KEY_DATA}`

  const response = await fetch(URL)
  const { items } = await response.json()
  const channelId = items[0].id.channelId
  return channelId
}

const getVideoData = async ({ channelId, length, apiKey }) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&videoDuration=${length}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${apiKey}`

  const response = await fetch(url)
  const { items } = await response.json()
  // console.log(items)
  const data = items.map(video => {
    const { id, snippet } = video

    const date = new Date(snippet.publishedAt)
    const day = date.getUTCDate()
    const month = date.getUTCMonth() + 1
    const year = date.getUTCFullYear()
    const publishedDate = `${day}/${month}/${year}`
    return {
      videoId: id.videoId,
      title: snippet.title,
      img: snippet.thumbnails.medium.url,
      publishedDate
    }
  })

  return data
}

const getVideosList = async ({ channelId }) => {
  const videosList = []
  videosList.push(await getVideoData({ channelId, length: 'short', api_key: API_KEY_SHORT }))
  videosList.push(await getVideoData({ channelId, length: 'medium', api_key: API_KEY_MEDIUM }))
  videosList.push(await getVideoData({ channelId, length: 'long', api_key: API_KEY_LONG }))
  return videosList
}

module.exports = { getChannelId, getVideosList }
