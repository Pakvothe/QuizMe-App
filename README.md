## QuizMeApp ~ Final project of the intensive bootcamp "soyHenry"

## 🤔 What is it?

QuizzMeApp is a group project with SCRUM methodology,
it consists of a question and answer application which
allows you to create your own quizzes, it allows you to
play the quizzes of other users. It has rankings of best scores,
membership which allows you to play without limits and create
quizzes without limits. Likewise, it allows user validation so
that any company or person can create their quizzes and people
can know that they really created them. The application has animations,
music composed by a member of the team especially for the application,
push notifications, payment methods, third-party authentication, and more ...

## 💻 Can I see it live?

Of course! You can download the app from the "Huawei App Gallery".

> https://appgallery.huawei.com/#/app/C103845919

## 🧱 What was your stack of technologies?

These are the technologies we used to create the full project:

-   **React Native**
-   **Redux**
-   **StyledComponents**
-   **Node**
-   **Express**
-   **MongoDB**
-   **GraphQL**
-   **Apollo**
-   **Passport**
-   **Firebase**
-   **SCRUM**

## 💬 What's your contact info?

You can reach out to me via e-mail: ortiz.franco@yandex.com\
Or send me a message on LinkedIn: https://www.linkedin.com/in/franco-david-ortiz/

You can also find the other members of the project here:

-   <a href="https://portfolio-franco-fiori.vercel.app/">Franco Fiori</a>
-   <a href="https://github.com/Aglowkeys">Emiliano Alfonso</a>
-   <a href="https://nc-devw.github.io/portfolio/">Ignacio Contreras</a>
-   <a href="https://github.com/tinsanchez00/">Martín Sánchez</a>
-   <a href="https://github.com/ailinnakaganeku/">Ailin Nakaganeku</a>
-   <a href="https://github.com/ttiago7/">Santiago Calisaya</a>
-   <a href="https://github.com/gallardobruno/">Bruno Gallardo</a>

# ⚡ Instructions:

-   `Clone the repository`
-   `Run npm install in /api and /client`
-   `Run mongoDB service`
-   `Create .env file in /api directory and put this inside:`

```json
	DB_NAME=quiz
	PORT=4000
	SECRET= (secret variable)
	BACK=http://localhost:4000
	FRONT=http://localhost:3000
	CLIENTID= (secret variable)
	CLIENTSECRET= (secret variable)
	FACEBOOK_APP_ID= (secret variable)
	FACEBOOK_APP_SECRET= (secret variable)
	EXCHANGE_APP_ID= (secret variable)
```

-   `Dowload and execute Ngrok application: ngrok.com`
-   `Create env.js file in client/ directory and put this inside: `

```javascript
	export const REACT_APP_API = (your ngrok tunnel url);
	export const FIREBASE_API_KEY = (secret variable)
	export const FIREBASE_AUTH_DOMAIN = (secret variable)
	export const FIREBASE_PROJECT_ID = (secret variable)
	export const FIREBASE_STORAGE_BUCKET = (secret variable)
	export const FIREBASE_MESSAGING_SENDER_ID = (secret variable)
	export const FIREBASE_APP_ID = (secret variable)
	export const CLIENT_ID = (secret variable)
	export const FACEBOOK_APP_ID = (secret variable)
```

-   `Run npm start in /api`
-   `Run npm start in /client`
-   `In Expo console scan the QR code with your mobile`
