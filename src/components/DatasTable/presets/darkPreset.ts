import { IPreset } from "../interfaces/IPreset";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const darkPreset : IPreset = {
    global :{
        font : "Jost",
        textColor : "#7D769BDD",
    },
    th : {
        textColor : "#918AAD",
        fontWeight: "500",
        backgroundColor : "#1B1A23",
        arrowInactiveColor : "#7D769BFF",
        arrowActiveColor : "#30B383",
        separatorColor : "#2F2D3B"
    },
    evenRow : {
        backgroundColor : "#0A0A12",
        textColor : "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor : "#555555",
        bottomSeparatorColor : "#2F2D3B",
    },
    oddRow : {
        backgroundColor : "#1B1A23",
        textColor : "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor : "#555555",
        bottomSeparatorColor : "#2F2D3B",
    },
    firstnLastRowSeparatorsColor : "#30B383",
}