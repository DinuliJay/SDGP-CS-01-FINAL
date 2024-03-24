import React from 'react';

function Contact() {
  return (
    <div className='container'>
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='Type your email' required/>
            <input placeholder='Write Here' name='message'></input>
            <input type='submit' value='Send'/>
        </form>

    </div>
    </div>
  );
}

export default Contact;
