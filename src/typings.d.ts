interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

type Canceler = import("axios").Canceler;

interface Promise {
  [key: string]: Canceler;
}
