import mongoose from "mongoose";
import slugify from "slugify";
import bcrypt from "bcrypt";
import { accountModel } from "../database/models/account.model";
import { productModel } from "../database/models/product.model";
import { categoryModel } from "../database/models/category.model";
import { reviewModel } from "../database/models/reviews.model";
import { roleModel } from "../database/models/role.model";
import { permissionModel } from "../database/models/permission.model";

// ===== PERMISSIONS =====
const seedPermissions = [
  // Category Management
  { name: "View Categories", group: "Category", slug: "category.view" },
  { name: "Create Category", group: "Category", slug: "category.create" },
  { name: "Edit Category", group: "Category", slug: "category.edit" },
  { name: "Delete Category", group: "Category", slug: "category.delete" },
  
  // Product Management
  { name: "View Products", group: "Product", slug: "product.view" },
  { name: "Create Product", group: "Product", slug: "product.create" },
  { name: "Edit Product", group: "Product", slug: "product.edit" },
  { name: "Delete Product", group: "Product", slug: "product.delete" },
  
  // Account Management
  { name: "View Accounts", group: "Account", slug: "account.view" },
  { name: "Create Account", group: "Account", slug: "account.create" },
  { name: "Edit Account", group: "Account", slug: "account.edit" },
  { name: "Delete Account", group: "Account", slug: "account.delete" },
];

// ===== ROLES =====
const seedRolesWithPermissions = [
  {
    name: "Administrator",
    slugPermissions: [
      "category.view", "category.create", "category.edit", "category.delete",
      "product.view", "product.create", "product.edit", "product.delete",
      "account.view", "account.create", "account.edit", "account.delete"
    ]
  },
  {
    name: "Seller",
    slugPermissions: [
      "product.view", "product.create", "product.edit",
      "category.view"
    ]
  },
  {
    name: "Customer",
    slugPermissions: [
      "product.view", "category.view"
    ]
  },
  {
    name: "Moderator",
    slugPermissions: [
      "category.view", "category.edit",
      "product.view", "product.edit",
      "account.view"
    ]
  }
];

// ===== CATEGORIES =====
const seedCategories = [
  { title: "Điện thoại", description: "Các loại điện thoại thông minh" },
  { title: "Laptop", description: "Máy tính xách tay và desktop" },
  { title: "Tai nghe", description: "Tai nghe và loa audio" },
  { title: "Phụ kiện", description: "Phụ kiện điện tử" },
  { title: "Màn hình", description: "Màn hình máy tính" },
  { title: "Bàn phím", description: "Bàn phím cơ và không dây" },
];

// ===== USERS/ACCOUNTS =====
const seedUsers = [
  {
    name: "Admin System",
    email: "admin@example.com",
    password: "hashed_password",
    roles: ["Administrator"],
    status: "active",
    address: "Hanoi, Vietnam",
    phone: "0987654321"
  },
  {
    name: "Seller Default",
    email: "seller@example.com",
    password: "hashed_password",
    roles: ["Seller"],
    status: "active",
    address: "Ho Chi Minh City, Vietnam",
    phone: "0912345678"
  },
  {
    name: "Nguyen Van A",
    email: "customer1@example.com",
    password: "hashed_password",
    roles: ["Customer"],
    status: "active",
    address: "Ha Noi, Vietnam",
    phone: "0912345678"
  },
  {
    name: "Tran Thi B",
    email: "customer2@example.com",
    password: "hashed_password",
    roles: ["Customer"],
    status: "active",
    address: "Da Nang, Vietnam",
    phone: "0923456789"
  },
  {
    name: "Le Van C",
    email: "customer3@example.com",
    password: "hashed_password",
    roles: ["Customer"],
    status: "active",
    address: "Can Tho, Vietnam",
    phone: "0934567890"
  },
  {
    name: "Pham Thi D",
    email: "customer4@example.com",
    password: "hashed_password",
    roles: ["Customer"],
    status: "active",
    address: "Hai Phong, Vietnam",
    phone: "0945678901"
  },
];

