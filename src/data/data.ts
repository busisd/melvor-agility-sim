export const enum BonusTypeKey {
  AGL_GP_PCT = "AGL_GP_PCT",
  AGL_INT_PCT = "AGL_INT_PCT",
  AGL_MAST_PCT = "AGL_MAST_PCT",
  AGL_XP_PCT = "AGL_XP_PCT",
  AMMO_PRESERVE = "AMMO_PRESERVE",
  AUTO_EAT_EFF = "AUTO_EAT_EFF",
  BANK_SPACES = "BANK_SPACES",
  COOK_INT_PCT = "COOK_INT_PCT",
  COOK_MAST_PCT = "COOK_MAST_PCT",
  COOK_SUCCESS_PCT = "COOK_SUCCESS_PCT",
  COOK_XP_PCT = "COOK_XP_PCT",
  DOUBLE_LOOT_PCT = "DOUBLE_LOOT_PCT",
  DR_PCT = "DR_PCT",
  DUNGEON_DMG_PCT = "DUNGEON_DMG_PCT",
  FARM_YIELD = "FARM_YIELD",
  FIRE_INT_PCT = "FIRE_INT_PCT",
  FIRE_XP_PCT = "FIRE_XP_PCT",
  FISH_DBL_PCT = "FISH_DBL_PCT",
  FOOD_HEAL_PCT = "FOOD_HEAL_PCT",
  GLOBAL_DMG_PCT = "GLOBAL_DMG_PCT",
  GLOBAL_DOUBLE_PCT = "GLOBAL_DOUBLE_PCT",
  GLOBAL_GP_PCT = "GLOBAL_GP_PCT",
  GLOBAL_MAST_PCT = "GLOBAL_MAST_PCT",
  GLOBAL_PRESERVE_PCT = "GLOBAL_PRESERVE_PCT",
  GLOBAL_XP_PCT = "GLOBAL_XP_PCT",
  HERB_MAST_PCT = "HERB_MAST_PCT",
  HERB_PRESERVE_PCT = "HERB_PRESERVE_PCT",
  HERB_SKILL_PCT = "HERB_SKILL_PCT",
  HP_MAX = "HP_MAX",
  HP_REGEN = "HP_REGEN",
  MAG_ACC_PCT = "MAG_ACC_PCT",
  MAG_EV_PCT = "MAG_EV_PCT",
  MAG_MAX_HIT = "MAG_MAX_HIT",
  MEL_ACC_PCT = "MEL_ACC_PCT",
  MEL_EV_PCT = "MEL_EV_PCT",
  MEL_MAX_HIT = "MEL_MAX_HIT",
  MIN_HIT_PCT = "MIN_HIT_PCT",
  MINE_DBL_PCT = "MINE_DBL_PCT",
  MINE_NODE_HP = "MINE_NODE_HP",
  MONSTER_RESPAWN_TIME = "MONSTER_RESPAWN_TIME",
  POTION_CHARGES = "POTION_CHARGES",
  POTION_PRESERVE_PCT = "POTION_PRESERVE_PCT",
  PRAY_COST = "PRAY_COST",
  PRAY_PT_SAVE_PCT = "PRAY_PT_SAVE_PCT",
  RAN_ACC_PCT = "RAN_ACC_PCT",
  RAN_EV_PCT = "RAN_EV_PCT",
  RAN_MAX_HIT = "RAN_MAX_HIT",
  RUNE_PRESERVE = "RUNE_PRESERVE",
  SLAY_AREA_NEG_PCT = "SLAY_AREA_NEG_PCT",
  SLAY_COIN_PCT = "SLAY_COIN_PCT",
  SLAY_DMG_PCT = "SLAY_DMG_PCT",
  SLAY_LEN = "SLAY_LEN",
  SLAY_SKILL_PCT = "SLAY_SKILL_PCT",
  SUMM_CHARGE_PRESERVE_PCT = "SUMM_CHARGE_PRESERVE_PCT",
  SUMM_INT_PCT = "SUMM_INT_PCT",
  SUMM_MAST_PCT = "SUMM_MAST_PCT",
  SUMM_PRESERVE_PCT = "SUMM_PRESERVE_PCT",
  SUMM_TABLET_QUANT = "SUMM_TABLET_QUANT",
  THV_DBL_PCT = "THV_DBL_PCT",
  THV_GP_PCT = "THV_GP_PCT",
  THV_INT = "THV_INT",
  THV_MAST_PCT = "THV_MAST_PCT",
  THV_SKILL_PCT = "THV_SKILL_PCT",
  THV_STEALTH = "THV_STEALTH",
  WCT_DBL_PCT = "WCT_DBL_PCT",
  WCT_INT_PCT = "WCT_INT_PCT",
}

