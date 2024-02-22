import './App.scss';
import Hero from './Hero';
import ImageLeftTextRight from './ImageLeftTextRight';
import ImageRightTextLeft from './ImageRightTextLeft';
import Offerings from './Offerings';
import sectionText from './SiteCopy';
import Students from './Students';
import Welcome from './Welcome';

function App() {

  const {
    fantasies,
    practice,
    teacher,
    welcome,
  } = sectionText;

  return (
    <div className='App'>
      <Hero />
      <Welcome
        text={welcome['body']}
        theme='dark'
        title={welcome['title']}
      />
      <ImageRightTextLeft
        imagePath='./images/grains.png'
        text={practice['body']}
        theme='light'
        title={practice['title']}
      />
      <Offerings theme='dark' />
      <ImageLeftTextRight
        imagePath='./images/beans.png'
        text={fantasies['body']}
        theme='light'
        title={fantasies['title']}
      />
      <Students theme='dark' />
      <ImageRightTextLeft
        imagePath='./images/nick.png'
        text={teacher['body']}
        theme='light'
        title={teacher['title']}
      />
    </div>
  );
}

export default App;
