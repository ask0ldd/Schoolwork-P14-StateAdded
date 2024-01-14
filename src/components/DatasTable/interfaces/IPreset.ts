export interface IPreset {
    global :{
        font : string,
        textColor : string,
    },
    th : {
        textColor : string,
        fontWeight: string,
        backgroundColor : string,
        arrowInactiveColor : string,
        arrowActiveColor : string,
        separatorColor : string
    },
    evenRow : {
        backgroundColor : string,
        textColor : string,
        fontWeight: string,
        hoverBackgroundColor : string,
        bottomSeparatorColor : string,
    },
    oddRow : {
        backgroundColor : string,
        textColor : string,
        fontWeight: string,
        hoverBackgroundColor : string,
        bottomSeparatorColor : string,
    },
    firstnLastRowSeparatorsColor: string,
    paginationButton :
    {
        backgroundColor : string,
        textColor : string,
        hoverBackgroundColor : string,
        hoverTextColor : string,
        borderColor : string,
    },
    searchBar :
    {
        labelTextColor: string,
        inputBackgroundColor: string,
        inputTextColor:  string,
        inputBorderColor: string,
        focusInputBorderColor: string,
    }
}