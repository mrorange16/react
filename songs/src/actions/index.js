//Action creator
export const selectSong = song => {
  //Return an actio
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
