export type RoomType =
  | "TWIN"
  | "DOUBLE"
  | "TRIPLE"
  | "FAMILY"
  | "JUNIOR_SUITE"
  | "COTTAGE";

export const roomTypes: Record<RoomType, number> = {
  TWIN: 1,
  DOUBLE: 4,
  TRIPLE: 1,
  FAMILY: 1,
  JUNIOR_SUITE: 2,
  COTTAGE: 2,
};

export type BarAndRestaurantTypes =
  | "BAR_RESTAURANT"
  | "DINNING_ROOM"
  | "TERRACE"
  | "LOUNGE";

export const braAndRestaurantTypes: Record<BarAndRestaurantTypes, number> = {
  BAR_RESTAURANT: 0,
  DINNING_ROOM: 5,
  TERRACE: 2,
  LOUNGE: 18,
};

export type ServiceTypes =
  | "WINERY"
  | "POOLS_SPA"
  | "CONFERENCE_HALLS"
  | "ENTERTAINMENT";

export const serviceTypes: Record<ServiceTypes, number> = {
  WINERY: 6,
  POOLS_SPA: 3,
  CONFERENCE_HALLS: 6,
  ENTERTAINMENT: 6,
};

export const roomTypeIds: Record<RoomType, string> = {
  TWIN: "RD160324601",
  DOUBLE: "RD160324602",
  TRIPLE: "RD160324604",
  FAMILY: "RD160324606",
  JUNIOR_SUITE: "RD160324608",
  COTTAGE: "RD160324610",
};
