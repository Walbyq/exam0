import React from 'react';
import CSS from './AddShpor.Module.css';
import { NavLink } from 'react-router-dom';

class AddShporComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div className={CSS.wrapper}>
            <input type="file"/>
            <button className={CSS.standartButton}>Сохранить изменения</button>
        </div>
    );
  }
}

export default AddShporComponent;