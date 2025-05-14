export type RoomType =
  | "TWIN"
  | "DOUBLE"
  | "TRIPLE"
  | "FAMILY"
  | "SUITE"
  | "COTTAGE";

export const roomTypes: Record<RoomType, number> = {
  DOUBLE: 2,
  TWIN: 4,
  TRIPLE: 1,
  FAMILY: 4,
  SUITE: 4,
  COTTAGE: 5,
};

export type BarAndRestaurantTypes =
  | "BAR_RESTAURANT"
  | "DINNING_ROOM"
  | "TERRACE"
  | "LOUNGE";

export const braAndRestaurantTypes: Record<BarAndRestaurantTypes, number> = {
  BAR_RESTAURANT: 10,
  DINNING_ROOM: 5,
  TERRACE: 2,
  LOUNGE: 18,
};

export type ServiceTypes =
  | "WINERY"
  | "POOLS_SPA"
  | "CONFERENCE_HALLS"
  | "ENTERTAINMENT"
  | "GARDEN"
  | "EVENTS";

export const serviceTypes: Record<ServiceTypes, number> = {
  WINERY: 6,
  POOLS_SPA: 10,
  CONFERENCE_HALLS: 6,
  ENTERTAINMENT: 7,
  GARDEN: 7,
  EVENTS: 7,
};
