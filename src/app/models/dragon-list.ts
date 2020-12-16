import { Dragon } from './spacex.models';

export interface Result{
    id: string;
    url: string;
    dragon: Dragon;
}

export interface DragonList{
    count?: number;
    next?: number;
    previous?: any;
    results?: Result[];
}