interface Features {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
}

interface Analytics {
  _id: string; 
  day: Date;
  age: "15-25" | ">25";
  gender: "Male" | "Female";
  features: Features;
}

export default Analytics;
