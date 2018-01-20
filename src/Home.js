import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shakeSpeare: ''
        }
    }

    componentDidMount(){
        var base = this
        let poemApi = 'http://ShakeItSpeare.com/api/poem'
        fetch(poemApi).then((response)=>{
            return response.json()
        }).then((json)=> {
            base.setState({shakeSpeare: json.poem})
        }).catch((ex) => {
            console.log('An error occured while parsing', ex);
        });
    }

    render(){
        let poetry = this.state.shakeSpeare;
        if(!this.state.shakeSpeare){
            return(
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
        return (
        <div className="Home">
            <div className="container">
                <h1 className="Home-title">Usefullness: A Blog</h1>
                <h3 className="Home-intro">
                All of the awesome stuff you never knew you needed to know
                </h3>
                <h5>{poetry}</h5>
            </div>
        </div>
        );
    }
}

export default Home;