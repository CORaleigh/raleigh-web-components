import './App.css';
import 'raleigh-stencil-components'
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-label";

import { CalciteLabel, CalciteOption, CalciteSelect, CalciteInput } from '@esri/calcite-components-react/dist/components';
import { useEffect, useRef, useState } from 'react';
function WebMap() {
  const [selectedComponent, setSelectedComponent] = useState('web-map');
  const [mapId, setMapId] = useState('74fd0c8f4f044511b3542a268a6b008a');
  const webMap = useRef();
  useEffect(() => {
    setMapId(props.mapId);
  },[props.mapId])
  return (
    <div className="App">
      <CalciteSelect onCalciteSelectChange={(e) => {
        setSelectedComponent(e.target.selectedOption.value);
      }}>
        <CalciteOption value="web-map" label='Web Map'></CalciteOption>
        <CalciteOption value="find-my-service" label='Find My Service'></CalciteOption>
        <CalciteOption value="water-usage" label='Water Usage'></CalciteOption>
      </CalciteSelect>
      <code>{webMap?.current?.outerHTML.toString().replace(webMap?.current?.innerHTML.toString() || '', '').replace('class="hydrated"','')}</code>
      {selectedComponent === 'web-map' && <div>
      <web-map ref={webMap} map-id={mapId} height="300px" width="100%"></web-map>
      <CalciteLabel>map-id<CalciteInput onCalciteInputChange={(e) => {
        setMapId(e.target.value);
 
      }} value={mapId}></CalciteInput></CalciteLabel>
      </div>}
      {selectedComponent === 'find-my-service' && <div>
      <find-my-service></find-my-service>
      </div>}      
      {selectedComponent === 'find-my-service' && <div>
      <water-usage></water-usage>
      </div>}          
    </div>
  );
}

export default App;
