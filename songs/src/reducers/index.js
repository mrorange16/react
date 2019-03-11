import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:00' },
    { title: 'Despacito', duration: '2:30' },
    { title: 'Macarena', duration: '3:15' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
