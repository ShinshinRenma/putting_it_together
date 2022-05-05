import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            hairColor: this.props.hairColor
        }
    }

    incrementBirthday = () => {
        this.setState({age: this.state.age + 1 }, () => console.log(this.state.age));
    }

    render(){
        const {firstName, lastName, age, hairColor} = this.props;

        

        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h6>Age: {this.state.age}</h6>
                <h6>Hair Color: {hairColor}</h6>
                <button onClick={this.incrementBirthday }>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;