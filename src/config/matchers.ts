/*
 * @Author: BuXiongYu
 * @Date: 2025-01-27 11:13:53
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2025-01-27 11:25:39
 * @Description: 路径匹配器
 * glob-match matchers
 */
import { ARCO_DESIGN_COMPONENT_NAME } from './index.js';

/**
 * 文件路径
 */
export const lessMatchers = `**/node_modules/${ARCO_DESIGN_COMPONENT_NAME}/**/*.less`;
export const globalLessMatchers = `**/node_modules/${ARCO_DESIGN_COMPONENT_NAME}/{es,lib}/style/index.less`;
export const globalCssMatchers = `**/node_modules/${ARCO_DESIGN_COMPONENT_NAME}/{es,lib}/style/index.css`;
export const esLocalDefaultMatchers = `**/node_modules/${ARCO_DESIGN_COMPONENT_NAME}/es/locale/default.js`;
export const libLocalDefaultMatchers = `**/node_modules/${ARCO_DESIGN_COMPONENT_NAME}/lib/locale/default.js`;
export const componentLessMatchers = (componentName: string) =>
  `**/node_modules/${ARCO_DESIGN_COMPONENT_NAME}/{es,lib}/${componentName}/style/index.less`;
export const componentCssMatchers = (componentName: string) =>
  `**/node_modules/${ARCO_DESIGN_COMPONENT_NAME}/{es,lib}/${componentName}/style/index.css`;
