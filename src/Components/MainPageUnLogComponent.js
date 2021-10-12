import React from 'react';
import Post from './Post/Post';

const MainPageUnLogComponent = () => {
    return (
        <div className="page">
            <label className="title">Последние обновления</label>
            <Post key={0}/>
            <Post key={1}/>
            <Post key={2}/>
            <Post key={3}/>
            <Post key={4}/>
            <Post key={5}/>
        </div>
    );
}

export default MainPageUnLogComponent;