export type RoomType =
  | "DELUXE_PLUS"
  | "DELUXE"
  | "STANDARD"
  | "FAMILY"
  | "HALF_DELUXE"
  | "COTTAGE";

export const room_types: Record<RoomType, number> = {
  DELUXE_PLUS: 1,
  DELUXE: 4,
  STANDARD: 1,
  FAMILY: 1,
  HALF_DELUXE: 2,
  COTTAGE: 2,
};
