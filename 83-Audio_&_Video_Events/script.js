// 1) Audio() constructor (what it is & basic usage)
// new Audio() creates an HTMLAudioElement. If you pass a URL, the element’s src is set and the browser will begin loading (preload behavior depends on browser and preload setting). The element can be used off-screen (no controls) or appended to the DOM so the user can interact with it. 


// Example — create, attach controls, play:
/*
<button id="playBtn">Play</button>
<script>
  // create audio element (does not need an <audio> tag in HTML)
  const audio = new Audio('https://example.com/audio/song.mp3');
  audio.controls = true;           // show built-in browser controls
  document.body.appendChild(audio); // add to DOM so user can see it

  // play on user click (good for autoplay policies)
  document.getElementById('playBtn').addEventListener('click', async () => {
    try {
      await audio.play(); // returns a Promise that resolves when playback starts
      console.log('playing');
    } catch (err) {
      console.error('play blocked or failed:', err);
    }
  });
</script>
*/
// Notes:
// play() returns a Promise that resolves when playback starts (or rejects if blocked). This is important because autoplay rules may block automatic play until a user gesture. 

// You can also set audio.src = '...' later and call audio.load() to reinitialize.



// 2) Important methods & events (with examples)
// play() / pause() / load()
/*
await audio.play();   // starts playback (Promise)
audio.pause();        // pauses, retains currentTime
audio.load();         // reset and reload element (useful when changing sources)
*/
// play() returns a Promise — handle rejections to detect autoplay blocks. 


// Seeking — currentTime vs fastSeek(time)

// Precise seek:
/*
audio.currentTime = 42.5; // jump to 42.5s (precise)
*/

// Quick / approximate seek (may be faster but less precise):
/*
if (audio.fastSeek) audio.fastSeek(120); // seek to ~120s (not supported everywhere)
*/
// fastSeek() exists but has limited/beta support and trades precision for speed — 
// use currentTime when you need exact positioning.


// Add captions / text tracks
// Two common options:

// Use <track> elements (WebVTT file):
/*
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <track kind="subtitles" srclang="en" src="subs.vtt" label="English">
</audio>
*/

// Dynamically create a text track and add cues:
/*
const t = audio.addTextTrack('captions', 'English', 'en');
t.mode = 'showing';
t.addCue(new VTTCue(0, 5, 'Hello!')); // show "Hello!" between 0 and 5 seconds
*/
// Use VTTCue / TextTrack APIs for programmatic subtitles.

// Other properties worth knowing:
// audio.currentTime — read/write playback time (seconds).
// audio.duration — total duration (seconds or NaN until known).
// audio.loop — boolean to loop playback.
// audio.muted and audio.volume — mute or set gain (0.0–1.0).
// audio.playbackRate — speed (1.0 normal).
// Events: canplay, canplaythrough, ended, timeupdate, waiting, error, etc. Add listeners to react to these.

// Example — show a message when audio buffered enough to play through:
/*
audio.addEventListener('canplaythrough', () => { console.log('enough loaded'); });
*/



// 3) Formats, MIME types & codecs (how to provide fallbacks)
// Browsers rely on MIME types and codecs to decide what they can play. Use multiple <source> 
// elements so the browser picks the first one it supports. 

// Example:
/*
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type='audio/ogg; codecs="vorbis"'>
  Your browser doesn't support <code>audio</code>.
</audio>
*/

// You can test support in JS:
/*
const audio = document.createElement('audio');
console.log(audio.canPlayType('audio/mpeg'));       // "probably" or "maybe" or ""
console.log(audio.canPlayType('audio/ogg; codecs="opus"'));
*/

// Common types:
// MP3 → audio/mpeg (excellent support).
// OGG (Vorbis/Opus) → audio/ogg with codecs param.
// AAC in MP4 container → audio/mp4 (sometimes audio/mp4; codecs="mp4a.40.2").
// Exact support varies by browser; always provide fallbacks.



// 4) HTMLMediaElement API — key bits & examples
// HTMLMediaElement is the interface both <audio> and <video> inherit. 
// It exposes the methods/properties above plus canPlayType(), seekable, buffered, and many events. 
// Use it to monitor and control playback programmatically. 

