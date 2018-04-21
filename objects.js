var playlist = {artist: "song"}

function updatePlaylist(playlistName, artistName, songName) {
  return playlistName[artistName] = songName
}

function removeFromPlaylist(playlistName, artistName) {
  return playlistName.delete(artistName)
}