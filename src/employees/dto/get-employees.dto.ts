import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { Sort } from 'src/types';

export class GetEmployeeDto {
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty()
  readonly numberOfElementToShow;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty()
  readonly page;

  @IsString()
  @MaxLength(254)
  @ApiProperty()
  readonly search;

  @ApiProperty()
  readonly sort: Sort;
}
