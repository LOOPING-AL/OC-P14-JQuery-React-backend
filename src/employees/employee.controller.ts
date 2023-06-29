import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.serice';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
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

  @Get()
  async getEmployees(@Res() response) {
    try {
      const employeeData = await this.employeeService.getAllEmployees();
      return response.status(HttpStatus.OK).json({
        message: 'All employees data found successfully',
        employeeData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
