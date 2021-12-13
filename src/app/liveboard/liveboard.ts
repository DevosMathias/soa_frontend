export interface Liveboard {
  version: string;
  timestamp: string;
  station: string;
  stationinfo: {
    locationX: string,
    locationY: string;
    id: string;
    name: string;
    '@id': string;
    standardname: string;
  };
  departures: {
    number: string;
    departure: [Departure];
  };
}

export interface Departure {
  id: string;
  delay: string;
  station: string;
  stationinfo: {
    locationX: string,
    locationY: string;
    id: string;
    name: string;
    '@id': string;
    standardname: string;
  };
  time: string;
  vehicle: string;
  vehicleinfo: {
    name: string;
    shortname: string;
    number: number;
    type: string;
    '@id': string;
  };
  platform: string;
  platforminfo: {
    name: string;
    normal: string;
  };
  canceled: number;
  left: number;
  isExtra: number;
  departureConnection: string;
  occupancy: {
    name: string;
    '@id': string;
  };
}

