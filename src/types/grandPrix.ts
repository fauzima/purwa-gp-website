export interface IGP {
  fields: {
    title: string;
    slug: string;
    round: number;
    fp1Start: string;
    fp1End: string;
    fp2Start: string;
    fp2End: string;
    fp3Start: string;
    fp3End: string;
    qualiStart: string;
    qualiEnd: string;
    raceStart: string;
    raceEnd: string;
    firstGp: string;
    laps: string;
    circuitLength: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    circuitLayout: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
