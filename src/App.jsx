import * as eva from '@eva-design/eva';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigators/StackNavigator';
import { ApplicationProvider } from '@ui-kitten/components';
import { AuthProvider } from './presentation/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const colorSchema = useColorScheme();
  const theme = colorSchema === 'dark' ? eva.dark : eva.light;
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle={colorSchema === 'dark' ? 'light-content' : 'dark-content'} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <StackNavigator />
          </AuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </QueryClientProvider>
  );
}

export default App;
