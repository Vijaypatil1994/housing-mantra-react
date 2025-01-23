import React, { useState } from 'react';

function Sidebar() {
  
  return (
    <>
       <div class="sidebar" id="side_nav">
      <div class="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
        <h2 class="fs-5"><span class=" text-dark px-2 me-2"><i
              class="fa-solid fa-house" style={{color:'#f35429'}} ></i></span> <span class="text-dark">Housing Mantra</span></h2><br />

        <button class="btn d-md-none d-block close-btn px-1 py-0 text-white"><i class="fal fa-stream"></i></button>
      </div>

      <ul class="list-unstyled px-2">
        <li class="active"><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-signal"></i>Stats</a></li>
        <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-user-group"></i>Admin</a></li>
        <li class="active"><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-user-group"></i>Agent</a></li>
        <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-user"></i>Owner</a></li>
        <li class="active"><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-user-group"></i>Team</a></li>
        <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-laptop-code"></i>Developer</a></li>
        <li class="active"><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-building"></i>Project</a></li>
        <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-building-shield"></i>Property</a></li>
        <li class="active"><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-headphones"></i>Listing</a></li>
        <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-user-check"></i>Leads</a></li>
        <li class="active"><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-user"></i>customer</a></li>
        <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-chart-line"></i>Analytics</a></li>
        <li class="active"><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-dollar-sign"></i>Sales</a></li>
        <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-dollar-sign"></i>Income Generated</a></li>
        <li class="active"><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-building"></i>Site Visit</a></li>
        <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i
              class="fa-solid fa-bookmark"></i>Booking</a>

        </li>


      </ul>


    </div>
   
    </>
  );
}
export default Sidebar;