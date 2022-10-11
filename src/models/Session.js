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
            modelName: "Session",
            tableName: "Session",
            timestamps: true,
        }
    );
    return Session;
};
