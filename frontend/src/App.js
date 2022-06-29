import { QueryClient, QueryClientProvider } from 'react-query'

//Components
import Header from './components/Header';

//Pages
import Products from './pages/Products';

const queryClient = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <Header />
    <>
    <Products />
    </>
  </QueryClientProvider>    
  );
}

export default App;
