export const covers: CoverType[] = [
  { label: "denim", image: "denim_.jpg", type: "texture" },
  { label: "fabric", image: "fabric_.jpg", type: "texture" },
  { label: "pattern", image: "pattern_.jpg", type: "texture" },
  { label: "quilt", image: "quilt_.jpg", type: "texture" },
  { label: "wood", image: "wood_.jpg", type: "texture" },
  { color: "#F96666", type: "color" },
  { color: "#E8DFCA", type: "color" },
  { color: "#7895B2", type: "color" },
  { color: "#C689C6", type: "color" },
  { color: "#FD841F", type: "color" },
  { color: "#647E68", type: "color" },
  { color: "#FF9494", type: "color" },
  { color: "#FFDE00", type: "color" },
  { color: "#EEE3CB", type: "color" },
  { color: "#3D8361", type: "color" },
  { color: "#850E35", type: "color" },
];

export type CoverType =
  | { label: string; image: string; type: "texture" }
  | { type: "color"; color: string };
