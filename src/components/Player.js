import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth0 } from '@auth0/auth0-react';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
  setSongs,
  setSongInfo,
  songInfo,
  timeUpdateHandler,
  songEndHandler,
}) => {
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const actveLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      actveLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        actveLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        actveLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
    }

    if (isPlaying) audioRef.current.play();
  };

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const { isAuthenticated } = useAuth0();

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className='track'
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type='range'
            onChange={dragHandler}
          />
          <div className='animate-track' style={trackAnim}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className='play-control'>
        <div className='liked-track'>
          <FontAwesomeIcon
            onClick={() => skipTrackHandler('skip-forward')}
            icon={faHeart}
            size='2x'
            className={`${isAuthenticated ? 'active-heart' : 'inactive-heart'}`}
          />

          <p>1000</p>
        </div>

        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          icon={faAngleLeft}
          size='2x'
          className='skip-back'
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size='2x'
          className='play'
          onClick={playSongHandler}
        />

        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          icon={faAngleRight}
          size='2x'
          className='skip-forward'
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default Player;
