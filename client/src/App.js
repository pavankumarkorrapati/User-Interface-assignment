import './App.css';
import NAVBAR from './main content/navbar';
import REGISTER from './main content/signup';
import SIGNIN from './main content/Signin';

function App() {
  return (
    
    <div className="App">
     <NAVBAR />
     
     <h1>Please register here</h1>
     <REGISTER />
     <br/>
     <h1>Please Sign In</h1>
     <SIGNIN />
    </div>
  );
}

export default App;