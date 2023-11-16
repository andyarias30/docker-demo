import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('H🐳ello Docker!🐳')
})

app.listen(PORT, () => {
    console.log(`Listen on http://localhost:${PORT}...`)
})
