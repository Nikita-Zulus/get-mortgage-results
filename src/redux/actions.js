import { ADD_BANKS, LOADER, PENDING, RESULT } from "./types";

function addSetBanks(payload) {
  return {
    type: ADD_BANKS,
    payload,
  };
}
const setLoader = (payload) => {
  return {
    type: LOADER,
    payload,
  };
};
const setPending = (payload) => {
  return {
    type: PENDING,
    payload,
  };
};
const setResult = (payload) => {
  return {
    type: RESULT,
    payload,
  };
};
export const addBanks = (firstSet, secondSet) => {
  return (dispatch) => {
    dispatch(setPending("Ожидаем ответ от 6 банков"));
    dispatch(setLoader(true));
    setTimeout(() => {
      dispatch(addSetBanks(firstSet));
      dispatch(
        setResult({ minpercent: "6,66%", minlimit: "6 млн", aproved: "1" })
      );
      setTimeout(() => {
        dispatch(addSetBanks(secondSet));
        dispatch(setLoader(false));
        dispatch(setPending("Всего доступно 6 предложений"));
        dispatch(
          setResult({ minpercent: "5,85%", minlimit: "12 млн", aproved: "6" })
        );
      }, 3000);
    }, 2000);
  };
};
