import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field(() => String, { description: 'Email of the inscribed' })
  email: string;

  @Field(() => String, { description: 'password of the user' })
  password: string;
}
