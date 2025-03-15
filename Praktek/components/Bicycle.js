import React from 'react'
import { View, Text } from'react-native'
function Bicycle() {
    const city ="south west";
    const peoples = [{name:"Erdiana", fams:"sister"},
                    {name:"Emanuel", fams:"brother"},]
  return (
      <View>
        <Text>HI,I'm Bicycle</Text>
        <TakeARide/>
            {Place2Go(city)}
      </View>

  );
}

export default Bicycle;
const TakeARide = () => {
    return <Text>Lets Go Ridding With Me</Text>;
};
function Place2Go(){
    return <Text>We'r going {value} now,come on</Text>;
}
