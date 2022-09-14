import React from "react";
import './assets/Learn.css';
import './assets/button.css';

const Learn = () => {
    const [isOpen, setOpen] = React.useState(false);
    //set state to not clicked
  
    const handleClick = () => {
      //onclick or onOpened send to contact form
      setOpen(!isOpen);
      console.log('works');
      
    };
  
    return (
      <div id="container">
        <button
        class="btn-transition"
        data-toggle="opened"
        className="button-23" role="button"
        type="button" onClick={handleClick}>
          Learn more
        </button>
        {/*add content link here*/}
      </div>
    );
  };
  
  export default Learn;