import {
  Button,
  Text,
  TextInput,
} from 'react-native';
import { SafeAreaContainer } from '@/presentation/ui/components/SafeAreaContainer';
import { useMMKVString } from 'react-native-mmkv';
import { mmkvStore } from '@/@core/store/mmkvStore';
import { useState } from 'react';

const ProfileScreen = () => {

  const USER_DISPLAY_NAME = "user.displayname"

  const [name, setName] = useMMKVString(USER_DISPLAY_NAME, mmkvStore)

  const [inputValue, setInputValue] = useState(name || '');

  const updateName = () => {
    mmkvStore.set(USER_DISPLAY_NAME, inputValue);
    setName(inputValue);
  };

  return (
    <SafeAreaContainer className='h-full bg-base-light '>

      <Text numberOfLines={1} className='text-base font-karla700Bold text-primary-500' >Welcome to the App: {name}</Text>

      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter your name"
        className='border border-primary-300 rounded p-2 text-base my-4'
      />

      <Button onPress={updateName} title='Update Name' />

    </SafeAreaContainer>
  );
};

export { ProfileScreen };
