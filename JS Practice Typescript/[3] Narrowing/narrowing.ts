function printElement(element: number | string): void {
  if (typeof element === 'number') {
    console.log(element);
  } else {
    console.log(element.length);
  }
}
