document.addEventListener('DOMContentLoaded', function() {
  const synth = new Tone.PolySynth().toDestination();
  const keys = document.querySelectorAll('.key');
  let isKeyPressed = false; // Flag to track if a key is pressed

  keys.forEach(key => {
    key.addEventListener('mousedown', playNote);
    key.addEventListener('mouseup', stopNote);
    key.addEventListener('touchstart', playNote);
    key.addEventListener('touchend', stopNote);
  });

  document.addEventListener('keydown', function(event) {
    if (!isKeyPressed) {
      isKeyPressed = true; // Set flag to true if a key is pressed
      const keyCode = event.keyCode || event.which;
      const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
      if (keyElement) {
        keyElement.classList.add('pressed');
        playNote.call(keyElement);
      }
    }
  });

  document.addEdocument.addEventListener('DOMContentLoaded', function() {
  const synth = new Tone.PolySynth().toDestination();
  const keys = document.querySelectorAll('.key');
  let isKeyPressed = false; // Flag to track if a key is pressed

  keys.forEach(key => {
    key.addEventListener('mousedown', playNote);
    key.addEventListener('mouseup', stopNote);
    key.addEventListener('touchstart', playNote);
    key.addEventListener('touchend', stopNote);
  });

  document.addEventListener('keydown', function(event) {
    if (!isKeyPressed) {
      isKeyPressed = true; // Set flag to true if a key is pressed
      const keyCode = event.keyCode || event.which;
      const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
      if (keyElement) {
        keyElement.classList.add('pressed');
        playNote.call(keyElement);
      }
    }
  });

  document.addEventListener('keyup', function(event) {
    isKeyPressed = false; // Reset flag when no key is pressed
    const keyCode = event.keyCode || event.which;
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyElement) {
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
});
ventListener('keyup', function(event) {
    isKeyPressed = false; // Reset flag when no key is pressed
    const keyCode = event.keyCode || event.which;
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyElement) {
      keyElement.classList.remove('pressed');
      stopNote.call(keyElement);
    }
  });

  function playNote() {
    const frequency = parseFloat(this.dataset.frequency);
    synth.triggerAttack(frequency);
  }

  function stopNote() {
    const frequency = parseFloat(this.dataset.frequency);
    synth.triggerRelease(frequency);
  }
});
