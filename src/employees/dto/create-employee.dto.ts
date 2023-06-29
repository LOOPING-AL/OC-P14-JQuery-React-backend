import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly dateOfBirth: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly startDate: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly street: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly zipCode: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly department: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly state: string;
}
