import React from 'react'

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
//     <div class="container">
//   <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//     <div class="col-md-4 d-flex align-items-center">
//       <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
//         <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
//       </a>
//       <span class="mb-3 mb-md-0 text-neutral-500 ">&copy; 2024 Company, Inc</span>
//     </div>

//     <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
//       <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
//       <li class="ms-3"><a class="text-body-secondary" href="#"><svg class=" text-white " fill='green' width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
//       <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
//     </ul>

//   </footer>
// </div>

<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      </a>
      <span class="mb-3 mb-md-0 text-neutral-500">&copy; 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex " >
      <li className='ms-3'> 
        <a href="#">
          <FaInstagram size={24} color="white" />
        </a>
      </li>

      <li className='ms-3'> 
        <a href="#">
          <FaLinkedin size={24} color="white" />
        </a>
      </li>

      <li className='ms-3'> 
        <a href="#">
          <FaTwitter size={24} color="white" />
        </a>
      </li>

     

    </ul>
  </footer>
</div>
  )
}


export default Footer