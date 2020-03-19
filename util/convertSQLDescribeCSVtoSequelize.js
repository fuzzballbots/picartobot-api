const modifyFiles = require('./modifyFiles');
const fs = require('fs');
const path = require('path');

const prepend = '// app/models/$$FILE.js\n' +
                '/* eslint new-cap: "off" */\n\n' +
                '// Dependencies\n' +
                'const sequelize = require(\'sequelize\');\n\n' +
                'module.exports = (dbconn) => {\n' +
                '  return dbconn.conn.define(\n' +
                '    \'$$DB\',\n' +
                '    {\n';

const append = '    },\n' +
               '    { timestamps: false, freezeTableName: true }\n' +
               '  );\n' +
               '};\n';

/*
 * This iterates through all .schema files in the current folder and converts and outputs them to a
 * .schema.js file
 */
const filelist = [];
fs.readdirSync('./')
  .filter((file) => {
    return file.substr(-7) === '.schema' && file.indexOf('.') !== 0;
  })
  .forEach((file) => {
    console.log(file);
    filelist.push(file);
  });

modifyFiles(
  filelist,
  'js',
  [
    {
      regexp: /'(.*?)', ?'(.*?)', ?'(.*?)', ?'(.*?)', ?(.*?), ?'(.*)'/g,
      replacement: '      $1: { type: sequelize.$2, allowsNulls: $3, defaultValue: $5, \'$4\', \'$6\' },'
    },
    {
      regexp: /, ?''/g,
      replacement: ''
    },
    {
      regexp: /, ?'MUL'/g,
      replacement: ''
    },
    {
      regexp: /, ?'UNI'/g,
      replacement: ', unique: true'
    },
    {
      regexp: /, ?'PRI'/g,
      replacement: ', primaryKey: true'
    },
    {
      regexp: /, ?'auto_increment'/g,
      replacement: ', autoIncrement: true'
    },
    {
      regexp: /allowsNulls: .*, primaryKey: true/g,
      replacement: 'primaryKey: true'
    },
    {
      regexp: /allowsNulls: YES/g,
      replacement: 'allowsNulls: true'
    },
    {
      regexp: /allowsNulls: NO/g,
      replacement: 'allowsNulls: false'
    },
    {
      regexp: /(, defaultValue: .*?), '.*?'/g,
      replacement: '$1'
    },
    {
      regexp: /, defaultValue: NULL/g,
      replacement: ''
    },
    {
      regexp: / unsigned/g,
      replacement: '.UNSIGNED'
    },
    {
      regexp: /\.decimal/g,
      replacement: '.DECIMAL'
    },
    {
      regexp: /\.date,/g,
      replacement: '.DATEONLY,'
    },
    {
      regexp: /\.datetime/g,
      replacement: '.DATE'
    },
    {
      regexp: /\.char\((.*?)\),/g,
      replacement: '.CHAR($1),'
    },
    {
      regexp: /\.varchar\((.*?)\),/g,
      replacement: '.STRING($1),'
    },
    {
      regexp: /\.text/g,
      replacement: '.TEXT'
    },
    {
      regexp: /\.mediumtext/g,
      replacement: '.TEXT(\'medium\')'
    },
    {
      regexp: /\.longtext/g,
      replacement: '.TEXT(\'long\')'
    },
    {
      regexp: /\.(.*?)blob/g,
      replacement: '.BLOB(\'$1\')'
    },
    {
      regexp: /\.tinyint\(1\)/g,
      replacement: '.BOOLEAN'
    },
    {
      regexp: /\.BOOLEAN.UNSIGNED/g,
      replacement: '.BOOLEAN'
    },
    {
      regexp: /\.tinyint\((.*?)\),/g,
      replacement: '.INTEGER($1),'
    },
    {
      regexp: /\.int\((.*?)\),/g,
      replacement: '.INTEGER($1),'
    },
    {
      regexp: /sequelize.timestamp/g,
      replacement: '\'TIMESTAMP\''
    },
    {
      regexp: /(sequelize.INTEGER.*?, defaultValue: )'(.*?)'/g,
      replacement: '$1$2'
    },
    {
      regexp: /(sequelize.DECIMAL.*?, defaultValue: )'(.*?)'/g,
      replacement: '$1$2'
    },
    {
      regexp: /(sequelize.BOOLEAN.*?, defaultValue: )'0'/g,
      replacement: '$1false'
    },
    {
      regexp: /(sequelize.BOOLEAN.*?, defaultValue: )'1'/g,
      replacement: '$1true'
    },
    {
      regexp: /(sequelize.*?)\((.*?), ?(.*?)\),/g,
      replacement: '$1($2, $3),'
    }
  ],
  prepend,
  append
);
