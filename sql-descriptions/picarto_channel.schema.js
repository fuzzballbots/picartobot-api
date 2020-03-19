// app/models/picarto_channel.schema.js
/* eslint new-cap: "off" */

// Dependencies
const sequelize = require('sequelize');

module.exports = (dbconn) => {
  return dbconn.conn.define(
    'picarto_channel',
    {
      id: { type: sequelize.CHAR(36), primaryKey: true },
      channel_id: { type: sequelize.bigint.UNSIGNED, allowsNulls: false, unique: true },
      channel_name: { type: sequelize.STRING(256), allowsNulls: true },
      online: { type: sequelize.tinyint, allowsNulls: true },
      private_stream: { type: sequelize.tinyint, allowsNulls: true },
      created_at: { type: 'TIMESTAMP', allowsNulls: false },
      updated_at: { type: 'TIMESTAMP', allowsNulls: true },
      deleted_at: { type: 'TIMESTAMP', allowsNulls: true },
    },
    { timestamps: false, freezeTableName: true }
  );
};
