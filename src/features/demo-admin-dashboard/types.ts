export interface Persona {
  id: string;
  name: string;
  email: string;
  stellarAddress: string;
  avatar: string;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  owner: Persona;
  reviewer: Persona;
  lastEditor: Persona;
}
