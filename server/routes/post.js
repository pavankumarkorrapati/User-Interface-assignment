
const express = require("express");
const Post = require('../models/post'); 
const router = express.Router();


router
 .post('/comment', async (req, res) => {
    try {
      const post = await Post.comment(req.body.comment);
      res.send({comment:undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

 


module.exports = router;