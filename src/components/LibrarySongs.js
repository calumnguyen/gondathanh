import React from 'react';

const LibrarySongs = ({
  id,
  song,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const songSelectHandler = async () => {
    setCurrentSong(song);

    const newSongs = songs.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-container ${song.active ? 'selected' : ' '}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
