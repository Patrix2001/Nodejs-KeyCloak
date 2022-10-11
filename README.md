# Web Server Integrates with KeyCloak
This server built with nodemon, express js, and sequelize.

## Technology (requirements):

- Node.js (v16.17.0)
- PostgreSQL (connection database)

## Installation
1. Clone this repo and navigate your cloned project on your directory

2. Create file ***.env*** and follow content from ***.env.example***. Configure connection following from [here](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING)

3. Install package following from the list packages:
```sh
npm install
```

4. Run the migration to create table on your database
```sh
npm run db:migrate
```

5. Now, you start the project
```sh
npm run start
```