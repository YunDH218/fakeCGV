import {Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage';
import MoviePage from './page/MoviePage';
import SignInContainer from './container/SignInContainer';
import HeaderContainer from './container/HeaderContainer';
import RegisterContainer from './container/RegisterContainer';

function App() {
  return (
    <div className="App">
			<HeaderContainer />
				<Routes>
					<Route path='/' element={<MainPage />}></Route>
					<Route path='/auth'>
						<Route path='/auth/signin' element={<SignInContainer />}></Route>
						<Route path='/auth/register' element={<RegisterContainer />}></Route>
					</Route>
					<Route path='/movie' element={<MoviePage />}></Route>
				</Routes>
    </div>
  );
}

export default App;
