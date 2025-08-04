import * as eva from '@eva-design/eva';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigators/StackNavigator';
import { ApplicationProvider } from '@ui-kitten/components';
import { AuthProvider } from './presentation/providers/AuthProvider';

function App() {
  const colorSchema = useColorScheme();
  const theme = colorSchema === 'dark' ? eva.dark : eva.light;
  return (
    <>
      <StatusBar barStyle={colorSchema === 'dark' ? 'light-content' : 'dark-content'} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer>
          <AuthProvider>
            <StackNavigator />
          </AuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

export default App;
