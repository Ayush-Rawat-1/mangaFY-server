# MangaFY Server

The MangaFY Server is the backbone of the MangaFY website, a dynamic platform providing access to a wide array of manga content and the latest anime news, ad-free. Built with Node.js and leveraging RapidAPI, this server ensures seamless content delivery and up-to-date information to manga enthusiasts.

## Features

- *Manga Search*: Allows users to search for their favorite manga titles.
- *Popular Manga*: Fetches and displays a list of currently popular manga.
- *Manga Details*: Provides detailed information on specific manga titles.
- *Anime/Manga News*: Keeps users informed with the latest news in the anime and manga world.

## Technologies

- *Node.js*: For a fast and scalable server-side application.
- *Express*: A web application framework for Node.js, used to build our API.
- *RapidAPI*: Utilized for fetching manga content and news from various sources.
- *Axios*: Utilized for making HTTP requests to external services,including RapidAPI endpoints, for fetching data efficiently ands managing responses gracefully

## Getting Started

These instructions will help you set up a copy of the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine.

- Node.js
- npm
  sh
  npm install npm@latest -g
  

### Installation

1. Clone the repository
   sh
   git clone https://github.com/Ayush-Rawat-1/mangaFY-server.git
   
2. Navigate to the project directory
   sh
   cd MangaFY-Server
   
3. Install NPM packages
   sh
   npm install
   

## Usage

To start the server, run:

sh
npm start


The server will start running on http://localhost:8000, or another port if you've configured it differently.

## API Endpoints

- /api/mangasearch: Search for manga.
- /api/front: Get a list of new manga.
- /api/manga: Fetch details of a manga by its ID.
- /api/chapter: Fetch details of a chapter by its ID.
- /api/news: Get the latest anime and manga news.
- /api/newsPage: Get details of news by its ID

## Contributing

We welcome contributions to the MangaFY Server project. Please follow the steps below to contribute:

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request


## Contact

Project Link: [https://github.com/Ayush-Rawat-1/mangaFY-server.git](https://github.com/Ayush-Rawat-1/mangaFY-server.git)

---