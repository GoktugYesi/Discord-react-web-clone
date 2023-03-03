import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar'

import './styles/style.css';

function App() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <Topbar />
    </div>
  );
}

export default App;
