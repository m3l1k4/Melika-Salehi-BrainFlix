import React from "react";
import { Route, Link, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import CurrentVid from './components/CurrentVid'
import NextVid from './components/NextVid'
import CommentsForm from './components/CommentsForm'
import CommentsList from './components/CommentsList'
import VidDescription from './components/VidDescription'
import UploadForm from './components/UploadForm'

const api_key = "2ee60303-67d6-46f9-850a-5b06636bb301";

class App extends React.Component {
    state = {
        content: [],
        updatedContent:[],
        filteredContent:[],
        currentvid: [],
        comments: []


    }


    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            comments: [...this.state.comments, {
                id: this.state.comments.length + 1,
                name: "Mohan Muruge",
                comment: event.target.newComment.value,
                timestamp: Date()
            }]
        })
        let commentVal = event.target.newComment.value;
        postInfo("Mohan Muruge", commentVal);
        event.target.reset();
    }

    componentDidMount() {

        axios.get("https://project-2-api.herokuapp.com/videos?api_key=" + api_key)
            .then(res => {
                this.setState({ content: res.data, updatedContent:res.data })


                //   axios.get(`https://project-2-api.herokuapp.com/videos/1aivjruutn6a/?api_key=` + api_key)
                //   .then(res => this.setState({ currentvid: res.data })
                //   )

                axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}//?api_key=` + api_key)
                    .then(res => this.setState({ currentvid: res.data })
                    )

            })
    }


    //     axios.get(`https://project-2-api.herokuapp.com/videos/1aivjruutn6a/?api_key=` + api_key)
    //       .then(res => this.setState({ currentvid: res.data })
    //       )
    //   }




    componentDidUpdate(prevProps) {

    //     console.log(this.props.match.params.id)
        console.log(prevProps.match.params.id)
   
    //  console.log(this.state.updatedContent)

    //     const vidID = this.state.content.filter((video) => {

    //         return video.id !== this.props.match.params.id
    //     });


    if (this.props.match.params.id !== prevProps.match.params.id) {

        //  axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=` + api_key)
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=` + api_key)
            .then(res => {
                this.setState({ currentvid: res.data })
     
            })
      
    }
    // console.log(this.state.content)
    // this.setState.filteredContent = this.state.content.filter((video) => {
    //     return video.id !== this.props.match.params.id
    // });

    // console.log(this.state.filteredContent)


    // this.setState ({content:this.state.vidID})
    //         const filtered = this.state.content.findIndex((video) => {
    //         return video.id === this.props.match.params.id
    //     });
    //     console.log(filtered)
    //     console.log(vidID)

    // console.log(vidID[0].id ,"do");
    // this.state.content.splice("1a8qhruuzky3",1)
 //this.state.content.splice(vidID[0].id,1)


    //    const vidID = this.state.content.filter((video) => {

    //         return video.id === this.props.match.params.id
    //     });


   


  

    }

    render() {


        let filteredContent = this.state.content.filter((video) => {
            return video.id !== this.props.match.params.id
        });
        console.log(filteredContent, "dooooot")
        console.log(this.state.content, "noooot")

        if (filteredContent.length!==0){console.log("potato")
    console.log(this.state.filteredContent[0])}
    
        return (
            <div className="App">




                <CurrentVid vid={this.state.currentvid} />
                <div className="App__bottom">
                    <div className="App__bottom--left">
                        <VidDescription info={this.state.currentvid} />
                        <CommentsForm handleSubmit={this.handleSubmit} />
                        <div className="App__bottom--left__comments">
                            <CommentsList comments={this.state.comments} />
                        </div>

                    </div>

                    <div className="App__bottom--right">
                        <h2 className="App__bottom--right__header">NEXT VIDEO</h2>
                        <NextVid vids={this.state.content} />

                    </div>
                </div>



            </div>

        );

        
    }

}

export default App;
export function postInfo(nameVal, commentVal) {
    axios.post("https://project-1-api.herokuapp.com/comments?api_key=" + api_key,
        {
            name: nameVal,
            comment: commentVal
        })
        .then(response => {

        })
        .catch(error => {
            console.log(error);
        })

};






