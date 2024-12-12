import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Home = () => {
   
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Navigate to the 'reveal' route with the input value as a query parameter
    navigate(`/reveal?value=${inputValue}`);
  };



  return (
    <>
     <div className="full-screen-background" >

      <div  className='User-secret-key' >

        <input
          placeholder="Enter The Magic Code"
          className="Input-field"
          value={inputValue} 
          onChange={handleInputChange}
          style={{
            padding: '10px',
            width: '300px',
            fontSize: '16px',
            marginBottom: '10px',
          }}
        />
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
 
         </div>
     </div>
    </>
  );
};

export default Home;