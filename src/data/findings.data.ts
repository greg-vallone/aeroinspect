import type { Finding } from "../types/findings";

export const findings: Finding[] = [
  {
    id: 1,
    inspectionId: 1,
    title: "Blade leading-edge damage",
    description:
      "Minor damage observed on the leading edge of blade 2.",
    severity: "Medium",
  },
  {
    id: 2,
    inspectionId: 1,
    title: "Surface contamination",
    description:
      "Localized surface contamination observed near the blade root.",
    severity: "Low",
  },
  {
    id: 3,
    inspectionId: 2,
    title: "Panel damage",
    description:
      "Cracked photovoltaic panel identified in array B.",
    severity: "High",
  },
];