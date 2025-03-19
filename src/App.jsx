import ContactForm from './ContactForm'
import "./App.css"
import { Provider } from 'react-redux'
import store from './app/store'

function App() {


  return (
    <>
      <div >
        <Provider store={store}>
      <ContactForm/>
        </Provider>
      </div>
    
    </>
  )
}

export default App
