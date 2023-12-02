import s from './App.module.css';
import ConfigList from './components/ConfigList/ConfigList';
import ControlSidebar from './components/ControlSidebar/ControlSidebar';

function App() {
  return (
    <div className={s.App}>
      <ControlSidebar />

      <div className={s.content}>
        <ConfigList />
      </div>
    </div>
  );
}

export default App;
