import React from "react";
import "./form.scss";
import shoeImage from "../../assets/shoes.jpg";

export default function Form({
  companyType,
  setCompanyType,
  searchForProductIdeas,
  handleKeypress,
  setTemperature,
  increasedTemperature,
}) {
  const prompt = "What kind of company do you run?";
  const placeholder = "i.e. travel, beauty, bakery";
  const buttonLabel = "Generate ideas";
  const randomness = "Increase Randomness";
  const formClass = "form";
  const formGroupClass = "form-group";
  const name = "companyType";
  const type = "text";
  const inputClassName = "input";
  const label = "textbox";
  const buttonType = "submit";
  const buttonClassName = "button";
  const checkboxDivClassName = "checkboxDiv";
  const checkboxType = "checkbox";
  const spanId = "increaseRandomness";
  const leftClassName = "left";
  const rightClassName = "right";
  const imageRightClassName = "imgRight";
  const shoeAltText =
    "colorful sneakers displayed with one leaning aginst a white box and one on top of the white box.";
  const contentDiv = "contentDiv";

  return (
    <div className={contentDiv}>
      <div className={leftClassName}>
        <form
          className={formClass}
          onSubmit={searchForProductIdeas}
          id={formClass}
        >
          <div className={formGroupClass}>
            <h1 htmlFor={name}>{prompt}</h1>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className={inputClassName}
              id={name}
              value={companyType}
              onKeyPress={handleKeypress}
              aria-label={label}
              label={label}
              onChange={(e) => setCompanyType(e.target.value)}
              required
            />
          </div>
          <button
            type={buttonType}
            className={buttonClassName}
            aria-label={buttonLabel}
          >
            {buttonLabel}
          </button>
          <div id={checkboxDivClassName}>
            <input
              type={checkboxType}
              onClick={() => setTemperature(increasedTemperature)}
            />{" "}
            <span id={spanId} aria-label={spanId}>
              {randomness}
            </span>
          </div>
        </form>
      </div>
      <div className={rightClassName}>
        <div className={imageRightClassName}>
          <img src={shoeImage} alt={shoeAltText} />
        </div>
      </div>
    </div>
  );
}
