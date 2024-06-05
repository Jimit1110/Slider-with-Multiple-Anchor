import React, { useState } from 'react';
import { View, PanResponder, StyleSheet, Text } from 'react-native';

const MultiThumbSlider = () => {
  //state to hold the positions of the thumbs
  const [thumbPositions, setThumbPositions] = useState([0, 0.25, 0.5, 0.75]);
  const [selectedThumb, setSelectedThumb] = useState(null);

  //define colors for each thumb
  const colors = ['red', 'blue', 'green', 'orange'];

  //create pan responders for each thumb
  const panResponders = thumbPositions.map((_, index) =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => setSelectedThumb(index),
      onPanResponderRelease: () => setSelectedThumb(null),
      //update thumb position on move
      onPanResponderMove: (_, gestureState) => {
        const { dx, moveX } = gestureState;
        const newThumbPositions = [...thumbPositions];
        newThumbPositions[index] = Math.max(
          0,
          Math.min(1, (moveX + dx) / SLIDER_WIDTH)
        );
        setThumbPositions(newThumbPositions);
      },
    })
  );

  return (
    <View style={styles.container}>
      <View style={styles.sliderTrack}>
        {thumbPositions.map((position, index) => (
          <View
            key={index}
            style={[
              styles.thumb,
              { left: position * SLIDER_WIDTH - THUMB_RADIUS, backgroundColor: colors[index] },
            ]}
            {...panResponders[index].panHandlers}
          />
        ))}
      </View>
      <View style={styles.valueContainer}>
        {thumbPositions.map((position, index) => (
          <Text key={index} style={[styles.valueText, { color: colors[index] }]}>
            {colors[index].charAt(0).toUpperCase() + colors[index].slice(1)}: {position.toFixed(2)}
          </Text>     
        ))}
      </View>
    </View>
  );
};

const SLIDER_WIDTH = 300;
const THUMB_RADIUS = 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderTrack: {
    width: SLIDER_WIDTH,
    height: 4,
    backgroundColor: 'gray',
    position: 'relative',
  },
  thumb: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    position: 'absolute',
    top: -THUMB_RADIUS,
  },
  valueContainer: {
    marginTop: 40,
  },
  valueText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default MultiThumbSlider;