import { IPreset } from "../interfaces/IPreset";

export const basePreset : IPreset = {
    global: {
        font: "Jost",
        textColor: "#213547",
    },
    th: {
        textColor: "#213547",
        fontWeight: "600",
        backgroundColor: "none",
        arrowInactiveColor: "#ddd",
        arrowActiveColor: "rgb(0, 120, 215)",
        separatorColor: "#111"
    },
    evenRow: {
        backgroundColor: "none",
        textColor: "#213547",
        fontWeight: "400",
        hoverBackgroundColor: "linear-gradient(360deg, #2c91e4dd, #2c91e4bb)",
        hoverTextColor : "#FFFFFF",
        bottomSeparatorColor: "#DDDDDD",
    },
    oddRow: {
        backgroundColor: "#f6f6f6",
        textColor: "#213547",
        fontWeight: "400",
        hoverBackgroundColor: "linear-gradient(360deg, #2c91e4dd, #2c91e4bb)",
        hoverTextColor : "#FFFFFF",
        bottomSeparatorColor: "#DDDDDD",
    },
    firstnLastRowSeparatorsColor: "#111",
    paginationButton: {
        backgroundColor: "linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)",
        textColor: "#213547",
        hoverBackgroundColor: "#0078d7",
        hoverTextColor: "#ffffffcc",
        hoverDropShadowColor : "#0078d788",
        borderColor: "#979797",
    },
    paginationNextPrevious:{
        textColor : "#213547",
    },
    searchBar: {
        labelTextColor: "#454545",
        inputBackgroundColor: "#f6f6f6",
        inputTextColor: "#454545",
        inputBorderColor: "#c5c5c5",
        focusInputBorderColor: "#0078d7"
    },
    nEntries : {
        textColor: "#213547",
    }
}