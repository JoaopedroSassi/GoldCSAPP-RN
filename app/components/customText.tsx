import React from "react";
import { Text, TextProps } from "react-native";

const CustomText: React.FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <Text style={[{ fontFamily: "OpenSans_400Regular" }, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
