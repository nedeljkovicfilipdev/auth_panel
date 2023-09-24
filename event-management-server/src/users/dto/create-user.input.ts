import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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
