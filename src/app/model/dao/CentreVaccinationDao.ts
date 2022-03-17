import {CentreVaccination} from "../entity/CentreVaccination";

export class CentreVaccinationDao{
  private static centreVaccinations: CentreVaccination[] = [
    new CentreVaccination('Municipalité Hedi Chaker', '71209154', 'Tunis', 'Tunis'),
    new CentreVaccination('College Les Elites', '71898150', 'Ariana', 'Ariana'),
    new CentreVaccination('Palais des congrés', '71632150', 'Avenue Mohamed V', 'Tunis'),
    new CentreVaccination('Ecole primaire Essada', '74842153', 'Cite Essada', 'Tunis'),
  ];

  static getByFilters(filters?: {governorate?: string, name?: string}): CentreVaccination[]{
    if(filters?.governorate && filters?.name){
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination)=>
          centreVaccination.governorate === filters?.governorate &&
          centreVaccination.name.includes(filters.name as string)
      );
    } else if (filters?.name){
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination)=> centreVaccination.name.includes(filters.name as string)
      );
    } else if (filters?.governorate) {
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination) => centreVaccination.governorate === filters.governorate
      );
    }
    return CentreVaccinationDao.centreVaccinations;
  }

}
