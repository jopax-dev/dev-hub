export default async function handler (req, res) {
  const { getChannelId, getVideosList } = require('./services/youtube')

  const channelId = await getChannelId({ channelName: 'mouredev' })
  const videos = await getVideosList({ channelId })

  res.status(200).json(videos)
}
