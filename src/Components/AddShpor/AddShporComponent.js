import React, {useState} from "react";
import CSS from "./AddShpor.Module.css";
import { NavLink } from "react-router-dom";

const AddShporComponent = () => {
  const fileQuestions = React.createRef();
  const fileAnswers = React.createRef();
  const textData = React.createRef();
  const textType = React.createRef();
  const textDescription = React.createRef();
  const data = new FormData();
  const [questionsCount, setQuestionsCount] = useState(0);
  const [answersCount, setAnswersCount] = useState(0);
  const PushShpor = () => {
    if (
      fileQuestions.current.files.length === 0 ||
      fileAnswers.current.files.length === 0 ||
      textData.current.value === '' ||
      textType.current.value === ''
    ) {
      return;
    }
    for(let i = 0; i < fileQuestions.current.files.length; i++){
      data.append("file", fileQuestions.current.files[i]);
    }
    for(let i = 0; i < fileAnswers.current.files.length; i++){
      data.append("file", fileAnswers.current.files[i]);
    }
    data.append("file", textData.current.value);
    data.append("file", textType.current.value);
    if(textDescription.current.value){
      data.append("file", textDescription.current.value);
    }
    console.log(data);
    fetch("http://shporhub/api/index.php/?method=uploadShpora", {
      method: "POST",
      body: data
    });
  };
  return (
    <div className={CSS.wrapper}>
      <label className={CSS.upload_files} htmlFor={CSS.shporImagesQuestions}>
        {`Загрузить фотографии вариантов (${questionsCount})`} 
      </label>
      <input
        type="file"
        name="imageFile"
        accept="images/*"
        id={CSS.shporImagesQuestions}
        multiple
        ref={fileQuestions}
        onChange={() => {console.log('aaaa'); setQuestionsCount(fileQuestions.current.files.length)}}
      />
      <label className={CSS.upload_files} htmlFor={CSS.shporImagesAnswers}>
      {`Загрузить фотографии ответов (${answersCount})`}
      </label>
      <input
        type="file"
        name="imageFile"
        accept="images/*"
        id={CSS.shporImagesAnswers}
        multiple
        ref={fileAnswers}
        onChange={() => setAnswersCount(fileAnswers.current.files.length)}
      />
      <label className={CSS.title}>Время проведения</label>
      <input
        ref={textData}
        className={CSS.input_text}
        type="data"
        min="2010-01-01"
        max="2021-12-31"
      />
      <label className={CSS.title}>Тип работы</label>
      <input ref={textType} className={CSS.input_text} type="text" />
      <label className={CSS.title}>Подробности работы</label>
      <input ref={textDescription} className={CSS.input_text} type="text" />
      <button onClick={PushShpor} className={CSS.standartButton}>
        Отправить на модерацию
      </button>
    </div>
  );
};

export default AddShporComponent;
