
import { connectToDatabase } from '../../mongodb';

const db = await connectToDatabase();
const tasksCollection = db.collection('general_tasks');

export default async function handler(req, res) {
  const { taskName, timeSpent } = req.body;
  const date = new Date().toISOString().split('T')[0];
  const history = {
    startTime: null,
    endTime: null,
    duration: null,
    stopHistory: {
      pauseStart: null,
      pauseEnd: null
    }
  };

  switch (req.method) {
    case 'POST':
      const result = await tasksCollection.insertOne({ taskName, timeSpent, date, history });
      res.status(201).json(result);
      break;
    default:
      res.status(405).json({ error: 'Método não permitido' });
  }
}