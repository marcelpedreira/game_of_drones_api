const { getRecords, updateRecord } = require('./controllers/records');

const resolvers = {
  Query: {
    records: () => getRecords()
  },
  
  Mutation: {
    updateRecord: (root, {record}) => updateRecord(record)
  },
};

module.exports = resolvers;