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
            return {...state, employees : [...state.employees, action.payload.employee]}
        }
    }
})

export default employeesSlice.reducer

interface IEmployeesState {
    employees : Array<unknown>
}

export const { addEmployee } = employeesSlice.actions