// ===== PRODUCTS =====
const seedProducts = [
  {
    title: "iPhone 15 Pro Max",
    images: [
      "https://picsum.photos/seed/iphone15/400/400",
      "https://picsum.photos/seed/iphone15-2/400/400"
    ],
    amount: 34990000,
    currency: "VND",
    description: "iPhone 15 Pro Max 256GB - Chip A17 Pro, Camera 48MP, Titanium Design",
    stock: 45
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    images: [
      "https://picsum.photos/seed/s24ultra/400/400",
      "https://picsum.photos/seed/s24ultra-2/400/400"
    ],
    amount: 31990000,
    currency: "VND",
    description: "Galaxy S24 Ultra 256GB - Snapdragon 8 Gen 3, S Pen, Camera 200MP",
    stock: 52
  },
  {
    title: "MacBook Pro M3 14 inch",
    images: ["https://picsum.photos/seed/macbookm3/400/400"],
    amount: 49990000,
    currency: "VND",
    description: "MacBook Pro 14 inch M3 Pro - 18GB RAM, 512GB SSD, Liquid Retina XDR",
    stock: 28
  },
  {
    title: "AirPods Pro 2",
    images: ["https://picsum.photos/seed/airpods/400/400"],
    amount: 6190000,
    currency: "VND",
    description: "AirPods Pro 2 USB-C - Chống ồn chủ động, Adaptive Audio, IP54",
    stock: 120
  },
  {
    title: "iPad Air M2",
    images: [
      "https://picsum.photos/seed/ipadair/400/400",
      "https://picsum.photos/seed/ipadair-2/400/400"
    ],
    amount: 18990000,
    currency: "VND",
    description: "iPad Air M2 11 inch 128GB WiFi - Chip M2, Liquid Retina, Touch ID",
    stock: 35
  },
  {
    title: "Logitech MX Master 3S",
    images: ["https://picsum.photos/seed/mxmaster/400/400"],
    amount: 2490000,
    currency: "VND",
    description: "Chuột không dây Logitech MX Master 3S - 8K DPI, USB-C, Bluetooth",
    stock: 89
  },
  {
    title: "Sony WH-1000XM5",
    images: ["https://picsum.photos/seed/sonyxm5/400/400"],
    amount: 8490000,
    currency: "VND",
    description: "Tai nghe chống ồn Sony WH-1000XM5 - LDAC, 30h pin, Multipoint",
    stock: 56
  },
  {
    title: "Dell UltraSharp U2723QE",
    images: ["https://picsum.photos/seed/dellu27/400/400"],
    amount: 14990000,
    currency: "VND",
    description: "Màn hình 27 inch 4K IPS Black - USB-C 90W, HDR 400, 98% DCI-P3",
    stock: 22
  },
  {
    title: "Keychron K8 Pro",
    images: ["https://picsum.photos/seed/keychron/400/400"],
    amount: 2890000,
    currency: "VND",
    description: "Bàn phím cơ Keychron K8 Pro - Gateron Pro Brown, QMK/VIA, Bluetooth",
    stock: 67
  },
  {
    title: "Xiaomi 27 inch Gaming Monitor",
    images: ["https://picsum.photos/seed/xiaomi27/400/400"],
    amount: 5990000,
    currency: "VND",
    description: "Màn hình gaming Xiaomi 27 inch 2K 165Hz - IPS, HDR10, FreeSync Premium",
    stock: 41
  }
];

// ===== REVIEWS =====
const reviewComments = {
  5: [
    "Sản phẩm tuyệt vời, đóng gói rất cẩn thận và giao hàng cực nhanh!",
    "Chất lượng vượt trội so với giá tiền, dùng rất mượt và ưng ý.",
    "Thiết kế sang trọng, tính năng hoạt động cực kỳ ổn định.",
    "Rất đáng tiền mua! Nhân viên hỗ trợ nhiệt tình, 5 sao cho shop."
  ],
  4: [
    "Sản phẩm tốt, giao hàng hơi lâu một tí nhưng đóng gói rất chắc chắn.",
    "Dùng khá ổn áp, thiết kế đẹp và sang trọng, đúng như mô tả.",
    "Chất lượng sản phẩm tốt, chế độ bảo hành rõ ràng, sẽ tiếp tục ủng hộ."
  ],
  3: [
    "Sản phẩm dùng tạm được, tuy nhiên khâu giao hàng cần cải thiện hơn.",
    "Đóng gói hơi sơ sài, sản phẩm ở mức trung bình so với kỳ vọng.",
    "Chất lượng tạm ổn so với tầm giá."
  ]
};

