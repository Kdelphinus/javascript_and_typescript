import { FlatList, ImageBackground, Pressable } from 'react-native';
import { HomeItemProps, HomeProps } from '../types/HomeType';
import {
  CommonStyles,
  WindowWidth,
  WindowHeight,
} from '../styles/CommonStyles';
import { useEffect, useRef, useState } from 'react';
import useInterval from './useInterval';

const swiperOnPress = (title: string) => {
  console.log(title);
};

const SwiperItem = ({ title, data }: HomeItemProps) => (
  <Pressable
    onPress={() => swiperOnPress(title)}
    style={({ pressed }) => pressed && CommonStyles.pressed}
  >
    <ImageBackground
      style={{ height: WindowHeight / 3, width: WindowWidth }}
      source={data}
    />
  </Pressable>
);

export default function Swiper({ data }: HomeProps) {
  const snapToOffsets = Array.from(Array(data.length)).map(
    (_, index) => WindowWidth * index
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (currentIndex !== snapToOffsets.length) {
      flatListRef.current?.scrollToOffset({
        animated: true,
        offset: snapToOffsets[currentIndex],
      });
    }
  }, [currentIndex, snapToOffsets]);

  useInterval(() => {
    setCurrentIndex((prev) =>
      prev === snapToOffsets.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      keyExtractor={(item) => item.id.toString() + item.title}
      horizontal={true}
      snapToOffsets={snapToOffsets}
      disableIntervalMomentum={true}
      renderItem={({ item }) => (
        <SwiperItem title={item.title} data={item.data} />
      )}
    />
  );
}
