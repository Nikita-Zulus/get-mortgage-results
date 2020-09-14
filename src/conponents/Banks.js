import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export function Banks() {
  const banks = useSelector((state) => state.banks);
  return (
    <Fragment>
      {banks.map((bank) => (
        <div className="bank">
          <div className="bank__header">
            <div className="bank__name">
              <div className="bank__title">{bank.name}</div>
              <div className="bank__subtitle">Новостройка</div>
            </div>
            <img src={bank.logo} className="bank-icon" alt="bank-icon" />
          </div>
          <div className="bank__condition">
            <div className="bank__percent">
              <div className="subtitle bank__subtitle">Ставка</div>
              <div className="bank__value bank__min-persent">
                {bank.percent}
              </div>
            </div>

            <div className="bank__limit">
              <div className="subtitle bank__subtitle">Макс. лимит</div>
              <div className="bank__value bank__max-limit">
                {bank.limit}
                <div className="bank__grey-mode bank__font-size-mode">МЛН.</div>
                <div className="bank__grey-mode">&#8381;</div>
              </div>
            </div>
            <div className="bank__pay">
              <div className="subtitle bank__subtitle">Взнос от</div>
              <div className="bank__value bank__first-pay">
                {bank.firstpay}
                <div className="bank__grey-mode"> %</div>
              </div>
            </div>
          </div>
          {bank.onlineprocess && (
            <div className="online-process-block">
              <div className="online-process">
                <img
                  src={require("../images/online-process.svg")}
                  className="online-process__icon"
                  alt="online-process-icon"
                />
                <div className="title online-process__title">
                  Онлайн процесс
                </div>
              </div>
              {bank.calendar && (
                <div className="calendar">
                  <img
                    src={require("../images/calendar.svg")}
                    className="calendar__icon"
                    alt="calendar-icon"
                  />
                </div>
              )}
            </div>
          )}

          {bank.difpay && (
            <div className="dif-pay">
              <img
                src={require("../images/dif-pay.svg")}
                className="dif-pay__icon"
                alt="dif-pay-icon"
              />
              <div className="title dif-pay__title">Доступен дифплатёж</div>
            </div>
          )}

          {bank.gospodderzka && (
            <div className="gospodderzka">
              <img
                src={require("../images/gerb.svg")}
                className="gospodderzka__gerb"
                alt="gerb-icon"
              />
              <div className="title gospodderzka__title">
                Господдержка на новостройки
              </div>
            </div>
          )}
          <div className="bank__footer">
            <button className="bank__phone-button">
              <img
                src={require("../images/phone.svg")}
                className="bank__phone-icon"
                alt="phone-icon"
              />
            </button>
            <button className="bank__send-button">Отправить в банк</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

/* const mapStateToProps = (state) => {
  return {
    banks: state.banks,
  };
};
const mapDispatchToProps = {
  addBanks,
};
export const Banks = connect(mapStateToProps, mapDispatchToProps)(Banks_); */
