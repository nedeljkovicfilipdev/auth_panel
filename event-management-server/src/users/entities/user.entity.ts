import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({nullable: true})
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
