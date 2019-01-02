import { combineReducers } from 'redux';

const songList = () => {
  return  [
      { id: 1, title: 'song 1', duration: '1' },
      { id: 2, title: 'song 2', duration: '2' },
      { id: 3, title: 'song 3', duration: '3' },
      { id: 4, title: 'song 4', duration: '4' },
    ]
}

const selectedSong = (state = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  songs: songList,
  song: selectedSong
});

