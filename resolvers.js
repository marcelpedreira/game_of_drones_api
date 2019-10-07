const { getRecords,
        // getRecord,
        // updateRecord,
        // deleteRecord,
        updateRecord } = require('./controllers/records');

const resolvers = {
  Query: {
    records: async () => {
      return await getRecords();
    },
  },
  
  Mutation: {
    updateRecord: async (root, {record}) => {
      return await updateRecord(record);
    },

  },

};

module.exports = resolvers;