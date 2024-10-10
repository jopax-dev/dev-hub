const { getVideos, getToken, getUserId } = require('../../pages/api/services/twitch')

const clientId = '2zcgka214rk4pjol2ylh903eywy0tb'
async function getTwitchData () {
  const token = await getToken({ clientId })
  const streamerId = await getUserId({ token, clientId, userName: 'rivers_gg' })
  const videos = await getVideos({ clientId, token, streamerId, numVideos: 3 })
  console.log(videos)
}

getTwitchData()
