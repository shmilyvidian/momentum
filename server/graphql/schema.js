const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');
const gadgetGraphQLType =  require('./gadgetType');
const Gadget = require('../model/graphqlModel');
const userType = require('./userType');

const weather = require('../utils/weather') 
const UserModel = require('../model/UserModel')


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    gadget: {
      type: gadgetGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Gadget.findById(args.id)
      }
    },
    getWeather: {
      type: GraphQLList(userType),
      async resolve(parent, args){
        return await UserModel.find({email:'shmilyvidian@163.com'})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});