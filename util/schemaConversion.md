```
'(.*?)', ?'(.*?)', ?'(.*?)', ?'(.*?)', ?(.*?), ?'(.*)'
      $1: { type: sequelize.$2, allowsNulls: $3, defaultValue: $5, '$4', '$6' },

, ?''
''

, ?'MUL'
''

, ?'UNI'
, unique: true

, ?'PRI'
, primaryKey: true

, ?'auto_increment'
, autoIncrement: true

allowsNulls: .*, primaryKey: true
primaryKey: true

allowsNulls: YES
allowsNulls: true

allowsNulls: NO
allowsNulls: false

, defaultValue: NULL
''

\.decimal
.DECIMAL

\.date,
.DATEONLY,

\.datetime
.DATE

\.char\((.*?)\),
.CHAR($1),

\.varchar\((.*?)\),
.STRING($1),

\.text
.TEXT

\.tinyint\(1\),
.BOOLEAN,

\.tinyint\((.*?)\),
.INTEGER($1),

\.int\((.*?)\),
.INTEGER($1),

(sequelize.INTEGER.*?, defaultValue: )'(.*?)'
$1$2

(sequelize.DECIMAL.*?, defaultValue: )'(.*?)'
$1$2

(sequelize.BOOLEAN.*?, defaultValue: )'0'
$1false

(sequelize.BOOLEAN.*?, defaultValue: )'1'
$1true

(sequelize.*?)\((.*?), ?(.*?)\),
$1($2, $3),
```
