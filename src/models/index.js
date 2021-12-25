// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Homes } = initSchema(schema);

export {
  Homes
};