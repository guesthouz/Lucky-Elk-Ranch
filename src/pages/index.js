
    import React from 'react';
    import Button from '@/app/components/Button';
    import SectionComponents from '@/app/components/Section';
    const { Container, Section } = SectionComponents;
    import PropertySearch from '@/app/components/PropertySearch';
    import Text from '@/app/components/Text';
    import Navigation from '@/app/components/Navigation';
    import '../styles/globals.css';

    const index = () => (
      <>
      <Navigation
  apiUrl="http://localhost:8081/api"
  firebaseUid="tEvIXITt9nYIkyyqKpmeAUuU8zJ3"
/>
<>
  <Section
    attachmentValue="scroll"
    backgroundColor="transparent"
    backgroundImage="https://firebasestorage.googleapis.com/v0/b/guesthouz-user-authentication.appspot.com/o/tEvIXITt9nYIkyyqKpmeAUuU8zJ3%2FMedia%20Library%2Fbeach.jpg?alt=media&token=1e5f7be5-6ed9-4444-9eef-882edc6a8b4b"
    bottomMarginUnitValue="px"
    bottomMarginValue="0"
    bottomPaddingUnitValue="px"
    bottomPaddingValue="150"
    displaySizeValue="auto"
    leftMarginUnitValue="px"
    leftMarginValue="0"
    leftPaddingUnitValue="px"
    leftPaddingValue="150"
    marginAllUnitValue="px"
    marginAllValue="0"
    paddingAllUnit="px"
    paddingAllUnitValue="px"
    paddingAllValue="150"
    positionValue="center center"
    repeatValue="no-repeat"
    rightMarginUnitValue="px"
    rightMarginValue="0"
    rightPaddingUnitValue="px"
    rightPaddingValue="150"
    topMarginUnitValue="px"
    topMarginValue="0"
    topPaddingUnitValue="px"
    topPaddingValue="150"
  >
    <Container>
      <Text
        attachmentValue="scroll"
        backgroundColor="transparent"
        bottomMarginUnitValue="px"
        bottomMarginValue="0"
        bottomPaddingUnitValue="px"
        bottomPaddingValue="0"
        color="#ffffff"
        displaySizeValue="auto"
        fontFamily="Bangers"
        fontSizeUnit="px"
        fontSizeValue="82"
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
        text="Homepage"
        textAlign="center"
        textDecorationValue="none"
        topMarginUnitValue="px"
        topMarginValue="0"
        topPaddingUnitValue="px"
        topPaddingValue="0"
      />
      <Text
        attachmentValue="scroll"
        backgroundColor="transparent"
        bottomMarginUnitValue="px"
        bottomMarginValue="0"
        bottomPaddingUnitValue="px"
        bottomPaddingValue="20"
        color="#ffffff"
        displaySizeValue="auto"
        fontFamily="Roboto"
        fontSizeUnit="px"
        fontSizeValue="18"
        fontWeightValue="400"
        leftMarginUnitValue="px"
        leftMarginValue="0"
        leftPaddingUnitValue="px"
        leftPaddingValue="20"
        lineHeightUnit="px"
        lineHeightValue=""
        marginAllUnitValue="px"
        marginAllValue="0"
        paddingAllUnit="px"
        paddingAllUnitValue="px"
        paddingAllValue="20"
        positionValue="center center"
        repeatValue="no-repeat"
        rightMarginUnitValue="px"
        rightMarginValue="0"
        rightPaddingUnitValue="px"
        rightPaddingValue="20"
        spacingUnit="px"
        spacingValue=""
        text="A fancy subheading"
        textAlign="center"
        textDecorationValue="none"
        topMarginUnitValue="px"
        topMarginValue="0"
        topPaddingUnitValue="px"
        topPaddingValue="20"
      />
      <PropertySearch
        apiUrl="http://localhost:8081/api"
        firebaseUid="tEvIXITt9nYIkyyqKpmeAUuU8zJ3"
      />
    </Container>
  </Section>
</>
      </>
    );

    export default index;
  