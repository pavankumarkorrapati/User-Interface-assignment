import React, { useState } from "react";
import { fetchData } from "../../main";
import { useNavigate } from "react-router-dom";

const COMMENT = () => {
  const navigate = useNavigate();
  const [commentState, setCommentState] = useState("");

  const onChange = (e) => setCommentState(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(commentState);
    try {
      const data = await fetchData("/user/createpost", {
        COMMENT,
        username: ""
      }, "POST");
      if (!data.message) {
        console.log(data);
        navigate("/Profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="center-box w-25 m-auto mt-5">
      <div className="form-box border p-3">
        <h2 className="text-center">Create Post</h2>
        <form onSubmit={onSubmit}>
          <div className="form-groupone">
            <label htmlFor="description">Post</label>
            <input
              type="text"
              className="form-control"
              id="comment"
              name="comment"
              placeholder="Enter your comment"
              onChange={onChange}
              value={commentState}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="ADD Comment" />
        </form>
      </div>
    </div>
  );
};

export default COMMENT;
