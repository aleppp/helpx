import React, { useState } from "react";
import axios from "axios";
import "../style.css";
import GetCurrentLocalDateTime from "../../../../../services/GetCurrentLocalDateTime";
import Swal from "sweetalert2";

export default function EditApplicationSettings({ appSettings, ...props }) {
  const [newValue, setNewValue] = useState([]);
  const [attributeId, setAttributeId] = useState([]);
  let attributes = {
    appid: [],
    attributeid: [],
    newvalue: [],
    datemodified: [],
  };

  function changeHandler(e) {
    setNewValue([...newValue, e.target.value]);
    setAttributeId([...attributeId, e.target.name]);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  function submitUpdate(e) {
    e.preventDefault();
    for (var i = 0; i < newValue.length; i++) {
      attributes.appid = appSettings.appid;
      attributes.attributeid = attributeId[i];
      attributes.newvalue = newValue[i];
      attributes.datemodified = GetCurrentLocalDateTime();
      axios
        .put(
          `http://localhost:8080/application-settings/${appSettings.appid}`,
          {
            attributes,
          }
        )
        .catch((error) =>
          console.log(
            "Failed to update employment type data",
            error.response.data
          )
        );
    }
    Swal.fire({
      icon: "success",
      title: "Successfully Updated!",
      showConfirmButton: false,
      timer: 1500,
    });
    setInterval(() => {
      refreshPage();
    }, 1500);
  }

  return (
    <div class="container-editapp">
      <h2 className="title-editapp">Edit Application</h2>
      <div className="display-column">
        <label for="appconfig">Background Color</label>
        <select name="1" onSubmit={submitUpdate} onChange={changeHandler}>
          <option>{appSettings.BackgroundColor}</option>
          <option>Yellow</option>
          <option>Green</option>
          <option>Red</option>
          <option>Blue</option>
        </select>

        <label for="appconfig">Font Size</label>
        <select name="2" onSubmit={submitUpdate} onChange={changeHandler}>
          <option>{appSettings.FontSize}</option>
          <option>14</option>
          <option>16</option>
          <option>18</option>
          <option>20</option>
        </select>

        <label for="appconfig">Font Family</label>
        <select name="3" onSubmit={submitUpdate} onChange={changeHandler}>
          <option>{appSettings.FontFamily}</option>
          <option>Arial</option>
          <option>Mulish</option>
          <option>Times New Roman</option>
        </select>
        <label for="appconfig">Theme</label>
        <select name="4" onSubmit={submitUpdate} onChange={changeHandler}>
          <option>{appSettings.Theme}</option>
          <option>Night Mode</option>
          <option>Default</option>
          <option>Monothematic</option>
        </select>
        <label for="appconfig">Navigation Bar</label>
        <select name="5" onSubmit={submitUpdate} onChange={changeHandler}>
          <option>{appSettings.NavigationBar}</option>
          <option>Vertical</option>
          <option>Horizontal</option>
        </select>

        <div className="float-center-app">
          <button
            type="submit"
            className="button-blue-small"
            onClick={submitUpdate}
          >
            Save
          </button>
          <button
            className="button-red"
            onClick={() => props.changeState(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
