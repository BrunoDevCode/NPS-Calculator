import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    // Pega o objeto defaultOptions e sobre-escreve a var database
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test'
        ? './src/database/testing.sqlite'
        : defaultOptions.database,
    })
  );
}