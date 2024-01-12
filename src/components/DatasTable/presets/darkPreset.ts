import { IPreset } from "../interfaces/IPreset";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const darkPreset : IPreset = {
    global :{
        font : "Jost",
        textColor : "#FFFFFF",
    },
    th : {
        textColor : "#FFFFFF",
        fontWeight: "500",
        backgroundColor : "#000000",
        arrowInactiveColor : "#666666",
        arrowActiveColor : "#FFFFFF",
        separatorColor : "#999999"
    },
    evenRow : {
        backgroundColor : "#000000",
        textColor : "#FFFFFF",
        fontWeight: "500",
        hoverBackgroundColor : "#555555",
        bottomSeparatorColor : "#444444",
    },
    oddRow : {
        backgroundColor : "#333333",
        textColor : "#FFFFFF",
        fontWeight: "500",
        hoverBackgroundColor : "#555555",
        bottomSeparatorColor : "#444444",
    },
}


    /*"font" : "Jost",
    "textColor" : "#FFFFFFFF",
    "ThTextFontWeight" : "",
    "ThArrowColor" : "",
    "ThActiveArrowColor" : "",
    "evenRowBgColor" : "",
    "evenRowHoverBgColor" : "",
    "oddRowBgColor" : "",
    "oddRowHoverBgColor" : "",
    "rowTextHoverColor" : "",
    "rowSeparatorColor" : "",
    "firstnLastRowSeparatorColor" : "",*/