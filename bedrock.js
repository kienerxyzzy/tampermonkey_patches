//Tampermonkey patch for GTCEu to add bedrock veins
//autogen with python
const veins = [
  {
    layer: "endstone",
    name: "bauxite_vein_end",
    minerals: [
      { mat: GTMaterials.Bauxite, weight: 2 },
      { mat: GTMaterials.Ilmenite, weight: 1 },
      { mat: GTMaterials.Aluminium, weight: 1 },
    ],
  },
  {
    layer: "endstone",
    name: "magnetite_vein_end",
    minerals: [
      { mat: GTMaterials.Magnetite, weight: 3 },
      { mat: GTMaterials.VanadiumMagnetite, weight: 2 },
      { mat: GTMaterials.Chromite, weight: 2 },
      { mat: GTMaterials.Gold, weight: 1 },
    ],
  },
  {
    layer: "endstone",
    name: "naquadah_vein",
    minerals: [
      { mat: GTMaterials.Naquadah, weight: 7 },
      { mat: GTMaterials.Plutonium239, weight: 1 },
    ],
  },
  {
    layer: "endstone",
    name: "pitchblende_vein_end",
    minerals: [
      { mat: GTMaterials.Pitchblende, weight: 7 },
      { mat: GTMaterials.Uraninite, weight: 1 },
    ],
  },
  {
    layer: "endstone",
    name: "scheelite_vein",
    minerals: [
      { mat: GTMaterials.Scheelite, weight: 3 },
      { mat: GTMaterials.Tungstate, weight: 2 },
      { mat: GTMaterials.Lithium, weight: 1 },
    ],
  },
  {
    layer: "endstone",
    name: "sheldonite_vein",
    minerals: [
      { mat: GTMaterials.Bornite, weight: 3 },
      { mat: GTMaterials.Cooperite, weight: 2 },
      { mat: GTMaterials.Platinum, weight: 2 },
      { mat: GTMaterials.Palladium, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "banded_iron_vein",
    minerals: [
      { mat: GTMaterials.Goethite, weight: 3 },
      { mat: GTMaterials.YellowLimonite, weight: 2 },
      { mat: GTMaterials.Hematite, weight: 2 },
      { mat: GTMaterials.Gold, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "beryllium_vein",
    minerals: [
      { mat: GTMaterials.Beryllium, weight: 3 },
      { mat: GTMaterials.Emerald, weight: 2 },
      { mat: GTMaterials.Thorium, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "certus_quartz",
    minerals: [
      { mat: GTMaterials.Quartzite, weight: 3 },
      { mat: GTMaterials.CertusQuartz, weight: 2 },
      { mat: GTMaterials.Barite, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "manganese_vein",
    minerals: [
      { mat: GTMaterials.Grossular, weight: 3 },
      { mat: GTMaterials.Pyrolusite, weight: 2 },
      { mat: GTMaterials.Tantalite, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "molybdenum_vein",
    minerals: [
      { mat: GTMaterials.Wulfenite, weight: 3 },
      { mat: GTMaterials.Molybdenite, weight: 2 },
      { mat: GTMaterials.Molybdenum, weight: 1 },
      { mat: GTMaterials.Powellite, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "monazite_vein",
    minerals: [
      { mat: GTMaterials.Bastnasite, weight: 3 },
      { mat: GTMaterials.Monazite, weight: 1 },
      { mat: GTMaterials.Neodymium, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "nether_quartz_vein",
    minerals: [
      { mat: GTMaterials.NetherQuartz, weight: 3 },
      { mat: GTMaterials.Quartzite, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "redstone_vein",
    minerals: [
      { mat: GTMaterials.Redstone, weight: 3 },
      { mat: GTMaterials.Ruby, weight: 2 },
      { mat: GTMaterials.Cinnabar, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "saltpeter_vein",
    minerals: [
      { mat: GTMaterials.Saltpeter, weight: 3 },
      { mat: GTMaterials.Diatomite, weight: 2 },
      { mat: GTMaterials.Electrotine, weight: 2 },
      { mat: GTMaterials.Alunite, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "sulfur_vein",
    minerals: [
      { mat: GTMaterials.Sulfur, weight: 3 },
      { mat: GTMaterials.Pyrite, weight: 2 },
      { mat: GTMaterials.Sphalerite, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "tetrahedrite_vein",
    minerals: [
      { mat: GTMaterials.Tetrahedrite, weight: 4 },
      { mat: GTMaterials.Copper, weight: 2 },
      { mat: GTMaterials.Stibnite, weight: 1 },
    ],
  },
  {
    layer: "netherrack",
    name: "topaz_vein",
    minerals: [
      { mat: GTMaterials.BlueTopaz, weight: 3 },
      { mat: GTMaterials.Topaz, weight: 2 },
      { mat: GTMaterials.Chalcocite, weight: 2 },
      { mat: GTMaterials.Bornite, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "apatite_vein",
    minerals: [
      { mat: GTMaterials.Apatite, weight: 3 },
      { mat: GTMaterials.TricalciumPhosphate, weight: 2 },
      { mat: GTMaterials.Pyrochlore, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "cassiterite_vein",
    minerals: [
      { mat: GTMaterials.Tin, weight: 4 },
      { mat: GTMaterials.Cassiterite, weight: 2 },
    ],
  },
  {
    layer: "stone",
    name: "coal_vein",
    minerals: [{ mat: GTMaterials.Coal, weight: 3 }],
  },
  {
    layer: "stone",
    name: "copper_tin_vein",
    minerals: [
      { mat: GTMaterials.Chalcopyrite, weight: 5 },
      { mat: GTMaterials.Zeolite, weight: 2 },
      { mat: GTMaterials.Cassiterite, weight: 2 },
      { mat: GTMaterials.Realgar, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "galena_vein",
    minerals: [
      { mat: GTMaterials.Galena, weight: 3 },
      { mat: GTMaterials.Silver, weight: 2 },
      { mat: GTMaterials.Lead, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "garnet_tin_vein",
    minerals: [
      { mat: GTMaterials.CassiteriteSand, weight: 3 },
      { mat: GTMaterials.GarnetSand, weight: 2 },
      { mat: GTMaterials.Asbestos, weight: 2 },
      { mat: GTMaterials.Diatomite, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "garnet_vein",
    minerals: [
      { mat: GTMaterials.GarnetRed, weight: 3 },
      { mat: GTMaterials.GarnetYellow, weight: 2 },
      { mat: GTMaterials.Amethyst, weight: 2 },
      { mat: GTMaterials.Opal, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "iron_vein",
    minerals: [
      { mat: GTMaterials.Goethite, weight: 5 },
      { mat: GTMaterials.YellowLimonite, weight: 2 },
      { mat: GTMaterials.Hematite, weight: 2 },
      { mat: GTMaterials.Malachite, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "lubricant_vein",
    minerals: [
      { mat: GTMaterials.Soapstone, weight: 3 },
      { mat: GTMaterials.Talc, weight: 2 },
      { mat: GTMaterials.GlauconiteSand, weight: 2 },
      { mat: GTMaterials.Pentlandite, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "magnetite_vein_ow",
    minerals: [
      { mat: GTMaterials.Magnetite, weight: 3 },
      { mat: GTMaterials.VanadiumMagnetite, weight: 2 },
      { mat: GTMaterials.Gold, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "mineral_sand_vein",
    minerals: [
      { mat: GTMaterials.BasalticMineralSand, weight: 3 },
      { mat: GTMaterials.GraniticMineralSand, weight: 2 },
      { mat: GTMaterials.FullersEarth, weight: 2 },
      { mat: GTMaterials.Gypsum, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "nickel_vein",
    minerals: [
      { mat: GTMaterials.Garnierite, weight: 3 },
      { mat: GTMaterials.Nickel, weight: 2 },
      { mat: GTMaterials.Cobaltite, weight: 2 },
      { mat: GTMaterials.Pentlandite, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "salts_vein",
    minerals: [
      { mat: GTMaterials.RockSalt, weight: 3 },
      { mat: GTMaterials.Salt, weight: 2 },
      { mat: GTMaterials.Lepidolite, weight: 1 },
      { mat: GTMaterials.Spodumene, weight: 1 },
    ],
  },
  {
    layer: "stone",
    name: "oilsands_vein",
    minerals: [{ mat: GTMaterials.Oilsands, weight: 7 }],
  },
  {
    layer: "deepslate",
    name: "copper_vein",
    minerals: [
      { mat: GTMaterials.Chalcopyrite, weight: 5 },
      { mat: GTMaterials.Iron, weight: 2 },
      { mat: GTMaterials.Pyrite, weight: 2 },
      { mat: GTMaterials.Copper, weight: 2 },
    ],
  },
  {
    layer: "deepslate",
    name: "diamond_vein",
    minerals: [
      { mat: GTMaterials.Graphite, weight: 7 },
      { mat: GTMaterials.Diamond, weight: 3 },
      { mat: GTMaterials.Coal, weight: 1 },
    ],
  },
  {
    layer: "deepslate",
    name: "lapis_vein",
    minerals: [
      { mat: GTMaterials.Lazurite, weight: 3 },
      { mat: GTMaterials.Sodalite, weight: 2 },
      { mat: GTMaterials.Lapis, weight: 2 },
      { mat: GTMaterials.Calcite, weight: 1 },
    ],
  },
  {
    layer: "deepslate",
    name: "manganese_vein_ow",
    minerals: [
      { mat: GTMaterials.Grossular, weight: 3 },
      { mat: GTMaterials.Spessartine, weight: 2 },
      { mat: GTMaterials.Pyrolusite, weight: 2 },
      { mat: GTMaterials.Tantalite, weight: 1 },
    ],
  },
  {
    layer: "deepslate",
    name: "mica_vein",
    minerals: [
      { mat: GTMaterials.Kyanite, weight: 3 },
      { mat: GTMaterials.Mica, weight: 2 },
      { mat: GTMaterials.Bauxite, weight: 2 },
      { mat: GTMaterials.Pollucite, weight: 1 },
    ],
  },
  {
    layer: "deepslate",
    name: "olivine_vein",
    minerals: [
      { mat: GTMaterials.Bentonite, weight: 3 },
      { mat: GTMaterials.Magnesite, weight: 2 },
      { mat: GTMaterials.Olivine, weight: 2 },
      { mat: GTMaterials.GlauconiteSand, weight: 1 },
    ],
  },
  {
    layer: "deepslate",
    name: "redstone_vein_ow",
    minerals: [
      { mat: GTMaterials.Redstone, weight: 3 },
      { mat: GTMaterials.Ruby, weight: 2 },
      { mat: GTMaterials.Cinnabar, weight: 1 },
    ],
  },
  {
    layer: "deepslate",
    name: "sapphire_vein",
    minerals: [
      { mat: GTMaterials.Almandine, weight: 3 },
      { mat: GTMaterials.Pyrope, weight: 2 },
      { mat: GTMaterials.Sapphire, weight: 1 },
      { mat: GTMaterials.GreenSapphire, weight: 1 },
    ],
  },
];
const dim = {
  stone: "overworld",
  deepslate: "overworld",
  netherrack: "the_nether",
  endstone: "the_end",
};
GTCEuServerEvents.bedrockOreVeins((event) => {
  veins.forEach((m) => {
    let dimension = dim[m.layer];
    event.add(`kubejs:${dimension}_${m.name}`, (vein) => {
      vein.weight(100).size(3).yield(1, 2).dimensions(`minecraft:${dimension}`);

      m.minerals.forEach((n) => {
        vein.material(n.mat, n.weight);
        //console.log(n.mat,n.weight)
      });
    });
  });
});
ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .assembler("mv_bdrill")
    .itemInputs([
      "gtceu:mv_machine_hull",
      "4x gtceu:steel_frame",
      "4x #gtceu:circuits/mv",
      "4x gtceu:mv_electric_motor",
      "4x gtceu:mv_sensor",
      "4x gtceu:vanadium_steel_gear",
    ])
    .itemOutputs("gtceu:mv_bedrock_ore_miner")
    .duration(20 * 20)
    .circuit(2)
    .EUt(GTValues.VA[GTValues.MV]);
  event.recipes.gtceu
    .assembler("hv_bdrill")
    .itemInputs([
      "gtceu:ev_machine_hull",
      "4x gtceu:titanium_frame",
      "4x #gtceu:circuits/ev",
      "4x gtceu:ev_electric_motor",
      "4x gtceu:ev_sensor",
      "4x gtceu:tungsten_carbide_gear",
    ])
    .itemOutputs("gtceu:hv_bedrock_ore_miner")
    .duration(20 * 20)
    .circuit(2)
    .EUt(GTValues.VA[GTValues.EV]);
  event.recipes.gtceu
    .assembler("ev_bdrill")
    .itemInputs([
      "gtceu:luv_machine_hull",
      "4x gtceu:tungstensteel_frame",
      "4x #gtceu:circuits/luv",
      "4x gtceu:luv_electric_motor",
      "4x gtceu:luv_sensor",
      "4x gtceu:osmiridium_gear",
    ])
    .itemOutputs("gtceu:ev_bedrock_ore_miner")
    .duration(20 * 20)
    .circuit(2)
    .EUt(GTValues.VA[GTValues.LuV]);
});
