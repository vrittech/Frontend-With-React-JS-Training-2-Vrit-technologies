import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";
import Cors from 'cors';


const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

export default async function handle(req, res) {
  await new Promise((resolve, reject) => {
    cors(req, res, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
  const { method } = req;

  await mongooseConnect();
  // await isAdminRequest(req, res);

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  if (method === 'POST') {
    const { title, description, price, images, category, properties } = req.body;
    const productDoc = await Product.create({
      title, description, price, images, category, properties,
    })
    res.json(productDoc);
  }

  if (method === 'PUT') {
    const { title, description, price, images, category, properties, _id } = req.body;
    await Product.updateOne({ _id }, { title, description, price, images, category, properties });
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}