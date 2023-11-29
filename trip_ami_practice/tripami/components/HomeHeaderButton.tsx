import { StyleSheet, View } from 'react-native';
import IconButton from './IconButton';

export default function HomeHeaderButton() {
  function searchButtonHandler() {
    console.log('search button');
  }

  function notificationButtonHandler() {
    console.log('notification button');
  }

  function languageButtonHandler() {
    console.log('language button');
  }

  return (
    <View style={styles.headerButtonContainer}>
      <View style={styles.headerButton}>
        <IconButton
          icon={'search'}
          color={'#000000'}
          onPress={searchButtonHandler}
        />
      </View>
      <View style={styles.headerButton}>
        <IconButton
          icon={'notifications-outline'}
          color={'#000000'}
          onPress={notificationButtonHandler}
        />
      </View>
      <View style={styles.headerButton}>
        <IconButton
          icon={'globe-outline'}
          color={'#000000'}
          onPress={languageButtonHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  headerButton: {
    marginHorizontal: 5,
  },
});
