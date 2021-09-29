import React from 'react';
import Post from './Post/Post';

class MainPageUnLogComponent extends React.Component {
  render(){
    return (
        <div className="page">
            <label className="title">Последние обновления</label>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
  }
}

export default MainPageUnLogComponent;