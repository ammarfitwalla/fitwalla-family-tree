# Fitwalla Family Tree

An interactive, responsive web application for visualizing and exploring the Fitwalla family tree. 

## Features

- **Interactive Visualization**: A dynamic canvas that draws connectors between spouses, parents, and children to clearly illustrate relationships.
- **Pan and Zoom**: Navigate the expansive family tree easily with pan (click and drag) and zoom capabilities (mouse wheel, on-screen buttons, and pinch-to-zoom for touch devices).
- **Search Functionality**: Quickly find specific family members by typing their name in the search bar. Non-matching cards will gracefully dim out.
- **Detailed Profiles**: Click on any person's card to open a side panel containing their detailed information, including their Date of Birth, status (alive or deceased), spouse, parents, siblings, and children.
- **Responsive Design**: Designed to work smoothly on both desktop and mobile devices.

## Tech Stack

This project is built using vanilla web technologies without any heavy frameworks:
- **HTML5**: For structure and layout.
- **CSS3**: For styling, responsive layouts, and animations.
- **JavaScript (ES6)**: For rendering the tree, handling data logic, DOM manipulation, and user interactions.

## Data Structure

The family tree data is stored locally in `data.js`. It consists of three main components:
1. **People (`people`)**: An array of objects defining individuals (ID, name, gender, DOB, etc.).
2. **Couples (`couples`)**: An array of objects linking two individuals as spouses.
3. **Families (`families`)**: An array defining parent-child relationships, linking a parent couple to their children's IDs.

## How to Run Locally

Since this is a static web application, running it locally is very straightforward:

1. Clone the repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. No build steps or package installations (`npm install`) are required!

*(Optional)* If you are making changes and want to view them via a local server to avoid CORS issues with future data fetching:
```bash
npx serve .
```

## Contributing

To add new family members:
1. Open `data.js`.
2. Add the individual to the `people` array with a unique `id`.
3. If they have a spouse, add an entry to the `couples` array.
4. If they have children, update or add an entry to the `families` array linking their couple ID to their children's IDs.
