const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
type Message {
  title: String
  description: String
}

type Record {
  #id: ID!               
  player: String
  wins: String
}

input RecordInput {
  #id: ID!
  player: String
  #wins: String
}

input NewRecordInput {
  player: String
}

type Query {
  records(id: ID): [Record]    
  #record(id: ID): Record  
}

type Mutation {
  #createRecord(record: NewRecordInput): Message
  updateRecord(record: RecordInput): Message
  #deleteRecord(id: ID): Message
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
