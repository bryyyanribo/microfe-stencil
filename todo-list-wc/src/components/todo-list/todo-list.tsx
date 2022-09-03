import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {
  /**
   * Define pageTitle of component
   */
  @Prop() pageTitle: string;

  /**
   * Define todoList array
   */
  @State() todoList: Array<string> = [];

  /**
   * Define value input
   */
  @State() value: string = '';

  private handleOnSubmit = (e: Event): void => {
    e.preventDefault();
    if (this.value.trim()) {
      this.todoList = [...this.todoList, this.value];
      this.value = '';
    }
  };

  private handleChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
  };

  private handleClick = (index: number) => (): void => {
    const newtodoList = this.todoList.filter((_, todoIdx) => todoIdx !== index);
    this.todoList = [...newtodoList];
  };

  render() {
    const { pageTitle, todoList, handleOnSubmit, value, handleChange, handleClick } = this;
    return (
      <Host>
        <div class="container">
          <h1>{pageTitle}</h1>
          <form onSubmit={handleOnSubmit}>
            <input type="text" name="todo" value={value} onInput={handleChange} />
            <button class="button-add" type="submit">
              Add
            </button>
          </form>
          <ul>
            {todoList.map((todo, index) => (
              <li>
                <p>{todo}</p>
                <button class="button-remove" type="click" onClick={handleClick(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Host>
    );
  }
}
