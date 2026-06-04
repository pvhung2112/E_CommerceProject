import mongoose from "mongoose";
import { productModel } from "../database/models/product.model";
import { accountModel } from "../database/models/account.model";
import { reviewModel } from "../database/models/reviews.model";
import { roleModel } from "../database/models/role.model";
import slugify from "slugify";

const seedRoles = [
  {
    name: "Administrator",
    permissionIds: []
  },
  {
    name: "Seller",
    permissionIds: []
  },
  {
    name: "Customer",
    permissionIds: []
  },
  {
    name: "Moderator",
    permissionIds: []
  }
];

const seedUsers = [
  {
    name: "Default Seller",
    email: "seller@example.com",
    roles: ["admin", "seller"],
    status: "active",
    address: "Hanoi, Vietnam",
    phone: "0987654321"
  },
  {
    name: "Nguyen Van A",
    email: "customer1@example.com",
    roles: ["user"],
    status: "active",
    address: "Ho Chi Minh City, Vietnam",
    phone: "0912345678"
  },
  {
    name: "Tran Thi B",
    email: "customer2@example.com",
    roles: ["user"],
    status: "active",
    address: "Da Nang, Vietnam",
    phone: "0923456789"
  },
  {
    name: "Le Van C",
    email: "customer3@example.com",
    roles: ["user"],
    status: "active",
    address: "Can Tho, Vietnam",
    phone: "0934567890"
  },
  {
    name: "Pham Thi D",
    email: "customer4@example.com",
    roles: ["user"],
    status: "active",
    address: "Hai Phong, Vietnam",
    phone: "0945678901"
  }
];

const rawProducts = [
  {
    name: "iPhone 15 Pro Max",
    images: [
      "https://picsum.photos/seed/iphone15/400/400",
      "https://picsum.photos/seed/iphone15-2/400/400"
    ],
    amount: 34990000,
    currency: "VND",
    description: "iPhone 15 Pro Max 256GB - Chip A17 Pro, Camera 48MP, Titanium Design"
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    images: [
      "https://picsum.photos/seed/s24ultra/400/400",
      "https://picsum.photos/seed/s24ultra-2/400/400"
    ],
    amount: 31990000,
    currency: "VND",
    description: "Galaxy S24 Ultra 256GB - Snapdragon 8 Gen 3, S Pen, Camera 200MP"
  },
  {
    name: "MacBook Pro M3 14 inch",
    images: [
      "https://picsum.photos/seed/macbookm3/400/400"
    ],
    amount: 49990000,
    currency: "VND",
    description: "MacBook Pro 14 inch M3 Pro - 18GB RAM, 512GB SSD, Liquid Retina XDR"
  },
  {
    name: "AirPods Pro 2",
    images: [
      "https://picsum.photos/seed/airpods/400/400"
    ],
    amount: 6190000,
    currency: "VND",
    description: "AirPods Pro 2 USB-C - Chống ồn chủ động, Adaptive Audio, IP54"
  },
  {
    name: "iPad Air M2",
    images: [
      "https://picsum.photos/seed/ipadair/400/400",
      "https://picsum.photos/seed/ipadair-2/400/400"
    ],
    amount: 18990000,
    currency: "VND",
    description: "iPad Air M2 11 inch 128GB WiFi - Chip M2, Liquid Retina, Touch ID"
  },
  {
    name: "Logitech MX Master 3S",
    images: [
      "https://picsum.photos/seed/mxmaster/400/400"
    ],
    amount: 2490000,
    currency: "VND",
    description: "Chuột không dây Logitech MX Master 3S - 8K DPI, USB-C, Bluetooth"
  },
  {
    name: "Sony WH-1000XM5",
    images: [
      "https://picsum.photos/seed/sonyxm5/400/400"
    ],
    amount: 8490000,
    currency: "VND",
    description: "Tai nghe chống ồn Sony WH-1000XM5 - LDAC, 30h pin, Multipoint"
  },
  {
    name: "Dell UltraSharp U2723QE",
    images: [
      "https://picsum.photos/seed/dellu27/400/400"
    ],
    amount: 14990000,
    currency: "VND",
    description: "Màn hình 27 inch 4K IPS Black - USB-C 90W, HDR 400, 98% DCI-P3"
  },
  {
    name: "Keychron K8 Pro",
    images: [
      "https://picsum.photos/seed/keychron/400/400"
    ],
    amount: 2890000,
    currency: "VND",
    description: "Bàn phím cơ Keychron K8 Pro - Gateron Pro Brown, QMK/VIA, Bluetooth"
  },
  {
    name: "Xiaomi 27 inch Gaming Monitor",
    images: [
      "https://picsum.photos/seed/xiaomi27/400/400"
    ],
    amount: 5990000,
    currency: "VND",
    description: "Màn hình gaming Xiaomi 27 inch 2K 165Hz - IPS, HDR10, FreeSync Premium"
  }
];

