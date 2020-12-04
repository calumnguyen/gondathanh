import { v4 as uuidv4 } from 'uuid';

const songData = [
  {
    id: uuidv4(),
    name: 'Nhăng nhít nhảm nhí',
    artist: 'Gôn',
    cover:
      'https://res.cloudinary.com/calumnguyen/image/upload/v1606717629/gondathanh3_tac9v5.png',
    color: ['#FF0079', '#f297a7'],
    audio:
      'https://res.cloudinary.com/calumnguyen/video/upload/v1606715181/gondathanhep1_ywfhmh.mp3',
    active: true,
    likeCount: 999,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Tales of a Flowing Forest',
  //   artist: 'Leavv',
  //   cover:
  //     'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
  //   color: ['#329160', '#DF864D'],
  //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=9917',
  //   active: false,
  //   likeCount: 2,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Going Back',
  //   artist: 'Sworn',
  //   cover:
  //     'https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg',
  //   color: ['#2B4F8B', '#2F4F5A'],
  //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=10448',
  //   active: false,
  //   likeCount: 25,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tales of a Flowing Forest',
  //   artist: 'Leavv',
  //   cover:
  //     'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
  //   color: ['#329160', '#DF864D'],
  //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=9917',
  //   active: false,
  //   likeCount: 60,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Reflection',
  //   artist: 'Sworn',
  //   cover:
  //     'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
  //   color: ['#E27482', '#7D3376'],
  //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=10448',
  //   active: false,
  //   likeCount: 121,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tales of a Flowing Forest',
  //   artist: 'Leavv',
  //   cover:
  //     'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
  //   color: ['#329160', '#DF864D'],
  //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=9917',
  //   active: false,
  //   likeCount: 0,
  // },
]

// A temporary, local data store
// Eventually we'll get this data from a service
const likedSongs = songData.reduce((songLikeHash, song) => {
  // For now we'll pretend the user has only already liked the first song
  if (song.id === songData[0].id) {
    songLikeHash[song.id] = true
  } else {
    songLikeHash[song.id] = false
  }
  return songLikeHash
}, {})

// Returns true if this user likes the current song
// In the future we'd get this info from our server & make this async
export const getLike = ({ user, songId }) => {
  return likedSongs[songId]
}

// Mark this song as liked (or not) for the given user
// In the future we'd get this info from our server & make this async
export const saveLike = ({ user, songId, liked }) => {
  likedSongs[songId] = liked;
}

export const getSongs = () => songData
