// components/user/Button.js
import React  from "react";
import {Button as MaterialButton} from "@mui/material";

const Button = ({
  backgroundColor,
  paddingAllValue, 
  paddingAllUnit, 
  topPaddingValue, 
  topPaddingUnitValue, 
  rightPaddingValue, 
  rightPaddingUnitValue, 
  bottomPaddingValue, 
  bottomPaddingUnitValue, 
  leftPaddingValue, 
  leftPaddingUnitValue,
  marginAllValue, 
  marginAllUnit, 
  topMarginValue, 
  topMarginUnitValue, 
  rightMarginValue, 
  rightMarginUnitValue, 
  bottomMarginValue, 
  bottomMarginUnitValue, 
  leftMarginValue, 
  leftMarginUnitValue,
  hoverColor,
  fontSizeValue, 
  fontSizeUnit, 
  fontWeightValue, 
  textAlign, 
  fontFamily, 
  color,
  text,

}) => {

  const combinedStyles = {
    backgroundColor,
    padding: `${paddingAllValue}${paddingAllUnit}`, 
    paddingTop: `${topPaddingValue}${topPaddingUnitValue}`,
    paddingRight: `${rightPaddingValue}${rightPaddingUnitValue}`,
    paddingBottom: `${bottomPaddingValue}${bottomPaddingUnitValue}`,
    paddingLeft: `${leftPaddingValue}${leftPaddingUnitValue}`,
    margin: `${marginAllValue}${marginAllUnit}`, 
    marginTop: `${topMarginValue}${topMarginUnitValue}`,
    marginRight: `${rightMarginValue}${rightMarginUnitValue}`,
    marginBottom: `${bottomMarginValue}${bottomMarginUnitValue}`,
    marginLeft: `${leftMarginValue}${leftMarginUnitValue}`,
    hoverColor,
    fontSize: `${fontSizeValue}${fontSizeUnit}`,
    fontWeight: `${fontWeightValue}`,
    textAlign,
    fontFamily,
    color,    
  };


  return (
    <MaterialButton style={combinedStyles}>{text}</MaterialButton>
)
}

export default Button;

