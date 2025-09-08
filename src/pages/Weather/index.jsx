import { useState, useEffect } from "react";
import styles from "./Weather.module.scss";

const weatherConditions = [
  { name: "Nắng", icon: "☀️", tempRange: [28, 38], humidityRange: [50, 70] },
  {
    name: "Nắng nóng",
    icon: "🥵",
    tempRange: [34, 42],
    humidityRange: [45, 65],
  },
  { name: "Có mây", icon: "☁️", tempRange: [25, 33], humidityRange: [65, 85] },
  {
    name: "Mây rải rác",
    icon: "⛅",
    tempRange: [24, 32],
    humidityRange: [60, 80],
  },
  { name: "Mưa nhẹ", icon: "🌧️", tempRange: [23, 29], humidityRange: [75, 90] },
  { name: "Mưa rào", icon: "☔", tempRange: [22, 28], humidityRange: [80, 95] },
  {
    name: "Dông bão",
    icon: "⛈️",
    tempRange: [20, 26],
    humidityRange: [85, 99],
  },
  {
    name: "Sương mù",
    icon: "🌫️",
    tempRange: [18, 25],
    humidityRange: [88, 99],
  },
  { name: "Gió nhẹ", icon: "🍃", tempRange: [26, 34], humidityRange: [60, 75] },
  { name: "Se lạnh", icon: "🥶", tempRange: [15, 22], humidityRange: [70, 85] },
];

const cityList = {
  hanoi: "Hà Nội",
  hcm: "TP.HCM",
  danang: "Đà Nẵng",
  hue: "Huế",
  dalat: "Đà Lạt",
  cantho: "Cần Thơ",
  nhatrang: "Nha Trang",
  phuquoc: "Phú Quốc",
  camau: "Cà Mau",
};

function Weather() {
  const [selectedCityKey, setSelectedCityKey] = useState("hanoi");
  const [currentWeatherData, setCurrentWeatherData] = useState({});

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const refreshWeather = () => {
    setCurrentWeatherData(() => {
      const newWeatherData = {};
      for (const cityKey in cityList) {
        const randomCondition =
          weatherConditions[getRandomNumber(0, weatherConditions.length - 1)];

        const newTemp = getRandomNumber(
          randomCondition.tempRange[0],
          randomCondition.tempRange[1]
        );
        const newHumidity = getRandomNumber(
          randomCondition.humidityRange[0],
          randomCondition.humidityRange[1]
        );

        newWeatherData[cityKey] = {
          city: cityList[cityKey],
          temp: newTemp,
          weather: randomCondition.name,
          humidity: newHumidity,
          icon: randomCondition.icon,
        };
      }
      return newWeatherData;
    });
  };

  useEffect(() => {
    refreshWeather();
  }, []);

  const handleCityChange = (e) => {
    setSelectedCityKey(e.target.value);
  };

  const weather = currentWeatherData[selectedCityKey];

  return (
    <div className={styles.weatherApp}>
      <h2 className={styles.weatherAppTitle}>Weather App</h2>
      <div className={styles.citySelector}>
        <label htmlFor="city-select">Chọn thành phố: </label>
        <select
          id="city-select"
          value={selectedCityKey}
          onChange={handleCityChange}
        >
          {Object.keys(cityList).map((key) => (
            <option key={key} value={key}>
              {cityList[key]}
            </option>
          ))}
        </select>
      </div>

      {weather ? (
        <div className={styles.weatherInfo}>
          <h3 className={styles.weatherCityName}>{weather.city}</h3>
          <span className={styles.weatherIcon}>{weather.icon}</span>
          <p className={styles.weatherTemp}>
            <strong>Nhiệt độ:</strong> {weather.temp}°C
          </p>
          <p className={styles.weatherCondition}>
            <strong>Tình trạng:</strong> {weather.weather}
          </p>
          <p className={styles.weatherHumidity}>
            <strong>Độ ẩm:</strong> {weather.humidity}%
          </p>
        </div>
      ) : (
        <p className="loading-message">Đang tải dữ liệu thời tiết...</p>
      )}

      <button onClick={refreshWeather} className={styles.refreshButton}>
        Làm mới
      </button>
    </div>
  );
}

export default Weather;
