import React, { Component } from 'react';

class MyNewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    birthday = (e) => {
        //console.log("test") <Inserting this shows if the function is working through inspect element
        this.setState({
            age:this.state.age+1
        })
    }

    render() {
        return (
            <div>
                <h2>{ this.props.lastName } , { this.props.firstName }</h2>
                <p>Age:{ this.state.age }</p>
                <button onClick={ (e)=>this.birthday(e)}>Birthday Time</button>
                <p>Hair Color:{ this.props.haircolor }</p>
            </div>
        );
    }
}

export default MyNewComponent;