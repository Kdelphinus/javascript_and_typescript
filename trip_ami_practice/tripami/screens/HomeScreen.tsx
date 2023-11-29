import { FlatList, SafeAreaView, View } from 'react-native';
import { HomeData } from '../data/Data';
import { CommonStyles } from '../styles/CommonStyles';
import Swiper from '../components/Swiper';
import HomeGrid from '../components/HomeGrid';
import Card from '../components/Card';
import { Footer } from '../components/Footer';
import CreateButton from '../components/CreateButton';

// TODO CreateButton은 AMI만 표시
export default function HomeScreen() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <CreateButton />
      <FlatList
        data={HomeData}
        renderItem={({ item }) => (
          <>
            <Swiper data={HomeData[0].swiperData} />
            <HomeGrid data={HomeData[0].gridData} />
            <View style={CommonStyles.separator} />
            <Card
              title={'Top 10 popular AMI'}
              data={HomeData[0].cardData}
              haveText={false}
              width={160}
              height={230}
            />
            <Card
              title={'Close to closing AMI'}
              data={HomeData[0].cardData}
              haveText={true}
              width={160}
              height={160}
            />
          </>
        )}
        ListFooterComponent={<Footer />}
      />
    </SafeAreaView>
  );
}
