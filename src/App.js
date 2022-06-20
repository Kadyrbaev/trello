
import { useSelector } from 'react-redux';
import './App.css';
import RegistrPage from './components/registrationPages/RegistrPage';
import BodyPageTrello from './components/trelloPages/trelloBody/BodyPageTrello';


function App() {

  const {isLoaded} =useSelector(state=>state.todo)

  return (
    <div className="App">
      {!isLoaded && <RegistrPage/>}
      {isLoaded && <BodyPageTrello/>}

    </div>
  );
}

export default App;
