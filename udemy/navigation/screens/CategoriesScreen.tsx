import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

type itemDataProps = {
  item: {
    id: string;
    title: string;
    color: string;
  };
};

function renderCategoryItem(itemData: itemDataProps) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}
export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
