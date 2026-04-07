import type { Response } from 'express';
import { memberProfileService } from '../services/profile';

export const getProfile = async (req: any, res: Response) => {
  try {
    const shop = await memberProfileService.getProfile(req.shopId);

    res.json({ data: shop });
  } catch (e) {
    res.status(400).json({ message: 'error occured' });
  }
};
