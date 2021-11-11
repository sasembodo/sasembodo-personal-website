import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar';
import Header from './components/header.js'
import Body from './components/body';
import Particles from 'react-particles-js';


function App() {
  return (
    <>
      <Particles
        params={{
          particles:{
            number:{
              value:60,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
              type:'square',
              stroke:{
                width:10,
                color:'#7fffd4'
              }
            },
            lineLinked:{
              color:'#7fffd4',
              width:3
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <Body/>
    </>
  );
}

export default App;
