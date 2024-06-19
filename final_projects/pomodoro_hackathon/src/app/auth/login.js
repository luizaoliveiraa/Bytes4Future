import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import { comparePassword, generateToken } from '../../../utils/auth';



export default async function login(req, res) {
  const { username, password } = req.body;
  await dbConnect();
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = generateToken(user);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
}