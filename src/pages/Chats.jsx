import React from 'react';
import { NavLink } from 'react-router-dom';



function Chats() {

  return (

    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-lg-5">
          <a class="navbar-brand" href="#!">Инженерные расчеты</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item m-1 "> <NavLink to={'/Blog'}> Глушение </NavLink> </li>
              <li class="nav-item m-2"> <NavLink to={'/Chats'}> Цементаж </NavLink> </li>
              <li class="nav-item m-1"> <NavLink to={'/Profiles'}> Буровые растворы </NavLink> </li>
              <li class="nav-item m-1"> <NavLink to={'/Metric'}> Перевод величин </NavLink> </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>2</div>
      <div class="text-primary">This is default primary text</div>
    </>
  )
}

export default Chats;
