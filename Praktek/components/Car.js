import React, { Component } from 'react'
import { View, Text } from'react-native'

export class Car extends Component {
    constructor(props){
        super(props);
        this.Come2Go = this.Come2Go.bind(this);
        this.state={
            merek:"Toyota",
            types:{type:"Matik", model:"Calya ADS"},
        };
    }
    Come2Go(value){
        return (
            <View>
            <Text>Lets go running away from duty</Text>
            <Text>With us only {value} IDR</Text>
            </View>
        )
    }

  render() {
    return (
        <View>
            <Text> Hi Im Car</Text>
            <Text> Merek : {this.state.merek}</Text>
            <Text> Type : {this.state.types.type}</Text>
            <Text> Model : {this.state.types.model}</Text>
            {this.Come2Go(20000)}
        </View>
    );
  }
}

export default Car;
