import { FlatList, Pressable, Text, View, Image } from 'react-native';
import { CardItemProps, CardProps, HomeItemProps } from '../types/HomeType';
import { CardStyles } from '../styles/HomeStyles';
import { CommonStyles, GlobalStyles } from '../styles/CommonStyles';

const cardOnPress = (title: string) => {
  console.log(title);
};

const moreOnPress = () => {
  console.log('more');
};

function CardItem({ item, haveText, width, height }: CardItemProps) {
  return (
    <View style={CardStyles.cardItemStyle}>
      <Pressable
        onPress={() => cardOnPress(item.title)}
        style={({ pressed }) => pressed && CommonStyles.pressed}
      >
        <Image
          source={item.data}
          style={{
            resizeMode: 'cover',
            overflow: 'hidden',
            width: width,
            height: height,
          }}
        />
      </Pressable>
      {haveText && (
        <View style={CardStyles.explainTextStyle}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 3,
              width: width,
            }}
          >
            {item.explain[0]}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 15,
              marginBottom: 3,
              width: width,
            }}
          >
            {item.explain[1]}
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: 'bold',
              color: GlobalStyles.colors.main,
              width: width,
            }}
          >
            {item.explain[2]}
          </Text>
        </View>
      )}
    </View>
  );
}

export default function Card({
  title,
  data,
  haveText,
  width,
  height,
}: CardProps) {
  return (
    <View style={CardStyles.cardStyle}>
      <View style={CardStyles.textContainerStyle}>
        <Text style={CardStyles.mainTitleStyle}>{title}</Text>
        <Pressable onPress={moreOnPress}>
          <Text style={CardStyles.subtitleStyle}>more</Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString() + item.title}
        renderItem={({ item }) => (
          <CardItem
            item={item}
            haveText={haveText}
            width={width}
            height={height}
          />
        )}
      />
    </View>
  );
}
