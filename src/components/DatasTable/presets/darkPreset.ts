import { IPreset } from "../interfaces/IPreset";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const darkPreset : IPreset = {
    global :{
        font : "Jost",
        textColor : "#7D769BDD",
    },
    th : {
        textColor : "#D6D6D7",
        fontWeight: "500",
        backgroundColor : "#1B1A23",
        arrowInactiveColor : "#666666",
        arrowActiveColor : "#FFFFFF",
        separatorColor : "#999999"
    },
    evenRow : {
        backgroundColor : "#0A0A12",
        textColor : "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor : "#555555",
        bottomSeparatorColor : "#7D769B44",
    },
    oddRow : {
        backgroundColor : "#1B1A23",
        textColor : "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor : "#555555",
        bottomSeparatorColor : "#7D769B44",
    },
    firstnLastRowSeparatorsColor : "#7D769B77",
}