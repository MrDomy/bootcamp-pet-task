import app from './app'
import { getPet, tick } from './models/pet.model'

const ONE_MINUTE_IN_MS = 60_000
let tickInterval: NodeJS.Timeout | null = null

function startTicking() {
	if (tickInterval) return

	tickInterval = setInterval(() => {
		const pet = getPet()

		if (!pet) return
		if (pet.status === 'dead') return stopTicking()

		tick()
		console.log('Tick applied to pet')
	}, ONE_MINUTE_IN_MS)
}

function stopTicking() {
	if (tickInterval) {
		clearInterval(tickInterval)
		tickInterval = null
	}
}

startTicking()

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`)
})
