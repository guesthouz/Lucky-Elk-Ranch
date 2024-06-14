import React from "react";

 const Text = ({ 
  text, 
  fontSizeValue, 
  fontSizeUnit, 
  textAlign, 
  fontFamily, 
  color, 
  fontWeightValue, 
  textDecorationValue, 
  lineHeightValue, 
  lineHeightUnit, 
  spacingValue, 
  spacingUnit,
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
  backgroundColor,
  backgroundImage,
  positionValue,
  displaySizeValue,
  repeatValue,
  attachmentValue,

}) => {
  
  const combinedStyles = {
    fontSize: `${fontSizeValue}${fontSizeUnit}`,
    textAlign,
    fontFamily,
    color,
    fontWeight: `${fontWeightValue}`,
    textDecoration: `${textDecorationValue}`,
    lineHeight: `${lineHeightValue}${lineHeightUnit}`,
    letterSpacing: `${spacingValue}${spacingUnit}`,
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
    backgroundColor,
    backgroundImage: `linear-gradient(0deg, ${backgroundColor}, ${backgroundColor}), url(${backgroundImage})`,
    backgroundPosition: `${positionValue}`, 
    backgroundSize: `${displaySizeValue}`, 
    backgroundRepeat: `${repeatValue}`, 
    backgroundAttachment: `${attachmentValue}`, 
  };

  return (
      <p style={combinedStyles}>{text}</p>
  )
}

export default Text;