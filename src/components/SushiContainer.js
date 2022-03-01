import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onRemoveSushi }) {

  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiComponents = sushis
  .slice(sushiIndex, sushiIndex + 4)
  // .filter(sushi => sushi.isEaten === false)
  .map((sushi) => 
    <Sushi key={sushi.id} sushi ={sushi} onRemoveSushi={onRemoveSushi}/>
  )

  function handleMoreSushis() {
    setSushiIndex((sushiIndex) => sushiIndex + 4)
  }


  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton handleMoreSushis = {handleMoreSushis} />
    </div>
  );
}

export default SushiContainer;
