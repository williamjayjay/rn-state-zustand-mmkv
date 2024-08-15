import {
  FlatList,
  Text,
  View,
} from 'react-native';
import { SafeAreaContainer } from '@/presentation/ui/components/SafeAreaContainer';
import { useProductsStore } from '@/@core/store/cartStore';
import { Products } from '@/presentation/ui/components/Products';

const CartScreen = () => {

  const { products } = useProductsStore()

  return (
    <SafeAreaContainer className='h-full bg-base-light '>
      <FlatList
        data={products} renderItem={({ item }) => <Products isCart item={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className='py-2' />}
      />
    </SafeAreaContainer>
  );
};

export { CartScreen };
