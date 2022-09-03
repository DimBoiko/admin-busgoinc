import {Route,Routes,BrowserRouter} from 'react-router-dom'
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
			<Routes>
				<Route path="/" element={<AdminPage/>}/>
				<Route path="/login" element={<LoginPage/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
