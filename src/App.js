import './App.css';
import Counter from './componets/Counter';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 flex-column" style={{height:'100vh',backgroundColor:"black"}}>
    <div  className="d-flex align-items-center justify-content-center flex-column p-5 rounded"style={{backgroundColor:"white"}} >
     <h1 className='text-primary'>counter application</h1>
    </div>
    <Counter/>
  </div>
  );
}

export default App;
