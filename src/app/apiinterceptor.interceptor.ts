import { HttpInterceptorFn } from '@angular/common/http';

export const aPIInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
