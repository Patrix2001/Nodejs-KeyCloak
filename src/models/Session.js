"use strict";

module.exports = (sequelize, DataTypes) => {
    Session.init(
        {
            sid: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            expires: DataTypes.DATE,
            data: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Sessions",
            tableName: "Sessions",
            timestamps: true,
        }
    );
    return Session;
};
