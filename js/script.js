window.onload = function() {
  const keys = document.querySelectorAll('.key');
  const synth = new Tone.PolySynth().toDestination();
  const pressedKeys = new Set(); // Set to track pressed keys

  keys.forEach(key => {
    key.addEventListener('mousedown', handleMouseDown);
    key.addEventListener('mouseup', handleMouseUp);
    key.addEventListener('touchstart', handleTouchStart);
    key.addEventListener('touchend', handleTouchEnd);
  });

  document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode || event.which;
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyElement && !pressedKeys.has(keyCode)) {
      pressedKeys.add(keyCode); // Add pressed key to the set
      keyElement.classList.add('pressed');
      playNote.call(keyElement);
    }
  });

  document.addEventListener('keyup', function(event) {
    const keyCode = event.keyCode || event.which;
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyElement) {
      pressedKeys.delete(keyCode); // Remove released key from the set
      keyElement.classList.remove('pressed');
      stopNote.call(keyElement);
    }
  });

  function handleMouseDown() {
    this.classList.add('pressed');
    playNote.call(this);
  }

  function handleMouseUp() {
    this.classList.remove('pressed');
    stopNote.call(this);
  }

  function handleTouchStart(event) {
    event.preventDefault(); // Prevent scrolling when touching the piano keys
    this.classList.add('pressed');
    playNote.call(this);
  }

  function handleTouchEnd(event) {
    event.preventDefault(); // Prevent scrolling when touching the piano keys
    this.classList.remove('pressed');
    stopNote.call(this);
  }

  function playNote() {
    const frequency = parseFloat(this.dataset.frequency);
    synth.triggerAttack(frequency);
  }

  function stopNote() {
    const frequency = parseFloat(this.dataset.frequency);
    synth.triggerRelease(frequency);
  }
};
