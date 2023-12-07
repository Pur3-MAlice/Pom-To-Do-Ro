import {useState} from "react";
import SettingsContext from "./SettingsContext";
import PomodoroTimer from "./PomodoroTimer";

function Timer() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [longMinutes, setLongMinutes] = useState(15);

  return (
    <div>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        longMinutes,
        setLongMinutes,
      }}>
        <PomodoroTimer />
      </SettingsContext.Provider>
    </div>
  );
}

export default Timer;