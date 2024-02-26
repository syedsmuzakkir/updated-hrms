"use client";
import { createSlice } from "@reduxjs/toolkit"
const AddEquipmentSlice = createSlice({
    name: "AddEquipment",
    initialState: {
        Device: {},
        equipment: [{
            DeviceType: {},
            ManfufacturerName: {},
            SerialNumber: {},
            Notes: {},
            SupplyDate: {}
        }],


    },



    reducers: {
        AddEquipment: (state, action) => {
            const {DeviceType, ManfufacturerName, SerialNumber, Notes, SupplyDate } = action.payload;
            
            // Update specific properties in the first item of the equipment array
            state.equipment[0].DeviceType = DeviceType;

            state.equipment[0].ManfufacturerName = ManfufacturerName;
            state.equipment[0].SerialNumber = SerialNumber;
            state.equipment[0].Notes = Notes;
            state.equipment[0].SupplyDate = SupplyDate;

        },


    }
})

export const { AddEquipment } = AddEquipmentSlice.actions;
export default AddEquipmentSlice.reducer;

