import express from 'express'
const app = express()

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(express.static('dist'))





app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
