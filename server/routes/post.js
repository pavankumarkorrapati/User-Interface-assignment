const express = require("express");
const Post = require('../models/post');
const router = express.Router();

router.post('/createpost', async (req, res) => {
  try {
    const post = await Post.create({
      comment: req.body.comment
    });
    res.send({post});
  } catch(error) {
    res.status(500).send({message: error.message});
  }
});

router.post('/getuser', async (req, res) => {
  try {
    const posts = await Post.find({ user: req.body.user });
    res.send(posts);
  } catch(error) {
    res.status(500).send({message: error.message});
  }
});

router.put('/update', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.body.id, { comment: req.body.newText }, { new: true });
    res.send({...post, password: undefined});
  } catch(error) {
    res.status(500).send({message: error.message});
  }
});

router.delete('/delete', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.body.id);
    res.send({ success: "Post successfully deleted" });
  } catch(error) {
    res.status(500).send({message: error.message});
  }
});

module.exports = router;
