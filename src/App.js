import React, { useState } from "react";
import Core from "./Core";
import Sidebar from "./Sidebar";
import NameBTContext from "./ContextVariables/NameBTContext";
import BorderColorBTContext from "./ContextVariables/BorderColorBTContext";
import TeaColorContext from "./ContextVariables/TeaColorContext";
import TapiocaColorContext from "./ContextVariables/TapiocaColorContext";
import ScaleBTContext from "./ContextVariables/ScaleBTContext";
import FontRenduContext from "./ContextVariables/FontRenduContext";

const App = function () {
  const nameBT = useState("Nom BubbleTea");
  const borderColorBT = useState("#FE8261");
  const teaColor = useState("#FE8261");
  const tapiocaColor = useState("#404162");
  const scaleBT = useState("0.9");
  const fontRendu = useState("Raleway");

  return (
    <div id="root" className="main-container">
      <NameBTContext.Provider value={nameBT}>
        <BorderColorBTContext.Provider value={borderColorBT}>
          <TeaColorContext.Provider value={teaColor}>
            <TapiocaColorContext.Provider value={tapiocaColor}>
              <ScaleBTContext.Provider value={scaleBT}>
                <FontRenduContext.Provider value={fontRendu}>
                  <Core />
                  <Sidebar />
                </FontRenduContext.Provider>
              </ScaleBTContext.Provider>
            </TapiocaColorContext.Provider>
          </TeaColorContext.Provider>
        </BorderColorBTContext.Provider>
      </NameBTContext.Provider>
    </div>
  );
};

export default App;
