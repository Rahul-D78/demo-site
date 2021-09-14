const express = require('express');

const { getPosts, getPost, createPost, updatePost, likePost, deletePost } = require('../controllers/posts.js');

const PostController = require('../controllers/posts');

const router = express.Router();

router.get('/', PostController.getPosts);
router.post('/', PostController.createPost);
// router.get('/:id', getPost.);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

module.exports = router;