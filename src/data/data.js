// Bonus types
export const bt = {
  THV_MAST_PCT: "% Thieving Mastery XP",
  FIRE_INT: "% Firemaking Interval",
  AGL_XP_PCT: "% Agility Skill XP",
  AGL_MAST_PCT: "% Agility Mastery XP",
  MEL_EV_PCT: "% Melee Evasion",
  MEL_MAX_HIT: "% Melee Max Hit",
  MIN_NODE_HP: " Mining Node HP",
  PRESERVE_PCT: "% Chance to Preserve Resources in Skills",
  THV_MAST_PCT: "% Thieving Mastery XP",
  GLOBAL_XP_PCT: "% Global Skill XP",
  WCT_INT_PCT: "% Woodcutting Interval",
  FIRE_XP_PCT: "% Firemaking Skill XP",
  DMG_PCT: "% Damage To All Monsters",
  COOK_XP_PCT: "% Cooking Skill XP",
  COOK_SUCCESS_PCT: "% chance to successfully Cook an item",
  FOOD_HEAL_PCT: "% Food Healing Value",
  THV_GP_PCT: "% GP From Thieving",
  HERB_PRESERVE_PCT: "% Chance to Preserve Resources in Herblore",
  HERB_SKILL_PCT: "% Herblore Skill XP",
  HERB_MAST_PCT: "% Herblore Mastery XP",
  FARM_YIELD: "% Farming Yield",
  DR_PCT: "% Damage Reduction",
  HP_MAX: " Maximum Hitpoints",
  MEL_ACC_PCT: "% Melee Accuracy Bonus",
  RUNE_PRESERVE: "% Rune Preservation",
  AMMO_PRESERVE: "% Ammo Preservation",
  FISH_DBL_PCT: "% Chance to Double Items in Fishing",
  WCT_DBL_PCT: "% Chance to Double Items in Woodcutting",
  MINE_DBL_PCT: "% Chance to Double Items in Mining",
  THV_DBL_PCT: "% Chance to Double Items in Thieving",
  SLAY_LEN: "% Slayer Task Length/Qty",
  SLAY_SKILL_PCT: "% Slayer Skill XP",
  SLAY_AREA_NEG_PCT: "% Flat Slayer Area Effect Negation",
  SLAY_DMG_PCT: "% Damage To Slayer Tasks",
  SLAY_COIN_PCT: "% Slayer Coins",
  RAN_ACC_PCT: "% Ranged Accuracy Bonus",
  MAG_ACC_PCT: "% Magic Accuracy Bonus",
  PRAY_COST: " Prayer Point Cost for Prayers",
  AGL_GP_PCT: "% GP From Agility",
  AGL_INT_PCT: "% Agility Interval",
  GLOBAL_MAST_PCT: "% Global Mastery XP",
  THV_INT: "s Thieving Interval",
  THV_SKILL_PCT: "% Thieving Skill XP",
  STEALTH: " Stealth while Thieving",
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
      bonuses: [{ amount: 4, type: bt.FIRE_INT }],
    },
    {
      name: "Balance Beam",
      bonuses: [{ amount: 2, type: bt.AGL_XP_PCT }],
    },
  ],
  [
    {
      name: "Balance Seesaw	",
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
        { amount: 10, type: bt.MIN_NODE_HP },
        { amount: 3, type: bt.PRESERVE_PCT },
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
        { amount: -6, type: bt.WCT_INT_PCT },
        { amount: 3, type: bt.FIRE_XP_PCT },
      ],
    },
    {
      name: "Burning Coals",
      bonuses: [
        { amount: -6, type: bt.DMG_PCT },
        { amount: 3, type: bt.COOK_XP_PCT },
        { amount: 5, type: bt.COOK_SUCCESS_PCT },
      ],
    },
  ],
];
