const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

const videos = require('./sidevid.json');
const mainVid = require('./mainvid.json');

app.use(bodyParser.json());




app.get('/mainVid', (req, res) => {
  res.json(mainVid)
  console.log(mainVid)
})


app.post('/mainVid', (req, res) => {
  const { id, title, channel,image,description
  ,views, likes,duration,video,timestamp,comments } = req.body
  mainVid.push(

    {
      id,
      title,
      channel,
      image,
      description,
      views, 
      likes,
      duration,
      video,
      timestamp,
      comments
    })
  
    res.json(mainVid)

  })


  app.post('/videos/:id', (req, res) => {
    const { name, comment } = req.body
   comments.push(
  
      {
   name, 
   comment
      })
    
      res.json(comments)
      console.log(comments)
      console.log
  
    })


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

  else {console.log("notfound")}

})





app.post('/videos', (req, res) => {
  const { id, title, channel,image } = req.body
  videos.push(
    {
      id,
      title,
      channel,
      image
    }
  )

res.json(videos)

})








app.listen(port, () => console.log(`Listening on ${port}`))