const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLT } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserInfo',
  fields: () => ({
    userName: { type: GraphQLString },
    userId: { type: GraphQLString }, 
    email: { type: GraphQLString },
    createTime: { type: GraphQLString },
  })
});

module.exports = UserType;