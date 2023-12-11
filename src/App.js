import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage'
import HeaderContainer from './container/HeaderContainer';

function App() {
  return (
    <div className="App">
			<HeaderContainer />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
