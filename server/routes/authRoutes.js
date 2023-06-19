const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.get('/authUser', requireAuth);
router.get('/checkUser', checkUser);
router.get('/resetPassword/:id/:token', authController.reset_password_get);
router.post('/resetPassword/:id/:token', authController.reset_password_post);
router.post('/forgotPassword', authController.forgot_password_post);

module.exports = router;