function processData(data: string[]): number;
function processData(data: number[]): number;
function processData(data: any[]): number;

function processData(data: string[] | number[]): number {
  if (typeof data[0] === 'number') {
    return (data as number[]).reduce((sum, num) => sum + num, 0);
  } else {
    return data.length;
  }
}
