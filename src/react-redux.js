import React, { useContext, useState, useEffect } from "react";

const Context = React.createContext();

export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    return function (props) {
      const store = useContext(Context);
      const [state, setState] = useState(store.getState());
      useEffect(() => {
        store.subscribe(() => {
          setState(store.getState());
        });
      }, []);
      const dispatchProps = mapDispatchToProps(store.dispatch);
      const stateProps = mapStateToProps(state);
      return <Component {...props} {...dispatchProps} {...stateProps} />;
    };
  };
}
/* 
const obj1 = {
  method() {
    return console.log("method1");
  },
};
const obj2 = {
  method2:()=> {
    return console.log("method2!");
  },
  __proto__: obj1,
}; */
