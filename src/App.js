import './App.scss';
import { sectionText } from './SiteCopy';
import Hero from './Hero';
import ImageLeftTextRight from './ImageLeftTextRight';
import Offerings from './Offerings';
import Students from './Students';
import Welcome from './Welcome';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Welcome theme='dark' />
      <ImageLeftTextRight
        imagePath='./images/beans.png'
        theme='light'
        title='Three Fantasies'
        text={sectionText['fantasies']()}
      />
      <Offerings theme='dark' />
      <Students theme='light' />
    </div>
  );
}

export default App;
