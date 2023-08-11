const today = new Date().toISOString().slice(0, 10);

const key = "seoqBbSknIxMPg7uU2dPaKrtSA7c6B9vTdBNUHPo";

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=${key}`;

class Asteroid {
  constructor(isHazardous, distance, speed, size) {
    this.isHazardous = isHazardous;
    this.distance = distance;
    this.speed = speed;
    this.size = size;
  }

  static async getAsteroids() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network repsonse was not ok");
      }
      const data = await response.json();
      //   console.log(data);
      let asteroids = data.near_earth_objects[today];
      //   console.log(asteroids);
      asteroids.map(function (element) {
        // console.log(element);
        let approach = element.close_approach_data[0];
        // console.log(approach);
        let distance = approach.miss_distance.kilometers;
        // console.log(distance);
        let speed = approach.relative_velocity.kilometers_per_hour;
        // console.log(speed)
        let size = element.estimated_diameter.meters.estimated_diameter_max;
        // console.log(size)
        let hazard = element.is_potentially_hazardous_asteroid;
        // console.log(hazard)
        console.log(`
        Hazard: ${hazard}
        Distance: ${distance} km
        Speed: ${speed} km/h
        Size: ${size} m
        `);
        let asteroid = new Asteroid(hazard, distance, speed, size);
      });
    } catch (error) {
      console.log(error);
    }
  }
  placeAsteroid(hazard, distance, speed, size) {
    let asteriodElement = document.createElement("a");
    asterioidElement.textContent = '*';
    asteroid.ClassName = 'asteroid';

  }
}
