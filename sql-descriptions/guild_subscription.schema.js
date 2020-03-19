// app/models/guild_subscription.schema.js
/* eslint new-cap: "off" */

// Dependencies
const sequelize = require('sequelize');

module.exports = (dbconn) => {
  return dbconn.conn.define(
    'guild_subscription',
    {
      guilds_id: { type: sequelize.CHAR(36), primaryKey: true },
      picarto_channel_id: { type: sequelize.CHAR(36), primaryKey: true },
      announce_private: { type: sequelize.tinyint, allowsNulls: true },
      embed_template: { type: sequelize.json, allowsNulls: true },
      created_at: { type: 'TIMESTAMP', allowsNulls: false },
      updated_at: { type: 'TIMESTAMP', allowsNulls: true },
      deleted_at: { type: 'TIMESTAMP', allowsNulls: true },
    },
    { timestamps: false, freezeTableName: true }
  );
};
