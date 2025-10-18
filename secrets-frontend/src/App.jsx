import SecretList from './components/SecretList';
import CreateSecret from './components/CreateSecret';
import GetSecret from './components/GetSecret';
import CheckToken from './components/CheckToken';

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
      <Tab>See Secrets</Tab>
      <Tab>Get A Secret</Tab>
      <Tab>Check Token</Tab>
    </TabList>

    <TabPanel>
        <CreateSecret/>
    </TabPanel>
    <TabPanel>
        <SecretList />
    </TabPanel>
    <TabPanel>
        <GetSecret />
    </TabPanel>
    <TabPanel>
        <CheckToken />
    </TabPanel>
  </Tabs>
      </div>
    </>
  );
}

export default App;

