export type RoomType =
  | "TWIN"
  | "DOUBLE"
  | "TRIPLE"
  | "FAMILY"
  | "SUITE"
  | "COTTAGE"
  | 'PREMIUM_COTTAGE'

export const roomTypes: Record<RoomType, number> = {
  DOUBLE: 2,
  TWIN: 4,
  TRIPLE: 1,
  FAMILY: 10,
  SUITE: 4,
  COTTAGE: 11,
  PREMIUM_COTTAGE: 6
};

export type BarAndRestaurantTypes =
  | "BAR_RESTAURANT"
  | "DINNING_ROOM"
  | "VIEWS"
  | "LOUNGE"
  | "BISHI_BAR"

export const braAndRestaurantTypes: Record<BarAndRestaurantTypes, number> = {
  BAR_RESTAURANT: 8,
  DINNING_ROOM: 9,
  VIEWS: 8,
  LOUNGE: 9,
  BISHI_BAR: 9,
};

export type ServiceTypes =
  | "WINERY"
  | "OUTDOOR_POOLS"
  | "GYM"
  | "SPA"
  | "CONFERENCE_HALLS"
  | "ENTERTAINMENT"
  | "GARDEN"
  | "EVENTS"
  | 'ROOSTERS'

export const serviceTypes: Record<ServiceTypes, number> = {
  WINERY: 6,
  OUTDOOR_POOLS: 10,
  GYM: 2,
  SPA: 9,
  CONFERENCE_HALLS: 6,
  ENTERTAINMENT: 8,
  GARDEN: 17,
  EVENTS: 12,
  ROOSTERS: 4,
};
