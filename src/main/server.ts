import dotenv from 'dotenv'
import app from './config/app'

dotenv.config()

const port = process.env.API_PORT || 5050

app.listen(port, () => console.log(`Sever running at http://localhost:${port}`))
