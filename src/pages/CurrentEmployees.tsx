/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import '../style/NewEmployeeForm.css'
import '../style/CurrentEmployees.css'
import DatasTable from '../components/DatasTable/DatasTable'
import { ColumnBuilder } from '../components/DatasTable/builders/ColumnBuilder'
import { TableModel } from '../components/DatasTable/models/TableModel'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTypedSelector } from '../redux/hook/typedHooks'
import { darkGreenPreset } from '../components/DatasTable/presets/darkGreenPreset'
import { basePreset } from '../components/DatasTable/presets/basePreset'
import { darkPurplePreset } from '../components/DatasTable/presets/darkPurplePreset'
import { lightPurplePreset } from '../components/DatasTable/presets/lightPurplePreset'

/**
 * Component : Displaying the current employees datatable page.
 * @Component
 * @return ( <CurrentEmployees/> )
 */
function CurrentEmployees() {
  // const {employeesList} = useContext(EmployeesContext);
  const employeesList  = useTypedSelector((state) => state.employees.employees)

  const tableModel = new TableModel({id : "current_employees"})

  tableModel.addColumn(new ColumnBuilder().setColumnName("First Name").setDatatypeAsString().setAccessor("firstName").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("Last Name").setDatatypeAsString().setAccessor("lastName").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("Start Date").setDatatypeAsDate().setAccessor("startingDate").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("Department").setDatatypeAsString().setAccessor("department").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("Birthdate").setDatatypeAsDate().setAccessor("birthDate").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("Street").setDatatypeAsString().setAccessor("street").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("City").setDatatypeAsString().setAccessor("city").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("State").setDatatypeAsString().setAccessor("state").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("Zip Code").setDatatypeAsNumber().setAccessor("zipCode").setSortability(true).build())
  tableModel.addColumn(new ColumnBuilder().setColumnName("Actions", "align-center").setCustomComponent(actionsCell).build())

  return (
    <>
      <Header pageTitle='Current Employees'/>
      <main className='mainCE'>
        <DatasTable 
          tableModel={tableModel} tableDatas={employeesList} preset={
          basePreset.setGlobalFont('Arial').setRowTopPadding('2')/*.setHoveredElementsStyle({textColor: "#FFFFFF", background:'#FF0000'})
          .setOddRowsStyle({background:'#dddddd', separatorColor: '#aaaaaa', textColor : "blue"})*/
          .get()} 
          nRowsDefault={25}
          /*hidePagination={true}
          hideSearchBar={true}
          hideNRowsSelect={true}*/
        />
      </main>
      <Footer/>
    </>
    )
}

export default CurrentEmployees

function actionsCell(index? : number, datasRow? : unknown){
  const tdStyle = {display:'flex', justifyContent:'center', alignItems:'center', padding : '10px 18px 10px 18px',}
  return(
    <td style={tdStyle} key={'tdtable-custom'+index}>
      <span role="button" onClick={() => console.log({rowId : index, datas : JSON.stringify(datasRow)})}>aaaa</span>
    </td>
  )
}