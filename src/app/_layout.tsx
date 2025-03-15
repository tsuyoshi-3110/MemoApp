import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#467FD3'
        },
        headerTintColor: '#ffffff',
        headerTitle: 'Memo App',
        headerBackTitle: 'back',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold'
        }
      }}
    />
  )
}

export default Layout