const comments5Stars = [
  "Sản phẩm tuyệt vời, đóng gói rất cẩn thận và giao hàng cực nhanh!",
  "Chất lượng vượt trội so với giá tiền, dùng rất mượt và ưng ý.",
  "Thiết kế sang trọng, tính năng hoạt động cực kỳ ổn định.",
  "Rất đáng tiền mua! Nhân viên hỗ trợ nhiệt tình, 5 sao cho shop."
];

const comments4Stars = [
  "Sản phẩm tốt, giao hàng hơi lâu một tí nhưng đóng gói rất chắc chắn.",
  "Dùng khá ổn áp, thiết kế đẹp và sang trọng, đúng như mô tả.",
  "Chất lượng sản phẩm tốt, chế độ bảo hành rõ ràng, sẽ tiếp tục ủng hộ."
];

const comments3Stars = [
  "Sản phẩm dùng tạm được, tuy nhiên khâu giao hàng cần cải thiện hơn.",
  "Đóng gói hơi sơ sài, sản phẩm ở mức trung bình so với kỳ vọng.",
  "Chất lượng tạm ổn so với tầm giá."
];

const seed = async () => {
  try {
    const url = process.env.MONGODB_URL;
    if (!url) {
      throw new Error("MONGODB_URL is not defined in .env");
    }
    await mongoose.connect(url);
    console.log("Connected to MongoDB");

    // 1. Dọn dẹp dữ liệu cũ của các bảng
    await accountModel.deleteMany({});
    console.log("Cleared old users");
    await productModel.deleteMany({});
    console.log("Cleared old products");
    await reviewModel.deleteMany({});
    console.log("Cleared old reviews");
    await roleModel.deleteMany({});
    console.log("Cleared old roles");

    // Seed Roles
    const createdRoles = await roleModel.insertMany(seedRoles);
    console.log(`Seeded ${createdRoles.length} roles successfully`);

    // 2. Seed Users
    const createdUsers = await accountModel.insertMany(seedUsers);
    console.log(`Seeded ${createdUsers.length} users successfully`);

    const seller = createdUsers.find((_: any, idx: number) => seedUsers[idx].roles.includes("seller")) || createdUsers[0];
    const customers = createdUsers.filter((_: any, idx: number) => seedUsers[idx].roles.includes("user"));

    // 3. Seed Products ban đầu
    const productsToInsert = rawProducts.map((p, idx) => ({
      title: p.name,
      images: p.images,
      amount: p.amount,
      currency: p.currency,
      description: p.description,
      stock: Math.floor(Math.random() * 150) + 20, // stock ngẫu nhiên từ 20 đến 170
      sellerId: seller._id,
      status: "active",
      discountPercentage: Math.random() > 0.5 ? Math.floor(Math.random() * 15) + 5 : 0, // discount 5-20% hoặc 0%
      slug: slugify(p.name, { lower: true }) + "-" + (idx + 1),
      rating: 0,
      ratingCount: 0,
      sold: Math.floor(Math.random() * 200) + 10 // sold ngẫu nhiên từ 10 đến 210
    }));

    const createdProducts = await productModel.insertMany(productsToInsert);
    console.log(`Seeded ${createdProducts.length} products successfully`);

    // 4. Seed Reviews ngẫu nhiên
    const reviewsToInsert: any[] = [];

    // Mỗi sản phẩm sẽ có từ 1 đến 3 đánh giá ngẫu nhiên
    for (const product of createdProducts) {
      const reviewCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 reviews
      for (let i = 0; i < reviewCount; i++) {
        // Chọn ngẫu nhiên customer đánh giá
        const randomCustomer = customers[Math.floor(Math.random() * customers.length)];

        // Chọn số sao ngẫu nhiên (3, 4 hoặc 5)
        const stars = Math.floor(Math.random() * 3) + 3; // 3 to 5 stars

        // Chọn comment phù hợp với số sao
        let comment = "";
        if (stars === 5) {
          comment = comments5Stars[Math.floor(Math.random() * comments5Stars.length)];
        } else if (stars === 4) {
          comment = comments4Stars[Math.floor(Math.random() * comments4Stars.length)];
        } else {
          comment = comments3Stars[Math.floor(Math.random() * comments3Stars.length)];
        }

        reviewsToInsert.push({
          productId: product._id,
          userId: randomCustomer._id,
          comment: comment,
          star: stars
        });
      }
    }

    const createdReviews = await reviewModel.insertMany(reviewsToInsert);
    console.log(`Seeded ${createdReviews.length} reviews successfully`);

    // 5. Tính toán lại rating và ratingCount cho từng sản phẩm
    console.log("Updating product rating averages...");
    for (const product of createdProducts) {
      const productReviews = createdReviews.filter(r => r.productId.toString() === product._id.toString());
      if (productReviews.length > 0) {
        const totalStars = productReviews.reduce((sum, r) => sum + r.star, 0);
        const averageRating = Math.round((totalStars / productReviews.length) * 10) / 10;

        await productModel.updateOne(
          { _id: product._id },
          {
            $set: {
              rating: averageRating,
              ratingCount: productReviews.length
            }
          }
        );
      }
    }
    console.log("Product ratings updated successfully!");

    await mongoose.disconnect();
    console.log("All seeds successfully completed! Disconnected.");
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seed();
