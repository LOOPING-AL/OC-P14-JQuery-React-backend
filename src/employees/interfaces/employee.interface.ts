import { Document } from 'mongoose';

interface IEmployee extends Document {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  zipCode: string;
  department: string;
  state: string;
}

export default IEmployee;
