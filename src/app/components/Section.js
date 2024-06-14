import React from "react";

const Container = ({children}) => {

  return (
    <div style={{ maxWidth: '90%', margin: '0 auto', position: 'relative' }}>
      {children}
    </div>
  );
};

const Section = ({
  children,
  backgroundColor,
  backgroundImage,
  positionValue,
  displaySizeValue, 
  repeatValue,
  attachmentValue,
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

}) => {

  const combinedStyles = {
    backgroundColor,
    backgroundImage: `linear-gradient(0deg, ${backgroundColor}, ${backgroundColor}), url(${backgroundImage})`,
    backgroundPosition: `${positionValue}`, 
    backgroundSize: `${displaySizeValue}`, 
    backgroundRepeat: `${repeatValue}`, 
    backgroundAttachment: `${attachmentValue}`, 
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
  }

  return (
    <div style={combinedStyles}>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default { Container, Section };