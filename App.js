import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Another hello world</Text>
      <Text
        style={{ margin: 30, borderWidth: 2, borderColor: 'red', padding: 16 }}
      >
        hello world
      </Text>
      <Button title="Push me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
