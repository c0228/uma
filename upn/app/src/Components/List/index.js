import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export const List = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(null); // Use null for initial state

  const handleOptionPress = (value) => {
    setSelectedValue(value);
    onSelect && onSelect(value); // Call onSelect if provided
  };

  return (
    <ScrollView>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value} // Unique key for each option
          style={{ padding: 10, marginVertical: 5, borderBottomWidth: 1, borderColor: '#ccc' }}
          onPress={() => handleOptionPress(option.value)}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {selectedValue === option.value && (
              <Text style={{ fontSize: 18, marginRight: 10 }}>&#10004;</Text> // Checkmark symbol (Unicode)
            )}
            <Text>{option.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
