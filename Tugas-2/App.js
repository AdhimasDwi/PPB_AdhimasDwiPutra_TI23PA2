import React from "react";
import { View } from "react-native";
// import Latihan1 from "./Latihan/Latihan1";
// import Latihan2 from "./Latihan/Latihan2";
// import Latihan3 from "./Latihan/Latihan3";
import Latihan4RFC from "./Latihan/Latihan4RFC";
import Latihan4RCC from "./Latihan/Latihan4RCC";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Latihan1 /> */}
      {/* <Latihan2 /> */}
      {/* <Latihan3 /> */}
      <Latihan4RFC />
      <Latihan4RCC /> 

    </View>
  );
};

export default App;
