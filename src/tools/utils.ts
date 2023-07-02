import IEmployee from 'src/employees/interfaces/employee.interface';
import { SortType } from 'src/ts/enums';

export const sortColumnType = (
  a: IEmployee,
  b: IEmployee,
  column: string,
  st: SortType,
) => {
  const firstValue = st === SortType.Up ? a[column] : b[column];
  const secondValue = st === SortType.Up ? b[column] : a[column];

  if (firstValue || secondValue) {
    if (!firstValue) return -1;
    if (!secondValue) return 1;
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
      return firstValue - secondValue;
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
      return firstValue.localeCompare(secondValue);
    }
  }
  return 0;
};
