import { data } from '../../data/data';

export default function handler(req, res) {
  res.status(200).json({ userInfo: data })
}
