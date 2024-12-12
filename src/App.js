import React, { useState, useEffect } from "react";
import names from '../src/model/name.json';
import './App.css';

const Home = ({ navigate }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    navigate(`/about?value=${encodeURIComponent(inputValue)}`);
  };

  return (
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
  );
};

const About = ({ route }) => {
  const queryParams = new URLSearchParams(route.split("?")[1]);
  const value = queryParams.get("value"); 

  var get_item;
  if(value)
      {
           get_item = names.filter(i => {
              return i.secretcode === value
          })
      }

  return (

<div className="full-screen-background" >
<div className='User-secret-key1' >
<h1>Secret Santa hero </h1>
<img src='https://www.opensourcetext.org/wp-content/uploads/2020/11/ssct-4.png' className='image-src' alt="ixaiuvxa" />

<h1   >{get_item[0].name} </h1>
</div>
</div>
  );
};

const App = () => {
  const [route, setRoute] = useState(window.location.pathname + window.location.search);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname + window.location.search);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
      </nav>
      <main>
        {route.startsWith("/") && route === "/" && <Home navigate={navigate} />}
        {route.startsWith("/about") && <About route={route} />}
      </main>
    </div>
  );
};

export default App;
