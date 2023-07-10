import { ApiProperty } from '@nestjs/swagger';
import { NewEmployee } from './create-employee.entity';

class Employees {
  @ApiProperty({ type: () => [NewEmployee] })
  readonly tableToshow: NewEmployee[];

  @ApiProperty()
  readonly tableUpdateLength: number;

  @ApiProperty()
  readonly tableTotalLength: number;
}

class BodyGet {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: () => Employees })
  Employees: Employees;
}

export class GetEmployees {
  @ApiProperty({ type: () => BodyGet })
  body: BodyGet;
}
