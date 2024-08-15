import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colorsScheme from '@/presentation/ui/styles/colors.json'
import { useProductsStore } from '@/@core/store/cartStore';
import { IProduct } from '@/@core/store/cartStore/interfaces';
import classNames from 'classnames';

const Products: React.FC<{ item: IProduct & { quantity: number }, isCart: boolean }> = ({ item, isCart }) => {

    const { addProduct, reduceProduct } = useProductsStore()

    const quantityString = isCart && item?.quantity?.toString() || '0'

    return (
        <View className='mb-3 flex-row items-center gap-5' >
            <View
                className={classNames(
                    '',
                    {
                        'mr-0': isCart && quantityString.length <= 2,
                        'mr-[3%]': isCart && quantityString.length > 2,
                        'mr-[4%]': isCart && quantityString.length > 3,
                    })}>

                {isCart && <View
                    className={classNames(
                        'items-center justify-center  h-6 left-[40px] z-20  absolute  bg-signal-warning rounded-full',
                        {
                            'max-w-[40px] px-1  ': quantityString.length > 2,
                            'w-6': quantityString.length <= 2,
                        })}

                >

                    <Text numberOfLines={1} className='text-sm font-karla600SemiBold  text-base-light  ' >{quantityString}</Text>

                </View>
                }
                <Image className='w-12 h-12' source={{ uri: item.imagem }} />
            </View>

            <View className='flex-1 shrink-1 ' >
                <Text numberOfLines={1} className='text-base font-karla700Bold text-primary-500' >{item.nome}</Text>
                <Text className='text-sm font-karla300Light text-primary-100' >{item.preco}</Text>
            </View>


            <View className='flex-row items-center ' >
                <TouchableOpacity className='pr-3' onPress={() => reduceProduct(item)} >
                    <Ionicons name='remove' size={20} color={colorsScheme.secondary[100]} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => addProduct(item)} >
                    <Ionicons name='add' size={20} color={colorsScheme.secondary[100]} />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export { Products }