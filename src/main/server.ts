import dotenv from 'dotenv'
import app from './config/app'

dotenv.config()

const port = process.env.API_PORT || 5050

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
