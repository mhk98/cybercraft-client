import ContactForm from './ContactForm'
import "./App.css"
import { Provider } from 'react-redux'
import store from './app/store'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
      <div >
        <Provider store={store}>
      <ContactForm/>
        </Provider>
        <Toaster />
      </div>
    
    </>
  )
}

export default App
