import { ADD_BANKS, LOADER, PENDING, RESULT } from "./types";

const initialState = {
  banks: [],
  pending: "Получить предложения",
  loader: false,
  result: { minpercent: "NaN", minlimit: "NaN", aproved: "NaN" },
  firstSet: [
    {
      name: "Банк БЖФ",
      logo: require("../images/banks-icons/bank-bjf.svg"),
      percent: "6,66%",
      limit: "6",
      firstpay: "20",
      onlineprocess: false,
      calendar: false,
      difpay: false,
      gospodderzka: true,
    },
  ],
  secondSet: [
    {
      name: "ПСБ",
      logo: require("../images/banks-icons/psb.svg"),
      percent: "5,58%",
      limit: "12",
      firstpay: "20",
      onlineprocess: false,
      calendar: false,
      difpay: false,
      gospodderzka: true,
    },
    {
      name: "Совскомбанк",
      logo: require("../images/banks-icons/sovcombank.svg"),
      percent: "4,9%",
      limit: "12",
      firstpay: "20",
      onlineprocess: true,
      calendar: true,
      difpay: false,
      gospodderzka: true,
    },
    {
      name: "Райффайзенбанк",
      logo: require("../images/banks-icons/raifaizen.svg"),
      percent: "4,99%",
      limit: "12",
      firstpay: "20",
      onlineprocess: true,
      calendar: false,
      difpay: false,
      gospodderzka: true,
    },
    {
      name: "Банк ВТБ",
      logo: require("../images/banks-icons/bank-vtb.svg"),
      percent: "5%",
      limit: "12",
      firstpay: "20",
      onlineprocess: false,
      calendar: false,
      difpay: false,
      gospodderzka: true,
    },
    {
      name: "Газпромбанк",
      logo: require("../images/banks-icons/gazprom.svg"),
      percent: "5,5%",
      limit: "12",
      firstpay: "20",
      onlineprocess: false,
      calendar: false,
      difpay: true,
      gospodderzka: true,
    },
  ],
};

export function banksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BANKS:
      return {
        ...state,
        banks: [...state.banks, ...action.payload],
      };
    case LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case PENDING:
      return {
        ...state,
        pending: action.payload,
      };
    case RESULT:
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
}
