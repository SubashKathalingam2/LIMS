import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLaboratory } from "../features/laboratories/laboratorySlice";
import Lab_Data from "../Lab_Data.json";
import { laboratorycolumns } from "../Lab_Columns";
import Customizedtable from "../Elements/Customizedtable";
import { useNavigate } from "react-router-dom";
const LaboratoryList = () => {
  const _state = useSelector((state) => state.laboratories.laboratories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (_state.arrEntlab.length === 0) Load_Laboratory();
  }, []);

  const Load_Laboratory = async () => {
    await dispatch(updateLaboratory({ Data: Lab_Data }));
  };
  const Validate_Status = (data) => {
    if (data.length > 0) {
      let EntData = data.filter(
        (dt) => dt.status !== "Live" && dt.status !== "Under Maintenance"
      );
      return EntData;
    } else return [];
  };
  const value_Onchange = async (e, data) => {
    try {
      let EntLab = JSON.parse(JSON.stringify(_state.arrEntlab));
      EntLab = EntLab.map((dt) => {
        if (dt.id === Number(data.id)) {
          dt.fuelOilParameters[e.target.name] = e.target.value;
        }
        return dt;
      });
      await dispatch(updateLaboratory({ Data: EntLab }));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="lims-card">
      <div className="lims-header">
        <h1>Laboratory Listing</h1>
        <button
          className="btn-lims"
          onClick={(e) => {
            navigate(`/laboratories/New`);
          }}
        >
          <i className="bx bx-plus"></i>&nbsp;Create Laboratory
        </button>
      </div>
      <div className="lims-wrapper">
        <Customizedtable
          Data={Validate_Status(JSON.parse(JSON.stringify(_state.arrEntlab)))}
          Column={laboratorycolumns}
          InBlur_onchange={value_Onchange}
        />
      </div>
    </div>
  );
};

export default LaboratoryList;
