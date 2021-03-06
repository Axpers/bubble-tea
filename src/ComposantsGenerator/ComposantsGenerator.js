import React from "react";
import NomBubbleTea from "./NomBubbleTea";
import CouleurGobelet from "./CouleurGobelet";
import CouleurTea from "./CouleurTea";
import CouleurTapioca from "./CouleurTapioca";
import TailleRendu from "./TailleRendu";
import FontRendu from "./FontRendu";

const ComposantsGenerator = function () {
  return (
    <form id="composants-generator">
      <NomBubbleTea />
      <CouleurGobelet />
      <CouleurTea />
      <CouleurTapioca />
      <TailleRendu />
      <FontRendu />
    </form>
  );
};

export default ComposantsGenerator;
