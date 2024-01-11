/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '../style/NewEmployeeForm.css'
import Modal from '../components/Modal/Modal'
import {useModalManager} from '../components/Modal/hooks/useModalManager'
import CustomForm from '../components/CustomForm'
import ModalBaseHeader from '../components/Modal/ModalBaseHeader'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

/**
 * Component : Displaying the form page.
 * @Component
 * @return ( <App/> )
 */
function App() {

  // had to be outside the modal component so we can modify the modalVisibility prop passed to the modal component
  const modalManager = useModalManager({initialVisibility : false, activeComponents :{body : ModalBodySuccess, header : ModalBaseHeader}})

  useEffect(() => {
    modalManager.saveModalPreset("default", ModalBaseHeader, ModalBodySuccess)
    modalManager.saveModalPreset("formError", ModalBaseHeader, ModalBodyInvalidForm)
    // modalManager.loadModalPreset("formError")
  }, [])

  return (
    <>
      <Header pageTitle='Create Employee'/>
      <main style={{paddingTop:'1rem'}}>

        <CustomForm modalManager={modalManager}/>

        <Modal modalManager={modalManager}>
          {modalManager.getHeaderComponent()}
          {modalManager.getBodyComponent()}
        </Modal>

        {/*<button style={{padding:'1rem', marginTop:'1rem', width:'100%'}} onClick={() => modalManager.displayModalPreset("default")}>Show alternate modale</button>
        <button style={{padding:'1rem', marginTop:'1rem', width:'100%'}} onClick={() => modalManager.displayModalPreset("formError")}>Show alternate modale</button>*/}
      
      </main>
      <Footer/>
    </>
  )

  /**
  * Component : The body of a modale.
  * @Component
  * @return ( <ModalBodySuccess/> )
  **/
  function ModalBodySuccess() : JSX.Element {
    return(
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center',}}>
        Employee Created !
      </div>
    )
  }

  /**
  * Component : The body of a modale.
  * @Component
  * @return ( <ModalBodyInvalidForm/> )
  **/
  function ModalBodyInvalidForm() : JSX.Element {
    return(
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center',}}>
        The Form can't be Validated !
      </div>
    )
  }

}

export default App

export interface IPropsVisibility {
  setVisibility : (bool : boolean) => void
}