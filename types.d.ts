export type viking = {
  fullName: string;
  presenceOfChildren: boolean;
  age: number;
  hometown: string;
  canFightWithSword: boolean;
  canFightWithAxe: boolean;
  canFightWithSpear: boolean;
};

export type rawJsonViking = {
  fullName: string;
  village: string;
  age: number;
  valkyrie: string;
  hasSon: boolean;
};

export type rawYamlViking = {
  name: string;
  weapon: string;
  name_of_father: string;
  has_home_in: string;
  years_old: number;
  number_of_children: number;
};
