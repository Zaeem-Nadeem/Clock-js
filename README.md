# Analog Clock

This is a simple analog clock built using HTML, CSS, and JavaScript. The clock displays the current time with rotating hands for hours, minutes, and seconds. The hands of the clock dynamically adjust every second to reflect the real time.

## Features

- **Real-Time Update**: The clock updates every second, showing the current time.
- **Smooth Animation**: The clock hands (second, minute, and hour) rotate smoothly to reflect the passage of time.
- **Simple Design**: The clock is designed using CSS transformations and basic HTML structure.

## How It Works

- **JavaScript**:
  - The `setdate()` function retrieves the current time (hour, minute, second).
  - It calculates the degree rotation for each clock hand based on the current time.
  - Each clock hand (second, minute, and hour) is rotated using CSS `transform` property to represent the correct time.
  - The `setInterval` method is used to update the clock every second (1000ms).

- **CSS**:
  - The clock hands are styled and positioned at the center of the clock face.
  - CSS `transform` property with the `rotate` function is used to animate the movement of the clock hands.

## Setup Instructions

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. The clock will start automatically, and the hands will rotate to show the current time.

## File Structure

```plaintext
├── index.html       # The HTML structure of the clock
├── style.css        # The CSS file that styles the clock and its hands
└── script.js        # JavaScript file that controls the clock's behavior
