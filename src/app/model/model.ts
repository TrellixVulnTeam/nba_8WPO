export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  name: string;
  fullName: string;
  logoUrl: string;
}

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  heightInches: number;
  position: string;
  weightPounds: number;
  teamId: number;
}
