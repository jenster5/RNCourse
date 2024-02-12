import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Another hello world</Text>
      <Text style={styles.dummyText}>hello world</Text>
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
  dummyText: {
    margin: 30,
    borderWidth: 2,
    borderColor: 'red',
    padding: 16,
  },
});
