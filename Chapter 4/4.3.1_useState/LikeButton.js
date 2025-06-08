import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        title={`Like (${likes})`}
        onPress={() => setLikes(likes + 1)}
        color={likes > 0 ? 'green' : 'gray'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
});