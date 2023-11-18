import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (product: IProduct): Promise<IProduct | null> => {
  const result = await Product.create(product);
  return result;
};
const getProduct = async (): Promise<IProduct[] | null> => {
  const result = await Product.find({});
  return result;
};
const getProductById = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  return result;
};

export const ProductService = {
  createProduct,
  getProduct,
  getProductById,
};
