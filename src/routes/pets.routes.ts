import { Router } from 'express'
import {
	createPetHandler,
	feedPetHandler,
	getPetHandler,
	healPetHandler,
	playPetHandler,
} from '../controllers/pets.controller'

const router = Router()

router.get('/pet', getPetHandler)
router.post('/pet', createPetHandler)
router.post('/pet/feed', feedPetHandler)
router.post('/pet/heal', healPetHandler)
router.post('/pet/play', playPetHandler)

export default router
