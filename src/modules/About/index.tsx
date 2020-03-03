import React from 'react';
import { View, Text } from 'react-native';

interface AboutConfig {
  route: { params: { name: string } }
}
const About = (config: AboutConfig) => (
  <View>
    <Text>
      name goes here:
      {config.route.params.name}
    </Text>
    <Text>This is About page</Text>
  </View>

);

export default About;
