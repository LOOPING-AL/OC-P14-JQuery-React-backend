import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { sortColumnType } from 'src/tools/utils';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { GetEmployeeDto } from './dto/get-employees.dto';
import { EmployeeService } from './employee.serice';
import employeeKey from './tools';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEmployee } from './entities/create-employee.entity';
import { GetEmployees } from './entities/get-employee.entity';

@ApiTags('employees')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiOperation({ summary: 'Create employee' })
  @Post('create')
  @ApiResponse({
    status: 201,
    description: 'Succes: Employee created!',
    type: CreateEmployee,
  })
  @ApiResponse({ status: 400, description: 'Error: Employee not created!' })
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
        message: err.response,
        error: 'Bad Request',
      });
    }
  }

  @ApiOperation({ summary: 'Get employees' })
  @ApiTags('employees')
  @ApiResponse({
    status: 201,
    description: 'Succes: Get employees!',
    type: GetEmployees,
  })
  @ApiResponse({ status: 400, description: 'Error: Employees not found!' })
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
        statusCode: HttpStatus.OK,
        message: 'All employees data found successfully',
        body: { tableToShow, tableUpdateLength, tableTotalLength },
      });
    } catch (err) {
      return response.status(err.status).json({
        statusCode: HttpStatus.OK,
        message: err.response,
        error: 'Bad request',
      });
    }
  }
}
