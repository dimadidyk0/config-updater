import s from './App.module.css';
import ControlSidebar from './components/ControlSidebar/ControlSidebar';

function App() {
  return (
    <div className={s.App}>
      <ControlSidebar />
      <div className={s.content}>
        Content
      </div>
    </div>
  );
}

export default App;
