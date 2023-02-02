const { application } = require('express')
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    const hellomessage = `Hello from  the ${os.hostname()}`
    console.log(hellomessage)
    res.send(hellomessage)
})





app.get("/nginx", async (req, res) => {
    const url = "http://nginx"
    const response = await fetch(url)
    const body = await response.text()
    res.send(body)


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})