import React from "react";
import axios from 'axios'
import CurrentVid from './components/CurrentVid'
import NextVid from './components/NextVid'
import CommentsForm from './components/CommentsForm'
import CommentsList from './components/CommentsList'
import VidDescription from './components/VidDescription'


const api_key = "2ee60303-67d6-46f9-850a-5b06636bb301";

class App extends React.Component {
    state = {
        content: [],
        currentvid: [],
        comments: []
    }

//handles comment submission
    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.currentvid.comments, "potato")

        this.setState({
            comments: [...this.state.currentvid.comments, {
                id: this.state.currentvid.id,
                name: "Mohan Muruge",
                comment: event.target.newComment.value,
                timestamp: Date()
            }]
        })
        let commentVal = event.target.newComment.value;
        let idVal = this.state.currentvid.id;
        postInfo("Mohan Muruge", commentVal, idVal);
        event.target.reset();
    }
//axios API calls to get the video info
    componentDidMount() {

        // axios.get("https://project-2-api.herokuapp.com/videos?api_key=" + api_key)
        //     .then(res => {
        //         this.setState({ content: res.data })

        //     })

        axios.get('/videos')
        .then(res => {
            // this.setState({ students: res.data })
            this.setState({ content: res.data })
            console.log(res.data, "sidevid")
        })


        console.log("before execution")
        axios.get(`/videos/${this.props.match.params.id}`)
        .then(res => {
            // this.setState({ students: res.data })
            this.setState({ currentvid: res.data, comments:res.data.comments})
            console.log(res.data, "mainvid")
        })


                axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=` + api_key)
                .then(res => {
             
                  
                    console.log(res.data, "axios main")
                })
        

        // axios.get(`/videos/${this.props.match.params.id}`)
        // .then(res => this.setState({ currentvid: res.data, comments:res.data.comments })
        // )

        // axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=` + api_key)
        //     .then(res => this.setState({ currentvid: res.data, comments:res.data.comments })
        //     )




 

    }


//handles the updating of nextVid list based on current vid being watched
    componentDidUpdate(prevProps) {

        const indexID = this.state.content.findIndex(video => {
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

        this.state.content.splice(indexID, 1)

        if (this.props.match.params.id !== prevProps.match.params.id) {
            // axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=` + api_key)
            //     .then(res => {
            //         this.setState({ currentvid: res.data, comments:res.data.comments })

            //     })

     axios.get(`/videos/${this.props.match.params.id}`)
        .then(res => {
            // this.setState({ students: res.data })
            this.setState({ currentvid: res.data, comments:res.data.comments})
            console.log(res.data, "in the")
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

//handles posting to API comments
export function postInfo(nameVal, commentVal, idVal) {
    console.log(idVal,"hooo")
    axios.post(`https://project-2-api.herokuapp.com/videos/${idVal}/comments/?api_key=` + api_key,
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






