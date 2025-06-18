import { NextFunction, Request, Response } from 'express'

export function validateName(req: Request, res: Response, next: NextFunction) {
	if (!req.body || typeof req.body !== 'object') {
		res.status(400).json({ message: 'Request body must be an object' })
	}

	const { name } = req.body

	if (typeof name !== 'string' || !name.trim()) {
		res.status(400).json({ message: 'Valid name is required' })
		return
	}

	next()
}
