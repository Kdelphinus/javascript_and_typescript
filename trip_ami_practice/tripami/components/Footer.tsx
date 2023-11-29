import { Pressable, Text, View } from 'react-native';
import { FooterStyles } from '../styles/CommonStyles';

function emailOnPress() {
  console.log('email clicked');
}

function privacyOnPress() {
  console.log('Privacy Policy');
}

function operationalOnPress() {
  console.log('Operational Policy clicked');
}

function serviceOnPress() {
  console.log('Terms of Service clicked');
}

export const Footer = () => {
  return (
    <View style={FooterStyles.container}>
      <View style={FooterStyles.text}>
        <Text style={FooterStyles.title}>TRIPAMI CO.LTD</Text>
        <Text style={FooterStyles.detail}>
          416 Innovation Academy, Gaepo-ro, Gangnam-gu, Seoul
        </Text>
        <View style={{ height: 10 }} />
        <Text style={FooterStyles.detail}>
          For error reports and issues related to the website,
        </Text>
        <Text style={FooterStyles.detail}>
          direct your inquiries to our web admin
        </Text>
        <Pressable onPress={emailOnPress}>
          <Text style={FooterStyles.email}>tripami@tripami.co.kr</Text>
        </Pressable>
        <View style={{ height: 10 }} />
      </View>
      <View style={FooterStyles.policyContainer}>
        <Pressable onPress={privacyOnPress}>
          <Text style={FooterStyles.policy}>Privacy Policy</Text>
        </Pressable>
        <Pressable onPress={operationalOnPress}>
          <Text style={FooterStyles.policy}>Operational Policy</Text>
        </Pressable>
        <Pressable onPress={serviceOnPress}>
          <Text style={FooterStyles.policy}>Terms of Service</Text>
        </Pressable>
      </View>
    </View>
  );
};
