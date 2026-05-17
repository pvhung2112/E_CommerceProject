import mongoose from "mongoose";
import { productModel } from "../database/models/product.model";

const products = [
  {
    name: "iPhone 15 Pro Max",
    images: [
      "https://picsum.photos/seed/iphone15/400/400",
      "https://picsum.photos/seed/iphone15-2/400/400"
    ],
    amount: 34990000,
    currency: "VND",
    description: "iPhone 15 Pro Max 256GB - Chip A17 Pro, Camera 48MP, Titanium Design",
    createAt: new Date()
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    images: [
      "https://picsum.photos/seed/s24ultra/400/400",
      "https://picsum.photos/seed/s24ultra-2/400/400"
    ],
    amount: 31990000,
    currency: "VND",
    description: "Galaxy S24 Ultra 256GB - Snapdragon 8 Gen 3, S Pen, Camera 200MP",
    createAt: new Date()
  },
  {
    name: "MacBook Pro M3 14 inch",
    images: [
      "https://picsum.photos/seed/macbookm3/400/400"
    ],
    amount: 49990000,
    currency: "VND",
    description: "MacBook Pro 14 inch M3 Pro - 18GB RAM, 512GB SSD, Liquid Retina XDR",
    createAt: new Date()
  },
  {
    name: "AirPods Pro 2",
    images: [
      "https://picsum.photos/seed/airpods/400/400"
    ],
    amount: 6190000,
    currency: "VND",
    description: "AirPods Pro 2 USB-C - Chống ồn chủ động, Adaptive Audio, IP54",
    createAt: new Date()
  },
  {
    name: "iPad Air M2",
    images: [
      "https://picsum.photos/seed/ipadair/400/400",
      "https://picsum.photos/seed/ipadair-2/400/400"
    ],
    amount: 18990000,
    currency: "VND",
    description: "iPad Air M2 11 inch 128GB WiFi - Chip M2, Liquid Retina, Touch ID",
    createAt: new Date()
  },
  {
    name: "Logitech MX Master 3S",
    images: [
      "https://picsum.photos/seed/mxmaster/400/400"
    ],
    amount: 2490000,
    currency: "VND",
    description: "Chuột không dây Logitech MX Master 3S - 8K DPI, USB-C, Bluetooth",
    createAt: new Date()
  },
  {
    name: "Sony WH-1000XM5",
    images: [
      "https://picsum.photos/seed/sonyxm5/400/400"
    ],
    amount: 8490000,
    currency: "VND",
    description: "Tai nghe chống ồn Sony WH-1000XM5 - LDAC, 30h pin, Multipoint",
    createAt: new Date()
  },
  {
    name: "Dell UltraSharp U2723QE",
    images: [
      "https://picsum.photos/seed/dellu27/400/400"
    ],
    amount: 14990000,
    currency: "VND",
    description: "Màn hình 27 inch 4K IPS Black - USB-C 90W, HDR 400, 98% DCI-P3",
    createAt: new Date()
  },
  {
    name: "Keychron K8 Pro",
    images: [
      "https://picsum.photos/seed/keychron/400/400"
    ],
    amount: 2890000,
    currency: "VND",
    description: "Bàn phím cơ Keychron K8 Pro - Gateron Pro Brown, QMK/VIA, Bluetooth",
    createAt: new Date()
  },
  {
    name: "Xiaomi 27 inch Gaming Monitor",
    images: [
      "https://picsum.photos/seed/xiaomi27/400/400"
    ],
    amount: 5990000,
    currency: "VND",
    description: "Màn hình gaming Xiaomi 27 inch 2K 165Hz - IPS, HDR10, FreeSync Premium",
    createAt: new Date()
  }
];

const seed = async () => {
  try {
    const url = process.env.MONGODB_URL;
    if (!url) {
      throw new Error("MONGODB_URL is not defined in .env");
    }
    await mongoose.connect(url);
    console.log("Connected to MongoDB");

    // Xóa data cũ
    await productModel.deleteMany({});
    console.log("Cleared old products");

    // Insert data mới
    const result = await productModel.insertMany(products);
    console.log(`Seeded ${result.length} products`);

    await mongoose.disconnect();
    console.log("Done! Disconnected.");
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seed();
