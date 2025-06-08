<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>{count}</Text>
  <Button title="+1" onPress={() => setCount(count + 1)} />
</View>