// Example: show download progress and enable a "jump to 30s" button:
/*
const audio = document.querySelector('audio');
audio.addEventListener('progress', () => {
  const buffered = audio.buffered;
  if (buffered.length) {
    console.log('Buffered until:', buffered.end(buffered.length - 1));
  }
});
document.getElementById('jump30').addEventListener('click', () => {
  audio.currentTime = 30;
});
*/



// 5) Media Capture & Streams API (getUserMedia) — capture mic/camera
// navigator.mediaDevices.getUserMedia(constraints) prompts the user for permission and 
// returns a Promise that resolves with a MediaStream if allowed. This must be used in 
// a secure context (HTTPS) and often requires a user gesture. Handle rejections (NotAllowedError, NotFoundError). 

// Example — capture mic + camera and show preview:
/*
<video id="preview" autoplay playsinline muted></video>
<script>
async function startPreview() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    document.getElementById('preview').srcObject = stream;
  } catch (err) {
    console.error('getUserMedia failed:', err);
  }
}
startPreview();
</script>
*/

// Use cases:
// Video chat, audio recording, voice processing, taking snapshots.



// 6) Screen Capture API (getDisplayMedia)
// navigator.mediaDevices.getDisplayMedia() prompts the user to pick a screen / window / tab to capture 
// as a MediaStream. Like getUserMedia, it requires explicit user permission and is 
// available only from secure contexts. Browsers enforce extra privacy protections 
// (must prompt each time, transient permission, etc.). 

// Example — capture screen and record (preview in a <video>):
/*
const v = document.querySelector('#screenPreview');
const btn = document.querySelector('#share');
btn.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    v.srcObject = stream;
  } catch (err) {
    console.error('screen capture failed:', err);
  }
});
*/

// Caveat: audio capture behavior differs across OSes — e.g., 
// whole-system audio capture may be available on some platforms but restricted on others.




// 7) MediaStream Recording API (MediaRecorder) — record audio/video
// MediaRecorder lets you capture a MediaStream into chunks (Blobs); create it with new MediaRecorder(stream), 
// listen for dataavailable events, then combine blobs into a single file. It’s the front-line API for in-browser recording. 

// Example — record webcam audio/video and download:
/*
<button id="start">Start</button>
<button id="stop">Stop</button>
<video id="preview" autoplay playsinline muted></video>
<script>
let recorder, chunks = [];

async function init() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
  document.getElementById('preview').srcObject = stream;
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'recording.webm';
    a.click();
    URL.revokeObjectURL(url);
    chunks = [];
  };
}
document.getElementById('start').onclick = () => recorder.start();
document.getElementById('stop').onclick = () => recorder.stop();

init().catch(console.error);
</script>
*/

// Browser support: pretty good, but check formats and codecs for cross-browser compatibility (e.g. video/webm;codecs=vp8,opus).




// 8) Media Source Extensions (MSE) — programmatic streaming
// MSE (MediaSource / SourceBuffer) lets you build media streams in JS and feed them to 
// <video>/<audio> for streaming scenarios (adaptive bitrate, ad insertion, time-shifting). Typical flow:

// Create MediaSource().
// Attach it to <video>: video.src = URL.createObjectURL(mediaSource) (or use srcObject handles now).
// mediaSource.addSourceBuffer(mime) → returns SourceBuffer.
// sourceBuffer.appendBuffer(segment) — append encoded media segments (ISO BMFF / MP4, webm fragments).
// Manage updateend, remove, and call mediaSource.endOfStream() when done. 

// Very short skeleton:
/*
const video = document.querySelector('video');
const mediaSource = new MediaSource();
video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener('sourceopen', () => {
  const sb = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
  fetch('/segments/init.mp4').then(r => r.arrayBuffer()).then(buf => sb.appendBuffer(buf));
  // then append media fragments as they arrive…
});
*/

// Use cases: DASH/HLS players (JS-based), ad insertion, live streaming. MSE is powerful but requires 
// correct container/codec formats and careful buffer management.




