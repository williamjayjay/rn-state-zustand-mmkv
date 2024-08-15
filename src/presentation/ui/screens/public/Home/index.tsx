import {
  FlatList,
  Text,
  View,
} from 'react-native';
import dataJson from '@/@core/fakeData/data.json'
import { Products } from '@/presentation/ui/components/Products';
import { SafeAreaContainer } from '@/presentation/ui/components/SafeAreaContainer';

const HomeScreen = () => {

  return (
    <SafeAreaContainer className='h-full bg-base-light '>
      <FlatList
        data={dataJson} renderItem={({ item }) => <Products item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className='py-2' />}
      />
    </SafeAreaContainer>
  );
};

export { HomeScreen };
