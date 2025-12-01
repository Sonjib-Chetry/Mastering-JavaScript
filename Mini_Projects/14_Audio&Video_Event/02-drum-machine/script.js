document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const padBank = document.getElementById("pad-bank");
  const powerSwitch = document.getElementById("power-switch");
  let powerOn = true;

  // Drum pad configuration
  const drumPads = [
    { id: "heater-1", key: "Q", name: "Heater 1", fileName: "Heater-1.mp3" },
    { id: "heater-2", key: "W", name: "Heater 2", fileName: "Heater-2.mp3" },
    { id: "heater-3", key: "E", name: "Heater 3", fileName: "Heater-3.mp3" },
    { id: "heater-4", key: "A", name: "Heater 4", fileName: "Heater-4_1.mp3" },
    { id: "clap", key: "S", name: "Clap", fileName: "Heater-6.mp3" },
    { id: "open-hh", key: "D", name: "Open HH", fileName: "Dsc_Oh.mp3" },
    {
      id: "kick-n-hat",
      key: "Z",
      name: "Kick n' Hat",
      fileName: "Kick_n_Hat.mp3",
    },
    { id: "kick", key: "X", name: "Kick", fileName: "RP4_KICK_1.mp3" },
    { id: "closed-hh", key: "C", name: "Closed HH", fileName: "Cev_H2.mp3" },
  ];

  // Create drum pads
  drumPads.forEach((pad) => {
    const padElement = document.createElement("div");
    padElement.className = "drum-pad";
    padElement.id = pad.id;
    padElement.textContent = pad.key;

    const audioElement = document.createElement("audio");
    audioElement.className = "clip";
    audioElement.id = pad.key;
    audioElement.src = `https://cdn.freecodecamp.org/curriculum/drum/${pad.fileName}`;

    padElement.appendChild(audioElement);
    padBank.appendChild(padElement);

    // Click event
    padElement.addEventListener("click", () => {
      if (!powerOn) return;
      playSound(pad.key, pad.name);
      animatePad(padElement);
    });
  });

  // Keydown event
  document.addEventListener("keydown", (e) => {
    if (!powerOn) return;
    const key = e.key.toUpperCase();
    const pad = drumPads.find((p) => p.key === key);

    if (pad) {
      playSound(key, pad.name);
      const padElement = document.getElementById(pad.id);
      animatePad(padElement);
    }
  });

  // Power switch
  powerSwitch.addEventListener("click", () => {
    powerOn = !powerOn;
    powerSwitch.classList.toggle("on", powerOn);
    display.textContent = powerOn ? "DRUM MACHINE" : "OFF";
  });

  // Helper functions
  function playSound(key, name) {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    display.textContent = name;
  }

  function animatePad(pad) {
    pad.classList.add("active");
    setTimeout(() => {
      pad.classList.remove("active");
    }, 100);
  }
});
