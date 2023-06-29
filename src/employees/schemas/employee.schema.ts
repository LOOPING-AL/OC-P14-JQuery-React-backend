import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  dateOfBirth: string;

  @Prop()
  startDate: string;

  @Prop()
  street: string;

  @Prop()
  city: string;

  @Prop()
  zipCode: string;

  @Prop()
  department: string;

  @Prop()
  state: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
