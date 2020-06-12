import React,{ Component }from 'react';
import './style.css';


class Contactform extends Component {
  render(){
    return(
        <div className="centralize">
          <form className="contact-form">
            <div>
              <div className="full_width field">
                 <input className="input" type="text" name="name" id="name" placeholder="Pame" />
              </div>
              <div className="full_width field">
                <input className="input" type="text" name="phone" id="phone" placeholder="Phone Number" />
              </div>
              <div className="full_width field">
                <input className="input" type="text" name="email" id="email"  placeholder="Fancy Email" />
              </div>
              <div className="full_width field">
                <input className="input" type="text" name="subject" id="subject" placeholder="Give A Title" />
              </div>
              <div className="full_width field">
                <textarea name="msg" id="msg" placeholder="Write Your Feelings"></textarea>
              </div>
              <div className="full_width field">
                <button className="submit_btn">Submut</button>
              </div>
            </div>      
          </form>          
        </div>
    )
  }
}


export default Contactform;