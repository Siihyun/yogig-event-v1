import './App.css';
import Information from './components/information/Information';
import Content from './components/content/Content';
import Participation from './components/participation/Participation';
import Rewards from './components/rewards/Rewards';
import FAQs from './components/faq/FAQs';
import Consideration from './components/consideration/Consideration';
import Intersection from './components/intersection/Intersection';
import Share from './components/share/Share';

function App() {
  return (
    <main className='main'>
      <Information />
      <Content />
      <Intersection>
        <Participation />
        <Rewards />
        <FAQs />
        <Consideration />
        <Share />
      </Intersection>
    </main>
  );
}

export default App;
