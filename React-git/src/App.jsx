import './App.css';
import BootAndProg from './componenet/BootAndProg';
import Card from './componenet/Card';
import Footer from './componenet/Footer';
import NavBar from './componenet/NavBar';
function App() {
	return (
		<>
			<NavBar></NavBar>
			<BootAndProg></BootAndProg>
			<div className='card-container'>
				<Card type='معسكر' title='js' startDate='29/11/2023' />
				<Card type='برنامج' title='js' startDate='27/11/2023' />
				<Card type='معسكر' title='flutter' startDate='24/11/2023' />
			</div>
			<Footer />
		</>
	);
}

export default App;
