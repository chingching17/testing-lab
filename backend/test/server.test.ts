import { describe, expect, test } from 'vitest'
import { serverOf } from '../src/server'
import * as TodoRepo from '../src/repo/todo'
import { Todo, TodoBody } from '../src/types/todo'

describe('Server Testing', () => {
  const server = serverOf()

  test('Create a new input, When send a Get request to /api/v1/todos, It should tell it is written into database', async () => {
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
