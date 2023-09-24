import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field({ nullable: true})
  id: number;

  @Field({ nullable: true})
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string

  @Field({ nullable: true })
  username?: string

  @Field({ nullable: true })
  password?: string
}