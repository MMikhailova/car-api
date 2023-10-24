import User from '../models/user.js'
import bcrypt from 'bcryptjs';
import hashPassword from '../utils/hashPassword.js';
import matchPasswords from '../utils/matchPasswords.js';
import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import jwt from 'jsonwebtoken';

const userControllers = {
    signUpForm: (req, res) => {
        res.status(200).render('form', {
            isAuthorised: req.cookies.token,
            title: `Sign up`,
            action: `/register`,
            btnText: `Sign Up`
        });
    },
    signUp: (req, res) => {
        const { email, password, rePassword } = req.body;
        // check if email exist
        const emailExist = User.getUserByEmail(email);
        if (emailExist) {
            res.status(400).render('message', {
                title: `Not valid email`,
                message: `Sorry, this password is already taken`,
                redirectPath: `/register`
            });
        } else {
            const isEmailValid = validateEmail(email);
            const isPasswordValid = validatePassword(password);
            const isPasswordsMatch = matchPasswords(password, rePassword);
        
            if (isEmailValid & isPasswordValid & isPasswordsMatch) {
                const hashedPassword = hashPassword(password);
                const user = new User(email, hashedPassword);
                user.addUser();
                const token = jwt.sign(
                    { user: emailExist },
                    process.env.TOKEN_ACCESS_SECRET
                );
                console.log(token);
                res.cookie('token', token);
                res.status(302).redirect('/login');
            } else {
                res.status(409).render('message', {
                    title: 'Not valid',
                    message: 'the email or the password is not valid ',
                    redirectPath: '/register'
                });
            }
        }
    },
    loginForm: (req, res) => {
        res.status(200).render('form', {
            isAuthorised: req.cookies.token,
            title: `Sign in`,
            action: `/login`,
            btnText: `Sign In`
        });
    },
    logIn: (req, res) => {
        const { email, password } = req.body;
        // check if email exists
        const emailExist = User.getUserByEmail(email);
        if (!emailExist) {
            res.status(401).render('message', {
                title: 'No valid account',
                message: `Please sign up first`,
                redirectPath: '/register'
            });
        } else {
            // check password
            bcrypt.compare(password, emailExist.password, (err, isValid) => {
                if (isValid) {
                    res.status(302).redirect('/');
                } else {
                    res.status(409).render('message', {
                        title: 'log in failed',
                        message: 'email or password is not correct',
                        redirectPath: '/login'
                    });
                }
            });
        }
    },
    logout: (req, res) => {
        res.clearCookie('token');
        res.redirect('/');
    }
};
export default userControllers;