// Bonus types
export const bonusTypeStrings = {
  [BonusTypeKey.AGL_GP_PCT]: "% GP From Agility",
  [BonusTypeKey.AGL_INT_PCT]: "% Agility Interval Reduction",
  [BonusTypeKey.AGL_MAST_PCT]: "% Agility Mastery XP",
  [BonusTypeKey.AGL_XP_PCT]: "% Agility Skill XP",
  [BonusTypeKey.AMMO_PRESERVE]: "% Ammo Preservation",
  [BonusTypeKey.AUTO_EAT_EFF]: "% Auto Eat Efficiency",
  [BonusTypeKey.BANK_SPACES]: " Bank Space",
  [BonusTypeKey.COOK_INT_PCT]: "% Cooking Interval Reduction",
  [BonusTypeKey.COOK_MAST_PCT]: "% Cooking Mastery XP",
  [BonusTypeKey.COOK_SUCCESS_PCT]: "% chance to successfully Cook an item",
  [BonusTypeKey.COOK_XP_PCT]: "% Cooking Skill XP",
  [BonusTypeKey.DOUBLE_LOOT_PCT]: "% Chance To Double Loot in Combat",
  [BonusTypeKey.DR_PCT]: "% Damage Reduction",
  [BonusTypeKey.DUNGEON_DMG_PCT]: "% Damage To Dungeon Monsters",
  [BonusTypeKey.FARM_YIELD]: "% Farming Yield",
  [BonusTypeKey.FIRE_INT_PCT]: "% Firemaking Interval Reduction",
  [BonusTypeKey.FIRE_XP_PCT]: "% Firemaking Skill XP",
  [BonusTypeKey.FISH_DBL_PCT]: "% Chance to Double Items in Fishing",
  [BonusTypeKey.FOOD_HEAL_PCT]: "% Food Healing Value",
  [BonusTypeKey.GLOBAL_DMG_PCT]: "% Damage To All Monsters",
  [BonusTypeKey.GLOBAL_DOUBLE_PCT]: "% Chance to Double Items Globally",
  [BonusTypeKey.GLOBAL_GP_PCT]: "% GP from all sources (Except Item Selling)",
  [BonusTypeKey.GLOBAL_MAST_PCT]: "% Global Mastery XP",
  [BonusTypeKey.GLOBAL_PRESERVE_PCT]:
    "% Chance to Preserve Resources in Skills",
  [BonusTypeKey.GLOBAL_XP_PCT]: "% Global Skill XP",
  [BonusTypeKey.HERB_MAST_PCT]: "% Herblore Mastery XP",
  [BonusTypeKey.HERB_PRESERVE_PCT]:
    "% Chance to Preserve Resources in Herblore",
  [BonusTypeKey.HERB_SKILL_PCT]: "% Herblore Skill XP",
  [BonusTypeKey.HP_MAX]: " Maximum Hitpoints",
  [BonusTypeKey.HP_REGEN]: " Flat HP Regen",
  [BonusTypeKey.MAG_ACC_PCT]: "% Magic Accuracy Bonus",
  [BonusTypeKey.MAG_EV_PCT]: "% Magic Evasion",
  [BonusTypeKey.MAG_MAX_HIT]: "% Magic Max Hit",
  [BonusTypeKey.MEL_ACC_PCT]: "% Melee Accuracy Bonus",
  [BonusTypeKey.MEL_EV_PCT]: "% Melee Evasion",
  [BonusTypeKey.MEL_MAX_HIT]: "% Melee Max Hit",
  [BonusTypeKey.MIN_HIT_PCT]: "% of Maximum Hit added to Minimum Hit",
  [BonusTypeKey.MINE_DBL_PCT]: "% Chance to Double Items in Mining",
  [BonusTypeKey.MINE_NODE_HP]: " Mining Node HP",
  [BonusTypeKey.MONSTER_RESPAWN_TIME]: "s Monster Respawn Timer Reduction",
  [BonusTypeKey.POTION_CHARGES]: " Charges per Potion",
  [BonusTypeKey.POTION_PRESERVE_PCT]: "% Chance To Preserve Potion Charge",
  [BonusTypeKey.PRAY_COST]: " Prayer Point Cost Reduction for Prayers",
  [BonusTypeKey.PRAY_PT_SAVE_PCT]: "% Chance To Preserve Prayer Points",
  [BonusTypeKey.RAN_ACC_PCT]: "% Ranged Accuracy Bonus",
  [BonusTypeKey.RAN_EV_PCT]: "% Ranged Evasion",
  [BonusTypeKey.RAN_MAX_HIT]: "% Ranged Max Hit",
  [BonusTypeKey.RUNE_PRESERVE]: "% Rune Preservation",
  [BonusTypeKey.SLAY_AREA_NEG_PCT]: "% Flat Slayer Area Effect Negation",
  [BonusTypeKey.SLAY_COIN_PCT]: "% Slayer Coins",
  [BonusTypeKey.SLAY_DMG_PCT]: "% Damage To Slayer Tasks",
  [BonusTypeKey.SLAY_LEN]: "% Slayer Task Length/Qty",
  [BonusTypeKey.SLAY_SKILL_PCT]: "% Slayer Skill XP",
  [BonusTypeKey.SUMM_CHARGE_PRESERVE_PCT]:
    "% Chance to preserve Summoning Charges",
  [BonusTypeKey.SUMM_INT_PCT]: "% Summoning Interval Reduction",
  [BonusTypeKey.SUMM_MAST_PCT]: "% Summoning Mastery XP",
  [BonusTypeKey.SUMM_PRESERVE_PCT]:
    "% Chance to Preserve Resources in Summoning",
  [BonusTypeKey.SUMM_TABLET_QUANT]:
    " Base Quantity for Summoning Tablet Creation",
  [BonusTypeKey.THV_DBL_PCT]: "% Chance to Double Items in Thieving",
  [BonusTypeKey.THV_GP_PCT]: "% GP From Thieving",
  [BonusTypeKey.THV_INT]: "s Thieving Interval Reduction",
  [BonusTypeKey.THV_MAST_PCT]: "% Thieving Mastery XP",
  [BonusTypeKey.THV_SKILL_PCT]: "% Thieving Skill XP",
  [BonusTypeKey.THV_STEALTH]: " Stealth while Thieving",
  [BonusTypeKey.WCT_DBL_PCT]: "% Chance to Double Items in Woodcutting",
  [BonusTypeKey.WCT_INT_PCT]: "% Woodcutting Interval Reduction",
};

