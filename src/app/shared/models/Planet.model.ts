export class PlanetModel {
  public name: string;
  public rotation_period: string;
  public orbital_period: string;
  public diameter: string;
  public climate: string;
  public gravity: string;
  public terrain: string;
  public surface_water: string;
  public population: string;
  public residents: [];
  public films: [];
  public created: string;
  public edited: string;
  public url: string;

  //
  public static compareFn(a: PlanetModel, b: PlanetModel): number {
    if (a?.name < b?.name) return -1;
    else if (a?.name > b?.name) return 1;
    else if (a?.name == b?.name) return 0;
  }
}
