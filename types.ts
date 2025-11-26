
export enum Faction {
  WEI = '魏 (藍)',
  SHU = '蜀 (紅)',
  WU = '吳 (綠)',
  QUN = '群 (灰)',
  JIN = '晉 (紫)',
  GOD = '神 (黃)'
}

export enum CardType {
  BASIC = '基本牌',
  SCROLL = '錦囊牌',
  WEAPON = '武器',
  ARMOR = '防具',
  MOUNT = '坐騎'
}

export interface GameCard {
  id: string;
  name: string;
  type: CardType;
  description: string;
  distance?: number; // For weapons/mounts
}

export interface Character {
  id: string;
  name: string;
  faction: Faction;
  health: number;
  skills: string[];
  imageUrl?: string;
}

export interface RuleSection {
  title: string;
  content: string[];
}
