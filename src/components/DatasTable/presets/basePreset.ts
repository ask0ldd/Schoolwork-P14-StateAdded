import { IPreset } from "../interfaces/IPreset";

export const basePreset : IPreset = {
    global :{
        font : "Jost",
        textColor : "#213547",
    },
    th : {
        textColor : "#213547",
        fontWeight: "500",
        backgroundColor : "none",
        arrowInactiveColor : "#666666",
        arrowActiveColor : "rgb(0, 120, 215)",
        separatorColor : "#999999"
    },
    evenRow : {
        backgroundColor : "#f6f6f6",
        textColor : "#213547",
        fontWeight: "500",
        hoverBackgroundColor : "linear-gradient(360deg, #2c91e4dd, #2c91e4bb)",
        bottomSeparatorColor : "#DDDDDD",
    },
    oddRow : {
        backgroundColor : "#f9f9f9",
        textColor : "#213547",
        fontWeight: "500",
        hoverBackgroundColor : "linear-gradient(360deg, #2c91e4dd, #2c91e4bb)",
        bottomSeparatorColor : "#DDDDDD",
    },
    firstnLastRowSeparatorsColor : "#111",
}