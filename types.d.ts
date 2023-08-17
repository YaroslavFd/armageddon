interface AsteroidsResponce {
  links: AsteroidsResponceLinks;
  page: Page;
  near_earth_objects: NearEarthObject[];
}
interface AsteroidsResponceLinks {
  next: string;
  self: string;
}
interface NearEarthObject {
  links: NearEarthObjectLinks;
  id: string;
  neo_reference_id: string;
  name: string;
  name_limited: string;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachDatum[];
  orbital_data: OrbitalData;
  is_sentry_object: boolean;
}
interface CloseApproachDatum {
  close_approach_date: Date;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: RelativeVelocity;
  miss_distance: MissDistance;
  orbiting_body: OrbitingBody;
}
interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}
enum OrbitingBody {
  Earth = 'Earth',
  Juptr = 'Juptr',
  Mars = 'Mars',
  Merc = 'Merc',
  Venus = 'Venus'
}
interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}
interface EstimatedDiameter {
  kilometers: Feet;
  meters: Feet;
  miles: Feet;
  feet: Feet;
}
interface Feet {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}
interface NearEarthObjectLinks {
  self: string;
}
interface OrbitalData {
  orbit_id: string;
  orbit_determination_date: Date;
  first_observation_date: Date;
  last_observation_date: Date;
  data_arc_in_days: number;
  observations_used: number;
  orbit_uncertainty: string;
  minimum_orbit_intersection: string;
  jupiter_tisserand_invariant: string;
  epoch_osculation: string;
  eccentricity: string;
  semi_major_axis: string;
  inclination: string;
  ascending_node_longitude: string;
  orbital_period: string;
  perihelion_distance: string;
  perihelion_argument: string;
  aphelion_distance: string;
  perihelion_time: string;
  mean_anomaly: string;
  mean_motion: string;
  equinox: Equinox;
  orbit_class: OrbitClass;
}
enum Equinox {
  J2000 = 'J2000'
}
interface OrbitClass {
  orbit_class_type: OrbitClassType;
  orbit_class_description: string;
  orbit_class_range: OrbitClassRange;
}
enum OrbitClassRange {
  ASemiMajorAxis10AUQPerihelion1017AU = 'a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU',
  The1017AUQPerihelion13AU = '1.017 AU < q (perihelion) < 1.3 AU'
}
enum OrbitClassType {
  Amo = 'AMO',
  Apo = 'APO'
}
interface Page {
  size: number;
  total_elements: number;
  total_pages: number;
  number: number;
}
