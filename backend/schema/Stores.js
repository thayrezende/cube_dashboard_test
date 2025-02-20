cube(`Stores`, {
    sql: `SELECT * FROM stores`,
  
    measures: {
      count: {
        type: `count`,
        drillMembers: [id, name]
      }
    },
  
    dimensions: {
      id: {
        sql: `id`,
        type: `number`,
        primaryKey: true
      },
      name: {
        sql: `name`,
        type: `string`
      },
      location: {
        sql: `location`,
        type: `string`
      }
    }
  });
  