import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export function Loader() {
  const loader = useSelector((state) => state.loader);
  return (
    <Fragment>
      {loader && (
        <div className="loader">
          <div className="loader__upper">
            <div className="loader__title loader__title_height-xl loader__title_xl-width-max"></div>
            <div className="loader__title loader__title_height-l"></div>
          </div>
          <div className="loader__bottom">
            <div className="loader__title-first">
              <div className="loader__title loader__title_height-ml loader__title_ml-width-min"></div>
              <div className="loader__title loader__title_height-xxl loader__title_xxl-width-medium"></div>
            </div>
            <div className="loader__title-second">
              <div className="loader__title loader__title_height-ml loader__title_ml-width-max"></div>
              <div className="loader__title loader__title_height-xxl loader__title_xxl-width-max"></div>
            </div>
            <div className="loader__title-third">
              <div className="loader__title loader__title_height-ml loader__title_ml-width-medium"></div>
              <div className="loader__title loader__title_height-xxl loader__title_xxl-width-min"></div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
