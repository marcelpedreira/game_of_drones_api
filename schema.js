const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
type Message {
  title: String
  description: String
}

type Record {
  id: ID!               
  player: String
  wins: String
}

input RecordInput {
  player: String
}

type Query {
  records(id: ID): [Record]    
}

type Mutation {
  updateRecord(record: RecordInput): Message
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
