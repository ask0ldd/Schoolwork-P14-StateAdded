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
        arrowInactiveColor : "#ddd",
        arrowActiveColor : "rgb(0, 120, 215)",
        separatorColor : "#111"
    },
    evenRow : {
        backgroundColor : "none",
        textColor : "#213547",
        fontWeight: "500",
        hoverBackgroundColor : "linear-gradient(360deg, #2c91e4dd, #2c91e4bb)",
        bottomSeparatorColor : "#DDDDDD",
    },
    oddRow : {
        backgroundColor : "#f6f6f6",
        textColor : "#213547",
        fontWeight: "500",
        hoverBackgroundColor : "linear-gradient(360deg, #2c91e4dd, #2c91e4bb)",
        bottomSeparatorColor : "#DDDDDD",
    },
    firstnLastRowSeparatorsColor : "#111",
    paginationButton :
    {
        backgroundColor : "linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)",
        textColor : "#213547",
        hoverBackgroundColor : "#0078d7",
        hoverTextColor : "#213547",
        borderColor : "#fff",
    },
}