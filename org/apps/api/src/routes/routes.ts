import { Router } from 'express';
import { prisma } from '../lib/prisma';

const router = Router();

router.post('/users', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
        email,
      } as any,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the user.' });
  }
});

export default router;
