import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.serice';
import { GetEmployeeDto } from './dto/get-employees.dto';
import { sortColumnType } from 'src/tools/utils';
import employeeKey from './tools';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('create')
  async createEmployee(
    @Res() response,
    @Body() createEmployeeDto: CreateEmployeeDto,
  ) {
    try {
      const newEmployee = await this.employeeService.createEmployee(
        createEmployeeDto,
      );
      return response.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        message: 'Employee has been created successfully',
        newEmployee,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Error: Employee not created!',
        error: 'Bad Request',
      });
    }
  }

  @Post('get')
  async getEmployees(@Res() response, @Body() getEmployeeDto: GetEmployeeDto) {
    try {
      const employeeData = await this.employeeService.getAllEmployees();

      const indexOfFirstElementToShow =
        (getEmployeeDto.page - 1) * getEmployeeDto.numberOfElementToShow;
      const indexOfLastElementToShow =
        indexOfFirstElementToShow + getEmployeeDto.numberOfElementToShow;

      const tableUpdate = employeeData
        .filter((item) =>
          employeeKey
            .map((key) => item[key])
            .toString()
            .toLowerCase()
            .includes(getEmployeeDto.search.toString().toLowerCase()),
        )
        .sort((a, b) =>
          sortColumnType(
            a,
            b,
            getEmployeeDto.sort?.column,
            getEmployeeDto.sort?.sortType,
          ),
        );

      const tableToShow = tableUpdate.slice(
        indexOfFirstElementToShow,
        indexOfLastElementToShow,
      );
      const tableUpdateLength = tableUpdate.length;
      const tableTotalLength = employeeData.length;

      return response.status(HttpStatus.OK).json({
        message: 'All employees data found successfully',
        body: { tableToShow, tableUpdateLength, tableTotalLength },
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
