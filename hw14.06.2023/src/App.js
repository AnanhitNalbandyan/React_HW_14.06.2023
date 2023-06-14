import { Header } from './components/Header';
import './App.css';
import { Footer } from './components/Footer';
import { EmployeesList } from './components/EmployeesList';
import { ClientsList } from './components/ClietsList';
import { ServicesComponents } from './components/ServicesComponents';
import { MainTitle } from './components/MainTitle';


function App() {
  return (
    <div className="App">
    <Header/>
    <MainTitle/>
    <ServicesComponents/>
    <ClientsList/>
    <EmployeesList/>
    <Footer/>
    </div>
  );
}

export default App;
