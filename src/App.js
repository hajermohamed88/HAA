import './App.css';
import Adress from './component/profile/Adress';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
      <Adress/>
    </div>
  );
}

export default App;
