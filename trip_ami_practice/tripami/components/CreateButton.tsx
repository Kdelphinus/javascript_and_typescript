import ActionButton from 'react-native-action-button';
import { WindowHeight, WindowWidth } from '../styles/CommonStyles';
import { Text, View } from 'react-native';
import { ActionButtonStyles } from '../styles/HomeStyles';

const createButtonOnPress = () => {
  console.log('createButtonOnPress');
};

export default function CreateButton() {
  return (
    <View
      style={{
        flex: 1,
        zIndex: 999,
      }}
    >
      <ActionButton
        offsetY={WindowHeight * 0.75}
        offsetX={-WindowWidth * 0.4}
        onPress={createButtonOnPress}
        buttonColor={'transparent'}
        useNativeFeedback={false}
        renderIcon={() => (
          <View style={ActionButtonStyles.actionButtonIcon}>
            <Text style={ActionButtonStyles.actionButtonIconText}>Upload</Text>
          </View>
        )}
      ></ActionButton>
    </View>
  );
}
