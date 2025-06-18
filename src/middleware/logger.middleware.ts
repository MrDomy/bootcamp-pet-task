import { NextFunction, Request, Response } from 'express'

export function loggerMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const startTime = Date.now()
	const { method, url, ip } = req

	console.log(`[${getTimestamp()}] ${method} ${url} · ${ip}`)

	res.on('finish', () => {
		const endTime = Date.now()
		const duration = endTime - startTime
		const { statusCode } = res

		console.log(
			`[${getTimestamp()}] ${method} ${url} · ${statusCode} · ${duration}ms`,
		)
	})

	next()
}

function getTimestamp() {
	return new Date().toLocaleString('en-US', {
		dateStyle: 'medium',
		timeStyle: 'medium',
		hour12: false,
	})
}
