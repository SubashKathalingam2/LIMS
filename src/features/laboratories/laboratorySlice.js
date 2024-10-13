// src/features/laboratories/laboratorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  laboratories: {
    id: 0,
    name: "",
    city: "",
    cluster: "",
    availableEquipment: [],
    viscosity: "",
    sulfurContent: "",
    waterContent: "",
    flashPoint: "",
    status: "",
    arrEntlab: [],
  },
};
const laboratorySlice = createSlice({
  name: "laboratories",
  initialState,
  reducers: {
    updateLaboratory: (state, { payload }) => {
      state.laboratories.arrEntlab = payload.Data;
    },
    view_Laboratoryinput: (state, { payload }) => {
      state.laboratories.id = payload.id;
      state.laboratories.name = payload.name;
      state.laboratories.city = payload.city;
      state.laboratories.cluster = payload.cluster;
      state.laboratories.availableEquipment =
        payload.availableEquipment.length > 0
          ? payload.availableEquipment.join(",")
          : "";
      state.laboratories.viscosity = payload.fuelOilParameters.viscosity;
      state.laboratories.sulfurContent =
        payload.fuelOilParameters.sulfurContent.replace("%", "");
      state.laboratories.waterContent =
        payload.fuelOilParameters.waterContent.replace("%", "");
      state.laboratories.flashPoint =
        payload.fuelOilParameters.flashPoint.replace("\u00b0C", "");
      state.laboratories.status = payload.status;
    },
    clear_Laboratoryinput: (state) => {
      state.laboratories.id = 0;
      state.laboratories.name = "";
      state.laboratories.city = "";
      state.laboratories.cluster = "";
      state.laboratories.availableEquipment = [];
      state.laboratories.viscosity = "";
      state.laboratories.sulfurContent = "";
      state.laboratories.waterContent = "";
      state.laboratories.flashPoint = "";
      state.laboratories.status = "";
    },
    input_onchange: (state, { payload }) => {
      state.laboratories[payload.target.name] = payload.target.value;
    },
  },
});
export const {
  updateLaboratory,
  view_Laboratoryinput,
  input_onchange,
  clear_Laboratoryinput,
} = laboratorySlice.actions;
export default laboratorySlice.reducer;
