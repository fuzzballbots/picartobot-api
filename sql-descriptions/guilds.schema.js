// app/models/guilds.schema.js
/* eslint new-cap: "off" */

// Dependencies
const sequelize = require('sequelize');

module.exports = (dbconn) => {
  return dbconn.conn.define(
    'guilds',
    {
      id: { type: sequelize.CHAR(36), primaryKey: true },
      guild_id: { type: sequelize.bigint.UNSIGNED, allowsNulls: false, unique: true },
      webhook_id: { type: sequelize.bigint.UNSIGNED, allowsNulls: true },
      webhook_token: { type: sequelize.CHAR(68), allowsNulls: true },
      created_at: { type: 'TIMESTAMP', allowsNulls: false },
      updated_at: { type: 'TIMESTAMP', allowsNulls: true },
      deleted_at: { type: 'TIMESTAMP', allowsNulls: true },
    },
    { timestamps: false, freezeTableName: true }
  );
};
