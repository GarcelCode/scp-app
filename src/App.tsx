import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Contexts/Auth';
import { Home } from './Views/Home';
import { Login } from './Views/Login';
import { Register } from './Views/Register';

function App (){
    return (
        <AuthProvider>
            <div className="h-screen bg-slate-700 flex justify-center items-center">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            </div>
        </AuthProvider>  
    );
}

export default App;