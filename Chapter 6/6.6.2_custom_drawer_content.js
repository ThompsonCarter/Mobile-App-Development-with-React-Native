function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sign Out"
        onPress={() => {/* handle logout */}}
      />
    </DrawerContentScrollView>
  );
}

<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
  {/* screens */}
</Drawer.Navigator>
