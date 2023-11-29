import { StyleSheet } from 'react-native';
import { GlobalStyles } from './CommonStyles';

export const HomeGridStyles = StyleSheet.create({
  gridStyle: {
    flex: 1,
    marginTop: 30,
    marginBottom: 15,
  },
  gridItemStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
  },
  gridImageStyle: {
    resizeMode: 'cover',
    overflow: 'hidden',
    width: 70,
    height: 70,
  },
  gridTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export const CardStyles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    marginBottom: 30,
  },
  textContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitleStyle: {
    fontSize: 13,
    color: GlobalStyles.colors.footerLight,
    marginRight: 10,
  },
  cardItemStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  cardImageStyle: {
    resizeMode: 'cover',
    overflow: 'hidden',
    width: 160,
    height: 230,
  },
  explainTextStyle: {
    justifyContent: 'center',
    textAlign: 'left',
  },
});

export const ActionButtonStyles = StyleSheet.create({
  actionButtonIcon: {
    width: 100,
    height: 40,
    backgroundColor: GlobalStyles.colors.main,
    borderRadius: 100,
  },
  actionButtonIconText: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
