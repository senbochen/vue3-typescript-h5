/*
 * @Author: your name
 * @Date: 2021-07-01 14:13:59
 * @LastEditTime: 2021-07-08 17:00:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /kfang-task-platform/src/types/function-type.d.ts
 */
declare namespace FuncLib {
  // createElement 函数类型
  type createElementType = (element: any, options?: any, extend?: createElementType[]) => any

  // 空函数类型
  type defaultVoidFunctionType = () => void

  type resolveType = (value?: unknown) => void

  type rejectType = (reason?: any) => void

  // el-form 校验的callback的回调函数类型
  interface ValidateFieldCallback {
    (errorMessage?: string | ObjectType): void
  }

  // renderFunction 的类型
  interface RenderFunction {
    (createElement: createElementType): any
  }
}
