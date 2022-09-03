import { NgModule } from '@angular/core';

import { defineCustomElements } from '@todo-list-wc/loader';

import { TodoList, MyComponent } from './stencil-generated/proxies';

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [TodoList, MyComponent],
  declarations: [TodoList, MyComponent],
})
export class WebComponentsModule {}
