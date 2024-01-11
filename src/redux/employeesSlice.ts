import { createSlice } from "@reduxjs/toolkit";
import usersDatas from "../datas/usersDatas";

export const initialState : IEmployeesState = {
    employees : usersDatas
}

export const employeesSlice = createSlice({
    name : 'employees',
    initialState,
    reducers : {
        addEmployee(state, action){
            if(action.payload.employee == null) return {...state}
            const employeesList = [...state.employees]
            employeesList.push(action.payload.employee)
            return {...state, employees : employeesList}
        }
    }
})

export default employeesSlice.reducer

interface IEmployeesState {
    employees : Array<unknown>
}