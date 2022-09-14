import * as React from 'react';
import './assets/Contact.css';
import './assets/button.css';


const Contact = () => {
  const [isOpen, setOpen] = React.useState(false);
  //set state to not clicked

  const handleClick = () => {
    //onclick or onOpened send to contact form
    setOpen(!isOpen);
  };

  return (
    <div id="containerC">
      <button
        className="button-23" role="button"
        type="button" onClick={handleClick}>
        Contact
      </button>
      {/*add content link here*/}
    </div>
  );
};

export default Contact;