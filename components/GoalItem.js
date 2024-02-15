import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'blue' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        //style is only for ios
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: 'teal',
    padding: 15,
    fontWeight: 'bold',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
  },
});
export default GoalItem;
