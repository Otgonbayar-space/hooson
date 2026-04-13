import { ApolloServer } from '@apollo/server';
import {
  Types as MemberTypes,
  Queries as MemberQueries,
  Mutations as MemberMutations,
} from './schema/member';

import { memberQueries } from '../apollo/resolvers/queries/member';
import { memberMutations } from './resolvers/mutations/member';

export const userApolloServer = new ApolloServer({
  typeDefs: `
    ${MemberTypes}

    type Query {
      ${MemberQueries}
    }
    
    type Mutation {
      ${MemberMutations}
    }
  `,

  resolvers: {
    Query: { ...memberQueries },

    Mutation: { ...memberMutations },
  },
});