export type BonusType = {
  amount: number;
  type: BonusTypeKey;
};

export type ObstacleType = {
  name: string;
  bonuses: BonusType[] | null;
};

export type ObstacleDataType = ObstacleType[][];

export const obstacleData: ObstacleDataType = [
  [
    {
      name: "Cargo Net",
      bonuses: null,
    },
    {
      name: "Rope Swing",
      bonuses: null,
    },
    {
      name: "Rope Climb",
      bonuses: [{ amount: 2, type: BonusTypeKey.THV_MAST_PCT }],
    },
  ],
  [
    {
      name: "Rope Jump",
      bonuses: null,
    },
    {
      name: "Monkey Bars",
      bonuses: [{ amount: 4, type: BonusTypeKey.FIRE_INT_PCT }],
    },
    {
      name: "Balance Beam",
      bonuses: [{ amount: 2, type: BonusTypeKey.AGL_XP_PCT }],
    },
  ],
  [
    {
      name: "Balance Seesaw",
      bonuses: [
        { amount: 2, type: BonusTypeKey.AGL_XP_PCT },
        { amount: 2, type: BonusTypeKey.AGL_MAST_PCT },
      ],
    },
    {
      name: "Pipe Climb",
      bonuses: [
        { amount: 3, type: BonusTypeKey.MEL_EV_PCT },
        { amount: 3, type: BonusTypeKey.MEL_MAX_HIT },
      ],
    },
    {
      name: "Pipe Balance",
      bonuses: [
        { amount: 10, type: BonusTypeKey.MINE_NODE_HP },
        { amount: 3, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
      ],
    },
    {
      name: "Pit Jump",
      bonuses: [
        { amount: 1, type: BonusTypeKey.GLOBAL_XP_PCT },
        { amount: -4, type: BonusTypeKey.AGL_XP_PCT },
      ],
    },
    {
      name: "Stepping Stones",
      bonuses: [
        { amount: 6, type: BonusTypeKey.WCT_INT_PCT },
        { amount: 3, type: BonusTypeKey.FIRE_XP_PCT },
      ],
    },
    {
      name: "Burning Coals",
      bonuses: [
        { amount: -6, type: BonusTypeKey.GLOBAL_DMG_PCT },
        { amount: 3, type: BonusTypeKey.COOK_XP_PCT },
        { amount: 5, type: BonusTypeKey.COOK_SUCCESS_PCT },
      ],
    },
  ],
  [
    {
      name: "Coal Stones",
      bonuses: [
        { amount: -4, type: BonusTypeKey.GLOBAL_XP_PCT },
        { amount: 3, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
        { amount: 10, type: BonusTypeKey.FOOD_HEAL_PCT },
        { amount: 20, type: BonusTypeKey.THV_GP_PCT },
      ],
    },
    {
      name: "Mud Crawl",
      bonuses: [
        { amount: 3, type: BonusTypeKey.HERB_PRESERVE_PCT },
        { amount: 2, type: BonusTypeKey.HERB_SKILL_PCT },
        { amount: 2, type: BonusTypeKey.HERB_MAST_PCT },
        { amount: -10, type: BonusTypeKey.FARM_YIELD },
      ],
    },
    {
      name: "Mud Dive",
      bonuses: [
        { amount: -4, type: BonusTypeKey.DR_PCT },
        { amount: 2, type: BonusTypeKey.MEL_MAX_HIT },
        { amount: 20, type: BonusTypeKey.HP_MAX },
        { amount: 5, type: BonusTypeKey.MEL_ACC_PCT },
      ],
    },
    {
      name: "Cave Climb",
      bonuses: [
        { amount: 5, type: BonusTypeKey.RUNE_PRESERVE },
        { amount: 5, type: BonusTypeKey.MEL_MAX_HIT },
        { amount: -40, type: BonusTypeKey.HP_MAX },
        { amount: 5, type: BonusTypeKey.AMMO_PRESERVE },
      ],
    },
    {
      name: "Gap Jump",
      bonuses: null,
    },
  ],
  [
    {
      name: "Rock Climb",
      bonuses: [
        { amount: 5, type: BonusTypeKey.FISH_DBL_PCT },
        { amount: 5, type: BonusTypeKey.WCT_DBL_PCT },
        { amount: 5, type: BonusTypeKey.MINE_DBL_PCT },
        { amount: 5, type: BonusTypeKey.THV_DBL_PCT },
        { amount: -10, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
      ],
    },
    {
      name: "Cliff Climb",
      bonuses: [
        { amount: 10, type: BonusTypeKey.SLAY_LEN },
        { amount: -10, type: BonusTypeKey.SLAY_SKILL_PCT },
        { amount: -20, type: BonusTypeKey.SLAY_AREA_NEG_PCT },
        { amount: 5, type: BonusTypeKey.SLAY_DMG_PCT },
        { amount: 10, type: BonusTypeKey.SLAY_COIN_PCT },
      ],
    },
    {
      name: "Cliff Balance",
      bonuses: [
        { amount: 5, type: BonusTypeKey.RAN_ACC_PCT },
        { amount: 5, type: BonusTypeKey.MAG_ACC_PCT },
        { amount: 5, type: BonusTypeKey.MEL_ACC_PCT },
        { amount: 20, type: BonusTypeKey.HP_MAX },
        { amount: -2, type: BonusTypeKey.PRAY_COST },
      ],
    },
    {
      name: "Mountain Climb",
      bonuses: [
        { amount: -8, type: BonusTypeKey.AGL_XP_PCT },
        { amount: 15, type: BonusTypeKey.AGL_GP_PCT },
        { amount: 12, type: BonusTypeKey.AGL_INT_PCT },
        { amount: -2, type: BonusTypeKey.AGL_MAST_PCT },
      ],
    },
    {
      name: "Tree Climb",
      bonuses: [
        { amount: 3, type: BonusTypeKey.GLOBAL_XP_PCT },
        { amount: -10, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
        { amount: -10, type: BonusTypeKey.RUNE_PRESERVE },
        { amount: -10, type: BonusTypeKey.AMMO_PRESERVE },
        { amount: 2, type: BonusTypeKey.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Rooftop Run",
      bonuses: [
        { amount: -10, type: BonusTypeKey.GLOBAL_DMG_PCT },
        { amount: 20, type: BonusTypeKey.THV_GP_PCT },
        { amount: 0.2, type: BonusTypeKey.THV_INT },
        { amount: 3, type: BonusTypeKey.THV_SKILL_PCT },
        { amount: 35, type: BonusTypeKey.THV_STEALTH },
      ],
    },
  ],
  [
    {
      name: "Tree Hop",
      bonuses: [
        { amount: 5, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
        { amount: 5, type: BonusTypeKey.AMMO_PRESERVE },
        { amount: 5, type: BonusTypeKey.RUNE_PRESERVE },
      ],
    },
    {
      name: "Tree Balance",
      bonuses: [
        { amount: 12, type: BonusTypeKey.AGL_INT_PCT },
        { amount: -4, type: BonusTypeKey.GLOBAL_XP_PCT },
      ],
    },
    {
      name: "Rocky Waters",
      bonuses: [{ amount: 50, type: BonusTypeKey.HP_MAX }],
    },
    {
      name: "Lake Swim",
      bonuses: [
        { amount: 3, type: BonusTypeKey.GLOBAL_DMG_PCT },
        { amount: 1, type: BonusTypeKey.DR_PCT },
      ],
    },
    {
      name: "Raft Drifting",
      bonuses: [{ amount: 10, type: BonusTypeKey.FARM_YIELD }],
    },
    {
      name: "Forest Trail",
      bonuses: [
        { amount: 3, type: BonusTypeKey.SUMM_MAST_PCT },
        { amount: 3, type: BonusTypeKey.SUMM_INT_PCT },
        { amount: -6, type: BonusTypeKey.FARM_YIELD },
      ],
    },
  ],
  [
    {
      name: "Spike Trap",
      bonuses: [
        { amount: -40, type: BonusTypeKey.HP_MAX },
        { amount: -2, type: BonusTypeKey.DR_PCT },
      ],
    },
    {
      name: "Heat Trap",
      bonuses: [
        { amount: -10, type: BonusTypeKey.GLOBAL_DMG_PCT },
        { amount: -10, type: BonusTypeKey.AUTO_EAT_EFF },
      ],
    },
    {
      name: "Boulder Trap",
      bonuses: [{ amount: -20, type: BonusTypeKey.GLOBAL_PRESERVE_PCT }],
    },
    {
      name: "Water Trap",
      bonuses: [
        { amount: -6, type: BonusTypeKey.GLOBAL_XP_PCT },
        { amount: -6, type: BonusTypeKey.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Freezing Trap",
      bonuses: [
        { amount: -16, type: BonusTypeKey.RAN_ACC_PCT },
        { amount: -30, type: BonusTypeKey.RUNE_PRESERVE },
        { amount: -16, type: BonusTypeKey.MEL_ACC_PCT },
        { amount: -30, type: BonusTypeKey.AMMO_PRESERVE },
        { amount: -16, type: BonusTypeKey.MAG_ACC_PCT },
      ],
    },
  ],
  [
    {
      name: "Pipe Crawl",
      bonuses: [
        { amount: 8, type: BonusTypeKey.SLAY_DMG_PCT },
        { amount: -10, type: BonusTypeKey.SLAY_COIN_PCT },
      ],
    },
    {
      name: "Raft Building",
      bonuses: [
        { amount: 2, type: BonusTypeKey.GLOBAL_DMG_PCT },
        { amount: 20, type: BonusTypeKey.HP_MAX },
      ],
    },
    {
      name: "Spike Jump",
      bonuses: [
        { amount: 5, type: BonusTypeKey.DUNGEON_DMG_PCT },
        { amount: 5, type: BonusTypeKey.DOUBLE_LOOT_PCT },
      ],
    },
    {
      name: "Tree Hang",
      bonuses: [
        { amount: -6, type: BonusTypeKey.GLOBAL_XP_PCT },
        { amount: 5, type: BonusTypeKey.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "A Lovely Jog",
      bonuses: [
        { amount: 5, type: BonusTypeKey.GLOBAL_XP_PCT },
        { amount: -6, type: BonusTypeKey.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Runic Trail",
      bonuses: [
        { amount: 5, type: BonusTypeKey.SUMM_PRESERVE_PCT },
        { amount: 15, type: BonusTypeKey.SUMM_CHARGE_PRESERVE_PCT },
        { amount: -16, type: BonusTypeKey.HERB_PRESERVE_PCT },
        { amount: 3, type: BonusTypeKey.SUMM_TABLET_QUANT },
      ],
    },
    {
      name: "Sweltering Pools",
      bonuses: [
        { amount: -20, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
        { amount: 3, type: BonusTypeKey.COOK_MAST_PCT },
        { amount: 10, type: BonusTypeKey.AUTO_EAT_EFF },
        { amount: 3, type: BonusTypeKey.COOK_INT_PCT },
        { amount: 10, type: BonusTypeKey.FOOD_HEAL_PCT },
      ],
    },
  ],
  [
    {
      name: "Lava Jump",
      bonuses: [
        { amount: -6, type: BonusTypeKey.AUTO_EAT_EFF },
        { amount: 0.3, type: BonusTypeKey.MONSTER_RESPAWN_TIME },
        { amount: -6, type: BonusTypeKey.DR_PCT },
        { amount: -6, type: BonusTypeKey.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Water Jump",
      bonuses: [
        { amount: 3, type: BonusTypeKey.MAG_MAX_HIT },
        { amount: 3, type: BonusTypeKey.MEL_MAX_HIT },
        { amount: 3, type: BonusTypeKey.RAN_MAX_HIT },
        { amount: 2, type: BonusTypeKey.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Ice Jump",
      bonuses: [
        { amount: 10, type: BonusTypeKey.MINE_NODE_HP },
        { amount: 5, type: BonusTypeKey.SLAY_SKILL_PCT },
        { amount: 5, type: BonusTypeKey.GLOBAL_DOUBLE_PCT },
        { amount: 10, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
        { amount: 10, type: BonusTypeKey.FOOD_HEAL_PCT },
        { amount: 20, type: BonusTypeKey.HP_MAX },
        { amount: 10, type: BonusTypeKey.SLAY_COIN_PCT },
      ],
    },
    {
      name: "Cave Maze",
      bonuses: [
        { amount: 10, type: BonusTypeKey.PRAY_PT_SAVE_PCT },
        { amount: 10, type: BonusTypeKey.RUNE_PRESERVE },
        { amount: 1, type: BonusTypeKey.PRAY_COST },
        { amount: 10, type: BonusTypeKey.AMMO_PRESERVE },
      ],
    },
    {
      name: "Frozen Lake Crossing",
      bonuses: [
        { amount: 3, type: BonusTypeKey.GLOBAL_DMG_PCT },
        { amount: 10, type: BonusTypeKey.AUTO_EAT_EFF },
      ],
    },
  ],
  [
    {
      name: "Waterfall",
      bonuses: null,
    },
    {
      name: "Lava Waterfall Dodge",
      bonuses: [
        { amount: 10, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
        { amount: 10, type: BonusTypeKey.RUNE_PRESERVE },
        { amount: 10, type: BonusTypeKey.PRAY_PT_SAVE_PCT },
        { amount: 5, type: BonusTypeKey.AMMO_PRESERVE },
        { amount: 10, type: BonusTypeKey.SLAY_COIN_PCT },
      ],
    },
    {
      name: "Boulder Move",
      bonuses: [{ amount: 8, type: BonusTypeKey.GLOBAL_MAST_PCT }],
    },
    {
      name: "Dragon Fight",
      bonuses: [
        { amount: -16, type: BonusTypeKey.AUTO_EAT_EFF },
        { amount: 0.3, type: BonusTypeKey.MONSTER_RESPAWN_TIME },
      ],
    },
    {
      name: "Ocean Rafting",
      bonuses: [
        { amount: 5, type: BonusTypeKey.GLOBAL_DMG_PCT },
        { amount: 5, type: BonusTypeKey.AUTO_EAT_EFF },
      ],
    },
  ],
  [
    {
      name: "Pillar of Combat",
      bonuses: [
        { amount: 10, type: BonusTypeKey.MAG_EV_PCT },
        { amount: 10, type: BonusTypeKey.RAN_EV_PCT },
        { amount: 0.2, type: BonusTypeKey.MONSTER_RESPAWN_TIME },
        { amount: 10, type: BonusTypeKey.MEL_EV_PCT },
        { amount: 5, type: BonusTypeKey.MIN_HIT_PCT },
        { amount: 5, type: BonusTypeKey.SLAY_AREA_NEG_PCT },
        { amount: 50, type: BonusTypeKey.HP_REGEN },
      ],
    },
    {
      name: "Pillar of Skilling",
      bonuses: [
        { amount: 2, type: BonusTypeKey.GLOBAL_MAST_PCT },
        { amount: 3, type: BonusTypeKey.GLOBAL_PRESERVE_PCT },
        { amount: 3, type: BonusTypeKey.GLOBAL_DOUBLE_PCT },
        { amount: 10, type: BonusTypeKey.FARM_YIELD },
      ],
    },
    {
      name: "Pillar of Generosity",
      bonuses: [
        { amount: 5, type: BonusTypeKey.SUMM_CHARGE_PRESERVE_PCT },
        { amount: 10, type: BonusTypeKey.BANK_SPACES },
        { amount: 5, type: BonusTypeKey.POTION_CHARGES },
        { amount: 10, type: BonusTypeKey.POTION_PRESERVE_PCT },
        { amount: 10, type: BonusTypeKey.GLOBAL_GP_PCT },
      ],
    },
  ],
];
