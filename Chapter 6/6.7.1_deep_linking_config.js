<NavigationContainer
  linking={{
    prefixes: ['myapp://', 'https://myapp.example.com'],
    config: {
      screens: {
        Notes: {
          path: 'notes',
          screens: {
            Detail: 'note/:id',
            Create: 'new',
          },
        },
        Settings: 'settings',
      },
    },
  }}
>
