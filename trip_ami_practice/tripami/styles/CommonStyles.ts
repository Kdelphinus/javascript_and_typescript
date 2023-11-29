import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
export const WindowWidth = Dimensions.get('window').width;
export const WindowHeight = Dimensions.get('window').height;

export const GlobalStyles = {
  colors: {
    main: '#ED6D34',
    footer: '#404040',
    footerLight: '#808080',
  },
};

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
  separator: {
    height: 8,
    width: '100%',
    backgroundColor: '#f6f6f6',
  },
});

export const FooterStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: WindowHeight / 3 - 20,
    width: '100%',
    backgroundColor: GlobalStyles.colors.footer,
  },
  text: {
    textAlign: 'left',
    marginLeft: 20,
  },
  title: {
    marginVertical: 20,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detail: {
    color: GlobalStyles.colors.footerLight,
    fontSize: 12,
  },
  email: {
    color: GlobalStyles.colors.main,
    fontSize: 12,
  },
  policyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  policy: {
    color: GlobalStyles.colors.footerLight,
    fontSize: 12,
    marginHorizontal: 13,
  },
});
