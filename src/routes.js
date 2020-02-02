import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#191919',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
      },
    }
  )
);

export default Routes;
