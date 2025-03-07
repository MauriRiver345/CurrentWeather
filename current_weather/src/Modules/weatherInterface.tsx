export interface Weather {
    location: {    
      localtime_epoch: number;
      localtime: string;
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      };
    };
    forecast: {
      forecastday: {
        day: {
          maxtemp_c: number;
          mintemp_c: number;
        };
      }[];
    }
  }