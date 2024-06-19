// utils/auth.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, {
    expiresIn: '1d',
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
