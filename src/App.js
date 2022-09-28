import './App.css';
import 'raleigh-stencil-components'
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-switch";

import { CalciteLabel, CalciteOption, CalciteSelect, CalciteInput, CalcitePanel, CalciteShell, CalciteShellPanel, CalciteSwitch } from '@esri/calcite-components-react/dist/components';
import { useEffect, useRef, useState } from 'react';
function App() {
  const [selectedComponent, setSelectedComponent] = useState('web-map');
  const [mapId, setMapId] = useState('74fd0c8f4f044511b3542a268a6b008a');
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('300px');
  const [zoom, setZoom] = useState();
  const [address, setAddress] = useState('');
  const [layerlist, setLayerlist] = useState(false);
  const [legend, setLegend] = useState(false);
  const [search, setSearch] = useState(false);
  const [code, setCode] = useState('');

  const webMap = useRef();
  const findMyService = useRef();
  const waterUsage = useRef();

  useEffect(() => {
    if (webMap.current && selectedComponent === 'web-map') {
      setCode(webMap?.current?.outerHTML.toString().replace(webMap?.current?.innerHTML.toString() || '', '').replace('class="hydrated"','').replaceAll('=""',''))
    }
    if (findMyService.current && selectedComponent === 'find-my-service') {
      setCode(findMyService?.current?.outerHTML.toString().replace(findMyService?.current?.innerHTML.toString() || '', '').replace('class="hydrated"','').replaceAll('=""',''))
    }
    if (waterUsage.current && selectedComponent === 'water-usage') {
      setCode(findMyService?.current?.outerHTML.toString().replace(findMyService?.current?.innerHTML.toString() || '', '').replace('class="hydrated"','').replaceAll('=""',''))
    }
  });
  return (

    <div className="App">
      <CalciteShell>
        <CalciteShellPanel slot='primary-panel' position='start' widthScale='l'>
          <CalcitePanel title='Settings' heading='Settings'>
            <div className='settings'>
            <CalciteLabel>Select Component<CalciteSelect onCalciteSelectChange={(e) => {
              setSelectedComponent(e.target.selectedOption.value);
            }}>
              <CalciteOption value="web-map" label='Web Map'></CalciteOption>
              <CalciteOption value="find-my-service" label='Find My Service'></CalciteOption>
              <CalciteOption value="water-usage" label='Water Usage'></CalciteOption>
            </CalciteSelect></CalciteLabel>

            {selectedComponent === 'web-map' && <div><CalciteLabel>map-id<CalciteInput onCalciteInputChange={(e) => {
              setMapId(e.target.value);
            }} value={mapId}></CalciteInput></CalciteLabel>
              <CalciteLabel>width<CalciteInput onCalciteInputChange={(e) => {
                setWidth(e.target.value);
              }} value={width}></CalciteInput></CalciteLabel>
              <CalciteLabel>height<CalciteInput onCalciteInputChange={(e) => {
                setHeight(e.target.value);
              }} value={height}></CalciteInput></CalciteLabel>
              <CalciteLabel>zoom<CalciteInput onCalciteInputChange={(e) => {
                setZoom(parseInt(e.target.value));
              }} value={zoom}></CalciteInput></CalciteLabel>              
              <CalciteLabel>address<CalciteInput onCalciteInputChange={(e) => {
                setAddress(e.target.value);
              }} value={address}></CalciteInput></CalciteLabel>            
              <CalciteLabel>layerlist<CalciteSwitch onCalciteSwitchChange={(e) => {
                setLayerlist(e.target.checked);
              }} checked={layerlist ? '' : undefined}></CalciteSwitch></CalciteLabel>           
              <CalciteLabel>legend<CalciteSwitch onCalciteSwitchChange={(e) => {
                setLegend(e.target.checked);
              }} checked={legend ? '' : undefined}></CalciteSwitch></CalciteLabel>       
              <CalciteLabel>search<CalciteSwitch onCalciteSwitchChange={(e) => {
                setSearch(e.target.checked);
              }} checked={search ? '' : undefined}></CalciteSwitch></CalciteLabel>           
   
                        
              </div>              
              }<code>{code}</code></div>
          </CalcitePanel>
        </CalciteShellPanel>
        {selectedComponent === 'web-map' && <div className='container'>

          <web-map ref={webMap} map-id={mapId} height={height} width={width} search={search ? '' : undefined}
          layerlist={layerlist ? '' : undefined} legend={legend ? '' : undefined} address={address.length ? address : undefined} zoom={zoom ? zoom : undefined}
          ></web-map>

        </div>}
        {selectedComponent === 'find-my-service' && <div>
          <find-my-service ref={findMyService} id='findMyService' group-id="a8acaca3d4514d40bc7f302a8db291fb"></find-my-service>
        </div>}
        {selectedComponent === 'water-usage' && <div>
          <water-usage ref={waterUsage} ></water-usage>
        </div>}
      </CalciteShell>

      {/*  */}

    </div>
  );
}

export default App;
