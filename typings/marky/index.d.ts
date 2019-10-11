declare module 'marky' {
  export interface Entry {
    entryType: string;
    startTime: number;
    duration: number;
    name: string;
  }


  function mark(name: string): void;
  function stop(name: string): Entry;

  function getEntries(): Entry[];
}
