import { Ionicons } from '@expo/vector-icons';

export type HomeProps = {
  data: any; // TODO : Fix type
};

export type HomeItemProps = {
  title: string;
  data: any; // TODO : Fix type
};

export type CardProps = {
  title: string;
  data: any; // TODO : Fix type
  haveText: boolean;
  width: number;
  height: number;
};

export type CardItemProps = {
  item: any; // TODO : Fix type
  haveText: boolean;
  width: number;
  height: number;
};

export type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
};
