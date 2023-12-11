// Create web server

// Import express module
const express = require('express');
const router = express.Router();

// Import comment controller
const commentController = require('../controllers/commentController');

// Import authentication middleware
const auth = require('../middleware/auth');

// Import authorization middleware
const authz = require('../middleware/authz');

// Route for getting all comments of a post
router.get('/:id', auth, commentController.getComments);

// Route for creating a comment
router.post('/:id', auth, commentController.createComment);

// Route for updating a comment
router.put('/:id', auth, authz, commentController.updateComment);

// Route for deleting a comment
router.delete('/:id', auth, authz, commentController.deleteComment);

module.exports = router;