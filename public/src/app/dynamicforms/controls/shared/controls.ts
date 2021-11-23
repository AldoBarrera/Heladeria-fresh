export class Controls<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    readonly: boolean;
    order: number;
    controlType: string;
  
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        readonly?: boolean,
        order?: number,
        controlType?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.readonly = options.readonly;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
    }

    modelChanged(event, controlForm) {
    }

    reset() {}
  }
  