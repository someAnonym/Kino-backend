import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { UsersRepository } from './users.repository';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateUserDto } from './dto/create-user.dto';
import {
  UpdateUserUseCase,
  UpdateUserUseCaseSymbol,
} from 'src/domains/ports/in/update-user.use-case';
import {
  UpdateUserPasswordUseCase,
  UpdateUserPasswordUseCaseSymbol,
} from 'src/domains/ports/in/update-user-password.use-case';
import { UserId } from '../decorators/user-id.decorator';
import { UpdateUserCommand } from 'src/domains/ports/in/update-user.command';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPasswordCommand } from 'src/domains/ports/in/update-user-password.command';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@Controller('users')
@ApiBearerAuth()
@ApiTags('Users')
export class UsersController {
  // constructor(private readonly usersRepository: UsersRepository) {}

  // @Get(':id')
  // @UseGuards(JwtAuthGuard)
  // getById(@Param('id') id: ObjectId) {
  //   return this.usersRepository.findById(id.valueOf() as string);
  // }

  // @Post('/create')
  // create(dto: CreateUserDto) {
  //   return this.usersRepository.create(dto);
  // }

  constructor(
    @Inject(UpdateUserUseCaseSymbol)
    private readonly _updateUserUseCase: UpdateUserUseCase,
    @Inject(UpdateUserPasswordUseCaseSymbol)
    private readonly _updateUserPasswordUseCase: UpdateUserPasswordUseCase,
    private readonly usersRepository: UsersRepository,
  ) {}

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getMe(@UserId() id: string) {
    return this.usersRepository.findById(id);
  }

  @Put('/update')
  @UseGuards(JwtAuthGuard)
  async update(@UserId() id: string, @Body() dto: UpdateUserDto) {
    const command = new UpdateUserCommand(
      id,
      dto.email,
      dto.name,
      dto.secondName,
      dto.vk,
      dto.instagram,
      dto.youtube,
      dto.twitter,
      dto.facebook,
      dto.aboutMe,
      dto.avatarImage,
      dto.gender,
      dto.birthday,
      dto.country,
      dto.city,
    );
    const updUser = await this._updateUserUseCase.updateUser(command);
    return await this.usersRepository.updateUser(updUser);
    // return (await this._updateUserUseCase.updateUser(command)).getUserData();
  }

  @Put('/update/password')
  @UseGuards(JwtAuthGuard)
  async updatePassword(
    @UserId() id: string,
    @Body() dto: UpdateUserPasswordDto,
  ) {
    const command = new UpdateUserPasswordCommand(id, dto.password);
    const updUser = await this._updateUserPasswordUseCase.updateUserPassword(
      command,
    );
    return this.usersRepository.updateUser(updUser);
  }
}
