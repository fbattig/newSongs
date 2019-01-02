import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <h1> PLEASE SELECT A SONG</h1>
  }
  return (
    <div>
      <h1>{song.title}</h1>
      <h1>{song.duration}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    song: state.song
  }
}

export default connect(mapStateToProps)(SongDetail);