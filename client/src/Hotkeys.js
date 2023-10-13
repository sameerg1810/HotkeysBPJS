import React, { useState } from "react";
import {
  HotkeysProvider,
  HotkeysTarget2,
  Card,
  Elevation,
} from "@blueprintjs/core";

// Reusable HotkeyCard component
function HotkeyCard({ hotkey, color, label }) {
  return (
    <Card
      interactive={true}
      elevation={Elevation.TWO}
      style={{
        backgroundColor: color,
        color: "#FFFFFF",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        width: "300px",
        margin: "auto",
        marginTop: "2rem",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        backgroundImage: `linear-gradient(to right, ${color}, #FFA500)`,
        transform: `translate(${Math.random() * 20 - 10}px, ${
          Math.random() * 20 - 10
        }px)`,
        transition: "transform 0.5s",
        cursor: "pointer",
      }}
    >
      You pressed {hotkey}
      <br />
      {label}
    </Card>
  );
}

function HotkeyBox() {
  const [hotkey, setHotkey] = useState("");

  const appHotkeys = [
    {
      combo: "ctrl + s",
      global: true,
      label: "Save changes",
      onKeyDown: () => {
        console.log("Saving changes...");
        setHotkey("ctrl + s");
      },
    },
    {
      combo: "ctrl + z",
      global: true,
      label: "Undo last action",
      onKeyDown: () => {
        console.log("Undoing last action...");
        setHotkey("ctrl + z");
      },
    },
    {
      combo: "ctrl + c",
      global: true,
      label: "Copy selected data",
      onKeyDown: () => {
        console.log("Copying data...");
        setHotkey("ctrl + c");
      },
    },
    {
      combo: "ctrl + n",
      global: true,
      label: "Create new data",
      onKeyDown: () => {
        console.log("Creating new data...");
        setHotkey("ctrl + n");
      },
    },
    {
      combo: "ctrl + left",
      global: true,
      label: "Select previous data",
      onKeyDown: () => {
        console.log("Selecting previous data...");
        setHotkey("ctrl + left");
      },
    },
    {
      combo: "ctrl + right",
      global: true,
      label: "Select next data",
      onKeyDown: () => {
        console.log("Selecting next data...");
        setHotkey("ctrl + right");
      },
    },
  ];

  return (
    <HotkeysProvider>
      <HotkeysTarget2 hotkeys={appHotkeys}>
        <div>My app has hotkeys 😎</div>
        <HotkeyCard
          hotkey={hotkey}
          color="#00FF00"
          label={appHotkeys[0].label}
        />
      </HotkeysTarget2>
      <Plugin />
    </HotkeysProvider>
  );
}

function Plugin() {
  const [hotkey, setHotkey] = useState("");

  const pluginHotkeys = [
    {
      combo: "f",
      global: true,
      label: "Search",
      onKeyDown: () => {
        console.log("Search...");
        setHotkey("f");
      },
    },
  ];

  return (
    <HotkeysTarget2 hotkeys={pluginHotkeys}>
      <HotkeyCard
        hotkey={hotkey}
        color="#FF0000"
        label={pluginHotkeys[0].label}
      />
    </HotkeysTarget2>
  );
}

export default HotkeyBox;
