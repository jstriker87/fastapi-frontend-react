import SecretList from './components/SecretList';
import SecretForm from './components/SecretForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
        </header>
      </div>

      <div className="App">
        <h1>Secrets Management</h1>
<Tabs>
    <TabList>
      <Tab>Add Secret</Tab>
      <Tab>Check Secret</Tab>
    </TabList>

    <TabPanel>
        <SecretForm />
    </TabPanel>
    <TabPanel>
        <SecretList />
    </TabPanel>
  </Tabs>
      </div>
    </>
  );
}

export default App;

