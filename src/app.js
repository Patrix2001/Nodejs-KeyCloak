require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");

const { PORT = 4000 } = process.env;
const Keycloak = require("keycloak-connect");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const Sequelize = require("sequelize");
const kcConfig = require("../keycloak.json");

const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL);
const dbStore = new SequelizeStore({ db: sequelize });
const keycloak = new Keycloak({ store: dbStore }, kcConfig);

app.disable("x-powered-by");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: "Secret",
        resave: false,
        saveUninitialized: true,
        store: dbStore,
    })
);

app.use(keycloak.middleware());

app.get("/", async (req, res) => {
    return res.status(200).send({
        message: "Hello World"
    })
});

app.get("/profile", keycloak.protect(), async (req, res) => {
    try {
        const user = req.kauth.grant.access_token.content;
        return res.status(200).send({
            user
        });
    } catch (error) {
        return res.status(500).send({
            error
        });
    }
});

app.listen(PORT, function () {
    console.log(`App running on http://localhost:${PORT}`);
});
