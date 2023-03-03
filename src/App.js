import Sidebar from './components/Sidebar';
import Chat from './components/Chat'

import './styles/style.css';

function App() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