const seed = async () => {
  try {
    const url = process.env.MONGODB_URL;
    if (!url) {
      throw new Error("MONGODB_URL is not defined in .env");
    }

    console.log("🔄 Connecting to MongoDB...");
    await mongoose.connect(url);
    console.log("✅ Connected to MongoDB\n");

    // ===== CLEAN ALL COLLECTIONS =====
    console.log("🧹 Clearing all collections...");
    await permissionModel.deleteMany({});
    await roleModel.deleteMany({});
    await categoryModel.deleteMany({});
    await accountModel.deleteMany({});
    await productModel.deleteMany({});
    await reviewModel.deleteMany({});
    console.log("✅ All collections cleared\n");

    // ===== SEED PERMISSIONS =====
    console.log("📝 Seeding permissions...");
    const createdPermissions = await permissionModel.insertMany(seedPermissions);
    console.log(`✅ Created ${createdPermissions.length} permissions\n`);

    // ===== SEED ROLES WITH PERMISSIONS =====
    console.log("👥 Seeding roles with permissions...");
    for (const roleData of seedRolesWithPermissions) {
      const permissionIds = createdPermissions
        .filter(p => roleData.slugPermissions.includes(p.slug))
        .map(p => p._id);

      await roleModel.create({
        name: roleData.name,
        permissionIds: permissionIds
      });
    }
    console.log(`✅ Created ${seedRolesWithPermissions.length} roles\n`);

    // ===== SEED CATEGORIES =====
    console.log("📂 Seeding categories...");
    const createdCategories = await categoryModel.insertMany(seedCategories);
    console.log(`✅ Created ${createdCategories.length} categories\n`);

    // ===== SEED USERS/ACCOUNTS =====
    console.log("👤 Seeding users/accounts...");
    
    // Hash passwords before inserting
    const saltRounds = 10;
    const usersWithHashedPasswords = await Promise.all(
      seedUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, saltRounds)
      }))
    );
    
    const createdUsers = await accountModel.insertMany(usersWithHashedPasswords);
    console.log(`✅ Created ${createdUsers.length} users\n`);

    // Find seller account
    const sellerIndex = seedUsers.findIndex(u => u.roles.includes("Seller"));
    const seller = createdUsers[sellerIndex] || createdUsers[1];

    // Find customer accounts for reviews
    const customers = createdUsers.filter((_: any, idx: number) => 
      seedUsers[idx].roles.includes("Customer")
    );

    // ===== SEED PRODUCTS =====
    console.log("🛍️ Seeding products...");
    const productsToInsert = seedProducts.map((p, idx) => ({
      title: p.title,
      images: p.images,
      amount: p.amount,
      currency: p.currency,
      description: p.description,
      stock: p.stock,
      sellerId: seller._id,
      status: "active",
      discountPercentage: Math.random() > 0.6 ? Math.floor(Math.random() * 15) + 5 : 0,
      slug: slugify(p.title, { lower: true }) + "-" + (idx + 1),
      rating: 0,
      ratingCount: 0,
      sold: Math.floor(Math.random() * 200) + 10,
      categoryId: createdCategories[idx % createdCategories.length]._id
    }));

    const createdProducts = await productModel.insertMany(productsToInsert);
    console.log(`✅ Created ${createdProducts.length} products\n`);

    // ===== SEED REVIEWS =====
    console.log("⭐ Seeding reviews...");
    const reviewsToInsert: any[] = [];

    for (const product of createdProducts) {
      const reviewCount = Math.floor(Math.random() * 4) + 2; // 2 to 5 reviews per product
      for (let i = 0; i < reviewCount; i++) {
        const randomCustomer = customers[Math.floor(Math.random() * customers.length)];
        const stars = Math.floor(Math.random() * 3) + 3; // 3 to 5 stars
        const commentList = reviewComments[stars as keyof typeof reviewComments] || reviewComments[3];
        const comment = commentList[Math.floor(Math.random() * commentList.length)];

        reviewsToInsert.push({
          productId: product._id,
          userId: randomCustomer._id,
          comment: comment,
          star: stars
        });
      }
    }

    const createdReviews = await reviewModel.insertMany(reviewsToInsert);
    console.log(`✅ Created ${createdReviews.length} reviews\n`);

    // ===== UPDATE PRODUCT RATINGS =====
    console.log("📊 Updating product ratings...");
    for (const product of createdProducts) {
      const productReviews = createdReviews.filter(
        r => r.productId.toString() === product._id.toString()
      );
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
    console.log("✅ Product ratings updated\n");

    await mongoose.disconnect();
    console.log("🎉 All seeds successfully completed!");
    console.log("📊 Summary:");
    console.log(`   - Permissions: ${createdPermissions.length}`);
    console.log(`   - Roles: ${seedRolesWithPermissions.length}`);
    console.log(`   - Categories: ${createdCategories.length}`);
    console.log(`   - Users: ${createdUsers.length}`);
    console.log(`   - Products: ${createdProducts.length}`);
    console.log(`   - Reviews: ${createdReviews.length}`);

  } catch (error) {
    console.error("❌ Seed error:", error);
    process.exit(1);
  }
};

seed();
