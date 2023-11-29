import { FlatList, Pressable, View, Image, Text } from 'react-native';
import { HomeProps, HomeItemProps } from '../types/HomeType';
import { HomeGridStyles } from '../styles/HomeStyles';
import { CommonStyles } from '../styles/CommonStyles';

const gridOnPress = (title: string) => {
  console.log(title);
};

function HomeGridItem({ title, data }: HomeItemProps) {
  return (
    <View style={HomeGridStyles.gridItemStyle}>
      <Pressable
        onPress={() => gridOnPress(title)}
        style={({ pressed }) => pressed && CommonStyles.pressed}
      >
        <Image source={data} style={HomeGridStyles.gridImageStyle} />
      </Pressable>
      <Text style={HomeGridStyles.gridTextStyle}>{title}</Text>
    </View>
  );
}

export default function HomeGrid({ data }: HomeProps) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <HomeGridItem title={item.title} data={item.data} />
      )}
      keyExtractor={(item) => item.id.toString() + item.title}
      numColumns={3}
      style={HomeGridStyles.gridStyle}
    />
  );
}
