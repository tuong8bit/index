import React, { useState, useEffect } from 'react';
import { Icon } from 'antd/';
import {
  SyncOutlined,
  PauseCircleTwoTone,
  PlayCircleTwoTone
} from '@ant-design/icons';

const listAudio = [
  '[R] Condor.mp3',
  'Archangel.mp3',
  'Atlantis.mp3',
  'Awesome Violin Visualisation.mp3',
  'Heart of courage.mp3',
  'Protector of the Earth.mp3',
  'River flows in you.mp3',
  'Sky titans.mp3',
  'Strength Of A Thousand Men.mp3',
  'Victory.mp3'
]

const Player = () => {
  const [randomAudio, setRandomAudio] = useState(listAudio[Math.floor(Math.random() * 10)])
  const [audio, setAudio] = useState(new Audio(randomAudio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    },
    [playing]
  );
    
  const updateAudio = () => {
    setRandomAudio(listAudio[Math.floor(Math.random() * 10)])
    setAudio(new Audio(randomAudio));
    setPlaying(!playing)
    audio.load();
  }

  return (
    <div className="d-flex">
      <span onClick={updateAudio} className="d-flex align-center"><SyncOutlined type="sync" style={{color: "#2F9BFF"}} spin={playing ? true : false} className="d-inline" /></span>
      <span onClick={toggle}>{playing ? (<p className="d-flex align-center">Playing <PauseCircleTwoTone className="pl-2" /></p>) : (<p className="d-flex align-center">Pause <PlayCircleTwoTone className="pl-2" /></p>)}</span>
    </div>
  );
};

export default Player;