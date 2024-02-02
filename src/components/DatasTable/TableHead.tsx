import React from 'react'

export default function TableHead() {
  return (
    <thead style={topSeparatorColor}>
        <tr style={{ background: thStyle.background, border: 'none' }}>
            {tableModel.getColumnsNamesList().map((name, index) => (
                <th key={'thtable-' + index}
                // different paddings if th must host the arrows
                style={{
                    ...thStyle, cursor: 'pointer',
                    padding: tableModel.getColumns()[index].sortable ? '10px 36px 10px 18px' : '10px 18px 10px 18px',
                    textAlign: tableModel.getColumns()[index].thAlignment != null && tableModel.getColumns()[index].thAlignment != 'preset' ?
                    tableModel.getColumns()[index].thAlignment as TAlignment :
                    thStyle.textAlign
                }}
                onClick={() => { handleSortingClick(index) }}>{name}
                {
                    // display arrows if sortable
                    tableModel.getColumns()[index].sortable &&
                    <div className="arrowsContainer">
                    <span style={tableState.sorting?.direction === "asc" && tableState.sorting?.column == tableAccessors[index] ?
                        arrowActiveColor : arrowInactiveColor}>▲
                    </span>
                    <span style={tableState.sorting?.direction === "desc" && tableState.sorting?.column == tableAccessors[index] ?
                        arrowActiveColor : arrowInactiveColor}>▼
                    </span>
                    </div>
                }
                </th>))}
        </tr>
    </thead>

  )
}
