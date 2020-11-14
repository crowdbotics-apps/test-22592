import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings173283Navigator from '../features/Settings173283/navigator';
import UserProfile173276Navigator from '../features/UserProfile173276/navigator';
import Settings173275Navigator from '../features/Settings173275/navigator';
import Settings173273Navigator from '../features/Settings173273/navigator';
import SignIn2173271Navigator from '../features/SignIn2173271/navigator';
import ArticleList172729Navigator from '../features/ArticleList172729/navigator';
import ArticleList172728Navigator from '../features/ArticleList172728/navigator';
import ArticleList172727Navigator from '../features/ArticleList172727/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings173283: { screen: Settings173283Navigator },
UserProfile173276: { screen: UserProfile173276Navigator },
Settings173275: { screen: Settings173275Navigator },
Settings173273: { screen: Settings173273Navigator },
SignIn2173271: { screen: SignIn2173271Navigator },
ArticleList172729: { screen: ArticleList172729Navigator },
ArticleList172728: { screen: ArticleList172728Navigator },
ArticleList172727: { screen: ArticleList172727Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
