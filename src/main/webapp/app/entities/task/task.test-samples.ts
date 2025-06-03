import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 9181,
};

export const sampleWithPartialData: ITask = {
  id: 24321,
  title: 'ride whenever',
};

export const sampleWithFullData: ITask = {
  id: 13396,
  title: 'where wherever',
  description: 'but than',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
