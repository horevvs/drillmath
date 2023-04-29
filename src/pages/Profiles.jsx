import React from 'react';
import { NavLink } from 'react-router-dom';
import './App2.css'


function Profiles() {

  const divStyle = {
    height: '100vh'
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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



      <div style={divStyle} class="bg-info mx-5 bg-opacity-25 ">
        <p class="mx-5 py-3 fs-5"> 1. Расчет  гидростатического давления</p>

        <form lass="">
          <div class="form-group mx-5 pt-2 w-25">
            <label for="formGroupExampleInput">Плотность промывочной жидкости (г/см<sup>3</sup>) </label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите значение" />
          </div>
          <div class="form-group mx-5  pt-2 w-25">
            <label for="formGroupExampleInput2 pt-5" >Глубина (м) </label>
            <input type="text" class="form-control " id="formGroupExampleInput2" placeholder="Введите значение" />
          </div>
          <div class="form-group mx-5 pt-2  w-25">
            <label for="formGroupExampleInput2">Глубина (м) </label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Введите значение" />
          </div>
        </form>



      </div>
    </>
  )
}

export default Profiles;
