// Bonus types
export const bt = {
  AGL_GP_PCT: "% GP From Agility",
  AGL_INT_PCT: "% Agility Interval Reduction",
  AGL_MAST_PCT: "% Agility Mastery XP",
  AGL_XP_PCT: "% Agility Skill XP",
  AMMO_PRESERVE: "% Ammo Preservation",
  AUTO_EAT_EFF: "% Auto Eat Efficiency",
  BANK_SPACES: " Bank Space",
  COOK_INT_PCT: "% Cooking Interval Reduction",
  COOK_MAST_PCT: "% Cooking Mastery XP",
  COOK_SUCCESS_PCT: "% chance to successfully Cook an item",
  COOK_XP_PCT: "% Cooking Skill XP",
  DOUBLE_LOOT_PCT: "% Chance To Double Loot in Combat",
  DR_PCT: "% Damage Reduction",
  DUNGEON_DMG_PCT: "% Damage To Dungeon Monsters",
  FARM_YIELD: "% Farming Yield",
  FIRE_INT_PCT: "% Firemaking Interval",
  FIRE_XP_PCT: "% Firemaking Skill XP",
  FISH_DBL_PCT: "% Chance to Double Items in Fishing",
  FOOD_HEAL_PCT: "% Food Healing Value",
  GLOBAL_DMG_PCT: "% Damage To All Monsters",
  GLOBAL_DOUBLE_PCT: "% Chance to Double Items Globally",
  GLOBAL_GP_PCT: "% GP from all sources (Except Item Selling)",
  GLOBAL_MAST_PCT: "% Global Mastery XP",
  GLOBAL_PRESERVE_PCT: "% Chance to Preserve Resources in Skills",
  GLOBAL_XP_PCT: "% Global Skill XP",
  HERB_MAST_PCT: "% Herblore Mastery XP",
  HERB_PRESERVE_PCT: "% Chance to Preserve Resources in Herblore",
  HERB_SKILL_PCT: "% Herblore Skill XP",
  HP_MAX: " Maximum Hitpoints",
  HP_REGEN: " Flat HP Regen",
  MAG_ACC_PCT: "% Magic Accuracy Bonus",
  MAG_EV_PCT: "% Magic Evasion",
  MAG_MAX_HIT: "% Magic Max Hit",
  MEL_ACC_PCT: "% Melee Accuracy Bonus",
  MEL_EV_PCT: "% Melee Evasion",
  MEL_MAX_HIT: "% Melee Max Hit",
  MIN_HIT_PCT: "% of Maximum Hit added to Minimum Hit",
  MINE_DBL_PCT: "% Chance to Double Items in Mining",
  MINE_NODE_HP: " Mining Node HP",
  MONSTER_RESPAWN_TIME: "s Monster Respawn Timer Reduction",
  POTION_CHARGES: " Charges per Potion",
  POTION_PRESERVE_PCT: "% Chance To Preserve Potion Charge",
  PRAY_COST: " Prayer Point Cost Reduction for Prayers",
  PRAY_PT_SAVE_PCT: "% Chance To Preserve Prayer Points",
  RAN_ACC_PCT: "% Ranged Accuracy Bonus",
  RAN_EV_PCT: "% Ranged Evasion",
  RAN_MAX_HIT: "% Ranged Max Hit",
  RUNE_PRESERVE: "% Rune Preservation",
  SLAY_AREA_NEG_PCT: "% Flat Slayer Area Effect Negation",
  SLAY_COIN_PCT: "% Slayer Coins",
  SLAY_DMG_PCT: "% Damage To Slayer Tasks",
  SLAY_LEN: "% Slayer Task Length/Qty",
  SLAY_SKILL_PCT: "% Slayer Skill XP",
  SUMM_CHARGE_PRESERVE_PCT: "% Chance to preserve Summoning Charges",
  SUMM_INT_PCT: "% Summoning Interval Reduction",
  SUMM_MAST_PCT: "% Summoning Mastery XP",
  SUMM_PRESERVE_PCT: "% Chance to Preserve Resources in Summoning",
  SUMM_TABLET_QUANT: " Base Quantity for Summoning Tablet Creation",
  THV_DBL_PCT: "% Chance to Double Items in Thieving",
  THV_GP_PCT: "% GP From Thieving",
  THV_INT: "s Thieving Interval",
  THV_MAST_PCT: "% Thieving Mastery XP",
  THV_SKILL_PCT: "% Thieving Skill XP",
  THV_STEALTH: " Stealth while Thieving",
  WCT_DBL_PCT: "% Chance to Double Items in Woodcutting",
  WCT_INT_PCT: "% Woodcutting Interval Reduction",
};

