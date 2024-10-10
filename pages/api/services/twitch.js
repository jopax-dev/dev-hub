const getToken = async ({ clientId }) => {
  const clientSecret = process.env.CLIENTSECRET
  const grantType = 'client_credentials'

  const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}`

  const response = await fetch(url, { method: 'POST' })
  const data = await response.json()

  const accessToken = data.access_token
  return accessToken
}

const getUserId = async ({ token, clientId, userName }) => {
  const userUrl = `https://api.twitch.tv/helix/users?login=${userName}`

  const response = await fetch(userUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-Id': `${clientId}`
    }
  })
  const { data } = await response.json()
  const streamerId = data[0].id
  return streamerId
}

const getVideos = async ({ clientId, token, streamerId, numVideos }) => {
  const url = `https://api.twitch.tv/helix/videos?user_id=${streamerId}&first=${numVideos}`

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-Id': `${clientId}`
    }
  })
  const data = await response.json()
  // console.log('videos ', data)
  const videos = data.data.map(video => {
    const imageUrl = video.thumbnail_url.replace('%{width}', 350).replace('%{height}', 143)
    return (
      {
        title: video.title,
        url: video.url,
        imageUrl
      }
    )
  })
  return videos
}

const getStreamData = async ({ token, clientId, streamerId }) => {
  const userUrl = `https://api.twitch.tv/helix/streams?user_id=${streamerId}`

  const response = await fetch(userUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Client-Id': `${clientId}`
    }
  })
  const { data } = await response.json()
  if (Object.keys(data).length !== 0) {
    // console.log(data)
    const streamData = { live: data[0].type, viewers: data[0].viewer_count }
    return streamData
  }
}

module.exports = { getToken, getUserId, getVideos, getStreamData }
