export interface DB<T> {
  create(args: Omit<T, "id">): Promise<T | Error>;
  update(id: string, args: Partial<T>): Promise<T | Error>;
  delete(id: string): Promise<{ id: string } | Error>;
  findById(id: string): Promise<T | Error>;
  findMany(args: Partial<T>): Promise<T[] | Error>;
}
