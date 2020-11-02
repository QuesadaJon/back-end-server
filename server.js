const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
      Name: "billy",
      Title: "the kid",
      Occupation: "outlaw"
  })
})

app.get ('/1960s', (req, res) => {
    res.json({
        overview: "The 1960s were one of the most tumultuous and divisive decades in world history, marked by the civil rights movement, the Vietnam War and antiwar protests, political assassinations and the emerging generation gap."
    })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})