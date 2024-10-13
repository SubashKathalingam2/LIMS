import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Customizedtable(props) {
  const navigate = useNavigate();

  useEffect(() => {}, [props]);
  const navigate_tocomponent = (id) => {
    navigate(`/laboratories/${id}`);
  };
  const rowclick = (data, Index) => {
    navigate(`/laboratories/${data.id}`);
  };
  return (
    <table className="lims-list">
      <thead>
        <tr>
          {props.Column.map(
            (col, index) =>
              !col.isSub && (
                <th colSpan={col.colspan ? col.colspan : ""} key={index}>
                  {col.aliasname}
                </th>
              )
          )}
        </tr>
        <tr>
          {props.Column.map((col, index) =>
            col.isSub ? (
              <th key={index} colSpan={col.colspan ? col.colspan : ""}>
                {col.aliasname}
              </th>
            ) : !col.isth ? (
              <th key={index} style={col.style}></th>
            ) : (
              ""
            )
          )}
        </tr>
      </thead>
      <tbody>
        {props.Data.map((data, Index) => (
          <tr key={Index} onDoubleClick={() => rowclick(data, Index)}>
            {props.Column.map((col, dindex) =>
              col.cell ? (
                col.isSub ? (
                  <col.cell
                    style={col.style}
                    onBlur={col.isBlur ? props.InBlur_onchange : () => {}}
                    onNavigate={
                      col.isnavigate ? navigate_tocomponent : () => {}
                    }
                    rwdata={data}
                    val={data[col.objname][col.colname]}
                    Index={dindex}
                  />
                ) : (
                  <col.cell
                    style={col.style}
                    onBlur={col.isBlur ? props.InBlur_onchange : () => {}}
                    onNavigate={
                      col.isnavigate ? navigate_tocomponent : () => {}
                    }
                    rwdata={data}
                    val={data[col.colname]}
                    Index={dindex}
                  />
                )
              ) : !col.isth ? (
                <td key={dindex} style={col.style}>
                  {col.isArray
                    ? data[col.colname].join(", ")
                    : data[col.colname]}
                </td>
              ) : (
                ""
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Customizedtable;
