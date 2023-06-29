import { Document } from 'mongoose';

interface IEmployee extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: string;
  readonly startDate: string;
  readonly street: string;
  readonly city: string;
  readonly zipCode: string;
  readonly department: string;
  readonly state: string;
}

export default IEmployee;
