import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/oi', (req, res) => {
  res.send('Ola mundo') 
})  
const lista = [ 'Rick Sanches', 'Morty Smith', 'Summer Smith']
app.get('/personagens', (req, res) => {
  res.send(lista)
})
app.get('/personagens/:id', (req, res) => {
  const id = req.params.id
  const personagens = lista[id]
  res.send(lista[id-1])
  res.send(personagens) 
  
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
