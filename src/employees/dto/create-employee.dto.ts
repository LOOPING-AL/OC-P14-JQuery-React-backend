import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly dateOfBirth: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly startDate: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly street: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly city: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly zipCode: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly department: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty()
  readonly state: string;
}
