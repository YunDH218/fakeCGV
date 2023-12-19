import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage';
import SignInPage from './page/SignInPage';
import HeaderContainer from './container/HeaderContainer';

function App() {
  return (
    <div className="App">
			<HeaderContainer />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />}></Route>
					<Route path='/auth'>
						<Route path='/auth/signin' element={<SignInPage />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
