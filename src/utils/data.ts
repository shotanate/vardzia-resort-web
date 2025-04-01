export type RoomType =
  | "DELUXE_PLUS"
  | "DELUXE"
  | "STANDARD"
  | "FAMILY"
  | "HALF_DELUXE"
  | "COTTAGE";

export const roomTypes: Record<RoomType, number> = {
  DELUXE_PLUS: 1,
  DELUXE: 4,
  STANDARD: 1,
  FAMILY: 1,
  HALF_DELUXE: 2,
  COTTAGE: 2,
};

export type BarAndRestaurantTypes =
  | "BAR_RESTAURANT"
  | "DINNING_ROOM"
  | "TERRACE"
  | "LOUNGE";

export const braAndRestaurantTypes: Record<BarAndRestaurantTypes, number> = {
  BAR_RESTAURANT: 0,
  DINNING_ROOM: 0,
  TERRACE: 0,
  LOUNGE: 0,
};

export type ServiceTypes =
  | "WINERY"
  | "POOLS_GYM"
  | "CONFERENCE_HALLS"
  | "ENTERTAINMENT";

export const serviceTypes: Record<ServiceTypes, number> = {
  WINERY: 0,
  POOLS_GYM: 0,
  CONFERENCE_HALLS: 0,
  ENTERTAINMENT: 0,
};

export const roomTypeIds: Record<RoomType, string> = {
  DELUXE_PLUS: "RD160324601",
  DELUXE: "RD160324602",
  STANDARD: "RD160324604",
  FAMILY: "RD160324606",
  HALF_DELUXE: "RD160324608",
  COTTAGE: "RD160324610",
};
