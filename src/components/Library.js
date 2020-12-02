import React from 'react';
import LibrarySongs from './LibrarySongs';

const Library = ({
  libraryStatus,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ' '}`}>
      <h2>Library</h2>
      <button>X</button>
      <div className='library-song'>
        {songs.map((song) => (
          <LibrarySongs
            id={song.id}
            key={song.id}
            songs={songs}
            song={song}
            setSongs={setSongs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
