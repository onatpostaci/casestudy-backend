<!-- PROJECT LOGO -->
<div align="center">
<h3 align="center">Challenge of Full-Stack Internship</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#steps-for-running-the-server">Steps for running the Server</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

In this challenge, there are three layers communicating in an order. Basically, we have a UI Layer (Client Side), a Logic Layer (Backend Side), and a Data Layer (MongoDB Cloud). UI Layer communicates with the Logic Layer, then Logic Layer has different services inside of it and it communicates with the Data Layer. Therefore, we can state that the most basic architectural pattern that we adopt for this challenge is Three-Tier Architecture. However, there are internal functionalities inside of the Logic Layer. As mentioned in the Challenge document, we have a Web Socket service that enables real-time communication between the client side and the server side. Therefore, in terms of this specific interaction, we have a Publish-Subscribe Architectural Pattern even though this pattern mostly relates with distributed systems because both services subscribe to themselves and publish messages to each other.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
- ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
- ![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

There are several instructions on setting up the project locally.
To get a local copy up and running follow these simple example steps please:

### Steps for running the Server

1. Clone the repo

   ```sh
   git clone https://github.com/onatpostaci/casestudy-backend.git

   ```

2. Install the necessary NPM packages

- npm

  ```sh
  npm install

  ```

3. Enter your desired port and OpenAI API key in `.env` file created in the project directory
   ```env
   OPENAI_API_KEY = 'ENTER YOUR API'
   PORT_NUMBER = 'ENTER YOUR PORT NUMBER'
   ```
4. Start the server

- npm

  ```sh
  npm start dev

  ```

Now, server should start on the port that defined in .env file.

<!-- MARKDOWN LINKS & IMAGES -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
