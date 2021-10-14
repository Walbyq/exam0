import React from "react";
import CSS from "./FaqComponent.Module.css";
import { NavLink } from "react-router-dom";

const FaqComponent = () => {
  return (
    <div className={CSS.faq}>
      <label className={CSS.title}>О проекте</label>
      <label className={CSS.info}>
        Данный проект - удобное хранилище шпор для большинства предметов.
      </label>
      <label className={CSS.title}>Как добавить свою шпору?</label>
      <label className={CSS.info}>
        В главном меню выберите справа кнопку "опубликовать шпору", после чего
        загрузите все файлы вариантов по кнопке "загрузить фото вопросов" и все
        файлы ответов по кнопке "загрузить фото ответов", далее заполните три поля
        с текстом, что бы другие люди смогли понять, это они ищут или нет. Спасибо за помощь!
      </label>
      <label className={CSS.title}>Как отсюда выйти блин?</label>
      <label className={CSS.info}>
        Так-то логотип кликабельный.
      </label>
    </div>
  );
};

export default FaqComponent;
