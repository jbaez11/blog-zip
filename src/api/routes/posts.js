const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postController');

router.get('/', postsController.getAllPosts);
router.get('/:postId', postsController.getPostById);
router.post('/', postsController.createPost);
router.put('/:postId', postsController.updatePost);
router.delete('/:postId', postsController.deactivatePost);

module.exports = router;
