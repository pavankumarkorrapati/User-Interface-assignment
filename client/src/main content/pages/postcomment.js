import {useState} from "react"
import {fetchData} from "../../main"
import {useNavigate} from "react-router-dom";

const COMMENT= () => {

  const fetchData = async (url, data, method) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
  const Comment = () => {
    const navigate = useNavigate();
  
    const [Comment, setUser] = useState({
      comment:""
    });
  
    const { comment } = Comment;
  
    const onChange = (e) => setUser({ ...Comment, [e.target.name]: e.target.value })
  
    const onSubmit = (e) => { 
      e.preventDefault();
      console.log(Comment);
      fetchData("/user/createpost", {
       
      }, "POST")
        .then((data) => {
          if (!data.message) {
            console.log(data);
            navigate("/Profile");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
}
  
    return (
      <div class="center-box w-25 m-auto mt-5">
    <div class="form-box border p-3">
      <h2 class="text-center">Create Post</h2>
      <form >
       
        <div class="form-groupone">
          <label htmlFor="description">Post</label>
          <textarea 
          className="form-control" 
          style={{height:'250px'}}
         id="comment" 
         name="comment"
          placeholder="Enter your comment"
          
          value={COMMENT}
          required
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary" value="ADD Comment" />
      </form>
    </div>
  </div>


 );
}

export default COMMENT;