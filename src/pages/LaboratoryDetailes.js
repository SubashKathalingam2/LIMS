// src/pages/LaboratoryDetails.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clear_Laboratoryinput,
  input_onchange,
  updateLaboratory,
  view_Laboratoryinput,
} from "../features/laboratories/laboratorySlice";
import { useNavigate, useParams } from "react-router-dom";
import { Validationprops, custvalidation } from "../Lab_Columns";

const LaboratoryDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const _state = useSelector((state) => state.laboratories.laboratories);
  const navigate = useNavigate();

  useEffect(() => {
    View_Laboratory();
  }, [id]);
  const View_Laboratory = async () => {
    if (_state.arrEntlab.length === 0) {
      await Close_OnClick();
    } else if (_state.arrEntlab.length > 0 && id !== "New") {
      let EntData = _state.arrEntlab.find((lab) => lab.id === parseInt(id));
      await dispatch(view_Laboratoryinput(EntData));
    } else {
      await dispatch(clear_Laboratoryinput());
    }
  };
  const Save_Click = async () => {
    try {
      let objLab = {
        id: _state.id,
        name: _state.name,
        city: _state.city,
        cluster: _state.cluster,
        availableEquipment:
          _state.availableEquipment.length > 0
            ? _state.availableEquipment.split(",")
            : "",
        fuelOilParameters: {
          viscosity: _state.viscosity + "%",
          sulfurContent: _state.sulfurContent + "%",
          waterContent: _state.waterContent + "%",
          flashPoint: _state.flashPoint + "\u00b0C",
        },
        status: _state.status,
      };
      const IsValid = await custvalidation(_state, Validationprops);
      if (IsValid) {
        let EntLab = JSON.parse(JSON.stringify(_state.arrEntlab));
        if (Number(_state.id) === 0) {
          const MaxId =
            EntLab.length === 0 ? 0 : Math.max(...EntLab.map((lab) => lab.id));
          objLab.id = MaxId + 1;
          EntLab.push(objLab);
        } else {
          EntLab = EntLab.map((dt) => {
            if (dt.id === Number(objLab.id)) {
              dt = objLab;
            }
            return dt;
          });
        }
        await dispatch(updateLaboratory({ Data: EntLab }));
        await Clear_OnClick();
      }
    } catch (e) {
      console.error(e);
    }
  };
  const Delete_click = async () => {
    try {
      if (Number(_state.id) === 0) alert("Please Select Laboratory");
      else {
        let EntLab = JSON.parse(JSON.stringify(_state.arrEntlab));
        EntLab = EntLab.filter((dt) => dt.id !== Number(_state.id));
        await dispatch(updateLaboratory({ Data: Validate_Status(EntLab) }));
        await Clear_OnClick();
      }
    } catch (e) {
      console.error(e);
    }
  };
  const Clear_OnClick = async () => {
    await dispatch(clear_Laboratoryinput());
  };
  const Close_OnClick = async () => {
    await dispatch(clear_Laboratoryinput());
    navigate("/");
  };
  const li_click = async (lab) => {
    await dispatch(view_Laboratoryinput(lab));
  };
  const Validate_Status = (data) => {
    data = JSON.parse(JSON.stringify(data));
    if (data.length > 0) {
      let EntData = data.filter(
        (dt) => dt.status !== "Live" && dt.status !== "Under Maintenance"
      );
      return EntData;
    } else return [];
  };

  return (
    <div className="lims-card1">
      <div className="lims-wrapper1">
        <h1 className="lims-header1">Laboratory</h1>
        <div className="lims-wrapper1-item">
          <div className="lims-listbox">
            <ul>
              {Validate_Status(_state.arrEntlab).map((lab, index) => (
                <li key={index} onClick={(e) => li_click(lab)}>
                  {lab.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="lims-wrapper1">
        <h1 className="lims-header1">Laboratory Info</h1>
        <div className="lims-wrapper1-item item1">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <label>Laboratory Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Laboratory Name"
                autoComplete="off"
                spellCheck={false}
                name="name"
                value={_state.name}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Laboratory Name"
                autoComplete="off"
                spellCheck={false}
                name="city"
                value={_state.city}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <label>Cluster</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Laboratory Name"
                autoComplete="off"
                spellCheck={false}
                name="cluster"
                value={_state.cluster}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <label>Available Equipment</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Available Equipment Name"
                autoComplete="off"
                spellCheck={false}
                name="availableEquipment"
                value={_state.availableEquipment}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <label>Viscosity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Viscosity"
                autoComplete="off"
                spellCheck={false}
                name="viscosity"
                value={_state.viscosity}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <label>Sulfur Content %</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Sulfur Content"
                autoComplete="off"
                spellCheck={false}
                name="sulfurContent"
                value={_state.sulfurContent}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <label>Water Content %</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Water Content"
                autoComplete="off"
                spellCheck={false}
                name="waterContent"
                value={_state.waterContent}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <label>Flash Point {"\u00b0C"}</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Flash Point"
                autoComplete="off"
                spellCheck={false}
                name="flashPoint"
                value={_state.flashPoint}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <label>Status</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter status"
                autoComplete="off"
                spellCheck={false}
                name="status"
                value={_state.status}
                onChange={(e) => dispatch(input_onchange(e))}
              />
            </div>
          </div>
        </div>
        <div className="ftbtn-section">
          <button className="btn-lims" onClick={() => Save_Click()}>
            <i className="bx bxs-save"></i>&nbsp;Save
          </button>
          <button className="btn-lims" onClick={() => Clear_OnClick()}>
            <i className="bx bx-refresh"></i>&nbsp;Clear
          </button>
          <button className="btn-lims" onClick={() => Delete_click()}>
            <i className="bx bxs-trash-alt"></i>&nbsp;Delete
          </button>
          <button className="btn-lims" onClick={() => Close_OnClick()}>
            <i className="bx bxs-left-arrow"></i>&nbsp;Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaboratoryDetails;
