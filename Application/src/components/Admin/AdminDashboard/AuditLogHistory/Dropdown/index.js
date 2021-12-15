import React from "react";
import ReactDOM from "react";
import "./style.css";

export default function Filter() {
  return (
    <div class="container">
      <form>
        <input type="search" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked,
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange(event) {
    const { handleCheckboxChange } = this.props;
    this.setState({ isChecked: !this.state.isChecked });
    handleCheckboxChange(event);
  }

  render() {
    const { id, legend, name, label, disabled } = this.props;
    const { isChecked } = this.state;
    console.log("Checkbox Checked state: ", this.state.isChecked);
    return (
      <div>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={label}
          checked={isChecked}
          disabled={disabled}
          onChange={this.toggleCheckboxChange}
        />

        <label htmlFor={label} label={label}>
          {label}
        </label>
      </div>
    );
  }
}

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, legend } = this.props;
    const createCheckbox = React.Children.map(children, (child) => {
      return (
        <li>
          {React.cloneElement(child, {
            id: child.props.id,
            label: child.props.label,
            disabled: child.props.disabled,
            checked: child.props.checked,
            name: child.props.name,
            handleCheckboxChange: child.props.handleCheckboxChange,
          })}
        </li>
      );
    });

    return (
      <div className="checkbox">
        <fieldset className="usa-fieldset-inputs usa-sans">
          <legend className="usa-sr-only">{legend}</legend>
          <ul className="usa-unstyled-list">{createCheckbox}</ul>
        </fieldset>
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillUpdate() {
    console.log(this.state.checked);
  }
  onChange(event) {
    this.setState({ checked: !event.target.checked });
  }

  render() {
    return (
      <div>
        <CheckboxGroup legend="Test Checkbox Group">
          <Checkbox
            name="New Box"
            id="testId"
            label="Drivers License"
            checked={true}
            handleCheckboxChange={this.onChange}
          />

          <Checkbox name="2nd Box" id="other-id" label="State Id" />
          <Checkbox name="3rd Box" id="other-id" label="Military Id" />
        </CheckboxGroup>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("app"));
