# Yoda-flow

Yodaflow is an web-ap that allows users to ask and answer questions related to starwars

### Technologies used

* PostgreSQL
* Express
* Sequelize
* Pug
* JavaScript
* CSS3
* HTML5

Check the [Wiki](https://github.com/TastySatang/April-G2-Yoda-flow/wiki) for [API documentation](https://github.com/TastySatang/April-G2-Yoda-flow/wiki/API-Documentation), [Database Schema](https://github.com/TastySatang/April-G2-Yoda-flow/wiki/Database-Schema), [Features](https://github.com/TastySatang/April-G2-Yoda-flow/wiki/Features), [Frontend Routes](https://github.com/TastySatang/April-G2-Yoda-flow/wiki/Front-end-Routes), and [User Stories](https://github.com/TastySatang/April-G2-Yoda-flow/wiki/User-Stories)

## Installing
1. Clone this repository (only this branch)
2. Install dependencies
```bash
npm install
```
4. Create a .env file based on the example with proper setting for your development environment
5. Setup your PostgreSQL user, password it matches your .env file
7. Migrate your database, seed your database and run the app

```bash
npx sequelize-cli db:create
```

```bash
npx sequelize-cli db:migrate
```

```bash
npx sequelize-cli db:seed:all
```

```bash
npm start
```
