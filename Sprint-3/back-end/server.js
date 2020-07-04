const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

app.use(bodyParser.json());


const students = [
  {
    name: 'Brynhildr Sadler',
    program: 'Web Dev',
    grade: 75
  },
  {
    name: 'Joan Leon',
    program: 'UX',
    grade: 72
  },
  {
    name: 'Mark Summers',
    program: 'Web Dev',
    grade: 87
  },
  {
    name: 'Tanja Zawisza',
    program: 'Web Dev',
    grade: 92
  },
  {
    name: 'Slavomir Amato',
    program: 'UX',
    grade: 78
  },
  {
    name: 'Tihana Anand',
    program: 'UX',
    grade: 60
  },
  {
    name: 'Reima Ivov',
    program: 'Web Dev',
    grade: 95
  },
  {
    name: 'Demokritos Shafir',
    program: 'UX',
    grade: 83
  }
]

app.get('/students', (req, res) => {
  res.json(students)
})

app.post('/students', (req, res) => {
  const { name, program, grade } = req.body
  students.push(
    {
      name,
      program,
      grade
    }
  )
  // res.json([
  //   ...students, 
  //   {
  //     name,
  //     program,
  //     grade
  //   }
  // ])

res.json(students)

})

app.listen(port, () => console.log(`Listening on ${port}`))