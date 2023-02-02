const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    const hellomessage = `Hello from  the ${os.hostname()}`
    console.log(hellomessage)
    res.send(hellomessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})