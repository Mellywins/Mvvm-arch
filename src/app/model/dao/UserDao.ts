import {User} from "../entity/User";
import {Vaccine} from "../entity/Vaccine";

export class UserDao {
  private static users: User[] = [
    new User('129238127501', 'Oussema', 'Zouaghi', '131212092', '12/06/1999', [
      new Vaccine('J&J', '19/05/2021'),
      new Vaccine('J&J', '31/12/2021'),
    ])
  ];

  public static getUserByNumInscription(numInscription: string): User | undefined {
    return UserDao.users.find((user)=>user.numInscription==numInscription);
  }
}
