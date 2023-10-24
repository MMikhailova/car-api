import express from 'express';

import userControllers from '../controllers/user.js';

const router = express.Router();

router.get('/register', userControllers.signUpForm);
router.post('/register', userControllers.signUp);
router.post('/login', userControllers.logIn);
router.get('/login',userControllers.loginForm );
router.get('/logout', userControllers.logout);


export default router;