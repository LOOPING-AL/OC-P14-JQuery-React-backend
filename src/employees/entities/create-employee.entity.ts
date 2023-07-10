import { ApiProperty } from '@nestjs/swagger';

export class NewEmployee {
  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly dateOfBirth: string;

  @ApiProperty()
  readonly startDate: string;

  @ApiProperty()
  readonly street: string;

  @ApiProperty()
  readonly city: string;

  @ApiProperty()
  readonly zipCode: string;

  @ApiProperty()
  readonly department: string;

  @ApiProperty()
  readonly state: string;
}

class BodyCreate {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: () => NewEmployee })
  newEmployee: NewEmployee;
}

export class CreateEmployee {
  @ApiProperty({ type: () => BodyCreate })
  body: BodyCreate;
}
