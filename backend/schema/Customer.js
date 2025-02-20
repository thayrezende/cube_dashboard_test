cube(`Customers`, {
    sql: `SELECT * FROM customers`,
  
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
      email: {
        sql: `email`,
        type: `string`
      },
      phone: {
        sql: `phone`,
        type: `string`
      },
      createdAt: {
        sql: `created_at`,
        type: `time`
      }
    }
  });
  