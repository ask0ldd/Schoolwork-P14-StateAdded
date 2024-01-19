import { IPreset } from "../interfaces/IPreset";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const darkGreenPreset : IPreset = {
    global: {
        font: "Jost",
        textColor: "#7D769BDD",
    },
    th: {
        textColor: "#918AAD",
        fontWeight: "600",
        backgroundColor: "#1B1A23",
        arrowInactiveColor: "#7D769BFF",
        arrowActiveColor: "#30B383",
        separatorColor: "#2F2D3B"
    },
    evenRow: {
        backgroundColor: "#0A0A12",
        textColor: "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor: "#555555",
        hoverTextColor : "#1B1A23",
        bottomSeparatorColor: "#2F2D3B",
    },
    oddRow: {
        backgroundColor: "#1B1A23",
        textColor: "#7D769BDD",
        fontWeight: "500",
        hoverBackgroundColor: "#555555",
        hoverTextColor : "#1B1A23",
        bottomSeparatorColor: "#2F2D3B",
    },
    firstnLastRowSeparatorsColor: "#30B383",
    paginationButton: {
        backgroundColor: "#1B1A23",
        textColor: "#7D769BDD",
        hoverBackgroundColor: "#30B383",
        hoverTextColor: "#FFFFFFFF",
        hoverDropShadowColor : "#30B38399",
        borderColor: "#2F2D3B",
    },
    paginationNextPrevious:{
        textColor : "#7D769BDD",
    },
    searchBar: {
        labelTextColor: "rgba(125, 118, 155, 0.867)",
        inputBackgroundColor: "rgb(27, 26, 35)",
        inputTextColor: "rgb(145, 138, 173)",
        inputBorderColor: "rgb(47, 45, 59)",
        focusInputBorderColor: "#30B383"
    },
    nEntries : {
        textColor: "#918AAD",
    }
}