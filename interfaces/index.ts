// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export enum CourierTruckStatus {
  DISPATCHED = 'dispatched',
  ARRIVED_AT_FARM = 'arrived at farm',
  LOADING_STARTED = 'loading started',
  LOADING_FINISHED = 'loading finished',
  JOURNEY_TO_KITCHEN_STARTED = 'journey to commercial kitchen started',
  ARRIVED_AT_KITCHEN = 'arrived at commercial kitchen',
}

export interface StatusHistory {
  status: CourierTruckStatus;
  timestamp: Date;
}