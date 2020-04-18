import React from 'react';

const Contact = () => {
    return (
        <section>
            <p>contact</p>
            <div className="container">
        <div className="col-md-8 main-section">
          <h1>Contact</h1>
          <form>
            <div className="form-group" id="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Farok Eyada" required="required" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="example@gmail.com" required="required" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="........" required="required" defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-default" id="submit-button">Submit</button>
          </form>
        </div>
        <div className="col-md-3 col-md-offset-1 sidebar">
          <h2>Connect with Me</h2>
          <a href="https://www.linkedin.com/in/alfarok-aleyada-480099105/"><img className="social img-responsive" src="style/images/linkedin.png" alt="LinkedIn" /></a>
          <a href="https://www.facebook.com/alfarok.radeaf?ref=bookmarks"><img className="social img-responsive" src="style/images/facebook.png" alt="Facebook" /></a>
          <a href="https://github.com/alfarokaleyada"><img className="social img-responsive" src="style/images/github.png" alt="GitHub" /></a>  
        </div>
      </div>
        </section>
    )
};

export default Contact;