import React from "react";
import { useSelector } from "react-redux";

export function MortgageResult() {
  const result = useSelector((state) => state.result);
  return (
    <div className="mortgage-result">
      <div className="min-percent">
        <div className="title title_min-bold">{result.minpercent}</div>
        <div className="subtitle">Мин. ставка</div>
      </div>

      <div className="min-limit">
        <div className="title title_min-bold">{result.minlimit} &#8381;</div>
        <div className="subtitle">Макс. лимит</div>
      </div>
      <div className="aproved">
        <div className="title title_min-bold">{result.aproved} банков</div>
        <div className="subtitle">Одобрено</div>
      </div>
    </div>
  );
}
