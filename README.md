# Weather Now – Real-Time Weather Dashboard

Weather Now is a modern web application that provides real-time weather information for any global city. The application is built using React with a responsive UI powered by Tailwind CSS. Data is fetched from the Open-Meteo Geocoding and Weather APIs, which require no authentication keys.

---

## Features

- Search city and retrieve accurate location coordinates
- Display real-time weather details including:
  - Temperature
  - Wind speed
  - Weather condition code
- Error handling for invalid city names
- Loading state during API requests
- Clean, minimal, and responsive user interface

---

## Technology Stack

- React (Vite)
- Tailwind CSS
- Open-Meteo APIs (Geocoding + Forecast)
- JavaScript (ES6+)

---

## Getting Started

### Prerequisites
Ensure the following are installed:
- Node.js (LTS version recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/weather-now.git
cd weather-now
npm install
npm run dev

### Project Structure
src/
 ├── components/
 │   ├── SearchBar.jsx
 │   ├── WeatherCard.jsx
 ├── App.jsx
 ├── index.css
 └── main.jsx
