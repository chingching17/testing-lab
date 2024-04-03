import { describe, expect, test } from 'vitest'
import { serverOf } from '../src/server'
import * as TodoRepo from '../src/repo/todo'
import { Todo, TodoBody } from '../src/types/todo'

describe('Server Testing', () => {
  const server = serverOf()

  test('Create a new input, Use findAllTodos to get items, It should tell createTodo and findAllTodos are correct', async () => {
    const newBody:Todo = {
      id: "660bf6473f7e41a7451a5105",
      name: "difjo",
      description: "jofeioj",
      status: false
    };

    const createdTodo = TodoRepo.createTodo(newBody);
    const returnTodo = TodoRepo.findAllTodos()
    expect(returnTodo).toMatchObject(createdTodo)
  })

  test('Create a new input, Use deleteTodoById to delete items, It should tell createTodo and deleteTodoById are correct', async () => {
    const newBody:Todo = {
      id: "660bf6473f7e41a7451a5105",
      name: "difjo",
      description: "jofeioj",
      status: false
    };

    const createdTodo = TodoRepo.createTodo(newBody);
    const delTodo = TodoRepo.deleteTodoById("660bf6473f7e41a7451a5105")
    expect(createdTodo).toMatchObject(delTodo)
  })

  test('When send a GET request to /ping, it should return status code 200', async () => {
    // act: send a GET request to /ping
    const response = await server.inject({
      method: 'GET',
      url: '/ping'
    })

    // assert: response should be status code 200
    expect(response.statusCode).toBe(200)
  })
})
