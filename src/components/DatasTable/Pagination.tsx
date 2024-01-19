/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatasTableContext } from './DatasTableContext'
import { ITableState } from './interfaces/ITableState'
import './style/Pagination.css'
import { useContext } from "react"

/**
 * Component : Datatable pagination.
 * @Component
 * @return ( <Pagination/> )
 */
function Pagination() {

    const {tableState, dispatch, preset} = useContext(DatasTableContext)
    if(!dispatch || !tableState) return(<></>)

    const currentPage = tableState.pagination.currentPage
    const nEntriesPerPage = tableState.pagination.nEntriesPerPage
    const totalEntries = tableState.tableDAO.getProcessedDatas(tableState.getProcessingParameters()).length
    
    const enoughEntriesLeftForNextPage =  currentPage * nEntriesPerPage < totalEntries

    // const paginationPreset = preset && preset.paginationButton
    let paginationButtonPreset = {}
    if(preset?.paginationButton.backgroundColor) paginationButtonPreset = {...paginationButtonPreset, background : preset.paginationButton.backgroundColor}
    if(preset?.paginationButton.textColor) paginationButtonPreset = {...paginationButtonPreset, color : preset.paginationButton.textColor}
    if(preset?.paginationButton.borderColor) paginationButtonPreset = {...paginationButtonPreset, border : '1px solid ' + preset.paginationButton.borderColor}
    /*
            backgroundColor: "#1B1A23",
        textColor: "#7D769BDD",
        hoverBackgroundColor: "#30B383",
        hoverTextColor: "#213547",
        borderColor: "#2F2D3B",
    */

    /*
     * Previous Table Page.
     * dispatch : fn saved in DatasTableContext
     * interacts with the reducer in useTableManager
     */
    function prevPage(tableState : ITableState) : void {
      if(dispatch == null || tableState == null) return
      dispatch({
        type : "pagination", 
        payload : {
          ...tableState.pagination, 
          currentPage : currentPage > 1 ? currentPage-1 : currentPage
        }})
    }

    /*
     * Next Table Page.
     * dispatch : fn saved in DatasTableContext
     * interacts with the reducer in useTableManager
     */
    function nextPage(tableState : ITableState) : void {
      if(dispatch == null || tableState == null) return
      dispatch({
        type : "pagination", 
        payload : {
          ...tableState.pagination, 
          currentPage : enoughEntriesLeftForNextPage ? currentPage+1 : currentPage
        }})
    }

    return (
        <div id="paginationContainer">
          {currentPage > 1 && 
            <span style={preset?.paginationNextPrevious ? { color: preset.paginationNextPrevious.textColor, marginLeft:'0.5rem' } : {marginLeft:'0.5rem'}} 
                  tabIndex={0} onClick={() => prevPage(tableState)}>Previous</span>}
          {currentPage > 1 && 
            <div style={paginationButtonPreset} tabIndex={0} className="paginationInactivePage" onClick={() => prevPage(tableState)}>{currentPage-1}</div>}
          <div style={paginationButtonPreset} tabIndex={0} className="paginationActivePage">{currentPage}</div>
          {enoughEntriesLeftForNextPage && 
            <div style={paginationButtonPreset} tabIndex={0} className="paginationInactivePage" onClick={() => nextPage(tableState)}>{currentPage+1}</div>}
          {enoughEntriesLeftForNextPage && 
            <span style={preset?.paginationNextPrevious ? { color: preset.paginationNextPrevious.textColor, marginLeft:'0.5rem' } : {marginLeft:'0.5rem'}} 
                  tabIndex={0} onClick={() => nextPage(tableState)}>Next</span>}
        </div>
    )
}

export default Pagination
