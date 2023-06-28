import '../App.css';
const REGISTER= () => {

    return(
        <div id="register">
        <form>
    
        <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="Username"/>
      <label for="floatingInput">Username</label>
    </div>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

   
    <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    
  </form>
    </div>
    );
}

export default REGISTER;