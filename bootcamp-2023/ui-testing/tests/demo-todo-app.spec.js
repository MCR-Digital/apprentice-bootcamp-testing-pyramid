// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create 1st todo.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_ITEMS[0]
    ]);

    // Create 2nd todo.
    await newTodo.fill(TODO_ITEMS[1]);
    await newTodo.press('Enter');

    // Make sure the list now has two todo items.
    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1]
    ]);

    await checkNumberOfTodosInLocalStorage(page, 2);
  });

  test('should clear text input field when an item is added', async ({ page }) => {
    test.fail()
  });

  test('should append new items to the bottom of the list', async ({ page }) => {
    test.fail()
  });
});

test.describe('Mark all as completed', () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test.afterEach(async ({ page }) => {
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should allow me to mark all items as completed', async ({ page }) => {
    test.fail()
  });

  test('should allow me to clear the complete state of all items', async ({ page }) => {
    test.fail()
  });

  test('complete all checkbox should update state when items are completed / cleared', async ({ page }) => {
    test.fail()
  });
});

test.describe('Item', () => {

  test('should allow me to mark items as complete', async ({ page }) => {
    test.fail()
  });

  test('should allow me to un-mark items as complete', async ({ page }) => {
    test.fail()
  });

  test('should allow me to edit an item', async ({ page }) => {
    test.fail()
  });
});

test.describe('Editing', () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should hide other controls when editing', async ({ page }) => {
    test.fail()
  });

  test('should save edits on blur', async ({ page }) => {
    test.fail()
  });

  test('should trim entered text', async ({ page }) => {
    test.fail()
  });

  test('should remove the item if an empty text string was entered', async ({ page }) => {
    test.fail()
  });

  test('should cancel edits on escape', async ({ page }) => {
    test.fail()
  });
});

test.describe('Counter', () => {
  test('should display the current number of todo items', async ({ page }) => {
    test.fail()
  });
});

test.describe('Clear completed button', () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
  });

  test('should display the correct text', async ({ page }) => {
    test.fail()
  });

  test('should remove completed items when clicked', async ({ page }) => {
    test.fail()
  });

  test('should be hidden when there are no items that are completed', async ({ page }) => {
    test.fail()
  });
});



async function createDefaultTodos(page) {
  // create a new todo locator
  const newTodo = page.getByPlaceholder('What needs to be done?');

  for (const item of TODO_ITEMS) {
    await newTodo.fill(item);
    await newTodo.press('Enter');
  }
}

/**
 * @param {import('@playwright/test').Page} page
 * @param {number} expected
 */
 async function checkNumberOfTodosInLocalStorage(page, expected) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).length === e;
  }, expected);
}
