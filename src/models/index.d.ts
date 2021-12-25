import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HomesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Homes {
  readonly id: string;
  readonly Address?: string;
  readonly Pric?: number;
  readonly Bedrooms?: number;
  readonly Bathrooms?: number;
  readonly Area?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Homes, HomesMetaData>);
  static copyOf(source: Homes, mutator: (draft: MutableModel<Homes, HomesMetaData>) => MutableModel<Homes, HomesMetaData> | void): Homes;
}