export const laboratorycolumns = [
  {
    colname: "name",
    aliasname: "Laboratory Name",
    style: { textAlign: "left", fontSize: "14px" },
    isnavigate: true,
    cell: (props) => (
      <td
        key={props.Index}
        style={props.style}
        onDoubleClick={(e) => props.onNavigate(props.rwdata.id)}
      >
        {props.val}
      </td>
    ),
  },
  {
    colname: "city",
    aliasname: "City",
    style: { textAlign: "left", fontSize: "14px" },
  },
  {
    colname: "cluster",
    aliasname: "Cluster",
    style: { textAlign: "left", fontSize: "14px" },
  },
  {
    colname: "availableEquipment",
    aliasname: "Available Equipment",
    style: { textAlign: "left", fontSize: "14px" },
    isArray: true,
  },
  {
    aliasname: "Fuel Oil Testing Parameters",
    style: { textAlign: "center", fontSize: "14px" },
    colspan: 4,
    isth: true,
  },
  {
    colname: "viscosity",
    objname: "fuelOilParameters",
    aliasname: "Viscosity",
    style: { textAlign: "center", fontSize: "14px", width: "120px" },
    isSub: true,
    isBlur: true,
    cell: (props) => (
      <td key={props.Index} style={props.style}>
        <input
          type="text"
          className="form-control"
          name="viscosity"
          placeholder=""
          spellCheck={false}
          autoComplete="off"
          defaultValue={props.val}
          onBlur={(e) => {
            props.onBlur(e, props.rwdata);
          }}
        />
      </td>
    ),
  },
  {
    colname: "sulfurContent",
    objname: "fuelOilParameters",
    aliasname: "Sulfur Content",
    style: { textAlign: "center", fontSize: "14px", width: "120px" },
    isSub: true,
    isBlur: true,
    cell: (props) => (
      <td key={props.Index} style={props.style}>
        <input
          type="text"
          className="form-control"
          name="sulfurContent"
          placeholder=""
          autoComplete="off"
          spellCheck={false}
          defaultValue={props.val}
          onBlur={(e) => {
            props.onBlur(e, props.rwdata);
          }}
        />
      </td>
    ),
  },
  {
    colname: "waterContent",
    objname: "fuelOilParameters",
    aliasname: "Water Content",
    style: { textAlign: "center", fontSize: "14px", width: "120px" },
    isSub: true,
    isBlur: true,
    cell: (props) => (
      <td key={props.Index} style={props.style}>
        <input
          type="text"
          className="form-control"
          name="waterContent"
          placeholder=""
          autoComplete="off"
          spellCheck={false}
          defaultValue={props.val}
          onBlur={(e) => {
            props.onBlur(e, props.rwdata);
          }}
        />
      </td>
    ),
  },
  {
    colname: "flashPoint",
    objname: "fuelOilParameters",
    aliasname: "Flash Point",
    style: { textAlign: "center", fontSize: "14px", width: "120px" },
    isSub: true,
    isBlur: true,
    cell: (props) => (
      <td key={props.Index} style={props.style}>
        <input
          type="text"
          className="form-control"
          name="flashPoint"
          placeholder=""
          autoComplete="off"
          spellCheck={false}
          defaultValue={props.val}
          onBlur={(e) => {
            props.onBlur(e, props.rwdata);
          }}
        />
      </td>
    ),
  },
  {
    colname: "status",
    aliasname: "Status",
    style: { textAlign: "left", fontSize: "14px" },
  },
  {
    aliasname: "Action",
    style: {
      display: "flex",
      justifyContent: "center",
      textAlign: "left",
      fontSize: "14px",
      alignItems: "center",
    },
    isnavigate: true,
    cell: (props) => (
      <td style={props.style} key={props.Index}>
        <button
          className="btn-lims"
          onClick={(e) => props.onNavigate(props.rwdata.id)}
        >
          Edit&nbsp; <i className="bx bxs-pencil"></i>
        </button>
      </td>
    ),
  },
];
export const Validationprops = [
  {
    col: "name",
    message: "Please Enter Laboratory Name",
    isvalidate: true,
    valtype: "Length",
  },
  {
    col: "city",
    message: "Please Enter City Name",
    isvalidate: true,
    valtype: "Length",
  },
  {
    col: "cluster",
    message: "Please Enter Cluster Name",
    isvalidate: true,
    valtype: "Length",
  },
  {
    col: "availableEquipment",
    message: "Please Enter AvailableEquipment",
    isvalidate: true,
  },
  {
    col: "viscosity",
    message: "Please Enter  Viscosity",
    isvalidate: true,
    valtype: "Length",
  },
  {
    col: "sulfurContent",
    message: "Please Enter SulfurContent",
    isvalidate: true,
    valtype: "Length",
  },
  {
    col: "waterContent",
    message: "Please Enter WaterContente",
    isvalidate: true,
    valtype: "Length",
  },
  {
    col: "flashPoint",
    message: "Please Enter flash Point",
    isvalidate: true,
    valtype: "Length",
  },
  {
    col: "status",
    message: "Please Enter status of Laboratory Name",
    isvalidate: true,
    valtype: "Length",
  },
];
export const custvalidation = (data, valprop) => {
  try {
    let IsValid = true;
    for (let i = 0; i < valprop.length; i++) {
      if (valprop[i].isvalidate) {
        switch (valprop[i].valtype) {
          case "Length":
            if (data[valprop[i].col].length === 0) {
              alert(valprop[i].message);
              return false;
            } else IsValid = true;
            break;
          default:
            break;
        }
      }
    }
    return IsValid;
  } catch (e) {
    console.error(e);
  }
};
