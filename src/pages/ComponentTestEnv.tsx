import '../style/NewEmployeeForm.css'
import '../style/CurrentEmployees.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Select, { IOption } from '../components/CustomSelectV2/Select'

function ComponentTestEnv(){

    const options = [
        {label : 'item1', value : 'item1'},
        {label : 'item2', value : 'item2'},
        {label : 'item3', value : 'item3'},
        {label : 'item4', value : 'item4'},
    ]

    function callback(option : IOption){
        console.log(option.value)
    }

    return (
        <>
            <Header pageTitle='Create Employee'/>
            <main style={{paddingTop:'1rem'}}>

            <Select id="test" options={options} onValueChange={callback} defaultOption={'item3'} width={300}/>
            
            </main>
            <Footer/>
        </>
        )
}

export default ComponentTestEnv