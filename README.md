![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

# Football Stats

Football Stats is a React web application built using the API-Football API, which provides a variety of data related to football (soccer). This application leverages the API to provide detailed statistics about matches, players, injuries, and comparisons. All these stats are visually represented using charts to provide users with the best insights possible.

---

## Built With

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![CSS](https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Chart.js](https://img.shields.io/badge/-Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

---

## Table of Contents

* [Deployment](#deployment)
* [The Different Pages](#the-different-pages)
* [Features](#features)
* [Demo](#demo)
* [Acknowledgements](#acknowledgements)
* [API Reference](#api-reference)
* [License](#license)

---

## Deployment

To try this web app, follow these steps:

Clone the repository:

To try this webapp follow these steps

Clone The Repo

```bash
https://github.com/231256leRouxFNF/formative-one-football-stats.git
```
In your terminal run the following
```bash
  npm install
```
```bash
  npm install react-bootstrap bootstrap
```
```bash
  npm install react-router-dom
```
```bash
  npm install chart.js react-chartjs-2 react
```
```bash
  npm install axios
```
```bash
  cd football-stats
```
And Finally

```bash
  npm start
```


## The Different Pages
#### The Dashboard page 
Displays recent matches and the top scorer in the league. Users can explore match details and view the top-performing player.

![App Screenshot]

#### The Comparison page 
Allows users to compare two players' statistics side by side. Includes bar charts, radar charts, and pie charts for visual comparisons.

![App Screenshot]

#### The Timeline page 
Visualizes injury data over time using a line chart. Users can explore trends in injuries for specific leagues and seasons.

![App Screenshot]

## Features

- View recent football matches and their details.
- Compare player statistics side by side.
- Explore injury trends with interactive charts.
- Discover the top scorer in the league.
- Responsive design for mobile and desktop devices.

## Here is the Demo showing how the application works.

[App Demo link]

### Home page

### Comparison Page

### Timeline Page

## Acknowledgements

 - [Tsungai Katsuro](https://github.com/TsungaiKats)
 - [API_FOOTBALL](https://rapidapi.com/api-sports/api/api-football)
 - [Readme.so](https://readme.so/editor)

## API Reference
Jolpica. (n.d.). Jolpica F1 API. https://api.jolpi.ca/ergast/?format=api

Found on RapidAPI at: https://rapidapi.com/

API Reference
### API Reference

#### Fetch all teams
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| league    | string | Required. League ID |
| season    | string | Required. Season year |

#### Fetch team statistics
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| team      | string | Required. Team ID   |
| league    | string | Required. League ID |
| season    | string | Required. Season year |

#### Fetch recent matches
| Parameter | Type   | Description             |
|-----------|--------|-------------------------|
| league    | string | Required. League ID     |
| season    | string | Required. Season year   |
| last      | int    | Optional. Number of recent matches |

#### Fetch player statistics
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | string | Required. Player ID |
| season    | string | Required. Season year |

#### Fetch top scorers
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| league    | string | Required. League ID |
| season    | string | Required. Season year |

#### Fetch injuries
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| league    | string | Required. League ID |
| season    | string | Required. Season year |

## License

[MIT](https://choosealicense.com/licenses/mit/)