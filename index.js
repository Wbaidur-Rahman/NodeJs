const express = require('express')
const app = express()
const PORT = (process.env.PORT || 3000)
app.use(express.urlencoded({
  extended: "false"
}))
app.use(express.json())
app.use('/dishes',require('./routes/dishRouter'))
app.use('/promotions',require('./routes/promoRouter'))
app.use('/leaders',require('./routes/leaderRouter'))
app.all('/', (req, res) => {
  res.send('Index Page')
})
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})