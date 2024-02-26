// any store// any store
"use client";
import { configureStore } from "@reduxjs/toolkit";
import professionalDetails from "../slices/profDetails";
import personalDetails from "../slices/personalDetails";
import  AddEquipment  from "../slices/equipments";


export const store = configureStore({
  reducer: {
    professionalDetails: professionalDetails,
    personalDetails: personalDetails,
    AddEquipment:AddEquipment,
  },
});
