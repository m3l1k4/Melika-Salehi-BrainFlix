const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

const videos = require('./sidevid.json');
const mainVid = require('./mainvid.json');

app.use(bodyParser.json());



app.get('/videos', (req, res) => {
  res.json(videos)
  console.log(videos)
})

app.get('/videos/:id', (req, res) => {
 
  const checkStatus = mainVid.some(video => video.id === req.params.id);
  console.log(checkStatus)

  if (checkStatus) {
    let test = mainVid.filter(video => video.id === req.params.id);
    res.json(test[0])
  }

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