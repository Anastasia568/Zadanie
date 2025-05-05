import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const proffesions = [
    '',
    'Программист',
    'Тестировщик',
    'Аналитик'
  ];

  return (
    <>
      <h1>Форма</h1>
      <form action="" encType="multipart/form-data">
        <p>ФИО</p>
        <input type="text" name="FIO" maxLength="35"/>
        <p>Почта</p>
        <input type="email" name="Mail" id=""/>
        <p>Пароль для ЛК</p>
        <input type="password" name="" id=""/>
        <p>Биография</p>
        <textarea name="BIO" id="" rows="5"></textarea>
        <p>Желаемая вакансия</p>
        <select name="prof" id="">
          {proffesions.map((pr,ind)=>
            <option value={ind}>{pr}</option>
          )}
        </select>
        <p>Владение языками</p>
        <input type="checkbox" name="" id="C"/>С# <br/><input type="checkbox" name="" id="CPP"/>C++ <br/><input type="checkbox" name="" id="JS"/>JS <br/><input type="checkbox" name="" id="PY"/>Python
        <br/>
        <p>Дополнительный навык:</p>
        <input type="radio" name="" id=""/>Владение иностранным языком  <br/>
        <input type="radio" name="" id=""/>Безошибочность <br/>
        <input type="radio" name="" id=""/>Коммуникативность  <br/><br/>
        <p>Приложите документы</p>
        <input type="file" name="" id=""/>
        <br/>
        <input type="image" src="a.jpg" width="200"/>
        <br/><br/>
        <input type="reset" value="Очистить форму"/>
        <input type="submit" value="Отправить"/>
        <br/><br/>
        <input type="hidden" name="something" value="Скрытое значение"/>
    </form>
        
    </>
  )
}

export default App
