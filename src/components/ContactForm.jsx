import React from 'react'
import "./ContactForm.css";

export default function ContactForm(){
  return(
   <div id='cont' className='mt-10'>
      <main>
       <div class="title">Contact 
       <span className='bg-gradient-to-r from-emerald-500 to bg-emerald-600  text-transparent bg-clip-text'> Us </span>
       </div>
       <div class="title-info">We'll get back to you soon!</div>

       <form action="" method="" class="form">
           <div class="input-group">
               <input type="text" name="first_name" id="first-name" placeholder="First name"/>
               <label for="first-name">First name</label>
           </div>
           
           <div class="input-group">
               <input type="text" name="last_name" id="last-name" placeholder="Last Name"/>
               <label for="last-name">Last name</label>
           </div>

           <div class="input-group">
               <input type="email" name="e-mail" id="e-mail" placeholder="e-mail"/>
               <label for="e-mail">e-mail</label>
           </div>

           <div class="textarea-group">
               <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
               <label for="message">Message</label>
           </div>

           <div class="button-div">
               <button type="submit" >Send</button>
           </div>
       </form>
      </main>
   </div>
  )
}



