import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './components/Browse';
import Login from './components/Login';

function App() {
  const appRouter=createBrowserRouter([
    //   {
    //   path:"/", // error router inside the router
    //   element:<Body/>
    // },
    {
      path:"/browse",
      element:<Browse/>
    },{
      path:"/",
      element:<Login/>
    }])
  return <Provider store={appStore}>
    <RouterProvider router={appRouter}>
    <Body/>
    </RouterProvider>
   
  </Provider>;
}

export default App;
