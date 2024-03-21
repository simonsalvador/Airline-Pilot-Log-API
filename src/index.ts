import express from 'express' // ESModules

import diaryRouter from './routes/diaries'

const app = express()

/**
 * Middleware that parses incoming request bodies as JSON
 */
app.use(express.json())

const PORT = 3000
/**
 * Responds with 'pong' when someone pings '/ping' endpoint
 */
app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

/**
 * Routes requests starting with '/api/diaries' to the diaryRouter
 */
app.use('/api/diaries', diaryRouter)

/**
 * Start the server listening on the specified port
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
