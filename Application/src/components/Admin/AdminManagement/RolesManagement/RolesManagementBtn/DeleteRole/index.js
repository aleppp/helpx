import React from "react";
import "./style.css";

function PopupButton() {
  return (
    <div class="PopupButton">
      <button onclick="document.getElementById('id01').style.display='block'">
        Open Modal
      </button>
      <div id="id01" class="modal">
        <span
          onclick="document.getElementById('id01').style.display='none'"
          class="close"
          title="Close Modal"
        >
          ×
        </span>
      </div>

      <form class="modal-content" action="/action_page.php">
        <div class="container">
          <h1>Delete Account</h1>
          <p>Are you sure you want to delete your account?</p>
          <div class="clearfix">
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              class="cancelbtn"
            >
              Cancel
            </button>
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              class="deletebtn"
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PopupButton;
