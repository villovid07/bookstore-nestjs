import { genSalt, hash } from 'bcryptjs';
import { EntityRepository, getConnection, Repository } from 'typeorm';
import { Role } from '../role/role.entity';
import { RoleRepository } from '../role/role.repository';
import { RoleType } from '../role/roletype.enum';
import { UserDetails } from '../user/user.details.entity';
import { User } from '../user/user.entity';
import { SignUpDTO } from './dto';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signup(signupDTO: SignUpDTO) {
    try {
      const { username, email, password } = signupDTO;
      const user = new User();
      user.username = username;
      user.email = email;
      user.password = password;

      const roleRepository: RoleRepository =
        await getConnection().getRepository(Role);

      const defaultRole = await roleRepository.findOne({
        where: {
          name: RoleType.GENERAL,
        },
      });
      user.roles = new Array(defaultRole);
      let details = new UserDetails();
      user.details = details;

      const salt = await genSalt(10);
      user.password = await hash(password, salt);

      await user.save();
    } catch (error) {
      console.log(error);
    }
  }
}
