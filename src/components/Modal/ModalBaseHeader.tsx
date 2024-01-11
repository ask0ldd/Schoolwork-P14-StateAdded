import './style/ModalHeader.css'

/**
 * Component : Modals Header.
 * @Component
 * @param {Object[]} props - Props.
 * @param {bool} props.openModal - Function to set the display state of the modal.
 * @return ( <ModalHeader openModal={openModal}/> )
 */
function ModalBaseHeader({setVisibility} : IProps){

    return (
        <div className='header-container'>
            <button tabIndex={0} role="button" className='close-btn' onClick={() => setVisibility(false)} id="close" aria-label="close">X</button>        
        </div>
    )
}

export default ModalBaseHeader

interface IProps{
    setVisibility : (bool : boolean) => void
}