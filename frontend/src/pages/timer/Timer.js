import {useState} from "react";
import SettingsContext from "../../contexts/SettingsContext";
import PomodoroTimer from "./PomodoroTimer";


// Inspired by the tutorials of Aleks Popovic & Coding With Dawid
function Timer() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [longMinutes, setLongMinutes] = useState(15);

  return (
    <>
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
    </>
  );
}

export default Timer;