import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeTitle } from './styles';
import { Context } from '../../context';

interface HomeConfig {
  navigation: any;
}

const Home = (config: HomeConfig) => {
  const { name } = React.useContext(Context);
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text>
          This is the blah name:
          {name}
        </Text>
      </View>
      <View>
        <HomeTitle>This is home page</HomeTitle>
      </View>
      <Button
        title="Go to Jane's profile"
        onPress={() => config.navigation.navigate('About', {
          name: 'Jane Jane piti kotapan',
        })
        }
      />
    </View>
  );
};

export default Home;
