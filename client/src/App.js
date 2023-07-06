import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NAVBAR from './main content/pages/navbar';
import REGISTER from './main content/pages/signup';
import SIGNIN from './main content/pages/Signin';
import COMMENT from './main content/pages/postcomment';
import PROFILE from './main content/pages/Profile';
import {UserProvider} from './main content/context/usercontext'

function App() {
 

const url = 'http://localhost:3000/user/register';

  return (
    
<div className="App">
<UserProvider>
<BrowserRouter>
<Routes>
<Route path="/" element={<NAVBAR />}>
<Route path="Profile" element={<PROFILE />} />
<Route path="postcomment" element={<COMMENT postcomment={COMMENT}/>}/>
<Route path="postcomment" element={<COMMENT />} />
<Route path="signup" element={<REGISTER />} />
<Route path="Signin" element={<SIGNIN />} />
</Route> 

</Routes>

</BrowserRouter>
</UserProvider>
</div>
  );
}

export default App;