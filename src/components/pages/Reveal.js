import React from 'react';
import '../../App.css';
import { useLocation } from 'react-router-dom';
import names from '../models/name.json';


const Reveal = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const inputValue = queryParams.get('value');

  var get_item;
  if(inputValue)
      {
           get_item = names.filter(i => {
              return i.secretcode === inputValue
          })
      }
  return (
    <>
     <div className="full-screen-background" >
      <div className='User-secret-key1' >
      <h1>Secret Santa hero </h1>
      <img src='https://www.opensourcetext.org/wp-content/uploads/2020/11/ssct-4.png' className='image-src' alt='loading'  />
      <input value={get_item[0].name}  className='Input-field1' disabled   /> 
      </div>
     </div>
    </>
  );
};

export default Reveal;