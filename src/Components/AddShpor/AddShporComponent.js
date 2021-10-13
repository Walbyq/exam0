import React from 'react';
import CSS from './AddShpor.Module.css';
import { NavLink } from 'react-router-dom';

<<<<<<< Updated upstream
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
=======
const AddShporComponent = () => {
  const file = React.createRef();
  const data = new FormData();
  const PushShpor = () => {
    if (file.current.files[0]) {
      data.append('file', file.current.files[0]);
      fetch('http://shporhub/api/index.php/?method=uploadShpora', {
        method: 'POST',
        body: data
      });
    }
  };
  return (
    <div className={CSS.wrapper}>
      <input type="file" name="imageFile" ref={file} />
      <button onClick={PushShpor} className={CSS.standartButton}>Отправить шпору</button>
    </div>
  );
};
>>>>>>> Stashed changes

export default AddShporComponent;