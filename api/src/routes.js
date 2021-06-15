import { Router } from 'express-router';

const routes = Router();

routes.post('/certifications', async (req, res) => {
  return res.json({ ok: true });
});

export default routes;