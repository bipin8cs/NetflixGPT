import Body from './components/Body'
//
import { Provider } from 'react-redux';
//iporting store and we give this store to the provider
import appStore from './utils/appStore';

function App() {
  return <Provider store={appStore}>
    <Body/>
  </Provider>;
}

export default App;
