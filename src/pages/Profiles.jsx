import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App2.css'
import Button from 'react-bootstrap/Button';



function Profiles() {

  const [inputs, setInputs] = useState([])
  const [inputs2, setInputs2] = useState([])
  const [inputs3, setInputs3] = useState([]);
  const [inputs4, setInputs4] = useState([]);
  const [inputs5, setInputs5] = useState([]);

  const getValues = () => {
    const density = inputs;
    const depth = inputs2;
    const pressure = inputs3;
    const result = density * depth + pressure
    alert(density);
    alert(result);
  }


  const getValues2 = () => {
    const result2 = inputs4.replace(/\,/g, '.') / 10.197;
    alert(result2.toFixed(4) + 'Мпа');
  }


  const getValues3 = () => { 
    const result3 = inputs5.replace(/\,/g, '.') / 0.09806;
    alert(result3.toFixed(4) + ' кгс/см²');
  }

const divStyle = { 

  height: '2050px'
};

return (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <div class="container ">
        <a class="navbar-brand" href="#!">Инженерные расчеты</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item m-1 "> <NavLink to={'/Blog'}
              style={({ isActive }) =>
              ({
                color: isActive ? '#ffff' : '#ffff',
                textDecoration: isActive ? 'none' : 'none'
              })}>

              Глушение </NavLink> </li>

            <li class="nav-item m-1"> <NavLink to={'/Chats'}
              style={({ isActive }) => ({
                color: isActive ? '#ffff' : '#ffff',
                textDecoration: isActive ? 'none' : 'none'
              })}> Цементаж </NavLink> </li>

            <li class="nav-item m-1"> <NavLink to={'/Profiles'}
              style={({ isActive }) => ({
                color: isActive ? '#ffff' : '#ffff',
                textDecoration: isActive ? 'none' : 'none'
              })}> Буровые растворы </NavLink> </li>


            <li class="nav-item m-1"> <NavLink to={'/Metric'}
              style={({ isActive }) => ({
                color: isActive ? '#ffff' : '#ffff',
                textDecoration: isActive ? 'none' : 'none'
              })}
            > Перевод величин </NavLink> </li>
          </ul>
        </div>
      </div>
    </nav>



    <div style={divStyle} class="bg-info mx-5 bg-opacity-25   ">

      <p class="mx-5 py-3 fs-5"> 1. Расчет  гидростатического давления на забое</p>
      <div class="form-group mx-5 pt-2 w-25">
        <label for="formGroupExampleInput">Плотность промывочной жидкости (кг/м<sup>3</sup>) </label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите значение" value={inputs} onChange={(e) => setInputs(e.target.value)} />
      </div>

      <div class="form-group mx-5  pt-2 w-25">
        <label for="formGroupExampleInput2 pt-5" > Расчетная глубина (м) </label>
        <input type="text" class="form-control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs2} onChange={(e) => setInputs2(e.target.value)} />
      </div>

      <div class="form-group mx-5  pt-2 w-25">
        <label for="formGroupExampleInput2 pt-5" >Давление на устье (Атм) </label>
        <input type="text" class="form-control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs3} onChange={(e) => setInputs3(e.target.value)} />
      </div>

      <div class='mx-5 py-4'>
        <Button onClick={() => getValues()} variant="primary" size="sm" active>
          Выполнить расчет
        </Button>
      </div>

      <p class="mx-5 py-3 fs-5"> 3. Перевод Мпа в атмосферы и обратно</p>
      <div class="form-group mx-5  pt-2 w-25 ">
        <label for="formGroupExampleInput2 pt-5" >Значение в (кгс/см²) </label>
        <input type="text" class="form-control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs4} onChange={(e) => setInputs4(e.target.value)} />
        <div class=' py-4'>
          <Button onClick={() => getValues2()} variant="primary" size="sm" active>
            Выполнить перевод в Мпа
          </Button>
        </div>
      </div>

      <div class="form-group mx-5  pt-2 w-25 ">
        <label for="formGroupExampleInput2 pt-5" >Значение в (Мпа) </label>
        <input type="text" class="form-control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs5} onChange={(e) => setInputs5(e.target.value)} />
        <div class=' py-4'>
          <Button onClick={() => getValues3()} variant="primary" size="sm" active>
            Выполнить перевод в  кгс/см²
          </Button>
        </div>
      </div>

      <p class="mx-5 py-3 fs-5"> 1. Расчет  объёма скважины</p>

      <div class="form-group mx-5  pt-2 w-25 ">
        <label for="formGroupExampleInput2 pt-5" >Значение в (Мпа) </label>
        <input type="text" class="form-control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs5} onChange={(e) => setInputs5(e.target.value)} />
        <div class=' py-4'>
          <Button onClick={() => getValues3()} variant="primary" size="sm" active>
            Выполнить перевод в  кгс/см²
          </Button>
        </div>
      </div>
      <div class="form-group mx-5  pt-2 w-25 ">
        <label for="formGroupExampleInput2 pt-5" >Значение в (Мпа) </label>
        <input type="text" class="form-control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs5} onChange={(e) => setInputs5(e.target.value)} />
        <div class=' py-4'>
          <Button onClick={() => getValues3()} variant="primary" size="sm" active>
            Выполнить перевод в  кгс/см²
          </Button>
        </div>
      </div>
      <div class="form-group mx-5  pt-2 w-25 ">
        <label for="formGroupExampleInput2 pt-5" >Значение в (Мпа) </label>
        <input type="text" class="form-control " id="formGroupExampleInput2" placeholder="Введите значение" value={inputs5} onChange={(e) => setInputs5(e.target.value)} />
        <div class=' py-4'>
          <Button onClick={() => getValues3()} variant="primary" size="sm" active>
            Выполнить перевод в  кгс/см²
          </Button>
        </div>
      </div>

      


      

      

      

    </div>
  </>
)
  }

export default Profiles;
