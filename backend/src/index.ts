import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json({ message: 'Tracksy API — Hello World 👋' })
})

app.listen(port, () => {
  console.log(`Tracksy backend listening on port ${port}`)
})
