let display = document.getElementById('display');

function appendChar(char) {
  if (display.textContent === '0' && char !== '.') {
    display.textContent = char;
  } else {
    display.textContent += char;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function deleteChar() {
  display.textContent = display.textContent.slice(0, -1) || '0';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace('÷', '/').replace('×', '*'));
  } catch {
    display.textContent = 'Error';
  }
}

document.addEventListener('keydown', function(e) {
  if (!isNaN(e.key) || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
    appendChar(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteChar();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
