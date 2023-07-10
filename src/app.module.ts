import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './employees/schemas/employee.schema';
import { EmployeeController } from './employees/employee.controller';
import { EmployeeService } from './employees/employee.serice';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/employees'),
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class AppModule {}
