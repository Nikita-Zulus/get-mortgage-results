import React from "react";
import { connect } from "react-redux";
import { addBanks } from "../redux/actions";

export function Footer_({
  addBanks,
  pending,
  firstSet,
  secondSet,
  banks,
  loader,
}) {
  function handleClick() {
    if (banks.length !== 0) {
      return;
    }
    addBanks(firstSet, secondSet);
  }
  return (
    <div className="footer-main">
      <button
        className={
          loader
            ? "button footer-main__button_active"
            : "button footer-main__button"
        }
        onClick={handleClick}
      >
        <span>{pending}</span>
      </button>
      <div className="footer-main__menu">
        <div className="footer-main__menu__flat">
          Квартира
          <img
            src={require("../images/arrow-down.svg")}
            alt="arrow-down-icon"
          />
        </div>
        <div className="footer-main__settings-folder">
          <img
            src={require("../images/settings.svg")}
            className="footer-main__settings-icon"
            alt="settings-icon"
          />
        </div>
        Фильтры
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    banks: state.banks,
    pending: state.pending,
    firstSet: state.firstSet,
    secondSet: state.secondSet,
    loader: state.loader,
  };
};
const mapDispatchToProps = {
  addBanks,
};
export const Footer = connect(mapStateToProps, mapDispatchToProps)(Footer_);
