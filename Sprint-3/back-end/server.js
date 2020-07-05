const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

const videos = require('./API/sidevid.json');
const mainVid = require('./API/mainvid.json');

app.use(bodyParser.json());

app.get('/mainVid', (req, res) => {
  res.json(mainVid)

})


app.post('/mainVid', (req, res) => {
  const { id, title, channel, image, description
    , views, likes, duration, video, timestamp, comments } = req.body
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


app.get('/videos', (req, res) => {
  res.json(videos)

})

app.get('/videos/:id', (req, res) => {

  const checkStatus = mainVid.some(video => video.id === req.params.id);


  if (checkStatus) {
    let test = mainVid.filter(video => video.id === req.params.id);
    res.json(test[0])

  }

  else { console.log("notfound") }

})


app.get('/videos/:id/comments', (req, res) => {

    let test = mainVid.filter(video => video.id === req.params.id);
    res.json(test[0].comments)

})

app.post('/videos/:id/comments', (req, res) => {
  const { name, comment, id, timestamp } = req.body
  let test = mainVid.filter(video => video.id === req.params.id);

  test[0].comments.push(
    {
      name,
      comment,
      id,
      timestamp
    }
  )

  res.json(videos)

})



app.post('/videos', (req, res) => {
  const { id, title, channel, image } = req.body
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