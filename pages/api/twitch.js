export default async function handler (req, res) {
  const { getVideos, getToken, getUserId, getStreamData } = require('./services/twitch')

  const clientId = process.env.CLIENTID

  const token = await getToken({ clientId })
  const streamerId = await getUserId({ token, clientId, userName: 'cursosdedesarrollo' })
  const videos = await getVideos({ clientId, token, streamerId, numVideos: 3 })
  const streamerData = await getStreamData({ clientId, token, streamerId })

  res.status(200).json({ videos, streamerData })
}
