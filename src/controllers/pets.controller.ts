import { Request, Response } from 'express'
import {
	createPet,
	feedPet,
	getPet,
	healPet,
	playWithPet,
} from '../models/pet.model'

export const getPetHandler = (_req: Request, res: Response) => {
	const pet = getPet()

	if (!pet) {
		res.status(404).json({ message: 'Pet not created' })
		return
	}

	res.json(pet)
}

export function createPetHandler(req: Request, res: Response) {
	const { name } = req.body

	if (!name) {
		res.status(400).json({ message: 'Name is required' })
		return
	}

	const pet = createPet(name)
	res.status(201).json(pet)
}

export function feedPetHandler(_req: Request, res: Response) {
	if (!ensureAlive(res)) return
	feedPet()
	res.status(202).json(getPet())
}

export function healPetHandler(_req: Request, res: Response) {
	if (!ensureAlive(res)) return
	healPet()
	res.status(202).json(getPet())
}

export function playPetHandler(_req: Request, res: Response) {
	if (!ensureAlive(res)) return
	playWithPet()
	res.status(202).json(getPet())
}

function ensureAlive(res: Response) {
	const pet = getPet()

	if (!pet) {
		res.status(404).json({ message: 'Pet not created' })
		return false
	}

	if (pet.status === 'dead') {
		res.status(410).json({ message: 'Pet is dead' })
		return false
	}

	return true
}
