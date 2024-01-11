/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react"
import { DatasTableContext } from './DatasTableContext'
import './style/Table.css'

// !!! limit size of value in a cell & fix col sizes

/**
 * Component : A simple HTML Table displaying all the requested data.
 * @Component
 * @return ( <Table/> )
 */
function Table() {

    const {tableState, dispatch, tableModel} = useContext(DatasTableContext)

    if(!dispatch || !tableState || !tableModel || tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length === 0) 
      return(<>No data available in table.</>)

    const tableAccessors = tableModel.getAccessorsList()
    
    const firstDisplayedEntry = tableState.pagination ? Math.abs((tableState.pagination.currentPage-1)*tableState.pagination.nEntriesPerPage) : 0
    const lastDisplayedEntry =  tableState.pagination ? Math.abs((tableState.pagination.currentPage-1)*tableState.pagination.nEntriesPerPage + tableState.pagination.nEntriesPerPage) : 10
    const rowsToDisplay = [...tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters())].slice(firstDisplayedEntry, lastDisplayedEntry)

    return (
        <table id={tableModel.getTableId()} aria-label="Current Employees">
        <thead>
          <tr className='bottomblackborder'>
          {[...tableModel.getColumnsNamesList()].map((name, index) => (
            <th key={'thtable-'+index} style={{cursor:'pointer'}} onClick={() => {handleSortingClick(index)}}>{name}
              <div className="arrowsContainer">
                {tableModel.getColumns()[index].sortable && 
                  <span style={tableState.sorting?.direction === "asc" && tableState.sorting?.column == tableAccessors[index] ? {color:'rgb(0, 120, 215)'} : {}}>▲</span>}
                {tableModel.getColumns()[index].sortable && 
                  <span style={tableState.sorting?.direction === "desc" && tableState.sorting?.column == tableAccessors[index] ? {color:'rgb(0, 120, 215)'} : {}}>▼</span>}
              </div>
            </th>))}
          </tr>
        </thead>
        <tbody>
          {[...rowsToDisplay].map((datarow, index) => (
            <tr key={'trtable-'+index} className={isRowOdd(index) + isLastRow(index, rowsToDisplay.length-1) /* !!! use css 2*n+1 */}>
              {[...tableAccessors].map((key : string) => (
                <td key={'tdtable-'+key+'-'+index}>{datarow[key as keyof typeof datarow]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>        
    )

    /**
     * Sorting the table after clicking on a column header
     * @param {number} index - index of the column into the table model.
     * @return
     */
    function handleSortingClick(index : number){
      // if not column not sortable
      if(!tableModel?.getColumns()[index].sortable || !dispatch || !tableState) return
      // if clicking on an already active column, invert sorting direction
      if(tableState.sorting.column === tableAccessors[index]) 
        return tableState.sorting.direction === 'asc' ? dispatch({type : 'sorting', payload : {column : tableAccessors[index], direction : 'desc'}}) :  dispatch({type : 'sorting', payload : {column : tableAccessors[index], direction : 'asc'}})
      // if clicking on a different column sorting direction = asc by default
      return dispatch({type : 'sorting', payload : {column : tableAccessors[index], direction : 'asc'}})
    }

    /**
     * Determine which style should be applied to the target row.
     * @param {number} index - index of a table row.
     * @return {string} - the styles class to associate to this row.
     */
    function isRowOdd (index : number) : string {
      return index%2 === 1 ? 'odd' : ''
    }

    /**
     * Return a specific style if the target row is the last one.
     * @param {number} index - index of a table row.
     * @return {string} - the style to associate to this row if it is the last one.
     */
    function isLastRow (index : number, lastRowIndex : number) {
      return index === lastRowIndex ? ' bottomblackborder' : ''
    }
}

export default Table