export interface EventC {
    id: number | string;
    date: string | Date | any;
    events: {
      startTime: any;
      endTime: any;
      title: string;
      paid: boolean;
      color: string;
      closed: boolean;
    }[];
  }
  
  