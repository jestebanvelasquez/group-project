// export type Category = [
//     {"name" : "poesía" },
//     {"name" : "cuentos" },
//     {"name" : "teatro" },
//     {"name" : "Danza" },
//     {"name" : "Escultura" },
//     {"name" : "Música" },
//     {"name" : "Pintura" },
//     {"name" : "Fotografía" },
//     {"name" : "baile " },
//     {"name" : "canto" },
//     {"name" : "stand-up" },
//     {"name" : "mimo" },
//     {"name" : "diversion infantil" }
// ]

export type Category = "poesía" | "cuentos" | "teatro" | "Danza" | "Escultura" | "Música" | "Pintura"

export interface Shows {
  id:           string;
  eventName:    string;
  nickName:     string;
  description:  string;
  imagesEvent:  string[];
  duration:     number;
  priceTime:    number;
  priceDay:     number;
  country:      string;
  isActive:     boolean;
  categories:     Category[];
}



