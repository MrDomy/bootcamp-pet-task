export type TPetStatus = 'alive' | 'sick' | 'dead'

export interface IPet {
	name: string
	age: number
	health: number
	hunger: number
	mood: number
	status: TPetStatus
}

let pet: IPet | null = null

export const getPet = (): IPet | null => pet

export const createPet = (name: string): IPet => {
	pet = {
		name,
		age: 0,
		health: 100,
		hunger: 0,
		mood: 100,
		status: 'alive',
	}

	return pet
}

export const updateState = () => {
	if (!pet) return

	pet.mood = Math.floor((pet.health + (100 - pet.hunger)) / 2)

	if (pet.health <= 0 || pet.hunger >= 100) {
		pet.status = 'dead'
	} else if (pet.health <= 30) {
		pet.status = 'sick'
	} else {
		pet.status = 'alive'
	}
}

export const feedPet = (): IPet | null => {
	if (!pet || pet.status === 'dead') return null
	pet.hunger = Math.max(0, pet.hunger - 30)
	pet.mood = Math.min(100, pet.mood + 10)

	updateState()

	return pet
}

export const healPet = (): IPet | null => {
	if (!pet || pet.status === 'dead') return null
	pet.health = Math.min(100, pet.health + 20)
	pet.hunger = Math.min(100, pet.hunger + 10)

	updateState()

	return pet
}

export const playWithPet = (): IPet | null => {
	if (!pet || pet.status === 'dead') return null
	pet.mood = Math.min(100, pet.mood + 15)
	pet.hunger = Math.min(100, pet.hunger + 5)

	updateState()

	return pet
}

export const tick = () => {
	if (!pet || pet.status === 'dead') return

	pet.age += 1
	pet.hunger = Math.min(100, pet.hunger + 3)

	if (pet.hunger > 70) {
		pet.health = Math.max(0, pet.health - 5)
	} else {
		pet.health = Math.max(0, pet.health - 2)
	}

	updateState()
}
