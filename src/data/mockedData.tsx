export interface MockedDataProps {
    date: string; 
    start: string; 
    end: string; 
    ist: number; 
    soll: number; 
    difference: number; 
}

export const mockedData: MockedDataProps[] = [
  {
    date: '01.02.2023', 
    start: '08:00', 
    end: '16:00',
    ist: 8, 
    soll: 8, 
    difference: 0, 
  }, 
  {
    date: '02.02.2023', 
    start: '07:00', 
    end: '16:00',
    ist: 9, 
    soll: 8, 
    difference: 1, 
  }, 
  {
    date: '03.02.2023', 
    start: '08:00', 
    end: '16:00',
    ist: 8, 
    soll: 8, 
    difference: 0, 
  }, 
  {
    date: '04.02.2023', 
    start: '08:00', 
    end: '16:00',
    ist: 8, 
    soll: 8, 
    difference: 0, 
  }, 
];