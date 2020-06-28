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
                this.setState({ content: res.data })


                axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=` + api_key)
                    .then(res => this.setState({ currentvid: res.data })
                    )

            })
    }


    componentDidUpdate(prevProps) {


        const filtered = this.state.content.findIndex(video => {
            return video.id === this.props.match.params.id;
        })


        if (this.state.currentvid.id !== undefined) {
            const newVidList = {
                id: this.state.currentvid.id,
                title: this.state.currentvid.title,
                channel: this.state.currentvid.channel,
                image: this.state.currentvid.image,
            };

            this.state.content.push(newVidList);

        }

        this.state.content.splice(filtered, 1)

        if (this.props.match.params.id !== prevProps.match.params.id) {
            axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=` + api_key)
                .then(res => {
                    this.setState({ currentvid: res.data })

                })

        }

    }

    render() {
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






