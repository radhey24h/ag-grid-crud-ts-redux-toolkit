import React, { useCallback, useEffect } from 'react';
import './App.css';
import StaticGrid from './component/static-grid';
import { getPartRisk, getPartRiskColumnDefinition, getCauseType, getSeverity, getOccurrence } from './component/static-grid/partRiskSlice';
import { useAppDispatch } from './store';


function App() {
  const dispatch = useAppDispatch();
  const initApp = useCallback(async () => {
    await dispatch(getPartRisk(1));
    await dispatch(getPartRiskColumnDefinition(1));
    await dispatch(getCauseType(1));
    await dispatch(getSeverity(1));
    await dispatch(getOccurrence(1));
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [])

  return (
    <div className="App">
      <StaticGrid />
    </div>
  );
}

export default App;
