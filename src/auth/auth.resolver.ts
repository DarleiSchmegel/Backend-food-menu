import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { LoginUserResponse } from './dto/login-user-response';
import { GqlAuthGuard } from './gql-auth.guard';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginUserResponse)
  @UseGuards(GqlAuthGuard)
  UserLogin(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.signIn(context.user);
  }

  @Mutation(() => LoginUserResponse)
  UserSignup(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.authService.signup(createUserInput);
  }
}
