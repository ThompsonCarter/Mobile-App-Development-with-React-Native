<Stack.Navigator>
  <Stack.Screen name="Gallery" component={GalleryScreen} />
  <Stack.Screen
    name="Photo"
    component={PhotoScreen}
    options={{ headerShown: false }}
    sharedElementsConfig={route => [`photo.${route.params.id}`]}
  />
</Stack.Navigator>