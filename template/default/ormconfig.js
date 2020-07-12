const { DATABASE } = require("./env.config");
const bouncecodeConfig = require("./bouncecode.config");
const path = require("path");

module.exports = [
  {
    ...DATABASE,
    synchronize: true,
    entities: [
      ...(bouncecodeConfig.libraries || []).map((library) =>
        path.join(__dirname, library, "server/models/**/*.entity.{js,ts}")
      ),
      path.join(__dirname, "server/models/**/*.entity.{js,ts}"),
    ],
    charset: "UTF8_GENERAL_CI",
    // migrations: ["server/migrations/*.{js,ts}"],
    // subscribers: ["server/subscribers/**/*.{js,ts}"],
    // seeds: ["server/migrations/seeds/**/*.{js,ts}"],
    // factories: ["server/migrations/factories/**/*.{js,ts}"],
  },
];
