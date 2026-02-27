/** 在未安装 async-validator 时提供最小类型声明，安装后以包内类型为准 */
declare module 'async-validator' {
  export interface ValidateError {
    message?: string
    field?: string
  }
  export interface RuleItem {
    type?: string
    required?: boolean
    message?: string
    min?: number
    max?: number
    validator?: (rule: RuleItem, value: unknown, callback: (err?: string | Error) => void) => void | Promise<void>
    asyncValidator?: (rule: RuleItem, value: unknown, callback: (err?: string | Error) => void) => void | Promise<void>
    [key: string]: unknown
  }
  export default class Schema {
    constructor(descriptor: Record<string, RuleItem[]>)
    validate(values: Record<string, unknown>): Promise<void>
  }
}
