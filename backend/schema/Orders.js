cube(`Orders`, {
    sql: `SELECT * FROM orders`,
  
    joins: {
      Customers: {
        relationship: `belongsTo`,
        sql: `${CUBE}.customer_id = ${Customers}.id`
      },
      Stores: {
        relationship: `belongsTo`,
        sql: `${CUBE}.store_id = ${Stores}.id`
      }
    },
  
    measures: {
      count: {
        type: `count`,
        drillMembers: [id, createdAt, status]
      },
      totalAmount: {
        sql: `amount`,
        type: `sum`
      }
    },
  
    dimensions: {
      id: {
        sql: `id`,
        type: `number`,
        primaryKey: true
      },
      createdAt: {
        sql: `created_at`,
        type: `time`
      },
      status: {
        sql: `status`,
        type: `string`
      }
    }
  });
  