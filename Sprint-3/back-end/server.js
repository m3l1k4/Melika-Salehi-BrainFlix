const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')



const sideVideoInfo = require('./sidevid.json');
const videos = require ('./mainvid.json');

app.use(bodyParser.json());





app.get('/videos', (req, res) => {
  res.json(videos)
})

app.get('/sideVideoInfo', (req, res) => {
  res.json(sideVideoInfo)
})

// app.post('/students', (req, res) => {
//   const { name, program, grade } = req.body
//   students.push(
//     {
//       name,
//       program,
//       grade
//     }
//   )
//   // res.json([
//   //   ...students, 
//   //   {
//   //     name,
//   //     program,
//   //     grade
//   //   }
//   // ])

// res.json(students)

// })

app.listen(port, () => console.log(`Listening on ${port}`))