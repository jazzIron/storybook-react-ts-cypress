export {};
/**
 * 단순한 test용 페이지
 */

type EventNames = 'click' | 'doubleClick' | 'mouseDown';
type CapitalizedEventNames = Capitalize<EventNames>;
type HandlerNames = `on${CapitalizedEventNames}`;

type Handlers = {
  [H in HandlerNames]: (event: Event) => void;
};

type MyElement = Handlers & {
  addEventListener: (eventName: EventNames, handler: (event: Event) => void) => void;
};

type PromiseType<T> = T extends Promise<infer U> ? U : never;

//type A = number
type A = PromiseType<Promise<number>>;

//type B = string | boolean
type B = PromiseType<Promise<string | boolean>>;

//type C = never
type C = PromiseType<number>;
