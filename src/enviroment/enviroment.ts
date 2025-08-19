export const enviroment = {
  production: false
}

export const SpotifyConfiguration = {
  clientId: '42fa88b264f0423a8010f41bc780e143',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  apiTokenEndpoint: 'https://accounts.spotify.com/api/token',
  redirectUrl: 'http://127.0.0.1:4200/login',
  scopes: [
    'user-read-currently-playing', //Musica que esta tocando
    'user-read-recently-played', //Musicas que foram tocadas recentemente
    'user-read-playback-state', //Estado da reproduçao
    'user-top-read', //Top artistas e musicas
    'user-modify-playback-state', //Controlar a reproduçao
    'user-library-read', //Ler biblioteca de musicas
    'playlist-read-private', //Ler playlists privadas
    'playlist-read-collaborative' //Ler playlists colaborativas
  ]
}