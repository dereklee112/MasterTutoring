import React from 'react';
import './postslist.css'

class PostList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            posts: [
                {"firstName": "Lance",
                 "lastName": "Ding",
                 "bio":
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut",
                 "phone": 9494441885,
                 "email": "lanceding2001@gmail.com",
                 "subjects":"Math",
                 "canDrive":"Yes",
                 "Likes": 7,
                 "Dislikes":7
                }],
            likes: {},
            dislikes: {},
        }
    }

    componentDidMount() {
        let apiURL = "http://localhost:4000/tutor/";
        if (this.props.location.state) {
            const {search} = this.props.location.state;
            apiURL = apiURL + 'search/' + search.label;
        }

        fetch(apiURL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
            let likes = {};
            let dislikes = {};
            data.forEach(element => {
                likes[element._id] = element.likes
            });
            data.forEach(element => {
                dislikes[element._id] = element.dislikes
            });
            this.setState({
                posts: data,
                likes: likes,
                dislikes: dislikes,
            });
        })
        .catch(err => console.error('Error', err));
    }

    handleLike = (event) => { 
        const id = event.target.id;
        const apiURL = "http://localhost:4000/tutor/like/" + id;
        fetch(apiURL, {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            let likes = this.state.likes;
            likes[id]++;
            this.setState({ likes: likes });
        })
        .catch(err => console.error('Error:', err));
    }
    handleDislike = (event) => { 
        const id = event.target.id;
        const apiURL = "http://localhost:4000/tutor/dislike/" + id;
        fetch(apiURL, {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            let dislikes = this.state.dislikes;
            dislikes[id]++;
            this.setState({ dislikes: dislikes });
        })
        .catch(err => console.error('Error:', err));
    }

    //TODO: Need to  STYLE
    render(){
        return(
            <div>
                <div className='browseTutors'>Browse Tutors</div>
                <br></br>
                    {this.state.posts.map((postDetail)=>{
                        return <div className='tutorPost' key={postDetail._id}>
                                    <div className='tutorName'>
                                        <h2>{postDetail.firstName} {postDetail.lastName}</h2>
                                    </div>
                                    <div className='bio'>
                                        <h3>Bio  </h3>
                                        <h5>Subject: {postDetail.subjects}</h5>
                                        <h5>In person: {postDetail.canDrive ? "Yes": "No"}</h5>
                                        <p>{postDetail.bio}</p>
                                    </div>

                                    <div className='Bottom'>
                                        <div className='contactInfo'>
                                            <h3>Contact</h3>
                                            <p>Phone: {postDetail.phone}</p> 
                                            <p>Email: {postDetail.email}</p>
                                        </div>
                                        <div className='feedback'>
                                            <h3>Approval</h3>
                                            <p>Likes: {this.state.likes[postDetail._id]}</p>
                                            <p>Dislikes: {this.state.dislikes[postDetail._id]}</p>
                                        </div>
                                    </div>
                                    <div className= "LikeBox" type="Button">
                                        <button className="Like" onClick={this.handleLike} id={postDetail._id}>Like</button>
                                        <button  className="Like"onClick={this.handleDislike} id={postDetail._id}>Dislike</button>
                                    </div>
                                    <br></br>
                                    <br></br>
                               </div>
                    })}
            </div>
        )
    } 
}

export default PostList;