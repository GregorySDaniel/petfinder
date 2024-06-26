import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const StyledButton = (props) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <View style={styles.iconContainer}>
      {props.icon}
    </View>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  iconContainer: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A0B74B',
  },
});
