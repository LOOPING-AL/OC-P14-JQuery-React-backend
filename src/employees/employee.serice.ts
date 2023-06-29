import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Model } from 'mongoose';
import IEmployee from './interfaces/employee.interface';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private employeeModel: Model<IEmployee>,
  ) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<IEmployee> {
    const newEmployee = await new this.employeeModel(createEmployeeDto);
    return newEmployee.save();
  }

  async getAllEmployees(): Promise<IEmployee[]> {
    const employeeData = await this.employeeModel.find();
    if (!employeeData || employeeData.length == 0) {
      throw new NotFoundException('Employees data not found!');
    }
    return employeeData;
  }
}
