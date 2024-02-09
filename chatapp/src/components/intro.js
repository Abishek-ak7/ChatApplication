import React from 'react';
import Sidebar from './sidebar';
import Chat from './chat';

const Intro = () => {
  return (
    <div style={{ display: 'flex',flexDirection:'row' }}>
      <Sidebar />
      <Chat/>
    </div>
  );
}

export default Intro;
