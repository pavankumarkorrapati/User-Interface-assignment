import { Outlet,Link } from "react-router-dom";
import UserContext from "../context/usercontext";
import {useContext, Fragment} from "react"

const Navbar= () => {
  const {user} = useContext(UserContext);

  const authenticated = (
    <Fragment>
      <h2>Hi,{ user.username } </h2>
    </Fragment>
  )

  const guest = (
    <Fragment>
      <h2>Welcome!</h2>
    </Fragment>
  )

    return (
    <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
     <div class="container-fluid">
     { user.authenticated ? authenticated:guest}
    <Link className="navbar-brand" to="/">Connect App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <Link className="nav-link" to="/signup">Sign-up</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/Signin">Login</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/Profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/postcomment">Comment</Link>
        </li>
      </ul>
    
      
    </div>
  </div>
</nav>
{ user.authenticated ? authenticated : guest }
<Outlet/>
    </div>
    );
}

export default Navbar;