const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');


const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/', authController.logout_get);

router.get('/authUser', requireAuth);
router.get('/checkUser', checkUser);

module.exports = router;