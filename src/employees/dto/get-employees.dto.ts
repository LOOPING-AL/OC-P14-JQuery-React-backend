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
  readonly numberOfElementToShow;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  readonly page;

  @IsString()
  @MaxLength(254)
  readonly search;

  readonly sort: Sort;
}