// 9) Web Audio API — the powerful audio-processing graph
// The Web Audio API is for low-level audio processing (synthesis, DSP, effects, analysis). 
// Everything runs inside an AudioContext (an audio-processing graph of AudioNode objects). 
// Core nodes include OscillatorNode (tone generator), GainNode (volume), 
// AnalyserNode (frequency/time-domain analysis), BiquadFilterNode, and 
// MediaElementAudioSourceNode/MediaStreamAudioSourceNode to connect <audio> or getUserMedia streams.

// Simple example — generate a tone and fade it out:
/*
const ctx = new AudioContext();
const osc = ctx.createOscillator();
const gain = ctx.createGain();

osc.type = 'sine';
osc.frequency.value = 440; // A4
gain.gain.value = 0.1;     // volume

osc.connect(gain).connect(ctx.destination);
osc.start();

setTimeout(() => {
  gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
  setTimeout(() => { osc.stop(); ctx.close(); }, 1600);
}, 1000);
*/

// Common patterns
// Hook a <audio> element through the graph to analyze or add effects:
/*
const audioEl = document.querySelector('audio');
const source = ctx.createMediaElementSource(audioEl);
const filter = ctx.createBiquadFilter();
source.connect(filter).connect(ctx.destination);
*/

// Create audio from microphone:
/*
const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
const micSource = ctx.createMediaStreamSource(stream);
*/

// You can output the Web Audio graph to a MediaStream using createMediaStreamDestination() — 
// then feed that to MediaRecorder to record processed audio. (Example demos/recipes exist in MDN examples.)

// User-gesture note: creating or resuming an AudioContext may require a user gesture 
// (browsers may create it in suspended state until user interacts). Use ctx.resume() as needed.




// 10) Practical combo examples (real-world patterns)

// A. Capture mic → Web Audio → analyze
/*
const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
const ctx = new AudioContext();
const src = ctx.createMediaStreamSource(stream);
const analyser = ctx.createAnalyser();
src.connect(analyser);

// read data
const data = new Uint8Array(analyser.frequencyBinCount);
function draw() {
  analyser.getByteFrequencyData(data);
  // ... draw into canvas ...
  requestAnimationFrame(draw);
}
draw();
*/

// B. Web Audio output → record with MediaRecorder
/*
const ctx = new AudioContext();
// build graph producing sound...
const dest = ctx.createMediaStreamDestination();
// connect final node to dest
finalNode.connect(dest);

// now record the processed audio
const recorder = new MediaRecorder(dest.stream);
recorder.ondataavailable = e => // collect chunks and save //
recorder.start();
*/

// This is useful when you want to record the audio after DSP/filters/reverb applied. (MDN example repo contains such demos.)




// 11) Security, permissions & browser quirks (short checklist)
// HTTPS only for getUserMedia / getDisplayMedia (secure context). 
// Autoplay: play() may be blocked until a user gesture; always handle the Promise rejection. 
// Codec / container differences: check canPlayType() and provide fallback formats. 
// Browser support: fastSeek() and some advanced MSE features vary by browser — check compatibility 
// tables (MDN / caniuse) before shipping.



// 12) Where to read more (authoritative docs)
// HTMLAudioElement / Audio() — MDN. 
// HTMLMediaElement (methods/events) — MDN. 
// play() behavior & autoplay notes — MDN. 
// getUserMedia() / MediaDevices — MDN. 
// MediaRecorder (recording) — MDN. 
// Web Audio API (AudioContext, nodes) — MDN (and MDN examples repo). 
// Media Source Extensions (MSE) — MDN + Chrome dev articles for practical tips. 



// Final quick examples (copy-paste friendly)
// Record 5s of mic audio and download (minimal):
/*
<button id="rec">Record 5s</button>
<script>
async function record5() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mr = new MediaRecorder(stream);
  const chunks = [];
  mr.ondataavailable = e => chunks.push(e.data);
  mr.onstop = () => {
    const blob = new Blob(chunks, {type:'audio/webm'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'mic.webm'; a.click();
  };
  mr.start();
  setTimeout(() => mr.stop(), 5000);
}
document.getElementById('rec').onclick = record5;
</script>
*/

// (More robust code should handle errors, check MIME codec support, and revoke object URLs.)