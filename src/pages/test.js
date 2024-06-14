
    import React from 'react';
    import Button from '@/app/components/Button';
    import SectionComponents from '@/app/components/Section';
    const { Container, Section } = SectionComponents;
    import PropertySearch from '@/app/components/PropertySearch';
    import Text from '@/app/components/Text';
    import Navigation from '@/app/components/Navigation';
    import '../styles/globals.css';

    const Test = () => (
      <>
      <Navigation
  apiUrl="http://localhost:8081/api"
  firebaseUid="tEvIXITt9nYIkyyqKpmeAUuU8zJ3"
/>
<>
  <Text
    attachmentValue="scroll"
    backgroundColor="transparent"
    bottomMarginUnitValue="px"
    bottomMarginValue="0"
    bottomPaddingUnitValue="px"
    bottomPaddingValue="0"
    color="#000"
    displaySizeValue="auto"
    fontFamily="Roboto"
    fontSizeUnit="px"
    fontSizeValue="16"
    fontWeightValue="400"
    leftMarginUnitValue="px"
    leftMarginValue="0"
    leftPaddingUnitValue="px"
    leftPaddingValue="0"
    lineHeightUnit="px"
    lineHeightValue=""
    marginAllUnitValue="px"
    marginAllValue="0"
    paddingAllUnitValue="px"
    paddingAllValue="0"
    positionValue="center center"
    repeatValue="no-repeat"
    rightMarginUnitValue="px"
    rightMarginValue="0"
    rightPaddingUnitValue="px"
    rightPaddingValue="0"
    spacingUnit="px"
    spacingValue=""
    text="THIS IS THE TEST PAGE"
    textAlign="left"
    textDecorationValue="none"
    topMarginUnitValue="px"
    topMarginValue="0"
    topPaddingUnitValue="px"
    topPaddingValue="0"
  />
  <Button
    backgroundColor="rgba(168, 38, 38, 1)"
    color="#fff"
    fontFamily="Roboto"
    fontSizeUnit="px"
    fontSizeValue="16"
    fontWeightValue="400"
    hoverColor="rgba(136, 42, 42, 0.61)"
    paddingAllUnitValue="px"
    size="small"
    text="This is a button"
  />
</>
      </>
    );

    export default Test;
  