export const obstacleData = [
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
      bonuses: [{ amount: 2, type: bt.THV_MAST_PCT }],
    },
  ],
  [
    {
      name: "Rope Jump",
      bonuses: null,
    },
    {
      name: "Monkey Bars",
      bonuses: [{ amount: 4, type: bt.FIRE_INT_PCT }],
    },
    {
      name: "Balance Beam",
      bonuses: [{ amount: 2, type: bt.AGL_XP_PCT }],
    },
  ],
  [
    {
      name: "Balance Seesaw",
      bonuses: [
        { amount: 2, type: bt.AGL_XP_PCT },
        { amount: 2, type: bt.AGL_MAST_PCT },
      ],
    },
    {
      name: "Pipe Climb",
      bonuses: [
        { amount: 3, type: bt.MEL_EV_PCT },
        { amount: 3, type: bt.MEL_MAX_HIT },
      ],
    },
    {
      name: "Pipe Balance",
      bonuses: [
        { amount: 10, type: bt.MINE_NODE_HP },
        { amount: 3, type: bt.GLOBAL_PRESERVE_PCT },
      ],
    },
    {
      name: "Pit Jump",
      bonuses: [
        { amount: 1, type: bt.GLOBAL_XP_PCT },
        { amount: -4, type: bt.AGL_XP_PCT },
      ],
    },
    {
      name: "Stepping Stones",
      bonuses: [
        { amount: 6, type: bt.WCT_INT_PCT },
        { amount: 3, type: bt.FIRE_XP_PCT },
      ],
    },
    {
      name: "Burning Coals",
      bonuses: [
        { amount: -6, type: bt.GLOBAL_DMG_PCT },
        { amount: 3, type: bt.COOK_XP_PCT },
        { amount: 5, type: bt.COOK_SUCCESS_PCT },
      ],
    },
  ],
  [
    {
      name: "Coal Stones",
      bonuses: [
        { amount: -4, type: bt.GLOBAL_XP_PCT },
        { amount: 3, type: bt.GLOBAL_PRESERVE_PCT },
        { amount: 10, type: bt.FOOD_HEAL_PCT },
        { amount: 20, type: bt.THV_GP_PCT },
      ],
    },
    {
      name: "Mud Crawl",
      bonuses: [
        { amount: 3, type: bt.HERB_PRESERVE_PCT },
        { amount: 2, type: bt.HERB_SKILL_PCT },
        { amount: 2, type: bt.HERB_MAST_PCT },
        { amount: -10, type: bt.FARM_YIELD },
      ],
    },
    {
      name: "Mud Dive",
      bonuses: [
        { amount: -4, type: bt.DR_PCT },
        { amount: 2, type: bt.MEL_MAX_HIT },
        { amount: 20, type: bt.HP_MAX },
        { amount: 5, type: bt.MEL_ACC_PCT },
      ],
    },
    {
      name: "Cave Climb",
      bonuses: [
        { amount: 5, type: bt.RUNE_PRESERVE },
        { amount: 5, type: bt.MEL_MAX_HIT },
        { amount: -40, type: bt.HP_MAX },
        { amount: 5, type: bt.AMMO_PRESERVE },
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
        { amount: 5, type: bt.FISH_DBL_PCT },
        { amount: 5, type: bt.WCT_DBL_PCT },
        { amount: 5, type: bt.MINE_DBL_PCT },
        { amount: 5, type: bt.THV_DBL_PCT },
        { amount: -10, type: bt.GLOBAL_PRESERVE_PCT },
      ],
    },
    {
      name: "Cliff Climb",
      bonuses: [
        { amount: 10, type: bt.SLAY_LEN },
        { amount: -10, type: bt.SLAY_SKILL_PCT },
        { amount: -20, type: bt.SLAY_AREA_NEG_PCT },
        { amount: 5, type: bt.SLAY_DMG_PCT },
        { amount: 10, type: bt.SLAY_COIN_PCT },
      ],
    },
    {
      name: "Cliff Balance",
      bonuses: [
        { amount: 5, type: bt.RAN_ACC_PCT },
        { amount: 5, type: bt.MAG_ACC_PCT },
        { amount: 5, type: bt.MEL_ACC_PCT },
        { amount: 20, type: bt.HP_MAX },
        { amount: -2, type: bt.PRAY_COST },
      ],
    },
    {
      name: "Mountain Climb",
      bonuses: [
        { amount: -8, type: bt.AGL_XP_PCT },
        { amount: 15, type: bt.AGL_GP_PCT },
        { amount: 12, type: bt.AGL_INT_PCT },
        { amount: -2, type: bt.AGL_MAST_PCT },
      ],
    },
    {
      name: "Tree Climb",
      bonuses: [
        { amount: 3, type: bt.GLOBAL_XP_PCT },
        { amount: -10, type: bt.GLOBAL_PRESERVE_PCT },
        { amount: -10, type: bt.RUNE_PRESERVE },
        { amount: -10, type: bt.AMMO_PRESERVE },
        { amount: 2, type: bt.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Rooftop Run",
      bonuses: [
        { amount: -10, type: bt.GLOBAL_DMG_PCT },
        { amount: 20, type: bt.THV_GP_PCT },
        { amount: 0.2, type: bt.THV_INT },
        { amount: 3, type: bt.THV_SKILL_PCT },
        { amount: 35, type: bt.THV_STEALTH },
      ],
    },
  ],
  [
    {
      name: "Tree Hop",
      bonuses: [
        { amount: 5, type: bt.GLOBAL_PRESERVE_PCT },
        { amount: 5, type: bt.AMMO_PRESERVE },
        { amount: 5, type: bt.RUNE_PRESERVE },
      ],
    },
    {
      name: "Tree Balance",
      bonuses: [
        { amount: 12, type: bt.AGL_INT_PCT },
        { amount: -4, type: bt.GLOBAL_XP_PCT },
      ],
    },
    {
      name: "Rocky Waters",
      bonuses: [{ amount: 50, type: bt.HP_MAX }],
    },
    {
      name: "Lake Swim",
      bonuses: [
        { amount: 3, type: bt.GLOBAL_DMG_PCT },
        { amount: 1, type: bt.DR_PCT },
      ],
    },
    {
      name: "Raft Drifting",
      bonuses: [{ amount: 10, type: bt.FARM_YIELD }],
    },
    {
      name: "Forest Trail",
      bonuses: [
        { amount: 3, type: bt.SUMM_MAST_PCT },
        { amount: 3, type: bt.SUMM_INT_PCT },
        { amount: -6, type: bt.FARM_YIELD },
      ],
    },
  ],
  [
    {
      name: "Spike Trap",
      bonuses: [
        { amount: -40, type: bt.HP_MAX },
        { amount: -2, type: bt.DR_PCT },
      ],
    },
    {
      name: "Heat Trap",
      bonuses: [
        { amount: -10, type: bt.GLOBAL_DMG_PCT },
        { amount: -10, type: bt.AUTO_EAT_EFF },
      ],
    },
    {
      name: "Boulder Trap",
      bonuses: [{ amount: -20, type: bt.GLOBAL_PRESERVE_PCT }],
    },
    {
      name: "Water Trap",
      bonuses: [
        { amount: -6, type: bt.GLOBAL_XP_PCT },
        { amount: -6, type: bt.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Freezing Trap",
      bonuses: [
        { amount: -16, type: bt.RAN_ACC_PCT },
        { amount: -30, type: bt.RUNE_PRESERVE },
        { amount: -16, type: bt.MEL_ACC_PCT },
        { amount: -30, type: bt.AMMO_PRESERVE },
        { amount: -16, type: bt.MAG_ACC_PCT },
      ],
    },
  ],
  [
    {
      name: "Pipe Crawl",
      bonuses: [
        { amount: 8, type: bt.SLAY_DMG_PCT },
        { amount: -10, type: bt.SLAY_COIN_PCT },
      ],
    },
    {
      name: "Raft Building",
      bonuses: [
        { amount: 2, type: bt.GLOBAL_DMG_PCT },
        { amount: 20, type: bt.HP_MAX },
      ],
    },
    {
      name: "Spike Jump",
      bonuses: [
        { amount: 5, type: bt.DUNGEON_DMG_PCT },
        { amount: 5, type: bt.DOUBLE_LOOT_PCT },
      ],
    },
    {
      name: "Tree Hang",
      bonuses: [
        { amount: -6, type: bt.GLOBAL_XP_PCT },
        { amount: 5, type: bt.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "A Lovely Jog",
      bonuses: [
        { amount: 5, type: bt.GLOBAL_XP_PCT },
        { amount: -6, type: bt.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Runic Trail",
      bonuses: [
        { amount: 5, type: bt.SUMM_PRESERVE_PCT },
        { amount: 15, type: bt.SUMM_CHARGE_PRESERVE_PCT },
        { amount: -16, type: bt.HERB_PRESERVE_PCT },
        { amount: 3, type: bt.SUMM_TABLET_QUANT },
      ],
    },
    {
      name: "Sweltering Pools",
      bonuses: [
        { amount: -20, type: bt.GLOBAL_PRESERVE_PCT },
        { amount: 3, type: bt.COOK_MAST_PCT },
        { amount: 10, type: bt.AUTO_EAT_EFF },
        { amount: 3, type: bt.COOK_INT_PCT },
        { amount: 10, type: bt.FOOD_HEAL_PCT },
      ],
    },
  ],
  [
    {
      name: "Lava Jump",
      bonuses: [
        { amount: -6, type: bt.AUTO_EAT_EFF },
        { amount: 0.3, type: bt.MONSTER_RESPAWN_TIME },
        { amount: -6, type: bt.DR_PCT },
        { amount: -6, type: bt.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Water Jump",
      bonuses: [
        { amount: 3, type: bt.MAG_MAX_HIT },
        { amount: 3, type: bt.MEL_MAX_HIT },
        { amount: 3, type: bt.RAN_MAX_HIT },
        { amount: 2, type: bt.GLOBAL_MAST_PCT },
      ],
    },
    {
      name: "Ice Jump",
      bonuses: [
        { amount: 10, type: bt.MINE_NODE_HP },
        { amount: 5, type: bt.SLAY_SKILL_PCT },
        { amount: 5, type: bt.GLOBAL_DOUBLE_PCT },
        { amount: 10, type: bt.GLOBAL_PRESERVE_PCT },
        { amount: 10, type: bt.FOOD_HEAL_PCT },
        { amount: 20, type: bt.HP_MAX },
        { amount: 10, type: bt.SLAY_COIN_PCT },
      ],
    },
    {
      name: "Cave Maze",
      bonuses: [
        { amount: 10, type: bt.PRAY_PT_SAVE_PCT },
        { amount: 10, type: bt.RUNE_PRESERVE },
        { amount: 1, type: bt.PRAY_COST },
        { amount: 10, type: bt.AMMO_PRESERVE },
      ],
    },
    {
      name: "Frozen Lake Crossing",
      bonuses: [
        { amount: 3, type: bt.GLOBAL_DMG_PCT },
        { amount: 10, type: bt.AUTO_EAT_EFF },
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
        { amount: 10, type: bt.GLOBAL_PRESERVE_PCT },
        { amount: 10, type: bt.RUNE_PRESERVE },
        { amount: 10, type: bt.PRAY_PT_SAVE_PCT },
        { amount: 5, type: bt.AMMO_PRESERVE },
        { amount: 10, type: bt.SLAY_COIN_PCT },
      ],
    },
    {
      name: "Boulder Move",
      bonuses: [{ amount: 8, type: bt.GLOBAL_MAST_PCT }],
    },
    {
      name: "Dragon Fight",
      bonuses: [
        { amount: -16, type: bt.AUTO_EAT_EFF },
        { amount: 0.3, type: bt.MONSTER_RESPAWN_TIME },
      ],
    },
    {
      name: "Ocean Rafting",
      bonuses: [
        { amount: 5, type: bt.GLOBAL_DMG_PCT },
        { amount: 5, type: bt.AUTO_EAT_EFF },
      ],
    },
  ],
  [
    {
      name: "Pillar of Combat",
      bonuses: [
        { amount: 10, type: bt.MAG_EV_PCT },
        { amount: 10, type: bt.RAN_EV_PCT },
        { amount: 0.2, type: bt.MONSTER_RESPAWN_TIME },
        { amount: 10, type: bt.MEL_EV_PCT },
        { amount: 5, type: bt.MIN_HIT_PCT },
        { amount: 5, type: bt.SLAY_AREA_NEG_PCT },
        { amount: 50, type: bt.HP_REGEN },
      ],
    },
    {
      name: "Pillar of Skilling",
      bonuses: [
        { amount: 2, type: bt.GLOBAL_MAST_PCT },
        { amount: 3, type: bt.GLOBAL_PRESERVE_PCT },
        { amount: 3, type: bt.GLOBAL_DOUBLE_PCT },
        { amount: 10, type: bt.FARM_YIELD },
      ],
    },
    {
      name: "Pillar of Generosity",
      bonuses: [
        { amount: 5, type: bt.SUMM_CHARGE_PRESERVE_PCT },
        { amount: 10, type: bt.BANK_SPACES },
        { amount: 5, type: bt.POTION_CHARGES },
        { amount: 10, type: bt.POTION_PRESERVE_PCT },
        { amount: 10, type: bt.GLOBAL_GP_PCT },
      ],
    },
  ],
];
