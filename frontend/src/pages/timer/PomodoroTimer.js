import React, { useContext, useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../../styles/Timer.module.css";
import { Container } from "react-bootstrap";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import GradientSVG from "./GradientSVG";
import SettingsContext from "../../contexts/SettingsContext";
import Settings from "./Settings";

// Inspired by the tutorials of Aleks Popovic & Coding With Dawid
function PomodoroTimer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [completedWorkSessions, setCompletedWorkSessions] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const completedWorkSessionsRef = useRef(completedWorkSessions);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      if (modeRef.current === "work") {
        completedWorkSessionsRef.current++;
        if (completedWorkSessionsRef.current === 4) {
          setCompletedWorkSessions(0);
          setMode("longBreak");
          modeRef.current = "longBreak";
          const nextSeconds = settingsInfo.longMinutes * 60;
          setSecondsLeft(nextSeconds);
          secondsLeftRef.current = nextSeconds;
          return;
        }
      } else if (modeRef.current === "break") {
        setMode("work");
        modeRef.current = "work";
        const nextSeconds = settingsInfo.workMinutes * 60;
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
        return;
      }

      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo, settingsInfo.longMinutes, completedWorkSessionsRef]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : mode === "break"
      ? settingsInfo.breakMinutes * 60
      : settingsInfo.longMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <>
      <Container className={styles.Clock}>
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            textColor: "#fff",
            pathColor:
              mode === "work"
                ? "url(#workGradient)"
                : mode === "break"
                ? "url(#pauseGradient)"
                : "url(#longGradient)",
            trailColor: "#132935",
            backgroundColor: "#3e98c7",
          })}
        />
      </Container>

      <Container
        style={{ width: "80%", marginTop: "10px", textAlign: "center" }}
      >
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
            className={styles.PlayPauseButton}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
            className={styles.PlayPauseButton}
          />
        )}
      </Container>
      
      <Container style={{ width: "80%" }}>
        <div style={{marginTop: "10px", textAlign: "center" }}>
          <Settings />
        </div>
      </Container>
      
      {/* Gradient for work state */}
      <GradientSVG
        startColor="#183593"
        endColor="#a577d2"
        idCSS="workGradient"
        rotation="45"
      />

      {/* Gradient for pause state */}
      <GradientSVG
        startColor="#FF6B6B"
        endColor="#FFD166"
        idCSS="pauseGradient"
        rotation="-45"
      />

      {/* Gradient for long break state */}
      <GradientSVG
        startColor="#fd1d1d"
        endColor="#833ab4"
        idCSS="longGradient"
        rotation="-45"
      />
    </>
  );
}

export default PomodoroTimer;
